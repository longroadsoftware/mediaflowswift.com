---
layout: post
permalink: /blog/2026/11/external-hard-drives-for-video-mac/
published: "2026-11-04"
updated: "2026-11-04"
og_image: "/images/blog/external-hard-drives-for-video-mac.png"
title: "External Hard Drives for Video Storage: A Mac Buyer's Guide"
seo_title: "External Hard Drives for Video on a Mac: Buyer's Guide"
description: "How to choose external hard drives for video storage on a Mac: SSD or hard drive, which port, how much capacity per camera, and what two drives cost."
slug: "external-hard-drives-for-video-mac"
category: "storage-backup"
tags: ["external-drives", "ssd", "backup", "archive", "card-offload", "checksums"]
keywords: "external hard drives for video storage, best external drive for video editing mac, ssd vs hdd for video, how much storage for 4k video, thunderbolt vs usb ssd"
takeaways:
  - "Buy two kinds of drive: a fast SSD for the projects you are editing, and a large hard drive for footage you have finished with."
  - "Size an editing drive by adding up the data rates of the streams you play at once; 4K ProRes 422 HQ at 30 fps needs about 110 MB/s per stream."
  - "Footage per hour ranges from about 30 GB for a GoPro at Standard bit rate to roughly 400 GB for 4K ProRes 422 HQ and more for 6K RAW."
  - "As of November 2026, makers' list prices put a 2TB portable SSD near $240 per terabyte and a 12TB desktop hard drive near $55 per terabyte."
  - "A finished Finder copy is not proof; compare checksums of the card and the copy before you erase anything."
faq:
  - q: "Can I edit 4K video directly from an external drive on a Mac?"
    a: "Yes, if the drive keeps up with the streams you play. One stream of 4K H.265 from a mirrorless camera needs about 25 MB/s, and one stream of 4K ProRes 422 HQ needs about 110 MB/s. A portable SSD on a 10 Gb/s USB port covers single streams and light multicam. Use Thunderbolt or USB4 for heavy multicam or RAW, and keep hard drives for storage."
  - q: "Is it safe to erase my SD card after copying files in Finder?"
    a: "Not on the strength of the Finder copy alone. Finder reports that the copy finished, but it does not compare checksums of the card and the copy. Compute a checksum such as SHA-256 for each file on both sides and confirm they match, or use an offload tool that does this for you. Erase the card only after every file has passed."
  - q: "How many terabytes do I need for YouTube footage?"
    a: "Start from what you shoot in a month. At 200 GB a month you collect about 2.4 TB a year. Two copies of that is about 4.8 TB, and about 6 TB with roughly 30% headroom. Footage from a ProRes or RAW camera can be ten times larger per hour, so measure a real card from your own camera before buying."
  - q: "Should I format an external drive as APFS or exFAT for video?"
    a: "Choose APFS for a drive that only Macs will use, and exFAT for one that also has to work on Windows. Apple's Disk Utility guide describes both formats. Format the drive once, before the first offload, because erasing it later to change the format deletes everything on it."
  - q: "Can I keep my video archive on an SSD in a drawer?"
    a: "You can, but check it regularly. The JEDEC endurance standard only requires a client SSD to keep data for one year unpowered at 30 degrees Celsius once its rated write endurance is used up. A lightly used drive will usually do better, but nobody promises how long. Power archive drives up at least once a year and check that the files still read."
