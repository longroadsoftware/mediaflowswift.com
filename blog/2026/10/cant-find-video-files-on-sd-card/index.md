---
layout: post
permalink: /blog/2026/10/cant-find-video-files-on-sd-card/
published: "2026-10-25"
updated: "2026-10-25"
og_image: "/images/blog/cant-find-video-files-on-sd-card.png"
title: "Can't Find Video Files on SD Card? Why Footage Hides and Where to Look"
seo_title: "Can't Find Video Files on SD Card? Where Footage Hides"
description: "Can't find video files on an SD card? See where Sony, Canon, Nikon, GoPro and DJI cameras save clips, how to search a card, and what to do if it's damaged."
slug: "cant-find-video-files-on-sd-card"
category: "workflow"
tags: ["card-offload", "folder-structure", "checksums", "data-recovery", "backup"]
keywords: "can't find video files on sd card, sony video files PRIVATE M4ROOT CLIP, AVCHD STREAM folder, sd card shows no files, recover video from sd card"
takeaways:
  - "Many cameras keep video outside DCIM: Sony's XAVC S and XAVC HS clips sit in PRIVATE/M4ROOT/CLIP, and AVCHD clips in AVCHD/BDMV/STREAM."
  - "A search of the whole card for movie files finds clips in any folder, whatever layout the camera used."
  - "A card that reports used space but shows no files usually has a damaged file system, so stop writing to it and recover to another drive."
  - "Run First Aid or other repairs only after the card is imaged or its files are recovered, because repairs write to the card."
  - "A finished Finder copy proves nothing about the bytes, so check every clip against a checksum before you format the card in the camera."
faq:
  - q: "Why does my SD card say it's full but shows no files?"
    a: "The file system that records where each file starts and ends is probably damaged, while the video data is still on the card. Stop recording to it and don't format it. Image the card or run a recovery tool such as PhotoRec or Disk Drill, saving the results to a different drive. Check that the recovered clips play before you erase anything."
  - q: "Why can I see my videos on the camera but not on my Mac?"
    a: "The camera is reading a folder you haven't opened. Sony mirrorless and cinema cameras put stills in DCIM but video in PRIVATE/M4ROOT/CLIP. AVCHD camcorders use AVCHD/BDMV/STREAM. Newer Canon bodies use XFVC and CRM folders. Search the whole card for movie files, or check the table in this article for your camera."
  - q: "Is it safe to format an SD card if I can't find the video files on it?"
    a: "No. Formatting replaces the file system, and anything you record afterward can overwrite the clips. Find the files first, or recover them to another drive if the card is damaged. Format only after every clip you need has a copy checked against a checksum, ideally on two drives, and do it in the camera."
  - q: "How do I search an entire SD card for every video file at once?"
    a: "On a Mac, select the card in Finder, press Command-F, set the location to the card and the rule to Kind is Movie. If that returns nothing, use the find command in Terminal. On Windows, open Command Prompt on the card's drive letter and run dir /s /b with the video extensions you need, such as *.mp4 *.mov *.mts *.mxf."
