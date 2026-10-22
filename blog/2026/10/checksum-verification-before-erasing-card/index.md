---
layout: post
permalink: /blog/2026/10/checksum-verification-before-erasing-card/
published: "2026-10-22"
updated: "2026-10-22"
og_image: "/images/blog/checksum-verification-before-erasing-card.png"
title: "Checksum Verification: Prove Your Card Copy Before Erasing"
seo_title: "Checksum Verification: Prove a Card Copy Before Erasing"
description: "Checksum verification for video: how SHA-256, MD5 and xxHash prove a card copy, how to check one on a Mac, and what a failed check means."
slug: "checksum-verification-before-erasing-card"
category: "workflow"
tags: ["checksums", "card-offload", "backup", "rsync"]
keywords: "checksum verification, verify card copy before erasing, sha-256 checksum mac, rsync checksum, checksum verification failed"
takeaways:
  - "Checksum verification computes a fingerprint of each file on the card and of its copy, and only matching fingerprints prove the bytes are identical."
  - "A finished Finder copy proves the copy ended, not that the copy on the drive matches the card."
  - "rsync already checks each file it transfers; its -c option is a slower before-transfer comparison that also works as an audit."
  - "FTP adds no file checksum of its own and SFTP protects data only in transit, so hash the files before and after either one."
  - "Erase a card only after every file you need has a verified copy, and ideally a second verified copy on another drive."
faq:
  - q: "How long does it take to checksum a 512 GB card?"
    a: "At least as long as reading every byte once. At a steady 250 MB/s, reading 512 GB takes about 34 minutes. A full verified copy reads the card and then reads the copy back, so expect roughly double that. A slow card reader, a USB hub or a busy hard drive usually sets the pace, so check those first if it seems slow."
  - q: "Can a checksum tell me which file is corrupted?"
    a: "Yes, if you hash each file separately. Comparing two per-file checksum lists flags only the files whose values differ, by name. A single checksum of a whole folder or disk image can only tell you that something changed somewhere. Per-file lists also let you re-copy just the failed clips instead of the whole card."
  - q: "Does MediaFlowSwift verify checksums on every copy?"
    a: "For cards, drives and folders, yes. Import computes a SHA-256 checksum from the card, reads the whole copy back from the drive and compares. Organize checks its copy against that checksum, and Clear Card reads the organized copy back again before it deletes anything. Imports from an iPhone over USB can't be compared with the original."
  - q: "What checksum should I use for video files, MD5 or SHA-256?"
    a: "Either catches accidental corruption from a bad cable, reader or drive. SHA-256 is the safer default because MD5 is no longer collision resistant, which matters if someone could tamper with files. Many offload apps also use xxHash, which is much faster but non-cryptographic. Pick one algorithm and use it at both ends of every comparison."
sources:
  - title: "Secure Hash Standard (FIPS 180-4), NIST"
    url: "https://csrc.nist.gov/pubs/fips/180-4/upd1/final"
  - title: "RFC 6151: Updated Security Considerations for MD5, IETF"
    url: "https://www.rfc-editor.org/rfc/rfc6151.html"
  - title: "xxHash, extremely fast non-cryptographic hash algorithm"
    url: "https://xxhash.com/"
  - title: "shasum command reference, SS64"
    url: "https://ss64.com/mac/shasum.html"
  - title: "rsync manual page, Samba project"
    url: "https://download.samba.org/pub/rsync/rsync.1.html"
  - title: "rsync replaced with openrsync on macOS Sequoia, Der Flounder"
    url: "https://derflounder.wordpress.com/2025/04/06/rsync-replaced-with-openrsync-on-macos-sequoia/"
  - title: "RFC 959: File Transfer Protocol, IETF"
    url: "https://www.rfc-editor.org/rfc/rfc959.html"
  - title: "RFC 9293: Transmission Control Protocol, IETF"
    url: "https://www.rfc-editor.org/rfc/rfc9293.html"
  - title: "RFC 4253: SSH Transport Layer Protocol, IETF"
    url: "https://www.rfc-editor.org/rfc/rfc4253.html"
  - title: "Use Apple Diagnostics to test your Mac, Apple Support"
    url: "https://support.apple.com/en-us/102550"
  - title: "ASC Media Hash List specification, ASC MITC"
    url: "https://github.com/ascmitc/mhl-specification"
  - title: "OffShoot, Hedge (checked October 2026)"
    url: "https://hedge.co/products/offshoot"
  - title: "ShotPut Pro for Mac, Imagine Products (checked October 2026)"
    url: "https://www.imagineproducts.com/product/shotput-pro/mac"
  - title: "ShotPut Studio for Mac, Imagine Products (checked October 2026)"
    url: "https://www.imagineproducts.com/product/shotput-studio/mac"
  - title: "Silverstack XT, Pomfort (checked October 2026)"
    url: "https://pomfort.com/silverstackxt/"
  - title: "habitat flow (checked October 2026)"
    url: "https://habitat-flow.com/"
  - title: "MediaTools Pro, EASY FOCUS s.r.o. (checked October 2026)"
    url: "https://mediatoolspro.com/"
