---
layout: manual
title: "Shared Database — MediaFlowSwift Manual"
description: "The optional shared database lets you search and track clips across projects; it is a database file or a database server."
permalink: /manual/shared-database/
generated: tools/import-guide.sh
---
# Shared Database

## Shared Database Overview

*The optional shared database lets you search and track clips across projects; it is a database file or a database server.*

The shared database keeps a record of every project so you can search, compare and track clips across all of them. It is optional. Import, organize, preview and editing all work without it.

Each project lives in its project file (.vpm), and every project opens and works from it without the database. The database keeps a record of each project and its clips for all your Macs to share, but not the whole project: transcripts, sound levels, what Vision found, GPS, weather, sun position and camera details, the checklist, the shot list, the storyboard, the projects it shares media with and retired categories are kept only in the project file. Neither one simply overrides the other: a save sends the database what changed on this Mac, and opening a project from its file doesn’t copy the database’s clips into it.

### What a Save Sends

A save writes the project file, then sends the database what changed on this Mac since its last save there (or, the first time, since the project was open here with the database connected):

- Each clip you changed on this Mac, whole: its rating, notes, tags, category, camera and the rest, as this copy has them, not only the part you changed. Where it is goes only as described under Where a Clip Is, below
- The clips you added, and the clips you removed, recorded as removed
- What MediaFlow fills in by itself, after a project opens or when it re-checks where files are: a video’s length, picture size, frame rate and format, where its working copy is, and whether its file is at the destination, in the working folder, somewhere else or missing (the Where column). When nothing else about the clip changed here, these go on their own, without the rest of the clip, and not at all once another Mac has moved or relinked that clip. The Where column goes as described under Where a Clip Is
- The project’s name, where its file is and its destination, only when the database doesn’t have the project yet, when they changed on this Mac, when this copy has just become the project’s home, or in the first-time case below

Everything else is left as the database has it, with two small additions: a save that sends a clip also records when the project last changed and on which Mac, and any of the project’s category and camera names the database doesn’t have yet are added to its shared lists. A clip you didn’t change is not sent (except the first time, below), so a copy of the project that hasn’t got another Mac’s latest changes can’t undo a rating, note or tag made there. A clip your copy doesn’t have is not removed: another Mac may have added it, and the next time the project opens from its file with the database connected, you are asked whether to bring it into the file. A clip another Mac removed is not brought back just because your copy still has it. A save doesn’t change whether the database records the project as archived, or to which drive: Archive and Restore write that themselves.

### Where a Clip Is

Where the database has a clip (in your library, organized, archived or missing, the file it names, and on which drive) changes only when you change it on this Mac: by organizing it, relinking it or restoring it, or when MediaFlow’s check of where your files are finds something new. A save, or that check, sends it only while the database still has the clip where this Mac last saw it there, or where the clip was on this Mac before your change, and never over a clip the database records as archived: only Archive and Restore change that. So when another Mac has since archived the clip, restored it (where it was, or into a new folder), relinked it or checked it, its record stands. Your save still sends the rest of the clip, your notes and rating included, and your copy of the project keeps its own. This holds for a save made while the database was out of reach, and for one made the first time, below, too. MediaFlow notes where a clip was when you change its place, whether the database is there or not, so that change is sent once it is. What it can’t know is a change made outside its own saves (the project file changed by an older version or by another app, say): then, if this Mac has never seen the clip in the database, the database keeps its own record of where the clip is. So does it when it no longer has the clip where your change started from: another Mac changed it since. Re-check files can set it right when it can see which is true; see Re-check files.

### When the File and the Database Differ

Opening a project from its file doesn’t copy other Macs’ changes to its clips from the database into it. It does bring in what this Mac kept in the database while the file couldn’t be reached, and it asks about other clips the database has that the file lacks; see After Moving Your Library to a New Drive. The first time this Mac has a project open with this database connected, a clip whose copy here differs from the database’s (another Mac changed it and saved to its own copy of the file, say) keeps the database’s version there, while the project shows this copy’s, until you change that clip on this Mac; then your save sends the whole clip as this copy has it.

There is one exception. If this copy already has changes the database hasn’t had (saved while the database was off or out of reach, or made before it connected), every clip that differs from the database’s is sent as this copy has it instead, even one you didn’t touch (except where it is; see Where a Clip Is), and so are the project’s name, where its file is and its destination, if they differ; see Working Offline below.

After that first time, this Mac sends what differs from what it last sent there, so a clip another Mac has changed since is left alone until you change it here. That is what “changed” means to a save: different from what this Mac last sent. So if you open an older copy of the file on this Mac than the one it last saved (a backup put back in place, say), its older clips count as changes, and a save sends them over what the database has now.

This Mac keeps its record of what it last sent for each database. Connect to another database, copy the records between a database file and a server, or reach the same server under another address or user name, and each project’s next open there is a first time again.

A few things about the project itself do come from the database. When you open a project the database records as archived, it opens archived, with the drive, path and date, even if its file has lost them; once a restore has made another copy the project, an older copy opens as not archived, when the restored copy is within reach. If the database records the project as living in another file that is still there, MediaFlow asks which copy to use before this one sends the database anything (at the latest at your first save with the database connected), and sends nothing from it until you answer; see The Old Copy of a Project in After Moving Your Library to a New Drive. And for a project out on an editing drive, the database says where its library copy is now.

### Two Macs, One Clip

Changes to different clips don’t get in each other’s way, except in the two cases under When the File and the Database Differ where a save sends clips you didn’t touch: the first time a Mac sends a copy that has changes the database hasn’t had, and an older copy of the file opened on a Mac that has saved a newer one. Then the clips that differ are sent as that copy has them, which can undo another Mac’s change to a clip this Mac never touched. Changes to the same clip can get in each other’s way whenever one Mac changes it on a copy of the project that hasn’t got the other Mac’s change to it yet. That Mac’s save sends the whole clip, so the other Mac’s change is replaced in the database, even when the two changed different things: a rating given on one Mac can take out a note written on the other. Where the clip is isn’t replaced that way: the first Mac to change it in the database keeps it, and the other Mac’s change to it is left out (see Where a Clip Is). The other Mac’s project file still has its change.

That happens when the Macs work from different copies of the project file. When both work in the same file, on a share both reach, each save first takes in what the other Mac has saved to the file since this Mac last read or wrote it, so a rating given on one Mac and a note written on the other both land, and when both changed the same thing, the saving Mac’s change is kept and the other version is set aside (see Saving Projects). To work on a project from two Macs, keep one project file on a share both reach: File › Move Project To… puts it there. With a database server, MediaFlow tells you when someone else has the project open; see Who Else Has a Project Open.

### Where a Shared Project Organizes

