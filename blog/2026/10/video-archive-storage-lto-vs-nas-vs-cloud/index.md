---
layout: post
permalink: /blog/2026/10/video-archive-storage-lto-vs-nas-vs-cloud/
published: "2026-10-21"
updated: "2026-10-21"
og_image: "/images/blog/video-archive-storage-lto-vs-nas-vs-cloud.png"
title: "Video Archive Storage: LTO vs NAS vs Cloud, With Real Five-Year Costs"
seo_title: "Video Archive Storage: LTO vs NAS vs Cloud Costs"
description: "Video archive storage compared: five-year cost per TB and restore times for LTO tape, NAS, drives and cloud, using October 2026 prices in US dollars."
slug: "video-archive-storage-lto-vs-nas-vs-cloud"
category: "storage-backup"
tags: ["archive", "lto", "nas", "cloud-storage", "backup"]
keywords: "video archive storage, LTO vs NAS vs cloud, LTO-9 tape cost, Glacier Deep Archive egress, 3-2-1 backup for video"
takeaways:
  - "For a 50 TB archive, hard drives on a shelf cost roughly $55–60 per TB over five years, a 4-bay NAS roughly $90–155, and LTO-9 tape roughly $255–285, as of October 2026."
  - "LTO tape only beats hard drives at several hundred terabytes, because a Thunderbolt LTO-9 drive for a Mac costs $12,500 or more while each 18 TB tape costs about $100."
  - "Amazon S3 Glacier Deep Archive stores data for about $1 per TB a month, but restores take up to 12 or 48 hours and internet transfer out costs about $0.09 per GB."
  - "The 3-2-1 rule, credited to Peter Krogh's The DAM Book, asks for three copies on two kinds of media with one copy offsite."
  - "MediaFlowSwift checks every copy it makes and catalogs numbered archive drives, but it does not write LTO tape or upload to cloud storage."
faq:
  - q: "Is LTO tape worth it for a solo creator with 50 TB of footage?"
    a: "Usually not on cost alone. A Thunderbolt LTO-9 drive for a Mac costs about $12,500 to $13,800 as of October 2026, so 50 TB on tape works out at roughly $255 to $285 per terabyte over five years. Hard drives on a shelf come to roughly $55 to $60. Tape starts to pay off at several hundred terabytes, or sooner if you keep two archive copies."
  - q: "How much does it cost to store 1 TB of video in the cloud per month?"
    a: "Amazon S3 Glacier Deep Archive charges $0.00099 per GB-month in US East, about $1 per TB a month or $12 a year, as of October 2026. Backblaze B2 starts at $6.95 per TB a month and Wasabi at $7.99. Deep Archive is cheapest to keep but charges retrieval and transfer-out fees, while B2 and Wasabi include free egress within stated limits."
  - q: "Can I just keep my archive on external hard drives?"
    a: "Yes, and for archives under a few hundred terabytes it is usually the cheapest option. Keep at least two copies on separate drives, with one stored away from the other. Number and catalog every drive so you can find a project again. Plan to replace drives over time, since even data-center drives fail at about 1.4 percent a year in Backblaze's lifetime figures."
  - q: "How do I know a copy is safe before I erase the original?"
    a: "Use software that computes a checksum of the original, reads the whole copy back from the destination, and compares the two. A Finder drag only tells you the copy finished, not that it matches. Erase the card or original drive only after every file has passed that comparison, and keep a second copy for footage you cannot reshoot."
  - q: "What is the cheapest way to store 500 TB of footage?"
    a: "At that size LTO-9 tape is usually cheapest. One Mac-compatible LTO-9 drive plus 28 tapes comes to roughly $15,000 to $17,000, or about $31 to $34 per terabyte, as of October 2026. Each extra copy on tape adds only about $6 per terabyte. Hard drives cost roughly $55 to $60 per terabyte for one copy over five years."
