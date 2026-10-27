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

Most commands act on the selected clips: batch editing, organizing, rating, moving to another project and removing from the project.

- Click a clip to select it
- Cmd+Click adds a clip to the selection or takes it out
- Shift+Click selects every clip between the one you last clicked and this one, in Table and Grid view alike. Shift+Click again, further up or down, re-measures from that same starting clip. Cmd+Shift+Click adds the range to what is already selected
- Cmd+A selects every clip the current filter shows. While you are typing in a field, Cmd+A selects the text in that field instead
- Delete removes the selected clips from the project while you are working in the clip list or grid, as File → Remove from Project does. While you are typing in a field, Delete only deletes text
- In Grid view, with Keyboard Navigation turned on in System Settings, Tab reaches the cards. The arrow keys then select the card to the left or right, above or below, and Shift with an arrow key selects the range, as Shift+Click does. VoiceOver reads each card as a button and says which cards are selected

### The Selection Bar

While anything is selected, a bar at the bottom of the media list shows how many clips are selected and offers Organize Media, Set Category, Toggle Hero, Rate, Select (Hero, Maybe or Reject) and Remove from Project. When selected clips carry import proposals, it also offers buttons to accept them. Click Deselect All to clear the selection.

See also: [Table and Grid Views](#table-and-grid-views), [Context Menu Actions](#context-menu-actions), [Star Ratings & Selects](#star-ratings--selects)

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

*Narrow the media list with a filter, and search it, or every project, by name, notes, tags, category, camera or scene.*

A filter limits the media list to the clips you want to work on. One filter is active at a time; choosing another replaces it.

### Searching

`Cmd+F` — Find Clips

Type in the search field in the toolbar, or press Cmd+F to put the cursor there. With This Project chosen under the field (Cmd+F chooses it), the list narrows as you type, in Table and Grid view alike, and a line above it tells you how many clips match out of how many are in the project.

- A clip is found by its file name, its notes, its tags, its category, the camera it came from and its scene. Capital letters do not matter
- Type more than one word and every word must be found, each wherever it likes: gopro beach finds the beach clips from the GoPro, not every GoPro clip and every beach clip
- When weather lookup is on in Settings › Privacy, the conditions are searched too: rain, cloudy
- Searching works inside the current filter. With B-roll chosen in the sidebar, a search looks only at B-roll, and the line above the list says “in this filter”
- Click Clear Search, or the ✕ in the field, to see everything again. Opening another project clears the search

### Sidebar

- Library — All Media, Hero, Proxy queue
- Smart Groups — Not at destination (clips whose file is not at the organize destination), Missing, Uncategorized, Unrated, Unreviewed (clips with an import proposal nobody has confirmed), Reject candidates
- Cameras — the clips shot by one camera
- Places — the clips shot at one place. Shown when clips have GPS data

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

Choose All Projects under the search field, or press Cmd+Shift+F, to search the clips of every project in the shared database instead. The results take the list’s place, and Add to This Project copies the clips you choose into this project; see Searching All Projects.

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

The clip you keep gets the other’s details where it has none: a rating, a category (if it has none or is Uncategorized), a camera name, scene details and a favorite mark. Notes are both kept when they differ, and tags are added together. Where its file is doesn’t change. The other clip is taken out of the project the same way Remove from Project takes a clip out.

When the window opens, MediaFlow looks at each clip’s file: whether it is there, and how large it is (it reads only the size, never the whole file). A file is complete when its size matches the size recorded when the clip was added (or, with none recorded, another clip’s file of the same size). A smaller one says “This copy is incomplete” with both sizes; a larger one says “Size differs from what was recorded”; with nothing to compare against it says “Can’t be confirmed complete”; a file that isn’t there says “File missing”; and one on a drive that isn’t connected can’t be checked. The first clip with a complete file is marked Recommended, unless one of the files is larger than recorded: then sizes can’t tell which is the original, and none is. If you choose to keep one whose file is incomplete, missing or can’t be checked, MediaFlow says so and offers Keep the Complete One instead: the clip you keep gets the other’s category, rating and other details either way, and the question lists what it gets.

Subclips of a clip taken out move to the clip you keep: it is the same file, so their in and out points still hold. Edit → Undo doesn’t undo Keep This One; the question says what can and can’t be put back.

Two clips count as the same file when they have the same checksum, or, when either has none, the same file name, size and capture date. A subclip is never counted: it is meant to be there.

> **Tip:** Nothing here changes or deletes a file on your disk, and nothing is taken out until you confirm. Keep Both lasts while the window is open; the clips are listed again the next time you look.

See also: [Context Menu Actions](#context-menu-actions), [Editing Clip Metadata](#editing-clip-metadata)

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
