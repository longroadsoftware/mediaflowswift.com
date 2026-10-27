---
layout: manual
title: "Importing Media — MediaFlowSwift Manual"
description: "Pick a card, drive or folder, choose the files and the camera that shot them, and copy them into your project."
permalink: /manual/importing-media/
generated: tools/import-guide.sh
---
# Importing Media

## Importing from a Card, Drive or Folder

*Pick a card, drive or folder, choose the files and the camera that shot them, and copy them into your project.*

An import copies media from a card, a drive or a folder to the place you chose in Settings › Storage › Imports go to (this Mac, an external drive, or the drive your organized media goes to) and adds the clips to the project. The original files are not changed, and nothing is ever deleted from the card. See Where Imports Go.

1. Choose File → Import…
2. Pick a source at the top of the sheet: Cards & drives lists the SD cards and USB drives MediaFlow has detected; Folder lets you browse to any directory
3. For a card, choose it from the Choose Card… menu (a single connected card is picked for you; Rescan looks again). For a folder, click Choose Folder…
4. MediaFlow scans the source, including subfolders, for supported video, image and audio files
5. Review the file list and check or uncheck the items to include
6. Set the Camera picker to the camera that shot the footage; click New camera… to add one that is not listed
7. Optionally tick “Ask a model to suggest categories” — see below
8. Click Import Selected

Above Import Selected, the sheet says where this import goes and how much space is free there, for example “Imports to the drive “SSD” · 812 GB free”. Change… picks another place for this import only. Once the copy starts, the bottom of the sheet shows “Importing to:” with the folder the files are going to.

### Every Copy Is Checked

As each file is copied, MediaFlow computes its SHA-256 checksum from the card, writes the copy to the drive, then reads the whole copy back from the drive, not from the Mac’s memory, and compares the two. A copy that doesn’t match is made once more; if it fails again, the import stops and names the file. Importing never deletes anything from the card. Once the last file is copied, MediaFlow asks the drive to finish writing everything it holds in its own memory, before the copies count as checked. The checksum is kept with the clip, and Organize later checks its own copy against it, so the chain from the card to the destination is proved at every step.

The card that appears at the end of the import says so, for example “All 24 clips copied and checked against the card.” If the drive couldn’t be asked to finish writing, it says that instead. Whether you can format the card is a different question, answered by Clear Card once the clips are organized: it checks every clip’s organized copy, not just the import’s. A phone import says “copied from the phone and checked” (see Importing from iPhone or Camera).

### What Is Left Out

Import goes by the file extension, and takes only these:

- Video — MP4, MOV, M4V, AVI
- Images — JPG, JPEG, PNG, HEIC, DNG
- Audio — WAV, MP3, AAC, M4A

Every other file is left out of the list, and the sheet says so: once the scan is done, a line at the bottom counts what was passed over by type, for example “15 files left out: 12 .CR3, 3 .INSV”, with the reason (not formats MediaFlow imports yet) and a What’s left out link that opens this topic. The completion card repeats the line after the import. Nothing is copied that was not before. Left out are camera raw stills other than DNG (CR3, CR2, ARW, NEF, RAF and GoPro’s GPR), AVCHD recordings (MTS, M2TS), Insta360 recordings (INSV, INSP), MXF, BRAW and R3D, and TIFF. Two kinds are left out without being counted: hidden files, and the small files a camera or phone writes for its own use beside the clips, because they are the card’s bookkeeping rather than footage: a GoPro’s LRV and THM, a DJI drone’s LRF and SRT, the XML, BIN and index files Sony, Canon, Nikon and AVCHD cameras keep, and an iPhone’s AAE edit files. Check the card in Finder before you clear it, and convert what you need, for example a raw still to DNG or JPG. The same list applies to a card, a folder and an iPhone.

### Previewing a File

