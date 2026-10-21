// Draws the share picture (Open Graph / Twitter card) for one blog post: 1200 × 630, the site's teal, a small
// kicker with the category, the post's title wrapped in white, and "MediaFlowSwift Blog" with the favicon's mark
// along the bottom. Same colours as tools/make_og_image.swift.
//
//   swift tools/make_blog_og.swift "<title>" "<category name>" images/blog/<slug>.png
//
// The post's front matter then names it: og_image: "/images/blog/<slug>.png".
import AppKit

let args = CommandLine.arguments
guard args.count == 4 else { fatalError("usage: make_blog_og.swift <title> <category> <out.png>") }
let titleText = args[1], kickerText = args[2].uppercased(), outPath = args[3]

let width = 1200, height = 630
let W = CGFloat(width), H = CGFloat(height)
let tealTop = NSColor(srgbRed: 0x12 / 255, green: 0x80 / 255, blue: 0x8b / 255, alpha: 1)
let teal = NSColor(srgbRed: 0x0b / 255, green: 0x6e / 255, blue: 0x78 / 255, alpha: 1)
let tealBottom = NSColor(srgbRed: 0x08 / 255, green: 0x5c / 255, blue: 0x65 / 255, alpha: 1)
let soft = NSColor(srgbRed: 0xdc / 255, green: 0xef / 255, blue: 0xef / 255, alpha: 1)

let rep = NSBitmapImageRep(bitmapDataPlanes: nil, pixelsWide: width, pixelsHigh: height, bitsPerSample: 8,
                           samplesPerPixel: 4, hasAlpha: true, isPlanar: false, colorSpaceName: .deviceRGB,
                           bytesPerRow: 0, bitsPerPixel: 0)!
rep.size = NSSize(width: W, height: H)
NSGraphicsContext.saveGraphicsState()
let context = NSGraphicsContext(bitmapImageRep: rep)!
NSGraphicsContext.current = context
let cg = context.cgContext
let gradient = CGGradient(colorsSpace: CGColorSpace(name: CGColorSpace.sRGB),
                          colors: [tealTop.cgColor, teal.cgColor, tealBottom.cgColor] as CFArray,
                          locations: [0, 0.5, 1])!
cg.drawLinearGradient(gradient, start: CGPoint(x: 0, y: H), end: CGPoint(x: 0, y: 0), options: [])

let margin: CGFloat = 80
let textWidth = W - 2 * margin

// Kicker (category), top left.
let kicker = NSAttributedString(string: kickerText, attributes: [
    .font: NSFont.systemFont(ofSize: 28, weight: .semibold), .foregroundColor: soft, .kern: 3.0])
kicker.draw(at: NSPoint(x: margin, y: H - margin - kicker.size().height))

// Title: the largest size from 76 down that fits in four lines.
let para = NSMutableParagraphStyle()
para.lineBreakMode = .byWordWrapping
para.lineHeightMultiple = 1.02
var size: CGFloat = 76
var title = NSAttributedString()
var box = CGRect.zero
let titleTopY = H - margin - kicker.size().height - 34
let titleBottomLimit: CGFloat = 150
while size >= 40 {
    title = NSAttributedString(string: titleText, attributes: [
        .font: NSFont.systemFont(ofSize: size, weight: .bold), .foregroundColor: NSColor.white,
        .paragraphStyle: para, .kern: -0.5])
    box = title.boundingRect(with: NSSize(width: textWidth, height: 10000), options: [.usesLineFragmentOrigin])
    if box.height <= titleTopY - titleBottomLimit { break }
    size -= 4
}
title.draw(with: CGRect(x: margin, y: titleTopY - box.height, width: textWidth, height: box.height),
           options: [.usesLineFragmentOrigin])

// Footer: the mark and "MediaFlowSwift Blog".
let s: CGFloat = 2.6
let fy: CGFloat = 70
cg.saveGState()
func p(_ x: CGFloat, _ y: CGFloat) -> CGPoint { CGPoint(x: margin - 4 * s + x * s, y: fy + (28 - y) * s - 7 * s) }
cg.setStrokeColor(NSColor.white.cgColor); cg.setFillColor(NSColor.white.cgColor)
let frame = CGRect(x: p(4, 21).x, y: p(4, 21).y, width: 20 * s, height: 14 * s)
cg.addPath(NSBezierPath(roundedRect: frame, xRadius: 2.5 * s, yRadius: 2.5 * s).cgPath)
cg.setLineWidth(1.8 * s); cg.strokePath()
cg.setLineWidth(1.5 * s); cg.setLineCap(.round)
for row: CGFloat in [11, 14, 17] {
    for (a, b) in [(CGFloat(7), CGFloat(10)), (CGFloat(18), CGFloat(21))] { cg.move(to: p(a, row)); cg.addLine(to: p(b, row)) }
}
cg.strokePath()
cg.move(to: p(12.3, 11.6)); cg.addLine(to: p(16.4, 14)); cg.addLine(to: p(12.3, 16.4)); cg.closePath(); cg.fillPath()
cg.restoreGState()
let brand = NSAttributedString(string: "MediaFlowSwift Blog", attributes: [
    .font: NSFont.systemFont(ofSize: 34, weight: .semibold), .foregroundColor: NSColor.white])
brand.draw(at: NSPoint(x: margin + 20 * s + 22, y: fy + 7 * s - brand.size().height / 2 + 2))

NSGraphicsContext.restoreGraphicsState()
let data = rep.representation(using: .png, properties: [:])!
try data.write(to: URL(fileURLWithPath: outPath))
print("wrote \(outPath) (\(width) × \(height), \(data.count / 1024) KB, title \(Int(size)) pt)")
