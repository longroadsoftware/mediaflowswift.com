---
layout: post
permalink: /blog/2026/10/clear-memory-card-without-losing-footage/
published: "2026-10-27"
updated: "2026-10-27"
og_image: "/images/blog/clear-memory-card-without-losing-footage.png"
title: "How to Clear a Memory Card Without Losing Footage"
seo_title: "How to Clear a Memory Card Without Losing Footage"
description: "How to clear a memory card safely: delete vs quick vs full format, in-camera steps for Sony, GoPro and DJI, Mac and Windows erase, exFAT, and recovery."
slug: "clear-memory-card-without-losing-footage"
category: "workflow"
tags: ["card-offload", "formatting", "exfat", "data-recovery", "workflow"]
keywords: "how to clear a memory card, format sd card in camera, delete vs format memory card, exfat vs fat32 sd card, recover formatted sd card"
takeaways:
  - "Clear a card only after every clip has a verified copy, then format it in the camera that will record on it next."
  - "Deleting and quick formatting only remove the card's index, so the footage stays recoverable until new recordings overwrite it."
  - "A Windows full format writes zeros over the whole card, while Disk Utility overwrites old data only through Security Options, which Apple says only some devices offer."
  - "SDXC cards (over 32 GB) use exFAT, and FAT32 can't hold a file of 4 GB or more, which rules it out for long video clips."
  - "After a mistaken format, stop recording on the card and run a read-only recovery tool that saves to a different drive."
faq:
  - q: "Does formatting a memory card permanently delete everything?"
    a: "It depends on the kind of format. A quick format writes a new empty file system and leaves the old data in place until it is overwritten, so recovery is sometimes possible. Camera makers rarely say which kind their menu runs. A Windows full format writes zeros over the whole card, so the old data is gone. Treat any format as permanent and keep a verified copy first."
  - q: "Is it better to delete clips or format the card?"
    a: "Format, once everything is copied and verified. A format clears the whole card in one step and lets the camera write the folders it expects. Deleting suits keeping a few clips on the card. On a Mac, avoid deleting single clips from cards where the camera keeps its own clip list, such as Sony XAVC S cards, because that list can end up wrong."
  - q: "Should I format a new memory card before first use?"
    a: "Yes. Sony, for example, recommends formatting a new card in the camera before you first use it, for stable performance. Formatting in the camera writes the file system and folders that camera expects. The card holds nothing yet, so there is nothing to back up first."
  - q: "Why didn't my card get more free space after I deleted clips on my Mac?"
    a: "Moving files to the Trash doesn't free their space. On a card, the Finder keeps trashed files in a hidden folder on the card itself, and Apple notes that the space comes back only when you empty the Trash. Empty the Trash before you eject, or format the card in the camera instead."
sources:
  - title: "Format, ILCE-7M3 (a7 III) Help Guide, Sony"
    url: "https://helpguide.sony.net/ilc/1720/v1/en/contents/TP0001629780.html"
  - title: "Deleting multiple selected images (Delete), ILCE-7M3 Help Guide, Sony"
    url: "https://helpguide.sony.net/ilc/1720/v1/en/contents/TP0001629749.html"
  - title: "Reset Camera Settings (Format SD Card), GoPro Support"
    url: "https://community.gopro.com/s/article/Reset-Camera-Settings?language=en_US"
  - title: "Aircraft MicroSD Card Recognition Error (Formatting via DJI Fly), DJI Support"
    url: "https://support.dji.com/help/content?customId=en-us03400006806&spaceId=34&re=US&lang=en"
  - title: "Erase and reformat a storage device in Disk Utility on Mac, Apple"
    url: "https://support.apple.com/guide/disk-utility/erase-and-reformat-a-storage-device-dskutl14079/mac"
  - title: "Format a disk for Windows computers in Disk Utility on Mac, Apple"
    url: "https://support.apple.com/guide/disk-utility/format-a-disk-for-windows-computers-dskutl1010/mac"
  - title: "Free up storage space on Mac, Apple"
    url: "https://support.apple.com/en-us/102624"
  - title: "Change in the behavior of the format command in Windows Vista and later versions, Microsoft"
    url: "https://learn.microsoft.com/en-us/previous-versions/troubleshoot/windows-server/format-command-not-write-zeros-to-disk"
  - title: "format command reference, Microsoft"
    url: "https://learn.microsoft.com/en-us/windows-server/administration/windows-commands/format"
  - title: "File System Functionality Comparison, Microsoft"
    url: "https://learn.microsoft.com/en-us/windows/win32/fileio/filesystem-functionality-comparison"
  - title: "Capacity (SD/SDHC/SDXC/SDUC), SD Association"
    url: "https://www.sdcard.org/developers/sd-standard-overview/capacity-sd-sdhc-sdxc-sduc/"
  - title: "SD Memory Card Formatter for Windows/Mac, SD Association"
    url: "https://www.sdcard.org/downloads/formatter/"
  - title: "SD Card Formatter User's Manual, SD Association"
    url: "https://www.sdcard.org/pdf/SD_CardFormatterUserManualEN.pdf"
  - title: "PhotoRec, CGSecurity"
    url: "https://www.cgsecurity.org/wiki/PhotoRec"
  - title: "OffShoot, Hedge (checked October 2026)"
    url: "https://hedge.co/products/offshoot"
  - title: "Silverstack XT, Pomfort (checked October 2026)"
    url: "https://pomfort.com/silverstackxt/"
