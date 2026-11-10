---
layout: manual
title: "Video Preview & Playback — MediaFlowSwift Manual"
description: "Play, pause, scrub and step frame by frame through the selected video in the preview panel."
permalink: /manual/video-preview-playback/
generated: tools/import-guide.sh
---
# Video Preview & Playback

## Video Playback Controls

*Play, pause, scrub and step frame by frame through the selected video in the preview panel.*

Select a video clip to load it in the preview panel. The controls appear below the picture:

- Seek slider — Drag to scrub through the clip. A marked in/out range is highlighted on it
- Step Back — Move back one frame
- Play / Pause — Start or stop playback
- Step Forward — Move forward one frame
- Time display — Current position and total length in minutes and seconds, for example 1:05 / 12:30
- Pop-out button — Open the video in its own window

Press Space to play or pause the video in the preview, whatever you clicked last: a clip in the list or the Grid, a tab, the preview itself. While you are typing in a text field, such as notes or the search field, Space types a space. With a photo showing, or no clip, Space does what it always did. At the end of a clip, Play and Space start it again from the start.

> **Tip:** Use frame stepping for precise positioning when extracting thumbnails or creating subclips.

Making proxies is part of the Studio plan; see Plans and Pricing.

See also: [Pop-Out Video Window](#pop-out-video-window), [Extracting Thumbnails and Subclips](#extracting-thumbnails-and-subclips)

## Pop-Out Video Window

*Open the video preview in a separate, resizable window with its own playback controls.*

Click the pop-out button at the right end of the preview controls to open the video in a separate window. The window has its own seek slider, step back, play/pause and step forward controls, and you can resize it freely.

> **Tip:** Use the pop-out window when you want a larger preview while still seeing the media list and metadata panels.

See also: [Video Playback Controls](#video-playback-controls)

## Extracting Thumbnails and Subclips

*Save the current video frame as a PNG image, or make part of a clip a clip of its own: added to this project under the clip it came from, or saved to a folder.*

Use the Workflow Tools tab in the metadata panel for these operations:

### Extract Thumbnail

Saves the current video frame (or the full image for a photo) as a PNG file. Move to the frame you want with the playback controls, click Extract Thumbnail, and choose where to save it.

### Create Subclip

Makes part of a video a clip of its own. Mark in and out points to choose the part, then click Create Subclip in the Workflow Tools tab, or choose Workflow → Create Subclip… (Cmd+U) with one video selected. What is taken depends on the marks:

- Both marks set — the range between them
- Only an in-point — from the in-point to the end of the clip, up to 30 seconds
- Only an out-point — from the start of the clip to the out-point
- No marks — a 5-second clip around the current position, starting 2 seconds before it

MediaFlow then asks what to do with it:

- Add to This Project — The part is saved as a new file in MediaFlow’s import working folder (Documents › MediaFlow Projects › Imports): in the folder the clip was imported to, when that folder is still there, otherwise in a Subclips folder there. It joins the project the way an imported clip does, is analyzed like one, and is listed under the clip it was cut from. Organize later files it beside that clip, in the same category and camera folder. A notice says when it is done, with a Show in Finder button
- Save to a Folder… — Saves the part as a file wherever you choose, without adding it to the project. The save panel opens in the folder you used last time. You can replace a file that is already there: the old file is set aside only once the new one is finished, and put back as it was if the new one cannot take its place. If the drive cannot confirm that it has written the new file, MediaFlow says the save did not finish and keeps the old file hidden beside it until the next save under that name. MediaFlow never saves over a file of any clip in the project, the clip being cut included: the clip itself, its working copy, the original on its card, its copy in Cleanup or its proxy, however the folder is reached

### What a Subclip Keeps

A subclip added to the project takes the category, camera, scene, shot, take, camera angle, tags and notes of the clip it was cut from. It does not take its rating, Select, favorite, circle take, review state or import suggestions: you judge the part on its own. Its date is the clip’s date plus the in-point, so it sorts where it was filmed. It remembers the clip it was cut from and where in that clip it starts and ends. A subclip cut from a subclip is linked to the original clip, in that clip’s time.

### The File

A subclip keeps the clip’s own format: a .mov stays a .mov and an .mp4 stays an .mp4. The picture and sound are copied as they are, so there is no loss of quality and it is quick. For a clip where that is not possible, the part is encoded afresh at high quality instead, and the notice says so. The name says where the part lies in the clip, for example GX010042_subclip_0m12s-0m41s.MP4, so several subclips of one clip never collide. In the working folder, a subclip whose name is already taken, by a file or by a clip of the project that still records it, gets _1 added to its name.

The export shows in the progress panel at the bottom-right of the window and in the Workflow Tools tab, each with a Cancel button, and carries on if you switch tabs or select another clip. Cancel stops it and keeps nothing of it, not even over a file you chose to replace. One subclip is made at a time. If MediaFlowSwift quits while it is making one, the unfinished file is hidden, and is removed the next time a subclip is saved under that name. Quit, and closing the window or the project, ask first while one is being made; see Quitting While Something Is Running in Saving Projects.

### Subclips in the Project

In the Table, a clip with subclips has an arrow at the left of its row and a label such as “2 subclips”. Click the arrow to see them beneath it (on macOS 13 there is no arrow, and they are always shown beneath it), in order of their in-points, each labeled with its range, such as 0:12–0:41. In the Grid, each subclip is a card of its own with a Subclip badge; hold the pointer over the badge to see the clip it came from. With a subclip selected, the metadata panel shows “Subclip of” and the clip’s name with the range, and a Show Parent button that selects that clip, clearing the search and the filter first when they hide it. See Table and Grid Views.

If you remove the clip a subclip was cut from, the subclip stays in the project as an ordinary clip on its own row, and the metadata panel says its parent is not in this project. Move to Project, Duplicate, Relink and Archive keep the link when the clip goes too. A project saved by an older version of MediaFlowSwift drops the links, and its subclips become ordinary clips.

### Marking In/Out Points

In the Workflow Tools tab, click Mark In (I) or Mark Out (O) to set a mark at the current playback position. You can also press I or O after clicking the preview panel, so that it has keyboard focus. The marked range is highlighted on the seek slider, the In, Out and Duration times are listed in the tab, and the Create Subclip button shows the duration. Click Clear in the Workflow Tools tab to remove both marks.

See also: [Video Playback Controls](#video-playback-controls), [Table and Grid Views](/manual/managing-clips/#table-and-grid-views), [Processing the Proxy Queue](/manual/batch-operations/#processing-the-proxy-queue)

## Reviewing Clips with the Keyboard

*A keyboard-driven review sheet for playing, rating, rejecting and accepting proposals on clips, one after another.*

Review is a focused sheet for evaluating clips quickly. Use the keyboard to play, rate, mark Hero, reject and move through your footage without touching the mouse. Open it from Workflow → Review (Cmd+Opt+R) or from the Review… button on the pipeline strip’s Review segment. Press ? at any time for an on-screen list of these keys.

### Playback Controls

- J / K / L — Shuttle reverse / stop / forward (press repeatedly to increase speed: 1×, 2×, 4×, 8×)
- Space — Play / pause, whatever you clicked last. At the end of a clip, it plays again from the start
- Left Arrow — Step back one frame
- Right Arrow — Step forward one frame
- Home — Jump to clip start
- End — Jump to clip end

### Rating & Tagging

- 1–5 — Set star rating (1 through 5 stars)
- 0 — Clear rating
- F — Toggle Hero. Taking Hero off also takes off the favorite and the circle take
- X — Toggle Reject
- C — Toggle circle take

### Import Proposals

- A — Accept the category and camera import analysis proposed for this clip
- R — Mark the clip a reject candidate (files it under Skip (don’t copy) when it has no category yet)

Both keys do what the menu commands do: you can undo them, MediaFlow re-files an organized copy to match, and the category suggester learns from them. A does nothing on a clip with no proposal, and R never replaces a category you chose yourself.

### Navigation

- Down Arrow — Next clip in queue
- Up Arrow — Previous clip in queue
- T — Toggle auto-advance (when ON, moves to next clip after rating)
- Escape — Close Review

### Display

- M — Toggle metadata overlay (filename, scene/shot/take, ratings, badges)
- I — Set mark in-point at current position
- O — Set mark out-point at current position
- ? — Show or hide the keyboard help overlay (Escape also closes it)

### Auto-Advance

With auto-advance on, rating a clip with 1–5, marking it Hero with F, rejecting it with X, or pressing A or R moves to the next clip after a short delay. Taking Hero or a Reject off, clearing the rating with 0, or pressing C stays on the clip. The last rating or mark you give a clip decides, so pressing X twice quickly stays put instead of skipping a clip, and Up or Down Arrow during the delay goes only where you asked. Auto-advance starts on; press T to turn it off or on, and MediaFlow remembers your choice. The Auto indicator in the bottom bar is green while it is on.

### Review Queue

The review queue is the clips your filters show in the main window when you open Review. Filter by category, scene, camera or smart group before you open Review to focus on a specific subset of clips. The bottom bar shows your progress (for example “12 of 47”) and how many clips in the queue have been rated.

The queue stays as it was until you close Review. A clip you rate while only unrated clips are showing stays in it: Up Arrow goes back to it, and the progress and the rated count keep moving.

> **Tip:** For the fastest selects workflow: click the Review segment of the pipeline strip to show only unrated clips, open Review, and use 1–5 to rate each clip.

See also: [Video Playback Controls](#video-playback-controls), [Extracting Thumbnails and Subclips](#extracting-thumbnails-and-subclips), [Star Ratings & Selects](/manual/managing-clips/#star-ratings--selects), [Keyboard Shortcuts Reference](/manual/keyboard-shortcuts/#keyboard-shortcuts-reference)

<div class="chapter-nav" role="navigation" aria-label="Chapters">
<a rel="prev" href="/manual/organizing-media/">&larr; Organizing Media</a>
<a href="/manual/">All chapters</a>
<a rel="next" href="/manual/batch-operations/">Batch Operations &rarr;</a>
</div>
