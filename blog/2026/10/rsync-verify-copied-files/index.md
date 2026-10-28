---
layout: post
permalink: /blog/2026/10/rsync-verify-copied-files/
published: "2026-10-28"
updated: "2026-10-28"
og_image: "/images/blog/rsync-verify-copied-files.png"
title: "Does rsync Verify Copied Files? What It Checks and What It Misses"
seo_title: "Does rsync Verify Copied Files? What It Checks"
description: "Does rsync verify copied files? What its built-in check covers, what -c really does, the gaps, and a shasum recipe to prove a card copy on a Mac."
slug: "rsync-verify-copied-files"
category: "workflow"
tags: ["rsync", "checksums", "card-offload", "backup"]
keywords: "does rsync verify copied files, rsync checksum, rsync -c, verify rsync copy, openrsync macos"
takeaways:
  - "rsync normally checks each file it transfers against a whole-file checksum generated during the transfer, with or without -c."
  - "The -c option only changes which files rsync decides to transfer; it compares checksums before copying instead of size and date."
  - "rsync's check doesn't cover files the quick check skipped, doesn't reread the finished copy from the drive, and leaves no record behind."
  - "Since macOS 15.4, /usr/bin/rsync is openrsync, which accepts only a subset of rsync's options; Homebrew installs the Samba project's rsync 3.x."
  - "To prove a card copy, save a sorted SHA-256 list of the card, then run shasum -a 256 -c against the copy after reconnecting the drive."
faq:
  - q: "Is rsync -av enough to prove my footage copied correctly?"
    a: "Not on its own. rsync normally checks each file it transfers against a checksum made during the transfer, so a plain copy is better than nothing. It skips files whose size and date already match, it doesn't reread the finished copy from the drive, and it keeps no record. Save a SHA-256 list of the card and check the copy against it before you erase anything."
  - q: "Does rsync -c verify the copy after the transfer?"
    a: "No. The -c option is a before-the-transfer test. It compares checksums of same-size files on both sides to decide which files to copy, instead of trusting size and modification time. The after-the-transfer check happens anyway, with or without -c. Running rsync -c as a dry run is still a useful audit, because it lists files whose contents differ."
  - q: "Does macOS have sha256sum and md5sum, or only shasum?"
    a: "Current macOS releases, such as macOS 26, include both. The md5 and shasum commands have been on the Mac for years, and current versions add md5sum, sha256sum and related tools with GNU-style options. Older versions may lack them, so shasum -a 256 is the safe choice. Its list format matches Linux sha256sum, so a list made on one system can be checked on the other."
  - q: "How long does it take to checksum a 128 GB card?"
    a: "At least as long as reading every byte once. At about 90 MB/s, typical of a fast UHS-I card, 128 GB takes roughly 24 minutes. At 250 MB/s on a UHS-II card and reader, it takes about 9 minutes. Checking the copy reads the same amount again from the destination drive, so budget for both reads."
  - q: "Is rsync over SSH safer than a local rsync copy?"
    a: "Only for the trip across the network. SSH adds a message authentication code to every packet, so damage in transit is detected. rsync's own whole-file check works the same way locally and over SSH. Neither one rereads the file from the remote disk after it is written, so check a remote copy with a checksum list too."
sources:
  - title: "rsync manual page, Samba project"
    url: "https://download.samba.org/pub/rsync/rsync.1.html"
  - title: "openrsync, BSD-licensed implementation of rsync (README)"
    url: "https://github.com/kristapsdz/openrsync"
  - title: "rsync replaced with openrsync on macOS Sequoia, Der Flounder"
    url: "https://derflounder.wordpress.com/2025/04/06/rsync-replaced-with-openrsync-on-macos-sequoia/"
  - title: "rsync formula, Homebrew"
    url: "https://formulae.brew.sh/formula/rsync"
  - title: "RFC 4253: SSH Transport Layer Protocol, IETF"
    url: "https://www.rfc-editor.org/rfc/rfc4253.html"
  - title: "shasum command reference, SS64"
    url: "https://ss64.com/mac/shasum.html"
  - title: "Bus Speed (Default Speed/High Speed/UHS/SD Express), SD Association"
    url: "https://www.sdcard.org/developers/sd-standard-overview/bus-speed-default-speed-high-speed-uhs-sd-express/"
  - title: "OffShoot, Hedge (checked October 2026)"
    url: "https://hedge.co/products/offshoot"
  - title: "OffShoot verification modes, Hedge documentation (checked October 2026)"
    url: "https://docs.hedge.video/offshoot/features/verification"
  - title: "Silverstack XT features, Pomfort (checked October 2026)"
    url: "https://pomfort.com/silverstackxt/features/"
