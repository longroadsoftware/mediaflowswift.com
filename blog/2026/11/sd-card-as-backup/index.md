---
layout: post
permalink: /blog/2026/11/sd-card-as-backup/
published: "2026-11-03"
updated: "2026-11-03"
og_image: "/images/blog/sd-card-as-backup.png"
title: "SD Card as Backup for Video Footage: What to Buy, How to Spot Fakes, and How to Verify Copies"
seo_title: "SD Card as Backup for Footage: Buy, Test, Verify"
description: "Using an SD card as backup for video footage: which speed class and capacity to buy, how to test for fake cards on a Mac, and how to verify every copy."
slug: "sd-card-as-backup"
category: "storage-backup"
tags: ["sd-cards", "backup", "card-offload", "checksums", "fake-cards"]
keywords: "sd card as backup, best sd card for video backup, fake sd card test mac, sd card speed class, verify footage copy"
takeaways:
  - "An SD card is a good short-term carrier for footage, but it should never be the only copy or the long-term archive."
  - "Speed class symbols set a minimum sustained write speed, such as 30 MB/s for U3 and V30, while UHS-I and UHS-II set the bus ceiling of 104 MB/s or 312 MB/s."
  - "Fake cards often report more capacity than they hold, so fill every new card with a full write-and-read test such as F3 or H2testw before you trust it."
  - "The lock switch on a full-size SD card only works if the reader or camera honors it, and microSD cards have no switch at all."
  - "Never erase a card on the strength of a Finder copy; compare checksums of the card and the copy first."
faq:
  - q: "Can I use an SD card as my only backup?"
    a: "No. An SD card is small, easy to lose, and wears with every write. Kingston also notes that flash data retention depends on how much the memory has been cycled, and it advises keeping important data on other media. Use a card to carry footage from the camera to your drives, and keep at least two verified copies on drives, one of them somewhere else."
  - q: "How long will footage last on an SD card in a drawer?"
    a: "No card maker promises a fixed shelf life for data on an unpowered card. Flash memory keeps data without power, but how long depends on how worn the card is and how it is stored. Treat a card in a drawer as temporary. Copy the footage to drives, verify the copies, and check old cards rather than assuming the clips are still readable."
  - q: "How do I check if an SD card is fake on a Mac?"
    a: "Install F3 with Homebrew, then run f3write on the empty, freshly formatted card and f3read afterwards. F3 fills the free space with test files and reads them back. A genuine card returns all of its data intact. A fake card reports lost or corrupted data past its real capacity. Test before you put footage on the card, because the test can destroy existing files on a fake."
  - q: "Does the lock switch on an SD card protect my footage?"
    a: "Only partly. The switch on a full-size SD card is read by the slot or reader, and the SD Association's specification leaves protecting the card to that host device. A Mac honors it and shows a message that the card cannot be modified. A faulty reader may ignore it, and microSD cards have no switch, so treat it as a guard against slips, not a guarantee."
sources:
  - title: "Speed Class, SD Association"
    url: "https://www.sdcard.org/developers/sd-standard-overview/speed-class/"
  - title: "Bus Speed (Default Speed/High Speed/UHS/SD Express), SD Association"
    url: "https://www.sdcard.org/developers/sd-standard-overview/bus-speed-default-speed-high-speed-uhs-sd-express/"
  - title: "Capacity (SD/SDHC/SDXC/SDUC), SD Association"
    url: "https://www.sdcard.org/developers/sd-standard-overview/capacity-sd-sdhc-sdxc-sduc/"
  - title: "Simplified Specifications (Physical Layer, section 4.3.6 Write Protect Management), SD Association"
    url: "https://www.sdcard.org/downloads/pls/"
  - title: "Use the SD and SDXC card slot on your Mac, Apple"
    url: "https://support.apple.com/en-us/102352"
  - title: "Learn About Non-Authentic, Fake, Counterfeit Sandisk Memory Cards, Sandisk"
    url: "https://support-en.sandisk.com/app/answers/detailweb/a_id/50760"
  - title: "F3 (Fight Flash Fraud) documentation"
    url: "https://fight-flash-fraud.readthedocs.io/en/latest/introduction.html"
  - title: "F3 usage: f3write and f3read"
    url: "https://fight-flash-fraud.readthedocs.io/en/latest/usage.html"
  - title: "f3 Homebrew formula"
    url: "https://formulae.brew.sh/formula/f3"
  - title: "H2testw, heise download"
    url: "https://www.heise.de/download/product/h2testw-50539"
  - title: "Flash Memory Guide, Kingston"
    url: "https://media.kingston.com/pdfs/MKF-283.3-Flash-Memory-Guide_US.pdf"
  - title: "OffShoot, Hedge (checked November 2026)"
    url: "https://hedge.co/products/offshoot"
  - title: "OffShoot downloads and trial, Hedge (checked November 2026)"
    url: "https://hedge.co/products/offshoot/downloads"
  - title: "ShotPut Pro, Imagine Products (checked November 2026)"
    url: "https://www.imagineproducts.com/product/shotput-pro"
  - title: "Silverstack, Pomfort (checked November 2026)"
    url: "https://pomfort.com/silverstack/"