sources:
  - title: "Importing still images/movies to a computer, Sony α7 V Help Guide"
    url: "https://helpguide.sony.net/ilc/2540/v1/en/contents/252h_import_pc.html"
  - title: "Supported video devices (folder structures), Sony Catalyst Browse Help"
    url: "https://helpguide.sony.net/di-app/cb/v1/en/Content/Supported_devices.htm"
  - title: "List of the directory and file structure of AVCHD camcorders, Canon USA"
    url: "https://support.usa.canon.com/kb/s/article/ART103012"
  - title: "Selecting a Recording Method, Card/Folder, Canon EOS R6 Mark III manual"
    url: "https://cam.start.canon/en/C022/manual/html/UG-08_Set-up_0030.html"
  - title: "Importing Images to a Computer, Canon EOS R6 manual"
    url: "https://cam.start.canon/en/C004/manual/html/UG-09_Reference_0020.html"
  - title: "Storage Folder, Nikon Z 7/Z 6 Online Manual"
    url: "https://onlinemanual.nikonimglib.com/z7_z6/en/09_menu_guide_03_02.html"
  - title: "GoPro Camera File Naming Convention, GoPro Support"
    url: "https://community.gopro.com/s/article/GoPro-Camera-File-Naming-Convention?language=en_US"
  - title: "Exporting the Photos or Videos from Handheld Series Product, DJI Support"
    url: "https://support.dji.com/help/content?customId=01700006849&spaceId=17&re=US&lang=en&documentType=&paperDocType=ARTICLE"
  - title: "Processing Camera Files in Vantage (Sony XDROOT and BPAV structures), Telestream"
    url: "https://www.telestream.net/pdfs/app-notes/app_Camera_Ingest.pdf"
  - title: "View hidden files and folders in Windows, Microsoft Support"
    url: "https://support.microsoft.com/en-us/windows/view-hidden-files-and-folders-in-windows-97fbc472-c603-9d90-91d0-1166d1d9f4b5"
  - title: "dir command, Microsoft Learn"
    url: "https://learn.microsoft.com/en-us/windows-server/administration/windows-commands/dir"
  - title: "Create a disk image using Disk Utility on Mac, Apple Support"
    url: "https://support.apple.com/guide/disk-utility/create-a-disk-image-dskutl11888/mac"
  - title: "Repair a storage device in Disk Utility on Mac, Apple Support"
    url: "https://support.apple.com/guide/disk-utility/repair-a-storage-device-dskutl1040/mac"
  - title: "PhotoRec, CGSecurity"
    url: "https://www.cgsecurity.org/wiki/PhotoRec"
  - title: "How to Upgrade from Disk Drill Basic to PRO, CleverFiles"
    url: "https://www.cleverfiles.com/help/how-to-upgrade-from-disk-drill-basic-to-pro/"
  - title: "OffShoot product page, Hedge (checked October 2026)"
    url: "https://hedge.co/products/offshoot"
  - title: "Silverstack trial version, Pomfort Knowledge Base"
    url: "https://kb.pomfort.com/silverstack/reference/installation/trial-version/"
---
Your video files are almost certainly still on the card, just not in the folder you opened. Many cameras keep stills in DCIM and video somewhere else. Sony puts XAVC S clips in PRIVATE/M4ROOT/CLIP, and AVCHD camcorders use AVCHD/BDMV/STREAM. Search the whole card for movie files, and only suspect corruption when that search finds nothing.

This guide maps where each common camera writes its clips and shows how to search a card on a Mac or a PC. It also explains what to do when the card really is damaged. It ends with the step that matters most: proving the copy before you erase anything.

## Why can't I find video files on my SD card?

Work through these causes in order, cheapest check first:

1. **Wrong folder.** The camera saved video outside DCIM. This is the most common cause, especially on Sony cards. The table in the next section shows where to look.
2. **Hidden items.** Your Mac or PC hides some files by default. Showing them rules out one cause quickly.
3. **Reader, port or cable.** A failing reader can mount a card and still list it wrongly. Try another reader before you blame the card.
4. **Damaged file system.** The card reports used space but shows nothing, or shows files of 0 KB. Stop writing to it and read the recovery section below.
5. **Incomplete copy.** An interrupted copy left clips behind, so the folder on your drive is missing files the card still holds.

## Where does each camera save video on the card?

Cameras follow a shared rule for stills, called DCF, which puts photos in DCIM. Video has no single rule, so each maker uses its own layout. Open the right folder and the "missing" clips usually appear.