sources:
  - title: "Apple ProRes white paper (April 2022), Apple"
    url: "https://www.apple.com/final-cut-pro/docs/Apple_ProRes.pdf"
  - title: "Apple ProRes RAW white paper (May 2023), Apple"
    url: "https://www.apple.com/final-cut-pro/docs/Apple_ProRes_RAW.pdf"
  - title: "HERO13 Black: SD Card Capacity In Various Settings, GoPro"
    url: "https://community.gopro.com/s/article/HERO13-Black-SD-Card-Capacity-In-Various-Settings?language=en_US"
  - title: "DJI Mini 4 Pro specs, DJI"
    url: "https://www.dji.com/mini-4-pro/specs"
  - title: "Z6III Reference Guide: Video Frame Size and Rate Options (bit rates), Nikon"
    url: "https://onlinemanual.nikonimglib.com/z6III/en/video_frame_size_and_rate_options_45.html"
  - title: "MacBook Air (13-inch, M4, 2025) Tech Specs, Apple"
    url: "https://support.apple.com/en-us/122209"
  - title: "MacBook Pro (14-inch, M4 Pro or M4 Max, 2024) Tech Specs, Apple"
    url: "https://support.apple.com/en-us/121553"
  - title: "Portable SSD T7 2TB, Samsung US (checked November 2026)"
    url: "https://www.samsung.com/us/memory-storage/portable-ssd/portable-ssd-t7-usb-3-2-2tb-gray-sku-mu-pc2t0t-am/"
  - title: "PRO-G40 SSD, SanDisk"
    url: "https://www.sandisk.com/products/ssd/external-ssd/sandisk-professional-pro-g40-usb-3-2-ssd?sku=SDPS31H-002T-ZBCND"
  - title: "Envoy Ultra, OWC"
    url: "https://www.owc.com/solutions/envoy-ultra"
  - title: "WD Elements Desktop 12TB, Western Digital (checked November 2026)"
    url: "https://www.westerndigital.com/products/external-drives/wd-elements-desktop-usb-3-0-hdd?sku=WDBWLG0120HBK-NESN"
  - title: "White Paper: SSD Endurance and HDD Workloads (JESD218 retention table), Western Digital"
    url: "https://documents.westerndigital.com/content/dam/doc-library/en_us/assets/public/western-digital/collateral/white-paper/white-paper-ssd-endurance-and-hdd-workloads.pdf"
  - title: "Keeping Personal Digital Video, Library of Congress"
    url: "https://digitalpreservation.gov/personalarchiving/video.html"
  - title: "File system formats available in Disk Utility on Mac, Apple"
    url: "https://support.apple.com/guide/disk-utility/file-system-formats-dsku19ed921c/mac"
  - title: "OffShoot, Hedge (checked November 2026)"
    url: "https://hedge.co/products/offshoot"
  - title: "ShotPut Pro for Mac, Imagine Products (checked November 2026)"
    url: "https://www.imagineproducts.com/product/shotput-pro/mac"
  - title: "ShotPut Studio for Mac, Imagine Products (checked November 2026)"
    url: "https://www.imagineproducts.com/product/shotput-studio/mac"
  - title: "Silverstack XT, Pomfort (checked November 2026)"
    url: "https://pomfort.com/silverstackxt/"
  - title: "habitat flow (checked November 2026)"
    url: "https://habitat-flow.com/"
  - title: "MediaTools Pro and MediaTools Lite (checked November 2026)"
    url: "https://mediatoolspro.com/"
---
The right external hard drives for video storage depend on one question: are you editing from the drive, or keeping footage on it? Editing needs an SSD fast enough for every stream you play at once. Archiving needs cheap, reliable terabytes, which still means hard drives. Most Mac video creators end up with one of each.

This guide covers the specs that matter, how much footage your cameras produce per hour, and what two drives cost as of November 2026. It also covers proving a card copy before you erase it, and keeping a shelf of archive drives straight.

## Which specs matter when buying an external drive for video?

Three specs decide whether a drive suits video: sustained speed, the port it connects through, and capacity. The rest of the box is mostly marketing.

### Sustained speed, not the number on the box

Drive makers quote peak sequential speeds. Those numbers are real, but a drive does not always hold them for a long transfer. OWC's own footnotes show this. The Envoy Ultra is rated at over 6,000 MB/s on Thunderbolt 5. Yet [OWC notes](https://www.owc.com/solutions/envoy-ultra) that long writes on the 2TB model settle to 1,350 MB/s.

Reads usually matter most for editing, and writes matter most for offloads. Look for the footnote, then plan around the lower figure.

### Which port: USB 10 Gb/s, USB4 or Thunderbolt?