---
An SD card works well as a short-term backup or transfer medium for video footage. It can hold a second copy of a shoot or carry clips to an editor. Buy a genuine card with the speed class your job needs. Test it for fake capacity first, and verify every copy with checksums before erasing anything.

An SD card should never be the last copy of anything you care about. This guide covers what the speed and bus labels mean and how much capacity a shoot needs. It also shows how to catch a counterfeit card on a Mac, and where cards fit in a 3-2-1 backup plan.

## Is an SD card a good backup for video footage?

An SD card is a good backup for days, not years. Cards suit the first leg of a copy chain. Think of a second card from the same shoot, or a card that carries selects to an editor. A spare copy kept until the footage is on drives fits too.

SD cards are poor long-term storage for three reasons:

- **Cards get lost.** A card is the size of a stamp, and a microSD card is smaller still.
- **Cards wear.** Every write uses up some of the flash memory's life. A card in daily rotation ages faster than one that rarely gets written.
- **Retention isn't fixed.** Kingston's [Flash Memory Guide](https://media.kingston.com/pdfs/MKF-283.3-Flash-Memory-Guide_US.pdf) says data retention on flash "is dynamic," because how much the memory has been cycled affects it. Kingston advises backing up important information "on other media for long-term safekeeping."

No card maker promises how long footage will survive on a card in a drawer. Plan as if the answer is "not long enough."

### What does the lock switch on an SD card actually do?

The lock switch on a full-size SD card is a signal, not a hard lock. The SD Association's [Physical Layer Simplified Specification](https://www.sdcard.org/downloads/pls/) covers it in section 4.3.6. The spec calls the mechanical switch "host responsibility only." The card's own circuitry doesn't know where the switch sits. The slot or reader reads the switch and decides whether to allow writes.

A Mac honors the switch. Apple's [SD card slot article](https://support.apple.com/en-us/102352) says a locked card brings up a "cannot be modified" message. A worn or cheap reader may not read the switch correctly, though. MicroSD cards, which GoPro cameras and many drones use, have no switch of their own; a full-size adapter's switch works the same way.

Locking a filled backup card is still a sensible habit. A locked card guards against an accidental delete or format on a reader that honors it. Just don't treat the switch as protection the card enforces itself.

## Which SD card should you buy for backing up footage?

For a recording card, buy the speed class your camera's manual asks for at the resolution and frame rate you shoot. For a card that only receives copies from your Mac, capacity and a genuine source matter more than top speed. Speed decides how long the copy takes, not whether it works.

### What do the SD speed class symbols mean?

Each speed class sets a minimum sustained write speed under the conditions the SD Association's [Speed Class standard](https://www.sdcard.org/developers/sd-standard-overview/speed-class/) defines. The number in the symbol is the MB/s figure:

| Symbol | Minimum sustained write | Notes |
|---|---|---|
| Class 10 (C10) | 10 MB/s | Oldest scheme |
| U1 / U3 | 10 MB/s / 30 MB/s | UHS Speed Class |
| V6, V10, V30 | 6, 10, 30 MB/s | Video Speed Class |
| V60, V90 | 60, 90 MB/s | UHS-II or faster cards only |

The big "up to" number on the front of a card is different. That figure is usually a peak read speed, and the card can't sustain it while writing.

### Does UHS-I or UHS-II matter on a Mac?

UHS-I and UHS-II describe the card's bus, which caps how fast data can move. The SD Association's [bus speed table](https://www.sdcard.org/developers/sd-standard-overview/bus-speed-default-speed-high-speed-uhs-sd-express/) puts UHS-I at up to 104 MB/s. UHS-II reaches 312 MB/s in half-duplex mode. Real cards run below those ceilings.

A UHS-II card only runs at UHS-II speed in a UHS-II reader. Apple lists UHS-II support for the SDXC slot on MacBook Pro models from 2021 or later and Mac Studio from 2022 or later. The 2020 iMac and iMac Pro have it too. Other Macs with a slot support up to UHS-I. On a Mac without a slot, the speed depends on the external reader you buy.

### How much SD card capacity does a shoot need?

Capacity follows bitrate. Camera bitrates are given in megabits per second (Mb/s), so divide by 8 to get megabytes per second. A recording at 100 Mb/s writes 12.5 MB/s, about 45 GB per hour. At 400 Mb/s the same hour takes about 180 GB.

| Card's job | What matters most | Practical choice |
|---|---|---|
| Recording in a GoPro, drone or mirrorless camera | Sustained write speed | The speed class the camera's manual names for your mode |
| Second copy of a shoot day | Capacity | At least one full day of footage per card |
| Carrying selects to an editor | Format and capacity | exFAT, so files over 4 GB fit |

The format matters for that last job. The SD Association's [capacity page](https://www.sdcard.org/developers/sd-standard-overview/capacity-sd-sdhc-sdxc-sduc/) sets FAT32 for SDHC cards (up to 32 GB) and exFAT for SDXC cards (over 32 GB). FAT32 can't hold a file of 4 GB or more, so long clips need exFAT. If you erase a card on a Mac, choose exFAT, then label the card and note what's on it.

## How do you avoid fake SD cards?

You avoid fake SD cards by buying from the maker or its authorized resellers, then testing every new card before it holds footage. Sandisk's own [counterfeit guide](https://support-en.sandisk.com/app/answers/detailweb/a_id/50760) lists the signs. Those include made-up product names, spelling mistakes, poor printing and wrong colors. The list also includes "a lower actual capacity than the capacity printed." Sandisk also warns that a price that seems too good to be true probably is.

The capacity trick is the dangerous one for footage. A fake card reports, say, 256 GB to the camera and the Mac but holds far less. Writes past the real capacity seem to succeed. The damage only shows when you read the files back. The [F3 documentation](https://fight-flash-fraud.readthedocs.io/en/latest/usage.html) shows a card that accepted about 29 GB of test files but returned only 1.02 GB intact.

### How do you test a new SD card on a Mac?

[F3 (Fight Flash Fraud)](https://fight-flash-fraud.readthedocs.io/en/latest/introduction.html) is a free tool that fills a card with test data and reads it back. Its two programs, f3write and f3read, run on a Mac. The [Homebrew formula](https://formulae.brew.sh/formula/f3) installs both.

1. Install it with `brew install f3`.
2. Format the new card as exFAT. Test only an empty card: the F3 docs warn that on a fake, the test can destroy files already on it.
3. Run `f3write /Volumes/CARDNAME` to fill the free space with 1 GB test files.
4. Run `f3read /Volumes/CARDNAME` to read them back. A genuine card shows no lost or corrupted data.
5. Delete the test files, or reformat the card in the camera that will use it.

F3's faster test, f3probe, needs Linux, so Mac users run f3write and f3read. On Windows, [H2testw](https://www.heise.de/download/product/h2testw-50539) does the same write-then-verify job. A full test of a large card takes a while, because it writes and reads every free byte. Both tools also print average write and read speeds, which helps you spot a card that can't reach its claimed speed class.

## How do you verify footage copied to or from an SD card?

You verify a copy by computing a checksum, such as SHA-256, for each file on the source and on the copy. Then you confirm the two match. A finished Finder copy doesn't prove that, because Finder doesn't compare the contents afterwards.

This site covers verification in depth elsewhere, so here are the short version and the links:

- [Checksum verification before erasing a card](/blog/2026/10/checksum-verification-before-erasing-card/) shows how to check a copy by hand on a Mac.
- [Verifying copies with rsync](/blog/2026/10/rsync-verify-copied-files/) explains when `rsync -c` helps.
- [How to clear a memory card without losing footage](/blog/2026/10/clear-memory-card-without-losing-footage/) covers formatting after the copy is proved.

Dedicated offload apps do this check for you. [OffShoot](https://hedge.co/products/offshoot), the app formerly known as Hedge, runs on macOS and Windows and offers a [10-day trial](https://hedge.co/products/offshoot/downloads). Imagine Products' [ShotPut Pro](https://www.imagineproducts.com/product/shotput-pro) offers verified offloads with PDF reports. Pomfort's [Silverstack](https://pomfort.com/silverstack/) is an on-set media management tool with a clip library and a free trial.

MediaFlowSwift handles the check as part of import. As each file is copied, it computes a SHA-256 checksum from the card and writes the copy. Then it reads the whole copy back from the drive and compares the two. A copy that doesn't match is made once more. If it fails again, the import stops and names the file. Import never deletes anything from the card. See [Every Copy Is Checked](/manual/importing-media/#every-copy-is-checked) in the manual, and the guide on [whether it's safe to erase a card after importing](/guides/verify-footage-copied-before-erasing-card/).

Import takes common video formats such as MP4 and MOV. It leaves out some, such as BRAW, R3D and Insta360's INSV, and says how many it passed over. Copy and check those files yourself.

## How do you back up camera cards in the field without a laptop?

Without a laptop, the simplest field backup is to stop reusing cards. Bring enough cards for the whole trip, so no card has to be erased before its footage is safely on drives at home. A filled card that never gets formatted on the road is itself a copy.

A few habits make that safer:

- **Record to two cards at once** if your camera has two slots and offers a backup or simultaneous recording mode. Check the camera's manual for the exact setting.
- **Lock filled full-size cards** and store them apart from blank ones, so a full card can't go back into the camera by mistake.
- **Keep filled cards in a case**, not loose in a pocket, and split them across two bags when you travel.

Back at your Mac, copy and verify each card before you format any of them. The [video ingest workflow](/blog/2026/10/video-ingest-workflow/) post covers that routine step by step.

## Where does an SD card fit in a 3-2-1 backup?

A 3-2-1 backup means three copies of your footage, on two kinds of media, with one copy kept offsite. An SD card can count as one of the three for a few days, while you build the other two. After that, its job is done: it gets cleared and goes back into rotation.

The lasting copies belong on drives. MediaFlowSwift's [Organize Media](/manual/organizing-media/#organizing-media-to-storage) files each clip as Destination / Category / Camera / Filename. It checks each copy against the checksum taken at import. [Archive to USB](/manual/project-management/#archiving-a-project-to-usb) then copies a finished project folder to a numbered drive (USB #0001, USB #0002 and so on). It reads every file back, then records where the project went. The guide to [keeping two checked copies of a card on a Mac](/guides/two-checked-copies-of-a-card-on-a-mac/) walks through both steps.

When it's time to reuse the card, [Clear Card](/manual/organizing-media/#clear-card) deletes only clips whose organized copy is verified at the destination. On a card laid out by the camera, it deletes nothing and says when the card is safe to format in the camera. Clear Card also refuses a card mounted read-only, so a locked card stays untouched.

For the drives themselves, see [how to label and catalog archive drives](/guides/label-and-catalog-archive-drives-for-video/) and [organizing external hard drives for video](/blog/2026/10/external-hard-drive-organization-for-video/). For the offsite copy, [LTO vs NAS vs cloud](/blog/2026/10/video-archive-storage-lto-vs-nas-vs-cloud/) compares the options.

MediaFlowSwift runs on Macs with Apple silicon and macOS 13 Ventura or later. If you want the import, organize and archive checks in one app, there's a [free trial on the download page](/download.html), and [plans are listed here](/#plans). Whatever tool you use, the rule stays the same: verify the copy first, then clear the card.
