---
layout: post
permalink: /blog/2026/10/nas-video-storage-how-to-choose/
published: "2026-10-21"
updated: "2026-10-21"
og_image: "/images/blog/nas-video-storage-how-to-choose.png"
title: "NAS Video Storage: How to Choose and Structure One"
seo_title: "NAS Video Storage: How to Choose, Size and Structure One"
description: "How to choose NAS video storage: network speed, capacity math from real camera bitrates, RAID levels, folder structure, verified offloads and backups."
slug: "nas-video-storage-how-to-choose"
category: "storage-backup"
tags: ["nas", "raid", "backup", "checksums", "folder-structure"]
keywords: "nas video storage, nas for video editing, raid for video, video storage capacity, prores data rate"
takeaways:
  - "Gigabit Ethernet moves about 110–118 MB/s, so one stream of 4K ProRes 422 HQ (884 Mb/s, about 110 MB/s) fills it; ProRes wants 2.5GbE or faster."
  - "Estimate storage as bitrate in Mb/s × 0.45 to get GB per hour: a GoPro HERO13 Black at its 120 Mb/s maximum is about 54 GB per hour."
  - "A two-bay NAS in RAID 1 suits one person; on four bays, RAID 6 or RAID 10 survives more than RAID 5, at half the raw capacity."
  - "RAID is not a backup, so keep a second, verified copy on numbered archive drives or offsite storage."
  - "Erase a card only after every copy has been read back and matched against a checksum taken from the card."
faq:
  - q: "Is a NAS good for storing GoPro and drone footage?"
    a: "Yes. A GoPro HERO13 Black records at up to 120 Mb/s and a DJI Mini 4 Pro at up to 150 Mb/s, roughly 54 to 68 GB per hour at those maximums. A two-bay NAS in RAID 1 over gigabit or 2.5GbE handles storing and playing that footage for one person. Keep a second copy somewhere else, because RAID is not a backup."
  - q: "Do I still need external drives if I have a NAS?"
    a: "Yes. RAID inside the NAS protects against a failed drive, not against a deleted folder, a corrupted file, ransomware or a dead enclosure. Keep a second copy on numbered, labeled archive drives or offsite storage, with at least one copy away from the NAS. For finished projects you rarely open, archive drives on a shelf are also cheaper than adding NAS capacity."
  - q: "What NAS specs matter for 4K video editing on a Mac?"
    a: "Network speed comes first. Gigabit moves about 110 to 118 MB/s, 2.5GbE about 280 to 295 MB/s, and 10GbE about 1,000 to 1,200 MB/s. One stream of 4K ProRes 422 HQ at 29.97 fps needs about 110 MB/s, so ProRes wants 2.5GbE or faster. Drive count comes next: a two-drive mirror suits one editor, while four or more drives handle several streams better."
  - q: "Which RAID level should I use on a four-bay video NAS?"
    a: "RAID 6 or RAID 10 is the safer choice for footage you cannot reshoot. With four drives, both keep half the raw capacity. RAID 6 survives any two drive failures, while RAID 10 writes faster and rebuilds by copying from the surviving mirror. RAID 5 keeps three drives of capacity but survives only one failure, so pair it with a verified second copy."
  - q: "How do I safely erase SD cards after copying to a NAS?"
    a: "Erase a card only after a verified copy. Finder does not compare the copy with the card, so a bad write can look like a clean transfer. Use a tool that takes a checksum such as SHA-256 from the card, reads the copy back from the NAS and compares the two. Then format the card in the camera, which is the safe route for cards the camera lays out itself."
sources:
  - title: "Apple ProRes white paper (April 2022), Apple"
    url: "https://www.apple.com/final-cut-pro/docs/Apple_ProRes.pdf"
  - title: "Set the video format in Final Cut Camera, Apple Support"
    url: "https://support.apple.com/guide/final-cut-camera/set-the-video-format-dev14d309a3f/ios"
  - title: "HERO13 Black tech specs, GoPro"
    url: "https://gopro.com/en/us/shop/cameras/buy/hero13black/CHDHX-131-master.html"
  - title: "DJI Mini 4 Pro specs, DJI"
    url: "https://www.dji.com/mini-4-pro/specs"
  - title: "RAID Calculator, Synology"
    url: "https://www.synology.com/en-us/support/RAID_calculator"
  - title: "What is Synology Hybrid RAID (SHR)?, Synology Knowledge Center"
    url: "https://kb.synology.com/en-global/DSM/tutorial/What_is_Synology_Hybrid_RAID_SHR"
  - title: "FIPS 180-4, Secure Hash Standard, NIST"
    url: "https://csrc.nist.gov/pubs/fips/180-4/upd1/final"
  - title: "Backblaze B2 cloud storage pricing, Backblaze"
    url: "https://www.backblaze.com/cloud-storage/pricing"