Click a file in the list to see it in the Preview on the right, with details such as its size, length and date. Press Space to play or pause a video there, whatever you clicked last in the sheet. While a video is showing, Space never ticks a checkbox or presses a button. A photo shows as a still picture; with a photo or nothing showing, Space does what it does elsewhere on your Mac (with Keyboard navigation on, it presses the button you moved to with Tab).

### Imports and Cloud Storage

If the folder imports go to is in cloud storage, as Documents is in iCloud when iCloud’s Desktop & Documents Folders is on, or as a Google Drive, OneDrive or Dropbox folder is, every clip you import uploads, and the service may later move clips off this Mac to make room. MediaFlow tells you at launch and asks before your first import of the session; see Footage in iCloud or Other Cloud Storage for what that means and how to keep footage on this Mac.

### Duplicates

Files that are already in the project are marked Duplicate in the list. A file counts as already in the project when a clip there has the same name as the card file and exactly the same size, so a different clip that only shares its name, such as C0001.MP4 from a second card, is not marked. Two different clips that have the same name and exactly the same size, from two cards, are still marked Duplicate. A clip imported without a recorded size is still compared by name alone. A line at the bottom of the sheet says how many duplicates were detected, and they are skipped when you import.

### Disk Space

The place the import goes needs room for the selected files plus 10 GB of headroom, and a drive formatted as MS-DOS (FAT32) can’t hold a file over 4 GB. The sheet warns you while you choose files; if there isn’t room when you click Import Selected, the import does not start and the sheet says why.

### Cancelling

To close the sheet without importing anything, click Cancel at the top or press Esc.

To stop a long import, click Cancel on the progress window. The copy stops between files, the partly written file is discarded, and every file already copied is added to the project and kept in the working folder.

### New camera…

The Camera picker lists the project’s cameras (Camera A, Drone, Phone, …). New camera… adds a name to that list, saves it with the project, and selects it for this import. Typing a name that already exists selects the existing entry rather than adding a duplicate.

### Sorting the List

Click a column header to sort the list by Filename, Date, Type, Length or Size; click it again to reverse. Filename keeps a GoPro recording’s chapters together, as the clip table does. The choice is remembered for the next import, whichever source you use. Until a video’s length has been read, it sorts as the shortest.

### Ask a Model to Suggest Categories

This checkbox asks an AI model to look at each imported video clip and propose one of your project’s categories. It is off every time the sheet opens and applies to this import only, so no import uses a model unless you tick the box for it. The model runs in the background after the copy finishes. Its answers arrive as proposals: nothing is applied to a clip until you confirm it.

- With a model that runs on this Mac, nothing leaves the Mac and it costs nothing. It is slow — about a minute a clip
- With a paid provider (Claude, ChatGPT or Gemini), MediaFlow sends three small frames from each clip to that provider, together with your category list, the clip’s camera, duration and place name, the opening words of its transcript when it has one, and your recent category corrections. The provider bills you for each clip
- The line under the checkbox names the model and, for a paid one, says “costs money”

The checkbox appears only after you turn on “Use a model to suggest categories” and finish setting up a model in Settings › Analysis. It is dimmed when “Propose category, camera and scene after an import” is off in the same tab, because the model refines that proposal.

> **Warning:** A paid provider charges for every clip it looks at, and frames from your footage leave this Mac. Set “Stop after … a day” in Settings › Analysis to cap the spend; MediaFlow checks the limit before each clip and stops when it is reached.

### Ejecting or Clearing a Card

When the source is an SD card or USB drive, an Eject button appears next to the Camera picker, and again on the completion card after the import. The same command is available from File → Eject Removable Media. MediaFlow asks you to confirm, shows an “Ejecting…” step while the card is unmounted (do not pull the card yet), and then tells you it is safe to remove. If the eject fails because files on the card are still open, close any app or Finder window using them and click Retry.

