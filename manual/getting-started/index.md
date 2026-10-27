---
layout: manual
title: "Getting Started — MediaFlowSwift Manual"
description: "What MediaFlow does for a video creator, the basic workflow from card to archive, and where to find help."
permalink: /manual/getting-started/
generated: tools/import-guide.sh
---
# Getting Started

## What Is MediaFlow?

*What MediaFlow does for a video creator, the basic workflow from card to archive, and where to find help.*

MediaFlow keeps track of the footage from a shoot. You import clips from cards, phones and folders, sort them into categories, review them, and copy them into a tidy folder structure at the project’s destination folder, ready for editing and archiving.

### System Requirements

Requires macOS 13 Ventura or later on a Mac with Apple silicon (M1 or newer). MediaFlowSwift does not run on Intel-based Macs. About MediaFlowSwift, in the MediaFlowSwift menu, says the same.

### Key Capabilities

- Import media from SD cards, USB drives, folders, iPhones and cameras connected over USB
- Organize clips into category folders at the project’s destination folder — a network share, an external drive, or a folder on this Mac
- Preview video with frame-by-frame playback controls
- Add categories, tags, notes and star ratings to your clips
- Generate PDF, HTML, and CSV reports for your projects
- Search across projects and find duplicates with an optional shared database — a single file, or a database server several Macs can use

### Basic Workflow

1. Create or open a project
2. Import media from your cards, phones and folders
3. Categorize and review your clips
4. Organize the clips to the project’s destination folder
5. Generate a report for your editor, then archive the project

The pipeline strip under the toolbar follows these steps and always offers the next one.

### First-Run Setup

The first time you open MediaFlow, a short tour explains the app. A Setup Wizard follows it. It first asks where your footage goes: this Mac, an external drive, or a network share. Then it asks where organized media goes. Only for a network share does it ask more: which share, and whether to use a database every Mac shares. On a single Mac it makes a small database of your projects for you, unless you untick it. You can skip any question. To answer them later, choose Settings › General › Run Setup Again…

### Where to Get Help

- Help → MediaFlow Help (Cmd+/) opens this searchable help window
- Help → User Guide opens a printable version of every topic in your web browser
- Help → Keyboard Shortcuts jumps straight to the shortcut reference
- Help → Getting Started Guide re-opens the welcome tour shown the first time MediaFlowSwift opens. It opens by itself once only; to have it open every time, tick “Show this welcome when MediaFlowSwift opens” on the tour, or the same switch in Settings › General
- MediaFlowSwift keeps its own copy of your setup, including what you have already seen, the size and place of its windows and your view choices, and puts it back at launch if macOS has lost them

