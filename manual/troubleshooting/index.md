---
layout: manual
title: "Troubleshooting — MediaFlowSwift Manual"
description: "A red X in the Where column means MediaFlow cannot find the file; usually a drive or share is not mounted, or the file moved."
permalink: /manual/troubleshooting/
generated: tools/import-guide.sh
---
# Troubleshooting

## Clips Showing as Missing

*A red X in the Where column means MediaFlow cannot find the file; usually a drive or share is not mounted, or the file moved.*

Symptom: a clip shows a red X and the word Missing in the Where column. MediaFlow cannot find the file at any path it has recorded for it.

### Causes

- The drive or network share that holds the file is not mounted
- The file was moved or renamed outside MediaFlow
- The share or drive mounted under a different name than before

### Fixes

1. Mount the drive or share. For the network share you chose in Settings › Network, click Connect now there, or choose Database → Reconnect Network Share. Then choose Workflow → Repair → Re-check files
2. If the files moved, choose Workflow → Repair → Relink Missing Media and pick the folder they are in now
3. If the whole destination moved, choose Workflow → Repair → Change destination folder
4. For one file, right-click the clip, choose Relink… and pick the file

### On another Mac and Not on this Mac are not Missing

A clip imported on another Mac that shares this project usually sits in that person’s home folder. When its file is in another account’s home folder, it reads On another Mac on this Mac, in grey, not Missing. It is not in the Missing group or the missing counts, and Relink Missing Media leaves it alone. Work with it on the Mac it was imported on. To use a copy you have on this Mac instead, right-click the clip, choose Relink… and pick the file.

A clip the other Mac keeps anywhere else, such as in the Shared folder, on its own drive, or in a home folder with the same name as yours, reads Not on this Mac instead, in grey, for as long as this Mac has never had it. Each Mac remembers the clips it has imported, organized or relinked, and the files Re-check files has found on it; only those can read Missing on it. Everything above holds for it too: it is not counted as missing, and Relink… can point it at a copy on this Mac. If you use only this Mac, a clip that reads Not on this Mac may have been moved or deleted: use Relink… to find it.

The first time a Mac checks a project file after the update, or another copy of it such as one made with Save As, it checks it as before, so a file that went missing before the update reads Missing. A clip from the other Mac may read Missing once, until that Mac checks it again.