---
Checksum verification proves a card copy by fingerprinting every file on the card and its copy, then comparing the values. Matching values mean identical bytes. Erase a card only after every file you need has a matching checksum on a copy read back from the drive, ideally on two drives.

The sections below explain how checksums work and which algorithm to use. They also show how to check a copy by hand on a Mac, and what a failed check means. For a step-by-step walkthrough of one app's chain, see [Is It Safe to Erase Your Card After Importing on a Mac?](/guides/verify-footage-copied-before-erasing-card/)

## What is checksum verification and how does it work?

A checksum is a short value calculated from every byte of a file. Feed the same bytes to the same algorithm and you always get the same value. Change one bit and the value changes completely. Verification means hashing the original on the card, hashing the copy on the drive, and comparing the two values.

The comparison only proves something if the copy is read back from the drive. A program that hashes the data while it is still in the Mac's memory proves the data left the card intact. It doesn't prove the drive stored it correctly.

### Which hash should you use: SHA-256, MD5, xxHash or CRC?

All four catch the accidental damage that matters on a card offload. They differ in speed and in how hard they are to fool on purpose.

| Algorithm | Kind | Good for | Watch out for |
|---|---|---|---|
| SHA-256 | Cryptographic, [NIST FIPS 180-4](https://csrc.nist.gov/pubs/fips/180-4/upd1/final) | Default choice; built into macOS as `shasum -a 256` | Slower than xxHash on very fast drives |
| MD5 | Older cryptographic hash | Matching older checksum lists | [No longer collision resistant](https://www.rfc-editor.org/rfc/rfc6151.html), so weak against tampering |
| xxHash (xxh64, xxh128) | [Non-cryptographic, built for speed](https://xxhash.com/) | Fast offloads; common in media apps | Not designed to resist deliberate tampering |
| CRC32 | Error-detecting code | Spotting transmission errors | Only 32 bits; not meant as a file fingerprint |

For a solo creator, SHA-256 is a sensible default. Accidental corruption is the real risk, and any of the first three algorithms will catch it. The one hard rule is consistency: compare SHA-256 with SHA-256, never with an MD5 from another tool.

## Why isn't a finished Finder copy proof?

Finder copies files and tells you when the copy ends. Finder doesn't hash the card's files or compare them with what landed on the drive. A flaky reader, a loose cable or a failing drive can leave a copy with the right name and size but wrong data inside.

Damaged clips often still open and play for a few seconds. The problem shows up weeks later in the edit, when the card is long gone. That uncertainty is why so many people keep cards unformatted and let them pile up.

## How do you verify a card copy by hand on a Mac?

The `shasum` tool built into macOS is enough for a manual check. Its `-c` option reads a saved list and reports each file as OK or FAILED ([shasum reference](https://ss64.com/mac/shasum.html)). The example below assumes a card named CARD and a shoot folder on a drive named Archive01.

1. Create the shoot folder on the drive. Then hash the card and save the list on the destination drive: `cd /Volumes/CARD && find DCIM -type f -exec shasum -a 256 {} + > /Volumes/Archive01/2026-10-22_shoot/card.sha256`
2. Copy the DCIM folder into `2026-10-22_shoot` in Finder.
3. Eject the destination drive and connect it again, so the check reads from the drive rather than from memory.
4. Check the copy: `cd /Volumes/Archive01/2026-10-22_shoot && shasum -a 256 -c card.sha256`

Every line should end in OK. Any FAILED line names the exact file to copy again. Keep `card.sha256` beside the footage, not on your desktop. Years later, the list still proves what should be on that drive.

`shasum` is a Perl script, so it is not the fastest hasher on a Mac. Reading every byte twice also takes time on a big card. Those costs are the reason dedicated offload apps exist.

## When does rsync -c help, and when doesn't it?

rsync already verifies each file it transfers. According to the [rsync manual](https://download.samba.org/pub/rsync/rsync.1.html), it checks a whole-file checksum generated as the file is transferred. That check runs automatically, with or without `-c`. It covers the data stream, not a fresh read of the stored file.

The `-c` (`--checksum`) option does something else. It decides which files to transfer by comparing checksums instead of size and modification time. To do that, rsync reads and hashes every same-size file on both sides before copying anything. On drives full of video, that pre-scan means reading nearly all the data twice, once per drive.

### Using rsync as an audit between drives

The useful trick is a dry run. `rsync -rcni /Volumes/Archive01/ /Volumes/Archive02/` copies nothing. It lists only the files whose contents differ or are missing on the second drive. That makes it a good monthly check between an archive drive and its backup or NAS copy.

For card ingest, rsync leaves the rest to you. It doesn't name folders, keep a per-file checksum list, or tell you when the card is safe to erase.

### Which rsync does your Mac have?

Since macOS 15.4, `/usr/bin/rsync` is openrsync, a separate implementation that [accepts only a subset of rsync's options](https://derflounder.wordpress.com/2025/04/06/rsync-replaced-with-openrsync-on-macos-sequoia/). Before Sequoia, macOS shipped rsync 2.6.9 from 2006. Basic flags such as `-r`, `-c`, `-n` and `-i` are present. For the full current feature set, install rsync 3.x with a package manager such as Homebrew.

## Do FTP and SFTP check your files?

Neither one checks the finished file for you. The FTP standard, [RFC 959](https://www.rfc-editor.org/rfc/rfc959.html), defines no file checksum. FTP relies on TCP, whose 16-bit checksum per segment ([RFC 9293](https://www.rfc-editor.org/rfc/rfc9293.html)) catches most transmission errors but not all of them.

SFTP runs over SSH, which adds a message authentication code to every packet ([RFC 4253](https://www.rfc-editor.org/rfc/rfc4253.html)). That protects the data in transit far better than plain TCP. It still says nothing about whether the server's disk stored the file correctly.

So the rule is the same over any network. Make a SHA-256 list before you send, hash the received files at the other end, and compare. If you control both machines, rsync over SSH adds its own per-file check on top.

## What does "checksum verification failed" mean?

A failed check means the bytes at the destination don't match the bytes on the card. The copy isn't the same as the original, so don't erase the card. The file itself is rarely the cause. The usual culprit is something between the card and the drive, or one of the drives.

| Symptom | Likely cause | What to do |
|---|---|---|
| One file fails, a re-copy passes | Brief read error from the card, reader or cable | Re-copy and re-verify that file |
| The same file fails every time | Damaged file or bad area on the card | Try another reader; keep the card until it is resolved |
| Every file from one reader fails | Bad reader, cable, hub or port | Swap the hardware and run the copy again |
| Failures only on one destination | Failing drive or enclosure | Copy to another drive; test the suspect one |
| Random failures across drives | Possible memory or system fault | Run [Apple Diagnostics](https://support.apple.com/en-us/102550) before trusting any copy |

If the same file fails from two different readers, the problem is on the card. Copy everything that verifies, keep the card, and try recovery software on the rest before you ever format it.

## How many verified copies do you need before erasing a card?

One verified copy is the minimum. Two verified copies on separate drives are safer, because a single drive can still fail or get dropped. The card itself can serve as the second copy until you clear it.

MediaFlowSwift, made by Long Road Software, builds the first of those copies into its workflow. [Import](/manual/importing-media/#every-copy-is-checked) computes SHA-256 from the card, reads the whole copy back from the drive and compares. Organize files each clip at the destination and checks it against that checksum. [Clear Card](/manual/organizing-media/#clear-card) deletes only clips already organized and verified at the destination. It reads each organized copy back in full again just before deleting.

Clear Card requires that one verified, organized copy. It doesn't require a second copy. A second checked copy comes from [Archive to USB](/manual/project-management/#archiving-a-project-to-usb), a separate step. For the details, see [How to Keep Two Checked Copies of a Memory Card on a Mac](/guides/two-checked-copies-of-a-card-on-a-mac/). On cards the camera laid out itself, such as Sony cards with a PRIVATE/M4ROOT folder, Clear Card deletes nothing. It checks the whole card and says when it is safe to format in the camera.

Where the checksums live differs by tool. MediaFlowSwift keeps each clip's checksum inside the project and numbers its archive drives. It doesn't write a checksum list or [ASC MHL](https://github.com/ascmitc/mhl-specification) file onto the drive. Need an MHL file for a client, or a list that travels with the drive? Use a tool that writes one, or the `shasum` list above. For drive labeling, see [How to Label and Catalog Your Archive Drives for Video](/guides/label-and-catalog-archive-drives-for-video/).

## Which checksum verification tool should you use?

Judge every option by three questions. Does it read the copy back and compare checksums? Can it make two copies, at once or in turn? Does it tell you plainly which files are safe to erase?

- **Built-in tools.** `shasum` and rsync are free and already on your Mac. Both prove copies, but you write and run every step yourself.
- **[OffShoot](https://hedge.co/products/offshoot)** (formerly Hedge) copies from many sources to many destinations with checksum verification. OffShoot Pro adds ASC MHL. It runs on macOS and Windows and has a 10-day trial.
- **[ShotPut Pro](https://www.imagineproducts.com/product/shotput-pro/mac)** does verified offloads with PDF reports and ASC MHL support. [ShotPut Studio](https://www.imagineproducts.com/product/shotput-studio/mac) adds uploading and transcoding.
- **[Silverstack XT](https://pomfort.com/silverstackxt/)** verifies to multiple destinations at once and keeps a clip library. It is built for on-set data managers and has a free trial.
- **[habitat flow](https://habitat-flow.com/)** uses xxHash64 and saves an ASC MHL report. It has a free plan up to 150 GB a week; Pro copies to two drives at once.
- **[MediaTools](https://mediatoolspro.com/)** ingests with SHA-256 verification on macOS and Windows. The Lite version is free.

MediaFlowSwift fits after the copy as well as during it. Verified clips land in a library you can [search](/manual/managing-assets/#filtering-and-searching) by name, notes, tags, camera or scene. You can also [search transcripts](/manual/organizing-media/#speech-transcription) for what was said, play clips back, rate them, and see which numbered archive drive holds a project.

MediaFlowSwift's limits are just as real. It doesn't write a card to two drives at once; the second copy comes later, from Archive to USB. It writes no MHL file, and it copies to drives and network shares, not to S3 or other cloud storage. It runs on Apple silicon Macs with macOS 14 or later today, with Windows and Intel Mac versions coming. Compare it in detail on [MediaFlowSwift vs OffShoot](/vs/offshoot/) and [MediaFlowSwift vs habitat flow](/vs/habitat-flow/).

For a broader checklist, see [Evaluating Video File Management Software](/blog/2026/10/evaluating-video-file-management-software/).

## How do you build checksum verification into every shoot?

A short routine works whatever tool you use.

1. **Offload with verification.** Copy each card to your working drive with a tool that reads the copy back and compares checksums. Erase nothing yet.
2. **Make the second copy.** Copy the shoot to a separate archive drive or NAS, and verify that copy too.
3. **Clear the card only when the checks pass.** Every file you need should show a matching checksum. Check outside the clip folders for anything your tool skipped.
4. **Audit older drives now and then.** Re-run `shasum -c` on a few folders, or an `rsync -rcni` dry run between copies. That catches slow damage before both copies go bad.

Folder layout makes the routine easier; see [External Hard Drive Organization for Video](/blog/2026/10/external-hard-drive-organization-for-video/). For where the second copy should live, compare [NAS video storage](/blog/2026/10/nas-video-storage-how-to-choose/) with [LTO, NAS and cloud archives](/blog/2026/10/video-archive-storage-lto-vs-nas-vs-cloud/).

Want the check, the organizing and safe card clearing in one Mac app? [Download MediaFlowSwift](/download.html) and try it on a real card. Plans are on the [home page](/#plans).