See also: [Setting Up MediaFlow](/manual/setup-network/#setting-up-mediaflow), [Creating a New Project](#creating-a-new-project), [Opening an Existing Project](#opening-an-existing-project), [Understanding the Pipeline Strip](#understanding-the-pipeline-strip), [Keyboard Shortcuts Reference](/manual/keyboard-shortcuts/#keyboard-shortcuts-reference), [About MediaFlowSwift](#about-mediaflowswift)

## Creating a New Project

*Create a new empty project, or build one from a folder of media you already have without copying anything.*

A project is a .vpm file that records your clips and everything you know about them. Start an empty project for a new shoot, or build one from a folder that already holds media.

### New Empty Project

1. Choose File → New Project (Cmd+N)
2. Enter a descriptive project name
3. Check Project location — the folder the new project folder is created in. It starts at the last location you used, or your Documents folder; click Choose… to pick another
4. Check “Organized media goes to” — the destination Organize Media copies clips to. It starts as the new project folder; click Change… to pick another folder, or Use project folder to go back
5. Click Create

MediaFlow creates a folder named after the project and saves the .vpm project file inside it.

When the destination is on this Mac’s own drive, a plain note under it says so; keeping everything on your Mac is a fine way to work. The note turns into an orange warning only when your setup points somewhere else: when your default destination in Settings › Storage is on another drive or a share, or, with no default destination set, when you use a network share. Then a folder on this Mac usually means that drive or share was not connected when the project was made. When the default destination in Settings › Storage is on this Mac, this Mac is your choice and there is no warning, even if a network share is also set up, for a shared database say. If this Mac is where you want the organized media, you can ignore the warning.

With a shared database set up (a database server, or a database file on a network share), other Macs share your projects, and they can only organize into a folder they reach. When the destination is on this Mac, or on a drive connected to it, New Project warns that other Macs sharing the project won’t be able to organize into it, and offers Choose a Folder on a Network Share…. It is a warning: Create still works. The Mac that creates a project owns its destination, and another Mac never quietly organizes the project somewhere else; see When This Mac Can’t Reach the Destination in Organizing Media to Storage.

### Create from Existing Folder

1. Choose File → Create Project From Folder (Cmd+Shift+N)
2. Select a folder that already contains media files
3. Choose where to save the project file. The suggested name is the folder’s name
4. MediaFlow scans the folder, including its subfolders, and adds every supported media file to the project

The files stay where they are — nothing is copied or moved. The project takes the folder’s name, and its destination is set to the folder you saved the project file in. You can change the destination later from the sidebar.

> **Tip:** Use Create Project From Folder when your media is already laid out the way you want and you only need MediaFlow to catalog it.

See also: [Opening an Existing Project](#opening-an-existing-project), [Saving Projects](/manual/project-management/#saving-projects), [Change destination folder](/manual/organizing-media/#change-destination-folder)

## Opening an Existing Project

*Open a saved project from its file, from the Open Recent menu, or from the Project Browser.*

### Open from File

1. Choose File → Open (Cmd+O)
2. Navigate to the .vpm project file
3. Click Open

### Open Recent

The File → Open Recent submenu lists your recently opened projects for quick access. Choose Clear Menu at the bottom of the submenu to empty the list.

### Project Browser

The Project Browser shows all known projects, including those registered in the shared database. It is in the main window: there whenever no project is open, and shown in place of the open project by Projects → Browse Projects… (Cmd+Shift+P). Back to, followed by the project’s name, returns to that project just as you left it. Opening another project from the list asks about unsaved changes first, as opening always does.

- Double-click a project to open it. Or select it and click Open Selected at the top right, or press Return
- Right-click anywhere on a project’s row for options: Open, Delete Project…, Remove from List, Show in Finder
- Type in the Filter projects by name field above the list to narrow it by project name. The count under Projects is of the projects listed, for example 3 of 12 projects
- The search field in the toolbar searches the clips of every project in the shared database, in the list’s place, under a line that says so; Clear brings the list back. See Searching All Projects
- Click a column header to sort the list; MediaFlow remembers your choice the next time you open it

See also: [Creating a New Project](#creating-a-new-project), [Deleting a Project](/manual/project-management/#deleting-a-project)

## Understanding the Interface

*A tour of the main window: pipeline strip, sidebar, media list, preview panel and metadata panel.*

The main window is divided into five areas:

### Pipeline Strip (Top)

- One row under the toolbar with the seven steps of a shoot: Import, Categorize, Review, Organize, Free up space, Archive, Eject
- See Understanding the Pipeline Strip for what each segment counts and what its button does

### Sidebar (Left)

- Shows the project name, the organize destination with a Change… link, and the active filters as chips
- Library section: All Media, Hero, Proxy queue
- Smart Groups section: Not at destination (clips whose file is not at the destination yet), Missing, Uncategorized, Unrated, Unreviewed, Reject candidates
- Cameras section: the project’s camera list. Click a camera to see only its clips
- Places section: the places your clips were shot, grouped from their GPS data. It appears only when clips have GPS data
- With no project open, the header says No project open and these sections are replaced by a note: open a project to filter its clips

### Media List (Center)

- Displays your clips in either Table or Grid view
- Use the toolbar picker to switch between views
- In Table view, click the Filename, Date or Where header to sort
- Cmd+Click adds clips to the selection; in Table view Shift+Click selects a range
- When clips are selected, a bar at the bottom of the list offers Organize Media, Set Category, Toggle Hero, Rate, Select, Remove from Project and Deselect All

### Preview Panel

- Shows a video player or image preview for the selected clip
- Video controls: play/pause, frame step, seek slider, pop-out

### Metadata Panel

- Six tabs: Workflow Tools, Edit, Full Metadata, Metadata, Scene Log and Transcript. When the panel is too narrow to show them all, scroll the row of tabs sideways. The tab you last used is remembered
- Drag the divider between the preview and this panel to give either more room; the panel can be as narrow as the tabs’ contents allow and much wider than before
- Workflow Tools — Extract a thumbnail, mark in and out points, create a subclip, and manage and process the Proxy queue
- Edit — Change the category, rating, select status, tags and notes of the selected clips
- Full Metadata — Everything read from the file, in sections you can open and close: file details; video (resolution, frame rate, codec, bit rate); color and HDR; audio; camera and lens; and, when the clip has them, GPS, weather, drone, GoPro and iPhone data
- Metadata — A short summary: filename, type, size, date created, duration, category, Camera and Where, and the clip’s thumbnail and proxy files
- Scene Log — Scene, shot type, take, Camera angle and Circle Take for the selected clip
- Transcript — Read, search, correct and export the clip’s transcript, or transcribe it if it has none

### Rearranging Panels

- The media list starts on top, full width, with the preview and metadata panels below it. If you have already moved it, your saved choice is kept
- View → Move Media to Top / Move Media to Bottom (Cmd+Opt+T) swaps the media and preview positions; the menu title shows the direction it will move
- View → Move Preview to Left / Move Preview to Right (Cmd+Opt+P) swaps the preview and metadata positions
- View → Reset to Default Layout restores the standard arrangement (enabled only after a swap)
- Drag the dividers between panels to resize them

See also: [What Is MediaFlow?](#what-is-mediaflow), [Understanding the Pipeline Strip](#understanding-the-pipeline-strip), [Table and Grid Views](/manual/managing-clips/#table-and-grid-views), [Filtering and Searching](/manual/managing-clips/#filtering-and-searching)

## Understanding the Pipeline Strip

*The row under the toolbar that shows how far the project has come and offers the one next action.*

The pipeline strip shows the seven steps of a shoot and how much work each one still has. It runs across the top of the window whenever a project is open. Every segment is a button.

### The Seven Segments

- Import — clips in the project. Button: Import…, the same sheet as File → Import…
- Categorize — clips with no category (a blank category counts). Button: Auto-suggest
- Review — clips with no star rating. Button: Review…, the same as Workflow → Review (Cmd+Opt+R)
- Organize — clips whose file is not at the destination folder. Button: Organize N clips, or Organize N selected clips while clips are selected, since it then copies only those. A clip that is at the destination with a size mismatch counts as organized here; the Where column still shows the mismatch
- Free up space — the space the working-directory copies of organized clips still take on this Mac. A copy Free Up Space has deleted no longer counts, one it has moved into this Mac’s Cleanup folder counts until it is deleted, and one Restore from Cleanup puts back counts again. Button: Free Up Space…, which checks each file and shows exactly what it will reclaim
- Archive — Pending, or the volume the project was archived to (“USB #0007”) with the date. Button: Archive…
- Eject — removable cards and drives still mounted. Button: Eject &lt;name>, or an Eject menu when more than one is connected

### Clicking a Segment

Clicking a segment filters the media list to that step’s remaining work and reveals its one primary button on the right. Import shows all media, Categorize shows the uncategorized clips, Review shows the unrated ones and Organize shows the Not at destination smart group. Free up space, Archive and Eject leave the current filter alone because their work is not a subset of the list.

Until you click one, the strip follows the first step that still has work to do. A finished step shows a green check instead of its icon.

The Organize count turns orange once 10 or more clips are still waiting and the project has a destination.

See also: [Understanding the Interface](#understanding-the-interface), [Organizing Media to Storage](/manual/organizing-media/#organizing-media-to-storage), [Freeing Up Space](/manual/organizing-media/#freeing-up-space), [Smart Notifications](/manual/settings-preferences/#smart-notifications)

## What Things Are Called Now

*One word per concept: the names that changed this release, and the old names they answer to.*

The same thing used to have several names and the same name used to mean several things. This release settles on one word per concept. Nothing stored in your projects changed — a .vpm file written before this release loads unchanged, and one written after it still opens in an older build. Only the words on screen moved.

### The Table

- Organize Media keeps its name, and the pipeline strip now says Organize too, instead of naming a device — the menu item, the toolbar button, the right-click action, the strip and the confirmation sheet all read the same. With clips selected it copies the selection; with nothing selected it copies the whole project, and the sheet says which
- Device is now Camera wherever it means the camera that shot the clip — the table column, the sidebar section, the Import sheet’s picker and the Set Camera menu. “Device” now means an import source: a card, a drive, an iPhone.
- The Scene Log’s Camera field is now Camera angle — A, B, C, the angle a take was shot from, not the camera body
- The Location column is now Where, and the sidebar’s Locations section is now Places. Where is about the file; Places is about the world
- Sync Folder Layout (Entire Project) is now Re-file folders by category, under Workflow → Repair
- Reconnect Destination is now Change destination folder, under Workflow → Repair
- Refresh Storage Locations is now Re-check files, under Workflow → Repair
- Do Not Copy now reads Skip (don’t copy). It is still stored as “Do Not Copy”
- The Dashboard and the Project Checklist are gone. The pipeline strip across the top of the window shows where the project stands
- Batch Queue is now Proxy queue — the queue for thumbnails and proxies
- Remove Selected Assets is now Remove from Project
- Kill is now Reject. It is still stored as “Kill”
- Favorite and Circle Take fold into Hero. When a project saved by an older version opens, a favorite becomes a Hero and a circle take becomes a Hero rated five stars. Both flags stay in the file so an older build still reads it

### Where the Workflow Menu Went

- Organize Media…, Review, Free Up Space…, Archive to USB… — the things you do to footage once it is in, at the top level. Restore from Cleanup sits under Free Up Space…. Import… is in the File menu
- Analyze… — one sheet holding every optional analysis pass. See The Analyze Hub
- Plan & Deliver — Shot List, Storyboard, Shoot Map, Day Summary, Storage Forecast, Import Field Notes, Generate Dailies, NLE Template Export, Export FCPXML, Report and Prepare for YouTube
- Repair — Re-check files, Relink Missing Media, Change destination folder, Re-file folders by category. Library Moved is here too: it points every project at a library you have copied to a new drive
- Run Workflow Template… (Cmd+Shift+R) — at the bottom of the menu

> **Tip:** Searching this help for an old name still works. Type Organize Media, Sync Folder Layout, Reconnect Destination, Refresh Storage Locations, Batch Queue, Rapid Review, Kill or Circle Take and you will land on the topic that replaced it.

See also: [The Analyze Hub](#the-analyze-hub), [Organizing Media to Storage](/manual/organizing-media/#organizing-media-to-storage), [Star Ratings & Selects](/manual/managing-clips/#star-ratings--selects)

## The Analyze Hub

*Workflow → Analyze… lists every optional analysis pass with why you would run it, what it needs and when it last ran.*

The Analyze hub is one sheet that holds every optional analysis pass, so you can see what each one is for and whether this project has what it needs. Open it with Workflow → Analyze… The passes were separate Workflow menu items in earlier versions.

Each row gives the tool, one line on what running it buys you, a prerequisite counted from the project you have open — for example “needs GPS — 38 of 212 clips have it” — and the date it last ran. Click Run on a row to start that pass; its results open in the pass’s own review sheet.

### The Passes

- Categories — proposes a category for uncategorized clips (was Auto-Suggest Categories)
- GPS Scenes — groups clips into scenes by GPS proximity and time gaps (was GPS Scene Detection)
- Place names — turns coordinates into readable place names (was Geocode Locations)
- Sun — sun angle and shadow continuity (was Sun Position Analysis)
- Weather — historical weather per clip with GPS data (was Weather Lookup)
- Vision — shot type, faces and scene content on-device (was AI Scene Analysis)
- Smart Selects — quality scores and proposed star ratings (was AI Smart Selects)
- Audio — clipping, low level and silence (was Analyze Audio Levels)
- Transcribe — on-device speech transcription (was Transcribe All Clips)
- Format — mixed frame rates, resolutions and codecs (was Check Format Conformance)
- Exposure — exposure and color consistency (was Exposure & Color Check)
- Transcode — what your target NLE will struggle with (was Transcode Recommendations)
- Continuity — multi-camera coverage gaps per scene (was Continuity Checker)
- Audio Sync — lines up clips from cameras and sound recorders by their sound (was Audio Waveform Sync)

> **Tip:** The last-run date is per project and per pass, and is recorded when you press Run. It is a preference, not project data — it never touches the .vpm file or the database.

See also: [What Things Are Called Now](#what-things-are-called-now), [GPS Scene Detection](/manual/organizing-media/#gps-scene-detection), [Auto-Suggest Categories](/manual/tags-categories/#auto-suggest-categories)

## Progress and Messages

*The panel in the bottom-right corner where every long operation and every outcome appears.*

Anything that takes more than a moment — an import, an organize, a relink, a project move, and every analysis pass — opens a row in the progress panel at the bottom-right of the window. The row names the operation, shows a progress bar when the work can be counted, and disappears when the work is done.

### Outcomes Stay Put

The result of an operation waits for you instead of fading away. “Ejected CARD_A”, “Relinked 12 of 14 files” and “Audio analysis complete” stay in the progress panel until you click the × on them, and some carry the obvious next step as a button — Import Next Card after an eject, Review Ratings after Smart Selects.

### What Each Kind Looks Like

- Progress — a spinner or a bar with a percentage while the work runs
- Success (green check) — a finished operation; stays until dismissed
- Warning (orange triangle) — nothing to do, or something skipped; stays until dismissed
- Notice (grey) — a passing status; clears itself after a few seconds
- Error — an alert with an OK button, not a row in the panel

### Long Messages

A long message shows its first four lines with Show More under them. Click Show More to read the rest in place, and Show Less to fold it again; the panel remembers which messages you opened. A very long message scrolls inside its row once opened, and when several messages are open the panel never grows taller than the window: its messages scroll inside it, the newest at the bottom. So the × and any button that comes with a message, such as Show in Finder or Save As…, are always inside the window, where you can reach them. A passing notice stays longer the longer it is, about a second for every line past the second, up to about ten seconds. It never clears itself while the pointer is over it, and when you move the pointer away it waits at least two more seconds. A passing notice you open with Show More stays until you dismiss it. Hold the pointer over a message to see all of it at once, and VoiceOver reads every word. The reason under a failed operation, and a smart notification at the top of the window, open the same way.

### Failed Operations

An operation that fails keeps its row, tinted red, with the reason in place of the progress bar. It stays until you dismiss it, so a failure that happened while you were away is still there when you come back.

### While a Sheet Is Open

Messages raised inside a sheet — the Import sheet’s “No card selected”, a folder scan that failed — appear inside that sheet, next to the button that caused them, instead of behind the sheet, where you could not read them.

> **Tip:** When no project is open the same status appears in the centre of the window instead, where there is nothing else to look at.

See also: [Understanding the Interface](#understanding-the-interface), [Understanding the Pipeline Strip](#understanding-the-pipeline-strip), [Smart Notifications](/manual/settings-preferences/#smart-notifications)

## Terms of Use

*MediaFlowSwift is sold by Long Road Software LLC under terms of use you agree to once, before you first use the app, and again only when they change.*

The first time MediaFlowSwift opens, it shows the terms of use before anything else: four points in plain words, and the full terms below them. Click Agree to start using the app. Quit closes it without changing anything, and it asks again the next time it opens.

Until you agree, the window shows only the terms and nothing else starts: MediaFlowSwift opens no project, connects to no database or share, and does not check for updates. Every menu is unavailable except Help, where you can still read Help, the user guide and the terms. On a new copy, the free trial’s 14 days start when you agree, not when you first open the app.

### What agreeing records

MediaFlowSwift keeps the version of the terms you agreed to and the date, on this Mac only: in your Keychain, and in a small file in MediaFlow’s folder under Library › Application Support. Two places, because some Macs do not keep an app’s preferences. Nothing is sent anywhere. If neither can be saved, the app opens anyway and asks again next time.

### When the terms change

An update that changes the terms shows them again, with a short list of what changed, and the app goes on once you agree to the new version. An update that does not change them asks nothing.

### Reading them again

Choose Help → Terms of Use to read the terms at any time. The window also says when you agreed to them on this Mac. The same terms are on the website at mediaflowswift.com/terms.html, with the refund policy beside them.

See also: [Setting Up MediaFlow](/manual/setup-network/#setting-up-mediaflow), [Privacy: What Leaves This Mac](/manual/setup-network/#privacy-what-leaves-this-mac), [What Is MediaFlow?](#what-is-mediaflow), [About MediaFlowSwift](#about-mediaflowswift)

## About MediaFlowSwift

*The version you are running and whether it is the newest, the details support asks for, who makes MediaFlowSwift, what it needs to run, links to the website, and the open-source acknowledgements.*

Choose MediaFlowSwift → About MediaFlowSwift. The window shows the version you are running, whether it is the newest, the details support asks for, and © 2026 Long Road Software LLC, the maker and seller of MediaFlowSwift. Its links open the website, the support page, the terms of use and the privacy page in your web browser; nothing is opened until you click. Settings › General › About shows the links, the requirements and the acknowledgements.

### Updates

The card under the version says “You’re on the latest version” and when MediaFlowSwift last checked, or which newer version is available, with Update… to open the Software Update window. When the last check could not reach mediaflowswift.com, it says so, and when the last successful check was. Check Now looks again straight away, as Check for Updates… in the app menu does, and, like it, waits until you have agreed to the terms. Release Notes opens what is new in your version on the What’s New page of mediaflowswift.com in your web browser; when your Mac is offline, it shows the notes that came with your version instead, where the version has them.

### Details

The details card lists the version, the build, your plan, whether updates are checked automatically, the folder MediaFlowSwift is installed in, and your macOS version and kind of chip. Select any of them to copy it into an email to support. Change beside the plan shows the plans; Change beside Updates opens Settings › General, where automatic checks are turned on or off. Until you have agreed to the terms, the plan is not looked up and both Change links wait.

### System Requirements

Requires macOS 13 Ventura or later on a Mac with Apple silicon (M1 or newer). MediaFlowSwift does not run on Intel-based Macs. The app is built for Apple silicon only, so on an Intel-based Mac macOS will not open it. Check the Apple menu → About This Mac: a Mac with Apple silicon names its chip there, such as Apple M1 or Apple M3.

### Acknowledgements

MediaFlowSwift is built with open-source packages, among them PostgresNIO and Apple’s SwiftNIO, Swift Log and Swift Crypto, and the BoringSSL code SwiftNIO SSL carries. Acknowledgements…, in About and in Settings › General, lists each package with its version and licence, then the full text of each licence and the notices the packages ask to be passed on, including BoringSSL’s OpenSSL, SSLeay and ISC licences. Copy All copies all of it as plain text.

See also: [What Is MediaFlow?](#what-is-mediaflow), [Terms of Use](#terms-of-use), [Contacting Support](/manual/troubleshooting/#contacting-support), [The Settings Window](/manual/settings-preferences/#the-settings-window)

<div class="chapter-nav" role="navigation" aria-label="Chapters">
<span></span>
<a href="/manual/">All chapters</a>
<a rel="next" href="/manual/setup-network/">Setup &amp; Network &rarr;</a>
</div>