| Camera | Where the video is | Video files |
|---|---|---|
| Sony mirrorless and cinema line (α7, FX3, ZV) | PRIVATE/M4ROOT/CLIP (proxies in PRIVATE/M4ROOT/SUB) | .MP4 (XAVC S, XAVC HS) |
| AVCHD camcorders (Sony, Canon, Panasonic) | PRIVATE/AVCHD/BDMV/STREAM, or AVCHD/BDMV/STREAM | .MTS |
| Sony pro cameras, XAVC and XDCAM | XDROOT/Clip | .MXF |
| Sony XDCAM EX | BPAV/CLPR | .MP4 |
| Newer Canon EOS R (R5 Mark II, R6 Mark III) | XFVC/REEL_xxxx; RAW in CRM/REEL_xxxx | .MP4; .CRM |
| Earlier Canon EOS R (such as the original R6) | DCIM | .MP4 |
| Nikon Z | DCIM/1xxNCZ_x (for example 100NCZ_6) | .MOV or .MP4 |
| GoPro | DCIM/100GOPRO | .MP4 |
| DJI | DCIM/DJI_001 on newer models; DCIM/100MEDIA on many drones | .MP4 |

### Sony mirrorless and cinema cameras: look in PRIVATE, not DCIM

Sony's own help guide is direct about this. Stills go in folders inside DCIM, and movies go in the CLIP folder inside PRIVATE/M4ROOT, as [Sony's α7 V Help Guide](https://helpguide.sony.net/ilc/2540/v1/en/contents/252h_import_pc.html) shows. Proxy movies go in SUB. So a Sony card opened at DCIM looks empty of video, even when it is full.

The same guide warns against editing or deleting movie files on the card from a computer. The camera keeps its own list of clips beside them, in a file called MEDIAPRO.XML. Copy what you need, then format the card in the camera.

### AVCHD camcorders: the STREAM folder

AVCHD cameras store clips as numbered .MTS files, such as 00000.MTS, inside BDMV/STREAM. [Canon's AVCHD support article](https://support.usa.canon.com/kb/s/article/ART103012) walks through the folders and notes that long recordings split into several files. Sony, Panasonic and many Canon solid-state models nest the same tree inside PRIVATE. The CLIPINF and PLAYLIST folders beside STREAM hold the camera's index, so copy the whole AVCHD folder.

### Sony pro cards: XDROOT and BPAV

Sony's pro formats use their own root folders. [Sony's Catalyst Browse help](https://helpguide.sony.net/di-app/cb/v1/en/Content/Supported_devices.htm) lists XDROOT for XAVC Intra, XAVC Long and XDCAM HD, and BPAV for XDCAM EX. Clips under XDROOT are .MXF files in a Clip folder. XDCAM EX keeps .MP4 clips in BPAV/CLPR, as [Telestream's camera-ingest note](https://www.telestream.net/pdfs/app-notes/app_Camera_Ingest.pdf) describes. Editing software reads the XML and metadata alongside them, so copy the card's full folder tree.

### Canon EOS R and Nikon Z

Newer Canon bodies split movies out of DCIM. The [EOS R6 Mark III manual](https://cam.start.canon/en/C022/manual/html/UG-08_Set-up_0030.html) puts MP4 movies in XFVC/REEL folders and Cinema RAW Light (.CRM) in CRM/REEL folders. For the original EOS R6, the [manual](https://cam.start.canon/en/C004/manual/html/UG-09_Reference_0020.html) simply says to copy the DCIM folder. Still RAW files (.CR3) are photos, not video.

Nikon Z cameras store movies in the same DCIM folders as photos. The [Z 7/Z 6 manual](https://onlinemanual.nikonimglib.com/z7_z6/en/09_menu_guide_03_02.html) names those folders with a number plus NCZ_7 or NCZ_6. The default movie file type on those bodies is MOV, with MP4 as an option. NEF files beside them are stills.

### GoPro and DJI

GoPro clips sit in DCIM/100GOPRO, then 101GOPRO and so on. Long recordings split into chapters. [GoPro's naming guide](https://community.gopro.com/s/article/GoPro-Camera-File-Naming-Convention?language=en_US) explains that GX010114 and GX020114 are two parts of one recording. Copy every chapter. The small .LRV and .THM files are preview and thumbnail files.

Newer DJI cameras use DCIM/DJI_001, as [DJI's export guide](https://support.dji.com/help/content?customId=01700006849&spaceId=17&re=US&lang=en&documentType=&paperDocType=ARTICLE) shows for its Osmo range. Many DJI drones still write to DCIM/100MEDIA. Check both when a DJI card looks empty.

## How do I find video files on a Mac when Finder shows nothing?

### Search the whole card for movies

A search of the whole card ignores the folder layout. Select the card in the Finder sidebar and press Command-F. Click the card's name next to "Search:" so the search covers the card, not your Mac. Then set the rule to Kind is Movie. macOS counts .MP4, .MOV, .MTS and .MXF files as movies.

Finder search relies on Spotlight, which may not have indexed a card you just inserted. If the list is empty, try Terminal. Replace CARD with your card's name:

```
find /Volumes/CARD -type f \( -iname '*.mp4' -o -iname '*.mov' -o -iname '*.mts' -o -iname '*.mxf' -o -iname '*.crm' \)
```

The find command reads the folders directly. It prints the full path of every matching file, which also shows you which folder the camera used.

### Show hidden files with Shift-Command-Period

Pressing Shift-Command-Period in a Finder window shows hidden items, dimmed. Press it again to hide them. Camera folders such as PRIVATE are normally visible anyway, so this mostly reveals system files. It is still a quick way to rule out a hidden folder.

### Check that the card mounted properly

Disk Utility shows whether the card mounted and how much space is used. A card showing many gigabytes used but no files points to file-system damage. A card that won't mount at all needs the recovery steps below, not a reformat.

## How do I find all video files on a Windows PC?

### Show hidden items in File Explorer

In File Explorer on Windows 11, choose View > Show > Hidden items. [Microsoft's guide](https://support.microsoft.com/en-us/windows/view-hidden-files-and-folders-in-windows-97fbc472-c603-9d90-91d0-1166d1d9f4b5) also covers Windows 10. Leave protected operating system files hidden. Camera folders don't need that setting.

### Search by extension with dir

Command Prompt can list every video file on the card in one pass. Switch to the card's drive letter, then run:

```
dir /s /b *.mp4 *.mov *.mts *.mxf
```

The /s switch searches every subfolder, and /b prints bare paths, as [Microsoft's dir reference](https://learn.microsoft.com/en-us/windows-server/administration/windows-commands/dir) describes. A clip buried in STREAM or CLIP will show up.

## Could the card reader or cable be the real problem?

A card reader can fail in ways that look like missing files. Try a different reader, a different port, and a direct connection instead of a hub. Then read the card on a second computer. If the second machine lists clips the first one didn't, the reader, port or cable was at fault.

The same weak links can corrupt a copy without any warning. A failing reader, a loose cable or a drive with bad sectors can still end in a "finished" copy. That is why the check described below matters.

## Why does the card show used space but no files?

### What a damaged file system looks like

SD cards use a file system, usually exFAT or FAT32, that records where each file starts and ends. An interrupted write can damage it. Pulling the card mid-recording or a battery dying mid-clip are common causes. The folder then looks empty, files show 0 KB, or the card reports used space with nothing listed. The video data is often still on the card.

### Stop writing, image the card, then recover

Stop using the card now. Every new write can land on top of the clips. Don't format it, even if the camera or computer offers to.

Next, make a copy of the whole card before trying anything else. On a Mac, open Disk Utility and choose File > New Image > "Image from" with the card selected. That makes a full disk image of the device, as [Apple's guide](https://support.apple.com/guide/disk-utility/create-a-disk-image-dskutl11888/mac) explains. Save it to a different drive.

Then run a recovery tool and save its results to another drive, never back to the card. [PhotoRec](https://www.cgsecurity.org/wiki/PhotoRec) is free, open source, and reads the card read-only. It ignores the damaged file system and looks for the files' own signatures, so recovered files usually lose their original names. [Disk Drill](https://www.cleverfiles.com/help/how-to-upgrade-from-disk-drill-basic-to-pro/) is easier to use. On a Mac, its free Basic edition scans and previews, but most recovery needs the paid PRO edition.

### Where Disk Utility First Aid fits

[First Aid](https://support.apple.com/guide/disk-utility/repair-a-storage-device-dskutl1040/mac) checks a volume and fixes errors in its directory structure. Those repairs write to the card, which is exactly what you are trying to avoid. Run it only after you have an image or recovered copies, if at all. Check that the recovered clips play before you do anything else to the card.

## How do I prove the copy before I erase the card?

### Why a finished Finder copy proves nothing

A completed Finder copy only tells you the copy started and ended. It doesn't compare the bytes on the drive with the bytes on the card. A faulty reader or a failing drive can still produce a copy that looks complete.

### Checksums and verified offload tools

A checksum gives each file a fingerprint. A verified offload computes one from the card, copies the file, then reads the copy back and computes it again. Matching values mean the bytes are identical. Our guide to [checksum verification before erasing a card](/blog/2026/10/checksum-verification-before-erasing-card/) covers SHA-256, MD5 and xxHash.

Several Mac tools do this. [OffShoot](https://hedge.co/products/offshoot), from Hedge, verifies every transfer, can copy to several drives at once and offers a fully functional 10-day trial. Pomfort's Silverstack XT is built for on-set data managers and also verifies offloads. Its [trial](https://kb.pomfort.com/silverstack/reference/installation/trial-version/) runs 10 days. MediaFlowSwift covers a narrower set of formats, explained below.

### Copy the whole card tree

Whatever tool you use, copy the card's full folder tree, not just the clips you recognize. AVCHD, XDROOT and M4ROOT folders carry index and metadata files that editing apps and the camera rely on. Then make sure your checks cover those video files too, not only the MP4s.

## What card offload routine stops footage going missing?

A routine beats luck. Copy the whole card with verification. Keep a second checked copy on another drive, as in our guide to [two checked copies of a card on a Mac](/guides/two-checked-copies-of-a-card-on-a-mac/).

Number your drives and record which card went where. Our guide to [labeling and cataloging archive drives](/guides/label-and-catalog-archive-drives-for-video/) shows one way. Format the card in the camera only once every clip is accounted for. For a broader filing scheme, see [how to organize video footage](/blog/2026/10/how-to-organize-video-footage/).

### Where MediaFlowSwift fits

MediaFlowSwift is a Mac app that imports cards into a library of clips and then files, reviews and archives them. Its import scans the card, including subfolders, so it finds MP4, MOV, M4V and AVI clips in M4ROOT/CLIP, XFVC or DCIM. As each file copies, it computes a SHA-256 checksum from the card. It then reads the whole copy back from the drive and compares, as the [importing chapter](/manual/importing-media/) explains. Import never deletes anything from the card.

Import takes only MP4, MOV, M4V and AVI video, so AVCHD (.MTS, .M2TS), MXF, Canon's .CRM, BRAW and R3D are left out. The import sheet counts what it left out, so you can copy those files with another tool.

On a card laid out by the camera, such as a Sony card, Clear Card deletes nothing. Instead, it says when the card is safe to format in the camera, once every clip has an organized copy that matches. Clips in formats it doesn't import have no verified copy there, so copy those yourself first. Its archive drives are numbered, and the app records which clips went to which drive. The guide to [checking footage before erasing a card](/guides/verify-footage-copied-before-erasing-card/) walks through it.

If that matches how you work, the [download page](/download.html) has a 14-day trial that needs no payment card, and the [plans are here](/#plans). If most of your cards are AVCHD or XDCAM, a general offload tool fits better today. OffShoot, for example, verifies whatever files are on the card.
