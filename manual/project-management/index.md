---
layout: manual
title: "Project Management — MediaFlowSwift Manual"
description: "Save the project file (.vpm), save it under a new name, or go back to the last saved version."
permalink: /manual/project-management/
generated: tools/import-guide.sh
---
# Project Management

## Saving Projects

*Save the project file (.vpm), save it under a new name, or go back to the last saved version.*

- Save (Cmd+S) — Save the current project to its existing location
- Save As (Cmd+Shift+S) — Save the project file under a new name or in a new place, and carry on working in the new file. Media files are not copied. With a shared database, the new file becomes where the project lives for every Mac that shares it, and the file you left is its old copy. Save As from an old copy of a project only makes another copy: the project stays where it lives
- Revert to Saved — Discard all unsaved changes and reload from disk

A project is saved as a .vpm file. It holds the list of clips and where their files are, plus your categories, tags, ratings, notes and project settings. It does not contain the media itself.

The project file holds the whole project. When the shared database is connected, each save also sends the database what changed on this Mac, and as a rule leaves clips you didn’t change as the database has them; What a Save Sends in Shared Database Overview says when it doesn’t. If the database cannot be reached, MediaFlow notes that the project changed and sends the changes when the connection returns.

### When Another Mac Saved the File Too

Two Macs can have the same project file open, on a share both reach. Before each save, MediaFlow checks whether the file changed since this Mac opened it or last saved it. Every save writes a new save number at the start of the file; while the file’s date and size are as this Mac left them, nothing more is read, and a file that was only touched costs a look at its first few bytes, so a save over the network costs no more than before. The file is replaced only if it is still as that check found it: if the other Mac saves in the moment between, MediaFlow looks again.

- If the other Mac saved the file meanwhile, its changes are merged in before this Mac writes: the clips it added come in, with their transcripts, sound levels and other details, and the clips it removed are removed here too
- A clip changed on both Macs keeps both changes when they are to different things: a rating made there and a note written here both stay. The project’s own settings merge the same way: its name, destination, categories and devices, shot list, storyboard, the projects it shares media with, where its library copy is, and its archive record (whether it is archived, and to which drive)
- When both Macs changed the same thing differently (the same clip’s note, the storyboard, or the archive record), this Mac’s change is kept. The other Mac’s version of the whole project is kept in a folder called Copies Kept Aside, beside the project file, as “name (changed on another Mac date time).vpm”, and a notice says how many clips differed, with Show in Finder. It is written once for each such save, not at every save after it
- A clip removed on one Mac but changed on the other since is kept, and counts as a change on both sides. When the Mac that removed it saves next, the clip stays: keeping it came after the removal
- A file that holds another project, or can’t be read, is never saved over. That happens when a project opened from the shared database alone finds another project’s file where its own used to be. This Mac’s copy is saved in Copies Kept Aside as “name (this Mac’s copy date time).vpm”, and kept up to date there, until the project file can be read as this project again. New Project likewise won’t make a project where a project file of that name already is

A copy kept aside opens like any project file, to look at or to copy back from. It says it is a copy kept aside, is never sent to the shared database, and is passed over by Library Moved and by Migrate Projects. Delete the folder once you have what you need from it.

With the shared database connected, the merged project is what the database gets too. A clip brought in from the other Mac’s save doesn’t undo a removal the database has recorded for it, and isn’t written back as this Mac’s change, even when the database was out of reach at the time and MediaFlow was quit before it came back.

