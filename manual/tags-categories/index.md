---
layout: manual
title: "Tags & Categories — MediaFlowSwift Manual"
description: "Give each clip one category; the category groups your clips and names the folder Organize Media files them into."
permalink: /manual/tags-categories/
generated: tools/import-guide.sh
---
# Tags & Categories

## Working with Categories

*Give each clip one category; the category groups your clips and names the folder Organize Media files them into.*

A category says what kind of clip this is. Each clip has one. When you organize media, the category name becomes a folder at the destination.

### Default Categories

- Uncategorized — What a newly imported clip has until you change it
- A-roll, B-roll, Establishing Shot, Interview, Cutaway, Time-lapse, Slow Motion, Product Shot, Action Shot, Behind the Scenes, Outtake
- Skip (don’t copy) — A special category that Organize Media never copies. It is stored as “Do Not Copy”

### Assigning a Category

- One clip — Select it and choose from the Category picker in the Edit tab. The change applies at once
- Several clips — Select them, choose from the Category picker in the Edit tab, then click Apply Category
- Either way — Right-click the selection and choose Set Category

If the project has a destination, MediaFlow then moves the clip’s organized file to the folder for its new category. It does this quietly and tells you only if a file could not be moved.

### Changing the List

The Edit tab only offers the categories the project already has. The list belongs to the project and is stored in the project file. To add, rename, retire or remove a category, open the project and go to Settings › Categories. A new category then appears in the Category picker and the Set Category menu.

> **Tip:** Workflow → Analyze… → Categories proposes a category for each uncategorized clip.

