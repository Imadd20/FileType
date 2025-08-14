// The Swift Programming Language
// https://docs.swift.org/swift-book

import Foundation

public struct FileType {
    /// File data
    let data: Data
    
    public init(data: Data) {
      self.data = data
    }
    
    public init(bytes: [UInt8]) {
      self.init(data: Data(bytes))
    }
    
    ///  A static method to get the `MimeType` that matches the given file data
    ///
    ///  - returns: Optional<MimeType>
    static public func mimeType(data: Data) -> MimeType? {
      return mimeType(filetype: FileType(data: data))
    }
    
    ///  Get the `MimeType` that matches the given `MimeType` instance
    ///
    ///  - returns: Optional<MimeType>
    static public func mimeType(filetype: FileType) -> MimeType? {
      let bytes = filetype.readBytes(count: min(filetype.data.count, 262))

      for mime in MimeType.mimeTypesAll {
        if mime.matches(bytes: bytes, filetype: filetype) {
          return mime
        }
      }

      return nil
    }
    ///  Read bytes from file data
    ///
    ///  - parameter count: Number of bytes to be read
    ///
    ///  - returns: Bytes represented with `[UInt8]`
    internal func readBytes(count: Int) -> [UInt8] {
      var bytes = [UInt8](repeating: 0, count: count)

      data.copyBytes(to: &bytes, count: count)

      return bytes
    }
}
