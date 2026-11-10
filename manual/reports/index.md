---
layout: manual
title: "Reports — MediaFlowSwift Manual"
description: "Write a summary of the open project as a PDF, web page or spreadsheet, or as a hand-off file for an editor."
permalink: /manual/reports/
generated: tools/import-guide.sh
---
# Reports

## Generating Reports

*Write a summary of the open project as a PDF, web page or spreadsheet, or as a hand-off file for an editor.*

A report lists what is in the open project: totals, a breakdown, and a line for every clip. The project must contain at least one clip.

1. Choose Workflow → Plan & Deliver → Report
2. In the Export / Generate Report dialog, choose a format and click Generate
3. Choose the folder to save into

You do not type a filename. MediaFlow names the file after the project file, as name_report plus the format’s extension. If a file with that name is already there, it adds the date and time to the name rather than replace it.

### Formats

- PDF — A document for printing or sharing
- HTML — A web page that opens in any browser
- CSV — Rows and columns for a spreadsheet
- FCPXML (Final Cut Pro) — A Final Cut Pro import file with one event per category and, on every clip, its tags, rating, select status, scene and shot, notes and camera
- EDL CSV (Resolve / Premiere) — A spreadsheet-style clip list with bin-style column names, file paths, rating and select status. It is a list to read beside your clips, or to map if your editor imports metadata from a spreadsheet; it is not a timeline, and no editor needs it to open your clips

### What the PDF and HTML Reports Contain

- Project summary: total files, total duration and total size
- Categories: how many clips are in each
- Cameras: how many clips came from each camera
- A line for each clip with its filename, technical details, camera and notes
- A thumbnail for each clip

> **Tip:** For more control over what an editor receives, use NLE Template Export instead of the two hand-off formats here. Which file to send to which editor, and what each one carries, is in Choosing an Export for Your Editor.