---
To clear a memory card without losing footage, copy every clip to a drive and verify the copy first. Then format the card in the camera that will record on it next. A format clears the whole card at once and rebuilds the folders the camera expects. Deleting clips or erasing on a computer is a fallback.

This guide covers how to clear a card. It explains what delete, quick format and full format do, with in-camera steps for a Sony a7 III, GoPro and DJI drones. It also covers erasing on a Mac or Windows PC, picking exFAT or FAT32, and what to do after a format you didn't mean.

## When is a memory card safe to clear?

A card is safe to clear once every file you need has a copy on a drive, checked against the card. Ideally there is a second checked copy on another drive too. The exact gate is laid out step by step in [our video ingest workflow](/blog/2026/10/video-ingest-workflow/). How a checksum proves a copy, and how to run one by hand, is covered in [checksum verification before erasing a card](/blog/2026/10/checksum-verification-before-erasing-card/). Everything below assumes you have passed that gate.

## What is the difference between deleting, quick formatting and full formatting a card?

Deleting, quick formatting and full formatting all free the card for new footage. They differ in what happens to the old data and how long they take.

| | Delete files | Quick format | Full format (Windows) |
|---|---|---|---|
| What changes | Entries for the chosen files are removed | A new, empty file system is written | A new file system, plus zeros written over the whole volume |
| Old video data | Stays until overwritten | Stays until overwritten | Overwritten with zeros |
| Scan for bad areas | No | No | Yes |
| Time | Seconds to minutes | Seconds | Long, and longer on bigger cards |

### Deleting files

Deleting removes the file entries, but the video data stays on the card until new recordings reuse that space. Recovery tools can often find it. Deleting is useful when you want to keep some clips on the card. On a Sony a7 III, Sony notes that protected images can't be deleted this way. A format removes them too.

### Quick format