sources:
  - title: "LTO-9 technology, LTO Program"
    url: "https://www.lto.org/lto-9/"
  - title: "LTO-10 technology and FAQ, LTO Program"
    url: "https://www.lto.org/lto-10/"
  - title: "LTO roadmap and compatibility, LTO Program"
    url: "https://www.lto.org/roadmap/"
  - title: "OWC Archive Pro LTO drives and tapes, OWC store"
    url: "https://eshop.macsales.com/shop/owc-archive-pro"
  - title: "MagStor LTO-9 AIR Thunderbolt / USB4 tape drive"
    url: "https://magstor.com/products/magstor-lto-9-18tb-air-thunderbolt-usb4-desktop-tape-drive"
  - title: "Amazon S3 pricing"
    url: "https://aws.amazon.com/s3/pricing/"
  - title: "Archive retrieval options, Amazon S3 User Guide"
    url: "https://docs.aws.amazon.com/AmazonS3/latest/userguide/restoring-objects-retrieval-options.html"
  - title: "AWS Global Network FAQs (free data transfer out)"
    url: "https://aws.amazon.com/about-aws/global-infrastructure/global-network/faqs/"
  - title: "Backblaze B2 Cloud Storage pricing"
    url: "https://www.backblaze.com/cloud-storage/pricing"
  - title: "Wasabi pricing FAQs"
    url: "https://wasabi.com/pricing/faq"
  - title: "Backblaze Drive Stats for Q2 2026"
    url: "https://www.backblaze.com/blog/backblaze-drive-stats-for-q2-2026/"
  - title: "Data Backup Options, US-CERT / CISA"
    url: "https://www.cisa.gov/sites/default/files/publications/data_backup_options.pdf"
  - title: "Synology DS925+ product specifications"
    url: "https://global.download.synology.com/download/Document/Hardware/ProductSpec/DiskStation/25-year/DS925+/enu/Product_Spec_DS925+_enu.pdf"
  - title: "Electricity Monthly Update, US Energy Information Administration"
    url: "https://www.eia.gov/electricity/monthly/update/end-use.php"
  - title: "Canister LTO software, Hedge"
    url: "https://hedge.co/products/canister"
  - title: "OffShoot, Hedge"
    url: "https://hedge.co/products/offshoot"
---
For a Mac-based video archive of 10–100 TB, hard drives on a shelf or in a NAS are usually cheapest over five years. LTO tape only wins at several hundred terabytes, because a Thunderbolt LTO-9 drive costs more than $12,000 as of October 2026. Cloud deep archive is cheap to keep but slow and costly to pull back.

Retrieval speed matters as much as price. A NAS or a numbered drive gives a clip back in minutes. Tape takes longer to load but reads fast. Deep-archive cloud takes up to 12 or 48 hours before the download even starts. Every price below is approximate, in US dollars, and checked in October 2026.

## How much does a video archive cost per terabyte over five years?

### The assumptions behind the numbers

The worked example stores one copy of a 50 TB archive for five years. Drive and NAS prices are approximate street prices and move often. Tape and cloud prices come from the vendors' own pages.

