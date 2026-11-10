---
layout: manual
title: "Organizing Media — MediaFlowSwift Manual"
description: "Copy clips into Category and Camera folders at the project destination, with every copy checksummed and verified."
permalink: /manual/organizing-media/
generated: tools/import-guide.sh
---
# Organizing Media

## Organizing Media to Storage

*Copy clips into Category and Camera folders at the project destination, with every copy checksummed and verified.*

Organize Media copies your clips into a tidy folder layout at the project destination. The destination can be any folder: a network share, an external drive, a RAID, or a folder on this Mac. The layout is Destination / Category / Camera / Filename.

### Organizing

1. Choose Workflow → Organize Media…, or right-click clips and choose Organize Media. With clips selected it copies the selection; with nothing selected it copies the whole project. If the project has no destination yet, a folder picker opens first
2. Check the confirmation. It shows the scope (selection or whole project), the number of clips, the total size, the destination and its free space
3. To send this copy somewhere else, open the destination menu. It lists the project’s own destination, your default from Settings, places you have organized to before, and Choose… for any other folder
4. A different destination is a one-off: the project keeps pointing where it did. Tick “Make this the project destination” when you want the change to stick. When another Mac set the project’s destination, the box names it: ticking it replaces that Mac’s choice for every Mac that shares the project
5. Click Organize Media. MediaFlow creates the category and camera folders, copies each file, and verifies each copy
6. When the progress window finishes, click Done. Each copied clip now reads “At destination” in the Where column, with a green check

The confirmation can also warn you. Organize is disabled when the destination does not have enough free space. An orange line appears when the destination is on this Mac’s own drive while your setup points somewhere else — your default destination in Settings › Storage is on another drive or a share, or, with no default destination, you use a network share — since that usually means the drive or share was not connected; if you meant to use it, check that it is connected. When your default destination is on this Mac, or everything you do is, there is no warning. With a shared database set up, so that other Macs share your projects, an orange line says instead when the destination is on this Mac, or on a drive connected to it, where those Macs can’t organize. Another orange line counts clips that still carry an unconfirmed proposal; organizing does not apply proposals.

Clips that read On another Mac or Not on this Mac are left out of the copy, and the confirmation says how many. This Mac cannot read them. Organize them on the Mac they were imported on.

### When This Mac Can’t Reach the Destination

A project organizes into one destination, on every Mac that shares it, and it belongs to the Mac that set it: the Mac that started the project, until one changes it. A destination on a network share is found on each Mac however the share is mounted there, such as “Media-1” beside an older “Media”: a dash and one or two digits is how macOS numbers a second mount of a share, so a share called “Studio-2024” is a name of its own. When this Mac can’t reach the destination, because it is on another Mac’s own disk or on a share or drive that isn’t connected here, Organize Media copies nothing and never asks for another folder in its place. A folder on another Mac’s own disk, or on a drive connected to it, is that Mac’s even when a folder at the same place is on this Mac: they are different disks, and organizing here would split the project’s media. Two accounts on the same Mac share its disk. MediaFlow knows which Mac set the destination when the project was started, or its destination chosen, in this version; for an older project it doesn’t, and a folder that is at the destination’s place on this Mac is organized into, as before. MediaFlow says whose destination it is and where, for example “This project organizes into “Beach Day” in Downloads on Studio MacBook Pro, which this Mac can’t reach.”, and offers:

- Connect to the share — when the destination is on the network share chosen in Settings › Network and it isn’t connected. Once it is, Organize Media carries on. Another share is connected in the Finder
- Change Project Destination… — choose a folder every Mac reaches, such as one on a network share. When another Mac set the destination, MediaFlow first asks whether to replace it and names that Mac. Clips already organized follow when they are found at the new place, as described in Change destination folder
- Cancel — and organize on the Mac that has the destination

Free Up Space, Restore from Cleanup and Re-file folders by category say the same. The re-filing that follows a category change is left out on a Mac that can’t reach the destination, because the organized files are where this Mac can’t move them; a notice says so once for each project each time MediaFlow is opened, and names the menu item to use on the Mac that has them.

To move the folder of a project other Macs share, move or copy it in the Finder to a folder every Mac reaches, such as one on a network share. Then, on one Mac, choose Workflow → Repair → Change destination folder…, choose the folder at its new place, and answer Point at New Destination. The other Macs that share the project get the new destination and the clips’ new places with the project’s other changes: there is nothing to repair on them. If you choose the same folder on another Mac as well, nothing changes and MediaFlow says it is already the destination, even when that Mac has the share mounted under another name. Choosing a different folder there asks first, names the Mac that set the destination, and makes the folder you choose the destination for every Mac.

A clip on a network share is found under the name the share has on each Mac, as the destination is: one organized while the share was mounted as “Media-1” is found under “Media” on a Mac that has the share under its own name, and the other way round. The project keeps each path as it was written, so a Mac that reads it under another name changes nothing for the others. A Mac that has both connected, an old “Media” beside “Media-1”, looks under the name each clip was written with; if clips read Not on this Mac there, eject both in the Finder and connect the share again.

If the clips came from a memory card, the Clear Card review opens when you click Done. Nothing is deleted unless you confirm it there.

### How copies are verified

MediaFlow computes a SHA-256 checksum of each source file as it copies it, then finishes writing the copy to the disk. By default it then reads the whole copy back and compares its SHA-256 with the source. If the check fails, the copy is deleted and made again once; if it fails a second time, that clip is reported as failed and its source is left alone.

Each copy is written under a hidden name in its folder and takes the clip’s own name only once it has passed this check, so a half-written file never looks like a finished clip. If a network drive drops in the middle of a copy, MediaFlow waits for it to answer again, however long that takes, checks what had already arrived against the clip, and carries the copy on from there. Once a copy that was carried on is complete, MediaFlow compares the SHA-256 of everything read back from the drive with the clip’s, even with read-back verification off: over a slow connection each part is read back once, after it was last written; on a fast one the whole copy is read back again. If they differ, that copy is deleted and the clip copied again from its first byte. A copy left unfinished by an earlier Organize is carried on the same way, and only when the clip and the copy still match what MediaFlow noted about them. See Organize Errors on a Network Drive.

Organizing to a network drive over a phone, a hotspot or a VPN? One setting on the drive, durable handles, decides whether a dropped connection can leave a file locked for hours: see Network Drive Settings for Working Away from Home.

Only a copy that passed this check counts. While Organize runs, the progress window shows what has been sent and what has been checked apart, for example “1.2 GB of 3.77 GB sent · 800 MB checked”: the bar fills in full colour only for what is checked, with what is sent but not checked yet in a lighter shade. Under it, the current file says how much of it is sent, then how much has been read back to check it. The speed is what was actually sent over the last few minutes, and the time left covers both the sending and the checking still to do; while the network drive is away it says “Waiting for the network drive…” instead. Clips found already in place, or renamed there, are never counted as sent. When a run ends with clips it couldn’t finish the window says so plainly, for example “8 of 22 files organized and checked”, names the others with the reason, and leaves them where they were. Every clip that did pass is recorded in the project, whatever happened to the rest. If a clip changed in the project while it copied (the project was opened again from its file at another place, say), its checked copy can’t be recorded: the window says so, and the next Organize finds that copy, reads it back and records it without sending it again. Done then doesn’t offer to clear the card.

On a drive connected to your Mac, the copy is written and read back without passing through the Mac’s memory, so the check reads it from the drive itself. On a network share, every byte is read back over the network from the server; the server may answer from its own memory.

Drives keep a little memory of their own for what is being written. Once the last file is copied, MediaFlow asks the destination drive to empty it, once for the whole run rather than after every file, and only then points your clips at the copies. Move Project, Move to Editing Drive, Return to Library, Archive, Restore and Duplicate Project do the same before they point anything at their copies or remove anything, and an archive has the drive confirm it is in place under its own name, before any older one it replaces is removed. If the drive cannot be asked, because MediaFlow is not allowed to open the folder for example, the operation says so instead of carrying on as if it had been; after Organize, the card is then not offered for clearing. Clear Card, however you open it, asks the drive again for each organized copy just before it deletes that clip from the card, and keeps the card file if it cannot.

Shortcuts inside a project folder, such as those every Final Cut Pro library keeps to its cache and its media, are copied as shortcuts by Move Project, Move to Editing Drive, Return to Library, Archive and Restore, never as copies of what they point to. One that points inside the project follows it: in the copy it points to the same file in the copy, so Final Cut finds its media wherever the project now is, and it must lead to that file before the copy counts. On archive drives it points to where its file was archived, and after a restore, into the restored project, even from an archive made by an earlier version. A shortcut counts as pointing inside the project however its path is written: in other letter case where the drive ignores case, with doubled slashes, through the disk’s other name for a folder, or, for a project on a network share that macOS has mounted again with a dash and a number added to its name (Footage-1 for Footage), one written for the share’s other name when the project has the file it names. Two shares that both carry a number (Footage-1 and Footage-2) are different drives, and a shortcut from one to the other is kept as it is. One that points anywhere else, even to a drive that is not connected, is copied as it is and does not stop the copy. Each counts as nothing in the sizes shown and in an archive’s plan for its drives. MediaFlow looks at each item itself to tell a shortcut from a file, because some network storage lists shortcuts as ordinary files. Duplicate Project copies each clip’s own footage, even for a clip that is a shortcut, so the duplicate never depends on the original’s files.

Settings › Storage › Organize Media has the switch “Verify organized copies by reading them back (slower, safest)”. With it off, MediaFlow checks the size of the copy plus three 1 MB samples at the start, middle and end. That is much faster over a network, but it does not detect corruption outside the sampled ranges.

The checksum is recorded with the clip. Clear Card relies on it later, so leave read-back verification on if you plan to clear cards.

### Moving Within One Drive

When a clip’s imported copy is on the same drive as the destination and still matches the checksum its import took from the card (the same size, not changed since), Organize renames it into place instead of copying it: seconds, and no extra space. Nothing is copied, so nothing is read back; the import already proved those bytes against the card. A rename never replaces a file already there and never crosses to another drive: if it can’t be done, the clip is copied and checked as above. Only clips still waiting to be organized are moved, and only into the project’s own destination: a one-off copy somewhere else, a clip already organized, and a project sharing its files with another project are always copied.

A clip imported by this version already carries the checksum its import took from the card. Organize checks the bytes it reads from the imported copy against that checksum, so the organized copy is proved against the card itself. If they differ while the imported copy’s size and date are unchanged, the imported copy has been damaged: the clip is reported as failed, no copy is left at the destination, and the clip stays where it is. A clip changed on purpose since the import is checked afresh, as before.

### Organizing again over existing files