See also: [Choosing an Export for Your Editor](#choosing-an-export-for-your-editor), [NLE Template Export](#nle-template-export), [Dailies Report](#dailies-report), [Day Summary](#day-summary)

## Choosing an Export for Your Editor

*Hand-off files come from three commands and overlap. Pick by editing application first, then by what should arrive with the clips.*

Hand-off files come from three commands in Workflow → Plan & Deliver: Report (its FCPXML and EDL CSV formats), NLE Template Export (three targets) and Export FCPXML… (one file). They overlap, so this topic says which one to send to which editor, and exactly what each file carries, as read from the files MediaFlow writes.

### By Editor

- Final Cut Pro — NLE Template Export with the Final Cut Pro target. It is the richest file: a library, events and keyword collections built from the fields you choose, markers, notes, ratings and an optional empty timeline. Report → FCPXML and Export FCPXML… write a plainer Final Cut Pro file with one event per category.
- DaVinci Resolve — Resolve imports FCPXML through File → Import → Timeline, but the FCPXML MediaFlow writes (version 1.11) may be newer than the versions your Resolve accepts, so try the Final Cut Pro target on a small project before you rely on it. The DaVinci Resolve target writes an edit decision list (.edl) for that same command; it carries much less: see below.
- Adobe Premiere Pro — There is no Premiere Pro target yet. Premiere Pro cannot import a Final Cut Pro .fcpxml file directly: Adobe’s help says to convert it first with a tool such as XtoCC, then import the converted XML with File → Import. What survives that conversion is up to the converter, not MediaFlow. The two CSV lists are reference files you can open beside your clips.
- Any other tool, or a spreadsheet — NLE Template Export with the CSV (Universal) target, or Report → CSV or EDL CSV.

### What Each File Carries

- NLE Template Export → Final Cut Pro (.fcpxml) — A library with events and keyword collections from the fields you choose. On every clip: tags, star rating, select status and the favorite mark, scene, shot and circle take as keywords plus one marker at the clip start with scene, shot, take and camera angle, an audio-quality marker (low, clipping or silent), the place name, notes, camera and GPS coordinates. Metadata Options switch each kind off, except place, camera and coordinates, which always travel.
- Report → FCPXML (Final Cut Pro) — One event per category. On every clip: tags, star rating, select status and the favorite mark, scene, shot and circle take as keywords plus one marker with scene, shot, take and camera angle, notes and camera. No place, coordinates or audio flags, and no options: every clip, with everything on.
- Export FCPXML… — The same file as Report → FCPXML, limited to clips that have a scene or shot type, named after the project with _markers.
- NLE Template Export → DaVinci Resolve (.edl) — An edit decision list: one cut per clip, one after another from 01:00:00:00, each with its length at the clip’s own frame rate (drop frame for 29.97 and 59.94), under a bin line for each group the Organization picker makes. Each cut’s source timecodes are the camera’s own: from the timecode recorded on the clip’s first frame to its end. The reel name is the one the camera recorded with its timecode, or else the clip’s file name without its extension, in the 8 capital letters, digits and underscores an EDL allows; two different names never share a reel. Every clip’s full name and camera are on comment lines. Scene, shot and take, place, coordinates, notes and rating are written as comment lines too. An EDL carries no file paths, so the editor must already have the clips to match the cuts against. Tags, select status and audio flags are not in the file at all.
- NLE Template Export → CSV (Universal) (.csv) — One row per clip: bin, filename, duration in seconds, category, camera, place and coordinates, plus the scene, shot, take, camera angle, circle take, rating, select status, favorite, notes, tags and audio-quality columns you leave on. No file paths.
- Report → EDL CSV (Resolve / Premiere) (.csv) — One row per clip with bin-style column names: Tape Name (the camera), Clip Name, Comment (the notes), Scene (holds the category), Shot/Take (holds the tags), Duration (at the clip’s own frame rate), File Path, File Size, Resolution, Codec, Frame Rate, Rating and Select Status. Scene, shot and take numbers from the Scene Log are not in it.

### What an EDL Is

An edit decision list is a plain-text list of cuts in the CMX 3600 form: for each clip an event number, a reel name, the track, the edit type and in and out timecodes, with the clip’s name on a comment line. Lines that start with an asterisk are comments and do not affect the edit. An editor’s EDL import reads the cuts and the clip names; the bin, notes and rating lines MediaFlow adds are there for you to read in a text editor, and do not become bins, notes or ratings on import. The Final Cut Pro file is the one that carries organization and notes.

The timeline side of the .edl is counted at the frame rate most of your clips use, and a clip with no frame rate is counted at 24. Each cut is placed right after the one before it, starting at 01:00:00:00, drop frame at 29.97 and 59.94 unless your clips’ own timecode is non-drop. An EDL writes each frame number in two digits, so footage faster than 60 frames a second is counted at a slower rate its frames fall on: 119.88 at 59.94, 120 and 240 at 60, and 100 at 50. Timelapse at 12.5, 7.5 or 6.25 frames a second, which no whole rate counts, is counted at the rate it divides into: 25, 30 or 25. The source side is each clip’s own timecode: cameras such as Sony, Canon and Blackmagic start every clip at a timecode of their own, say 10:12:03:00, and the cut runs from there for the clip’s length, written drop frame (with a semicolon, 10:12:03;00) or not, as the camera recorded it, except for the two kinds of footage below. Footage shot at twice its timecode’s rate, such as 59.94 with 29.97 timecode or 50 with 25, is counted at the footage’s rate, like the timeline. Footage whose frames don’t line up with its timecode’s, such as 23.976 footage from a camera set to 29.97 drop frame timecode, is counted at the footage’s own rate, non-drop, from the frame nearest the camera’s timecode, the same start the Final Cut Pro file uses. A clip that runs past midnight ends at 24:00:00:00 or later rather than starting again at zero; the export names such clips before you save, and if Resolve refuses one of those cuts, conform it by clip name. A clip with no timecode, such as an iPhone or most GoPro and DJI clips, starts at 00:00:00:00, as your editor counts it. Lengths are whole frames, rounded down, so a cut never runs past the end of its clip, and a clip longer than 24 hours is cut to 24 hours: the export tells you before you save. DaVinci Resolve finds each clip by its reel name and source timecode: the reel is the name the camera recorded with its timecode, or else the file name without its extension, in capitals. A name of up to 8 letters, digits and underscores, such as C0001 or GX010042, is the reel as it is. Any other name, longer or with spaces or punctuation, becomes its first four letters and digits and four characters worked out from the whole name, the same for that file in every list, which no longer matches the file; then set Resolve’s conform to match by the clip name on the comment line. MediaFlow reads the timecode only from a timecode track inside the clip’s file, not from a separate XML file or from MXF files; those clips start at 00:00:00:00. It reads it when it imports a clip; for a clip imported by an earlier version, it reads the file when you first export that clip, if the file is there, and remembers what it found. Cancel stops the reading and the export. The durations in the EDL CSV are counted the same way, at each clip’s own frame rate.

See also: [Generating Reports](#generating-reports), [NLE Template Export](#nle-template-export), [Logging Scene, Shot and Take](/manual/organizing-media/#logging-scene-shot-and-take)

## NLE Template Export

*Hand your categories, scenes, ratings and notes to Final Cut Pro as an import file, or to any other tool as an edit decision list or a spreadsheet.*

The NLE Template Export creates a structured project file that you can import into your editing application. With the Final Cut Pro target it transfers your MediaFlow organization — categories, cameras, scenes, tags, ratings, and notes — so your clips arrive pre-organized and annotated. The DaVinci Resolve target carries much less and the CSV target is a flat spreadsheet; Choosing an Export for Your Editor lists exactly what each file holds.

### How to Export

1. Open a project with imported media
2. Choose Workflow → Plan & Deliver → NLE Template Export
3. Select your target NLE: Final Cut Pro, DaVinci Resolve, or CSV
4. Set the organization, clip filter and metadata options
5. Click Preview to see the file MediaFlow would write, if you like
6. Click Export… and choose where to save

### Final Cut Pro (FCPXML)

The FCP export generates an FCPXML v1.11 file that maps your MediaFlow metadata to FCP’s organizational structure:

- Library — Named after your MediaFlow project (editable). This becomes the top-level .fcpbundle container in FCP.
- Events — Choose which MediaFlow field becomes FCP Events: Category (for example A-roll, B-roll, Interview), Scene, Camera, Camera angle, Shooting Day, Tags, or Location.
- Keyword Collections — Choose a secondary field for sub-grouping within each Event: for example Camera within Category events, so your A-roll event has keyword collections for iPhone, Drone, GoPro, etc. Location can be used at either level. Each collection is created empty and every clip carries a keyword with its name, so the clips show up under the collection in Final Cut Pro while staying in their Event.
- Empty Timeline — Optionally creates an “Edits” event with an empty FCP Project ready for editing.

Every clip starts at its camera’s own timecode, when it recorded one, so Final Cut Pro finds the whole clip in its media, and every length and marker falls exactly on a frame, at 23.976, 29.97 and 59.94 as at 24, 25 and 30. Each clip carries its frame rate, size and drop frame or non-drop timecode. A Sony clip whose timecode is in the XML file the camera writes beside it on the card (C0001M01.XML for C0001.MP4) takes it from there when you import it from the card, and a subclip saved as an .mp4, which keeps no timecode of its own, takes the timecode of the clip it was cut from at its in-point. 23.976 footage recorded with 29.97 drop frame timecode starts on its own frame nearest the camera’s timecode and is marked non-drop, as is its timeline, since drop frame belongs only to 29.97 and 59.94. Each clip keeps its own frame rate exactly, slow motion included (47.95, 48, 100, 119.88, 120, 240), and so does timelapse at 12.5, 7.5 or 6.25. Only a phone or screen recording with a varying rate, which measures something like 29.83, is taken as the nearest standard rate, here 29.97. The empty timeline takes the size most of your clips have and a frame rate Final Cut Pro offers that their frames fall on: their own rate when Final Cut has it, otherwise one they divide into, so 119.88 footage gets a 119.88 timeline, 100 a 50 one and 240 a 120 one, and slower footage one it divides into, so 12.5 gets a 25 one (1080p at 23.98 when there is no video). Export FCPXML… and Generate Report show how many clips they have read while reading timecodes, and can be cancelled there; a cancelled export or report writes nothing. Photos arrive as 4-second stills and sound files as sound only.

Metadata mapping: notes become FCP comments, camera names become Reel metadata, star ratings become keywords, clips rated 4 or 5 stars or marked Hero become FCP favorites, the select status (Hero, Maybe or Reject) is added as a keyword, scene/shot/take data become markers at clip start, an audio-quality flag (low, clipping or silent) becomes a marker, tags become keywords, and GPS coordinates are embedded as FCP scene/shot metadata with the reverse-geocoded location name as a keyword.

Rejected clips are not marked as rejected in Final Cut Pro. They arrive with the keyword for their select status, so you can filter on it there.

### Location-Based Organization

When your clips have GPS coordinates (common with phone and drone footage), MediaFlow reverse-geocodes them into readable place names. You can use Location as an Event or Keyword Collection field to automatically group clips by where they were shot — for example, an event per shooting location like “Malibu Beach” or “Downtown LA”. Clips without GPS data are grouped under “Unknown Location.”

> **Tip:** Combine Location events with Camera keyword collections to see exactly which cameras shot at each location, or use Category events with Location keywords to see where your A-roll vs B-roll was captured.

> **Tip:** A live preview at the bottom of the FCP section shows exactly how your Library → Events → Keywords tree will appear in FCP’s browser, using real data from your project.

### DaVinci Resolve

Resolve imports FCPXML through File → Import → Timeline, but the FCPXML MediaFlow writes (version 1.11) may be newer than the versions your Resolve accepts, so try the Final Cut Pro target on a small project before you rely on it. The DaVinci Resolve target writes an edit decision list (.edl) instead: one cut per clip, placed one after another on the timeline, from the camera’s own timecode on the clip for the clip’s length at its own frame rate, with the reel name the camera recorded or else the file name as its reel (in 8 letters, digits and underscores), a bin line for each group the Organization picker makes, and scene, shot and take, place, notes and rating as comment lines. An EDL carries no file paths, tags, select status or audio flags, and its comment lines do not become bins, notes or ratings when it is imported. What each file carries is listed in Choosing an Export for Your Editor.

### Adobe Premiere Pro

There is no Premiere Pro target. Premiere Pro cannot import a .fcpxml file directly: Adobe’s help says to convert it first with a tool such as XtoCC, then import the converted XML with File → Import. What arrives in Premiere is up to the converter.

### Bins for Resolve and CSV

For the DaVinci Resolve and CSV targets, the Organization picker decides how clips are grouped: By Category, By Scene, By Camera, By Shooting Day, By Place, or Flat (No Bins).

### CSV (Universal)

The CSV export creates a spreadsheet-compatible file with all clip metadata organized into columns. Use this as a reference alongside manual import, or for custom workflows with other tools.

### Clip Filtering

- All Clips — Export every clip in the project
- Rated Only — Export only clips that have been rated
- Favorites Only — Export only clips with the favorite ★. F, Toggle Hero and Mark Hero set it along with Hero; Hero chosen from Select alone does not count. Taking Hero off, or choosing Maybe, Reject or Clear in Select, removes it
- Selected Only — Export only the currently selected clips in the media list

### Metadata Options

Choose what travels with each clip: Notes, Scene/Shot, Ratings, Audio Flags and Tags. Turn off anything you do not want in your NLE. The .edl never carries Tags or Audio Flags, whichever way those two are set.

Workflow → Plan & Deliver → Export FCPXML… is a separate, simpler command. It writes the same Final Cut Pro file as Report → FCPXML (one event per category, with each clip’s keywords, marker, notes and camera), but only for clips that have a scene or shot type, and names it after the project with _markers.

See also: [Choosing an Export for Your Editor](#choosing-an-export-for-your-editor), [Generating Reports](#generating-reports), [Format Conformance Checker](/manual/organizing-media/#format-conformance-checker)

## Dailies Report

*Generate a structured dailies report organized by shooting day, scene, and camera.*

The Dailies Generator creates a report of your footage organized by shooting date, with optional grouping by scene and camera. It highlights circle takes and includes ratings, timecodes, and notes. Output is available in HTML, CSV, or plain text format.

### How to Use

1. Open a project with media clips
2. Choose Workflow → Plan & Deliver → Generate Dailies
3. Configure grouping options and content to include
4. Select the output format (HTML, CSV, or Plain Text)
5. Click Generate Dailies and choose a save location

### Configuration Options

- Group by Scene — Organize clips under their assigned scene names
- Group by Camera — Sub-group clips by camera label or source device
- Circle Takes — Highlight the best takes at the top of each day
- Ratings — Show star ratings for each clip
- Timecodes — Include the time of day each clip was recorded
- Notes — Include any notes attached to clips

### Output Formats

- HTML — Dark-themed web page with styled tables, ideal for sharing with a director or editor
- CSV — Spreadsheet-compatible format for data analysis
- Plain Text — Simple text report suitable for email or printing

> **Tip:** For the most useful dailies report, make sure clips have scene assignments, camera labels, and ratings before generating.

See also: [Smart Selects](/manual/organizing-media/#smart-selects), [NLE Template Export](#nle-template-export)

## Day Summary

*A one-screen wrap-up of everything imported on a shooting day, ready to paste into a message.*

The Day Summary is a wrap-up you can send at the end of a shooting day. Choose Workflow → Plan & Deliver → Day Summary… and pick a date in the header. It covers every clip imported on that date, by import date rather than capture date.

### What It Shows

- Clips, total Duration, and total Size
- Cameras — Clip count per camera
- Categories — Clip count per category
- Highlights — How many clips are favorited and how many are marked Hero
- Issues — Clips flagged Clipping, Low or Silent by the Audio pass, and clips whose files are Missing

Click the Copy button to place a plain-text summary on the clipboard for a text message, e-mail, or production log. For a printable per-scene breakdown use Generate Dailies instead.

See also: [Dailies Report](#dailies-report), [Audio Levels](/manual/organizing-media/#audio-levels), [Generating Reports](#generating-reports)

<div class="chapter-nav" role="navigation" aria-label="Chapters">
<a rel="prev" href="/manual/storage-maintenance/">&larr; Storage Maintenance</a>
<a href="/manual/">All chapters</a>
<a rel="next" href="/manual/publishing/">Publishing &rarr;</a>
</div>