A project organizes into one destination on every Mac that shares it, and the destination belongs to the Mac that set it: the Mac that started the project, until one changes it. The project file and the database keep, beside the folder’s path, the network share it is on and where on the share, and which Mac set it. So each Mac finds the folder however the share is mounted there, and a Mac that can’t reach it can say whose it is. A project from an earlier version gains the share part the next time a Mac that has the share connected saves it; which Mac set its destination stays unknown, so a folder on a Mac’s own disk is found where its path is, as before.

A destination on one Mac’s own disk can’t be reached from the others. Organize Media on another Mac says so, names the Mac and the folder, and offers Change Project Destination… rather than organizing anywhere else; see When This Mac Can’t Reach the Destination. To organize a shared project from any Mac, keep its destination on a network share every Mac reaches. New Project warns when it isn’t.

### What the Database Adds

- Search All Projects — Find clips in any project from the search field, and copy the ones you want into the open project
- Find Duplicates — List files with identical content across projects
- Storage Dashboard — Capacity history and database-wide counts
- Migrate Projects — Add existing .vpm files to the database
- Browse Projects — Projects → Browse Projects… shows the Projects list in the main window, with every project the database knows

### File or Server

The database is kept in one of two stores. You choose with the Store picker in Settings › Storage.

- Database file — A single file, usually on shared storage. Nothing to install. One Mac at a time: MediaFlow works on a local copy of the file and writes it back when you disconnect or quit. While one Mac is connected, another is told who has the file and can wait or work without it; see One Mac at a Time on a Database File
- Database server — A server that keeps the records itself, so several Macs can work at the same time

### Turning It On

1. Open Settings › Storage
2. For a database file, click New Database File… and choose where it will live: MediaFlow makes it there, turns the database on and connects. To use a database file another Mac already made, click Use an Existing Database File… instead
3. For a server, turn on Enable Shared Database, choose Database server as the Store, fill in Host, Port, Database, User and Password, then click Test Connection

A database file is never replaced. New Database File… never makes a file at the name of the database file in use, even before that file has first been written. If the name you choose for a new one is already taken by a database file, MediaFlow asks whether to use that one or choose another name; a file that isn’t a MediaFlow database is refused, and left as it is. The new file is made on this Mac first and put in place only if nothing is there, so a file that appears in the meantime is never written over. The Save dialog opens beside the usual place on the network share chosen in Settings › Network, or in Documents on this Mac.

### Moving Between a File and a Server

With Database server selected, Settings › Storage offers Copy the Database File to This Server… and Copy This Server to a Database File…. Both copy every record and leave the source unchanged. Switching the Store picker alone does not move any records.

### Working Offline

Changes waiting to be sent are kept for the database they were made for. If you switch to another database file or server meanwhile, they are not sent there: they wait until you connect to their own database again. They go without asking only to that database, reached the same way. When MediaFlow connects to a database that may be theirs, it asks, and names both: one it can’t tell apart from theirs, one with the same identity reached another way, or a different database made since where theirs was (a new file where a deleted one was; if theirs comes back there, they go to it). One with the same identity is the same database moved, renamed or reached by another name or address, or a copy of it: a copy made in the Finder, a backup restored somewhere else or a server restored from a dump carries the same identity. Send Them Here sends them to the database connected now, only while it is still connected; if it has changed since, nothing is sent and MediaFlow asks again when it next connects. Keep Waiting keeps them for their own database; MediaFlow asks again the next time it opens. When the database connected now may be a copy, or is a different one, Return means Keep Waiting. Don’t Send stops keeping them for that database. Nothing else is deleted: the changes stay in your project files, and the next time you save one of those projects (File › Save) with a database connected, what changed is sent. An archive waiting to be recorded stays on its drives and in its project, but isn’t listed in the database. Changes waiting for any database other than the one in use, including one MediaFlow knows is another and so never asks about, are listed in Settings › Storage under Changes waiting for another database, where Don’t Send lets go of them if that database is gone for good. Changes saved while the database is turned off go to the next database you turn on. Switching also waits for your last save to reach the database in use, and for a connect already under way; if either is still going, or the last save couldn’t be written, nothing is changed and MediaFlow tells you why. A project opened from the database alone, without its file, can’t be saved to a file: close it (File › Close Project), choosing Save, then switch.

If the database cannot be reached, keep working. MediaFlow notes which projects changed and syncs them when the connection returns. A database server that goes silent (it restarted, or the network dropped) is noticed once nothing has come back from it for 15 seconds, even in the middle of a save, and at once when the server says it is closing the connection. MediaFlow then connects again and saves once more, or keeps the change to sync later; a slow connection that is still answering is left to finish. The status line then reads “Connected”, or “Connected · offline changes still to sync: …” followed by the names of projects that are waiting. Open a named project to finish its sync.

### Database Menu

- Enable & Connect Database / Reconnect Database — Connect; the title changes once you are connected
- Disable & Disconnect — Close the connection and turn the database features off
- Migrate Projects… — Add existing .vpm files to the database
- Find Duplicates…, Storage Dashboard… — The cross-project tools. Searching every project is in the search field: Edit → Search All Projects… (Cmd+Shift+F)
- Reconnect Network Share — Mount the share chosen in Settings › Network again when it has dropped. It is dimmed while the share is mounted
- Status — The last line of the menu shows the connection and sync state