If a file with the same name and the same size is already in the target folder, MediaFlow reads that file and uses it only if it matches: the checksum the clip’s import took, or, for a clip with none or changed since its import, the clip itself, read afresh. A file that matches is used and its checksum recorded, so a run cut short is never copied beside itself. A file another clip of the project already uses is never used for a second clip, even one of the same footage imported twice: that clip gets its own copy. A different file of the same size, such as another chapter of a long recording, is kept and the clip is copied beside it. If a file with the same name has a different size, such as a copy an older version left unfinished, the new copy is saved with a number added to its name, for example Clip_1.mp4, and the file is never written over.

Before copying a clip, MediaFlow also looks for a copy an earlier Organize left elsewhere in the destination, in its category and camera folders, under the clip’s name or with a number added. One of the same size that reads back identical to the clip, and that no clip of any project points at, is moved into the clip’s place instead of sending the clip again. Whether another project uses it is asked of the database when Organize starts; without one, or when it doesn’t answer in time, nothing is moved and the clip is copied as usual.

### Tidying up the destination

Workflow → Repair → Tidy Up Destination… lists what earlier Organize runs left in the project’s destination that no clip needs, with each file’s size and the totals: unfinished copies (MediaFlow’s hidden part-made copies and the notes beside them), cut-short copies (files named like a clip but shorter than it, which older versions could leave) and extra copies of a clip that is already organized (“Clip_2.mp4” beside “Clip.mp4”).

