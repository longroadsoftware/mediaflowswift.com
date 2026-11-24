---
layout: manual
title: "Managing Clips — MediaFlowSwift Manual"
description: "Browse your media as a table with sortable columns or as a grid of thumbnail cards, and switch between them."
permalink: /manual/managing-clips/
generated: tools/import-guide.sh
---
# Managing Clips

## Table and Grid Views

*Browse your media as a table with sortable columns or as a grid of thumbnail cards, and switch between them.*

The media list shows the clips in the project that match the current filter. Use the Table / Grid control in the toolbar to switch between the two views.

### Table View

- One row per clip, with columns: Thumbnail, Filename, Type, Date, Duration, Category, Camera, Where, Audio, Rating, Select, Notes
- Click the Filename, Date, Where, Audio, Rating, Select or Notes header to sort by that column; click again to reverse the order. MediaFlow remembers the column and direction you chose, in every project and the next time you open the app; until you choose one, the list is sorted by Date, newest first
- A GoPro splits a long recording into several files, such as GX012324 and GX022324. In the Table they appear as one row: the first chapter, with a label such as “2 chapters · 20:54” giving the count and the total length. Click the arrow at the left of the row to show the other chapters beneath it; on macOS 13 there is no arrow, and the other chapters are always shown as rows beneath it. The recording stays together whatever column you sort by. Each row is still one file: rating, tagging or playing the first row affects that file only, so expand the row to work on the others. Files are grouped only when they come from the same camera, are the same kind of file and were made within a day of each other. To list every file on its own row, turn off Group Chapters of One Recording in the Filter menu
- A clip you made subclips of with Create Subclip… Add to This Project has an arrow too (on macOS 13, none: its subclips are always shown), and a label such as “2 subclips”. Its subclips are beneath it, in order of where they start in the clip, each labeled with its range, such as 0:12–0:41, whatever column you sort by. A GoPro recording’s first chapter shows its other chapters first and then its own subclips; a later chapter’s subclips are under that chapter’s own arrow, inside the recording. When a search or filter shows a subclip but not the clip it came from, or that clip has been removed from the project, the subclip is on a row of its own with a Subclip label; hold the pointer over the label to see where it came from
- Sorting by Filename follows Finder’s order, so clip2 comes before clip10, and keeps the chapters of one GoPro recording together: a GoPro splits a long recording into files such as GX012324 and GX022324, and MediaFlow lists them one after the other instead of sending the second to the end
- A Category or Camera shown in italics with a confidence badge is a proposal from import analysis. Click the cell to accept it
- Right-click any row for the context menu

### Grid View

- Shows clips as thumbnail cards in a grid that adapts to the window width
- Each card shows the filename, the category, a ★ when the clip is a favorite, a colored Where icon with its label, the camera name and, when they are set, its star rating and its Hero, Maybe or Reject badge
- Video thumbnails carry the clip’s duration in the corner
- The Grid shows every clip as a card of its own, subclips too: a subclip’s card has a Subclip badge, and holding the pointer over it names the clip it was cut from and the range
- Right-click any card for the context menu