See also: [Database File or Database Server?](#database-file-or-database-server), [One Mac at a Time on a Database File](#one-mac-at-a-time-on-a-database-file), [Connecting to a Database Server](#connecting-to-a-database-server), [Who Else Has a Project Open](#who-else-has-a-project-open), [Copying Records Between the File and the Server](#copying-records-between-the-file-and-the-server), [Working Offline and Syncing Later](#working-offline-and-syncing-later), [Searching All Projects](#searching-all-projects), [Database Connection Issues](/manual/troubleshooting/#database-connection-issues)

## Who Else Has a Project Open

*With a database server, when someone else has the project you open, MediaFlow tells you once, and the window title shows it while they are in.*

This works with a database server only. With a database file nothing is shown: each Mac works on its own copy of the file until it disconnects, so Macs take turns with it anyway.

While the server is connected, each Mac with a project open lets the others know, about every 45 seconds. When you open a project that someone has open on another Mac, MediaFlow tells you once: “Sam Rivera has this project open on Sam’s MacBook Air.” When several people do, it says “Sam and 2 others have this project open.”

While they are in, the window title says where: “Road Trip · also open on Sam’s MacBook Air”. It appears within a minute of someone opening the project, and goes within a minute of them closing it or quitting.

### What It Means

Changes don’t arrive on the other Mac while you both work. When you both have the same project file open, what one of you saves reaches the other Mac when that Mac next saves (each save first takes in what the other saved to the file) or next opens the project, and changes to different things in the same clip both land. When you work from different copies of the project file, one Mac’s changes don’t reach the other’s file, and changing a clip the other Mac has changed replaces their change in the database; see Two Macs, One Clip in Shared Database Overview. Work on different clips, or share one project file. Taking turns doesn’t help with separate copies: one Mac’s copy doesn’t get the other’s changes, however long it waits. On one shared file you can take turns on the same clip: once the other Mac has saved its change, choose File › Revert to Saved before making yours, and neither is set aside.

### Good to Know

- Your own Mac is never announced, even if it left the project open when it quit unexpectedly and you reopen it after a restart
- A Mac that goes to sleep drops out as it does; one that crashed or lost its connection stops counting after two minutes, by the server’s clock
- The person is the name of the macOS account that is signed in, and the Mac is the name set in System Settings › General › Sharing. Macs are told apart by their hardware, so two Macs with the same network name are still two Macs
- Nothing is shown while the database is off or not connected

See also: [Shared Database Overview](#shared-database-overview), [Connecting to a Database Server](#connecting-to-a-database-server), [Database File or Database Server?](#database-file-or-database-server)

## Searching All Projects

*Search the clips of every project from the search field, and copy the ones you want into the open project. It needs a shared database: a database file on any plan, or a database server with Studio Pro.*

The search field in the toolbar has two scopes. This Project narrows the media list, as Filtering and Searching describes. All Projects searches the clips of every project in the shared database as you type, and lists what it finds in place of the media list.

### What It Needs

Searching every project needs a shared database, which keeps a record of every project’s clips so one search can look through them all. It can be either of these:

- A database file, on this Mac or on a network share. It works with any plan. One Mac uses it at a time
- A database server, so several Macs can use it at the same time. It needs Studio Pro

On a Mac with no database at all and no network share chosen, All Projects offers Make Database File instead: one click makes a database file in MediaFlow’s own folder on this Mac and connects to it. It stays on this Mac, isn’t synced, and Time Machine backs it up; Settings › Storage shows where it is, with Show in Finder. If a MediaFlow database is already there under that name, it is used rather than replaced; if something else is, nothing is made and MediaFlow says so. Once any database is set up, the button is gone.

To set one up, open Settings › Storage; All Projects’ Set Up a Shared Database… button takes you there. For a database file, click New Database File… and choose where it will live, on this Mac or a network share: MediaFlow makes it, turns the database on and connects. Use an Existing Database File… uses one another Mac made. For a server, Database File or Database Server? has the steps.

A project is added to the shared database each time you save it with the database on. To add the projects you already have, choose Database → Migrate Projects… and pick their project files.

### Searching

`Cmd+Shift+F` — Search All Projects

1. Choose Edit → Search All Projects… (Cmd+Shift+F), or click in the search field and choose All Projects under it
2. Type a word or two. A clip is found by its file name (any part of it: 0042 finds GX010042.MP4), its notes, category, camera, scene or tags, or by its project’s name. Capital letters don’t matter, accented ones included (HĀNA finds Hāna), and every word you type must be found
3. Choose one or more clips in the results, then use the buttons above them, or right-click

### The Results

- One row for each clip in each project: a clip in two projects is listed twice, and a clip taken out of a project isn’t listed
- Each row shows the clip, its project, category, camera and tags, and where its file is. A green check means this Mac can reach the file now; an orange triangle means it can’t, and the clip can’t be added until it can
- A clip this project already has reads In this project, and can’t be added again. So does one you added before
- Clips in archived projects are listed too. Their files are usually on an archive drive: until it is connected, Where shows they can’t be reached, and Add to This Project skips them with that reason
- Choose one clip to see a preview and its details beside the list
- Up to 300 clips are listed, file-name matches first, then the newest. Type more words to narrow the search
- Choose This Project, or press Cmd+F, to go back to searching the open project

### Add to This Project

Add to This Project copies each chosen clip’s file into this project, the way an import does: into the working folder (Documents → MediaFlow Projects → Imports), where every copy is read back and compared with its file before the clip is added. Each comes in as a new clip of this project, with its category, camera, scene, shot, take, tags, notes and rating. When the other project’s file can be read, it also brings the clip’s transcript, GPS, weather and camera details. Then it goes through an import’s steps: the project is saved, the database is told, and the new clips are analyzed like any imported clip.

- A clip whose file can’t be reached, or whose copy doesn’t read back the same, is skipped. The summary says how many were added and from which project, and names each clip skipped, with the reason. The same clip chosen in two projects is copied once, from one whose file can be reached
- The other project isn’t changed, and nothing is deleted. Its clip stays where it is, and changing the copy here doesn’t change it there. The copy in the working folder is the new clip’s own original, as the card is for an imported clip: Free Up Space only ever offers that copy, Clear Card never offers the other project’s file for deletion because of it, and opening the other project later never takes the copy for its own
- A progress window shows the copying, and Cancel stops it; the clips copied before then are added. When it is done, Show in Finder in the notice shows the copies
- The working folder’s disk needs room for the clips plus 10 GB, as for an import
- Adding needs a plan that includes importing; searching doesn’t

### Open Its Project and Reveal in Finder

Open Its Project, or a double-click on a result, opens the project the clip is in, with the clip selected. If this project has unsaved changes, you are asked about them first. Reveal in Finder shows the chosen clips’ files in the Finder.

### In the Projects List

The Projects list, there when no project is open or from Projects → Browse Projects…, has the same search field in its toolbar, searching all projects only. While it has words in it, the results take the place of the list, under a line that says so, such as Showing clips in every project that match “beach”; Clear empties the field and brings the list back. Opening, switching or closing a project empties the field too, so a word left behind never hides your projects. Open Its Project (or a double-click) opens a clip’s project. With no project open, New Project with These Clips… makes a new project, exactly as File → New Project does, then adds the chosen clips to it as Add to This Project would; with the list shown over an open project, Add to This Project adds them to that project.

### When All Projects Can’t Search

Until it can search, All Projects says what it needs in place of the results, with a button for the next step. The line under the search field gives the same reason, shorter, and All Projects is dimmed there; Search All Projects (Cmd+Shift+F) still chooses it, and typing shows the whole message. This Project works as always.

- No shared database is set up — Set Up a Shared Database… opens Settings › Storage. Learn More opens this topic
- The shared database is turned off — Turn On & Connect turns it on and connects, as Database → Enable & Connect Database does
- It can’t be reached — the network share holding the file isn’t connected, or the server isn’t answering. Try Again connects once it is back. The last line of the Database menu says what happened
- Another Mac is using the database file — All Projects names that Mac, as the question at connecting does. Wait for, followed by the Mac’s name, connects as soon as that Mac has finished; see One Mac at a Time on a Database File
- Your plan doesn’t include the database server — Choose a Plan… shows the plans, and Storage Settings… opens Settings › Storage to use a database file, which works with any plan
- No other projects are in the shared database yet — said instead of “no results” when nothing else has been added. Migrate Projects… adds the projects you already have

> **Tip:** A project’s clips can be found once it has been saved with the database connected. Projects made before you turned the database on need Database → Migrate Projects.

See also: [Shared Database Overview](#shared-database-overview), [Database File or Database Server?](#database-file-or-database-server), [Migrating Projects to the Database](#migrating-projects-to-the-database), [One Mac at a Time on a Database File](#one-mac-at-a-time-on-a-database-file), [Filtering and Searching](/manual/managing-clips/#filtering-and-searching), [Searching All Projects Finds Nothing](/manual/troubleshooting/#searching-all-projects-finds-nothing), [Importing from a Card, Drive or Folder](/manual/importing-media/#importing-from-a-card-drive-or-folder)

## Finding Duplicate Files

*List clips of the same file across projects and see how much space the extra copies use.*

1. Choose Database → Find Duplicates
2. MediaFlow looks through every project in the database for clips of the same file: the same contents as Organize or Migrate Projects recorded them, or, without that, the same file name, size and capture date. Subclips and clips taken out of their project are not counted
3. Results are grouped. Each group shows how many copies there are, the size of each, and the space you could reclaim
4. Each group lists every copy with its location and project

Click Refresh to scan again after you make changes. Find Duplicates needs a connected database. It only reports; it does not delete anything. To merge two clips of one file in the open project, use Projects → Find Clips Added Twice….

See also: [Shared Database Overview](#shared-database-overview), [Storage Dashboard](#storage-dashboard)

## Migrating Projects to the Database

*Add existing .vpm project files to the shared database so its cross-project tools can see them.*

Migrate Projects reads project files and records them in the shared database. Use it for projects made before you turned the database on. It needs a connected database.

1. Choose Database → Migrate Projects
2. Click Choose Files to pick .vpm files, or Choose Folder to search a folder and everything inside it
3. Use Select All, Deselect All and the Filter files… field to decide which files to include. Add Files…, Add from Folder… and Add More… add to the list
4. Click Migrate Selected
5. A progress view shows each project as it is read
6. When it finishes, Per-Project Details shows how many clips were imported and how many were linked to entries the database already had

> **Tip:** Migration does not change your .vpm files. The database stores a copy of what they say.

To move the database itself between a database file and a database server, see Copying Records Between the File and the Server.

See also: [Shared Database Overview](#shared-database-overview), [Copying Records Between the File and the Server](#copying-records-between-the-file-and-the-server)

## Storage Dashboard

*See how full your shared storage is, how that has changed over time, and what the database holds.*

Choose Database → Storage Dashboard. It needs a connected database.

- Usage gauge — How full the volume was at the last snapshot, with total, used and available space
- Database Overview — Counts of Projects, Categories, Devices and Snapshots
- Capacity Trend — How usage has changed. It needs at least two snapshots
- Categories and Devices — What the database holds across all projects

### Where Snapshots Come From

### When a snapshot is recorded

A snapshot is a reading of how full the volume is. MediaFlow takes one when you open the dashboard, when you click Refresh, and whenever it re-checks a project’s files while the database is connected. The dashboard opens straight away on what it already has and adds the new reading a moment later, so a volume that is asleep or unplugged does not hold it up.

A reading is kept only when it tells you something the last one did not: an hour has passed, or the free space has changed by at least 1 GB (half a percent on a large volume). Two readings are never kept less than a minute apart, however often you click Refresh. A volume that cannot be read records nothing, so a disconnected drive does not show up as a drop to zero.

The bottom of the dashboard says how long ago the volume was last measured. When that is more than a day, it turns orange: the figures describe the volume as it was then. Connect the volume and click Refresh.

The dashboard shows the history of the network share chosen in Settings › Network. With no share chosen, the history is empty.

See also: [Shared Database Overview](#shared-database-overview), [Finding Duplicate Files](#finding-duplicate-files), [Storage Forecast](/manual/storage-maintenance/#storage-forecast), [Choosing and Connecting Your Network Share](/manual/setup-network/#choosing-and-connecting-your-network-share)

## Database File or Database Server?

*The shared database is optional and can live in a database file for one Mac or on a database server for several.*

The shared database tracks clips across all your projects. It powers searching all projects, Find Duplicates, the Storage Dashboard and the project browser. It is optional: every project opens, imports and organizes from its project file without a database. The database is filled from what each Mac saves, and opening a project from its file never copies the database’s clips into it; Shared Database Overview says what a save sends and what it leaves alone.

If you turn it on, you choose where it keeps its records.

- Database file — a single file, usually on a network share. Nothing to install. One Mac at a time: each Mac works on its own copy of the file and writes it back when it disconnects or quits. MediaFlow keeps the turns: a second Mac is told which Mac has the file, and can wait for it or work without it
- Database server — a service that keeps the records itself, so several Macs can work at the same time. It needs network storage or a computer that stays on and can run containers

> **Tip:** Choose Database file if you work on one Mac, or have nothing that stays on to run a server. Choose Database server if two or more Macs use MediaFlow at the same time. You can move between them later, with your records.

### Choosing or switching

1. Open Settings › Storage
2. For a file, click New Database File… to make one where it will live, or Use an Existing Database File… to use one that is there, such as the one another Mac made. Either turns the database on and connects
3. For a server, turn on Enable Shared Database, pick Database server under Store, and fill in Host, Port, Database, User and Password

MediaFlow works on this Mac’s own copy of a database file on a network share, and notes which file that copy belongs to. Whenever the database file changes, however it changed (the two buttons, a typed path, Reset to Default, a copy from the server, the setup wizard or a restored setup), the copy of the previous one is set aside (renamed and kept in MediaFlow’s cache folder, never deleted) and the file you chose is copied fresh, so another database never ends up in it. Changes still waiting to be sent to the previous database stay waiting for it, and go to it when you connect to it again; see Working Offline in Shared Database Overview. A copy made by an earlier version, which noted nothing, is set aside the same way the first time, unless the database itself shows it is the same one.

A working copy is removed only when MediaFlow has read it and its file whole and found them the same: it was sent back in full, and neither has changed since. Dates and sizes alone are never enough. When another Mac has written the file since this Mac last connected, the newer file replaces this Mac’s copy only when the two are the same; otherwise the copy is kept to one side first. A copy that holds only what this Mac last sent, checked the same way, is kept to one side quietly, in case the other Mac sent an older copy over it. One that may hold work the file doesn’t have is set aside the same way, and the work in it that the file lacks is sent again from your project files the next time MediaFlow connects to that file: each clip this Mac changed or added, each clip it removed or added back, and a project’s name, file and destination only if this Mac changed them. A clip goes as your project file has it, except where MediaFlow has it recorded: whether it’s in your library, organized, archived or missing, the file it names, and on which drive. Your project file keeps a clip’s place from before an archive, so another Mac’s archive of that clip stays, whenever it was made. A place this Mac gave the clip itself (by organizing it, say) is sent on its own, only while the database still shows the place it replaced, and never over an archive, as for any save (see Where a Clip Is in Shared Database Overview). Only what this Mac wrote counts: rows the file doesn’t have, or that this Mac changed after the copy was last sent or taken. MediaFlow tells which changes came after by counting how many times the copy was sent or taken, not by the clock, so a clock that was wrong, or was changed, can’t hide a change or make an old one look new. What another Mac wrote is never counted, and Macs are told apart by their hardware, so a Mac renamed since still knows its own work and another Mac with the same network name is never taken for it. Only what this Mac’s saves sent counts. What MediaFlow filled in by itself (a clip’s length or format, or where its working copy is) is sent as your project file has it, those details alone, and only while the clip still names the same file; where a clip’s file was found is sent only while the database still shows the place this Mac’s check replaced, so another Mac’s archive or check since stays. An archive or a restore made on this Mac, which it records straight in the database, is recorded again the way it was first recorded, with its drives and its date, and a restore with where its clips are now (once its project file can be read). It isn’t when another Mac has changed that project since (archived it, restored it, even back to where it was, or saved it), or may have: an earlier version of MediaFlow saved the project last, and this Mac changed it again before archiving it. Nor is it when another Mac has given one of its drives the same number as a drive of its own, or when the project was changed on this Mac while the record waited to be recorded. What else it recorded straight in the database (a cleared card, an editing drive) isn’t sent again this way. Nothing else of those projects is sent, so a clip another Mac changed meanwhile, and you didn’t, keeps that Mac’s change. Changes an earlier version saved under this Mac’s network name alone can’t be told from another Mac’s of the same name, and changes an earlier version saved with only the clock to say when can’t be put in order for certain, so neither is sent. When it found work, found such changes, or couldn’t compare the copy with its file, MediaFlow tells you once where the copy is kept. A file that is only newer sends nothing back over it: a project another Mac deleted is never put back, a clip another Mac added back is never removed again, and a removal this Mac made that never reached the file is sent. A change MediaFlow couldn’t find stays out of the database until you change that clip again; your project files hold every change to your clips. Set-aside copies are kept for 30 days, then moved to the Trash, never deleted outright. A copy you renamed or duplicated yourself is left alone.

Switching the Store reconnects at once; you do not need to relaunch. Switching does not move any records. The other store keeps what it had, and its settings are remembered, so switching back finds it again.

### Taking your records with you

With Database server selected, two buttons copy every record in either direction: Copy the Database File to This Server… and Copy This Server to a Database File…. Neither changes its source.

See also: [Shared Database Overview](#shared-database-overview), [One Mac at a Time on a Database File](#one-mac-at-a-time-on-a-database-file), [Connecting to a Database Server](#connecting-to-a-database-server), [Copying Records Between the File and the Server](#copying-records-between-the-file-and-the-server), [Working Offline and Syncing Later](#working-offline-and-syncing-later), [Setting Up MediaFlow](/manual/setup-network/#setting-up-mediaflow)

## Connecting to a Database Server

*Enter the server’s host, port, database, user and password in Settings › Storage, or use the guide to set one up.*

A database server lets several Macs use the shared database at the same time. The server keeps the records itself; nothing on this Mac is copied to or from it. The server must be PostgreSQL, free database software: one you already run will do, and Set Up a Server… starts one for you. If you already have one, fill in the fields. If you do not, Set Up a Server… walks you through making one in about ten minutes. The button is in Settings › Storage under either store, so you can prepare a server before switching to it. MediaFlow does not install anything on the server itself: the guide saves one file, docker-compose.yml, which the server’s container app runs. The guide shows the port the server will answer on, which is the one in the Port field, and offers to put it back to 5432 if it is something else; use that same port when you connect.

> **Warning:** While Encryption is Off, the connection to the server is not encrypted: anyone on the same network can read the records it carries. Settings › Storage says “Not encrypted” beside the connection status. Turn Encryption on, or use Off only on a home or studio network you trust, and never forward the server’s port to the internet.

### The fields

- Host — the server’s name or address. When a network share is chosen in Settings › Network, a button beside the field offers its server. A name ending in .local keeps working when the address changes
- Port — 5432 unless you changed it
- Database and User — the names the setup guide creates are filled in for you. Change them to match an existing server
- Password — kept in your Keychain, never in preferences and never in the saved setup. What you type is saved when you press Return in the field, click Test Connection, click Set Up a Server… or close Settings, and only if it differs from what the field showed; typing and then deleting it changes nothing. Leaving it blank keeps the saved password: to remove it, click Remove Saved Password… beside the field, which asks first. If macOS would not let MediaFlow read the saved password, the field is blank, reads “Saved, but withheld by macOS” and says so under it, in Settings › Storage and in the setup wizard alike; the note goes once macOS lets MediaFlow read it. If macOS will not let MediaFlow save a password you typed, the form says so and the one saved before stays in use
- Encryption — “Encrypted” encrypts the connection, so no one on the network can read it, but does not check the server’s certificate; a server made with Set Up a Server… works with this. “Encrypted and verified” also checks that the server is the one named in Host, with a certificate for that name this Mac trusts: the safest choice, for a server whose certificate comes from a certificate authority or from your own one installed on this Mac. “Off” is what earlier versions did. With either of the first two, a server that offers no encryption is refused, never used unencrypted. Choose the same on every Mac

Changes take effect without restarting: when Test Connection succeeds, and when you close Settings, MediaFlow connects to the server the fields now describe. When a message says the name was found, the Host is right and the Port is what to check: it must be the number the server was started with, the one before the colon on the ports line of docker-compose.yml.

The fields save as you type. On every other Mac, enter the same host, port, password and Encryption; there is nothing to copy.

### Every Mac on the same version

Update MediaFlowSwift on every Mac that uses the server. Older versions saved whole copies of a project and could undo another Mac’s work, so once an up-to-date Mac has connected, the server refuses saves from those older versions. A Mac still on an older version can read the shared database, and its saves fail with “Update MediaFlowSwift on this Mac to keep working with the shared database”. Its changes stay in its project files and reach the server once it is updated. A later version that needs the same may ask every Mac to update again.

A database file can’t tell which version is writing to it, so there the refusal is up to each Mac: a Mac on this version or later only reads a file a newer version has set up, but an older version still writes to the file as it always did. Update every Mac that uses the file too.

The other way round, when a server or file is set up for a newer version (one that changes the rules for writing to it), a Mac on this version or later connects to it only to read. Every project opens read-only there, with a strip saying so, until that Mac is updated too. A newer version that only adds to the database leaves older Macs writing as before. See A Project Saved by a Newer Version.

> **Tip:** A tool other than MediaFlowSwift that changes projects or clips on the server, such as psql, must first run SET mediaflow.protocol = '2'; without it the server refuses the change.

### Test Connection

A successful test says Connected, with the server’s version number, such as 16.4. A failed test says why:

- “…could not be found on the network” — the Host name is wrong. MediaFlow tries the name as typed and then with .local on the end, which is what most server names on a home network need; when that works, Test Connection corrects the Host field and says so. Otherwise use the server’s address
- “MediaFlow could not read the saved password from your Keychain” — the password is saved, but macOS would not hand it to this copy without asking you. macOS asks once when the app’s signature changes, as it did at 1.10.19, when MediaFlowSwift took its Apple Developer ID; every update since carries the same signature, so macOS knows the app and does not ask again. macOS cannot ask while the app is still opening, so MediaFlow tries again by itself a moment after its window appears: enter your Mac password when macOS asks, and click Always Allow. If you dismissed the question, choose Database → Enable & Connect Database (Reconnect Database while it is connected) to be asked again
- “Nothing is listening at…” — the server is not running, or the port is wrong
- “…does not offer encryption” — Encryption is on, and the server was not started with encryption. For a server made with Set Up a Server…, click Save Updated Server File… and redeploy the server from that file. Or set Encryption to Off, on a network you trust
- “…could not verify its certificate” — Encryption is Encrypted and verified, and the server’s certificate is not for the name in Host, or not from an authority this Mac trusts. A server made with Set Up a Server… has a certificate of its own: choose Encrypted for it
- “macOS is keeping MediaFlowSwift off your local network…” — macOS has told MediaFlowSwift so. It often follows an update. Click Open Local Network Settings…, turn MediaFlowswift off and on again, and MediaFlowSwift connects by itself within a few seconds
- “…did not answer… macOS may be keeping MediaFlow off your local network” — macOS asks your leave before an app may reach other devices on your network, and refuses silently until you give it. Open System Settings › Privacy & Security › Local Network and turn MediaFlowswift on; if it is already on, turn it off and on again
- “…could not be found on the network” — the host name is wrong. Try the address instead
- “…did not answer within 10 seconds” — a firewall is blocking the port, or the server does not allow connections from this Mac
- “…is not reachable from this network” — this Mac is on a different network from the server
- “…closed the connection” — the server is configured to refuse this Mac
- “The server asked for the password in plain text…” or “… as an MD5 hash…” — MediaFlow did not send the password: a server that asks for it this way could be something else on the network pretending to be yours. If it is your own server, set it to sign in with SCRAM (scram-sha-256 in place of password or md5 in its pg_hba.conf) and set the user’s password again. A server made with Set Up a Server… already signs in this way
- A message from the server itself, such as “password authentication failed” — the password, database or user is not what the server expects

### Set Up a Server…

1. Click Save docker-compose.yml…. This file describes the server to a container app. It contains the password, so it is saved readable only by you. Keep it private
2. Put the file in a folder of its own on the network storage or computer that will run the server. The database keeps its data in a folder beside it, and its nightly backups in a backups folder. Make the backups folder yourself, beside the file, with the account you’ll use to copy the backups (for example from your Mac over the share, signed in as that account): each backup belongs to whoever owns the folder, and only that account can open it
3. Start it: in your network storage’s container app, create a project from that folder. On a computer with Docker, run docker compose up -d in that folder. The first start takes a minute or two
4. Back in Settings, set Host and click Test Connection

### Which password goes in the file

- With no password stored yet, MediaFlow makes a new one, writes it into the file and puts it in your Keychain and the Password field
- With a password stored that macOS will not let MediaFlow read, the guide asks the same question as below. Use the password already in my Keychain then stops and says so, rather than writing a new password over the one your server may already use: choose Database → Enable & Connect Database (Reconnect Database while it is connected), click Always Allow when macOS asks, and save again
- The password goes into your Keychain before the file is written. If macOS will not let MediaFlow save it there, the file is not saved and the guide says so, since a server started from it would have a password this Mac does not know
- Use the password already in my Keychain — for saving the file again for the server you already use. A server reads its password only the first time it starts, so the file must keep the same one
- Make a new password — for a server that has never been started. It replaces the one in your Keychain, so MediaFlow can no longer sign in to the old server

### Nightly backups

A server set up from the file this version saves backs itself up. Beside the database, the file runs a second, small service called mediaflow-backup. Every night at 3 in the morning, on the clock of the Mac that saved the file, it saves a copy of the whole database in a folder called backups, next to the server’s data folder, and keeps the newest 14: two weeks to go back to. It makes the first copy as soon as it starts (on a new server, within ten minutes of MediaFlow first connecting to it), and if the server was off at 3 in the morning, it makes the missed one when the server starts again. A copy is kept only when every part of it reads back; when one fails, the older copies stay and it tries again ten minutes later. It skips a night rather than fill the disk, and the Macs keep working while it runs. Once there is a backup, it makes none while the database holds no projects, clips, drives or published videos, so an emptied database can’t push the good backups out.

Settings › Storage shows when the server last backed itself up, under the connection fields. When there is no backup yet, or none in the last seven days, it says so in orange, with what to do.

> **Tip:** A server of your own, backed up your own way? Have your backup job note each backup and Settings shows it: INSERT INTO mediaflow_meta (key, value) VALUES ('last_backup_at', '2026-09-30T03:00:00Z') ON CONFLICT (key) DO UPDATE SET value = EXCLUDED.value, with the time of the backup in universal time.

> **Warning:** The backups hold every project’s records, so keep them, and any copy of them, somewhere private. The backups folder is on the same disk as the database: it protects you from mistakes and damaged records, not from that disk failing. Include it in your storage’s own backup, or copy it to another drive now and then.

### Adding backups to a server you already have

1. In Settings › Storage, with Database server chosen, click Save Updated Server File…. It writes docker-compose.yml with the backup service added and the password already in your Keychain, which is the one your server uses. If no password is saved on this Mac, or macOS won’t let MediaFlow read it, it says so and saves nothing
2. In the server’s folder, rename the old docker-compose.yml to docker-compose.yml.old, and put the new file beside it. Don’t name the old one compose.yml or compose.yaml: the container app would read that one instead. Before you do, check that the ports and volumes lines of the new mediaflow-db service match the old file’s. If you changed the old file by hand, for a different port or data folder, make the same change in the new one: a server started with a different data folder starts empty
3. In the same folder, beside data, make a folder called backups yourself, with the account you’ll use to copy the backups: for example from your Mac over the share, signed in as that account. Each backup belongs to whoever owns the folder, and only that account can open it. If the server makes the folder, only its administrator can open them
4. Redeploy the server: in your storage’s container app, open the project and redeploy or update it; on a computer with Docker, run docker compose up -d in that folder. If the container app keeps its own copy of the file, paste the new file into the project’s editor first. The database keeps its data and its password; only the backup service is new
5. Check that the project now shows two containers: mediaflow-db, running for as long as before, and mediaflow-backup, whose log says “Saved mediaflow-backup-…”. Back in Settings › Storage, the backup shows within a few minutes

### Restoring a backup

A restore puts the backup into a new database beside the current one, then swaps their names. Nothing is overwritten: the current database is kept under another name until you decide you don’t need it, and no Mac’s settings change. You type five commands in the backup service’s terminal, which already knows the server’s password. Where they say mediaflow, use the Database name in Settings › Storage if yours is different.

1. Quit MediaFlow on every Mac that uses the server
2. In the backups folder, find the backup to go back to. Each is named for the day and time it was made, such as mediaflow-backup-2026-09-30-030004.dump
3. Open a terminal in the mediaflow-backup container: in your container app, select it and choose Terminal (some call it Console or Exec). Or, from a shell on the server, type docker exec -it mediaflow-backup bash
4. Type createdb mediaflow_restored and press Return. This makes a new, empty database
5. Type pg_restore --no-owner --single-transaction -d mediaflow_restored /backups/mediaflow-backup-2026-09-30-030004.dump, with the name of your backup in place of the one shown, and press Return. It brings back everything or, if anything goes wrong, nothing. If it ends with an error, stop here: your current database has not been touched
6. Type psql -d mediaflow_restored -c 'SELECT mediaflow_after_restore()' and press Return. This marks the restored database as restored, so every Mac reads it again from the start the next time it connects. If it says the function does not exist, the backup was made by an earlier version of MediaFlow: carry on with the next step
7. Type psql -d postgres -c 'ALTER DATABASE "mediaflow" RENAME TO "mediaflow_before_restore"' and press Return. This puts the current database aside. If it ends with an error, don’t type the next step: see below
8. Type psql -d postgres -c 'ALTER DATABASE "mediaflow_restored" RENAME TO "mediaflow"' and press Return. The restored database now has the usual name
9. Open MediaFlow. The shared database is back as it was when the backup was made: see After a restore, below

- “…is being accessed by other users” at step 7 — a Mac still has MediaFlow open, or went to sleep with it open, which keeps its place for about two hours, or a backup is being made. Quit MediaFlow wherever you can, then type psql -d postgres -c "SELECT pg_terminate_backend(pid) FROM pg_stat_activity WHERE datname = 'mediaflow' AND pid &lt;> pg_backend_pid()" and press Return, which signs every Mac out of that database, and type step 7 again
- If step 7 ends with an error, don’t type step 8. Nothing has changed yet: the restored copy waits under its own name until step 7 works
- “…already exists” at step 4 or step 7 — an earlier restore left that name behind. At step 4, add _2 to mediaflow_restored there and in steps 5, 6 and 8. At step 7, add _2 to mediaflow_before_restore. At step 8 the message means step 7 didn’t work: go back to it

### After a restore

A restore doesn’t change your projects’ own files. Each project keeps the clips its file holds, work done after the backup included, and the database takes in a clip’s later changes the next time that clip is changed and saved on a Mac. But when a project opens, MediaFlow takes the database’s word on where the project lives and whether it is archived, so a project moved or brought back from its archive since the backup shows what the database remembers:

- Moved since the backup, with the earlier copy still there — opening it asks “There is another copy of…”, naming where it lived at the backup. Choose the copy you’ve been working on: if it is the one you opened, click Use This Copy and Don’t Ask Again; if it is the other one, click Open the Other Copy
- Brought back from its archive drive since the backup — it opens as archived again, and its file says so from its next save. To bring it back again, plug in the archive drive, open the project browser, right-click the project and choose Restore from Archive…, into a new folder. Then open the copy you’ve been working on and, when MediaFlow asks which copy is current, click Use This Copy and Don’t Ask Again. Or restore a backup made after you brought it back

Until the next night’s backup, Settings › Storage shows the last backup noted in the one you restored, which is earlier.

If the server itself was lost, keep the backups folder you saved somewhere safe, and put a copy of it, not the folder itself, beside the new server’s file. Set up the new server from the server file, choosing Use the password already in my Keychain, and start it. Then follow the same steps before you use MediaFlow with it: the new server’s empty database is the one put aside. Keep the original folder until the restore is done.

The database server is part of Studio Pro; without it the app keeps working with a database file. See Plans and Pricing.

See also: [Database File or Database Server?](#database-file-or-database-server), [Copying Records Between the File and the Server](#copying-records-between-the-file-and-the-server), [Choosing and Connecting Your Network Share](/manual/setup-network/#choosing-and-connecting-your-network-share), [Database Connection Issues](/manual/troubleshooting/#database-connection-issues)

## Copying Records Between the File and the Server

*Copy every shared-database record from the database file to the database server or back; the source is never changed.*

When you move from a database file to a database server, or want a file copy of the server, MediaFlow copies every record for you. The copy reads the source and never changes or removes anything in it. Both buttons are in Settings › Storage, with Database server selected as the Store.

- Copy the Database File to This Server… — brings the records in your database file into the server. Use it when you first set up a server
- Copy This Server to a Database File… — writes the server’s records into a new file that you name. If you pick an existing file, it is replaced. Use it as a backup, or to work without the server

### If the destination already has records

The copy stops and tells you how many projects and clips are there. Click Replace to replace everything at the destination with the records being copied, or Cancel to leave it alone.

> **Warning:** Replace removes every record at the destination before copying. The source is not changed either way.

### Reading the progress list

Each table shows how many rows were copied. Two counts may appear beside it:

- Adjusted — a value was changed to fit the destination. Examples: a decimal rounded into a whole-number column, an unreadable number blanked, a reference to a category or volume that no longer exists cleared
- Left behind — a row the destination could not take. Example: a project membership that names a clip deleted long ago. Click the count to read the reason for each row

A file that has been in use for years usually holds a little of both. The search index is not copied; it is rebuilt at the destination from the copied rows.

### When it finishes

Click Switch to It Now to make the copy your store and reconnect, or Close to stay where you are.

### Cancelling or failing part-way

Click Cancel at any time. Tables already finished stay at the destination; the table in progress is undone. The destination is then incomplete, so run the copy again and choose Replace. If the two databases are at different versions, update MediaFlow on every Mac and try again.

See also: [Database File or Database Server?](#database-file-or-database-server), [Connecting to a Database Server](#connecting-to-a-database-server), [Shared Database Overview](#shared-database-overview), [Migrating Projects to the Database](#migrating-projects-to-the-database)

## Working Offline and Syncing Later

*Changes you make while the shared database is unreachable are remembered and synced when it reconnects.*

You can keep working when the shared database is out of reach, for example when the network share is offline or you are away from your network. Your edits are saved in the project file as usual. MediaFlow remembers which projects changed and syncs them to the database when it reconnects. You do not need to do anything.

### What happens on reconnect

The status line reads “Syncing offline changes…” while every project that changed is synced, not only the one that is open.

- The open project syncs, including clips you removed from it
- Every other project is read from its project file. Its clips are added and updated in the database, and the clips you removed from it on this Mac are recorded as removed. A clip the file doesn’t have is never taken out of the project: it may have been added on another Mac
- A project is left alone if the database already holds a newer version, changed on another Mac

### Projects that wait

A project stays on the waiting list, and is named in the status line, until you open it. This happens when:

- The database holds a newer version. Opening the project syncs it
- Its project file cannot be reached or read, for example because the drive it is on is not connected
- The database did not accept the sync

### The status line

The status line is at the bottom of the Database menu and in Settings › Storage. After a reconnect it takes one of two forms:

- Connected — everything is synced
- Connected · offline changes still to sync: followed by up to two project names and “and n more” — those projects are waiting. Open each one to finish

> **Tip:** With a database file, one Mac uses the database at a time; another is told which Mac has it, and can wait or work without it. With a database server, several Macs can reconnect and sync at once.

See also: [Shared Database Overview](#shared-database-overview), [Database File or Database Server?](#database-file-or-database-server), [One Mac at a Time on a Database File](#one-mac-at-a-time-on-a-database-file), [Database Connection Issues](/manual/troubleshooting/#database-connection-issues), [Saving Projects](/manual/project-management/#saving-projects)

## One Mac at a Time on a Database File

*A database file is used by one Mac at a time. Another Mac is told which Mac has it, and can wait or work without it.*

With a database file, each Mac works on its own copy of the file and writes it back when it disconnects or quits. Two Macs using it at once would erase each other’s work, across every project. So MediaFlow lets one Mac use the file at a time. A database server has no such limit.

### How the turns are kept

A Mac that connects leaves a small file beside the database, mediaflow.session.lock. It names the person and the Mac and says since when. The Mac brings it up to date every minute while it is connected. When it disconnects, goes to sleep or quits, it writes its copy of the database back and then removes the file. Before writing it back, every change still waiting beside the copy is merged into it; if that can’t be done, the copy is not written back. If writing the copy back fails or is refused, the file is removed all the same, and the projects this Mac saved during its turn are noted and synced again the next time it connects. Database → Reconnect Database does the same as disconnecting and connecting: it writes the copy back first.

### When another Mac has the database

A second Mac that tries to connect copies nothing. It says who has the file, for example “Sam’s MacBook Pro (Sam Rivera) is using the shared database, since 10:42.” There are two choices:

- Wait — MediaFlow looks again every ten seconds and connects as soon as the other Mac disconnects or quits. The progress panel shows Waiting for the shared database, with the time it last looked. Click Stop Waiting to give up and work without it
- Work Without the Database — Keep working. Projects open and save as usual, and MediaFlow notes which ones changed and syncs them when this Mac connects, as in Working Offline and Syncing Later. The status line reads Working without the database

While you work without it, MediaFlow does not ask again each time it reconnects by itself, for example after the network share comes back. To ask again, click the database status in the toolbar or choose Database → Enable & Connect Database.

### A Mac that stopped answering

If a Mac crashes, or loses its connection to the file without disconnecting, its file stops being brought up to date. Once another Mac has seen it stand still for five minutes, counted on that Mac’s own clock so that two Macs set to slightly different times cannot mislead each other, it takes the database over and says whose it was: “Sam’s MacBook Pro (Sam Rivera) had the shared database but stopped checking in at 10:42, so this Mac has taken it over.” A file that stopped more than a quarter of an hour ago is taken over at once. The takeover is written to the log (Help → Show Log). Anything that Mac had not written back is not in the database; its project files still have it. When that Mac next connects, its own copy of the database, which may hold that work, is set aside rather than replaced, and it says so when the copy holds work the file lacks (see Database File or Database Server?). The same Mac, opened again after a crash, takes its own turn back at once.

If a Mac finds that another took the database over while it was away, it stops using the database without writing its copy over the other Mac’s, and says so. That includes finding its file gone, because the other Mac has already finished and removed its own; the message then names Another Mac. Every project it saved during its turn, and the open one, syncs again when it next connects.

Every time a Mac writes its copy back, it leaves its mark in the database file. A Mac never writes its copy over a file that another Mac has written back since it last took it, however recent its own changes look: the copy is kept, and the projects it saved are noted and synced again from your project files. When it next connects, it takes the newer file, and its own copy is set aside, as above. Every Mac needs this version or later for that check: an older one leaves no mark of its own.

### When the file beside the database can’t be written

If MediaFlow can’t leave its file beside the database, for example because the network share isn’t connected yet or doesn’t let this Mac write to it, this Mac doesn’t use the shared file: without that file, two Macs could overwrite each other’s work. Instead it opens its own copy of the database, the one from its last turn, only to look at. All Projects and search work from that copy, and the status line reads Database file offline (viewing this Mac’s copy). Nothing is written into that copy and it is never written back to the shared file. Your projects open and save to their project files as usual, and the changes you save are noted and go to the database the next time this Mac connects with its turn, as in Working Offline and Syncing Later. When the network share comes back, MediaFlow connects by itself. If this Mac has no copy yet, the status line reads Database file offline. MediaFlow says so in a message only when the share is connected and the file still can’t be written, so that you can check that this Mac may write to the share.

> **Tip:** Every Mac needs this version or later: an older one does not look for the file.

See also: [Database File or Database Server?](#database-file-or-database-server), [Working Offline and Syncing Later](#working-offline-and-syncing-later), [Shared Database Overview](#shared-database-overview), [Database Connection Issues](/manual/troubleshooting/#database-connection-issues)

<div class="chapter-nav" role="navigation" aria-label="Chapters">
<a rel="prev" href="/manual/tags-categories/">&larr; Tags &amp; Categories</a>
<a href="/manual/">All chapters</a>
<a rel="next" href="/manual/storage-maintenance/">Storage Maintenance &rarr;</a>
</div>