---
Choosing NAS video storage comes down to three numbers. The first is how many gigabytes you shoot per hour. The others are how many editors read at once and how fast your network runs. A solo shooter with HEVC or GoPro footage does well with a two-bay mirror. ProRes or a second editor needs 2.5GbE, more drives and proxies.

A NAS is also one copy, not a backup, however many drives it holds. This guide covers the network, the capacity math, RAID, folder structure, card verification and the second copy. The numbers come from Apple, GoPro, DJI and Synology.

## What does a NAS need to handle video editing over the network?

### Network speed sets the ceiling

Ethernet speed caps what any NAS can deliver. Gigabit Ethernet moves roughly 110–118 MB/s in practice, 2.5GbE roughly 280–295 MB/s, and 10GbE roughly 1,000–1,200 MB/s. Camera bitrates are quoted in megabits, so divide by 8 to compare. A GoPro HERO13 Black tops out at 120 Mb/s, about 15 MB/s, according to [GoPro's tech specs](https://gopro.com/en/us/shop/cameras/buy/hero13black/CHDHX-131-master.html). Apple's [ProRes white paper](https://www.apple.com/final-cut-pro/docs/Apple_ProRes.pdf) lists ProRes 422 HQ at 220 Mb/s for 1080p and 884 Mb/s for 3840×2160, both at 29.97 fps.

One stream of 4K ProRes 422 HQ needs about 110 MB/s. That single stream fills a gigabit link on its own, while 2.5GbE carries two with room to spare. Pressure builds as you add streams: a second Mac pulling selects, a multicam timeline, or a backup job running at the same time.

### Drive count matters as much as the link

A modern 3.5-inch hard drive reads roughly 150–280 MB/s on long sequential files. The range depends on the drive's size and where on the platter the data sits. Several streams at once turn those long reads into seeking, and throughput drops sharply. More drives in the array spread the load, which is why four bays handle shared editing better than two.

Two drives in RAID 1 are still a sound choice for one person. A mirror can serve reads from either disk, and one or two streams of camera-original footage fit easily. Plan for four or more drives when two editors, ProRes or multicam work hit the same volume.

### Editing over SMB vs working locally

Latency, not raw throughput, is what you feel when editing from a NAS. Scrubbing reads the disk in small bursts, and each burst pays a network round trip that a local SSD avoids. A common split keeps camera originals on the NAS and cuts from proxies or a local SSD. MediaFlowSwift follows that pattern. When [imports land on a network share](/manual/importing-media/), it makes review proxies on the Mac, so clips play at once.

## How much NAS storage do you need for video footage?

Storage need comes from three numbers: data rate, hours shot per week, and how long footage stays on the NAS. One rule converts bitrate to storage. Gigabytes per hour equals megabits per second × 0.45, because 3,600 seconds ÷ 8 bits ÷ 1,000 is 0.45.

### Data rates for common creator cameras

| Source and setting | Data rate | GB per hour | Where the figure comes from |
|---|---|---|---|
| GoPro HERO13 Black, maximum | 120 Mb/s | ~54 | [GoPro tech specs](https://gopro.com/en/us/shop/cameras/buy/hero13black/CHDHX-131-master.html) |
| DJI Mini 4 Pro, maximum | 150 Mb/s | ~68 | [DJI specs](https://www.dji.com/mini-4-pro/specs) |
| iPhone, 4K 30 fps, HEVC | ~23 Mb/s (175+ MB per minute) | ~10.5 | [Apple, Final Cut Camera guide](https://support.apple.com/guide/final-cut-camera/set-the-video-format-dev14d309a3f/ios) |
| ProRes 422 HQ, 1080p 29.97 fps | 220 Mb/s | ~99 | [Apple ProRes white paper](https://www.apple.com/final-cut-pro/docs/Apple_ProRes.pdf) |
| iPhone, 4K 30 fps, ProRes 422 HQ | ~880 Mb/s (6.6+ GB per minute) | ~400 | Apple, Final Cut Camera guide and ProRes white paper |

The spread is the point. Ten hours a week of GoPro or drone footage at maximum bitrate comes to roughly 540–680 GB. The same ten hours of iPhone 4K ProRes 422 HQ is about 4 TB. Camera maximums are ceilings, and variable-bitrate files often come in smaller. Check the size of a real card from your own camera before you buy drives.

### RAID overhead and usable capacity

Parity RAID gives up one or two drives' worth of space. RAID 5 keeps the capacity of n−1 drives and RAID 6 keeps n−2. Four 8 TB drives therefore give about 24 TB in RAID 5 and 16 TB in RAID 6. RAID 10 keeps half, and a two-drive RAID 1 keeps one drive's worth. Real volumes come in a little lower. Synology's [RAID calculator](https://www.synology.com/en-us/support/RAID_calculator) notes about 10 GB of system space per drive, plus 2–4% for filesystem metadata.

### Planning for growth

Buying one drive size larger than today's math suggests is cheaper than upgrading later. Growing a classic RAID by swapping in bigger drives means one rebuild per drive. The extra space appears only after the last swap. Synology recommends its [Hybrid RAID (SHR)](https://kb.synology.com/en-global/DSM/tutorial/What_is_Synology_Hybrid_RAID_SHR) for mixed drive sizes, though some models don't support it. MediaFlowSwift's [Storage Forecast](/manual/storage-maintenance/#storage-forecast) projects when the destination drive will fill, based on your last seven days of imports.

## Which RAID level is best for video storage on a NAS?

### Two bays: RAID 1

A two-bay NAS has one sensible layout for footage: RAID 1. The two drives mirror each other, and you keep one drive's capacity. A failed drive can be replaced while the data stays online, and the rebuild is a straight copy from the surviving disk. That setup suits a solo shooter's dailies and archive.

### Four bays: RAID 5, RAID 6 or RAID 10

A four-bay NAS adds real choices. RAID 5 gives the most space, three drives' worth, but survives only one failure. A rebuild reads every remaining disk and can take a day or more on large drives. A second failure in that window loses the volume.

RAID 6 survives any two failures at the cost of a second drive's space. RAID 10, two mirrored pairs, keeps the same half of raw capacity as RAID 6 on four drives. It writes faster and rebuilds by copying from the surviving mirror. RAID 10 always survives one failure, and two only when they hit different pairs.

For footage you can't reshoot, RAID 6 or RAID 10 is the safer pick on four bays. RAID 5 is reasonable when a verified second copy exists elsewhere and you need the space. Either way, the second copy matters more than the RAID level.

### Why RAID never replaces a second copy

RAID protects against a dead drive. It does nothing for a deleted folder, a corrupted file, ransomware, or a NAS knocked off a shelf. Synology's [SHR article](https://kb.synology.com/en-global/DSM/tutorial/What_is_Synology_Hybrid_RAID_SHR) states plainly that RAID, classic or SHR, is not a backup solution.

## Can multiple editors work off the same NAS at once?

### One editor: usually fine

A single editor working from a NAS over 2.5GbE or 10GbE is fine for most H.264 and HEVC camera originals. The usual bottleneck is competing disk activity, not the network. An offload or backup job writing to the same drives while you scrub is what makes playback stutter.

### Two editors: proxies and separate folders

A second Mac changes the math. Two editors writing to one project folder, or one editing while the other offloads cards, compete for the same drives. Proxies are the standard fix: lightweight copies stream easily, and the edit switches back to originals for export. Separate ingest and editing folders also help, so offloads never touch an open project.

MediaFlowSwift can [organize a project](/manual/organizing-media/) into one destination on a network share that every Mac reaches. The [shared database](/manual/shared-database/) that several Macs use, a Studio Pro feature, gives each Mac the same projects list. For folder layouts that hold up, see [how to automate video file organization on your Mac](/guides/automate-video-file-organization-on-mac/).

## When is a NAS the wrong choice for video footage?

A NAS is overkill for a solo shooter whose library fits on a few terabytes. Two external SSDs, one working and one backup, often cost less than a two-bay NAS with drives. They are also faster to edit from. The guide to [external hard drive organization for video](/blog/2026/10/external-hard-drive-organization-for-video/) covers that setup.

### Gigabit is the hidden bottleneck

Most home networks still run gigabit Ethernet, about 110–118 MB/s in practice. That speed handles GoPro, drone and HEVC files easily, plus proxies of anything. One stream of 4K ProRes 422 HQ fills it, though. ProRes over gigabit means editing locally from an SSD and using the NAS for storage only.

### Cold archives: numbered drives may beat a NAS

Finished projects you rarely open are often cheaper on numbered, labeled archive drives than in NAS bays. Drives on a shelf draw no power and sit offline, out of reach of ransomware. A NAS earns its keep when several Macs need the same files or recent work must stay online. The comparison of [LTO vs NAS vs cloud for video archives](/blog/2026/10/video-archive-storage-lto-vs-nas-vs-cloud/) weighs the long-term options.

## How should you structure folders and archives on a video NAS?

### A folder scheme that scales

Three top-level folders keep a video share readable: `01_INGEST` for fresh offloads, `02_PROJECTS` for active work and `03_CLOSED` for finished projects. Footage should not stay in `01_INGEST` for long. Once a card is verified and filed, its clips move into a project. When the project closes, it moves to `03_CLOSED` and a copy goes to a numbered archive drive.

Inside a project, one folder per card keeps sources traceable, for example `2026-01-15_SkiTrip_GoProA/`. Putting the date first makes Finder sort by date. Keep selects and edit files inside the project folder, so the project moves as one unit.

### Naming cards, shoots and drives so search works later

Folder names should follow one pattern every time: `YYYY-MM-DD_Location_Camera`. A name like GOPR0042 says nothing in three years. `2026-01-15_SkiTrip_GoProA` says when, where and which camera. Archive drives deserve the same rule, so `ARCHIVE_004` on the label beats "My Passport 2". The guide to [labeling and cataloging archive drives](/guides/label-and-catalog-archive-drives-for-video/) covers the catalog side.

Software should fit the scheme rather than replace it. MediaFlowSwift's Organize Media files clips as Destination / Category / Camera / Filename, and the destination can be a network share. Its [Archive to USB](/manual/project-management/#archiving-a-project-to-usb) numbers each drive (USB #0001, USB #0002) and records which project went where. One limit matters on a NAS: Archive copies only the project folder. Media organized to a destination outside that folder stays behind, and the Archive sheet says so first.

## How do you verify a card offload before clearing it?

A Finder copy tells you the transfer finished, not that it is intact. Finder doesn't compare what landed on the drive against what's on the card. A flaky card reader or a bad write can therefore pass unnoticed. A verified offload closes that gap before the card is erased.

### What a verified copy actually checks

A verified copy takes a checksum of each source file, reads the whole copy back from the destination and compares the two. Matching SHA-256 values mean the copy matches the source, with a vanishingly small chance of error. SHA-256 is one of the hash algorithms in NIST's [Secure Hash Standard, FIPS 180-4](https://csrc.nist.gov/pubs/fips/180-4/upd1/final). A network share adds one caveat: the NAS may answer a read-back from its own memory cache rather than its disks.

### Where MediaFlowSwift and other tools fit

Dedicated offload tools such as OffShoot also verify transfers with checksums; see [MediaFlowSwift vs OffShoot](/vs/offshoot/). MediaFlowSwift's import computes SHA-256 from the card, writes the copy, reads it back from the drive and compares. A mismatch is retried once, then the import stops and names the file. Import never deletes anything from the card.

Clearing is a separate step. [Clear Card](/manual/organizing-media/#clear-card) deletes only clips already organized and verified at the destination, and reads each organized copy back first. On cards the camera lays out itself, such as Sony XAVC cards, it deletes nothing. Instead it tells you when the card is safe to format in the camera. These checks prove the copy, not the health of the NAS disks, so RAID and a second copy still matter.

For a wider checklist, see [how to evaluate video file management software](/blog/2026/10/evaluating-video-file-management-software/).

## How do you back up a NAS that holds your video archive?

### A second copy off the NAS

A NAS holds one copy, however many drives it has. An enclosure failure, a corrupted storage pool or ransomware on the shares can take the whole archive. Keep a second copy on separate drives, or on a second NAS at another location. Rotate on a schedule you will actually keep, such as swapping an offsite drive at the close of each project.

Cloud storage is the other offsite option. [Backblaze's pricing page](https://www.backblaze.com/cloud-storage/pricing) lists B2 at $6.95 per TB per month, in US dollars, as of October 2026. At that rate 20 TB costs about $139 a month, with free downloads up to three times your average monthly storage. Over several years, a drive kept at a relative's house is often cheaper for tens of terabytes. Whatever you choose, verify the backup the same way you verify a card offload.

### Snapshots are not backups

NAS snapshots undo accidental deletions and overwrites, which is worth having. A snapshot lives on the same disks as the original, so a dead enclosure or a stolen NAS takes both. Treat snapshots as undo, not backup. The test for a real backup is simple: could you lose the NAS entirely and still recover every clip?

If you want verified imports, organizing to a NAS share, Clear Card and numbered archive drives in one Mac app, [download MediaFlowSwift](/download.html). It runs on Apple silicon Macs with macOS 13 or later, and the [plans](/#plans) start with a 14-day Studio Pro trial that needs no card.