See also: [Adding, Renaming, Retiring and Removing Categories](#adding-renaming-retiring-and-removing-categories), [What Happens to Files When You Change a Category](#what-happens-to-files-when-you-change-a-category), [Working with Tags](#working-with-tags), [Auto-Suggest Categories](#auto-suggest-categories), [Organizing Media to Storage](/manual/organizing-media/#organizing-media-to-storage)

## Working with Tags

*Attach free-form, searchable tags to a clip; a clip has one category but can carry any number of tags.*

Tags are free-form labels you can attach to clips. Unlike categories (one per clip), you can have multiple tags per clip.

### Adding Tags

- Select a clip and go to the Edit tab
- Type in the tag field and press Enter or comma to add
- Multiple tags can be added at once by separating with commas

### Removing Tags

Click the X button on any tag chip to remove it.

### Batch Tag Operations

With two or more clips selected, the Edit tab shows three tag buttons:

- Add Tags — Appends tags to all selected clips
- Replace Tags — Replaces all existing tags with the new ones
- Clear Tags — Removes all tags from selected clips

> **Tip:** The search field above the media list matches tags, in this project or, with All Projects chosen, in every project in the shared database.

See also: [Working with Categories](#working-with-categories), [Filtering and Searching](/manual/managing-clips/#filtering-and-searching)

## Adding, Renaming, Retiring and Removing Categories

*Settings › Categories edits the open project’s category list; retire a category to stop using it without touching its clips.*

The category list belongs to the project. It is stored in the project file and can differ from shoot to shoot. Settings › Categories shows the list for the open project, with the number of clips in each category. With no project open, it shows Open a Project… instead.

### Retire or remove?

- Retire — stops offering the category for new work. Clips already in it keep it, nothing moves, and it still shows in filters, marked “retired”. Restore offers it again. Choose this when you are finished with a category but have clips filed under it
- Remove (the trash button) — takes the category out of the project. If clips still use it, you must choose where they go first. Choose this for a category created by mistake

### Add and rename

- Add — type a name in the New category field and click Add
- Rename — click Rename, type the new name and click Save. Every clip in the category is renamed with it, as one step you can undo

### Removing a category that has clips

1. Click the trash button beside the category
2. The dialog says how many clips still use it
3. Click “Move clips to…” for the category that should take them. Uncategorized is always offered first

### Files that are already organized

Organized clips sit in a folder named after their category. Renaming or removing a category here does not move those files. A note under the list tells you how many files are still in a folder with the old name. Run Workflow → Repair → Re-file folders by category to move them.

### Built-in categories

Uncategorized and Skip (don’t copy) are marked “built in”. Organize relies on their exact names, so they cannot be renamed, retired or removed.

### Starting new projects with this list

Click Also use for new projects. The next project you create starts with this list instead of the built-in one.

See also: [Working with Categories](#working-with-categories), [What Happens to Files When You Change a Category](#what-happens-to-files-when-you-change-a-category), [Auto-Suggest Categories](#auto-suggest-categories), [The Settings Window, Tab by Tab](/manual/setup-network/#the-settings-window-tab-by-tab)

## What Happens to Files When You Change a Category

*Changing a clip’s category applies at once and moves its organized copy to the matching folder in the background.*

Organize files each clip in a folder named after its category. When you change a clip’s category in the main window, the change applies at once, and MediaFlow then moves the clip’s organized copy into the folder for the new category. You do not start this and you do not confirm it.

### When it happens

- The project has a destination, and the clip’s file is already inside it. A clip that has not been organized yet has nothing to move; it is filed by its current category when you organize it
- You change the category of one clip, change it for a selection, or accept a proposed category
- Undoing a category change moves the file back the same way

### What you see

A row titled “Filing clips by category” appears in the progress panel while the move runs, then disappears. There is no summary and no Done button when it succeeds. You can carry on working while it runs: a rating, a note or another category change made meanwhile is kept, and the file then moves on to the folder for the newer category.

You hear about it only if it fails. If a file cannot be moved, the row stays and says so until you clear it, and the details are written to the log. The clip keeps its new category; its file is still in the old folder.

The row also stays if you open another project before the move finishes. The file has moved, but the project you left was closed before that could be saved in it, so its clip reads Missing when you open that project again. Workflow → Repair → Relink Missing Media…, pointed at the destination, finds it.

### Putting things right

Choose Workflow → Repair → Re-file folders by category. It checks every organized file in the project and moves each one into the folder its current category calls for. Use it after a failed move, for example when the destination was not connected, and after renaming a category in Settings › Categories, which does not move files by itself.

### When two projects share media

If this project shares its media files with another (see Duplicating a Project), nothing is re-filed. The category changes; the file stays where it is, because moving it would make the clip go missing from the other project. MediaFlow tells you when this happens.

See also: [Adding, Renaming, Retiring and Removing Categories](#adding-renaming-retiring-and-removing-categories), [Organizing Media to Storage](/manual/organizing-media/#organizing-media-to-storage), [Progress and Messages](/manual/getting-started/#progress-and-messages), [Working with Categories](#working-with-categories), [Undo and Redo](/manual/managing-clips/#undo-and-redo)

## Auto-Suggest Categories

*Let MediaFlow propose a category for every uncategorized clip and learn from your decisions.*

The Categories pass saves you from categorizing clips one at a time. Choose Workflow → Analyze… and click Run on the Categories row. MediaFlow examines every clip whose category is empty or Uncategorized and opens a review sheet with a suggested category for each, a confidence badge and the reason.

### Signals

- Filename keywords — interview, broll, aroll, timelapse, hyperlapse, slowmo, bts, outtake, establishing, cutaway, product, action, dnc, and similar
- Learned history — what you assigned before to clips from the same camera, or with a similar duration (needs at least 3 camera samples or 5 duration samples)
- Frame rate — 100 fps and above suggests Slow Motion; 5 fps and below suggests Time-lapse
- Duration — under 3 seconds suggests Skip (don’t copy), stored as “Do Not Copy”, because the clip is probably accidental. Length alone suggests nothing else

### Confidence

- High (green) — 80% or better, typically a filename keyword or a high frame rate
- Medium (orange) — 50–79%, typically a learned pattern or a very short clip
- Low (gray) — under 50%

### Reviewing

- The green check accepts one suggestion; the gray X dismisses it
- Accept All applies every remaining suggestion as a single undoable step
- Dismiss All closes the sheet without changes

Every category you assign, by hand or by accepting a suggestion, teaches the suggester. If you pick a different category than it proposed for a camera three times, it stops making that proposal. Settings › Categories › Category Learning shows what it has learned, and Reset Pattern Memory clears it. The Uncategorized Clips smart notification offers an Auto-Suggest button when five or more clips need a category.

See also: [Working with Categories](#working-with-categories), [Vision (AI Scene Analysis)](/manual/organizing-media/#vision-ai-scene-analysis), [The Analyze Hub](/manual/getting-started/#the-analyze-hub), [Undo and Redo](/manual/managing-clips/#undo-and-redo)

<div class="chapter-nav" role="navigation" aria-label="Chapters">
<a rel="prev" href="/manual/batch-operations/">&larr; Batch Operations</a>
<a href="/manual/">All chapters</a>
<a rel="next" href="/manual/shared-database/">Shared Database &rarr;</a>
</div>