See also: [Selecting Clips](#selecting-clips), [Context Menu Actions](#context-menu-actions), [Understanding the Where Column](/manual/troubleshooting/#understanding-the-where-column), [Extracting Thumbnails and Subclips](/manual/video-preview-playback/#extracting-thumbnails-and-subclips)

## Selecting Clips

*Select one clip or many in the media list, and use the selection bar to act on all of them at once.*

Most commands act on the selected clips: batch editing, rating, moving to another project and removing from the project.

- Click a clip to select it
- Cmd+Click adds a clip to the selection or takes it out
- Shift+Click selects every clip between the one you last clicked and this one, in Table and Grid view alike. Shift+Click again, further up or down, re-measures from that same starting clip. Cmd+Shift+Click adds the range to what is already selected
- Cmd+A selects every clip the current filter shows. While you are typing in a field, Cmd+A selects the text in that field instead
- Delete removes the selected clips from the project while you are working in the clip list or grid, as File → Remove from Project does. While you are typing in a field, Delete only deletes text
- In Grid view, with Keyboard Navigation turned on in System Settings, Tab reaches the cards. The arrow keys then select the card to the left or right, above or below, and Shift with an arrow key selects the range, as Shift+Click does. VoiceOver reads each card as a button and says which cards are selected

### The Selection Bar

While anything is selected, a bar at the bottom of the media list shows how many clips are selected and offers Organize Media, Set Category, Toggle Hero, Rate, Select (Hero, Maybe or Reject) and Remove from Project. When selected clips carry import proposals, it also offers buttons to accept them. Click Deselect All to clear the selection.

Organize Media in the bar does the same as Organize Media in the Workflow menu. With some clips selected, its sheet offers Organize All, the default, which copies the whole project, and Organize Selected, which copies only the selected clips. If every selected clip is on another Mac, the sheet says so and offers only the rest of the project.

See also: [Table and Grid Views](#table-and-grid-views), [Context Menu Actions](#context-menu-actions), [Star Ratings & Selects](#star-ratings--selects), [Organizing Media to Storage](/manual/organizing-media/#organizing-media-to-storage)

## Context Menu Actions

*The actions you get by right-clicking a clip, or a selection of clips, in Table or Grid view.*

Right-click a clip to act on it. If the clip is part of a selection, the action applies to every selected clip.

- Organize Media… — Copy the clips into the category folders at the project destination, verifying every copy
- Add to Proxy queue / Remove from Proxy queue — Queue the clips for thumbnail and proxy generation, or take them out
- Set Category — Assign a category (B-roll, Interview, Skip (don’t copy), and so on)
- Set Camera — Assign the camera that shot the clips. Clear Camera, at the bottom of this submenu, removes the camera
- Mark Hero / Clear Hero — Mark the clips Hero, or take Hero off. Clear Hero also takes off the favorite ★ and the circle take, which both mean Hero
- Clear Notes — Erase the notes on the clips
- Remove from Project — Take the clips out of the project. The files on disk are kept
- Move to Project… — Transfer the clips to a different project

### When a File Is Missing

Two more items appear only when the selection includes a clip whose file cannot be found:

- Relink… — Browse for the missing file yourself. Shown when a single clip is targeted
- Relink Missing Media… — Search for the missing files and reconnect them

See also: [Selecting Clips](#selecting-clips), [Filtering and Searching](#filtering-and-searching), [Relinking Missing Media](/manual/storage-maintenance/#relinking-missing-media)

## Filtering and Searching

*Narrow the media list with a filter, and search it, or every project, by name, notes, tags, category, camera or scene, with chips for exact values: category, camera, media type, dates, rating, length, picture, tags, status, audio and spoken words.*

A filter limits the media list to the clips you want to work on. One filter from the sidebar or the toolbar filter menu is active at a time; choosing another replaces it. A search, and the chips in the search field, narrow the list further inside that filter.

### Searching

`Cmd+F` — Find Clips

Type in the search field in the toolbar, or press Cmd+F to put the cursor there. With This Project chosen under the field (Cmd+F chooses it), the list narrows as you type, in Table and Grid view alike, and a line above it tells you how many clips match out of how many are in the project.

- A clip is found by its file name, its notes, its tags, its category, the camera it came from and its scene. Capital letters do not matter
- Type more than one word and every word must be found, each wherever it likes: gopro beach finds the beach clips from the GoPro, not every GoPro clip and every beach clip
- When weather lookup is on in Settings › Privacy, the conditions are searched too: rain, cloudy
- Searching works inside the current filter. With B-roll chosen in the sidebar, a search looks only at B-roll, and the line above the list says “in this filter”
- Click Clear Search, or the ✕ in the field, to see everything again. Clear Search takes away the words and the chips. Opening another project clears the search

### Search Chips

A chip asks for one thing exactly: Category: Interview, Camera: Sony FX3, Type: Video. Chips sit in the search field next to the words you type, and the list shows only the clips that match them all.

- Click the Filters button beside the search field to see the values the clips in this project have, each with how many clips it finds: categories, cameras and media types (Video, Photo, Audio) first, then the other kinds below. Click a heading to open it. Tick a value to add its chip; untick it to take the chip away
- Or start typing: gop suggests Camera: GoPro HERO12. Choose a suggestion to make it a chip
- Or type the chip itself: camera:sony, cat:broll, type:video, rating:4 (four stars and up). It becomes a chip when you type a space after it or press Return. Put a name with spaces in quotes: camera:“Roof GoPro”
- Chips of one kind give you either: Camera: Sony and Camera: GoPro show the clips from both cameras. Chips of different kinds must all match: Camera: Sony and Type: Video show only Sony videos
- A category chip finds the whole category, capitals aside: cat:broll finds B-roll, but cat:roll does not. A camera chip finds every camera whose name holds it: camera:gopro finds GoPro HERO12 and GoPro HERO11
- The line above the list names the chips, and each one shows under the project name in the sidebar too. To take away one chip, delete it in the field, untick it under Filters, or click it in the sidebar
- All Projects takes the same chips and finds the same clips in every project, except place, audio and spoken-word chips, which search This Project only; see Searching All Projects

### Kinds of Chip

- Date shot and Date imported — Today, This week, or the days you pick under Filters. Typed: shot:today, shot:week, imported:2026-10-01, shot:2026-10-01..2026-10-31
- Rating — a number of stars and up, or Unrated (rating:none)
- Select — Hero, Maybe or Reject (select:hero). A favorite is a Hero, so select:favorite finds the Hero clips
- Length — Under 10 s, 10 s to 1 min, 1 to 5 min, Over 5 min (length:under10s, length:10s-1m, length:1m-5m, length:over5m). A photo has no length
- Picture — 4K and up, whichever way round (picture:4k), and Slow motion, 100 frames a second and up (picture:slowmo)
- Tag and Scene — the whole tag or scene, capitals aside (tag:sunset, scene:“Scene 4”). Place — any part of the place name from the clip’s GPS data (place:gatlinburg)
- Status — Organized (at the organize destination), Not organized, Reviewed (its import proposal confirmed or changed), Not reviewed, In Cleanup, Archived. Typed: status:organized, status:not-organized, status:reviewed, status:not-reviewed, status:cleanup, status:archived
- Audio — Low or clipping, Silent, or Good, as the Audio row in Workflow → Analyze… found them (audio:issues, audio:silent, audio:good). A clip the check hasn’t looked at has none of these
- Spoken words — said:“golden hour”, or words typed under Spoken Words in Filters, finds the clips whose transcript has those words in that order. It reads only the transcripts already on this Mac and sends nothing anywhere. A clip with no transcript isn’t found; to make transcripts, choose Workflow → Analyze… and click Run on the Transcribe row
- is: works for a value that names its kind on its own: is:hero, is:unrated, is:4k, is:archived, is:silent

### Sidebar

- Library — All Media, Hero, Proxy queue
- Smart Groups — Not at destination (clips whose file is not at the organize destination, other than clips set to skip), Missing, Uncategorized, Unrated, Unreviewed (clips with an import proposal nobody has confirmed), Reject candidates
- Cameras — the clips shot by one camera, with how many there are. Only cameras that clips in this project came from are listed; the full list of camera names is in Settings › Cameras and in Set Camera
- Places — the clips shot at one place, with how many next to each. Shown when clips have GPS data. Click a place to show only its clips; its chip under the project name reads Place, and clicking it, or Clear All, returns to All Media

### Toolbar Filter Menu

Click the filter menu in the toolbar (its label shows the current filter) to choose:

- All Media — Show everything
- Hero — Show only clips marked Hero. A clip with the favorite ★ but no Hero mark is not listed
- Proxy queue — Show only queued clips
- Category — Pick one of the project’s categories
- Scene — Pick a scene logged in the Scene Log
- Audio Quality — Audio Issues, Good, Low Level, Clipping or Silent, from the Audio analysis pass
- Rating — Clips rated at least a chosen number of stars, or Unrated
- Select — Clips marked Hero, Maybe or Reject

### Clearing a Filter

The active filter appears as a chip under the project name in the sidebar. Click the chip to remove that filter, or Clear All to return to All Media. The pipeline strip also sets filters: clicking a segment shows that step’s remaining clips.

### Searching All Projects

Choose All Projects under the search field, or press Cmd+Shift+F, to search the clips of every project in the shared database instead. The results take the list’s place, and Use in This Project… moves or copies the clips you choose into this project; see Searching All Projects.

See also: [Table and Grid Views](#table-and-grid-views), [Understanding the Pipeline Strip](/manual/getting-started/#understanding-the-pipeline-strip), [Searching All Projects](/manual/shared-database/#searching-all-projects)

## Editing Clip Metadata

*Change the category, rating, select status, tags and notes of one clip or many from the Edit tab of the metadata panel.*

Select one or more clips, then open the Edit tab in the metadata panel.

### Single Clip

- Category — Choose a category from the menu. It is applied immediately
- Rating and Select — Rate the clip, or mark it Hero, Maybe or Reject
- Tags — Type a tag and press Enter or comma to add it. Click the X on a tag to remove it
- Notes — Type freeform notes in the text box

Retired categories are left out of the Category menu. A clip that already carries a retired category still shows it, so its value is not lost.

The tab also shows the clip’s Camera and Where, which you cannot edit here. To change the camera, right-click the clip and choose Set Camera, or click a proposed camera in the table’s Camera column to accept it.

### Batch Edit (Multiple Clips)

When several clips are selected, the Edit tab shows batch operations. Each one applies when you click its button:

- Apply Category — Set the chosen category on all selected clips
- Rating and Select — Rate all of them, or mark them all Hero, Maybe or Reject
- Add Tags — Add the typed tags to the tags each clip already has
- Replace Tags — Replace every selected clip’s tags with the typed ones
- Clear Tags — Remove all tags from the selected clips
- Set Notes / Clear Notes — Write the same notes on every selected clip, or erase them

> **Tip:** Category, favorite, tag and notes changes can be undone with Edit → Undo (Cmd+Z).

See also: [Working with Tags](/manual/tags-categories/#working-with-tags), [Working with Categories](/manual/tags-categories/#working-with-categories), [Context Menu Actions](#context-menu-actions), [Undo and Redo](#undo-and-redo)

## Clips Added Twice

*Find the video files that are in a project more than once, compare the clips side by side, and keep one or both.*

A video file can end up in a project twice: imported again from the same card, say, or added by a version of MediaFlow from before clips brought back from the shared database were merged with the ones the project had. Each copy is a clip of its own, with its own camera name, category, rating and notes.

1. Choose Projects → Find Clips Added Twice…
2. Each group shows the clips of one file side by side: whether its file is complete, camera, category, rating, notes, tags, favorite, where the file is and when the clip was added. What differs is in bold
3. Click Keep This One under the clip to keep (the one marked Recommended has a complete file), and confirm. Or click Keep Both to leave the group as it is

The clip you keep gets the other’s details where it has none: a rating, a category (if it has none or is Uncategorized), a camera name, scene details and a favorite mark. If either clip is marked Hero, the clip you keep is Hero; otherwise it keeps its own Maybe or Reject, or takes the other’s if it has none. Notes are both kept when they differ, and tags are added together. Where its file is doesn’t change. The other clip is taken out of the project the same way Remove from Project takes a clip out.

When the window opens, MediaFlow looks at each clip’s file: whether it is there, and how large it is (it reads only the size, never the whole file). A file is complete when its size matches the size recorded when the clip was added (or, with none recorded, another clip’s file of the same size). A smaller one says “This copy is incomplete” with both sizes; a larger one says “Size differs from what was recorded”; with nothing to compare against it says “Can’t be confirmed complete”; a file that isn’t there says “File missing”; and one on a drive that isn’t connected can’t be checked. The first clip with a complete file is marked Recommended, unless one of the files is larger than recorded: then sizes can’t tell which is the original, and none is. If you choose to keep one whose file is incomplete, missing or can’t be checked, MediaFlow says so and offers Keep the Complete One instead: the clip you keep gets the other’s category, rating and other details either way, and the question lists what it gets.

Subclips of a clip taken out move to the clip you keep: it is the same file, so their in and out points still hold. Edit → Undo doesn’t undo Keep This One; the question says what can and can’t be put back.

Two clips count as the same file when they have the same checksum, or, when either has none, the same file name, size and capture date. A subclip is never counted: it is meant to be there.

> **Tip:** Nothing here changes or deletes a file on your disk, and nothing is taken out until you confirm. Keep Both lasts while the window is open; the clips are listed again the next time you look.

See also: [Context Menu Actions](#context-menu-actions), [Editing Clip Metadata](#editing-clip-metadata)

## The Brand Kit

*Keep one copy of each intro, outro, title and music bed, and use it in your projects without copying it again.*

The Brand Kit holds the clips you use in every video: intros, outros, titles, lower thirds, Subscribe and end cards, and music beds. Each is copied into the Brand Kit once. A project that uses one links to that copy instead of having a copy of its own, so your disk holds it once however many projects use it.

The Brand Kit is in the sidebar, below Library, and is the same in every project on this computer. Its folder is chosen in Settings › Storage › Brand Kit folder; until you choose one, the first item you add goes to MediaFlowSwift Brand Kit in your Movies folder. The folder may be on a network drive, but not inside a project, a destination, your library or a card.

### Adding to the Brand Kit

1. Choose File → Add to Brand Kit…, click + beside Brand Kit in the sidebar, or drag files onto the Brand Kit
2. Give each file a name and a kind: Intro, Outro, Title, Lower third, Subscribe/End card, Music bed or Other
3. Click Add

Each file is copied into the Brand Kit folder and read back to check the copy matches, as every copy MediaFlowSwift makes is. The file you chose stays where it is. A file already in the Brand Kit isn’t added again: MediaFlowSwift says which item it already is. To put a clip that is already in a project into the Brand Kit, right-click it and choose Add to Brand Kit…; the project keeps its own file.

### Using an item in a project

Drag an item from the Brand Kit onto the clips, or right-click it and choose Use in Project. It joins the open project as a link: nothing is copied. A linked clip shows a purple Brand Kit badge in the Table and the Grid, and Brand Kit in the Where column. It plays, shows in Review, filters and goes into reports like any clip, and Final Cut Pro, DaVinci Resolve and CSV exports point at the Brand Kit’s one file. A project shared through a database can’t use Brand Kit items in this version: Use in Project says so and adds nothing.

Double-click an item for its details: its kind and length, and “Used in N projects on this computer” with the list. Only projects this computer knows are counted: the recent ones and those in your database. Projects on another computer that aren’t on your database server, or on an archive drive, aren’t. With a database server, every project on the server counts, other computers’ too, and the words say “on this computer or your database server”.

### What MediaFlowSwift never does to it

Free Up Space, Move to Cleanup, Clear Card, Delete Project, Delete Original, Return to Library and Tidy Up never delete, move or count a Brand Kit file. Organize leaves a Brand Kit clip where it is. Deleting a project removes only its links. A Brand Kit folder you chose before is still left alone after you choose another in Settings, as projects may still use files in it.

### Archive, Restore and the editing drive

Archive to USB puts a copy of each Brand Kit clip the project uses on the archive drive, in a folder named Brand Kit Copies, and reads it back to check it, so the drive restores on its own years later, on any computer. If a Brand Kit file isn’t on this computer, or can’t be copied, the archive says so and Delete Original is refused until an archive carries it.

Restore links each Brand Kit clip to your Brand Kit’s own file when it has the same file, so nothing is copied twice. When your Brand Kit doesn’t have it, the drive’s copy is added back to your Brand Kit, checked, and the clip links to it there. If your Brand Kit folder isn’t available (a network drive that isn’t connected), the restore says so and the clip keeps its link: connect it, or choose a Brand Kit folder in Settings › Storage, then choose Locate Brand Kit File… and pick the clip’s copy in the drive’s Brand Kit Copies folder.

Move to Editing Drive puts a checked copy of each Brand Kit clip beside the project on the drive, so the project plays on a computer without your Brand Kit. Return to Library links the clips to your Brand Kit again, and removes the drive’s copies with the editing copy, each only once your Brand Kit is checked to have the same file. A copy whose Brand Kit file isn’t here, or that was changed on the drive, is kept. Move Project keeps the links as they are.

### New versions

When you make a new cut of an intro, right-click the item and choose Replace…. The new file is copied in and checked as the item’s next version, and Use in Project links the newest from then on. Projects that already use the item keep the version they have, so a finished video never changes underneath you. In a project, right-click a Brand Kit clip and choose Update to Newest Version (or choose it in the item’s menu or details) to move that project, and only that project, to the new cut. If the file you choose is already in the Brand Kit, nothing is added, and MediaFlowSwift names the item that has it.

Old versions stay while any project on this computer uses them. Choose Workflow → Cleanup → Old Brand Kit Versions… to see the ones no project here uses. The Brand Kit holds the only copy of each, so they are never deleted: the ones you choose go to the Trash (on a network drive, to a folder at the top of the drive) after you confirm. Projects on other computers or archive drives aren’t counted, so they may still use one; it would show Brand Kit file not on this computer.

### Removing an item

Right-click the item and choose Remove from Brand Kit…. You are asked to confirm first; any projects on this computer that use it are listed, and with a database server the server’s projects too. If MediaFlowSwift can’t finish reading your projects within 5 seconds, it asks anyway and says the list may be out of date; it says so too when it can’t read the projects in your database, for example while the database is in use on another Mac. Its file goes to the Trash (on a network drive with no Trash, to a folder named Removed from Brand Kit by MediaFlowSwift at the top of the drive), so you can get it back; nothing is deleted. Projects that use it keep their links.

### Brand Kit file not on this computer

A Brand Kit clip whose file isn’t on this computer says so in the Where column: on another computer whose Brand Kit folder is somewhere else, MediaFlowSwift finds the file by the item and its checksum, and only when that fails does it say so. Right-click the clip and choose Locate Brand Kit File… to find it. MediaFlowSwift checks that it is the same file before using it, and copies it back into your Brand Kit when you find it somewhere else. The link is never removed by itself.

> **Tip:** The Brand Kit is part of Studio and Studio Pro. With no plan, clips already in your projects keep playing, reporting and exporting; adding to the Brand Kit, Replace, Use in Project and Update to Newest Version wait until a plan is open again.

See also: [Understanding the Where Column](/manual/troubleshooting/#understanding-the-where-column), [Context Menu Actions](#context-menu-actions)

## Star Ratings & Selects

*Rate clips 1-5 stars and mark them Hero, Maybe or Reject for fast editorial triage.*

### Star Ratings

Every clip can have a rating of 1 to 5 stars. Set it by clicking a star in the Rating column or in the inspector, with the keyboard shortcuts below, with Edit → Set Rating, with the Rate menu in the selection bar, or with the number keys in Review. Click the star a clip already has to clear its rating.

### Where you see them

- Table view — a Rating column and a Select column. Click either header to sort: best first puts five stars, then Hero, at the top, with unrated and undecided clips below and Reject last
- Grid view — each card shows its stars and its Hero, Maybe or Reject badge, when it has them
- Inspector — Rating and Select rows under Organization. With several clips selected, the rows show a value only when every selected clip agrees, and setting one sets them all
- Filter menu in the toolbar — Rating shows clips with at least that many stars, or Unrated; Select shows Hero, Maybe or Reject

### Keyboard Shortcuts

`Cmd+1-5` — Set star rating (1-5 stars)

`Cmd+0` — Clear star rating

`Cmd+Shift+H` — Mark as Hero

`Cmd+Shift+M` — Mark as Maybe

`Cmd+Shift+K` — Mark as Reject

### Select Status (Hero / Maybe / Reject)

The select status sorts clips three ways:

- Hero (green) — Best takes, definitely using these
- Maybe (orange) — Worth reviewing again, possible B-roll
- Reject (red) — Definitely not using. Stored as “Kill”, which is what it used to be called

### Batch Operations

Select multiple clips and use the Rate and Select menus in the selection bar, the Rating and Select rows in the inspector, or Edit → Set Rating and Edit → Select, to apply a rating or a select status to all selected clips at once. All batch operations support undo/redo.

### Export Integration

- FCPXML: Ratings are exported as keyword annotations (for example "★★★★ (4)"); clips rated 4+ stars or marked Hero are FCP favorites
- EDL CSV: Rating and Select Status columns are included in the export

> **Tip:** Press Cmd+0 to clear a rating, or Edit → Set Rating → Clear Rating and Edit → Select → Clear Status to remove ratings or selects from every selected clip.

See also: [Selecting Clips](#selecting-clips), [Undo and Redo](#undo-and-redo), [Reviewing Clips with the Keyboard](/manual/video-preview-playback/#reviewing-clips-with-the-keyboard)

## Undo and Redo

*Edit → Undo reverses metadata edits such as category, rating and tags. It does not reverse file operations.*

Edit → Undo (Cmd+Z) and Edit → Redo (Cmd+Shift+Z) reverse and re-apply metadata edits. The menu item names the step, for example “Undo Set Category 'B-roll' on 3 Clips”, “Undo Rate ★4 on 12 Clips”, or “Undo Accept 7 Category Suggestions”.

### Undoable

- Category, favorite, notes, tags and camera changes from the Edit tab, context menu or selection bar
- Star ratings and Hero / Maybe / Reject select status, including the Cmd+1–5, Cmd+0 and Cmd+Shift+H/M/K shortcuts and ratings made in Review
- Accept All in the Category Suggestions sheet (one step for the whole batch)
- A scene set on several clips at once, including scenes applied from GPS Scenes

### Not Undoable

- Imports, Organize Media, Re-file folders by category, Free Up Space, Clear Card and Archive to USB — these copy, move or delete files. Restore from Cleanup brings back files that Free Up Space staged; files deleted by Free Up Space or Clear Card cannot be brought back
- Edits made in the Scene Log tab, and Shot List and Storyboard edits
- Removing clips from the project (they can be re-imported)

Undo restores the previous values and saves the project. When the undone step changed the category of an organized clip, MediaFlow also moves the copy at the destination back into the matching folder, in the background.

Undo also puts the circle take back as it was before the step. A circle take you set or cleared after that step, with C in Review or in the Scene Log tab, goes back too, so check it after you undo.

Undo belongs to the project you made the change in. Opening, creating or closing a project, opening the same one again, Revert to Saved, or a project opening again from the shared database starts its undo history afresh, so Undo never changes a project you didn’t make the change in. If a step from another project ever reaches Undo, nothing is changed and a message says so. While a project may only be read, Undo changes nothing, renamed or removed categories and cameras included, and the step stays for later.

See also: [Editing Clip Metadata](#editing-clip-metadata), [Star Ratings & Selects](#star-ratings--selects), [Auto-Suggest Categories](/manual/tags-categories/#auto-suggest-categories)

<div class="chapter-nav" role="navigation" aria-label="Chapters">
<a rel="prev" href="/manual/importing-media/">&larr; Importing Media</a>
<a href="/manual/">All chapters</a>
<a rel="next" href="/manual/organizing-media/">Organizing Media &rarr;</a>
</div>