A Clear Card… button appears beside Eject. It closes the Import sheet and opens the Clear Card sheet, which deletes only clips that are already organized and verified at the destination. On a card laid out by the camera, such as a Sony card with a PRIVATE/M4ROOT folder, it deletes nothing and says instead when the card is safe to format in the camera.

Importing is part of the Studio plan; see Plans and Pricing.

See also: [Where Imports Go](#where-imports-go), [Importing from iPhone or Camera](#importing-from-iphone-or-camera), [The Import Sheet and Completion Card](#the-import-sheet-and-completion-card), [Clear Card](/manual/organizing-media/#clear-card), [Clip Classifier, Second Pass (Tier 1)](/manual/organizing-media/#clip-classifier-second-pass-tier-1), [Import Not Detecting Files](/manual/troubleshooting/#import-not-detecting-files)

## Where Imports Go

*Choose whether imports are copied to this Mac, an external drive, or the drive your organized media goes to, and what each choice means.*

Every import copies the card; MediaFlow never moves or deletes a file on a card. Settings › Storage › Imports go to chooses where that copy lands until Organize files it at the project’s destination:

- This Mac — Documents → MediaFlow Projects → Imports, as before. The fastest copy, and clips play at once. The footage takes room on the Mac until Free Up Space runs, and twice over until Organize has copied it on. If Documents is kept in iCloud, macOS may upload the footage or move it off the Mac
- An external drive — a folder you choose on a drive connected to this Mac. Takes the footage off the Mac’s own disk, so a card larger than the Mac’s free space still fits. The drive must be connected to import, and until the clips are organized or archived that drive is the one place they are besides the card
- The drive my organized media goes to — a “MediaFlow Imports” folder at the top of the drive or network share the open project organizes into. The copy is already on the drive where it will end up, so Organize moves it into place in seconds, and nothing waits on the Mac. Over a network share the copy takes longer than to a drive on the Mac, and clips play across the network until proxies are made; you need the share connected to import

### Choosing the External Drive Folder

Click Choose… beside External drive folder and pick a folder on the drive. Each import makes its own folder inside it, named for the camera and the date. Under the folder, Settings shows the free space and the drive’s format. A drive formatted as MS-DOS (FAT32) can’t hold a file over 4 GB, so camera files longer than a few minutes won’t fit; format it as APFS or exFAT. The folder is remembered by the drive itself, not just its name: it is found again when the drive is mounted under another name, and never on another drive that happens to share its name, such as a camera card also called “Untitled”. A folder on a drive chosen on another Mac is never used on this one; a folder on a network share is used on any Mac where that share is connected.

### For One Import

The Import sheet says where this import goes and how much space is free there. Change… picks another place for this import only; Settings is not changed.

When the place you chose can’t be reached (the drive isn’t connected, the project has no destination yet, or its folder would sit inside the destination), the sheet says why and offers the places that can. Import Selected waits until you pick one. MediaFlow never puts an import on this Mac in its place without asking: that could fill the disk you chose the drive to spare.

Only the place you chose is checked before you can import, and only for a few seconds: while it is checked the sheet says “Checking where this import goes…”, and a drive or share that doesn’t answer in time reads “not responding”. The other places are checked afterwards, so a network share that has stopped answering never holds up an import to this Mac.

An import never lands on the card or drive it is copying from, which would be no second copy at all; the sheet says so and asks for another place. If the drive an import is going to disappears partway through, the import stops before the next file and says so; nothing is copied anywhere else.

When a drive won’t say how much space is free, the sheet says “free space unknown”. You can still import; if the drive fills, the import stops at the file that doesn’t fit. A drive with no space left is full, and the import doesn’t start.

### Proxies for Review

When imports land on a network share, MediaFlow makes proxies for review on this Mac straight after the copy, so the clips play at once instead of across the network. Turn this off with “Make proxies for review when imports land on a network share” in Settings › Storage. They are the same proxies Process Queue (Proxies) makes, kept on this Mac; if proxies are already being made, nothing extra is started.

### After Organize

When the imported copy is already on the drive the project organizes into (imports to that drive, or to this Mac with the destination on this Mac too) and it still matches the checksum taken from the card, Organize simply moves it into its Category and Camera folder. That takes seconds, needs no extra space, and leaves no second copy behind for Free Up Space. The chain stays proved, because the bytes never move and the import’s copy was proved. A clip on another drive, or one changed since the import, is copied and checked as before. A one-off copy somewhere other than the project’s destination always copies, and so does a project that shares its files with another project (Duplicate Project, Share Media), so the other project’s clips keep their files.

Organize files each clip at the destination and checks the copy against the checksum taken from the card at import. If the imported copy no longer matches it, though its size and date haven’t changed, the copy has been damaged where it landed: Organize leaves that clip where it is and says so, and you can import it again from the card if you still have it. A clip you have changed on purpose since the import (a new size or a later date) is checked afresh instead. The imported copy stays where it landed until Free Up Space reclaims it, whichever place that was. MediaFlow remembers every folder imports have landed in, so clips imported before you changed the setting still read “Imported, not organized yet”, and Free Up Space can reclaim their copies too, even from a folder on the destination’s own drive.

> **Tip:** A fast external SSD is the usual choice for a laptop with a small disk: imports are almost as quick as to the Mac, and the Mac’s disk stays free.

See also: [Importing from a Card, Drive or Folder](#importing-from-a-card-drive-or-folder), [Importing from iPhone or Camera](#importing-from-iphone-or-camera), [Organizing Media to Storage](/manual/organizing-media/#organizing-media-to-storage), [Freeing Up Space](/manual/organizing-media/#freeing-up-space), [Processing the Proxy Queue](/manual/batch-operations/#processing-the-proxy-queue)

## Importing from iPhone or Camera

*Import photos and videos from an iPhone or camera connected over USB, and what to do when clips are missing.*

The iPhone segment of the Import sheet copies photos and videos straight from a phone or camera connected by USB to the place your imports go (see Where Imports Go).

1. Connect your iPhone or camera via USB. Unlock the iPhone and tap Trust if it asks
2. Choose File → Import… and select the iPhone segment at the top of the sheet
3. Select your device from the Device picker
4. Check the items to import in the list. An item already in the project is marked Duplicate and is skipped, matched by name, size and the date the phone reports for it; an item imported before this matching was added, or a card, drive or folder clip that happens to share its name, is still compared by name alone
5. Click Import Selected

Click an item to preview it on the right; MediaFlow copies it to this Mac to show it. Press Space to play or pause a video, as for a card or folder.

MediaFlow uses Apple’s Image Capture framework to talk to the device. While an iPhone is locked, the sheet asks you to unlock it and tap Trust.

Image Capture brings each item across from the phone to this Mac first, into a folder of its own, so two items with the same name never land on each other: an iPhone starts again at IMG_0001 after IMG_9999. MediaFlow then copies it to the place your imports go as it copies from a card: it computes the SHA-256 checksum as it copies, reads the whole copy back from the drive and compares the two, and keeps the checksum with the clip for Organize to check against. A name already taken there gets _1, _2 and so on, and each clip always points at its own file. The copy on this Mac is removed once that is done. Image Capture reads the phone itself, so the checksum starts from what it handed over. What came across is checked against the phone too, as far as the phone allows: an item that arrives empty is never imported. A phone that shoots HEIF and HEVC, as recent iPhones do, may convert photos to JPEG and videos to H.264 as it sends them, so from such a phone a photo must not arrive smaller than the size the phone gives, and a video, whose converted size can’t be known beforehand, must not arrive empty. Any other phone or camera sends files as they are, and must send each at exactly the size it gives and, where it gives one, with the same fingerprint as the file on the device. If any check fails, the import stops and names the item. If the phone stops answering partway through an item — unplugged, locked, or the connection otherwise dropped — MediaFlow waits a while for it to resume, then ends the import at that item and names it, rather than waiting forever; nothing on the phone is touched either way. The import ends with a line such as “All 12 clips copied from the phone and checked.” Importing never deletes or changes anything on the phone.

### If Clips Are Missing

Only media stored on the phone itself appears in the list. Photos and videos that iCloud Photos has moved to the cloud are invisible until they are downloaded to the iPhone:

1. On the iPhone, open Settings → Photos and choose Download and Keep Originals
2. Keep the iPhone unlocked, on Wi-Fi and on power until the download finishes
3. Click Refresh in the Import sheet

### Disk Space

The import does not start unless the place it goes has room for the selected items plus 10 GB, and this Mac has room for the largest selected item plus 1 GB while it comes across.

> **Tip:** If the device does not appear, disconnect and reconnect the USB cable, then click Refresh to scan again.

The “Ask a model to suggest categories” checkbox is available here too. See Importing from a Card, Drive or Folder for what it sends and what it costs.

See also: [Importing from a Card, Drive or Folder](#importing-from-a-card-drive-or-folder), [Where Imports Go](#where-imports-go), [The Import Sheet and Completion Card](#the-import-sheet-and-completion-card), [Import Not Detecting Files](/manual/troubleshooting/#import-not-detecting-files)

## The Import Sheet and Completion Card

*One Import sheet for every source, its per-import options, and the card that appears when the import finishes.*

File → Import… opens a single Import sheet. The segment at the top chooses the source: Cards & drives (detected SD cards and USB drives), iPhone (phones and cameras over USB), or Folder (any directory). The banner that appears when a card or phone is plugged in opens the sheet on Cards & drives.

### Ask a Model to Suggest Categories

When a model is set up in Settings › Analysis, the bottom of the sheet offers the checkbox “Ask a model to suggest categories”. It is unticked every time the sheet opens and applies to this import only. A model on this Mac is free and sends nothing off the Mac. A paid provider receives frames from each clip and charges for each one. See Importing from a Card, Drive or Folder for the details.

### Completion Card

When an import finishes, the file list is replaced by a card that reads, for example, “Imported 24 clips (8.1 GB) from Camera A”. It offers these actions:

- Eject &lt;card> — shown only when the source was a removable card or drive; runs the same confirm → ejecting → safe-to-remove flow as File → Eject Removable Media
- Categorize now — closes the sheet and opens category suggestions for the clips just imported, so earlier uncategorized clips are not mixed in. It is dimmed when nothing new was imported
- Done — closes the sheet

If the scan passed over files MediaFlow does not import, the card also says how many and of what type, for example “15 files left out: 12 .CR3, 3 .INSV”; What’s left out opens the list of file types in Importing from a Card, Drive or Folder.

You can also categorize later: choose Workflow → Analyze… and run Categories.

### Naming a New Camera

When the import includes clips from a camera MediaFlow could identify only by its make, the card lists each such camera with a name field. Type the name you use for that camera and click Save. MediaFlow remembers the camera and re-labels the clips from this import. If you leave the fields alone, you can name the cameras later in Settings › Cameras.

> **Tip:** Categorize now is the quickest way to get a fresh card into the right categories while you still remember what you shot.

See also: [Importing from a Card, Drive or Folder](#importing-from-a-card-drive-or-folder), [Importing from iPhone or Camera](#importing-from-iphone-or-camera), [Auto-Suggest Categories](/manual/tags-categories/#auto-suggest-categories), [The Analyze Hub](/manual/getting-started/#the-analyze-hub)

<div class="chapter-nav" role="navigation" aria-label="Chapters">
<a rel="prev" href="/manual/setup-network/">&larr; Setup &amp; Network</a>
<a href="/manual/">All chapters</a>
<a rel="next" href="/manual/managing-clips/">Managing Clips &rarr;</a>
</div>