A quick format writes a new, empty file system and leaves the old data in place. Microsoft describes its quick format as deleting the file table and root directory without a sector-by-sector scan for bad areas ([format command reference](https://learn.microsoft.com/en-us/windows-server/administration/windows-commands/format)). Camera makers rarely say which kind of format their menu runs. Sony simply warns that formatting "permanently erases all data" and can't be undone.

### Full format

A full format takes much longer because it writes to the whole card. Since Windows Vista, a full format writes zeros to the whole disk by default ([Microsoft](https://learn.microsoft.com/en-us/previous-versions/troubleshoot/windows-server/format-command-not-write-zeros-to-disk)). The SD Association's own formatter calls its version "Overwrite format." It erases all data by overwriting the user data area ([SD Card Formatter manual](https://www.sdcard.org/pdf/SD_CardFormatterUserManualEN.pdf)). A Mac is different, as the Disk Utility section below explains.

## How do you format a memory card in the camera?

In-camera formatting is the standard way to clear a card after a verified offload. Each maker documents the menu path in its own help pages. Check your model's guide if your camera isn't listed here.

### Sony a7 III

On the a7 III, press MENU, open the Setup tab, choose **Format**, then pick the card slot ([Sony Help Guide](https://helpguide.sony.net/ilc/1720/v1/en/contents/TP0001629780.html)). The camera has two slots, so check the slot number before you confirm. Sony says formatting can take a few minutes on some cards. It won't start when the battery is below 1%. Don't remove the card while the access lamp is lit.

To delete only some files, press MENU, open the Playback tab and choose **Delete** ([Sony Help Guide](https://helpguide.sony.net/ilc/1720/v1/en/contents/TP0001629749.html)). The options include **Multiple Img.**, **All in this Folder** and **All with this date**. There is no "Delete All" item. Sony's hint for clearing everything is to use Format.

### GoPro HERO cameras

GoPro lists the steps for each model ([GoPro Support](https://community.gopro.com/s/article/Reset-Camera-Settings?language=en_US)). On HERO9 Black through HERO12 Black, swipe down on the main screen, then swipe left. Tap **Preferences > Reset > Format SD Card > Format**. Older and smaller models use button sequences instead, and the same page lists those.

### DJI drones flown with DJI Fly

For drones flown with the DJI Fly app, DJI's steps are short ([DJI Support](https://support.dji.com/help/content?customId=en-us03400006806&spaceId=34&re=US&lang=en)). In the camera view, tap the System Settings icon at the upper right. Open **Camera**, then tap **Format**. Older aircraft flown with DJI GO 4 use a different path, so check that app's own help.

## How do you erase a memory card on a Mac?

Disk Utility is the Mac tool for erasing a whole card. The Finder can delete files, but that works differently on a card than most people expect.

### Erase a card in Disk Utility

1. Open Disk Utility and choose View > Show All Devices.
2. Select the card itself in the sidebar, not just its volume, and click Erase.
3. Choose a scheme and a format. Apple's guide to [formatting a disk for Windows computers](https://support.apple.com/guide/disk-utility/format-a-disk-for-windows-computers-dskutl1010/mac) says to use MS-DOS (FAT) for 32 GB or less and ExFAT for anything larger.
4. Enter a name of up to 11 characters, click Erase, then Done.

Disk Utility's Erase writes a new file system, so it works like a quick format. Apple's [erase guide](https://support.apple.com/guide/disk-utility/erase-and-reformat-a-storage-device-dskutl14079/mac) lists Security Options for writing over the erased data. Apple says those options exist only for some devices, and never for SSDs. If the button isn't there, the old data is not overwritten.

### Why Move to Trash doesn't free space on a card

Moving clips to the Trash doesn't free their space right away. Apple notes that a file's storage space comes back only when you empty the Trash ([Apple Support](https://support.apple.com/en-us/102624)). On a card, the Finder keeps trashed files in a hidden folder on the card itself. A card that looks empty can still be full. Empty the Trash before you eject, or skip the Finder and format the card in the camera.

### Don't delete single clips from a camera-managed card

Some cameras keep their own list of the clips on the card. Sony XAVC S cameras such as the a7 III keep theirs in a PRIVATE/M4ROOT folder. Deleting single clips from such a card on a computer leaves that list wrong. The [MediaFlowSwift manual](/manual/organizing-media/#cards-laid-out-by-the-camera) notes that the camera may then ask to repair the card or show clips that are gone. Format these cards in the camera.

## How do you format an SD card on Windows?

Windows formats cards from File Explorer:

1. Open File Explorer and select This PC.
2. Right-click the card and choose Format.
3. Pick a file system: exFAT for cards over 32 GB.
4. Leave Quick Format ticked for a fast format, or clear it for a full format. Click Start, then OK.

Leave Quick Format ticked for a card that works normally and is about to go back in the camera. Clear it only when you want the old data overwritten, because a full format writes zeros over the whole card ([Microsoft](https://learn.microsoft.com/en-us/previous-versions/troubleshoot/windows-server/format-command-not-write-zeros-to-disk)). On a large card that can take a long time. Format the card in the camera afterward either way.

## Should a memory card be exFAT or FAT32?

The card's capacity class decides the file system. The [SD Association](https://www.sdcard.org/developers/sd-standard-overview/capacity-sd-sdhc-sdxc-sduc/) sets FAT32 for SDHC cards (over 2 GB up to 32 GB). SDXC cards (over 32 GB up to 2 TB) and SDUC cards use exFAT. So a 64 GB or larger card ships as exFAT.

FAT32 has a hard limit: no single file can reach 4 GB ([Microsoft](https://learn.microsoft.com/en-us/windows/win32/fileio/filesystem-functionality-comparison)). That rules it out for long, high-bitrate clips. On an exFAT card the limit doesn't apply. Mac and Windows both read and write exFAT, so either computer can offload the card.

You rarely need to choose, because the camera picks the file system when it formats. A card given a different file system on a computer may not work in the camera, as the next section explains.

## Should you format in the camera or on the computer?

Format in the camera by default. Sony recommends formatting a card in the camera the first time you use it there, for stable performance. Its guide warns that a card formatted on a computer "may not be usable depending on the format type." The camera also writes the folder layout it expects.

A computer format makes sense in two cases. The first is a card for a device with no format option. The second is a card that misbehaves and that you want to overwrite fully before deciding whether to retire it. For those, the SD Association recommends its [SD Memory Card Formatter](https://www.sdcard.org/downloads/formatter/) for Windows and Mac over the formatting tools built into each operating system. It says those built-in tools may not be optimized for SD cards. After any computer format, format the card in the camera before the next shoot.

## How do you recover footage after formatting a card by mistake?

Stop using the card the moment you notice. Every new clip, and every format, can overwrite footage that a recovery tool could still find. Don't record on the card, don't format it again, and don't run disk repairs on it yet.

Next, run a recovery tool and save what it finds to a different drive, never back to the card. [PhotoRec](https://www.cgsecurity.org/wiki/PhotoRec) is free and open source. It reads the card read-only and ignores the file system, so it can work after a format. Its developer says it works even if the file system "has been severely damaged or reformatted."

Set your expectations honestly. After a delete or quick format, recovery can often find much of the footage, as long as nothing new was written. After a Windows full format or an overwrite format, the data is zeros and can't be recovered. Long clips split across a card can come back incomplete. Imaging the card first, and other recovery steps, are covered in [can't find video files on an SD card](/blog/2026/10/cant-find-video-files-on-sd-card/).

## Where does MediaFlowSwift's Clear Card fit?

MediaFlowSwift is a Mac app that handles the offload, the check and the clearing step. [Importing](/manual/importing-media/#every-copy-is-checked) computes a SHA-256 checksum from the card as each file copies. It then reads the whole copy back from the drive and compares the two. A copy that doesn't match is made once more. If it fails again, the import stops and names the file. Importing never deletes anything from the card.

[Organize Media](/manual/organizing-media/#organizing-media-to-storage) then files each clip as Destination / Category / Camera / Filename. It checks the organized copy against the checksum taken at import. [Clear Card](/manual/organizing-media/#clear-card) deletes only clips marked "Verified at destination," after reading each organized copy back in full once more. Every other clip stays on the card, with the reason shown.

On a card laid out by the camera, such as a Sony card with a PRIVATE/M4ROOT folder, Clear Card deletes nothing. It checks every clip instead. Then it says "Safe to format this card in the camera" or "Not safe to format yet," and lists what is missing. Clear Card needs one verified, organized copy, not two. A second checked copy is a separate step, described in [two checked copies of a card on a Mac](/guides/two-checked-copies-of-a-card-on-a-mac/).

The app also keeps a searchable library of every clip ([Managing Clips](/manual/managing-clips/)). It runs on Macs with Apple silicon today. Windows and Intel Mac versions are coming. Dedicated offload apps such as [OffShoot](https://hedge.co/products/offshoot) (formerly Hedge) and Pomfort's [Silverstack XT](https://pomfort.com/silverstackxt/) also verify every copy and suit larger crews and on-set data work. Our [OffShoot comparison](/vs/offshoot/) sets out where each one fits.

Whichever tool you use, the habit is the same: verify, then format in the camera. To try Clear Card on your own cards, [download MediaFlowSwift](/download.html) or [see the plans](/#plans).
