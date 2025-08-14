#!/usr/bin/env node
// generateMimeTypeStubs.js
// Script: Read supportedExtensions and supportedMimeTypes from `file-type` module, generate Swift file Supported.swift
import { supportedExtensions, supportedMimeTypes } from 'file-type';
import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';
import { mimeToData } from './mapping.js';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// Sort and convert to array, remove duplicates
const extArray = Array.from(new Set(supportedExtensions)).sort();
const mimeArray = Array.from(new Set(supportedMimeTypes)).sort();

console.log("Found", Object.keys(mimeToData).filter(m => mimeToData[m].magicNumber != null).length, "magic number definitions");

console.log("Original supportedExtensions size:", supportedExtensions.size);
console.log("Deduplicated Extensions:", extArray.length);
console.log("Original supportedMimeTypes size:", supportedMimeTypes.size);  
console.log("Deduplicated MimeTypes:", mimeArray.length);
console.log("MimeToData:", Object.keys(mimeToData).length, "mappings");

// Check for missing mappings
const missingMimeToExt = mimeArray.filter(mime => !mimeToData[mime]);
const extraMimeToExt = Object.keys(mimeToData).filter(mime => !mimeArray.includes(mime));

console.log("\n=== Missing MIME to Extension Mappings ===");
if (missingMimeToExt.length > 0) {
  console.log("Missing MIME types in mimeToData:", missingMimeToExt.length);
  missingMimeToExt.forEach(mime => console.log("  -", mime));
} else {
  console.log("✅ All MIME types have corresponding extension mappings");
}

console.log("\n=== Extra MIME to Extension Mappings ===");
if (extraMimeToExt.length > 0) {
  console.log("Extra MIME types in mimeToData:", extraMimeToExt.length);
  extraMimeToExt.forEach(mime => console.log("  +", mime));
} else {
  console.log("✅ No extra MIME types in mapping table");
}

// Check extensions
const mappedExtensions = Object.values(mimeToData).map(data => data.ext).filter(Boolean).sort();
const missingExtensions = extArray.filter(ext => !mappedExtensions.includes(ext));
const extraExtensions = mappedExtensions.filter(ext => !extArray.includes(ext));

console.log("\n=== Missing Extensions ===");
if (missingExtensions.length > 0) {
  console.log("Extensions not mapped:", missingExtensions.length);
  missingExtensions.forEach(ext => console.log("  -", ext));
} else {
  console.log("✅ All extensions are mapped");
}

console.log("\n=== Extra Extensions ===");
if (extraExtensions.length > 0) {
  console.log("Extra extensions in mapping:", extraExtensions.length);
  extraExtensions.forEach(ext => console.log("  +", ext));
} else {
  console.log("✅ No extra extensions in mapping table");
}

// Manually add some extensions not included in file-type library
const additionalExtensions = ['tar.gz'];
const allExtensions = [...extArray, ...additionalExtensions].sort();

// Convert extension to valid Swift enum case names
function toSwiftCaseName(ext) {
  // Special handling: convert digits at the beginning to English words
  const digitWords = {
    '0': 'zero', '1': 'one', '2': 'two', '3': 'three', '4': 'four',
    '5': 'five', '6': 'six', '7': 'seven', '8': 'eight', '9': 'nine'
  };
  
  let caseName = ext;
  
  // If starts with digit, replace with English words
  if (/^\d/.test(caseName)) {
    caseName = caseName.replace(/^\d+/, match => 
      match.split('').map(digit => digitWords[digit]).join('')
    );
  }
  
  // Replace special characters with valid identifiers
  caseName = caseName
    .replace(/\./g, '')  // Remove dots (tar.gz -> targz)
    .replace(/-/g, '')   // Remove hyphens
    .replace(/\+/g, 'plus'); // Replace plus signs
  
  // If it's a Swift keyword, wrap with backticks
  const swiftKeywords = ['class', 'import', 'var', 'let', 'func', 'return', 'if', 'else', 'for', 'while', 'switch', 'case', 'default'];
  if (swiftKeywords.includes(caseName)) {
    return `\`${caseName}\``;
  }
  
  return caseName;
}

// Target Swift file path
const destFile = path.resolve(__dirname, '../Sources/FileType/Supported.swift');

const now = new Date();

// Build Swift file content
const lines = [];
lines.push('//');
lines.push('// Supported.swift');
lines.push('// Auto-generated, do not edit manually');
lines.push('//');
lines.push(`//   Created by wong on ${now.toLocaleTimeString()} ${now.toLocaleDateString()}.`);
lines.push('//   https://www.npmjs.com/package/file-type');
lines.push('//');
lines.push('');
lines.push('import Foundation');
lines.push('');

// Generate Extensions enum
lines.push('public enum Extensions: String, CaseIterable, Identifiable {');
lines.push('    public var id: String { self.rawValue }');
allExtensions.forEach(ext => {
  const caseName = toSwiftCaseName(ext);
  lines.push(`    case ${caseName} = "${ext}"`);
});
lines.push('}');
lines.push('');

lines.push(`/// ${mimeArray.length}`);
lines.push('public let mimeTypes: Set<String> = Set([');
mimeArray.forEach(mime => {
  lines.push(`    "${mime}",`);
});
lines.push('])');
lines.push('');

lines.push('public extension MimeType {');
lines.push('    nonisolated(unsafe) static let mimeTypesAll: [MimeType] = [');
mimeArray.forEach(mime => {
  const ext = mimeToData[mime].ext || 'dat'; // Default to 'dat' if no match
  const caseName = toSwiftCaseName(ext);
  const magicNumber = mimeToData[mime].magicNumber;
  const bytesCount = mimeToData[mime].bytesCount;
  
  
  lines.push(`        .init(mime: "${mime}", type: .${caseName}, bytesCount: ${bytesCount}, matches: { bytes, _ in`);
  
  if (magicNumber && magicNumber.length > 0) {
    lines.push(`           return ${magicNumber.join(' && ')}`);
  } else {
    lines.push(`            // TODO: Implement magic number check for ${mime}`);
    lines.push(`            return false`);
  }
  
  lines.push(`        }),`);
});
lines.push('    ]');
lines.push('}');
lines.push('');

// Write to file
fs.writeFileSync(destFile, lines.join('\n'));
console.log(`Generated Swift file at ${destFile}`);