See also: [Moving a Project](#moving-a-project), [Renaming a Project](#renaming-a-project), [Duplicating a Project](#duplicating-a-project), [Working Offline and Syncing Later](/manual/shared-database/#working-offline-and-syncing-later), [Shared Database Overview](/manual/shared-database/#shared-database-overview)

## Renaming a Project

*Change the open project’s name. Its project file is renamed to match; the project folder and the media keep their names.*

1. Choose File → Rename Project
2. Enter the new project name in the dialog
3. Click Rename. The project file is renamed to match, in the folder it is already in. Click Rename, Keep File Name if you want the name changed in MediaFlow only

Renaming changes the project’s name in MediaFlow: in the window, in the recent and browse lists, and in the shared database if it is connected. The project is saved straight away, and any edits still waiting to be saved are written first.

### What happens to the file

- A project called “Alaska 2026” gets the file Alaska 2026.vpm. A slash or a colon in the name becomes a hyphen in the file name, because a file name cannot hold them
- If the folder already holds a file with that name, nothing is renamed and MediaFlow says so. Choose a different name, or keep the file name
- If the project cannot be saved under the new name, the file goes back to its old name and the project keeps its old name
- The project folder is not renamed and no media is moved, so no clip can go Missing because of a rename

See also: [Saving Projects](#saving-projects), [Moving a Project](#moving-a-project)

## Moving a Project

*Copy the whole project folder to a new place, check the copy, then decide whether to delete the original.*

1. Choose File → Move Project To
2. Select the new parent folder for the project
3. MediaFlow copies the entire project folder to the new location. If a folder with the project’s name is already there, the move stops before copying anything
4. All internal paths (clip URLs, thumbnails, etc.) are updated automatically, and the project is saved in its new folder
5. When you close the progress window, MediaFlow asks whether to delete the original folder

### What is checked before the original can go

Every file is read back after it is copied and compared with its original by checksum, and the copy must account for every file in the original folder, including hidden files. Permissions, Finder tags, and dates travel with each file. If any file fails, the partial copy is removed, the original is left exactly as it was, and the project stays where it is. The summary tells you how many files were copied and verified.

The question about deleting the original is answered some time after the copy was made, so MediaFlow checks again at that moment. It deletes the original only if the copy can still be reached, still holds every file of the original, and is where the open project now lives, and only if the original is still exactly what was copied. Before copying, MediaFlow notes each file’s size and when it was last changed; a file added to the original since, or changed since even under the same name (an editing app saving into the old folder, say), keeps the original, and the message names the file. So does a shortcut in the copy that still points into the original, which would lead nowhere once the original is gone (the copy’s shortcuts into the project point into the copy). So does a file or folder whose name starts with .incoming- or .superseded- followed by an eight-character code of digits and the letters A to F, and a dash: MediaFlow gives those names to its own unfinished copies, so no copy, move or archive ever takes them, and a Move leaves them exactly where they are. Rename it if it holds your work. The project file itself is the exception: the moved project writes its own afresh, and MediaFlow may save the old one while the copy runs. A rewrite to the same size within a second or two of the copy cannot be told apart on some network shares, so close any app using the old folder first. If the drive holding the copy has been unplugged, or you have opened a different project, the original is kept and MediaFlow says why. On a local drive the original goes to the Trash; on a network volume there is no Trash and it is deleted outright.

If the project cannot be saved in its new folder, MediaFlow puts the project back at its original location and tells you. The copy is left in place for you to inspect or delete.

The progress window shows each file being copied and then checked, as the Copying and Checking steps. To save time, the next file is already being copied while the last one is checked; a file counts only once its own check has passed, and if any check fails, everything stops and the partial copy is removed. The bar and the time left move through both, even inside a single large file.

Cancel on the progress window stops the copy at once, even part-way through copying or checking a large file. The original project folder is never touched, so nothing is lost, and the partly copied folder is removed.

> **Tip:** Moving copies every file in the project folder, so check that the new location has enough free space first.

See also: [Saving Projects](#saving-projects), [Deleting a Project](#deleting-a-project)

## Editing on an Editing Drive

*Copy the project you are editing to your fastest drive, keep the library copy safe where it is, and bring the project back when the edit is done.*

A library lives on large storage, which is rarely the fastest you own. An editing drive is a folder on fast storage, such as an SSD volume on your network storage or an external SSD, for the projects you are editing now. Clips there start sooner, scrub more smoothly and drop fewer frames, in MediaFlowSwift and in your editor.

1. Open Settings → Storage and choose the Editing drive folder. You do this once
2. Open the project and choose File → Move to Editing Drive…
3. MediaFlowSwift measures the project and shows how many files and how much will be copied, where to, and how much room is free there. Click Move to Editing Drive

### What Happens

- The whole project folder is copied into the editing drive folder, under its own name. Every file is read back and compared with the original, and the number of files is checked. If anything differs the copy is removed and the project stays where it was: the progress window then says the move didn’t finish, that the copy in your library is unchanged, and that the part-made copy was removed. The progress window shows each file being copied and then checked, with the bar and the time left moving even inside a large file
- A Final Cut Pro library keeps shortcuts of its own inside it: to its cache, which is often on another drive, and to its media, usually in the project’s own folders. Each is copied as a shortcut, never as a copy of what it points to. One that points inside the project follows it: in the copy it points to the same file in the copy, so Final Cut finds its media on the editing drive. One that points anywhere else, even to a drive that is not connected, is copied as it is and does not stop the move. Shortcuts count as nothing in the size shown. MediaFlowSwift looks at each item itself to tell a shortcut from a file, because some network storage lists shortcuts as ordinary files
- The project then points at the copy: its project file, its destination and every clip inside the project folder. Clips kept outside the project folder are not copied and keep pointing where they did
- The copy in your library is kept exactly as it is. Nothing is deleted and nothing in it is changed, including its project file. The project remembers where that copy is
- Cancel stops the copy at once, even part-way through a large file or its check; the partial copy is removed and the project is unchanged. The same happens if the project cannot be saved in the copy
- This Mac also keeps its own note of where the library copy is, so the way back is not lost if the editing drive is unplugged and the project is opened another way

### When It Is Refused

Nothing is copied if no editing drive folder has been chosen or it cannot be reached, if the project is already on the editing drive, if a folder with the project’s name is already there, if one folder is inside the other, or if the editing drive does not have room for the project and a little over. Nor if the project folder cannot be reached, or while an import, organize, archive, proxy run or Library Moved is running: it is refused with a message, not queued. Everything is asked again when you click Move to Editing Drive, in case the sheet has been open a while.

### Returning to the Library

When the edit is finished, open the project from the editing drive and choose File → Return to Library…. MediaFlowSwift looks at both copies and shows what is new or changed on the editing drive, such as exports, renders and notes. Everything is ticked to begin with; untick anything you do not want in the library. It also says how many files are in both places already, and how many are in the library only, which are left as they are.

- Each ticked file is copied to the library, read back and compared. A shortcut, such as one a Final Cut Pro library made, is carried as a shortcut; one that points into the editing copy points to the same file in the library, and must lead to it. A shortcut that is in both places counts as the same when it points to the same place in each. A new file is never written over something already there
- A changed file goes in beside the library’s own version, which is kept and renamed with “(before return)”. Nothing in the library is replaced or deleted
- Every file that is in both places is read in both places and compared. The same name and the same size is not taken as proof
- If anything cannot be carried or proved, the project stays on the editing drive, nothing is removed, and the list says which files. What was already carried stays in the library. A file that turned out to differ from the library’s, although it is the same size, is on the checklist as changed the next time you choose Return to Library, so it can be carried in beside the library’s own
- Close your editor first. A file that is written to while it is being read or copied is not counted, and one that changes after it was checked keeps the editing copy from being removed
- Then the project is saved in the library, pointing at the library’s files. The project file that was in the library is kept beside it as Name.vpm.before-repoint
- Afterwards, choose Remove the editing copy or Keep the editing copy. It is removed only after one more look finds every file in it still exactly as it was when it was carried or checked, apart from those you unticked, and after the shared database, if you use one, has been told the project is home. A file named like MediaFlow’s own unfinished copies (starting .incoming- or .superseded-), or like the notes it keeps on archive drives (.mediaflow-leg.json, .mediaflow-archive), is never carried home, so it keeps the editing copy, and is named. It goes to the Trash where that works; on a network share, which has no Trash, it is deleted. Kept, its project file is renamed Name.vpm.returned, so there are not two of the project to open
- If you untick files and choose to remove the editing copy, those files exist nowhere else. MediaFlowSwift names them and asks first

Proving the library copy means reading it, so expect roughly the time it would take to copy the project from the library. Stop abandons the file being carried or checked at once: a half-carried file is removed and the library’s own version, if it had one, is put back. The project stays on the editing drive and nothing is removed. Once everything is checked and the project is being saved in the library, Stop is no longer offered. If you use a shared database it must be connected.

### In the Projects List, and on Another Mac

- A project that is out shows On editing drive beside its name in the projects list. Hover over it to see where its library copy is
- If the editing drive is not connected when you open such a project, MediaFlowSwift offers to open the library copy instead, to look at. It is as the project was when it went out, and changes made in it are not brought across
- With a shared database, every Mac sees which projects are out. Opening the library copy on another Mac says what it is, and Cleanup and Free Up Space on that Mac leave it alone from then on. A return made on one Mac is picked up by another the next time it opens the project with the database connected, once it can see that the editing copy is gone. Until then that Mac goes on treating the library copy with care, which is the safe mistake
- Opening the library copy never moves the project: the projects list and the database go on pointing at the editing drive, and nothing saved in the library copy is sent to the database
- If you move your library while a project is out, run Library Moved as usual. It points the library copy at the new location like any other project, leaves the projects list and the database pointing at the editing drive, and tells the project where its library copy is now, so Return to Library goes to the right place. Close the library copy first if you have it open. Return to Library itself checks that the folder it is about to use holds this very project, and does nothing if it does not

> **Warning:** While a project is on the editing drive, work in that copy. The library copy is a safety net, not a second place to edit: changes made to it are not brought across. If you open the library copy on this Mac while the project is out, MediaFlowSwift says so.

On a Mac that knows a project is out, Cleanup and Free Up Space never take a file out of its library copy, even where it looks like a spare copy of a clip on the editing drive. The Mac that sent it out knows at once; another Mac knows from the first time it opens the project or its library copy with the shared database connected.

> **Tip:** Copying writes the whole project across. Over a wireless connection that can be slow; a wired connection to the drive is many times faster.

The editing drive is part of the Studio plan; see Plans and Pricing.

See also: [Moving a Project](#moving-a-project), [After Moving Your Library to a New Drive](#after-moving-your-library-to-a-new-drive), [Processing the Proxy Queue](/manual/batch-operations/#processing-the-proxy-queue)

## After Moving Your Library to a New Drive

*When you have copied your whole library to a new drive yourself, Library Moved points every project at the new place. Nothing is copied.*

Use this when the footage is already where you want it: you copied your projects folder to a new drive or network share, keeping the folders inside it as they were, and every project still points at the old one. Move Project is for the other case, where MediaFlowSwift does the copying.

1. Make sure both drives are connected
2. Choose Workflow → Repair → Library Moved…
3. Set Was in to the folder your projects used to be in, and Is now in to the folder that holds the same projects now. MediaFlowSwift suggests the folder your recent projects share, and the destination new projects use
4. Click Find Projects. Nothing is changed yet. Each project file found under the old folder is listed with how many of its clips are at the same place under the new one
5. Click Check and Point. Projects are done one at a time, and you can stop at any point

### What Is Checked

A clip is followed only if a file is at the same place under the new folder and is the same size. If the clip was checksummed when it was organized, the file at the new place is also read in full and compared, because Clear Card later trusts that checksum: same name and same size is not proof. A clip with no recorded checksum is followed on its size. A clip that is missing, a different size, or different inside keeps pointing where it did and is listed.

### What Changes

- The project is saved at the new location, with its proved clips, its destination, and any proxies and thumbnails kept with it pointing there
- If a copy of the project file came across with the folder, MediaFlowSwift works out which of the two holds your latest work. A plain copy is older than the file you have been using, so the work starts from the old one. If you have opened and changed the project at the new location, or part of it was followed before, the work continues from that one, so nothing you did there is lost. If the project has been worked in at the new location and the old file was changed again afterwards, neither holds everything: the list says “changed at both places” and the project is left alone for you to decide. Open the one you want to keep, save it, and run Library Moved again. Otherwise the file that was at the new location is kept beside the new one as Name.vpm.before-repoint, never overwritten, and the new file is written and read back before anything is put in its place
- If a different project is at the same place under the new location, neither is touched, and the list says so. If a project file has been copied in Finder, the two are one project: only one is followed, the one already followed on an earlier run, or else the one your projects list knows
- The project you have open is followed like any other, from what is on screen rather than what was last saved, and stays open at the new location. If the open project was opened from the file that is not being used, it is left alone: close it and run Library Moved again
- A project with no organized clips, such as one you are still planning, is pointed at the new location too; there is nothing to check
- The library copy of a project that is out on an editing drive is pointed at the new location too, but the projects list and the database go on pointing at the editing drive, and the project is told where its library copy is now
- The projects list and the shared database are updated: each clip’s new location goes to the database while it still has the clip at the old one. If another Mac has changed where the database has a clip since, the database keeps that, and Library Moved says for how many clips. If you use a shared database it must be connected before Check and Point will start, because only the database records where an archived project was archived to, and that record is carried into the project before anything is written
- Nothing is copied, moved or deleted on either drive, and the old project file is not touched. Keep the old drive until you are satisfied; MediaFlowSwift does not use it again for a project that was fully followed

### The Old Copy of a Project

Library Moved never changes or removes the project file at the old location, so that file still opens, under the same name. It is an old copy: its clips point at the old location, so they read Not at destination, and work done in it stays in it. When you open one on the Mac that ran Library Moved, MediaFlowSwift says “This is an old copy” and offers to open the current copy instead. It knows from its own note of what Library Moved did. For a library moved before this version, choose Library Moved again with the same two folders and click Find Projects: every project already followed is noted, and nothing is changed. Another Mac has no such note until Library Moved has been opened on it the same way. Separately, if a project file is kept apart from its destination folder and another file for the same project is found in that folder, MediaFlowSwift says “There is another copy”, shows where each is and when each was saved, and does not claim to know which is current. With the shared database connected, the database settles it: if it records the copy you opened as the project, nothing is asked, and if it records the other copy, the question says so. Your answer is a decision about where the project lives, and is recorded at once in this Mac’s projects list and in the shared database. Open the Current Copy (or Open the Other Copy) makes that copy the project’s home, so it is the one that opens next time. Use This Copy and Don’t Ask Again, offered when MediaFlowSwift does not know which copy is current, makes the open copy the home and stops the question for that file. Stay Here only looks: nothing is recorded, this Mac’s projects list points at the other copy, saves made here are not sent to the database (the status line says Not synced), and you are asked again next time.

The same question is asked when the shared database records the project as living in another file that is still there. A project is written to the database only from the file the database says it lives at, unless that file is gone, Library Moved has noted it as the old copy, or you have said otherwise. That is what keeps a stale copy, opened by mistake on any Mac, from overwriting what every Mac sees. When the old drive is retired, the old copies go with it.

If the file the database names is not there at all when you open a project from the projects list — the drive is off, or the project was moved without Library Moved — MediaFlowSwift looks for the project where it may be: where Library Moved noted it went, in its destination folder, and in its library folder if it is out on an editing drive. A file that holds this very project is opened, and the projects list and the database are pointed at it. If none is found, the project opens from the database alone and one notice says so. Your changes are then kept in the shared database, and the project file is left as it is until its drive is back, when saving to it resumes on its own (what only the file keeps is kept), or until you choose Save As to give the project a new home. If you close the project or quit before the drive is back, the file catches up the next time it opens with the shared database connected, from the projects list or by the file itself, at its old place or a new one: the clips this Mac added and the changes it made meanwhile are brought into it and saved, and a notice says how many. A change comes in only where the file still has the clip as it was before, so a newer rating or note in the file is kept. Nothing is taken out of the file, and an old copy never gets them. Clips the shared database has that the file lacks for any other reason (removed by an older version of MediaFlow, say, or added while the file was away before this version) are not brought in by themselves: a notice says how many, and Compare lists them, with any that are the same file as a clip already in the project. Bring Them In adds them; Leave Them Out records them as removed, so the database’s copy matches the file. If some of the clips brought in are the same files as clips the project already had (imported again while the file lacked them, say), the notice says so, and those files appear twice in the project.

When the file the database names is in someone else’s user folder (/Users/…), it is on another Mac, and this Mac will never reach it. The notice says so first, then what happens to your changes and what to do, and names the folder last; it does not offer Save As. Your changes still go to the shared database, but the project file on that Mac does not get them. To work on a project from two Macs, open it on the Mac that has its file and choose File › Move Project To… to put it on a share both Macs reach.

The database’s copy of a project is not all of it. Transcripts, sound levels, GPS, weather and camera details, the checklist, the shot list, the storyboard and retired categories are kept only in the project file. So Save As from a project opened from the database alone asks first, and says what the new file will be without. If you save onto a file of this same project (a copy someone put on the share, say), the two are merged: what the database keeps comes from the database, what only that file keeps is kept, and clips only that file has stay in the project unless they were removed. Saving onto such a file needs the database connected, to know which clips were removed.

### Stopping and Running It Again

Stop ends the reading within a moment and leaves the project being checked exactly as it was; projects already finished stay finished. Running Library Moved again skips projects that already point at the new location and reads only what is left: a project whose folder you copied across later, or the clips of a project that could not be followed the first time. It cannot start while an import, organize, archive, move, relink or Clear Card is running. While it runs, organizing, refiling, Clear Card, Free Up Space, archiving and restoring, Move Project, Change Destination, relinking, workflow steps and installing an update are all refused until it has finished. Importing is not: new clips join the open project and are kept.

The progress bar moves as each clip is finished, not while one is being read. The line under it names the clip being read and its size, so a long clip does not look like a stall.

> **Tip:** Reading every checksummed clip takes as long as copying it would. On a wireless connection expect about a minute for every 4 GB.

See also: [Moving a Project](#moving-a-project), [Change destination folder](/manual/organizing-media/#change-destination-folder), [Clear Card](/manual/organizing-media/#clear-card)

## Deleting a Project

*Take a project off the project list, or also delete its folder and everything in it.*

Choose Projects → Browse Projects… to show the Projects list, right-click a project and choose Delete Project…. You are offered two things:

- Remove from List Only — Takes the entry off the list. Every file stays on disk
- Move Folder to Trash — Takes the entry off the list and deletes the project folder with everything in it

Move Folder to Trash does not act at once. MediaFlow first counts what is in the folder and shows a second confirmation with the number of files and their total size. You must tick “I understand this cannot be undone” before the confirm button works.

After you confirm, a progress window shows the folder being deleted. Clicking its Cancel in the moment before the deleting starts keeps the folder; the project is still taken off the list. Once the deleting has started it runs to the end.

> **Warning:** The project folder usually holds media files as well as the project file. On a disk in this Mac the folder goes to the Trash, where you can still recover it. A network share has no Trash, so the folder is deleted outright and cannot be recovered.

See also: [Moving a Project](#moving-a-project), [Opening an Existing Project](/manual/getting-started/#opening-an-existing-project)

## Moving Clips Between Projects

*Move selected clips out of the open project and into another project.*

1. Select the clips you want to move
2. Choose File → Move Assets to Project, or right-click and choose Move to Project…
3. The project picker shows all available projects
4. Select the target project and click the Move button, which shows how many clips will move
5. MediaFlow adds the clips to the target project and removes them from this one

> **Tip:** Both projects are saved automatically after the transfer. If the database is connected, both are synced.

See also: [Selecting Clips](/manual/managing-assets/#selecting-clips), [Saving Projects](#saving-projects)

## Duplicating a Project

*Duplicate asks whether the new project shares this one’s media files or gets verified copies of its own.*

Duplicate gives you a second project that starts as a copy of this one: the same clips, categories, tags, ratings, notes, shot list and storyboard. It asks one question first, because the answer decides what deleting a clip will mean.

### Share Media

A second project over the same files. It is quick and takes no space, and it suits a second edit of the same shoot. But the files are shared: deleting or moving a clip in either project affects both.

- Both projects are marked, each naming the other. Before anything that deletes or moves media — Free Up Space, deleting the original after Move Project, deleting the project folder, deleting the organized copy after an archive — the confirmation says which project uses the same files
- Shared files are never re-filed. Changing a clip’s category still changes the category, but the file stays where it is, because moving it would make it go missing from the other project. Re-file folders by category does nothing for the same reason, and says why
- Notes, ratings, categories and tags are separate from then on. A change in one project does not appear in the other

### Copy Media Too

Every clip is copied into a folder you choose for the duplicate. Each copy is read back and its SHA-256 compared with the original before the duplicate points at it. It takes as long, and as much space, as the media itself, and you can keep working while it runs.

- A clip that cannot be copied — the file is not reachable, or the copy does not verify — is listed with the reason. It stays shared with the original, and both projects are marked. A copy that fails to verify is removed, not left behind
- You can stop part way. What was copied is kept; the rest stays shared
- The duplicate is saved as its own project file and added to File → Open Recent. The project you were working in stays open

### To duplicate a project

1. Choose File → Duplicate
2. Choose Share Media or Copy Media Too…
3. Choose a name and place for the new project file. MediaFlow suggests the project name followed by “Copy”
4. For Copy Media Too, choose or create the folder the copies go in

With Share Media the duplicate becomes the open project; open the original again with File → Open Recent. Clips in the proxy queue are not queued in the duplicate.

> **Tip:** To stop two projects sharing, duplicate the one you want to keep working in with Copy Media Too. The new project has files of its own and can be re-filed freely.

See also: [Saving Projects](#saving-projects), [Moving a Project](#moving-a-project), [Deleting a Project](#deleting-a-project), [Freeing Up Space](/manual/organizing-media/#freeing-up-space), [What Happens to Files When You Change a Category](/manual/tags-categories/#what-happens-to-files-when-you-change-a-category)

## Archiving a Project to USB

*Copy a finished project folder to a numbered USB drive for long-term storage, with every file checked before the original may go.*

Archive to USB frees your working storage by copying a finished project to a drive you can put on a shelf. It copies the whole project folder to a removable drive, checks the copy, and records where it went in the shared database. Archive volumes are numbered (USB #0001, USB #0002, …) so a project can always be found again. Only the project folder is copied; media organized to a destination outside the project folder is not included.

If any of the project’s clips are outside its folder (organized to a destination outside it, imported but not yet organized, or Missing from a place outside it), the Archive sheet says so before you archive: “3 clips (12.4 GB) are organized outside this project’s folder and will not be on the archive drive.” The archive still goes ahead, and those clips stay where they are. To put them on the drive too, bring them into the project folder first (organize into a destination inside it, or move them there and relink), then archive. A project with nothing outside its folder shows no such line.

### Archiving

1. Plug in the drive and choose Workflow → Archive to USB…; click Scan if it is not listed
2. A drive that has never been used shows “(not initialized)”. Select it, give it an optional label such as “Interviews 2026”, and click Set Up. MediaFlow assigns the next number, one no other Mac sharing your database can take, and writes it to the drive in a hidden marker file. Numbers are permanent
3. Pick a drive. The smallest initialized drive that still fits is marked Recommended; drives that are too small show an orange warning
4. Click Archive. Progress moves through Preparing, Copying and Checking (each file is written, then read back; the bar and the time left move through both, even inside a large file), Flushing, Verifying, Updating Database, and Done
5. Dismiss the progress dialog to reach the completion screen described below

Every file is read back from the drive after it is written and compared with its original by checksum, so a file damaged on the way — even one that kept its size — fails the archive rather than being recorded. The Verifying step then confirms the number of files and their total size. Because each file is read twice, archiving takes longer than a plain copy, most of all on a USB hard drive or with a project made of many small files; to save time, the next file is already being copied while the last one is checked, and a file counts only once its own check has passed. File contents and dates are archived; Finder tags and similar extras are not, because most archive drives are formatted in a way that cannot hold them. On success the project is marked Archived with the volume number, date, and path. Its project file records the archive too, so the project still shows as archived when you open it again. The copy of the project file on the drive is left exactly as it was checked, and it shows as archived too when you open it from the drive, even with no shared database: the drive and the project folder on it say so, and the pipeline strip names the drive. In the project browser the row reads “Archived → USB #0007”.

### With no database yet

Archive to USB needs a database to write down which drive each project is on. On a Mac with none at all, choosing Archive to USB offers Make Database File instead of the Archive sheet: one click makes a database file in MediaFlow’s own folder on this Mac, connects to it and goes on to the Archive sheet. It stays on this Mac, isn’t synced, and Time Machine backs it up; Settings › Storage shows where it is, with Show in Finder. A MediaFlow database already there under that name is used rather than replaced. When a network share is chosen in Settings › Network, it offers Storage Settings… instead, so you can put the database on the share where every Mac can use it.

### Completion screen

After the progress dialog closes, an Archive Complete screen summarizes the result — “Archived 312 files (48.2 GB) to USB #0007 · verified” — and lists the drive (or every drive, for a split archive) with an Eject button for each one that is still connected. “Keep Original” closes the screen and leaves both copies in place. “Delete Original…” removes the original project folder, wherever it is stored. It scans the folder first and then shows the same confirmation used when you delete staged files or delete a project: the file count, the total size, a warning when the folder is on a network volume (where there is no Trash to recover from), and a checkbox you must tick before the delete button enables. Confirming moves the folder to the Trash, or deletes it outright on a network volume.

Before it offers, and again at the moment of deleting, MediaFlow checks the folder against what this archive copied. Just before archiving it notes each file’s size and when it was last changed, and it keeps that note only for the files the archive then copied and checked. The folder is deleted only if every file in it is one of those, unchanged, and every folder in it, empty ones included, is in the archive: a folder that is not keeps the project folder, and is named. A file the archive did not copy (one added since, one added after a split archive was planned, or one moved out of the folder while the archive ran and put back afterwards) or one changed since, even under the same name, keeps the folder; the message names it and offers Archive Again. Finder’s own .DS_Store files are left out. Once the archive is done, MediaFlow writes where the archive is into the project file; that change of its own does not count, but any other change to the project file does, and the delete button waits until that write is over. A file or folder whose name starts with .incoming- or .superseded- followed by an eight-character code of digits and the letters A to F, and a dash is never archived, because MediaFlow gives those names to its own unfinished copies; nor is a .mediaflow-leg.json or .mediaflow-archive file, a note MediaFlow keeps on an archive drive about that drive. Either keeps the folder and is named, and the Archive Complete screen stays open, saying why, so that once you have renamed or removed the file, Delete Original works. An archive that cannot finish says why in the progress window. A split archive that picked up drives written in an earlier session is not deleted from here, because those drives were matched by size only; archive the project again in one go, or delete the folder by hand. A change of the same size within a second or two of the note cannot be told apart on some drives.

Delete Original… is also not offered while any clip of the project was outside its folder when it was archived: the drive does not hold those clips, so it is not the whole project. The Archive Complete screen says so in the same words as the Archive sheet, and what to do: bring those clips into the project folder and archive again first, or keep the project folder and the drive they are on. Deleting the project folder would not delete the clips themselves, which stay at their destination, but the archive could no longer say which drive every clip is on.

> **Warning:** Deleting the original leaves the USB drive as the only copy of the project. Every file on it was compared with its original by checksum, but a single drive can still fail on the shelf; for footage you cannot replace, archive to a second drive as well before you delete. “Delete Original…” is disabled when the database update was queued instead of saved; keep the original until the database has recorded the archive.

### Archiving a project again

If the drive already holds an archive of the project, the new archive is written beside it and checked first. Only when every file has passed is the old archive replaced. If the new archive fails or you cancel, the old one is left exactly as it was.

- MediaFlow will not archive a project folder that holds none of the project’s clips. This matters most after you have deleted the original: the archive on the drive may be the only copy, and archiving an empty folder over it would destroy it
- MediaFlow will not replace an archive with one that holds fewer files. If the project really has shrunk because you removed clips on purpose, archive it to a different drive, or remove the old archive from the drive yourself first
- If the app quits or the drive is unplugged at the moment of replacement, the previous archive is put back the next time you archive or restore that project

### Two projects with the same name

Each project’s folder on a drive has a hidden note naming the project it belongs to, written by the archive. MediaFlow replaces a folder only when that note names the project being archived. When the drive already holds a folder with the project’s name that belongs to another project (two projects called “Trip”, say, one per client), or one with no note (an archive made by an older version, or a folder you put there yourself), that folder is never replaced, merged into or removed. The archive goes beside it as “Trip (2)”, the next free name, and the project records that place. The window says so when it finishes. The name is checked again at the moment the finished copy takes it: if another project’s archive was written there meanwhile (from another window or another Mac), that archive is left exactly as it is, this copy is not kept, and the window says so; archive again and it goes beside it. Once the copy has its name, MediaFlow counts its files again, and records the archive only if every file it copied and checked is still there. If any is missing, that copy is not kept: the project’s earlier archive on the drive, if there was one, is put back as it was. A split archive makes each drive’s folder in one step that fails if the name is taken, and then takes the next free name. Archiving the project again later replaces its own “Trip (2)”, and a restore brings it back as “Trip”. An archive made by an older version has no note, so archiving that project again to the same drive also goes beside it, and the older archive stays until you remove it yourself.

### Splitting Across Drives

If the project is larger than any one drive, click Split Across Drives…. MediaFlow plans which folders go on Drive 1, Drive 2, and so on, hidden files and folders included, then asks for each drive in turn. Empty folders are kept too, such as a category you have not filed into yet or an empty event folder in a Final Cut Pro library, even inside a folder split across drives file by file: each is made on the first drive that holds part of its folder (or, when none does, on the last drive), and noted there, and a restore makes each one again. Every file is read back and checked as it is copied, and the archive fails if a drive then no longer holds every file copied to it, in full. Files an earlier run left on the drive do not make up for one that is missing. If a run is interrupted, opening the sheet again detects the partial copies and the button reads Resume Archive. Only a folder whose note names this project is picked up: another project’s folder with the same name, even with files of the same names and sizes, is never taken for part of this one. The note is written as soon as a drive’s folder is made, so a run stopped part-way through a drive is still picked up from it. Shortcuts inside the project, such as a Final Cut Pro library’s, take no room in the plan and are archived as shortcuts. One that points inside the project points to where its file was archived: on the same drive, or on an earlier one of the set; one whose file goes on a later drive points to the same place on its own drive. After a restore every one of them points into the restored project, and so does one archived by an earlier version of MediaFlow, which still points into the project’s own folder, even when that folder is gone.

If the shared database can’t be written when a split archive finishes, its record waits and is written the next time MediaFlow connects. It goes onto each drive by what the drive is: its number, when it was begun, and its size. It never goes by the database’s own numbering for drives, which can name another drive after another Mac has taken the shared database over. A drive only relabelled since is still the same drive, and one the database doesn’t have yet is added. If a drive of that number in the database is another drive, nothing is written: the record keeps waiting, the archive stays on its drives, and MediaFlow tells you once. A record saved without a note of which drive is which (by an earlier version of MediaFlow, or while the shared database couldn’t be reached for a whole split archive) is checked against the notes the archive left on the drives, so connect them. A project you made and archived on this Mac just before another Mac took the shared database over is sent again the same way: its drives are matched by what they are, or it keeps waiting and you are told.

### When a Drive Number Belongs to Another Drive

MediaFlow may tell you that it couldn’t record an archive, or send a project to the database, because a drive number in the database belongs to a different drive. This happens when two Macs were apart (one working on its own copy of the shared database, after the other took it over, say) and each numbered a new drive the same way: two drives now carry that number, and MediaFlow can’t tell for certain which is which, so it records neither rather than guess. Nothing is lost. The archive stays on its drives, the project stays safe on this Mac in its project file, and MediaFlow keeps what it couldn’t record and tries again each time it connects.

Settings › Storage lists each of them under “Waiting, but can’t be recorded”: which project, which drive number, and why. Nothing happens to one until you choose what to do with it, or until you archive that project again and the new archive is recorded, which takes the place of what waited. Each choice says first what happens to your files, and asks:

- An archive’s record: Let It Go stops keeping it. When the project file still records that very archive, it stops saying the project is archived, so you can archive it again; a project file that records another archive, made since, is left as it is. Archive Again does the same, then opens the project to archive it.
- A project that couldn’t be sent: Send Without Its Archive Record sends the project and its clips as not archived, and the project file stops saying the project is archived. Each clip goes where your project file had it before the archive when its file is there now, and as Missing when it isn’t. Then MediaFlow offers to archive it again.
- Whatever you choose, nothing on any drive is deleted or moved: the archive stays on its drives as it is, and nothing another Mac recorded is changed.

If your library no longer has the project (you deleted it after archiving it), its archive may be the only copy. The choice says so, and names the drive and the project’s folder on it; letting the record go, or sending the project without it, keeps a note of where the archive is under “Released archives” in Settings › Storage. The note stays until you remove it.

When you archive the project again, choose a new drive, which gets a number of its own, or another drive. MediaFlow won’t archive to the drive this Mac numbered the same as another drive in the database, as long as the database gives that number to the other drive, because the archive would be recorded on the other one: it tells you, and lets you choose again. It knows this Mac’s drive by when this Mac set it up and by its size, so another Mac’s drive of that number is never refused.

### Cancelling

Cancel on the progress window stops an archive between files. Files already written to the drive stay there. A split archive that is stopped part way can be picked up later with Resume Archive.

Archiving needs the shared database to record volumes and projects.

See also: [Restoring an Archived Project](#restoring-an-archived-project), [Managing Archive Volumes](#managing-archive-volumes), [Shared Database Overview](/manual/shared-database/#shared-database-overview), [Freeing Up Space](/manual/organizing-media/#freeing-up-space), [Moving a Project](#moving-a-project)

## Restoring an Archived Project

*Bring a project back from its USB archive drive, or drives, with every file checked against the archive.*

To bring an archived project back, open the project browser, right-click the archived project, and choose Restore from Archive…. Restoring needs the shared database, which records which drive holds each project.

1. Plug in the archive drive. It does not have to mount under the same name it had when you archived; MediaFlow looks for the project on every connected archive drive
2. Choose the folder to restore into. The project comes back as a folder inside it, with the project’s own folder name (“Trip”, even when it sits on the drive as “Trip (2)” beside another project’s). If a folder with that name is already there, the restore stops before copying anything; choose a different folder
3. For a project split across drives, MediaFlow asks for each drive in turn by its number, with the label you gave it when you set it up. Connect it and choose Rescan, and MediaFlow merges each into the one folder. A drive already connected is used without asking
4. When it finishes, the project is no longer marked Archived and its clips point at the restored files. An earlier copy of it, such as the original you kept after archiving, is not marked Archived either when you open it with the database connected and this Mac can reach the restored copy: the database records the restored copy as the project

### The right drive, and the right project

Drives often share the name macOS shows (“T7”, “Untitled”), and two projects can share a name. So MediaFlow never goes by either. It uses a drive only when the number it wrote on that drive is the one the project was archived to, and a folder on it only when the folder’s note names this project. When a different drive is connected where the project’s drive was, MediaFlow looks for the right one among the connected drives by its number. If it isn’t connected, a split restore asks for it, and a one-drive restore tells you which drive to connect. Each drive of a split archive is copied once, and the record of which drives hold the project is cleared only after every one of them has been restored.

If the wrong drive is inserted, or the folder on the right drive belongs to another project, the restore stops before anything is changed and says which drive is connected and which one the project needs: “The drive connected as “T7” is archive drive #0001, not archive drive #0002, which holds “Trip”.” The project stays marked Archived and nothing on the drives is touched. Choosing Rescan while a different archive drive is connected, and not the one asked for, stops the restore the same way, naming the drive that is connected. An archive made by an older version has no note in its folder: on a single drive it is used when the project file in it is this project’s; a drive of a split archive is used when it is the drive numbered for it, holds the number of files and the amount recorded for it there (Finder’s own .DS_Store files aside), every video on it is one of this project’s clips, the size its project file records, and at least one of this project’s clips (video, stills or sound) is there. Other files in the project folder, such as notes, a camera’s .LRV and .THM files or an edit project, are fine. Any other folder stops the restore, since another library’s drive can carry the same number.

A restore is checked more strictly than an archive. Every file is read back after it is copied and compared with the file on the drive by checksum. Each drive is also checked against the number of files recorded when the project was archived, so a drive that has lost a file since then stops the restore rather than quietly bringing back less than you archived. (Projects archived before this check was added have no recorded count for a single drive; those are checked file by file only.) If anything fails, the partly restored folder is removed, the project stays marked Archived, and nothing on the drive is changed. The same happens if you click Cancel, which stops at once, even part-way through copying or checking a large file.

If the project lists a clip that was not on any of the drives, the restore still completes and tells you which clips: they are marked Missing, not shown as present. Media the project used from outside its own folder was never copied to the archive, so it is left where it was and shown as In Place if it is still there, or Missing if it is not.

> **Warning:** Do not erase an archive drive just because a restore succeeded. Open the restored project and play a few clips first.

See also: [Archiving a Project to USB](#archiving-a-project-to-usb), [Managing Archive Volumes](#managing-archive-volumes), [Shared Database Overview](/manual/shared-database/#shared-database-overview)

## Managing Archive Volumes

*See every numbered archive drive, what is on it, and whether it is connected.*

File → Manage Archive Volumes lists every registered drive with its number, label, used space, and whether it is currently connected. Select a volume to edit its label, see capacity and creation date, and view the projects archived on it with their sizes. A drive that carries a marker but is missing from the database is registered automatically the next time it appears in the archive sheet.

A drive’s used space counts the clips the shared database records on it. An earlier version of MediaFlow could leave an archived clip recorded on no drive. Each time MediaFlow connects to the shared database, it puts the drive back, taking it only from the archive’s own record: for a project archived to one drive, that drive, and the drive’s used space is worked out again. A repair that never reached the shared database, used space a disconnect kept from being worked out again, or a clip that loses its drive again, is put right at a later connect. A project split across drives is left as it is unless its record names one drive for all of it, since the record doesn’t say which drive holds each clip; the next archive or restore of that project records its clips again. A clip in more than one archived project is left as it is too, and so is one first added to the project after it was archived, since that archive didn’t take it. Each archive with clips left as they are is noted in the log once. A project another Mac has open on a database server is left until a later connect.

> **Tip:** Label each drive on the outside with its USB number so the numbers in the app match the shelf.

See also: [Archiving a Project to USB](#archiving-a-project-to-usb), [Restoring an Archived Project](#restoring-an-archived-project)

<div class="chapter-nav" role="navigation" aria-label="Chapters">
<a rel="prev" href="/manual/publishing/">&larr; Publishing</a>
<a href="/manual/">All chapters</a>
<a rel="next" href="/manual/settings-preferences/">Settings &amp; Preferences &rarr;</a>
</div>