- **External drives:** three 24 TB USB desktop drives at roughly $680–730 each, plus one replacement drive. Drives on a shelf are mostly powered off, so power is ignored.
- **NAS:** a 4-bay NAS at roughly $770–890, with four 24 TB drives at roughly $700–1,310 each, plus one spare. RAID 5 leaves about 72 TB usable.
- **NAS power:** 37.91 W, the "access" figure on [Synology's DS925+ spec sheet](https://global.download.synology.com/download/Document/Hardware/ProductSpec/DiskStation/25-year/DS925+/enu/Product_Spec_DS925+_enu.pdf), running around the clock. At the [EIA's July 2026 US residential average](https://www.eia.gov/electricity/monthly/update/end-use.php) of 18.31¢ per kWh, that is about $300 over five years.
- **LTO-9:** a Thunderbolt LTO-9 drive at $12,499.99 (the [OWC Archive Pro](https://eshop.macsales.com/shop/owc-archive-pro)) to $13,799.99 (the [MagStor AIR](https://magstor.com/products/magstor-lto-9-18tb-air-thunderbolt-usb4-desktop-tape-drive)). Three 18 TB tapes at $98.99 each from OWC, plus a $46.99 cleaning cartridge.
- **Cloud:** list prices for the first terabytes in a US region, from each vendor's pricing page.

### The five-year comparison for 50 TB

| Option | Approx. 5-year cost | Approx. cost per TB |
|---|---|---|
| External drives on a shelf | $2,700–2,900 | $55–60 |
| 4-bay NAS with 4 × 24 TB | $4,600–7,700 | $90–155 |
| LTO-9 drive and 3 tapes | $12,800–14,150 | $255–285 |
| S3 Glacier Deep Archive, storage only | about $3,040 | about $61 |
| Deep Archive plus one full 50 TB restore | about $7,560 | about $151 |
| Backblaze B2 | about $20,850 | about $417 |
| Wasabi | about $23,970 | about $479 |

The cloud rows use $0.00099 per GB-month for Deep Archive, from [Amazon S3 pricing](https://aws.amazon.com/s3/pricing/). That is about $51 a month for 50 TB. The full restore adds bulk retrieval at $0.0025 per GB and internet transfer out at $0.09 per GB, falling to $0.085 after 10 TB. [Backblaze B2](https://www.backblaze.com/cloud-storage/pricing) is $6.95 per TB-month, and [Wasabi](https://wasabi.com/pricing/faq) is $7.99.

### Where tape starts to win

The LTO drive is almost the whole bill. Each extra 18 TB tape adds only about $99, or roughly $5.50 per terabyte. At 250 TB, one copy on tape comes to roughly $56–61 per TB, about level with hard drives. At 500 TB it falls to roughly $31–34 per TB.

A second archive copy moves the crossover lower. Two copies of 250 TB need about 22 drives of 24 TB, roughly $15,400. The same two copies on tape cost about $15,300, drive included. Cheaper refurbished or SAS-only drives exist, but a Mac then needs a Thunderbolt-to-SAS adapter.

### What the table leaves out

The table leaves out your time. A shelf of drives costs nothing per month, but hours go into finding which drive holds a 2022 project. Cataloging every drive matters more than which hardware you pick. The sibling post on [external hard drive organization for video](/blog/2026/10/external-hard-drive-organization-for-video/) covers that habit.

## How fast can you retrieve footage from each storage tier?

Take one scenario: a client asks on Tuesday for a 200 GB project from 2022 and needs it by Friday.

- **NAS or a connected drive:** Gigabit Ethernet tops out at 125 MB/s in theory, so 200 GB takes about 27 minutes. A shelf drive plugged straight into the Mac avoids that network limit.
- **LTO-9 tape:** the [LTO Program](https://www.lto.org/lto-9/) rates LTO-9 at up to 400 MB/s native. OWC rates its Thunderbolt model at up to 300 MB/s. At 300 MB/s, 200 GB reads in about 11 minutes, plus the time to load the tape and wind to the files.
- **S3 Glacier Deep Archive:** [AWS's documentation](https://docs.aws.amazon.com/AmazonS3/latest/userguide/restoring-objects-retrieval-options.html) says Standard restores finish within 12 hours and Bulk restores within 48 hours. Expedited restores are not available for Deep Archive. After the restore, 200 GB takes about 27 minutes to download on a 1 Gb/s line.

Each of those meets a Friday deadline. The difference shows up in bigger pulls. Restoring a whole 50 TB archive means up to 48 hours of waiting, then about four and a half days of downloading at 1 Gb/s.

### Why retrieval time changes which tier you pick

Access frequency should decide the tier. Projects you reopen every month belong on a NAS or a numbered drive, where a restore takes minutes. Projects you touch once a year can live on tape or in cold cloud, where you trade waiting time for a lower monthly cost.

A common mistake is sending everything to the cheapest, slowest tier. The first rush request then waits two days. One reasonable rule: anything you opened in the last year stays on a fast tier, whatever its age.

## When does cloud archive storage make sense for a small studio?

### Where cloud wins

Cloud fits footage you rarely touch and must not lose: finished masters, contract-required rushes, and an offsite copy. Deep Archive is the cheapest place to keep that copy if you seldom restore it. Cloud also gives you the "1 offsite" in 3-2-1 without a second building.

### Where cloud gets expensive

Retrieval-heavy archives are the problem with Deep Archive. A 2 TB restore costs about $180 in bulk retrieval and transfer-out fees. That is more than three months of storing all 50 TB. AWS gives [100 GB of free data transfer out per month](https://aws.amazon.com/about-aws/global-infrastructure/global-network/faqs/), shared across all its services.

Each service has its own rules:

| Service (as of October 2026) | Storage price | Minimum storage time | Getting data back |
|---|---|---|---|
| S3 Glacier Deep Archive | $0.00099/GB-month (about $1/TB) | 180 days | Retrieval fee plus about $0.09/GB transfer out |
| Backblaze B2 | $6.95/TB-month | None | Free up to 3× your average stored data per month, then $0.01/GB |
| Wasabi (Pay as You Go) | $7.99/TB-month, 1 TB minimum charge | 90 days | Free while monthly egress stays at or below your stored volume |

B2 and Wasabi are "hot" storage, so files download right away. Deep Archive is far cheaper to keep but slower and costlier to read. Uploading also takes time: 50 TB at a steady 1 Gb/s needs about four and a half days.

## What does a 3-2-1 backup look like for 50–500 TB of footage?

The 3-2-1 rule comes from Peter Krogh's *The DAM Book*, as credited in the US-CERT paper [Data Backup Options](https://www.cisa.gov/sites/default/files/publications/data_backup_options.pdf). That paper states it plainly: keep three copies of any important file, on two different media types, with one copy offsite.

### A 3-2-1 one person can run

A practical version for a small studio looks like this:

1. **Working copy:** the project on your SSD or NAS while you edit.
2. **Archive copy:** a numbered hard drive on a shelf, cataloged.
3. **Offsite copy:** a second numbered drive kept somewhere else, or a cloud or tape copy.

Two archive copies of 50 TB fill about five 24 TB drives. At 500 TB, that grows to about 42 drives, which is where tape starts to make sense. An all-hard-drive setup gives you separate copies but only one kind of medium. A tape or cloud copy covers the "two media types" part properly.

### Why the verified copy matters before you erase anything

The whole scheme fails if you erase a card before the first copy is proven. Dragging files in Finder tells you the copy finished, not that it matches the card. A checksum comparison, such as SHA-256, turns "I copied it" into "the copy is identical." The guide on [verifying footage before erasing a card](/guides/verify-footage-copied-before-erasing-card/) walks through that step.

## How should you tier footage between working, nearline and deep archive?

### Three tiers, three rules of thumb

- **Working storage:** current projects, selects and proxies on your fastest SSD or NAS. Anything you might open this week stays here.
- **Nearline archive:** finished projects you may revisit for client changes, on a NAS or numbered drives. The sibling post on [how to choose a NAS for video storage](/blog/2026/10/nas-video-storage-how-to-choose/) covers bays, RAID and network speed.
- **Deep archive:** raw card dumps and finished masters you rarely reopen, on tape or in cold cloud.

### What never moves down early

Selects, proxies and the current edit stay on the fast tier until delivery is final. Raw footage can move to deep archive, but only from a copy that has already been checked. Moving an unverified copy down a tier just stores the problem somewhere slower.

## What hidden costs do archive price lists leave out?

### Media refresh and migration

Every tier eventually means copying data onto new media. Hard drives fail: [Backblaze's Q2 2026 Drive Stats](https://www.backblaze.com/blog/backblaze-drive-stats-for-q2-2026/) put the quarterly annualized failure rate at 1.73%. The lifetime rate across its data-center fleet is 1.41%. A shelf of drives therefore needs spares and a refresh plan.

Tape has its own trap. LTO-8 and LTO-9 drives read and write only one generation back, per the [LTO roadmap](https://www.lto.org/roadmap/). [LTO-10 drives](https://www.lto.org/lto-10/) cannot read older tapes at all. Keep a working LTO-9 drive, or plan a migration, for as long as you keep LTO-9 tapes. OWC rates tape itself for "30+ years" of longevity, but the drive to read it rarely lasts that long.

### Egress, minimums and labor

Cloud bills add retrieval and transfer-out fees when you restore. Deep Archive also charges for 180 days even if you delete sooner, and Wasabi for 90. Migration labor is the last silent cost. Moving 50 TB off a shelf of drives means days of copying and checking.

## How do you move a drive-shelf archive into a tiered system?

### Step 1: inventory what you have

List every drive: number, capacity, year and rough contents. Numbered drives beat descriptive names, because a name like "B-roll-03" means little five years later. Flag drives that hold the only copy of anything, since those are your biggest risk.

### Step 2: verify, then move, then retire

Copy each drive to its new tier with checksums, and compare them before you touch the original. Only after every file matches should a drive be wiped or reused. Migrate your most-reused projects first so the new setup pays off early. Then work backward by year; one drive per weekend keeps the job moving.

## Where does MediaFlowSwift fit in a tiered archive?

MediaFlowSwift covers the drive and NAS tiers, not tape or cloud. Import computes a SHA-256 checksum of each file on the card, writes the copy, then reads the whole copy back and compares. [Organize Media](/manual/organizing-media/#organizing-media-to-storage) files clips into Category and Camera folders on a drive or network share, checked against that checksum. [Clear Card](/manual/organizing-media/#clear-card) deletes only clips whose organized copy has been verified.

For the archive tier, [Archive to USB](/manual/project-management/#archiving-a-project-to-usb) copies a finished project folder to a numbered drive and checks every file. File → Manage Archive Volumes then shows which projects are on which drive. The guides on [cataloging archive drives](/guides/label-and-catalog-archive-drives-for-video/) and [keeping two checked copies of a card](/guides/two-checked-copies-of-a-card-on-a-mac/) show both steps.

### Where other tools fit better

MediaFlowSwift does not write LTO tape or upload to cloud storage. For tape on a Mac, Hedge's [Canister](https://hedge.co/products/canister) writes LTFS tapes with verification. Canister costs $399 per activation, and OWC includes it with the Archive Pro drive.

For checked transfers straight to S3 storage, [OffShoot](https://hedge.co/products/offshoot) Pro lists S3 destinations. OffShoot and Canister each offer a 10-day trial, and neither lists a free tier. The sibling post on [evaluating video file management software](/blog/2026/10/evaluating-video-file-management-software/) compares more options.

If your archive lives on drives or a NAS, MediaFlowSwift can handle the checking and the drive catalog. [Download it](/download.html) to try the full app free for 14 days, or see the [plans](/#plans).
