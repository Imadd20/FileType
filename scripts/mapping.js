
// MIME type 到扩展名的映射关系
export const mimeToData = {
  'image/jpeg': { 
    ext: 'jpg',
    bytesCount: 4,
    magicNumber: [
      "bytes[0...2] == [0xFF, 0xD8, 0xFF]"
    ]
  },
  'image/jls': { 
    ext: 'jls',
    bytesCount: 4,
    magicNumber: [
      // 同时检查前3个字节和第4个字节
      "bytes[0...2] == [0xFF, 0xD8, 0xFF] && bytes[3] == 0xF7"
    ]
  },
  'image/png': { 
    ext: 'png',
    bytesCount: 4,
    magicNumber: ["bytes[0...3] == [0x89, 0x50, 0x4E, 0x47]"]
  },
  'image/gif': { 
    ext: 'gif',
    bytesCount: 4,
    magicNumber: ["bytes[0...2] == [0x47, 0x49, 0x46]"]
  },
  'image/webp': { 
    ext: 'webp',
    bytesCount: 4,
    magicNumber: ["bytes[8...11] == [0x57, 0x45, 0x42, 0x50]"]
  },
  'image/flif': { 
    ext: 'flif',
    bytesCount: 4,
    magicNumber: ["bytes[0...3] == [0x46, 0x4C, 0x49, 0x46]"]
  },
  'image/x-xcf': { 
    ext: 'xcf',
    bytesCount: 4,
    magicNumber: null
  },
  'image/x-canon-cr2': { 
    ext: 'cr2',
    bytesCount: 4,
    magicNumber: [`(bytes[0...3] == [0x49, 0x49, 0x2A, 0x00] || bytes[0...3] == [0x4D, 0x4D, 0x00, 0x2A]) &&
          (bytes[8...9] == [0x43, 0x52])`]
  },
  'image/x-canon-cr3': { 
    ext: 'cr3',
    bytesCount: 4,
    magicNumber: null
  },
  'image/tiff': { 
    ext: 'tif',
    bytesCount: 4,
    magicNumber: [
      "(bytes[0...3] == [0x49, 0x49, 0x2A, 0x00]) || (bytes[0...3] == [0x4D, 0x4D, 0x00, 0x2A])"
    ]
  },
  'image/bmp': { 
    ext: 'bmp',
    bytesCount: 2,
    magicNumber: ["bytes[0...1] == [0x42, 0x4D]"]
  },
  'image/vnd.ms-photo': { 
    ext: 'jxr',
    bytesCount: 3,
    magicNumber: ["bytes[0...2] == [0x49, 0x49, 0xBC]"]
  },
  'image/vnd.adobe.photoshop': { 
    ext: 'psd',
    bytesCount: 4,
    magicNumber: ["bytes[0...3] == [0x38, 0x42, 0x50, 0x53]"]
  },
  'application/x-indesign': { 
    ext: 'indd',
    bytesCount: 4,
    magicNumber: null
  },
  'application/epub+zip': { 
    ext: 'epub',
    bytesCount: 58,
    magicNumber: [
      "(bytes[0...3] == [0x50, 0x4B, 0x03, 0x04]) && (bytes[30...57] == [0x6D, 0x69, 0x6D, 0x65, 0x74, 0x79, 0x70, 0x65, 0x61, 0x70, 0x70, 0x6C, 0x69, 0x63, 0x61, 0x74, 0x69, 0x6F, 0x6E, 0x2F, 0x65, 0x70, 0x75, 0x62, 0x2B, 0x7A, 0x69, 0x70])"
    ]
  },
  'application/x-xpinstall': { 
    ext: 'xpi',
    bytesCount: 50,
    magicNumber: [
      "(bytes[0...3] == [0x50, 0x4B, 0x03, 0x04]) && (bytes[30...49] == [0x4D, 0x45, 0x54, 0x41, 0x2D, 0x49, 0x4E, 0x46, 0x2F, 0x6D, 0x6F, 0x7A, 0x69, 0x6C, 0x6C, 0x61, 0x2E, 0x72, 0x73, 0x61])"
    ]
  },
  'application/vnd.ms-powerpoint.slideshow.macroenabled.12': { 
    ext: 'ppsm',
    bytesCount: 4,
    magicNumber: null
  },
  'application/vnd.oasis.opendocument.text': { 
    ext: 'odt',
    bytesCount: 4,
    magicNumber: null
  },
  'application/vnd.oasis.opendocument.spreadsheet': { 
    ext: 'ods',
    bytesCount: 4,
    magicNumber: null
  },
  'application/vnd.oasis.opendocument.presentation': { 
    ext: 'odp',
    bytesCount: 4,
    magicNumber: null
  },
  'application/vnd.openxmlformats-officedocument.wordprocessingml.document': { 
    ext: 'docx',
    bytesCount: 4,
    magicNumber: null
  },
  'application/vnd.openxmlformats-officedocument.presentationml.presentation': { 
    ext: 'pptx',
    bytesCount: 4,
    magicNumber: null
  },
  'application/vnd.openxmlformats-officedocument.spreadsheetml.sheet': { 
    ext: 'xlsx',
    bytesCount: 4,
    magicNumber: null
  },
  'application/vnd.openxmlformats-officedocument.presentationml.slideshow': { 
    ext: 'ppsx',
    bytesCount: 4,
    magicNumber: null
  },
  'application/zip': { 
    ext: 'zip',
    bytesCount: 50,
    magicNumber: [
      "(bytes[0...1] == [0x50, 0x4B]) && (bytes[2] == 0x3 || bytes[2] == 0x5 || bytes[2] == 0x7) && (bytes[3] == 0x4 || bytes[3] == 0x6 || bytes[3] == 0x8)"
    ]
  },
  'application/x-tar': { 
    ext: 'tar',
    bytesCount: 262,
    magicNumber: ["bytes[257...261] == [0x75, 0x73, 0x74, 0x61, 0x72]"]
  },
  'application/x-rar-compressed': { 
    ext: 'rar',
    bytesCount: 7,
    magicNumber: [
      "(bytes[0...5] == [0x52, 0x61, 0x72, 0x21, 0x1A, 0x07]) && (bytes[6] == 0x0 || bytes[6] == 0x1)"
    ]
  },
  'application/gzip': { 
    ext: 'gz',
    bytesCount: 3,
    magicNumber: ["bytes[0...2] == [0x1F, 0x8B, 0x08]"]
  },
  'application/x-bzip2': { 
    ext: 'bz2',
    bytesCount: 3,
    magicNumber: ["bytes[0...2] == [0x42, 0x5A, 0x68]"]
  },
  'application/x-7z-compressed': { 
    ext: '7z',
    bytesCount: 6,
    magicNumber: ["bytes[0...5] == [0x37, 0x7A, 0xBC, 0xAF, 0x27, 0x1C]"]
  },
  'application/x-apple-diskimage': { 
    ext: 'dmg',
    bytesCount: 2,
    magicNumber: ["bytes[0...1] == [0x78, 0x01]"]
  },
  'application/vnd.apache.arrow.file': { 
    ext: 'arrow',
    bytesCount: 8,
    magicNumber: ["bytes[0...7] == [0x41, 0x52, 0x52, 0x4F, 0x57, 0x31, 0x00, 0x00]"]
  },
  'video/mp4': { 
    ext: 'mp4',
    bytesCount: 28,
    magicNumber: [
      "(bytes[0...2] == [0x00, 0x00, 0x00] && (bytes[3] == 0x18 || bytes[3] == 0x20) && bytes[4...7] == [0x66, 0x74, 0x79, 0x70]) || (bytes[0...3] == [0x33, 0x67, 0x70, 0x35]) || (bytes[0...11] == [0x00, 0x00, 0x00, 0x1C, 0x66, 0x74, 0x79, 0x70, 0x6D, 0x70, 0x34, 0x32] && bytes[16...27] == [0x6D, 0x70, 0x34, 0x31, 0x6D, 0x70, 0x34, 0x32, 0x69, 0x73, 0x6F, 0x6D]) || (bytes[0...11] == [0x00, 0x00, 0x00, 0x1C, 0x66, 0x74, 0x79, 0x70, 0x69, 0x73, 0x6F, 0x6D]) || (bytes[0...11] == [0x00, 0x00, 0x00, 0x1C, 0x66, 0x74, 0x79, 0x70, 0x6D, 0x70, 0x34, 0x32])"
    ]
  },
  'audio/midi': { 
    ext: 'mid',
    bytesCount: 4,
    magicNumber: ["bytes[0...3] == [0x4D, 0x54, 0x68, 0x64]"]
  },
  'video/matroska': { 
    ext: 'mkv',
    bytesCount: 4,
    magicNumber: ["bytes[0...3] == [0x1A, 0x45, 0xDF, 0xA3]"]
  },
  'video/webm': { 
    ext: 'webm',
    bytesCount: 4,
    magicNumber: ["bytes[0...3] == [0x1A, 0x45, 0xDF, 0xA3]"]
  },
  'video/quicktime': { 
    ext: 'mov',
    bytesCount: 8,
    magicNumber: ["bytes[0...7] == [0x00, 0x00, 0x00, 0x14, 0x66, 0x74, 0x79, 0x70]"]
  },
  'video/vnd.avi': { 
    ext: 'avi',
    bytesCount: 11,
    magicNumber: [
      "(bytes[0...3] == [0x52, 0x49, 0x46, 0x46]) && (bytes[8...10] == [0x41, 0x56, 0x49])"
    ]
  },
  'audio/wav': { 
    ext: 'wav',
    bytesCount: 12,
    magicNumber: [
      "(bytes[0...3] == [0x52, 0x49, 0x46, 0x46]) && (bytes[8...11] == [0x57, 0x41, 0x56, 0x45])"
    ]
  },
  'audio/qcelp': { 
    ext: 'qcp',
    bytesCount: 12,
    magicNumber: [
      "(bytes[0...3] == [0x52, 0x49, 0x46, 0x46]) && (bytes[8...11] == [0x51, 0x4C, 0x43, 0x4D])"
    ]
  },
  'audio/x-ms-asf': { 
    ext: 'asf',
    bytesCount: 10,
    magicNumber: [
      "bytes[0...9] == [0x30, 0x26, 0xB2, 0x75, 0x8E, 0x66, 0xCF, 0x11, 0xA6, 0xD9]"
    ]
  },
  'video/x-ms-asf': { 
    ext: 'asf',
    bytesCount: 10,
    magicNumber: [
      "bytes[0...9] == [0x30, 0x26, 0xB2, 0x75, 0x8E, 0x66, 0xCF, 0x11, 0xA6, 0xD9]"
    ]
  },
  'application/vnd.ms-asf': { 
    ext: 'asf',
    bytesCount: 10,
    magicNumber: [
      "bytes[0...9] == [0x30, 0x26, 0xB2, 0x75, 0x8E, 0x66, 0xCF, 0x11, 0xA6, 0xD9]"
    ]
  },
  'video/mpeg': { 
    ext: 'mpg',
    bytesCount: 4,
    magicNumber: [
      "bytes[0...2] == [0x00, 0x00, 0x01] && (bytes[3] & 0xF0) == 0xB0"
    ]
  },
  'video/3gpp': { 
    ext: '3gp',
    bytesCount: 12,
    magicNumber: [
      "bytes[4...7] == [0x66, 0x74, 0x79, 0x70] && (bytes[8...10] == [0x33, 0x67, 0x70] || bytes[8...11] == [0x33, 0x67, 0x70, 0x34] || bytes[8...11] == [0x33, 0x67, 0x70, 0x35] || bytes[8...11] == [0x33, 0x67, 0x70, 0x36])"
    ]
  },
  'audio/mpeg': { 
    ext: 'mp3',
    bytesCount: 3,
    magicNumber: [
      "(bytes[0...2] == [0x49, 0x44, 0x33]) || (bytes[0...1] == [0xFF, 0xFB])"
    ]
  },
    'audio/mp4': { 
    ext: 'm4a',
    bytesCount: 11,
    magicNumber: [
      "(bytes[0...3] == [0x4D, 0x34, 0x41, 0x20]) || (bytes[4...10] == [0x66, 0x74, 0x79, 0x70, 0x4D, 0x34, 0x41])"
    ]
  },
  'video/ogg': { 
    ext: 'ogv',
    bytesCount: 36,
    magicNumber: [
      "bytes[0...3] == [0x4F, 0x67, 0x67, 0x53] && bytes[28...34] == [0x80, 0x74, 0x68, 0x65, 0x6F, 0x72, 0x61]"
    ]
  },
  'audio/ogg': { 
    ext: 'ogg',
    bytesCount: 4,
    magicNumber: ["bytes[0...3] == [0x4F, 0x67, 0x67, 0x53]"]
  },
  'audio/ogg; codecs=opus': { 
    ext: 'opus',
    bytesCount: 36,
    magicNumber: ["bytes[28...35] == [0x4F, 0x70, 0x75, 0x73, 0x48, 0x65, 0x61, 0x64]"]
  },
  'application/ogg': { 
    ext: 'ogx',
    bytesCount: 4,
    magicNumber: ["bytes[0...3] == [0x4F, 0x67, 0x67, 0x53]"]
  },
  'audio/flac': { 
    ext: 'flac',
    bytesCount: 4,
    magicNumber: ["bytes[0...3] == [0x66, 0x4C, 0x61, 0x43]"]
  },
  'audio/ape': { 
    ext: 'ape',
    bytesCount: 4,
    magicNumber: null
  },
  'audio/wavpack': { 
    ext: 'wv',
    bytesCount: 4,
    magicNumber: null
  },
  'audio/amr': { 
    ext: 'amr',
    bytesCount: 6,
    magicNumber: ["bytes[0...5] == [0x23, 0x21, 0x41, 0x4D, 0x52, 0x0A]"]
  },
  'application/pdf': { 
    ext: 'pdf',
    bytesCount: 4,
    magicNumber: ["bytes[0...3] == [0x25, 0x50, 0x44, 0x46]"]
  },
  'application/x-elf': { 
    ext: 'elf',
    bytesCount: 4,
    magicNumber: null
  },
  'application/x-mach-binary': { 
    ext: 'macho',
    bytesCount: 4,
    magicNumber: null
  },
  'application/x-msdownload': { 
    ext: 'exe',
    bytesCount: 2,
    magicNumber: ["bytes[0...1] == [0x4D, 0x5A]"]
  },
  'application/x-shockwave-flash': { 
    ext: 'swf',
    bytesCount: 3,
    magicNumber: [
      "(bytes[0] == 0x43 || bytes[0] == 0x46) && (bytes[1...2] == [0x57, 0x53])"
    ]
  },
  'application/rtf': { 
    ext: 'rtf',
    bytesCount: 5,
    magicNumber: ["bytes[0...4] == [0x7B, 0x5C, 0x72, 0x74, 0x66]"]
  },
  'application/wasm': { 
    ext: 'wasm',
    bytesCount: 4,
    magicNumber: ["bytes[0...3] == [0x00, 0x61, 0x73, 0x6D]"]
  },
  'font/woff': { 
    ext: 'woff',
    bytesCount: 8,
    magicNumber: [
      "(bytes[0...3] == [0x77, 0x4F, 0x46, 0x46]) && ((bytes[4...7] == [0x00, 0x01, 0x00, 0x00]) || (bytes[4...7] == [0x4F, 0x54, 0x54, 0x4F]))"
    ]
  },
  'font/woff2': { 
    ext: 'woff2',
    bytesCount: 8,
    magicNumber: [
      "(bytes[0...3] == [0x77, 0x4F, 0x46, 0x32]) && ((bytes[4...7] == [0x00, 0x01, 0x00, 0x00]) || (bytes[4...7] == [0x4F, 0x54, 0x54, 0x4F]))"
    ]
  },
  'application/vnd.ms-fontobject': { 
    ext: 'eot',
    bytesCount: 82,
    magicNumber: [
      "bytes[34...35] == [0x4c, 0x50] && Array(bytes[64...79]) == Array(repeating: 0x00, count: 16) && bytes[82] != 0x00"
    ]
  },
  'font/ttf': { 
    ext: 'ttf',
    bytesCount: 5,
    magicNumber: ["bytes[0...4] == [0x00, 0x01, 0x00, 0x00, 0x00]"]
  },
  'font/otf': { 
    ext: 'otf',
    bytesCount: 5,
    magicNumber: ["bytes[0...4] == [0x4F, 0x54, 0x54, 0x4F, 0x00]"]
  },
  'font/collection': { 
    ext: 'ttc',
    bytesCount: 4,
    magicNumber: ["bytes[0...3] == [0x74, 0x74, 0x63, 0x66]"]
  },
  'image/x-icon': { 
    ext: 'ico',
    bytesCount: 4,
    magicNumber: ["bytes[0...3] == [0x00, 0x00, 0x01, 0x00]"]
  },
  'video/x-flv': { 
    ext: 'flv',
    bytesCount: 4,
    magicNumber: ["bytes[0...3] == [0x46, 0x4C, 0x56, 0x01]"]
  },
  'application/postscript': { 
    ext: 'ps',
    bytesCount: 2,
    magicNumber: ["bytes[0...1] == [0x25, 0x21]"]
  },
  'application/eps': { 
    ext: 'eps',
    bytesCount: 4,
    magicNumber: [
      "bytes[0...3] == [0xC5, 0xD0, 0xD3, 0xC6]"
    ]
  },
  'application/x-xz': { 
    ext: 'xz',
    bytesCount: 6,
    magicNumber: ["bytes[0...5] == [0xFD, 0x37, 0x7A, 0x58, 0x5A, 0x00]"]
  },
  'application/x-sqlite3': { 
    ext: 'sqlite',
    bytesCount: 4,
    magicNumber: ["bytes[0...3] == [0x53, 0x51, 0x4C, 0x69]"]
  },
  'application/x-nintendo-nes-rom': { 
    ext: 'nes',
    bytesCount: 4,
    magicNumber: ["bytes[0...3] == [0x4E, 0x45, 0x53, 0x1A]"]
  },
  'application/x-google-chrome-extension': { 
    ext: 'crx',
    bytesCount: 4,
    magicNumber: ["bytes[0...3] == [0x43, 0x72, 0x32, 0x34]"]
  },
  'application/vnd.ms-cab-compressed': { 
    ext: 'cab',
    bytesCount: 4,
    magicNumber: [
      "(bytes[0...3] == [0x4D, 0x53, 0x43, 0x46]) || (bytes[0...3] == [0x49, 0x53, 0x63, 0x28])"
    ]
  },
  'application/x-deb': { 
    ext: 'deb',
    bytesCount: 21,
    magicNumber: [
      "bytes[0...20] == [0x21, 0x3C, 0x61, 0x72, 0x63, 0x68, 0x3E, 0x0A, 0x64, 0x65, 0x62, 0x69, 0x61, 0x6E, 0x2D, 0x62, 0x69, 0x6E, 0x61, 0x72, 0x79]"
    ]
  },
  'application/x-unix-archive': { 
    ext: 'ar',
    bytesCount: 7,
    magicNumber: ["bytes[0...6] == [0x21, 0x3C, 0x61, 0x72, 0x63, 0x68, 0x3E]"]
  },
  'application/x-rpm': { 
    ext: 'rpm',
    bytesCount: 4,
    magicNumber: ["bytes[0...3] == [0xED, 0xAB, 0xEE, 0xDB]"]
  },
  'application/x-compress': { 
    ext: 'Z',
    bytesCount: 2,
    magicNumber: [
      "(bytes[0...1] == [0x1F, 0xA0]) || (bytes[0...1] == [0x1F, 0x9D])"
    ]
  },
  'application/x-lzip': { 
    ext: 'lz',
    bytesCount: 4,
    magicNumber: ["bytes[0...3] == [0x4C, 0x5A, 0x49, 0x50]"]
  },
  'application/x-cfb': { 
    ext: 'cfb',
    bytesCount: 8,
    magicNumber: ["bytes[0...7] == [0xD0, 0xCF, 0x11, 0xE0, 0xA1, 0xB1, 0x1A, 0xE1]"]
  },
  'application/x-mie': { 
    ext: 'mie',
    bytesCount: 4,
    magicNumber: null
  },
  'application/mxf': { 
    ext: 'mxf',
    bytesCount: 14,
    magicNumber: [
      "bytes[0...13] == [0x06, 0x0E, 0x2B, 0x34, 0x02, 0x05, 0x01, 0x01, 0x0D, 0x01, 0x02, 0x01, 0x01, 0x02]"
    ]
  },
  'video/mp2t': { 
    ext: 'mts',
    bytesCount: 4,
    magicNumber: ["bytes[0...3] == [0x47, 0x40, 0x00, 0x10]"]
  },
  'application/x-blender': { 
    ext: 'blend',
    bytesCount: 7,
    magicNumber: ["bytes[0...6] == [0x42, 0x4C, 0x45, 0x4E, 0x44, 0x45, 0x52]"]
  },
  'image/bpg': { 
    ext: 'bpg',
    bytesCount: 4,
    magicNumber: ["bytes[0...3] == [0x42, 0x50, 0x47, 0xFB]"]
  },
  'image/j2c': { 
    ext: 'j2c',
    bytesCount: 4,
    magicNumber: ["bytes[0...3] == [0xFF, 0x4F, 0xFF, 0x51]"]
  },
  'image/jp2': { 
    ext: 'jp2',
    bytesCount: 24,
    magicNumber: [
      "bytes[0...11] == [0x00, 0x00, 0x00, 0x0C, 0x6A, 0x50, 0x20, 0x20, 0x0D, 0x0A, 0x87, 0x0A] && bytes[20...23] == [0x6A, 0x70, 0x32, 0x20]"
    ]
  },
  'image/jpx': { 
    ext: 'jpx',
    bytesCount: 24,
    magicNumber: [
      "bytes[0...11] == [0x00, 0x00, 0x00, 0x0C, 0x6A, 0x50, 0x20, 0x20, 0x0D, 0x0A, 0x87, 0x0A] && bytes[20...23] == [0x6A, 0x70, 0x78, 0x20]"
    ]
  },
  'image/jpm': { 
    ext: 'jpm',
    bytesCount: 24,
    magicNumber: [
      "bytes[0...11] == [0x00, 0x00, 0x00, 0x0C, 0x6A, 0x50, 0x20, 0x20, 0x0D, 0x0A, 0x87, 0x0A] && bytes[20...23] == [0x6A, 0x70, 0x6D, 0x20]"
    ]
  },
  'image/mj2': { 
    ext: 'mj2',
    bytesCount: 24,
    magicNumber: [
      "bytes[0...11] == [0x00, 0x00, 0x00, 0x0C, 0x6A, 0x50, 0x20, 0x20, 0x0D, 0x0A, 0x87, 0x0A] && bytes[20...23] == [0x6D, 0x6A, 0x70, 0x32]"
    ]
  },
  'audio/aiff': { 
    ext: 'aif',
    bytesCount: 4,
    magicNumber: ["bytes[0...3] == [0x46, 0x4F, 0x52, 0x4D]"]
  },
  'application/xml': { 
    ext: 'xml',
    bytesCount: 6,
    magicNumber: [
      "bytes[0...5] == [0x3C, 0x3F, 0x78, 0x6D, 0x6C, 0x20] || (bytes[0...1] == [0xFE, 0xFF] && bytes[2...11] == [0, 60, 0, 63, 0, 120, 0, 109, 0, 108])"
    ]
  },
  'application/x-mobipocket-ebook': { 
    ext: 'mobi',
    bytesCount: 68,
    magicNumber: [
      "bytes[60...67] == [0x42, 0x4F, 0x4F, 0x4B, 0x4D, 0x4F, 0x42, 0x49]"
    ]
  },
  'image/heif': { 
    ext: 'heic',
    bytesCount: 12,
    magicNumber: [
      "bytes[8...11] == [0x68, 0x65, 0x69, 0x63] || bytes[8...11] == [0x68, 0x65, 0x69, 0x78]"
    ]
  },
  'image/heif-sequence': { 
    ext: 'heic',
    bytesCount: 12,
    magicNumber: [
      "bytes[8...11] == [0x68, 0x65, 0x69, 0x63] || bytes[8...11] == [0x68, 0x65, 0x69, 0x78]"
    ]
  },
  'image/heic': { 
    ext: 'heic',
    bytesCount: 12,
    magicNumber: [
      "bytes[8...11] == [0x68, 0x65, 0x69, 0x63] || bytes[8...11] == [0x68, 0x65, 0x69, 0x78]"
    ]
  },
  'image/heic-sequence': { 
    ext: 'heic',
    bytesCount: 12,
    magicNumber: [
      "bytes[8...11] == [0x68, 0x65, 0x69, 0x63] || bytes[8...11] == [0x68, 0x65, 0x69, 0x78]"
    ]
  },
  'image/icns': { 
    ext: 'icns',
    bytesCount: 4,
    magicNumber: ["bytes[0...3] == [0x69, 0x63, 0x6E, 0x73]"]
  },
  'image/ktx': { 
    ext: 'ktx',
    bytesCount: 12,
    magicNumber: ["bytes[0...11] == [0xAB, 0x4B, 0x54, 0x58, 0x20, 0x31, 0x31, 0xBB, 0x0D, 0x0A, 0x1A, 0x0A]"]
  },
  'application/dicom': { 
    ext: 'dcm',
    bytesCount: 132,
    magicNumber: [
      "bytes[128...131] == [0x44, 0x49, 0x43, 0x4D]"
    ]
  },
  'audio/x-musepack': { 
    ext: 'mpc',
    bytesCount: 4,
    magicNumber: [
      "bytes[0...2] == [0x4D, 0x50, 0x2B] || bytes[0...3] == [0x4D, 0x50, 0x43, 0x4B]"
    ]
  },
  'text/calendar': { 
    ext: 'ics',
    bytesCount: 15,
    magicNumber: [
      "bytes[0...5] == [0x42, 0x45, 0x47, 0x49, 0x4E, 0x3A] && bytes[6...14] == [0x56, 0x43, 0x41, 0x4C, 0x45, 0x4E, 0x44, 0x41, 0x52]"
    ]
  },
  'text/vcard': { 
    ext: 'vcf',
    bytesCount: 11,
    magicNumber: [
      "bytes[0...5] == [0x42, 0x45, 0x47, 0x49, 0x4E, 0x3A] && bytes[6...10] == [0x56, 0x43, 0x41, 0x52, 0x44]"
    ]
  },
  'text/vtt': { 
    ext: 'vtt',
    bytesCount: 7,
    magicNumber: [
      "bytes[0...5] == [0x57, 0x45, 0x42, 0x56, 0x54, 0x54] && (bytes[6] == 0x0A || bytes[6] == 0x0D || bytes[6] == 0x09 || bytes[6] == 0x20 || bytes[6] == 0x00)"
    ]
  },
  'model/gltf-binary': { 
    ext: 'glb',
    bytesCount: 8,
    magicNumber: ["bytes[0...7] == [0x67, 0x6C, 0x54, 0x46, 0x02, 0x00, 0x00, 0x00]"]
  },
  'application/vnd.tcpdump.pcap': { 
    ext: 'pcap',
    bytesCount: 4,
    magicNumber: [
      "bytes[0...3] == [0xD4, 0xC3, 0xB2, 0xA1] || bytes[0...3] == [0xA1, 0xB2, 0xC3, 0xD4]"
    ]
  },
  'audio/x-dsf': { 
    ext: 'dsf',
    bytesCount: 4,
    magicNumber: ["bytes[0...3] == [0x44, 0x53, 0x44, 0x20]"]
  },
  'application/x.ms.shortcut': { 
    ext: 'lnk',
    bytesCount: 4,
    magicNumber: ["bytes[0...3] == [0x4C, 0x00, 0x00, 0x00]"]
  },
  'application/x.apple.alias': { 
    ext: 'alias',
    bytesCount: 4,
    magicNumber: null
  },
  'audio/x-voc': { 
    ext: 'voc',
    bytesCount: 26,
    magicNumber: [
      "bytes[0...19] == [0x43, 0x72, 0x65, 0x61, 0x74, 0x69, 0x76, 0x65, 0x20, 0x56, 0x6F, 0x69, 0x63, 0x65, 0x20, 0x46, 0x69, 0x6C, 0x65, 0x1A] && bytes[20...25] == [0x1A, 0x00, 0x10, 0x01, 0x29, 0x11]"
    ]
  },
  'audio/vnd.dolby.dd-raw': { 
    ext: 'ac3',
    bytesCount: 2,
    magicNumber: ["bytes[0...1] == [0x0B, 0x77]"]
  },
  'audio/x-m4a': { 
    ext: 'm4a',
    bytesCount: 11,
    magicNumber: [
      "(bytes[0...3] == [0x4D, 0x34, 0x41, 0x20]) || (bytes[4...10] == [0x66, 0x74, 0x79, 0x70, 0x4D, 0x34, 0x41])"
    ]
  },
  'image/apng': { 
    ext: 'apng',
    bytesCount: 8,
    magicNumber: ["bytes[0...7] == [0x89, 0x50, 0x4E, 0x47, 0x0D, 0x0A, 0x1A, 0x0A]"]
  },
  'image/x-olympus-orf': { 
    ext: 'orf',
    bytesCount: 9,
    magicNumber: ["bytes[0...8] == [0x49, 0x49, 0x52, 0x4F, 0x08, 0x00, 0x00, 0x00, 0x18]"]
  },
  'image/x-sony-arw': { 
    ext: 'arw',
    bytesCount: 4,
    magicNumber: null
  },
  'image/x-adobe-dng': { 
    ext: 'dng',
    bytesCount: 4,
    magicNumber: null
  },
  'image/x-nikon-nef': { 
    ext: 'nef',
    bytesCount: 4,
    magicNumber: null
  },
  'image/x-panasonic-rw2': { 
    ext: 'rw2',
    bytesCount: 12,
    magicNumber: ["bytes[0...11] == [0x49, 0x49, 0x55, 0x00, 0x18, 0x00, 0x00, 0x00, 0x88, 0xE7, 0x74, 0xD8]"]
  },
  'image/x-fujifilm-raf': { 
    ext: 'raf',
    bytesCount: 4,
    magicNumber: null
  },
  'video/x-m4v': { 
    ext: 'm4v',
    bytesCount: 11,
    magicNumber: [
      "bytes[0...10] == [0x00, 0x00, 0x00, 0x1C, 0x66, 0x74, 0x79, 0x70, 0x4D, 0x34, 0x56]"
    ]
  },
  'video/3gpp2': { 
    ext: '3g2',
    bytesCount: 12,
    magicNumber: [
      "bytes[4...7] == [0x66, 0x74, 0x79, 0x70] && bytes[8...10] == [0x33, 0x67, 0x32]"
    ]
  },
  'application/x-esri-shape': { 
    ext: 'shp',
    bytesCount: 14,
    magicNumber: ["bytes[2...13] == [0x27, 0x0A, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00]"]
  },
  'audio/aac': { 
    ext: 'aac',
    bytesCount: 2,
    magicNumber: ["bytes[0...1] == [0xFF, 0xF1]"]
  },
  'audio/x-it': { 
    ext: 'it',
    bytesCount: 4,
    magicNumber: ["bytes[0...3] == [0x49, 0x4D, 0x50, 0x4D]"]
  },
  'audio/x-s3m': { 
    ext: 's3m',
    bytesCount: 48,
    magicNumber: ["bytes[44...47] == [0x53, 0x43, 0x52, 0x4D]"]
  },
  'audio/x-xm': { 
    ext: 'xm',
    bytesCount: 17,
    magicNumber: ["bytes[0...16] == [0x45, 0x78, 0x74, 0x65, 0x6E, 0x64, 0x65, 0x64, 0x20, 0x4D, 0x6F, 0x64, 0x75, 0x6C, 0x65, 0x3A, 0x20]"]
  },
  'video/MP1S': { 
    ext: 'mp1',
    bytesCount: 5,
    magicNumber: [
      "bytes[0...3] == [0x00, 0x00, 0x01, 0xBA] && (bytes[4] & 0xF1) == 0x21"
    ]
  },
  'video/MP2P': { 
    ext: 'mp2',
    bytesCount: 5,
    magicNumber: [
      "bytes[0...3] == [0x00, 0x00, 0x01, 0xBA] && (bytes[4] & 0xC4) == 0x44"
    ]
  },
  'application/vnd.sketchup.skp': { 
    ext: 'skp',
    bytesCount: 8,
    magicNumber: ["bytes[0...7] == [0xFF, 0xFE, 0xFF, 0xFE, 0x53, 0x6B, 0x65, 0x74]"]
  },
  'image/avif': { 
    ext: 'avif',
    bytesCount: 12,
    magicNumber: [
      "bytes[4...7] == [0x66, 0x74, 0x79, 0x70] && (bytes[8...11] == [0x61, 0x76, 0x69, 0x66] || bytes[8...11] == [0x61, 0x76, 0x69, 0x73])"
    ]
  },
  'application/x-lzh-compressed': { 
    ext: 'lzh',
    bytesCount: 7,
    magicNumber: [
      "bytes[2...6] == [0x2D, 0x6C, 0x68, 0x30, 0x2D] || bytes[2...6] == [0x2D, 0x6C, 0x68, 0x31, 0x2D] || bytes[2...6] == [0x2D, 0x6C, 0x68, 0x32, 0x2D] || bytes[2...6] == [0x2D, 0x6C, 0x68, 0x33, 0x2D] || bytes[2...6] == [0x2D, 0x6C, 0x68, 0x34, 0x2D] || bytes[2...6] == [0x2D, 0x6C, 0x68, 0x35, 0x2D] || bytes[2...6] == [0x2D, 0x6C, 0x68, 0x36, 0x2D] || bytes[2...6] == [0x2D, 0x6C, 0x68, 0x37, 0x2D] || bytes[2...6] == [0x2D, 0x6C, 0x7A, 0x73, 0x2D] || bytes[2...6] == [0x2D, 0x6C, 0x7A, 0x34, 0x2D] || bytes[2...6] == [0x2D, 0x6C, 0x7A, 0x35, 0x2D] || bytes[2...6] == [0x2D, 0x6C, 0x68, 0x64, 0x2D]"
    ]
  },
  'application/pgp-encrypted': { 
    ext: 'pgp',
    bytesCount: 4,
    magicNumber: null
  },
  'application/x-asar': { 
    ext: 'asar',
    bytesCount: 4,
    magicNumber: null
  },
  'model/stl': { 
    ext: 'stl',
    bytesCount: 4,
    magicNumber: null
  },
  'application/vnd.ms-htmlhelp': { 
    ext: 'chm',
    bytesCount: 4,
    magicNumber: null
  },
  'model/3mf': { 
    ext: '3mf',
    bytesCount: 4,
    magicNumber: null
  },
  'image/jxl': { 
    ext: 'jxl',
    bytesCount: 4,
    magicNumber: null
  },
  'application/zstd': { 
    ext: 'zst',
    bytesCount: 4,
    magicNumber: null
  },
  'application/vnd.ms-outlook': { 
    ext: 'pst',
    bytesCount: 4,
    magicNumber: null
  },
  'image/vnd.dwg': { 
    ext: 'dwg',
    bytesCount: 4,
    magicNumber: null
  },
  'application/vnd.apache.parquet': { 
    ext: 'parquet',
    bytesCount: 4,
    magicNumber: null
  },
  'application/java-vm': { 
    ext: 'class',
    bytesCount: 4,
    magicNumber: null
  },
  'application/x-arj': { 
    ext: 'arj',
    bytesCount: 4,
    magicNumber: null
  },
  'application/x-cpio': { 
    ext: 'cpio',
    bytesCount: 4,
    magicNumber: null
  },
  'application/x-ace-compressed': { 
    ext: 'ace',
    bytesCount: 4,
    magicNumber: null
  },
  'application/avro': { 
    ext: 'avro',
    bytesCount: 4,
    magicNumber: null
  },
  'application/vnd.iccprofile': { 
    ext: 'icc',
    bytesCount: 4,
    magicNumber: null
  },
  'application/x.autodesk.fbx': { 
    ext: 'fbx',
    bytesCount: 4,
    magicNumber: null
  },
  'application/vnd.visio': { 
    ext: 'vsdx',
    bytesCount: 4,
    magicNumber: null
  },
  'application/vnd.android.package-archive': { 
    ext: 'apk',
    bytesCount: 4,
    magicNumber: null
  },
  'application/vnd.google.draco': { 
    ext: 'drc',
    bytesCount: 4,
    magicNumber: null
  },
  'application/x-lz4': { 
    ext: 'lz4',
    bytesCount: 4,
    magicNumber: null
  },
  'application/vnd.openxmlformats-officedocument.presentationml.template': { 
    ext: 'potx',
    bytesCount: 4,
    magicNumber: null
  },
  'application/vnd.openxmlformats-officedocument.spreadsheetml.template': { 
    ext: 'xltx',
    bytesCount: 4,
    magicNumber: null
  },
  'application/vnd.openxmlformats-officedocument.wordprocessingml.template': { 
    ext: 'dotx',
    bytesCount: 4,
    magicNumber: null
  },
  'application/vnd.ms-excel.template.macroenabled.12': { 
    ext: 'xltm',
    bytesCount: 4,
    magicNumber: null
  },
  'application/vnd.oasis.opendocument.text-template': { 
    ext: 'ott',
    bytesCount: 4,
    magicNumber: null
  },
  'application/vnd.oasis.opendocument.spreadsheet-template': { 
    ext: 'ots',
    bytesCount: 4,
    magicNumber: null
  },
  'application/vnd.oasis.opendocument.presentation-template': { 
    ext: 'otp',
    bytesCount: 4,
    magicNumber: null
  },
  'application/vnd.oasis.opendocument.graphics': { 
    ext: 'odg',
    bytesCount: 4,
    magicNumber: null
  },
  'application/vnd.oasis.opendocument.graphics-template': { 
    ext: 'otg',
    bytesCount: 4,
    magicNumber: null
  },
  'application/vnd.ms-excel.sheet.macroenabled.12': { 
    ext: 'xlsm',
    bytesCount: 4,
    magicNumber: null
  },
  'application/vnd.ms-word.document.macroenabled.12': { 
    ext: 'docm',
    bytesCount: 4,
    magicNumber: null
  },
  'application/vnd.ms-word.template.macroenabled.12': { 
    ext: 'dotm',
    bytesCount: 4,
    magicNumber: null
  },
  'application/vnd.ms-powerpoint.template.macroenabled.12': { 
    ext: 'potm',
    bytesCount: 4,
    magicNumber: null
  },
  'application/vnd.ms-powerpoint.presentation.macroenabled.12': { 
    ext: 'pptm',
    bytesCount: 4,
    magicNumber: null
  },
  'application/java-archive': { 
    ext: 'jar',
    bytesCount: 4,
    magicNumber: null
  },
  'application/vnd.rn-realmedia': { 
    ext: 'rm',
    bytesCount: 4,
    magicNumber: null
  },
  'application/x-ms-regedit': { 
    ext: 'reg',
    bytesCount: 4,
    magicNumber: null
  },
  'application/x-ft-windows-registry-hive': { 
    ext: 'dat',
    bytesCount: 4,
    magicNumber: null
  },
};