The port caps everything behind it. A fast SSD in a slow enclosure, or on a slow port, runs at the port's speed. Apple lists Thunderbolt 4 and USB4 at up to 40 Gb/s on the [MacBook Air with M4](https://support.apple.com/en-us/122209). The [M4 Pro and M4 Max MacBook Pro](https://support.apple.com/en-us/121553) adds Thunderbolt 5 at up to 120 Gb/s.

| Connection | Example drive (maker's rating) | Good for |
|---|---|---|
| USB 3.2 Gen 2 (10 Gb/s) | [Samsung T7](https://www.samsung.com/us/memory-storage/portable-ssd/portable-ssd-t7-usb-3-2-2tb-gray-sku-mu-pc2t0t-am/): up to 1,050 MB/s read | Single streams, proxies, light multicam |
| Thunderbolt 3/4 or USB4 (40 Gb/s) | [SanDisk PRO-G40](https://www.sandisk.com/products/ssd/external-ssd/sandisk-professional-pro-g40-usb-3-2-ssd?sku=SDPS31H-002T-ZBCND): up to 3,000 MB/s read over Thunderbolt 3 | Heavy multicam, RAW, fast copies |
| Thunderbolt 5 | OWC Envoy Ultra: over 6,000 MB/s | The fastest copies and the biggest timelines |

These drives are examples to show the ranges, not recommendations. Real-world speed on a 10 Gb/s USB port usually lands somewhat below the rating. A single hard drive is limited by its spinning platters, not by the port, so a faster port doesn't make one faster.

### How fast does an editing drive need to be?

Add up the data rates of every stream you play at once, then leave headroom. Camera bitrates come in megabits per second, so divide by 8 to get megabytes. Apple's [ProRes white paper](https://www.apple.com/final-cut-pro/docs/Apple_ProRes.pdf) and Nikon's reference guide give typical figures:

- One stream of 4K ProRes 422 HQ at 30 fps runs 884 Mb/s, about 110 MB/s.
- One stream of 6K ProRes 422 HQ at 30 fps runs 2,121 Mb/s, about 265 MB/s.
- One stream of 4K H.265 from a Nikon Z6III runs about 190 Mb/s, roughly 24 MB/s.

The figure of 250 MB/s often quoted for "editing 4K" is a rule of thumb, not a standard. Compressed H.264 and H.265 footage needs far less. Four streams of 4K ProRes 422 HQ need over 440 MB/s, which rules out a single hard drive.

## Do you need an editing drive, an archive drive, or both?

Most people need both, because the same footage has two jobs. An editing drive feeds the timeline you are cutting now. An archive drive holds wrapped projects you may rarely open again. One drive doing both means paying SSD prices for footage that mostly sits idle.

| | Editing drive | Archive drive |
|---|---|---|
| Priority | Sustained read speed | Cost per terabyte |
| Typical drive | Portable NVMe SSD | Large desktop hard drive |
| Port | USB 10 Gb/s, USB4 or Thunderbolt | Any USB |
| Use | Daily scrubbing and playback | Occasional restore |

If the budget only allows one drive, buy the capacity you need with the fastest port you can afford. Expect slower scrubbing on big timelines until you add a second drive.

MediaFlowSwift supports this split with [Move to Editing Drive](/manual/project-management/#editing-on-an-editing-drive). The command copies a project folder to a fast drive, reads every file back and compares it, and leaves the library copy untouched. Return to Library brings new or changed files back when the edit is done.

## How much capacity should you buy for your cameras?

Capacity follows bitrate. Multiply a bitrate in Mb/s by 0.45 to get gigabytes per hour. The figures below come from each maker's own pages:

| Camera and setting | Data rate | About GB per hour |
|---|---|---|
| GoPro HERO13 Black, 4K60, Standard / High bit rate | Variable | ~30 / ~60, from [GoPro's card-capacity table](https://community.gopro.com/s/article/HERO13-Black-SD-Card-Capacity-In-Various-Settings?language=en_US) |
| DJI Mini 4 Pro, maximum | 150 Mb/s | ~68, from [DJI specs](https://www.dji.com/mini-4-pro/specs) |
| Nikon Z6III, 4K30 H.265 10-bit | ~190 Mb/s | ~85, from [Nikon's reference guide](https://onlinemanual.nikonimglib.com/z6III/en/video_frame_size_and_rate_options_45.html) |
| 4K30 ProRes 422 HQ (iPhone or camera) | 884 Mb/s | ~400, from Apple's ProRes white paper |
| Nikon Z6III, 6K30 N-RAW, high quality | ~1,870 Mb/s | ~840, from Nikon's reference guide |

ProRes RAW at 6K is large too. Apple's [ProRes RAW white paper](https://www.apple.com/final-cut-pro/docs/Apple_ProRes_RAW.pdf) says its data rates generally fall between ProRes 422 and ProRes 422 HQ. At 6K and 24 fps, that puts it roughly between 500 and 760 GB per hour.

### How do you size drives for two copies?

Plan for two copies of everything: one working copy and one archive copy. At 200 GB a month, you collect about 2.4 TB a year. Two copies come to about 4.8 TB, and roughly 6 TB with 30% headroom. Measure a real card from your own camera, because variable-bitrate files often come in under the maximum.

MediaFlowSwift's [Storage Forecast](/manual/storage-maintenance/#storage-forecast) helps here. It looks at how much you imported over the last seven days and projects the day the destination drive will be full. A what-if slider shows the headroom left after your next shoot.

## Should you buy an SSD or a hard drive for video footage?

An SSD suits the footage you are working on, and a hard drive suits footage you are storing. The price gap per terabyte is still wide.

### Where hard drives still win

Hard drives win on cost per terabyte for an archive. Footage that sits on a shelf doesn't need fast reads. As of November 2026, Western Digital lists the [12TB WD Elements Desktop](https://www.westerndigital.com/products/external-drives/wd-elements-desktop-usb-3-0-hdd?sku=WDBWLG0120HBK-NESN) at $654.99 in US dollars, about $55 per terabyte. Samsung lists the 2TB T7 portable SSD at $479.99, about $240 per terabyte.

### Where an SSD is the better choice

Anything you cut from directly belongs on an SSD. Hard drives slow sharply when they jump between files, which multicam timelines force them to do. A portable SSD also has no moving parts, so it copes better with offloads in a car or a field.

### Is an SSD safe for long-term storage without power?

An unpowered SSD is not a set-and-forget archive. The JEDEC endurance standard (JESD218) only requires a client SSD to keep data for one year unpowered at 30°C. That requirement applies once the drive has used up its rated write endurance, according to a [Western Digital white paper](https://documents.westerndigital.com/content/dam/doc-library/en_us/assets/public/western-digital/collateral/white-paper/white-paper-ssd-endurance-and-hdd-workloads.pdf). A lightly used drive usually does better, but no maker promises a figure.

Whatever the archive sits on, check it. The Library of Congress suggests [checking saved video files](https://digitalpreservation.gov/personalarchiving/video.html) at least once a year. MediaFlowSwift has no scheduled archive check, so use a checksum tool for that, as described in [verifying copies with rsync](/blog/2026/10/rsync-verify-copied-files/).

## How should you set up a new drive before the first offload?

Format the drive once, before any footage goes on it. Choose APFS for a drive used only by Macs and exFAT for one that must also work on Windows. Apple's Disk Utility guide explains the [file system formats](https://support.apple.com/guide/disk-utility/file-system-formats-dsku19ed921c/mac).

Then pick one folder layout and keep it on every drive. A folder per shoot, named by date such as `2026-06-14_lake-shoot`, is a simple start. The full folder tree and naming rules are in [external hard drive organization for video](/blog/2026/10/external-hard-drive-organization-for-video/). MediaFlowSwift can also [file clips automatically](/guides/automate-video-file-organization-on-mac/) as Destination / Category / Camera / Filename.

## How do you prove a card copy before erasing it?

You prove a copy by comparing checksums of each file on the card and on the drive. A checksum such as SHA-256 is a fingerprint computed from a file's bytes. Matching fingerprints mean the copy is identical; a mismatch means the card is still your only good copy.

Finder reports when a copy finishes, but it doesn't compare checksums afterwards. That gap is why erasing a card after a drag-and-drop feels risky. The step-by-step check is in [checksum verification before erasing a card](/blog/2026/10/checksum-verification-before-erasing-card/).

### Which offload tools verify copies?

Several Mac tools do the comparison for you. Each vendor's own site, checked in November 2026, says:

- **[OffShoot](https://hedge.co/products/offshoot)**, formerly Hedge, runs on macOS and Windows and has a 10-day trial.
- **[ShotPut Pro](https://www.imagineproducts.com/product/shotput-pro/mac)** and **[ShotPut Studio](https://www.imagineproducts.com/product/shotput-studio/mac)** from Imagine Products sell perpetual licenses or 30-day rentals.
- **[Silverstack XT](https://pomfort.com/silverstackxt/)** from Pomfort verifies to several destinations at once and has a free trial. It is built for on-set data managers.
- **[habitat flow](https://habitat-flow.com/)** has a free plan for up to 150 GB a week.
- **[MediaTools Lite](https://mediatoolspro.com/)** is free and ingests with SHA-256 verification on macOS and Windows.

### Where does MediaFlowSwift fit?

MediaFlowSwift checks every copy during import. It computes a SHA-256 checksum from the card, writes the copy, then reads the whole copy back from the drive and compares. A mismatch is retried once; if it fails again, the import stops and names the file. Import never deletes anything from the card, as the [importing chapter](/manual/importing-media/#every-copy-is-checked) explains.

Erasing is a separate step. [Clear Card](/manual/organizing-media/#clear-card) deletes only clips already organized and verified at the destination. On a card laid out by the camera, it deletes nothing and says when the card is safe to format in the camera.

MediaFlowSwift's limits are real. It copies to one destination per import and writes no ASC MHL file, so a crew that needs either should look at the tools above. It runs on Macs with Apple silicon and macOS 13 or later. Versions for Windows and Intel Macs are coming.

## How do you keep track of several archive drives?

Number every drive and keep a record of what is on each one. A numbered sticker and one line in an index beat a drive named "Backup." The index tells you which drive to pull without plugging anything in.

A spreadsheet works and costs nothing. List each drive number with its shoot dates, cameras and projects, and update it every time you add footage.

MediaFlowSwift keeps that record for you. [Archive to USB](/manual/project-management/#archiving-a-project-to-usb) numbers each drive: USB #0001, USB #0002 and so on. It copies the project folder, reads every file back, and records which drive holds the project. [Manage Archive Volumes](/manual/project-management/#managing-archive-volumes) lists every numbered drive and the projects on it, connected or not. Media organized outside the project folder isn't copied, and the Archive sheet says how much before you start. The guide to [labeling and cataloging archive drives](/guides/label-and-catalog-archive-drives-for-video/) walks through it.

## What does a two-drive setup cost?

Take the makers' list prices as of November 2026, in US dollars. A 2TB Samsung T7 ($479.99) plus a 12TB WD Elements Desktop ($654.99) comes to about $1,135. Retailer prices differ from list and change often, so compare before you buy. A smaller archive drive or a lower-capacity SSD brings the total down.

Verification software ranges from free to paid. Finder is free but doesn't prove the copy. A Terminal checksum is free and does. MediaTools Lite and habitat flow's free plan cost nothing, while OffShoot and ShotPut sell one-time licenses. For a network option instead of a shelf of drives, see [how to choose NAS video storage](/blog/2026/10/nas-video-storage-how-to-choose/).

Want verified imports, Clear Card and numbered archive drives in one Mac app? MediaFlowSwift has a [14-day trial](/download.html) with no card required. The [plans are listed here](/#plans). Whichever drives you buy, the rule stays the same: verify the copy first, then clear the card.