---
Yes, partly. rsync checks every file it actually transfers against a whole-file checksum made during the transfer. It doesn't check files its size-and-date quick check skips. It doesn't reread the finished copy from the destination drive, and it keeps no record. Before you erase a card, check the copy yourself against a saved SHA-256 list.

The sections below cover rsync specifically: what it checks, what `-c` changes, and how to close the gaps on a Mac. For how checksums work in general and which algorithm to pick, see [Checksum Verification: Prove Your Card Copy Before Erasing](/blog/2026/10/checksum-verification-before-erasing-card/).

## What does rsync check when it copies a file?

rsync makes two separate decisions. The first is which files need copying at all. By default it uses a "quick check" that compares each file's size and last-modified time on both sides. Files that match are skipped.

The second is whether each copied file arrived intact. The [rsync manual](https://download.samba.org/pub/rsync/rsync.1.html) says rsync "normally verifies that each transferred file was correctly reconstructed on the receiving side." It does that by checking a whole-file checksum generated as the file is transferred. This happens automatically, with or without any extra option.

So the common claim that rsync never verifies anything is wrong. A plain `rsync -av` does check the files it sends. The questions are what that check covers, and what it leaves out.

### Which checksum does rsync use?

rsync 3.x negotiates the algorithm between the two ends, and `--checksum-choice` can override it. Current versions offer xxHash variants and MD5, among others. The [openrsync project](https://github.com/kristapsdz/openrsync), which macOS now ships, describes hashing the whole reconstructed file with MD4 and comparing. Either way, the hash exists to catch accidental damage, which is what matters on a card copy.

## What does rsync -c (--checksum) actually do?

The `-c` option replaces the quick check. Instead of comparing size and modification time, rsync compares a checksum of every file that has a matching size. Only files whose sizes or checksums differ get transferred.

The `-c` comparison is a before-the-transfer test. The rsync manual says the automatic after-the-transfer check "has nothing to do with" this option. The cost is reading. Both sides must read all the data in every same-size file before any copying starts.

| Check | When it runs | What it reads | What it proves |
|---|---|---|---|
| Quick check (default) | Before transfer | File size and date only | Nothing about contents |
| `-c` / `--checksum` | Before transfer | Every same-size file, on both sides | Which files differ in content |
| Whole-file check (automatic) | During each transfer | The data rsync sent and rebuilt | The transferred file matches what rsync read |

The middle row is useful on its own as an audit. A dry run such as `rsync -rcni /Volumes/Archive01/ /Volumes/Archive02/` copies nothing. It lists only the files that are missing or whose contents differ on the second drive. A file with one flipped byte, the same size and the same date passes the quick check, but a `-c` dry run flags it.

## What can rsync's built-in check miss?

The automatic check is real, but it covers a narrow window. Five gaps matter when the source is a memory card you plan to erase.

### Files the quick check skipped

The whole-file check only runs on files rsync transfers. If an earlier, damaged copy already sits at the destination with the right size and date, a re-run skips it. Nothing is checked. Use `-c` on re-runs over an existing copy.

### Bad data read from the card

rsync computes its checksum from what it read. A flaky reader, cable or card can hand rsync wrong bytes. rsync then copies those wrong bytes faithfully, and its check agrees with itself. A checksum list made in a separate read of the card catches this, because a one-off read error rarely repeats identically.

### No read-back from the destination drive

The manual describes a checksum generated as the file is transferred. It doesn't describe a separate read of the finished file from the destination drive. Freshly written data can still sit in the Mac's memory or the drive's cache. rsync 3.x has `--fsync`, which asks the receiving side to flush each finished file. That pushes data to the drive, but it still isn't a read-back.

### No record afterwards

rsync doesn't save its checksums. Once it exits, you have no list to check the drive against next month. A saved SHA-256 list beside the footage fills that gap.

### Damage that happens later

A drive can develop bad sectors long after a perfect copy. No transfer-time check can see that. Only a later re-check against a saved list, or a `-c` dry run against a second copy, will catch it.

## Is rsync over SSH safer than a local copy?

Over a network, SSH protects the data in transit. The SSH transport layer adds a message authentication code to every packet ([RFC 4253](https://www.rfc-editor.org/rfc/rfc4253.html)). A packet damaged on the way fails that check instead of being passed along as good data.

rsync's own whole-file check works the same way locally and over SSH. Neither SSH nor that check rereads the file from the remote disk once it is written.

With `-c` over SSH, each machine hashes its own files and only the checksums cross the network. That makes a `-c` dry run a cheap way to audit a remote copy. The result is only as good as each machine's own reads, so keep a checksum list for anything that matters.

## Which rsync does your Mac have?

The rsync on a current Mac isn't the Samba project's rsync. Since macOS 15.4, `/usr/bin/rsync` is openrsync, a separate BSD-licensed implementation. According to [Der Flounder](https://derflounder.wordpress.com/2025/04/06/rsync-replaced-with-openrsync-on-macos-sequoia/), it accepts only a subset of rsync's command-line options. Before Sequoia, macOS shipped rsync 2.6.9 from 2006.

Run `rsync --version` to see which one you have. openrsync reports itself by name and lists the protocol it speaks. The basic options in this post (`-r`, `-t`, `-v`, `-c`, `-n`, `-i`, `--exclude`) are listed in the openrsync manual page that ships with macOS. Some 3.x options, such as `--fsync` and `--checksum-choice`, don't appear there. For the full current feature set, [Homebrew's rsync formula](https://formulae.brew.sh/formula/rsync) installs the Samba project's rsync 3.x.

## How do you check an rsync copy with shasum on a Mac?

The `shasum` tool built into macOS can write a checksum list and later check files against it ([shasum reference](https://ss64.com/mac/shasum.html)). The recipe below assumes a card named CARD and a drive named Archive01. Change the names and the date to match your shoot.

1. Make the shoot folder and save a SHA-256 list of the card there, not on the card:

```
mkdir -p /Volumes/Archive01/2026-10-28_shoot
cd /Volumes/CARD
find . -type f ! -path '*/.*' -print0 | sort -z | xargs -0 shasum -a 256 > /Volumes/Archive01/2026-10-28_shoot/CARD_A.sha256
```

2. Copy the card with rsync, leaving out the same hidden files:

```
rsync -rtv --exclude='.*' /Volumes/CARD/ /Volumes/Archive01/2026-10-28_shoot/CARD_A/
```

3. Eject Archive01 and connect it again, so the check reads from the drive rather than from memory.

4. Check the copy against the card's list:

```
cd /Volumes/Archive01/2026-10-28_shoot/CARD_A
shasum -a 256 -c --quiet ../CARD_A.sha256 && echo "Every file matches the card"
```

With `--quiet`, only problems print. A FAILED line names the exact file to copy again. A missing file also shows up as an error. Keep `CARD_A.sha256` beside the footage, so you can run step 4 again months later.

### Why the recipe hashes every file and sorts the list

Hash every file, not only `*.MP4`. The `-name` test is case-sensitive, so `*.MP4` skips `.mp4`, `.MOV` and `.mov` files. It also skips the sidecars many cameras write, such as GoPro's `.LRV` and `.THM` files or the XML files Sony cameras keep.

Sort the list, or let `shasum -c` do the comparing. `find` returns files in whatever order the filesystem stores them. An exFAT card and an APFS drive store them differently, so diffing two unsorted lists reports mismatches that aren't real. With `sort -z` on both sides, `diff card.sha256 copy.sha256` works too. The `-c` check simply avoids the problem.

The `! -path '*/.*'` test skips hidden files and folders, such as the `.Spotlight-V100`, `.fseventsd` and `._` files macOS can leave on a card. Hidden files like these change on their own and would fail the check for no useful reason.

Current macOS releases, such as macOS 26, also include `sha256sum` and `md5sum` with GNU-style options. Older versions may not, so `shasum` is the safe choice. The list formats match, so `sha256sum -c --quiet ../CARD_A.sha256` works too.

Check the list isn't empty before you trust a pass. Run `wc -l ../CARD_A.sha256` and compare the count with the files on the card. A list made in the wrong folder proves nothing, and `sha256sum -c` reports success on an empty list.

## How long does checking a card take?

Checking takes at least as long as reading every byte, so the card and reader set the pace. The [SD Association](https://www.sdcard.org/developers/sd-standard-overview/bus-speed-default-speed-high-speed-uhs-sd-express/) caps the UHS-I bus at 104 MB/s and UHS-II at 312 MB/s. Real cards read a little slower.

| Card size | At ~90 MB/s (fast UHS-I) | At ~250 MB/s (UHS-II) |
|---|---|---|
| 64 GB | about 12 minutes | about 4 minutes |
| 128 GB | about 24 minutes | about 9 minutes |
| 512 GB | about 95 minutes | about 34 minutes |

The recipe above reads the card twice, once for the list and once for the copy. It then reads the copy once from the destination drive. `shasum` isn't the fastest hasher on a Mac, so a very fast SSD may wait on it instead of the reverse.

## When is a dedicated offload tool a better fit than rsync?

rsync is excellent for mirroring drives, syncing to a NAS or Linux server, and scripted backups. For the narrower question "can I erase this card yet?", offload apps build the checks above into the copy.

- **[OffShoot](https://hedge.co/products/offshoot)**, formerly Hedge, runs on macOS and Windows and has a 10-day trial. Its [verification modes](https://docs.hedge.video/offshoot/features/verification) range from a fast Transfer mode to Source and Source & Destination modes. The documentation advises against the Transfer mode if you plan to erase your sources. It always generates XXH64BE checksums and can add MD5, SHA-1 or C4.
- **[Silverstack XT](https://pomfort.com/silverstackxt/features/)** from Pomfort lists checksum-verified copies with XXH64, MD5, SHA-1, C4ID, XXH3 and XXH128. It also offers source verification and copies to multiple destinations. Pomfort offers a free 10-day trial.
- **MediaFlowSwift** [computes SHA-256 from the card](/manual/importing-media/#every-copy-is-checked) and writes the copy. It then reads the whole copy back from the drive and compares. A copy that doesn't match is made once more; if it fails again, the import stops and names the file. Import never deletes anything from the card.

MediaFlowSwift's [Clear Card](/manual/organizing-media/#clear-card) deletes only clips already organized and verified at the destination. It reads each organized copy back in full before deleting. On cards the camera laid out itself, it deletes nothing and says when the card is safe to format in the camera.

MediaFlowSwift's limits matter for this comparison. The import copies to one place at a time. A second checked copy comes later, from [Archive to USB](/manual/project-management/#archiving-a-project-to-usb); see [How to Keep Two Checked Copies of a Memory Card on a Mac](/guides/two-checked-copies-of-a-card-on-a-mac/).

MediaFlowSwift can organize to a mounted network share, but it doesn't sync to Linux servers over SSH. It keeps checksums inside the project rather than writing a checksum list onto the drive. Its Re-check files command compares sizes, not checksums, so for audits years later, `shasum -c` or an rsync `-c` dry run is still the tool. It runs on Apple silicon Macs, with Windows and Intel Mac versions coming.

## What's a sensible routine before erasing a card?

Whatever tool does the copying, the same four steps prove a card copy.

1. **Save a checksum list from the card.** Use a separate read, before or during the copy.
2. **Copy, then check from the drive.** Reconnect the drive and check every file against the list.
3. **Make a second checked copy.** Use another drive or a NAS, and check that copy too.
4. **Audit now and then.** Re-run `shasum -c`, or an `rsync -rcni` dry run between the two copies.

For where that second copy should live, compare [NAS video storage](/blog/2026/10/nas-video-storage-how-to-choose/) with [LTO, NAS and cloud archives](/blog/2026/10/video-archive-storage-lto-vs-nas-vs-cloud/). For the full shoot-day routine, see [Video Ingest Workflow](/blog/2026/10/video-ingest-workflow/). For a step-by-step look at one app's checks, see [Is It Safe to Erase Your Card After Importing on a Mac?](/guides/verify-footage-copied-before-erasing-card/)

If you'd rather not script this every shoot, [download MediaFlowSwift](/download.html) and try it on a real card. Plans are on the [home page](/#plans).