See also: [Relinking Missing Media](/manual/storage-maintenance/#relinking-missing-media), [Change destination folder](/manual/organizing-media/#change-destination-folder), [Understanding the Where Column](#understanding-the-where-column), [Choosing and Connecting Your Network Share](/manual/setup-network/#choosing-and-connecting-your-network-share)

## A Project Saved by a Newer Version

*When a newer MediaFlowSwift saved a project, or its shared database is set up for a newer version, an older one opens it to look at and changes nothing. Update this Mac to work on it again.*

Symptom: a strip across the top of the window says “This project was saved by a newer MediaFlowSwift. Update MediaFlowSwift on this Mac to change it.” When the shared database is the reason, it names the project’s server or its database instead.

### Why nothing can be changed

Each version of MediaFlowSwift knows what it keeps in a project. A newer version may keep things this one has never heard of. If this Mac saved the project, what it doesn’t know would be missing from what it wrote, and work done on the other Mac would be lost. So this Mac only reads the project, and never writes it back: everything the newer version saved stays exactly as it was.

### What still works

- Opening the project and looking at every clip, its details, the shot list and the storyboard
- Playing clips, searching and filtering
- Things that make new files of their own, such as reports and Extract Thumbnail

### What waits for the update

- Saving, and every change to clips, categories, cameras, the shot list and the storyboard. The inspector’s Edit and Scene Log tabs are greyed out
- Organize, Refile, Free Up Space, Clear Card, Archive, Move, Rename, Relink, Import and the editing drive
- The checks MediaFlowSwift runs by itself after opening a project, such as finding clip lengths and looking for files
- Prepare for YouTube shows the project’s draft and what was uploaded, but saves nothing and uploads nothing

Each of these says why it didn’t run, and nothing is changed.

### How to fix it

1. Click Check for Updates… in the strip, or choose Check for Updates… in the app menu
2. Install the update
3. Open the project again

### When the shared database is set up for a newer version

Most updates add to the shared database without changing how it is written, and Macs on the older version go on working with it as before. Now and then a version changes the rules for writing to it, and sets the database up so that only that version or later may write. A Mac still on an older version then connects to it only to read, whether it is on a server or in a database file: every project opens this way, and New Project waits too. Changes made on this Mac before it connected are kept in its project files, and reach the database once this Mac is updated. A database file this Mac only reads is never copied back to the share.

Nothing you had not saved is lost when a project turns read-only. If another Mac saved it with a newer version, or the shared database turned out to be set up for a newer version, while you had changes that weren’t saved yet, they are kept in the project’s Copies Kept Aside folder, and MediaFlowSwift says so. A project that was never saved (one an import made) stays open: choose File › Save As…, or Save when you close it, to keep it in a new file, and the shared database gets it once this Mac is updated.

> **Tip:** Update every Mac that works on the same projects at the same time.

See also: [Connecting to a Database Server](/manual/shared-database/#connecting-to-a-database-server), [Working Offline and Syncing Later](/manual/shared-database/#working-offline-and-syncing-later), [One Mac at a Time on a Database File](/manual/shared-database/#one-mac-at-a-time-on-a-database-file)

## Reporting a Problem

*Put together a report of what went wrong, with personal details taken out, to email to support from your own mail app, copy or save.*

Choose Help → Report a Problem…, or click Report a Problem… where it is offered: on an error message, and under the list of files that failed in a copy. Say what happened and what you were doing, and leave an email address if you would like a reply. MediaFlowSwift adds what helps find a fault, and shows you the whole report before anything else happens. You can change any of it.

### What Is in a Report

- What you wrote, exactly as you wrote it
- The version of MediaFlowSwift and of macOS, whether the Mac is Apple silicon or Intel, the kind of shared database you use (never its address), and how many clips are in the open project
- A summary of any crashes and hangs macOS recorded for MediaFlowSwift in the last two weeks: what kind of failure, how often (times are in UTC), and where in the program it happened. Two sources say so: the report files macOS writes in Logs/DiagnosticReports in your Library, of which MediaFlowSwift reads only the ones about itself, not those of another program that shares its name, and MetricKit, Apple’s service that hands an app its own crash and hang diagnostics on a later launch. The same fault told by both is counted once. Neither leaves your Mac unless you send a report
- Whether the last run ended without quitting
- The last 150 lines of MediaFlowSwift’s log (Help → Show Log)

### What Is Taken Out

Before you see the report, MediaFlowSwift takes out of everything it adds, including an error message it quotes: your account name and home folder; the names of your drives; every folder and file name in a path, which becomes /…/&lt;file>.mp4, keeping only the kind of file; the names of the projects this Mac knows and of the open project’s clips and cameras; the names and addresses of your computers and servers; email addresses; and map coordinates. Drives, computers, projects and clips are numbered, so the same drive is &lt;drive-1> all the way through and the report can still be followed. From a crash report it takes only the fields listed above: the device identifier and account details Apple puts in those files are never picked up. Passwords, keys and tokens are never in the log or a report; they live only in your Keychain.

It errs on the side of taking out too much. It cannot know a name it has never been told, such as a project on another Mac mentioned in the log, so read the report over; and what you type yourself is left exactly as you typed it. Once you edit the report, the fields above it stop changing it, so nothing you wrote is lost; Start Again from the Fields Above makes it afresh.

### Sending It

Email Report… opens a new message to support@mediaflowswift.com in your own mail app, with the report exactly as it is in the window, for you to read and send. A short report is filled in for you. A longer one, which most are once the log is in, would not fit in a new message in every mail app, so the message asks you to paste it in (⌘V) from the clipboard. Short or long, Email Report… always puts the report on the clipboard. If no message appears (Mail shows only its window for adding an email account when none is set up in it), paste the report into an email to support@mediaflowswift.com from wherever you read your email. MediaFlowSwift itself makes no connection: the report goes only if you send the message, from your own email, so support can reply to you there.

If your Mac opens email links in a web browser rather than a mail app, as it does once Gmail or another webmail is chosen for email, the browser may show no message at all; and if no app is set to open them, nothing opens. So in either case MediaFlowSwift does not hand the message over: the report is on the clipboard, and the window says where to send it. Copy Address puts support@mediaflowswift.com on the clipboard in its place, to paste into To:, and Copy Report puts the report back, to paste into the message. If your webmail does open email links, Open in (your browser) Anyway starts a new message to support there with only a subject line, and you paste the report in. The report itself never goes into the link: a webmail turns the link into a web address, which your browser keeps in its history. If that does not open either, the window says so, and the report is still on the clipboard.

Copy Report puts the text on the clipboard; Save… writes it to a file, if you would rather attach it to an email; sending it however you like is up to you. Help → Contact Support… and a plan change’s Email Support… work the same way when your Mac opens email links in a browser or in nothing: an alert puts the subject line and your version details, or the request, on the clipboard, with Copy Address, Copy Details (or Copy Request) and Open in (your browser) Anyway. See Contacting Support.

A Mac that MediaFlowSwift’s maker has set up for its own testing shows a Send button as well, which hands a report to the maker’s own report relay. A customer’s copy has no relay and needs none: Email Report… is the way to send a report, and MediaFlowSwift never sends one on its own.

### After a Crash

If MediaFlowSwift quit unexpectedly, or did not quit cleanly (a force-quit, or the Mac losing power), it says so once, the next time it opens, and offers a report. If macOS itself stopped the app, for instance because of how this copy was installed or signed, it says that instead: it is not something you did.

### Problems That Are Yours to Fix

A full disk, a drive that is locked, cannot be read or written, or is no longer connected, a network drive that stopped answering, a folder MediaFlowSwift is not allowed to use: these are not faults in the program, and a report about one would tell nobody anything. On an error message, and under the list of files that failed in an import, organize, archive or move, MediaFlowSwift says which it is and what to do about it, and does not offer to report it. Help → Report a Problem… is always there if you disagree.

Some failures could be either. A file that is not where it was expected may be on a drive that is unplugged, or may be a mistake in the program; so may a timeout, or a damaged database file. For these MediaFlowSwift says what to try and offers a report as well.

See also: [Contacting Support](#contacting-support), [Database Connection Issues](#database-connection-issues), [Clips Showing as Missing](#clips-showing-as-missing)

## Contacting Support

*Write to support from your own mail app, or read the support page on the website. MediaFlowSwift sends nothing itself.*

Choose Help → Contact Support… to write to support@mediaflowswift.com. It opens a new message in your own mail app, addressed to support, with this copy’s version and build, your macOS version and your Mac’s chip filled in at the bottom: the first things support needs to know. Nothing else about you, your Mac or your projects is in it. Write your question above them and send it as you would any email; support replies to the address you send from. We aim to reply within two working days.

If your Mac opens email links in a web browser, as it does once Gmail or another webmail is chosen for email, or in no app at all, MediaFlowSwift does not start the message there, since the browser may show no message to send. An alert says so instead, and puts the subject line and those details on the clipboard. Copy Address puts support@mediaflowswift.com on the clipboard in their place, to paste into To:, and Copy Details puts the details back. If your webmail does take email links, Open in (your browser) Anyway starts a new message to support there with only the subject in it, for you to paste the details into.

Choose Help → Support Website to open mediaflowswift.com’s support page in your web browser, with answers to common questions.

Something went wrong? Help → Report a Problem… puts together what support needs to find a fault, with personal details taken out, and Email Report… there hands it to your mail app in the same way, and puts it on the clipboard too; Copy Report and Save… are there to send it yourself. See Reporting a Problem.

> **Tip:** If no message appears (Mail shows only its window for adding an email account when none is set up in it), or you write from webmail that is not set up as your Mac’s mail app, write to support@mediaflowswift.com from wherever you read your email. Include the version shown in Settings › General.

Neither item makes a connection of its own: the message goes only when you send it, and the page is fetched by your browser. Settings › Privacy lists both.

See also: [Reporting a Problem](#reporting-a-problem), [Privacy: What Leaves This Mac](/manual/setup-network/#privacy-what-leaves-this-mac)

## Database Connection Issues

*What to check when the shared database will not connect, for a database file and for a database server.*

The shared database is optional: every project opens and works from its project file (.vpm) without it. When the database is unreachable you can keep working; only the cross-project tools stop, and what you save is sent once it is back. The current state is on the last line of the Database menu and in Settings › Storage.

### If You Use a Database File

Symptom: the status reads “Connection failed: …”, “Database file offline” or “Waiting for the network share…”. Cause: the file, or the drive or share it is on, cannot be reached.

1. Open Settings › Storage and read the line under Database. “Database file accessible” means the file can be reached. “Database file not found (will be created on connect)” means the path is reachable but holds no file yet. “No database file chosen yet” means you need to click New Database File… or Use an Existing Database File…
2. If the file is on a network share, open Settings › Network. If it says Not connected, click Connect now, or choose Database → Reconnect Network Share
3. Choose Database → Enable & Connect Database (Reconnect Database while it is connected)
4. If the path is wrong, click Change… and pick the file. Reset to Default points at MediaFlow/mediaflow.db on the chosen network share; it is dimmed until you choose a share in Settings › Network

MediaFlow watches the volume and connects again by itself when it comes back, including after the Mac wakes from sleep.

### If You Use a Database Server

Open Settings › Storage and click Test Connection. It shows the server’s version, or one of these messages:

- “Nothing is listening at host, port …” — the database server is not running there, or the Port is wrong. Start the server, or correct the Port (usually 5432)
- “… could not be found on the network. Check the host name.” — The Host is misspelled, or this Mac is on a different network
- “… did not answer within 10 seconds” — Something between this Mac and the server, often a firewall, is dropping the connection. Check that the server allows connections from this Mac
- “… is not reachable from this network.” — This Mac has no route to the server. Check your network or VPN
- “… closed the connection” — The server is set to refuse this Mac. Whoever runs the server needs to allow this Mac’s address in pg_hba.conf
- “The server asked for the password in plain text…” or “… as an MD5 hash…” — MediaFlow did not send the password: a server that asks for it this way could be something else on the network pretending to be yours. If it is your own server, whoever runs it sets it to sign in with SCRAM (scram-sha-256 in pg_hba.conf) and sets the password again. A server made with Set Up a Server… already signs in this way
- A message in the server’s own words, such as a failed password or a database or role that does not exist — Correct the Password, Database or User field

If there is no server yet, Set Up a Server… walks you through making one.

### It Stopped Connecting After an Update

Symptom: the database connected yesterday, and after an update it does not, with the same settings. The status reads “macOS is keeping MediaFlowSwift off your local network…”. Cause: macOS asks once whether an app may reach devices on your network, and after an update it sometimes stops applying your yes to the new version, even though the switch still shows on. The server and your settings are fine.

1. Open Settings › Storage and click Open Local Network Settings…, or open System Settings › Privacy & Security › Local Network yourself
2. Turn MediaFlowswift off, then on again. If it is listed more than once, turn every one on
3. Go back to MediaFlowSwift. It keeps checking, every few seconds at first and then less often, for as long as macOS holds it back, and connects by itself as soon as macOS lets it through. There is no need to restart it, or to choose Reconnect Database. macOS sometimes lets the new version through by itself later on; the switch makes it happen now, and MediaFlowSwift checks again the moment you come back to it

MediaFlowSwift knows this within a few seconds of trying, where it used to wait ten and then guess. It asks macOS why the connection is being held back, looks twice, and still gives the connection itself three seconds to get through before saying so. If macOS will say nothing, you get the ordinary message about a server that did not answer instead, which still mentions the switch. If macOS asks for leave to read the saved password, as it did once at 1.10.19 when the app took its Apple Developer ID, choose Always Allow; an update since then does not make it ask again.

### The Log

Help → Show Log reveals app.log in the Finder (it is in Logs/MediaFlow in your Library). MediaFlowSwift writes what it does there, and warnings and errors with their reasons in the database’s or the system’s own words, such as why a sync failed. It names projects, clips, cameras and the database server’s address. It never holds passwords or keys, nor the contents of a rejected database row. A new file is started when it passes two megabytes, and the one before is kept as app.previous.log. Nothing is sent anywhere: it is yours to read, or to attach when you report a problem.

### Several Macs

A database file is for one Mac at a time. Each Mac works on its own local copy and writes the file back when it disconnects or quits, so MediaFlow lets only one Mac connect at a time. A second Mac is told which Mac has it, and can wait or work without the database; see One Mac at a Time on a Database File. A Mac that stopped answering loses its turn after five minutes. Every Mac needs this version or later, because an older one does not take turns. For several Macs at once, switch to a database server. Your project files are not harmed either way: a save writes the project file whenever its folder can be reached, whether or not the database is connected.

### What the Status Line Means

- Connected, Synced — All is well
- Connecting…, Reconnecting…, Waiting for the network share… — MediaFlow is trying; give it a moment
- Sleeping, Disconnected — The connection was closed for sleep, or by Disable & Disconnect
- Database file offline — The drive or share that holds the database file is not connected, or the file beside it that keeps other Macs out couldn’t be written (see One Mac at a Time on a Database File). Changes are noted and synced when this Mac connects
- Database file offline (viewing this Mac’s copy) — The same, and All Projects and search show this Mac’s own copy of the database, only to look at. Projects still save to their files; their changes go to the database when this Mac connects. A project whose file can’t be found is not opened from that copy, since its changes would have nowhere to be saved; open it once the share is back
- Connection failed: … — The reason follows the colon
- In use on …, Waiting for … — Another Mac has the database file; see One Mac at a Time on a Database File
- Working without the database — You chose to work without it while another Mac had it. Changes are noted and synced when this Mac connects
- Sync failed — A save could not be written to the database. Your project file is saved. MediaFlow has noted the project and syncs it after the next successful connection. The reason is in the log: choose Help → Show Log
- Syncing offline changes… — MediaFlow is sending the database what changed while it was away
- Connected · offline changes still to sync: … — The named projects are still waiting. Open each one to finish its sync

See also: [Shared Database Overview](/manual/shared-database/#shared-database-overview), [Working Offline and Syncing Later](/manual/shared-database/#working-offline-and-syncing-later), [One Mac at a Time on a Database File](/manual/shared-database/#one-mac-at-a-time-on-a-database-file), [Connecting to a Database Server](/manual/shared-database/#connecting-to-a-database-server), [Database File or Database Server?](/manual/shared-database/#database-file-or-database-server), [Choosing and Connecting Your Network Share](/manual/setup-network/#choosing-and-connecting-your-network-share), [Searching All Projects Finds Nothing](#searching-all-projects-finds-nothing)

## Searching All Projects Finds Nothing

*Why the search field’s All Projects scope can come back empty, or says what it needs instead of searching, and what to do about each.*

Symptom: with All Projects chosen, a clip you know is in another project isn’t listed, or All Projects says what it needs instead of searching. This Project works without a shared database.

### When All Projects Says What It Needs

- “Searching every project needs a shared database” — no database file or server is set up. A network share chosen in Settings › Network is not a database on its own: the message stays until a database file is on it. Click Set Up a Shared Database… to open Settings › Storage, turn on Enable Shared Database, and choose a database file (any plan) or a database server (Studio Pro). Learn More opens Searching All Projects, which has the steps
- “The shared database is turned off” — click Turn On & Connect, or choose Database → Enable & Connect Database
- “The shared database can’t be reached” — for a file, connect the network share it is on; for a server, check that it is on and that this Mac is on its network. Then click Try Again. The last line of the Database menu says what happened; see Database Connection Issues
- “The shared database is in use” — another Mac has the database file, and only one Mac can use a file at a time. Click the button that reads Wait for, followed by that Mac’s name: this Mac connects as soon as the other has finished, and All Projects searches then. See One Mac at a Time on a Database File
- “Your plan doesn’t include the database server” — click Choose a Plan… for Studio Pro, or Storage Settings… to use a database file, which works with any plan
- “No other projects are in the shared database yet” — only projects saved with the database on are in it. Click Migrate Projects… to add the ones you already have

### When It Searches but Finds Nothing

- The project has been saved with the database connected. A project reaches the database when it is saved; projects made before you turned the database on need Database → Migrate Projects
- The clip is still in its project. A clip taken out of a project isn’t listed
- Every word you type must be found in the clip or its project’s name. Try one word, or part of the file name
- Up to 300 clips are listed. If the line above the results says it shows the first 300, type more words to narrow the search

See also: [Searching All Projects](/manual/shared-database/#searching-all-projects), [Database Connection Issues](#database-connection-issues), [Migrating Projects to the Database](/manual/shared-database/#migrating-projects-to-the-database), [One Mac at a Time on a Database File](/manual/shared-database/#one-mac-at-a-time-on-a-database-file), [Database File or Database Server?](/manual/shared-database/#database-file-or-database-server)

## Network Share 'Resource Busy' Errors

*Why deleting or moving a project folder on a network share can fail with “resource busy”, and what to try.*

Symptom: deleting or moving a project folder on a network share fails with a “resource is busy” error.

Cause: a file in the folder is still open, often because a preview has only just closed. Network shares release files more slowly than a disk in this Mac.

### Fixes

- Wait a few seconds and try again. MediaFlow already retries up to 3 times by itself
- Close any preview of a file in that folder
- Disconnect the share in Finder and connect it again
- If the folder is still stuck, relaunch Finder: hold Option, right-click the Finder icon in the Dock and choose Relaunch

See also: [Clips Showing as Missing](#clips-showing-as-missing), [Deleting a Project](/manual/project-management/#deleting-a-project)

## Organize Errors on a Network Drive

*What happens when a network drive drops in the middle of Organize, even every few minutes over a phone connection, and what to do when a clip isn’t organized.*

Symptom: Organize says “Waiting for the network drive…”, or finishes saying some clips couldn’t be organized. Older versions gave up with “The network drive dropped while copying” a clip, or said “Write failed” with “Invalid argument”.

Cause: the connection to the drive went away for a moment while a clip was being copied. It happens most over a connection that comes and goes, such as a phone hotspot, a satellite dish, or a Mac that switches from one network to another. The drive usually stays in the Finder, so nothing looks wrong, but the copy that was under way can no longer be finished.

### What MediaFlow Does About It

- It stops writing that clip and waits for the drive to answer again, a few seconds at first and up to a minute between checks, for as long as Organize is open: over a phone connection that drops every few minutes, or while the Mac sleeps, it never gives up on a clip because the drive dropped. Then it carries the copy on from what had already arrived, so a long clip over a slow connection does not start again from nothing. What arrived is read back and compared with the clip first; the part that was being written when the drive dropped is always written again, never trusted. The window says “Waiting for the network drive…”, how much of the clip was sent, and that it keeps trying until Cancel. After an hour of a drive that answers but keeps failing the same file, it says so: the drive may have a problem of its own, and you can Cancel and try later
- Over a slow connection each part of a copy is read back from the drive once, after it was last written, and together those read-backs must match the clip, so you pay for the data once. On a fast connection the whole of a copy that was carried on is read back again once it is complete. Either way this happens even with read-back verification off in Settings › Storage, and if anything differs, that copy is deleted and the clip is copied again from the beginning. If the drive drops while MediaFlow asks it to finish writing the copy, everything written since the last point that was checked is written again
- While it copies, MediaFlow measures how fast the drive is taking the clip and keeps a point it can carry on from about every 30 seconds of copying: a few tens of megabytes over a phone or satellite connection, much more on a fast network. A drop costs about that much. On a connection that does not drop, nothing extra is read back
- If nothing that arrived can be kept, or the copy cannot be opened again, the clip is copied again from the beginning. If the drive refuses a clip before any of it is written while it answers, MediaFlow waits and tries a few more times before saying the drive refused that file. If the drive answers but for ten minutes in a row won’t let MediaFlow read back what arrived (it can keep an unfinished copy locked after the connection drops, sometimes for good), MediaFlow leaves that copy on the drive and goes on with a new one: from a copy the drive makes of what arrived, when it allows that within about a minute, or else from the beginning. A moment when the drive doesn’t answer at all starts the ten minutes again. While it waits, the window says the drive is holding the file’s earlier part locked; afterwards the window and the end report say what MediaFlow did, and the time left counts what is sent and checked again. Tidy Up can clear the locked copy later, and it goes by itself after the days set in Settings › Storage
- Every copy is written under a hidden name and is read back and checked before it takes the clip’s name, so a half-written file is never counted as organized
- If the share is mounted again under another name while MediaFlow waits (“Media-1” beside “Media”), it finds the same folder there and carries on in it. It knows the drive by a small hidden file it leaves in the destination while it runs (and removes at the end), so the drive is recognised however it is reached, over the home network or a phone link. It never writes to a folder that is no longer on the network drive, such as the empty folder macOS can leave at the share’s old place on this Mac. Only a real refusal ends a clip: a full drive, no permission, or the clip itself gone. Messages such as “Resource temporarily unavailable”, “Operation timed out” or “Socket is not connected” are the link stumbling, and are waited through like any drop. A clip that does end is listed in the window when it happens, with the reason, left where it was, untouched, and counted apart, never as organized or checked; Done doesn’t offer to clear the card. While it runs, the window says how the drive is doing (“Network drive: answering · 12 drops in the last hour”, or “not answering since 3:42”), and which clip is waiting for it. MediaFlow looks at the drive lightly every 20 seconds, which also keeps the connection in use. If you have allowed MediaFlow’s notifications (it asks once, as an Organize to a network drive starts), it lets you know when the drive hasn’t answered for five minutes, when it has kept refusing a clip for an hour, and when a clip can’t be finished. While a clip is being sent the drive counts as answering, unless nothing has moved for about six minutes (twelve before MediaFlow has timed the connection, and longer on one that is slower than that) and the drive doesn’t answer two looks in a row: then the window says it isn’t answering since the last part arrived, and you get one notice. If the drive does answer but the file being copied hasn’t moved for that long, the window says so instead, for example “The drive answers, but GX012216.MP4 hasn’t moved since 3:42”, with a notice only if that lasts 15 minutes. One stall gets one notice, whichever it is. A slow connection that is still sending is never taken for one that stopped. A full drive stops the run at once, with one notice. The window says once that Organize stopped because the drive is full, gives the clip that didn’t fit that reason, lists the clips it didn’t reach, and leaves them all where they were: free up space and Organize again
- Cancel stops at once, even while MediaFlow waits. What had been sent of the clip in hand stays on the drive under a hidden name for the next Organize, as it does when you quit MediaFlow, it quits unexpectedly, or the Mac restarts. While Organize runs, MediaFlow keeps the Mac from going to sleep by itself
- Beside that hidden copy is a small note saying which clip it is and how far it got. The next Organize of that clip carries the copy on from there instead of starting again. When it starts, the Organize window says about how much it will send and how much it will read back to check, and while it runs it shows what has been sent and what has been checked apart, with the speed and the time left; only what has been checked counts as done
- Before it carries such a copy on, MediaFlow checks that the clip has not changed (its size, date and first part), and reads back from the drive what the copy holds and compares it with the clip. It carries the copy on from the last point that still matches; if the clip has changed, the start of the copy differs, or the note is missing, unreadable or about another clip, the hidden copy is deleted and the clip copied again from the beginning. If the drive drops while it checks, the copy is kept and checked again once the drive answers. Once the copy is complete, the whole of it is read back from the drive and compared with the clip, as for any copy that was carried on
- If another Mac is copying the same clip into the same folder at that moment, MediaFlow leaves its copy alone and leaves the clip where it is, saying so. Organize again once the other Mac has finished. A copy whose Mac has stopped working on it for a couple of minutes, or gave up on it, is taken over, and only ever by one Mac: if two try at once, the other leaves the clip where it is
- A hidden copy that no Organize carries on is removed after 7 days, the next time you organize to that folder. Change the number of days in Settings › Storage, under Organize Media. Only MediaFlow’s own hidden copies and notes are ever removed, and a drive that is not answering is skipped. Archive, Move Project and Return to Library leave such copies and notes out

### Fixes

- Organize again. A finished copy already in the destination is read back and used, not sent again, even one an earlier Organize left in another folder of the destination, which is moved into place; a file of the clip’s name that is short or different is left alone. A clip that was cut short carries on from what arrived, and nothing was lost
- For a long run over a phone or a hotspot, keep a laptop on power with its lid open, and stay on one network if you can: closing the lid still puts it to sleep, and the phone link may drop while it sleeps; Organize carries on after it wakes
- If the share has disappeared from the Finder, MediaFlow connects it again by itself when it is the one chosen in Settings › Network; you can also connect it in the Finder

This is a connection problem, not a fault in MediaFlow, so it does not offer to send a problem report for it. On a drive connected to this Mac, the same kind of error is not retried: there it can mean a failing disk or a fault worth reporting. If a network drive that is answering keeps refusing a clip before any of it is written, the message says the drive refused that file and what to check, such as a name the drive does not allow.

See also: [Organizing Media to Storage](/manual/organizing-media/#organizing-media-to-storage), [Network Share 'Resource Busy' Errors](#network-share-resource-busy-errors), [Reporting a Problem](#reporting-a-problem)

## Import Not Detecting Files

*What to check when Import shows no files: the file types MediaFlow accepts, the drive, and the iPhone’s Trust prompt.*

Symptom: you open Import and the list is empty, or some files are not in it.

### Cause: The File Type Is Not One MediaFlow Imports

Import lists only these types, by file extension:

- Video — MP4, MOV, M4V, AVI
- Images — JPG, JPEG, PNG, HEIC, DNG
- Audio — WAV, MP3, AAC, M4A

Anything else is left out of the list, and a line at the bottom of the sheet counts what was passed over by type, for example “15 files left out: 12 .CR3, 3 .INSV”. That includes camera raw stills other than DNG (CR3, CR2, ARW, NEF, RAF, GPR), AVCHD recordings (MTS, M2TS), Insta360 recordings (INSV, INSP), MXF, BRAW, R3D and TIFF. Hidden files, and the small files a camera writes for its own use beside the clips (a GoPro’s LRV and THM, a card’s XML and BIN database files), are left out without being counted. A folder that holds only left-out files shows an empty list and that line. Convert them first, for example a raw still to DNG or JPG.

### Cause: The Source Cannot Be Read

- Card or drive — Check that it appears in Finder, then click Rescan in the Import sheet
- iPhone — Unlock the phone and tap Trust when it asks, then click Refresh in the Import sheet. If it still does not appear, unplug the cable and plug it in again
- Folder — Check that you can open the folder in Finder. Import looks inside its subfolders too

See also: [Importing from a Card, Drive or Folder](/manual/importing-media/#importing-from-a-card-drive-or-folder), [Importing from iPhone or Camera](/manual/importing-media/#importing-from-iphone-or-camera), [The Import Sheet and Completion Card](/manual/importing-media/#the-import-sheet-and-completion-card)

## Footage in iCloud or Other Cloud Storage

*When the folder imports go to, or a project, is in iCloud, Google Drive, OneDrive or Dropbox: what MediaFlow tells you, what Not downloaded means, and how to keep footage on this Mac.*

With iCloud’s Desktop & Documents Folders turned on, your Documents folder is in iCloud, and so is everything in it: this Mac’s import folder, which is inside Documents, and any project kept there. Folders in iCloud Drive, Google Drive, OneDrive and Dropbox work the same way. Every clip you import into such a folder uploads, which can take hours on a slow connection and counts against your storage. And the service may later move clips off this Mac to make room (in iCloud, when Optimize Mac Storage is on), leaving a placeholder with the same name and size and nothing in it.

### What MediaFlow Tells You

- At launch, when the folder imports go to is in cloud storage: a notice in the Progress panel at the bottom right of the window
- Before your first import of the session into such a folder: a question. Continue opens the Import sheet. Cancel does not, and the next import asks again. It asks about where imports go in Settings › Storage › Imports go to; if you pick another place for one import with Change…, it asks about that place when you click Import Selected. An external drive or network share is never asked about
- When you open a project whose folder, or whose destination, is in cloud storage: a notice, once a session

Each names the service, iCloud, Google Drive, OneDrive or Dropbox, or says cloud storage when MediaFlow cannot tell which. Each has Don’t Show Again for This Folder, which stops it for that folder and every folder inside it. MediaFlow looks only at the folder itself to tell; it does not go through your files, and nothing is sent anywhere.

### Not Downloaded

A clip whose file is such a placeholder reads Not downloaded from iCloud in the Where column, in grey with a cloud, or Not downloaded from Google Drive, OneDrive or Dropbox for those, or Online-only (not on this Mac) for another service. It is not Missing, it is not in the Missing group or the missing counts, and Free Up Space leaves it out of the space to free and says how many it skipped, because it takes no room on this Mac. Organize, Free Up Space, Clear Card, Archive, Restore, Move Project and Relink… never read a placeholder, never copy it and never take it as a copy of anything: each leaves it alone and says why, so nothing waits on a download and no card file or original is removed on its say-so.

### What to Do

1. To bring a file back, find it in the Finder, Control-click it and choose the service’s download command (Download Now for iCloud). Then choose Workflow → Repair → Re-check files
2. For iCloud: to keep your footage on this Mac only, turn off Desktop & Documents Folders in System Settings › your name › iCloud, under iCloud Drive. macOS explains what happens to the files already there. To keep iCloud but stop clips being moved off this Mac, turn off Optimize Mac Storage in the same place
3. For Google Drive, OneDrive, Dropbox and other services: keep footage in a folder that isn’t synced, or set the folder to always keep files on this Mac in the service’s own app or the Finder
4. Or keep projects on an external drive, and choose where imports go in Settings › Storage › Imports go to. MediaFlow asks before an import that would land in a cloud folder, about the place this import actually goes: an import to an external drive or network share is never asked about

See also: [Understanding the Where Column](#understanding-the-where-column), [Clips Showing as Missing](#clips-showing-as-missing), [Importing from a Card, Drive or Folder](/manual/importing-media/#importing-from-a-card-drive-or-folder)

## Understanding the Where Column

*What each icon and label in the Where column says about where a clip’s file is right now.*

The Where column (once called Location) shows where each clip’s file is. The same eight labels appear on the grid badge and in the legend behind the info button above the media list:

- Green check (At destination) — The file is at the project’s destination and has been verified
- Blue folder (Imported, not organized yet) — The file was imported (to this Mac, a drive or a share) and has not been organized yet
- Orange arrow (Only on card) — The file is on a camera card and has not been copied to the destination
- Orange arrow (Not at destination) — The file is on another drive or folder, not a card, and not at the destination. The tooltip names the drive
- Green link (Referenced) — The file stays where it was (Create Project From Folder) and is not copied
- Red X (Missing) — The file cannot be found at any recorded path
- Yellow triangle (Size mismatch) — The file is at the destination, but its size does not match the source
- Gray question mark (Unknown) — MediaFlow has not checked this file yet

Four more labels can appear in grey instead, when this Mac cannot see the file. Volume not connected means the drive or share it is on is not mounted. On another Mac means the file is in another account’s home folder, usually because it was imported on another Mac that shares this project. Not on this Mac means this Mac has never had the file and cannot find it, usually because it was imported on another Mac and kept somewhere else there. Not downloaded from iCloud, with a cloud, means iCloud has moved the file off this Mac and left a placeholder; it reads Not downloaded from Google Drive, OneDrive or Dropbox for those services, and Online-only (not on this Mac) for another. Download it in the Finder (see Footage in iCloud or Other Cloud Storage). The legend has a row for the last three, and none of the four is Missing. A clip on another Mac or not on this Mac is also left out of the Missing and Not at destination groups and of the pipeline’s Organize count, because it is that Mac’s to organize. One in another account’s home folder is left out of the Free up space count too.

The sidebar’s Smart Groups filter the media list to clips that still need attention: Not at destination, Missing, Uncategorized, Unrated, Unreviewed and Reject candidates. Unreviewed holds clips with an import-analysis proposal nobody has confirmed. Reject candidates holds clips import analysis flagged as probable rejects.

> **Tip:** Choose Workflow → Repair → Re-check files to bring every Where badge up to date.

See also: [Re-check files](/manual/organizing-media/#re-check-files), [Clips Showing as Missing](#clips-showing-as-missing), [Footage in iCloud or Other Cloud Storage](#footage-in-icloud-or-other-cloud-storage), [Proposals: What Import Analysis Suggests](/manual/organizing-media/#proposals-what-import-analysis-suggests)

<div class="chapter-nav" role="navigation" aria-label="Chapters">
<a rel="prev" href="/manual/keyboard-shortcuts/">&larr; Keyboard Shortcuts</a>
<a href="/manual/">All chapters</a>
<span></span>
</div>
