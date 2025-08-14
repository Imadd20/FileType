//
//  Extensions.swift
//  FileType
//
//  Created by wong on 8/14/25.
//

public struct MimeType {
    /// Mime type string representation. For example "application/pdf"
    public let mime: String
    /// Mime type shorthand representation. For example `.pdf`
    public let type: Extensions
    /// Number of bytes required for `MimeType` to be able to check if the
    /// given bytes match with its mime type magic number specifications.
    public let bytesCount: Int

    /// A function to check if the bytes match the `MimeType` specifications.
    public let matches: ([UInt8], FileType) -> Bool
    ///  Check if the given bytes matches with `MimeType`
    ///  it will check for the `bytes.count` first before delegating the
    ///  checker function to `matches` property
    ///
    ///  - parameter bytes: Bytes represented with `[UInt8]`
    ///  - parameter filetype: FileType instance
    ///
    ///  - returns: Bool
    public func matches(bytes: [UInt8], filetype: FileType) -> Bool {
      return bytes.count >= bytesCount && matches(bytes, filetype)
    }
}