- Nothing a clip points at is ever listed: not a clip’s file, the file it was imported from, or its copy on this Mac, in this project or any other. Which files other projects use, by any of their clips’ paths and in any letter case, is asked of the database when the window opens and again just before each file moves (only projects in that database are seen, not ones kept elsewhere); when it can’t answer, the window says so and only unfinished copies of this project’s own clips can be cleared. Only what you tick is touched
- An unfinished copy that the next Organize could carry on is kept and says so, unless its clip already has a copy that reads back correctly. So is one that changed in the last hour, or sits where an Organize is running, since another Mac may be writing it: the window says when it can be cleared. A copy of a clip that isn’t organized yet is kept too: Organize again checks it and uses it
- Each file you tick is read back and checked just before it is moved: a cut-short copy must read back as the start of its clip, and an extra copy as the whole of it. Anything that doesn’t, or that changed or a clip started using since it was listed, is kept, with the reason. On a network drive the check reads each file, which takes a while and uses data
- Nothing is deleted. Files on this Mac’s own drives go to the Trash. A network drive has no Trash, so they go straight to its recycle folder (#recycle) when it has one, or to a folder “Removed by MediaFlowSwift” at the top of the drive, keeping where each was; the window says which. Empty it yourself once you’re sure

### Default destination

Settings › Storage › Organize Media › “Default destination for new projects” fills in the destination for a project that has none. A project’s own destination always wins once it has one.

### Keeping the folder layout in sync

When you change the category or the camera of an organized clip, MediaFlow moves its copy at the destination into the matching folder. This happens in the background, keeps any edit you make meanwhile, and only interrupts you if a file fails to move or you open another project before the move could be saved. While any of these moves is still running, even when a later one has finished, MediaFlow holds back its automatic check of where your clips are, so a clip caught between two folders is not marked Missing. To bring the whole project into line at once, for example after an interrupted move or a relink, choose Workflow → Repair → Re-file folders by category.

### Cancelling a long operation

Every long file operation (organize, import, project move, cleanup move and restore, relink, re-file and archive) has a Cancel button on its progress window. Cancelling stops the work between files. The file being written at that moment is discarded, so no half-copied file is left behind; Organize to a network drive is the exception, keeping what it had sent of that file under a hidden name for the next Organize to carry on, so it is not sent again. Every file that finished before you cancelled stays where it landed; nothing already copied, moved or deleted is put back. The window then reports what did finish, for example “Cancelled after 12 of 40 files, 6.2 GB copied”, and waits for you to click Done. Cancel stops the work its own window shows and nothing else: clips being moved into their category folders in the background after a category change carry on.

Once Organize has copied the clips, it saves the project, then notes the run in the database. It waits 10 seconds at most for that note. If the database doesn’t answer in time, for example because the connection to a shared database dropped at the very end, the window finishes anyway and says “The database will be updated later.” Your project’s changes go across as soon as the database answers again. Cancel at that point ends only the wait; it never stops the project being saved. Clear Card finishes the same way after recording what it cleared, with the same note.

Importing, Organize and Relink have progress windows of their own. Every other long operation’s window says in its title how it ended: Complete; Cancelled; Finished with Problems, when some items failed, which are listed below; or Didn’t Finish, when it stopped before doing what it was asked. The summary says what state things are in, for example that the original is unchanged and the part-made copy was removed.

> **Tip:** Clips in the Skip (don’t copy) category are never copied. The category is stored as “Do Not Copy” in the .vpm file and the database; only the label changed.

Organize is part of the Studio plan; see Plans and Pricing.

See also: [Change destination folder](#change-destination-folder), [Re-check files](#re-check-files), [Freeing Up Space](#freeing-up-space), [Clear Card](#clear-card), [Network Drive Settings for Working Away from Home](/manual/setup-network/#network-drive-settings-for-working-away-from-home)

## Change destination folder

*Point the project at a different destination folder, and follow organized clips that have moved there. No files are copied or moved.*

The project destination is where Organize Media copies clips. It is shown under the project name in the sidebar. Hover over it for the full path; “Not set” appears in orange when there is none. The destination is first chosen when the project is created — see Creating a New Project.

1. Click Change… next to the destination in the sidebar, or choose Workflow → Repair → Change destination folder…
2. Choose the new folder
3. MediaFlow saves the new destination in the project and reports “Destination location updated.”

Changing the destination never copies, moves or deletes a file. On its own it changes only where new organizing goes; clips you organized earlier still point at the files in the old folder unless you accept the offer described next.

The destination is the project’s, for every Mac that shares it, and belongs to the Mac that set it. When another Mac set it, MediaFlow asks first whether to replace it and names that Mac; the folder you choose then becomes the destination on every Mac, that one included, and belongs to this Mac. When this Mac can’t reach the destination, Organize Media offers the same change as Change Project Destination…; see When This Mac Can’t Reach the Destination in Organizing Media to Storage.

Choosing the folder that is already the destination changes nothing, and MediaFlow says so, also when this Mac has its share mounted under another name, such as “Media-1” for “Media”. No clip is pointed at this Mac’s name for the share, so every Mac that shares the project goes on finding them. The one exception is a stopped check of moved clips, described next: choosing the same folder again continues it.

### If you moved your organized media

When the media itself has moved, for example to a new drive or because a share now mounts under a different path, the clips still point at the old paths and read Missing. After you change the destination, MediaFlow looks for each organized clip in the new destination, in the same folder it had under the old one and with the same size. If it finds any, it asks whether to point the project at them, and tells you how many it found out of how many were organized.

Same folder and same size is not proof that a file is the one you organized: cameras that split long recordings into chapters produce files of exactly the same size. So a clip that has a checksum recorded from when it was organized is read in full, and followed only if its contents are identical. The question tells you how much data that is before you agree. Over a network it can take a while. You can stop the check: clips already checked stay pointed at the new destination. To check the rest, choose Change destination folder again with the same folder before you quit MediaFlow. After that, the rest stay pointed at the old folder; find them with Relink Missing Media, below. Clips with no recorded checksum are followed on folder and size alone.

When it finishes, MediaFlow lists any clip that was in the right place but whose contents differ from what was organized, or that could not be read. Those are left as they were.

1. Change the destination folder to the new location, as above, and answer Point at New Destination when asked
2. For clips it did not find, choose Workflow → Repair → Relink Missing Media… and show MediaFlow where they went
3. Choose Workflow → Repair → Re-check files and confirm in the Where column that nothing still reads Missing

The offer is not made when the new destination is the old one, or when one is inside the other; that is not a move MediaFlow can follow by folder.

See also: [Organizing Media to Storage](#organizing-media-to-storage), [Re-check files](#re-check-files), [Relinking Missing Media](/manual/storage-maintenance/#relinking-missing-media)

## Re-check files

*Look at every clip’s file on disk again and update the Where column for the whole project.*

Re-check files brings the Where column back in step with what is really on disk. Choose Workflow → Repair → Re-check files.

### What it checks

- Whether each clip’s file exists at its recorded path
- For a file inside the project destination, whether its size still equals the size recorded at import
- Imported files not yet organized, files on a card and files in a source folder are checked for existence only

It does not read file contents or recompute checksums, so it cannot detect damage that leaves the size unchanged.

### What the Where column shows afterwards

- At destination — the file is inside the project destination and its size matches
- Size mismatch — the file is inside the destination but its size differs from the recorded size
- Imported, not organized yet — the file is where the import put it (this Mac, a drive or a share, as Settings › Storage › Imports go to chose) and has not been organized
- Only on card — the file is on a camera card and has not been copied to the destination
- Not at destination — the file is somewhere other than the destination and not on a card, such as the folder you imported from or another drive. It is not lost; hover over it to see which drive. If a whole project reads this way after a library was moved, you may have opened the old copy of the project: see After Moving Your Library to a New Drive
- Missing — no file was found at the recorded path
- Volume not connected — the drive or share the path names is not mounted right now. The file is neither checked nor called missing; its last known state stands until the drive is back
- On another Mac — the file is in the home folder of another account, where a clip imported on another Mac that shares this project is usually kept. This Mac cannot see it, so it is not called missing and nothing is changed for it. The Mac it was imported on keeps it up to date
- Not on this Mac — the file is not where the project says, and this Mac has never had it. It was most likely imported on another Mac that shares this project and kept somewhere this Mac cannot see, such as that Mac’s Shared folder or its own drive. It is not called missing and nothing is changed for it. The Mac that has it keeps it up to date

Each Mac remembers the clips it has had: the ones it imported, organized, relinked, reconnected or moved, and every file Re-check files has found on it. Only those can read Missing on that Mac when their file goes. So a clip imported on another Mac does not read Missing here, even when both Macs’ accounts share a name or the clip is kept in the Shared folder, and the two Macs stop changing it back and forth.

The first time a Mac checks a project file after the update, it checks it as before: every clip whose file is gone reads Missing, including one that went missing before the update, and one on another Mac. The same goes for the first check of any other copy of the project file, such as one made with Save As, copied in the Finder or restored from a backup. Once that first check is saved in the file, the Mac remembers what it found; if it cannot be saved, because the app quits first or the folder cannot be written to, the next check is a first check again. On a project shared with another Mac, that Mac’s clips may read Missing once; the next time the other Mac checks them, it finds them and puts them right, and they read Not on this Mac here after that.

If that memory cannot be read or kept, which is rare, the Mac puts it aside and checks as before, so every clip whose file is gone reads Missing.

With a shared database, Re-check files also tells it where a clip is when this Mac can see for certain that the database is wrong: your file is where your project says, and the file the database names is on a drive or share mounted on this Mac (under /Volumes) and isn’t there, though the folder it would be in is. A file the database names on this Mac’s own disk is never judged, since another Mac’s disk or another user’s home can look just the same; nor one on a drive that isn’t mounted. Each file is given 3 seconds to answer, and a drive or share that doesn’t answer in that time isn’t asked again in that Re-check: its clips are left as the database has them, and Re-check files says how many. A clip the database records as archived is left as it is too. When it sends any, it says how many. While it looks, the status line shows how far it has got; closing the project stops it. The check MediaFlow runs by itself after files change never does this; see Where a Clip Is in Shared Database Overview.

Re-check files only looks at recorded paths. It does not search for files that have moved; use Workflow → Repair → Relink Missing Media… for that.

A clip whose file is being moved into its category folder at that moment, after a category change, is left to the move: its file has already left the recorded path, and the move records where it went. The clip is looked at again once the move is done. Anything else you change while the check runs, including the category itself, is kept.

> **Tip:** Run this after reconnecting a drive or moving files by hand, or when the Where column does not match what you expect.

See also: [Organizing Media to Storage](#organizing-media-to-storage), [Relinking Missing Media](/manual/storage-maintenance/#relinking-missing-media), [Understanding the Where Column](/manual/troubleshooting/#understanding-the-where-column)

## Freeing Up Space

*Free Up Space lists every file before it stages or deletes anything. Know what it checks before you confirm.*

After you organize, the imported copies are still where the import put them (on this Mac, Documents → MediaFlow Projects → Imports; or the drive or share chosen in Settings › Storage › Imports go to, including any folder used before), and the originals are usually still on the card or in the folder you imported from. A clip Organize moved within one drive left no imported copy behind, so no imported copy of it is listed here, and its organized file is never touched; its card original can still be listed, as for any organized clip, when you tick that group. Free Up Space reclaims that space in two stages: first it moves files into a Cleanup folder on this Mac, and only later, when you choose, does it delete them.

### Free Up Space

Workflow → Free Up Space… scans the open project and lists three groups. Each has a file count, a total size and an expandable list of the exact files it would touch.

- “Local import copies that have an organized copy” — the imported copies of clips that have been organized, in whichever import folder they landed. Checked by default. Moved to Cleanup.
- “Files still on the card or source folder” — the originals on the card or in the import folder. Unchecked by default. Moved to Cleanup on this Mac. Files on a card laid out by the camera (Sony XAVC, XDCAM and XDCAM EX, older Sony cameras, Canon XF, Panasonic P2, AVCHD) are never listed, because taking single files off such a card leaves the camera’s own list of its clips wrong; the sheet says how many were left out. Format that card in the camera instead, once Clear Card says it is safe.
- “Staged in Cleanup” — files an earlier run already moved into Cleanup. This is the only group that deletes anything.

A running “Reclaim” total follows your checkboxes, and one red button applies the selection. When you confirm, MediaFlow acts only on files the sheet listed. A listed file that no longer qualifies is skipped; nothing new is added.

### What is checked before a file is moved

Two checks, at two moments. A quick one decides what the sheet lists; a thorough one runs on each file just before it is moved.

- To be listed, a file needs an organized copy at the destination that is exactly the same size. That applies to local copies and to card or source-folder originals alike. The sheet says how many local copies were kept back because the organized copy is missing or a different size.
- Before a listed file is moved, MediaFlow reads it in full and compares its SHA-256 with the organized copy’s. They must match each other, and match the checksum recorded when the clip was organized, if there is one. The organized copy is read in full too, unless you chose Use the Earlier Check (below).
- A file that cannot be proven is left exactly where it is. The summary lists each one with the reason: the organized copy could not be reached, the two do not match byte for byte, or the file has changed since it was organized.
- A file is never compared with itself. If the “local copy” and the organized copy turn out to be one file under two names, it is kept.

Reading the organized copies takes time, more so over a network: expect roughly as long as organizing the same clips took, and over a phone connection it uses your data. The progress window shows “Checking and moving” and can be cancelled between files.

### Check again, or use the earlier check

When some of the copies were read back in full when they were organized, and nothing else uses them, Free Up Space asks once, when you click the red button: for example, “22 copies were checked when they were organized. Check them again before removing the copies on this Mac? Checking again reads 29 GB from the drive.” It counts organized copies: a clip’s copy on this Mac and its card original lean on one organized copy, which is read once however many files it vouches for. With card originals ticked, it says “the copies on this Mac or the card”.

- Check Again (the default) — reads every organized copy in full, as before.
- Use the Earlier Check — skips reading those organized copies. Each must still be at the same place, the same size and the same date to the second as when Organize read it back; one that has changed is read in full anyway. The copy being removed from this Mac or the card is always read and must match the checksum recorded at organize time.

Copies with no earlier check to use are always read in full: copies organized with read-back off or by an earlier version, clips moved within one drive, clips pointed at another file since (by Relink, Library Moved, Move Project and the like), copies changed or on another drive or server since, copies on a share whose size has changed since, and every copy when MediaFlow can’t ask the database whether another project uses them. When some copies do have an earlier check, the sheet says how many have none and how much they hold. The same choice applies to deleting staged files in the same run.

> **Warning:** Using the earlier check trusts the drive: damage since the copies were organized that changes neither their size nor their date would go unnoticed, as would a change of the same size written within the same second they were checked, and the copies on this Mac would still be removed. A new network drive set up under the old one’s name, with the library copied over and its share exactly the same size, would pass for the old one too. When in doubt, or after replacing a network drive, choose Check Again. See How MediaFlow Verifies Copies.

### Staging and deleting

The first two groups are moved into Documents → MediaFlow Projects → Cleanup → &lt;Project Name>, beside the Imports folder, on this Mac. Nothing is sent over to the destination to be staged. An imported copy that is already on the destination’s drive (in an import folder there) is moved into a Cleanup → &lt;Project Name> folder on that drive instead, a quick move on the drive itself. Staged files are not deleted, and Restore from Cleanup can bring them back.

Moving a copy into Cleanup on the same disk frees no space by itself: the space comes back when you delete the staged files, from the third group, in this run or a later one. A card original moved here frees the card at once and takes space on this Mac until you delete it. A file that comes to this Mac from another disk (a card, or an import folder on another drive) is copied, and the copy here is read back and matched against the checksum recorded at organize time before the original is removed; if this Mac hasn’t room for all of them, the sheet says so before anything is moved. If this Mac fills up during the run anyway (another app writing to it meanwhile), the file being copied and the ones after it that would come here are kept where they were, and the run says so. The pipeline strip’s Free up space value keeps counting a copy staged on this Mac until it is deleted.

Earlier versions staged everything in the Cleanup folder on the destination’s drive. Files staged there are still listed in the third group, deleted from there, and restored from there.

The third group is deleted. Selecting it adds a confirmation that restates the file count, the total size and the file types, warns when the volume is a network drive with no Trash to recover from, and has a checkbox you must tick before the delete button enables.

Before MediaFlow deletes a staged file, it checks it again, the same way: the staged file is read in full, and a clip in this project must have an organized copy that matches it byte for byte, read at that moment, or, if you chose Use the Earlier Check and that check still holds, the checksum recorded when the clip was organized. A staged file whose organized copy is missing, damaged or a different size is kept, and so is any file in the Cleanup folder that does not belong to a clip in the project — delete those in the Finder if you are sure.

> **Warning:** Deleting the staged group removes the files permanently. They are not moved to the Trash.

### Restore from Cleanup

Workflow → Restore from Cleanup, also a link inside the Free Up Space sheet, moves staged files back where they came from: the working folder, or the card or source path for files staged from there. It looks in this Mac’s Cleanup folder and in the one on the destination’s drive, where earlier versions staged files; projects staged by earlier versions in folders named by project ID are still recognized. Files you deleted from the staged group cannot be restored.

A file goes back only to a place this Mac has had it. When two Macs share a project, a working copy staged on the other Mac stays in Cleanup, and the summary says so: restore it on that Mac. Otherwise, with two accounts of the same name, it would land in your home folder on the wrong Mac.

### Re-file folders by category

Workflow → Repair → Re-file folders by category (called Sync Folder Layout in earlier versions) moves every organized file at the destination into the folder that matches its current category and camera. Single edits re-file themselves in the background, so you need this only to catch up after an interrupted move or a relink. A clip on a card laid out by the camera (see Clear Card) is never moved: it stays where it is, and MediaFlow says why.

### The End of Day Wrap template

The End of Day Wrap workflow template’s cleanup step opens this same Free Up Space sheet. Nothing is staged or deleted that you have not seen listed and confirmed, and it asks the same question about the earlier check.

### Cancelling a cleanup run

The Cancel button on the progress window stops a move, a restore, a delete or a re-file between files. Files already staged stay in the Cleanup folder, files already restored stay where they were put back, and anything already deleted is gone. The remaining files are untouched, so you can run the same command again later to finish.

See also: [Organizing Media to Storage](#organizing-media-to-storage), [Re-check files](#re-check-files), [Clear Card](#clear-card), [Workflow Templates](#workflow-templates), [How MediaFlow Verifies Copies](#how-mediaflow-verifies-copies)

## Clear Card

*Delete clips from a memory card only after each one is organized, the card file checks out, and its organized copy is read back in full and matches.*

Clear Card empties a memory card safely. It lists every clip on the card, works out which ones already have an organized copy it can vouch for, and lets you delete only those. Clearing is always a separate, deliberate step from importing.

### Opening it

- File → Clear Card…, which has one item for each connected card
- The Clear Card button in the Import sheet, shown when the folder you chose is on a removable card
- After Organize Media: when the sources came from a card, the Clear Card review opens as soon as you click Done on the progress window. Nothing is deleted until you review and confirm

### What it looks at

Only the card’s DCIM folder is scanned. Nothing else on the card is read or touched. A card laid out by the camera is the exception: it is checked whole and nothing is deleted from it (see below). Each file is matched to a clip by the path it was imported from, or by filename and size when the card has mounted under a different name.

With the shared database connected, files are matched against the clips of every project. Without it, only the open project is searched, so clips that belong to other projects read “Not imported” and are kept.

### The five states

- “Verified at destination” — the clip is organized, a checksum was recorded, the organized copy is present and the same size, and the card file passed the check below. The only state that can be deleted; it is checked for you. Its organized copy is still read back before the card file goes (see below).
- “Organized, unverifiable” — organized, but the destination is not reachable, the clip is Missing, or no checksum was recorded. Kept.
- “Imported only” — imported into a project but not organized yet. Kept.
- “Not imported” — no project knows about this file. Kept.
- “Mismatch” — a size or the checksum disagrees with the recorded clip. Kept.

Every kept row is locked, with the reason shown next to it. There is no select-all and no override.

### What “verified” proves

The Check menu chooses between two modes.

- Verified (full SHA-256), the default — reads each card file in full and compares its checksum with the checksum recorded when the clip was organized. It also checks that the organized copy is still present and is the same size as the card file.
- Standard (path and size) — matches on the import path and the size only. Its review is much faster because it never reads the card file, and it will not act on a card that mounted under a different name.

Whichever mode you choose, nothing is deleted on the review alone. When you confirm, Clear Card first reads each selected clip’s organized copy back in full (the sheet shows “Checking copies…”) and matches it against the checksum recorded when the clip was organized, or, when none was recorded, against the card file itself. This matters because a copy made with read-back verification off (in Settings › Storage) was only spot-checked, and a copy can be damaged later without changing size. Reading the copies back takes about as long as copying them did.

A clip whose organized copy does not match, has gone, cannot be read, or is only a placeholder for a file in iCloud or another cloud service stays on the card. When the run finishes, the sheet lists each one by name with the reason. Organize the clip again, then clear the card.

### Cards Laid Out by the Camera

Some cameras keep their own list of the clips on a card, beside the clips: Sony XAVC cameras in a PRIVATE/M4ROOT folder (with a MEDIAPRO.XML file), Sony XDCAM in XDROOT or PRIVATE/XDROOT, Sony XDCAM EX in BPAV, older Sony cameras in MP_ROOT and AVF_INFO, Canon XF and Panasonic P2 in CONTENTS, and AVCHD cameras in AVCHD or BDMV. If MediaFlow finds one of these folders but cannot read it, it treats the card the same way, to be safe. Deleting single files from such a card on a Mac leaves that list wrong, and the camera may then ask to repair the card (Sony’s cameras offer Recover Image DB) or show clips that are gone. So MediaFlow never deletes files from a card like this, not even its DCIM photos.

Clear Card checks every clip on the whole card instead and deletes nothing. It reads each card file in full and compares its SHA-256 with the checksum recorded when the clip was organized, and then reads each organized copy back in full too, because a copy made with read-back verification off was only spot-checked. Reading the copies back takes about as long as copying them did; the sheet shows its progress.

When every clip has an organized copy that matches, it says “Safe to format this card in the camera”: eject the card and format it from the camera’s menu. Until then it says “Not safe to format yet” and lists each clip without a verified copy, with the reason. Clips in a format MediaFlow does not import yet, such as AVCHD’s MTS or XDCAM’s MXF, have no verified copy, so copy them yourself before you format. If any folder on the card cannot be read, the card is never called safe, and the sheet names the folder.

Only the files a camera keeps for itself are left out of the count: its database and index files, Sony’s thumbnails and proxies in PRIVATE/M4ROOT/THMBNL and PRIVATE/M4ROOT/SUB, and XDCAM’s proxies in its Sub folder. Everything else counts, including anything you put on the card yourself, such as files in XDCAM’s General folder.

### GoPro naming

A .MP4 owns the .LRV proxy and .THM thumbnail that share its name; they are listed and deleted with it. Chaptered recordings (GX010123, GX020123) are separate clips and are verified separately, so a verified chapter never takes an unverified one with it.

### Deleting

1. Review the list. Click Rescan if you have connected the destination or organized more clips since the scan
2. Click the red Delete button. A confirmation restates the clip count, the file count, the total size and the file types, and has a checkbox you must tick before it enables
3. MediaFlow reads each organized copy back in full (“Checking copies…”), as described above. Click Cancel to stop: stopped while copies are being checked, nothing is deleted; stopped while deleting, the clips not yet reached stay on the card
4. MediaFlow checks again that each file is inside the card’s DCIM folder immediately before deleting it, and asks the drive holding its organized copy to finish writing it. A clip whose copy’s drive cannot be asked is kept, and the reason is listed
5. At the moment of deleting, it also checks that the card file is still the one it checked, with the same size and date, and that the organized copy is still the one it read back. If either has changed since, the card file is kept; scan the card again to check it. If the drive holding the copy disconnects and reconnects during the run, the clips not yet deleted are kept too, to be safe, and the reason says so
6. When it finishes, click Eject to eject the card, or Done

Only one card is cleared at a time: while one is clearing, or waiting for you to confirm its deletion, Clear Card for another card is refused, with a message naming the card being cleared. A list of everything that was removed is written to the card’s MISC folder as cleared-files-&lt;date and time>.txt. Each cleared clip is also marked in the project so the Import sheet does not offer it again, and in the shared database when it can be written; when it can’t, for example while only this Mac’s copy can be looked at, the result says so, and the list on the card is the record. Emptied folders such as 100GOPRO are left on the card on purpose.

> **Warning:** A memory card has no Trash. Cleared files are erased at once and cannot be recovered. Clear Card will not run while an import, organize, archive, relink or the Proxy queue is running, and it refuses a card that is mounted read-only.

See also: [Freeing Up Space](#freeing-up-space), [Organizing Media to Storage](#organizing-media-to-storage), [The Import Sheet and Completion Card](/manual/importing-media/#the-import-sheet-and-completion-card)

## Proposals: What Import Analysis Suggests

*After an import, MediaFlow proposes a category, camera and scene for each clip; nothing is applied until you accept it.*

When an import finishes copying, MediaFlow examines each new clip and proposes a category, a camera, a scene and a reject flag. A proposal is a suggestion only. It appears in italic grey in the Category or Camera column with a High, Medium or Low badge, and the clip keeps its real category until you accept. Organize never applies a proposal; its confirmation sheet warns you when clips still carry one.

The switch is Settings › Analysis › “Propose category, camera and scene after an import”. It is on by default. This pass runs on this Mac, four clips at a time at low priority.

### The three passes

- The basic pass — always runs when proposals are on. It reads facts from the file: frame rate, length, camera make, audio level and one sampled frame
- Tier 1 — optional, off by default. Looks at the pictures and listens to the start of the clip
- A model — optional, off by default, and chosen for each import. Shows three frames to a model on this Mac or to a paid provider

A later pass refines the proposal. It never lowers a confidence you have already seen and never overrides a fact read from the file.

### Accepting

- Click an italic proposal to accept it for that clip. Hover over it to see what is proposed and, after Tier 1, the evidence
- Accept all High-confidence (n) in the selection bar accepts every High proposal in the project
- Accept selected proposals (n) accepts the proposals on the selected clips, whatever their confidence
- In Workflow → Review, A accepts the proposal on the clip in front of you and R marks it a reject candidate

Accepting works like choosing the value yourself: it can be undone, and an organized copy is re-filed.

### Rejecting

Choose a different category yourself. The proposal disappears, and a category you have set is never proposed over again.

### How your answers improve later suggestions

- Category Learning, on this Mac — every category you assign is remembered by camera and clip length. Settings › Categories shows the totals, and Reset Pattern Memory clears them
- Shared corrections, in the shared database — each proposal you confirm or correct is recorded for every Mac on that database. Later proposals for similar clips follow what you actually chose, and a category reads High only where you have nearly always agreed. Reset Pattern Memory does not clear these

See also: [Clip Classifier, Second Pass (Tier 1)](#clip-classifier-second-pass-tier-1), [Using a Model to Suggest Categories](#using-a-model-to-suggest-categories), [Auto-Suggest Categories](/manual/tags-categories/#auto-suggest-categories), [What Happens to Files When You Change a Category](/manual/tags-categories/#what-happens-to-files-when-you-change-a-category), [Reviewing Clips with the Keyboard](/manual/video-preview-playback/#reviewing-clips-with-the-keyboard)

## Using a Model to Suggest Categories

*An optional model can refine category proposals; it runs only when enabled in Settings and ticked for that import.*

A vision model can look at three frames from each clip and pick one of your project’s own categories. It refines the proposals import analysis already makes. Its answers are proposals like any other: shown for review, never applied by themselves.

It is off unless you do two things: turn on “Use a model to suggest categories” in Settings › Analysis, and tick “Ask a model to suggest categories” in the Import sheet for that import. The checkbox always starts unticked and applies to that import only.

### Which model

- On this Mac — free and private. Frames never leave this Mac. Slow: about a minute a clip, in the background
- Claude, ChatGPT or Gemini — answers in a second or two and costs money for every clip

> **Warning:** With a paid provider, MediaFlow sends three small frames from each clip to that company, with a line of clip details, the opening words of any speech, your category names and a few examples of how you labeled similar clips. The provider bills you per clip, separately from any subscription you already pay for. On Google’s free tier, your footage is used to train Google’s models; enable billing on your Google account to avoid that.

### Setting up a paid provider

1. In Settings › Analysis, turn on “Use a model to suggest categories”
2. Choose the provider under Model runs, then a Model. A note under the picker describes each one
3. Create an API key using the link shown, paste it into API key and click Save
4. Set “Stop after” to the most you are willing to spend in a day

### The daily limit

The limit is checked before every clip, so it is never exceeded. It starts at $1.00 a day. When it is reached the pass stops; clips it did not reach keep the proposal they had. The line below shows clips and spending today, and Reset sets it back to zero. The amounts are MediaFlow’s estimates; your provider’s bill is the final word.

### API keys

Keys are kept in your Keychain, never in preferences or the saved setup. Settings shows a masked key with Replace… and Remove.

### If the checkbox is missing or dimmed

- Missing — the switch in Settings › Analysis is off, or the paid provider you chose has no API key yet
- Greyed out — “Propose category, camera and scene after an import” is off, so there is nothing for a model to refine

Turning the Settings switch off stops a pass that is running.

See also: [Privacy: What Leaves This Mac](/manual/setup-network/#privacy-what-leaves-this-mac), [Running a Model on This Mac](#running-a-model-on-this-mac), [Proposals: What Import Analysis Suggests](#proposals-what-import-analysis-suggests), [Clip Classifier, Second Pass (Tier 1)](#clip-classifier-second-pass-tier-1), [Saved Setup: A Copy of Your Settings](/manual/setup-network/#saved-setup-a-copy-of-your-settings)

## Running a Model on This Mac

*Set up a free, private vision model on this Mac with Ollama; nothing you import leaves the machine.*

The Server address may be this Mac or another computer on your own network. An address on the internet is refused, so a local model never sends frames outside your network.

A local model suggests categories without sending anything anywhere and without costing anything. The price is time: about a minute a clip, in the background after the copy. Choose it when privacy matters more than speed. If this Mac is short of memory, a paid provider may suit it better.

MediaFlow talks to a model server running on this Mac. The setup assistant in Settings › Analysis works with Ollama. MediaFlow does not install Ollama for you; the download comes from ollama.com. Once it is installed, everything else happens in Settings.

### Set it up

1. In Settings › Analysis, turn on “Use a model to suggest categories” and set Model runs to On this Mac
2. Click Download Ollama… and install it, or click Copy Homebrew command and run it in Terminal. Then click Check again
3. If Ollama is installed but not running, click Start Ollama. It takes about fifteen seconds
4. Pick a model from the suggestions and click Download. This is a one-time download of several gigabytes
5. Click Run the check. MediaFlow asks the model one question to confirm it can answer in the format it needs
6. When the assistant reads “Ready”, tick “Ask a model to suggest categories” in the Import sheet for an import you want it to look at

### Choosing a model

The suggestions are sized to this Mac’s memory. The default is comfortable with 16 GB of memory or more; the larger ones judge better and want 24 GB or 32 GB. Each line shows the download size.

### If the check fails

Models below about 8 billion parameters usually cannot hold a structured answer. Click Download a different model and try a larger one.

### Using another server

Any server that speaks the same protocol works, such as LM Studio. Enter its address in Server and the model’s name in Model. Ollama is on port 11434 and LM Studio on 1234.

See also: [Privacy: What Leaves This Mac](/manual/setup-network/#privacy-what-leaves-this-mac), [Using a Model to Suggest Categories](#using-a-model-to-suggest-categories), [Proposals: What Import Analysis Suggests](#proposals-what-import-analysis-suggests), [Clip Classifier, Second Pass (Tier 1)](#clip-classifier-second-pass-tier-1)

## How MediaFlow Verifies Copies

*What MediaFlow checks, and when, before it treats an organized copy as safe and lets an original be removed, and what using the earlier check gives up.*

MediaFlow checks your files at three moments: when Organize copies a clip, when Clear Card deletes it from the card, and when Free Up Space removes the other copies. The checks are not equally strong. This topic says exactly what each one proves.

The short version: leave “Verify organized copies by reading them back” on. Then every copy is read back in full when it is made, and that check is saved with the clip, so Free Up Space can offer to use it later instead of reading every copy again.

### Organize

As MediaFlow copies a clip it computes a checksum of the original (SHA-256, a fingerprint of the file’s contents). It finishes writing the copy to the destination before it checks it. The setting is in Settings › Storage.

- On (the default; slower, safest) — the copy is read back in full from the destination. Its size and its SHA-256 must both match the original
- Off — the copy is checked by size, plus a comparison of 1 MB samples at the start, middle and end. Much faster over a network. Damage outside the sampled ranges is not detected

If the check fails, the copy is deleted and made again once. A second failure fails that clip and is reported. The original’s checksum is recorded on the clip; Clear Card and Free Up Space rely on it later.

MediaFlow also saves, with the clip, how its copy was checked: whether it was read back in full, and the copy’s size and date at that moment. It is kept in the project file and in the database.

A copy already at the destination from an earlier run is used only after it is read back in full and matches the clip byte for byte; anything else there is left alone and the clip is copied beside it. A copy carried on after a dropped connection is always read back in full too, whatever the setting. A clip moved within one drive (imported onto the destination’s own drive) is renamed, not copied, so nothing is read back, and it is saved as not checked in full.

### Read from the drive, not from memory

Every check in this topic reads with the Mac’s file cache turned off, and every copy MediaFlow checks afterwards (Organize, Move Project, Move to Editing Drive and Return to Library, Archive, Restore, Duplicate Project) is written that way too. So on a drive connected to your Mac, the read-back of a copy reads it from the drive itself, not from the memory the copy was just written from, and a fault on the way to the drive is caught rather than read past. On a network share, every byte is read back over the network from the server. Two limits: a file the Mac already holds in memory for another reason can still be read from there, such as a clip you just played, or a card file Organize has just read (so Clear Card’s check of the card, right after organizing, may come from memory; the organized copy itself was read back from its drive when it was made); and a network share’s server may answer from its own memory, which MediaFlow cannot see past.

### Clear Card

Only files in the state “Verified at destination” can be deleted, and there is no override. In both modes of the Check picker, the clip must have a recorded checksum, and its organized copy must be reachable now and be exactly the size of the card file.

- Verified (full SHA-256), the default — also reads every card file in full and compares its SHA-256 with the recorded checksum. This proves the card file is the file that was organized
- Standard (path and size) — matches the card file to the clip by its original path and size. Fast, but it never reads the bytes. A file matched only by name and size is kept

Whichever mode you choose, when you confirm, Clear Card reads each organized copy back in full and matches it against the recorded checksum before it deletes the card file. It never relies on the check made at organize time.

### Free Up Space

This is the step that removes the copies on this Mac and on the card. Files are moved to a Cleanup folder first and deleted only in a separate, confirmed step — and both steps prove the file first.

- To be listed at all, a file needs an organized copy of exactly the same size
- Before a file is moved, it is read in full and its SHA-256 must match the organized copy and the checksum recorded at organize time
- The organized copy is read in full too, unless you choose to use the earlier check (below)
- Before a staged file is deleted for good, the same check is made again, at that moment
- Whatever cannot be proven is kept, with the reason

### Using the earlier check

Reading every organized copy again takes about as long as organizing did, and over a phone connection it uses your data. So when some of the copies were read back in full when they were organized, Free Up Space asks once, before it starts, for example: “22 copies were checked when they were organized. Check them again before removing the copies on this Mac? Checking again reads 29 GB from the drive.”

- Check Again — reads each organized copy in full, as before. The surest choice, and the default
- Use the Earlier Check — the copy on this Mac is still read in full and must match the checksum recorded at organize time, but the organized copy is not read. MediaFlow only looks at it: it must be at the same place, the same size, and have the same date to the second as when it was read back

The earlier check is offered only for a copy that was read back in full when it was organized, is still on the same drive or the same share of the same server, with that share the same size as then, and that nothing else uses: no other clip in the project and, as the database says, no other project. A clip pointed at another file since (Relink, Library Moved, Move Project, Move to Editing Drive and back, a new destination, a restore from an archive, re-filing by category) keeps no earlier check: the file it points at now was never read back by Organize, even when it is a copy with the same name, size and date on a new server. These are always read in full: copies organized with read-back off, copies organized by an earlier version, clips moved within one drive, copies whose size or date has changed since, copies on a share whose size has changed since (given bigger disks, say; on a server whose shares all draw on one pool of disks, a share’s size can change as the others fill up, so there the earlier check may seldom be offered), and every copy when MediaFlow can’t ask the database (with no database, or when it doesn’t answer). When some copies do have an earlier check, the sheet and the question say how many have none and their size.

> **Warning:** The trade-off: Use the Earlier Check trusts that the drive has kept each copy as it was. Damage on the drive since it was organized that changes neither the size nor the date would go unnoticed, and so would a change of the same size written within the same second the copy was checked; the copies on this Mac would still be removed. A new network drive set up under the old one’s name, with the library copied over and its share exactly the same size as the old one’s, would pass for the old one too. When in doubt, after replacing a network drive, or if the drive has had problems, choose Check Again.

See also: [Organizing Media to Storage](#organizing-media-to-storage), [Clear Card](#clear-card), [Freeing Up Space](#freeing-up-space), [The Settings Window, Tab by Tab](/manual/setup-network/#the-settings-window-tab-by-tab)

## Format Conformance Checker

*Find clips whose frame rate, resolution or codec differs from the rest of the project before they cause trouble in your editor.*

The Format Conformance Checker analyzes all video clips in your project and flags format inconsistencies that could cause issues when editing in Final Cut Pro, DaVinci Resolve, or other NLEs.

### How to Use

1. Open your project with imported video clips
2. Go to Workflow → Analyze… → Format
3. Click Run Analysis
4. Review the report showing your project baseline and any detected issues
5. Click "Select Affected Clips" to highlight problem clips in the media list

### Severity Levels

- Critical (red) — Mixed frame rates: causes stuttering and dropped frames on timelines
- Warning (orange) — Mixed resolutions: clips will be scaled, may lose sharpness
- Info (blue) — Mixed codecs: may impact playback performance but generally manageable
- Info (blue) — Missing metadata: run metadata extraction to populate technical fields

### Project Baseline

The checker determines your project’s dominant resolution, frame rate, and codec (the most common values). Clips that differ from the baseline are flagged as potential issues.

> **Tip:** Run this check before exporting to an NLE to catch format mismatches early. It’s much easier to transcode a few clips now than troubleshoot timeline issues later.

Mixed frame rates are the most impactful issue — a 30fps clip on a 24fps timeline will stutter visibly. Always prioritize resolving critical issues first.

See also: [Organizing Media to Storage](#organizing-media-to-storage), [Generating Reports](/manual/reports/#generating-reports), [Transcode](#transcode)

## Workflow Templates

*Run a fixed series of operations in order with one command: organize, end-of-day wrap, or relink and repair. Each step finishes before the next begins.*

A workflow template runs several operations in order, so you do not have to find each command yourself. Each step is the same operation you would start from the menu, with the same confirmations and the same progress window, and the template waits for it to finish before it starts the next.

### How to Use

`Cmd+Shift+R` — Open Workflow Template Picker

Choose Workflow → Run Workflow Template, select a template, then click Run. When a step needs you — to confirm a copy, choose a folder, or read a result — the template’s own window steps aside and the step’s windows appear as usual. Nothing is copied, moved or deleted until you confirm it there. When you close the step’s last window, the template comes back with what the step did and carries on. The command is unavailable while a template is running.

### Built-in Templates

- One-click Organize — Re-check files, check format conformance, organize all media, then show a summary. Organize here always means the whole project, whatever is selected. This copies to the project’s destination; Archive to USB is a separate command
- End of Day Wrap — Re-check files, generate a report, open Free Up Space, then show a summary. Free Up Space shows its usual preview: nothing is staged or deleted that you have not seen listed and confirmed
- Relink & Repair — Re-check files, relink missing media, re-file folders by category, then show a summary

### When a step does not finish

- A step that fails stops the template. The summary says which step, why, and that the remaining steps were not run. This is deliberate: Free Up Space should never follow an Organize that failed
- If you back out of an optional step, for example by cancelling the report’s save panel, that step is marked skipped and the template carries on
- If you back out of a step the template depends on, the template stops there

### Controls During Execution

- Pause/Resume — Hold the template between steps without losing progress
- Skip Step — Skip the current step if it’s marked as optional (shown with an "optional" badge)
- Cancel Workflow — Stops the template; the remaining steps are marked as skipped. To stop a copy or a scan that is already running, use Cancel on that operation’s own progress window

### Summary Report

When the template ends, a summary shows each step with a checkmark, a skip mark or an error, and the header shows the elapsed time. Each line reports what actually happened, taken from the operation itself: how many clips were organized and how many were not, what Free Up Space moved or deleted, how many missing clips were relinked.

> **Tip:** Optional steps (like Format Check in One-click Organize) can be skipped to speed up the workflow when you know your formats are consistent.

See also: [Organizing Media to Storage](#organizing-media-to-storage), [Format Conformance Checker](#format-conformance-checker), [Re-check files](#re-check-files)

## GPS Scene Detection

*Group clips into suggested scenes by where they were shot, then accept, rename or reject each suggestion.*

Place names are looked up only if you turn that on in Settings › Privacy, and the small maps only if Maps is on; otherwise each scene shows its coordinates.

GPS Scene Detection analyzes the geographic coordinates embedded in your clips to suggest logical scene groupings. Clips shot near the same location are clustered together and presented as scene suggestions you can accept, rename, or reject.

### How to Use

1. Open a project with media with GPS data (phone and drone footage typically has GPS data)
2. Choose Workflow → Analyze… → GPS Scenes and click Run. MediaFlow analyzes at once with the radius and time gap you last used
3. Review each suggestion: accept, reject, or rename the scene
4. To try a different radius or time gap, click Re-analyze, change the settings and click Analyze
5. Click the Apply button to give the accepted clusters their scene names. The button says how many scenes it will apply, and appears once you have accepted at least one

### Clustering Radius

- 25m (Tight) — Indoor or single-setup scenes
- 50m (Normal) — One building or city block
- 100m (Wide) — Park, beach, or open area
- 250m (Very Wide) — Large venue or neighborhood

### Time Gap Threshold

Even if clips are at the same GPS location, a large time gap between them may indicate a different scene. For example, morning and afternoon shoots at the same beach are likely separate scenes. Set the time gap to split same-location clusters that are separated by more than the threshold.

- Disabled — Location only, ignore time
- 1–8 hours — Clips at the same spot separated by more than this form separate scenes

### Review Interface

Each suggestion shows a mini map pin, the suggested scene name (editable), clip count, time span, and sample filenames. Use the checkmark to accept or the X to reject. You can accept or reject all at once with the bulk buttons.

> **Tip:** Run Place names first (Workflow → Analyze… → Place names, once called Geocode Locations) so clips have readable place names. GPS Scenes works with raw coordinates too, but named places make the suggestions much easier to review.

Only clips with GPS metadata are analyzed. Clips without it are skipped, and so are clips that already have a scene.

See also: [Privacy: What Leaves This Mac](/manual/setup-network/#privacy-what-leaves-this-mac), [NLE Template Export](/manual/reports/#nle-template-export), [Logging Scene, Shot and Take](#logging-scene-shot-and-take)

## Sun Position & Shadow Continuity

*Calculate sun position for clips with GPS data and detect shadow continuity issues across takes.*

Sun Position Analysis calculates the solar azimuth (compass direction) and elevation for every clip with GPS data using the Meeus astronomical algorithm. It then checks for shadow continuity problems where takes of the same scene were shot at different times of day, causing mismatched shadow directions that would be visible when edited together.

### How to Use

1. Open a project with media with GPS data that has timestamps
2. Choose Workflow → Analyze… → Sun
3. Review the analysis results: sun position per clip, golden hour clips, and continuity warnings

### What Gets Calculated

- Azimuth — Compass direction of the sun (0° = North, 90° = East, 180° = South, 270° = West)
- Elevation — Angle above the horizon (negative values mean the sun is below the horizon)
- Lighting Condition — Daylight (>6°), Golden Hour (0°–6°), Blue Hour (-6°–0°), Twilight (-12°–-6°), or Night (&lt;-12°)

### Shadow Continuity Warnings

When two clips in the same Scene Log scene have sun azimuths more than 30° apart, MediaFlow raises a warning. Clips with no scene produce none. Warnings are rated by severity:

- Minor (30°–45°) — Subtle shadow shift, may not be noticeable
- Moderate (45°–90°) — Noticeable shadow direction change between takes
- Severe (>90°) — Major shadow reversal, very visible in edited sequence

> **Tip:** Golden hour footage has a distinctive warm quality. Use the lighting condition badges to find your golden hour and blue hour clips for color grading.

Sun position requires both GPS coordinates and accurate timestamps. Clips without location data are skipped.

See also: [NLE Template Export](/manual/reports/#nle-template-export), [Logging Scene, Shot and Take](#logging-scene-shot-and-take)

## Interactive Shoot Map

*View shooting locations on an interactive map with clip clustering.*

The map itself is off until you turn on Maps in Settings › Privacy, or with the Turn On Maps button: showing a map sends the area you are looking at to Apple. Until then the locations are counted without a map.

The Shoot Map displays all clips with GPS data on a map. Clips shot at the same place share one numbered pin. Click a pin to see its clips and select them in the media list.

### How to Open

`Cmd+Opt+M` — Open Shoot Map

Or choose Workflow → Plan & Deliver → Shoot Map from the menu bar.

### Map Features

- Cluster pins — Clips within 50m are grouped into numbered clusters
- Click a cluster — Highlights it in the sidebar with clip details
- Click a single pin — Selects the clip in the media list
- Select All in Browser — Selects all clips at a location for batch editing
- Map styles (macOS 14 and later) — Switch between Standard, Satellite, and Hybrid views; on macOS 13 the map is the standard one

### Filters

- Category — Show only clips from a specific category (A-roll, B-roll, etc.)
- Rating — Filter to clips with a minimum star rating

### Sidebar

The sidebar lists all location clusters sorted by clip count. Each entry shows the place name, clip count, sample filenames, and category badges. Click a location to zoom the map to it.

> **Tip:** Use the Shoot Map alongside GPS Scene Detection to visually verify scene groupings before applying them.

See also: [Privacy: What Leaves This Mac](/manual/setup-network/#privacy-what-leaves-this-mac), [GPS Scene Detection](#gps-scene-detection), [Historical Weather Lookup](#historical-weather-lookup), [Logging Scene, Shot and Take](#logging-scene-shot-and-take)

## Historical Weather Lookup

*Look up the weather at the place and time each clip with GPS data was shot and store it with the clip.*

Weather lookup is off until you turn it on in Settings › Privacy, because it sends each clip’s coordinates and date to Open-Meteo.

Weather Lookup retrieves historical weather conditions for every clip with GPS data from the free Open-Meteo service. It records temperature, sky conditions, wind, and humidity — the same information a script supervisor would note by hand for continuity.

### How to Use

1. Open a project with media with GPS data
2. Choose Workflow → Analyze… → Weather
3. Wait for the lookup to finish. It needs an internet connection. The progress panel then reports how many clips had weather added

### Data Retrieved

- Sky condition — Clear, Partly Cloudy, Overcast, Rain, Snow, Fog, Thunderstorm, etc.
- Temperature
- Wind — Speed
- Humidity — Relative humidity percentage

### Where you see it

- In the metadata panel, select a clip and open the Weather section, below GPS & Location. The section header shows the conditions and temperature at a glance. Temperature and wind are shown in the units your region uses
- In the search field, type the conditions, for example rain or cloudy, to find the clips shot in them

Both follow the weather switch in Settings › Privacy. With it off, MediaFlow does not look weather up, and it does not show or search weather that an earlier lookup saved. Turn the switch back on and the saved weather reappears; nothing is deleted.

### Caching

Results are cached for each ~110 m square and hour, so clips shot in the same square within the same hour share one request. The cache lasts until you quit MediaFlow. The weather itself is saved with each clip in the project file.

> **Warning:** Weather Lookup sends data off this Mac. For each lookup it sends the clip’s coordinates, rounded to three decimal places (about 110 m), and the shooting date to the Open-Meteo service. No API key or account is needed.

See also: [Privacy: What Leaves This Mac](/manual/setup-network/#privacy-what-leaves-this-mac), [NLE Template Export](/manual/reports/#nle-template-export)

## Vision (AI Scene Analysis)

*Detect shot type, faces, indoor or outdoor, and on-screen text on this Mac, and suggest a category for each clip.*

Vision, once called AI Scene Analysis, uses Apple’s Vision framework to analyze your video clips. It detects shot types, counts faces, classifies indoor/outdoor scenes, and reads on-screen text — all on-device with zero API costs.

### How to Use

1. Open a project with video clips
2. Choose Workflow → Analyze… → Vision
3. Wait for analysis to complete (progress shown in the review sheet)
4. Review suggestions: accept individually or accept all uncategorized

### What Gets Detected

- Shot Type — Close-Up, Medium, Wide or Other, from how much of the frame the largest face fills; Establishing when there are no faces
- Face Count — Number of people/faces in the frame
- Face Position — Left, Center, or Right for composition analysis
- Indoor/Outdoor — Environment classification from scene content
- On-Screen Text — Detected text from clapperboards, signs, titles
- Category Suggestion — Interview, B-roll or Establishing Shot

### Accuracy

The category rules are simple. One or two faces with one of them centered suggests Interview. No faces suggests B-roll outdoors and Establishing Shot otherwise. Anything else, including three or more faces, suggests B-roll. These are suggestions; review them before you accept.

> **Tip:** Vision samples 5 representative frames per clip, not every frame. This keeps analysis fast while providing reliable results.

Vision runs entirely on this Mac. It needs no internet connection and no API key.

See also: [Auto-Suggest Categories](/manual/tags-categories/#auto-suggest-categories), [Smart Selects](#smart-selects)

## Speech Transcription

*Transcribe the speech in your video clips with Apple’s speech recognition; the text is saved with each clip.*

Speech is recognized on this Mac. Apple’s online recognition is used only if you turn it on in Settings › Privacy, and only for a language this Mac has no on-device model for.

Transcribe turns the speech in your video clips into text using Apple’s speech recognition. The text is saved with each clip in the project file, and import analysis uses it as one of its signals when it proposes a category. Audio-only files are not transcribed.

### How to Transcribe

1. Open a project with video clips that contain speech
2. Choose Workflow → Analyze… → Transcribe
3. Allow speech recognition if macOS asks
4. Wait for it to finish. The progress panel reports how many clips were transcribed

To transcribe one clip, select it, open the Transcript tab of the metadata panel and click Transcribe This Clip.

### The Transcript tab

- Read — the clip’s lines in order, each with its time. Click a time to jump the preview to that line
- Search — type in the field to show only the lines containing every word you typed. Tick All clips to search every clip’s transcript instead; click a result to select that clip
- Correct — edit a line and press Return. The words change and the line’s timing stays as it was. Clear a line and press Return to remove it, for a cough or a false start the recognizer heard as a word
- Export — save the transcript as SubRip (.srt) or WebVTT (.vtt) subtitles, or as plain text with timecodes. The file is named after the clip
- Transcribe Again — replaces the transcript with a new one. Your corrections are replaced too

A recognition that has not answered within two minutes plus three times the length of the audio being transcribed is stopped and counts as no speech. During an import that audio is at most the first 90 seconds of each clip. When the length of the audio cannot be read, there is no time limit.

### Where the Audio Goes

MediaFlow recognizes speech on this Mac when the Mac has an on-device model for your system language. When it does not, nothing is transcribed unless you have turned on online speech recognition in Settings › Privacy; with that on, the audio is sent to Apple. The Transcript tab says which applies before you start. No API key is needed either way.

> **Tip:** Clear speech with little background noise gives the best results.

See also: [Privacy: What Leaves This Mac](/manual/setup-network/#privacy-what-leaves-this-mac), [Clip Classifier, Second Pass (Tier 1)](#clip-classifier-second-pass-tier-1), [Proposals: What Import Analysis Suggests](#proposals-what-import-analysis-suggests)

## Smart Selects

*Score each clip for sharpness, exposure, audio and more on this Mac, and suggest a star rating you can accept.*

Smart Selects, once called AI Smart Selects, scores every clip on five measures and suggests a star rating. It runs on this Mac and needs no internet connection.

### Quality Dimensions

- Sharpness (30%) — Focus quality measured via Laplacian variance on a sample frame
- Exposure (25%) — Luminance histogram analysis detecting over/underexposure and clipping
- Audio (20%) — Audio level analysis checking for clipping, silence, or low levels
- Stability (15%) — A rough guess from the clip’s length and whether it has been logged with a scene. It does not measure camera shake
- Composition (10%) — Aspect ratio conformance and resolution scoring

### How to Use

1. Open a project with media clips
2. Choose Workflow → Analyze… → Smart Selects
3. Watch the progress row in the progress panel at the bottom-right of the window
4. Review the results sorted by overall quality score
5. Accept individual ratings or click Accept All to apply all suggestions

### Circle Takes

A clip that scores above 85% overall is proposed as a Circle Take. Nothing changes until you Accept that clip or click Accept All. Accepting a Circle Take also marks the clip Hero with five stars.

Sharpness analysis samples a single frame near the start of each clip. Clips that start out of focus but later become sharp may receive a lower sharpness score than expected.

See also: [GPS Scene Detection](#gps-scene-detection), [NLE Template Export](/manual/reports/#nle-template-export)

## Audio Waveform Sync

*Line up clips recorded at the same time, from cameras or a sound recorder, by their sound.*

Audio Sync finds how far apart in time your clips were started by comparing their sound. Use it to line up several cameras, or a sound recorder’s file (a .WAV, for example) with your camera clips, before you set up a multi-camera edit in your NLE.

### Which Clips It Compares

- Select two or more clips first to compare just those. With fewer than two selected, it compares every clip with sound in the project.
- Video clips and audio-only files (WAV, MP3, AAC, M4A) are both included. Photos are skipped.
- Clips can be any length: one can sit inside the other, they can overlap only partly at either end, or be exactly the same length. They need to share at least five seconds of sound, or half the shorter clip if it is under ten seconds.

### How to Use

1. Optionally select the clips you want to line up
2. Choose Workflow → Analyze… → Audio Sync
3. Watch its progress in the panel at the bottom-right; click Cancel there to stop it at any time
4. Review each pair: where the second clip starts on the first one’s timeline, for example “C0001.MOV starts 12.345s after ZOOM0001.WAV”
5. Use the offsets when setting up a multi-camera edit in your NLE

### Confidence

Each pair’s confidence says how clearly its best match beats the next best. When the best match is not at least twice as good as any other, Audio Sync says “Couldn’t find a confident match” and gives no offset, rather than one you might trust by mistake. That is what you will see for clips that don’t share any sound, or whose sound repeats, such as a steady beat.

- Excellent (above 80%) — the best match is more than five times as good as any other
- Good (above 50%) — more than twice as good; worth a quick check in your NLE
- No match — no offset is given

### How It Works

1. Each clip’s sound is read once and boiled down to how its loudness rises and falls, 100 times a second
2. Every possible offset between two clips is tried at once
3. A confident match is then refined to an eighth of a millisecond using 20 seconds of each clip

Audio Sync never holds whole clips in memory: about a third of a megabyte per hour of sound, so it works on long recordings and big projects. It only shows offsets; it changes nothing in your project. If you open another project before it finishes, its results aren’t shown; open the project again and run it again.

> **Tip:** For best results, have every camera record sound, even a camera you will not use the sound from. A clap or a slate at the start of each take gives Audio Sync something sharp to line up.

A clip with no sound track, or whose sound can’t be read, is listed under Couldn’t Be Compared with the reason, and the other clips are compared as usual.

See also: [Smart Selects](#smart-selects), [NLE Template Export](/manual/reports/#nle-template-export)

## Shot List

*Plan the shots you need, link captured clips to them, and see coverage gaps.*

The Shot List tracks the shots you planned against the clips you captured. Choose Workflow → Plan & Deliver → Shot List…. Each item has a description, an optional scene, an optional shot type (Wide, Medium, Close-Up, Extreme Close-Up, Over the Shoulder, POV, Aerial, Insert, Establishing, Other), and a Required checkbox.

### Statuses

- Pending (orange clock) — Not yet captured
- Captured (green check) — At least one clip is linked to the shot
- Missing (red X) — You have marked the shot as not captured

The header shows “x/y shots captured” with a progress ring, and the filter bar switches between All, Captured, Pending, and Missing. The footer warns in red when required shots are still not captured.

### Overflow Menu (…)

- Import from CSV… — Paste rows of description, scene, shot type, required (true/false); a header row is detected automatically
- Auto-Match Clips — Links clips whose Scene Log scene and/or shot type match each uncaptured item and marks it Captured
- Mark Remaining as Missing — Flips every Pending item to Missing at the end of the day

Per-row buttons reset an item to Pending or remove it. Every change is saved to the project file immediately.

> **Tip:** Fill in Scene and Shot in the Scene Log tab as you review footage. Auto-Match Clips then does the linking for you.

See also: [Logging Scene, Shot and Take](#logging-scene-shot-and-take), [Storyboard](#storyboard)

## Storyboard

*Arrange clips into named sections by drag and drop to plan the edit order.*

The Storyboard lets you plan the order of the edit before you open your editor. Choose Workflow → Plan & Deliver → Storyboard… to open a board with sections on the left and an Unplaced Clips list on the right. The first time you open it in a project, MediaFlow creates five default sections: Opening, Act 1, Act 2, Act 3, and Closing.

### Working the Board

- Drag a clip from Unplaced Clips onto a section (or onto its “Drop clips here” zone) to place it
- Drag a clip from one section to another to move it; a clip lives in exactly one section
- Right-click a clip card and choose Remove from Storyboard to send it back to Unplaced (the clip itself is untouched)
- Type a name in New section name and click Add Section (or press Return); the trash icon deletes a section
- Click a section’s chevron to collapse it; the header counts clips and sections

Clip cards show the filename, duration, scene, and star rating. Unplaced Clips lists every video and image clip that is not yet in a section.

The storyboard is stored in the .vpm project file. It is a planning aid only and cannot be exported. To hand structure to your editor, use NLE Template Export or Export FCPXML.

See also: [Shot List](#shot-list), [NLE Template Export](/manual/reports/#nle-template-export), [Star Ratings & Selects](/manual/managing-clips/#star-ratings--selects)

## Import Field Notes

*Match timestamped notes from a text or CSV file to the clips recorded at that time.*

Import Field Notes attaches notes you typed on set to the clips recorded at that moment. Choose Workflow → Plan & Deliver → Import Field Notes… and pick a text or CSV file. Each note is matched to the clip whose creation time is closest.

### File Formats

- Plain text — One note per line, starting with a time: “12:34 PM — great reaction shot” or “2026-04-02 12:34:00 - audio drop”
- CSV — A timestamp/time column plus a note/notes/text/comment/description column, with an optional tag/category/type column
- Timestamps may be full dates (2026-04-02 12:34, 04/02/2026 12:34 PM, …) or time only (12:34, 12:34:56 PM); time-only notes are assumed to be from today
- Tags in [brackets] or #hashtags inside the note text become the note’s tag

### Matching Confidence

- Exact (green) — Within 30 seconds of a clip’s creation time
- Probable (yellow) — Within 2 minutes
- Uncertain (orange) — Within 5 minutes
- Unmatched (red) — No clip within 5 minutes

If the camera clock and your watch disagree, adjust the TZ offset stepper (−12 to +12 hours); matching re-runs as you change it. Parse errors are listed separately so you can fix the source file.

### What Apply Does

- Appends the note text to the clip’s Notes (existing notes are kept)
- Adds the tag to the clip’s Tags if not already present
- If the tag contains hero, selects, or best and the clip is unrated, sets a 5-star rating

See also: [Working with Tags](/manual/tags-categories/#working-with-tags), [Editing Clip Metadata](/manual/managing-clips/#editing-clip-metadata), [Star Ratings & Selects](/manual/managing-clips/#star-ratings--selects)

## Clip Classifier, Second Pass (Tier 1)

*An optional second pass after import that looks at the pictures and listens to the start of each clip to refine proposals.*

After an import finishes copying, MediaFlow proposes a category, camera, scene and reject flag for every clip. The basic pass reads facts from the file: frame rate, recording time, camera make, audio level, one sampled frame. Tier 1 is a second, slower pass that looks at the pictures and listens to the start of the clip, so the proposals are better. Proposals appear in italics and are never applied until you confirm them.

### What Tier 1 looks at

- Faces — how many, how large, and how centered. One or two centered faces that fill a real part of the frame suggest an Interview
- Scene labels — the families Vision returns (outdoor, beach, road, vehicle, food, buildings) map to B-roll or Establishing Shot
- Signage — readable text in shot suggests an establishing shot, and gives the clip a title
- Altitude — a flying camera with nobody in frame is B-roll
- Motion — how much the picture changes between sampled frames, which separates a time-lapse or hyperlapse from a locked-off tripod
- Speech — the first 60 to 90 seconds of clips whose audio is not silent, to spot speech to camera and seed a title

Tier 1 weighs your project’s own categories against each other, and the strongest becomes the proposal. It never overrides a Tier 0 verdict that came from a hard fact such as 240 fps, never lowers the confidence Tier 0 reported, and never changes the camera Tier 0 read from the file.

### Privacy

The picture analysis (faces, scene labels, signage, motion) runs on this Mac. The speech sample uses Apple’s speech recognition: it runs on this Mac when macOS has an on-device model for your Mac’s language, and otherwise the audio sample is sent to Apple’s speech service. If you refuse speech recognition permission, Tier 1 carries on without the speech signal.

### Turning it on

Tier 1 is off by default. The switches are in Settings › Analysis, under Import Analysis:

- “Propose category, camera and scene after an import” — the first pass. It must be on before Tier 1 can be switched on
- “Also look at the pictures and listen to the first minute (Tier 1)” — Tier 1 for every project
- “Use Tier 1 for the open project” — overrides the switch above for this project only
- “Run Tier 1 over the open project now” — runs it over clips that already carry an unconfirmed proposal. It works in the background and skips clips it has already seen

Turning Tier 1 off while it runs stops it. Whatever it has already proposed stays.

### Whole-file transcripts

Tier 1 listens only to the start of a clip. To transcribe whole clips, choose Workflow → Analyze… and click Run on the Transcribe row.

> **Tip:** In Review (Workflow → Review), A accepts the proposal on the clip in front of you and R marks it a reject candidate. Both teach the category suggester.

See also: [Privacy: What Leaves This Mac](/manual/setup-network/#privacy-what-leaves-this-mac), [Auto-Suggest Categories](/manual/tags-categories/#auto-suggest-categories), [Vision (AI Scene Analysis)](#vision-ai-scene-analysis), [Speech Transcription](#speech-transcription), [Reviewing Clips with the Keyboard](/manual/video-preview-playback/#reviewing-clips-with-the-keyboard)

## Audio Levels

*Flag clips with clipped, quiet, or silent audio before they reach the edit.*

The Audio pass finds sound problems before you cut. Choose Workflow → Analyze… and click Run on the Audio row. MediaFlow reads the audio track of every video or audio clip that has not been analyzed yet and records its peak level, average level and a quality flag. Progress shows in the progress panel.

### Flags

- Clipping — more than ten samples at or near 0 dBFS
- Silent — average level below −50 dBFS
- Low — average level below −30 dBFS
- Good — none of the above

The flag appears as an icon in the Table view, and the levels are listed in the Full Metadata tab. Clips with a Clipping, Low or Silent flag are counted as audio issues in the Day Summary. Clips that already carry a flag are skipped; MediaFlow tells you when nothing is left to analyze.

See also: [Day Summary](/manual/reports/#day-summary), [Smart Selects](#smart-selects), [Audio Waveform Sync](#audio-waveform-sync), [The Analyze Hub](/manual/getting-started/#the-analyze-hub)

## Exposure

*Traffic-light exposure ratings and color-cast notes for every clip, measured from a few frames of each clip, with the camera settings as the fallback, grouped by scene.*

The Exposure pass gives you a triage list of clips that may be too bright, too dark or off-color. Choose Workflow → Analyze… and click Run on the Exposure row. MediaFlow reads a few frames from each clip, rates its exposure from what it sees, estimates its color balance, and flags clips that do not match the rest of their scene.

### What it measures

The picture. For each video, the pass reads five frames spread evenly through the clip (a still is read once) and builds a brightness histogram from them, using the standard Rec. 709 weighting of red, green and blue. Each row shows the average brightness out of 255, the share of the picture whose highlights are clipped (brightness 250 or more), and the share whose shadows are crushed (5 or less), with a small histogram beside it. The rating comes from those figures, in five bands from Underexposed to Overexposed: more than 5% of highlights clipped reads Overexposed, an average under 30 reads Underexposed, and Slightly Over and Slightly Under sit between those and Good.

### When a frame can’t be read

Some clips can’t be read: a format this Mac can’t decode, a file that is missing or on a drive that is offline, or a clip that is only a placeholder in iCloud or another cloud folder (MediaFlow never downloads it just to look). That row says “Couldn’t read a frame from this clip” and shows no figures and no histogram. Its rating is then the band the camera’s settings point to, and the row says so: ISO multiplied by shutter time, the light the camera let in, with a GoPro’s exposure compensation moving it up or down. Settings can warn of a problem but never vouch for a clip nobody looked at: when they look normal, or none were recorded, the clip reads “Not measured” in grey. It is not counted as Good, it has its own filter and count, and a set that includes one is never reported as All Clear. The aperture is shown in the note and is not part of any calculation.

The color note always comes from the white balance the camera recorded, not from the picture: a tungsten setting reads as a cool cast, cloudy or shade as warm, fluorescent as green; daylight, or no setting, as neutral.

### Traffic lights

- Green / Good — the figures are within the normal range, or there was nothing to go on
- Yellow / Marginal — Slightly Over or Slightly Under
- Red / Problem — Overexposed or Underexposed
- Grey / Not measured — no frame could be read, and the camera’s settings gave no reason to worry

Click a traffic-light count, or use the All / Good / Marginal / Problem / Not measured filter bar (a clip still being read waits out of the coloured filters until it is read), to narrow the list. Each row shows the scene and a note such as “Overexposed · average brightness 214 of 255 · 8.0% of highlights clipped · 0.0% of shadows crushed · measured from 5 frames · Color: warm (cloudy/shade WB) · ISO 400 · Shutter 1/60 · f/2.8”. Every figure in a note was measured from the frames of that clip; a row that could not be read has none. While the frames are being read, the window opens at once and each row fills in as its clip is done.

### Scene color mismatches

Within a scene that has two or more clips, any clip whose recorded color setting differs noticeably from the scene average is flagged, and the header counts the scenes with mismatches. Since this check follows the white balance setting and reads no picture, this can catch one camera set far from the rest of its scene, such as tungsten against cloudy, or tungsten among several daylight clips. It is a coarse check: two clips with one on daylight and the other on tungsten are not far enough from their scene average to be flagged, and a fluorescent setting never is.

Treat the list as a guide to which clips to look at, and confirm on a monitor: five frames cannot show a flash or a dark moment between them. Smart Selects also looks at the picture, from a frame near the start of each clip.

See also: [Smart Selects](#smart-selects), [Format Conformance Checker](#format-conformance-checker), [Logging Scene, Shot and Take](#logging-scene-shot-and-take), [The Analyze Hub](/manual/getting-started/#the-analyze-hub)

## Transcode

*See which codecs your editing software will struggle with and what to transcode them to.*

The Transcode pass tells you which clips to convert before you edit. Choose Workflow → Analyze… and click Run on the Transcode row. MediaFlow groups the project’s video clips by codec and compares them with what the editor you pick handles well: Final Cut Pro, Premiere Pro, DaVinci Resolve or Avid Media Composer. Your choice is remembered.

### Priorities

- Required (red) — codecs the editor handles poorly, for example HEVC/H.265 in Premiere Pro, or HEVC and H.264 in Avid
- Recommended (orange) — codecs that are neither native nor known to cause problems; proxies speed up editing
- Optional (blue) — footage larger than 4K, where proxies are suggested

Each card names the target codec (ProRes 422 or ProRes 422 Proxy; DNxHD 175 or DNxHD 36 for Avid), the number of clips affected, and an estimated output size and transcode time. The header sums the totals, or confirms that every clip is already compatible.

This sheet only advises; it does not transcode anything. To make proxies, select the clips and use the Workflow Tools tab, or use your editor’s own media management.

See also: [Format Conformance Checker](#format-conformance-checker), [NLE Template Export](/manual/reports/#nle-template-export), [Processing the Proxy Queue](/manual/batch-operations/#processing-the-proxy-queue), [The Analyze Hub](/manual/getting-started/#the-analyze-hub)

## Continuity

*A scene-by-angle coverage grid that shows where a camera has no footage or far fewer takes.*

The Continuity pass shows whether every scene is covered from every angle, so you can decide on a pickup before you leave a location. Choose Workflow → Analyze… and click Run on the Continuity row. MediaFlow builds a grid of scenes (rows) against cameras (columns) from the Scene Log data on your clips and counts the takes in each cell. The column for a clip comes from its Camera angle in the Scene Log; when that is empty, its camera is used.

### Cell colors

- Good (green) — the camera has takes for the scene
- Partial (yellow) — the camera has fewer than half the takes of the best-covered camera for that scene
- Missing (red) — the camera has no footage for the scene

### Coverage gaps

Below the grid, gaps are listed with missing coverage first and a one-line explanation, for example “Scene 4 only has footage from A — no backup angle”. The header summarizes the counts, or reports full coverage across all scenes and cameras.

Clips without a scene are ignored. If no clip has scene data, the sheet asks you to assign scenes and cameras first.

See also: [Logging Scene, Shot and Take](#logging-scene-shot-and-take), [Shot List](#shot-list), [Audio Waveform Sync](#audio-waveform-sync), [The Analyze Hub](/manual/getting-started/#the-analyze-hub)

## Logging Scene, Shot and Take

*Record scene, shot type, take, camera angle and circle takes for each clip in the Scene Log tab.*

The Scene Log records the slate information for a clip, so later tools can group, match and export by scene. Select a single clip and open the Scene Log tab in the metadata panel. Every field saves as you type.

### Fields

- Scene — Free text such as 1A or 12
- Shot — Wide, Medium, Close-Up, Extreme Close-Up, Over the Shoulder, POV, Aerial, Insert, Establishing, or Other
- Take — A number; the + button (Cmd+Shift+T while the tab is showing) increments it
- Camera angle — Which angle the take was shot from, such as A, B or C. This is not the camera that shot the clip; that is Camera in the Edit tab
- Circle Take — Marks the director-approved take

Ticking Circle Take also marks the clip Hero and rates it five stars, unless the clip already has a select status or a rating. Unticking it does not remove them; change the select status and the rating yourself.

### Where It Is Used

- Review (Workflow → Review) shows Sc / shot / Tk / camera angle in its overlay, and C toggles the circle take
- Shot List → Auto-Match Clips links clips to planned shots by scene and shot type
- In Workflow → Analyze…, GPS Scenes proposes scene groupings, Sun compares clips within a scene, and Continuity counts takes per scene and camera angle
- Generate Dailies, NLE Template Export, and Workflow → Plan & Deliver → Export FCPXML carry scene, shot, take, and circle takes to the editor

Edits made in the Scene Log tab are saved at once and cannot be undone with Edit → Undo, so check the take number before you move on.

See also: [Shot List](#shot-list), [Continuity](#continuity), [Dailies Report](/manual/reports/#dailies-report), [Reviewing Clips with the Keyboard](/manual/video-preview-playback/#reviewing-clips-with-the-keyboard), [NLE Template Export](/manual/reports/#nle-template-export)

<div class="chapter-nav" role="navigation" aria-label="Chapters">
<a rel="prev" href="/manual/managing-clips/">&larr; Managing Clips</a>
<a href="/manual/">All chapters</a>
<a rel="next" href="/manual/video-preview-playback/">Video Preview &amp; Playback &rarr;</a>
</div>
