---
layout: manual
title: "Setup & Network — MediaFlowSwift Manual"
description: "The welcome tour explains the app; the Setup Wizard then asks where your footage goes and only what follows from that, and you can skip any of it."
permalink: /manual/setup-network/
generated: tools/import-guide.sh
---
# Setup & Network

## Setting Up MediaFlow

*The welcome tour explains the app; the Setup Wizard then asks where your footage goes and only what follows from that, and you can skip any of it.*

A new copy of MediaFlow knows nothing about your equipment: no network share, no shared database, no destination. Four things greet you on first launch. First come the terms of use, which you agree to once (see Terms of Use). The welcome tour then explains the app, and the Setup Wizard asks where your storage is. Last, MediaFlow asks whether to check mediaflowswift.com for new versions (see Updating MediaFlow).

You do not have to answer anything. MediaFlow works on a single Mac, with or without an external drive, and needs no network share; every answer can be changed later in Settings. Archive to USB, Restore and Search All Projects do need a database, so on a single Mac the wizard makes a small one for you unless you say no (see below).

### The welcome tour

Four pages: Welcome, the workflow, your workspace, and a closing page of tips. Use Next to move on, Skip to leave, and Get Started on the last page. Help → Getting Started Guide opens it again at any time.

### The Setup Wizard

The wizard opens when the tour closes, if nothing is set up yet. It does not open when your saved setup was put back at launch. Its first answer decides which steps follow: two for this Mac or an external drive, four for a network share. A step you leave behind by changing that answer changes nothing: a server typed on the database step, for instance, is put back as it was, password included.

1. Where your footage goes — This Mac, An external drive, or A network share. Nothing is set by this answer alone; it chooses the steps that follow and where the folder picker opens
2. Your network share (a network share only) — shares that are connected now are listed with a Use this button. Look for servers searches the network, and Connect to… opens a server in Finder so you can sign in and mount a share. Use this takes effect as soon as you click it
3. Shared database (a network share only, or when a database is already set up) — choose None, Database file (a single file, one Mac at a time) or Database server (several Macs at once). For a database file, click New Database File… to choose where it will live (MediaFlow makes it at once, and connects when you click Done), or Use an Existing Database File… to use one another Mac made. For a server, fill in the connection fields
4. Where organized media goes — click Choose… to pick the default destination for new projects. It opens in your Movies folder for this Mac, among your drives for an external drive, and on the share for a network share. If the folder you pick is not where your first answer said, the step says so; a project can always use a different one

### A database on a single Mac

If you answer This Mac or An external drive, this Mac has no database yet and no network share is chosen, the last step also shows Keep a database of my projects on this Mac, ticked. MediaFlow keeps a list of your projects and archive drives in it, so Archive to USB, Restore and Search All Projects work. When you click Done, MediaFlow makes it, a file called mediaflow.db in its own folder on this Mac (Database, in MediaFlow’s Application Support folder), and connects to it. It stays on this Mac, isn’t synced, and Time Machine backs it up; Settings › Storage shows where it is, with Show in Finder. Untick it to go without; Skip makes nothing either. If a MediaFlow database is already there under that name, it is used rather than replaced, and if something else has that name, nothing is made and MediaFlow says so. If a network share is chosen in Settings › Network, the step makes nothing and says to set the database up in Settings › Storage instead, where it can go on the share for every Mac. To keep the database somewhere you choose, use New Database File… there. A Mac that already has a database, on or off, is never given a second one. You can make or choose one later in Settings › Storage, or with the offer Archive to USB makes.

### Skipping

- To pass over one step, click Next without answering it
- Skip (Skip setup on the first page) closes the wizard and keeps the answers you have given so far
- A step you leave unanswered changes nothing, including a setting that was already in place

### Running it again

Choose Settings › General › Run Setup Again…. The wizard opens showing your current settings, not an empty form: the first answer reads A network share when one is chosen in Settings › Network, and otherwise follows your default destination. Choosing None on the database step turns the shared database off. Answering This Mac or An external drive does not forget a network share you chose before; Forget in Settings › Network does that.

See also: [Terms of Use](/manual/getting-started/#terms-of-use), [Choosing and Connecting Your Network Share](#choosing-and-connecting-your-network-share), [Database File or Database Server?](/manual/shared-database/#database-file-or-database-server), [Saved Setup: A Copy of Your Settings](#saved-setup-a-copy-of-your-settings), [The Settings Window, Tab by Tab](#the-settings-window-tab-by-tab), [What Is MediaFlow?](/manual/getting-started/#what-is-mediaflow)

## Choosing and Connecting Your Network Share

*Settings › Network is where you tell MediaFlow which network share holds your projects and media.*

MediaFlow has no built-in network share. Until you choose one, Settings › Network reads “No network share chosen yet” and nothing is assumed. A share is optional: you can organize to any folder, including a drive attached to this Mac.

When you do choose a share, MediaFlow uses it as the starting point for file pickers, as the suggested place for the shared database file, and as the host offered for a database server. It also connects the share when it is needed: see below.

### Choose a share

1. Open Settings › Network
2. If the share is already connected, it appears in the list. Click Use this beside it. The button reads In use for the share you have chosen
3. If it is not listed, click Look for servers, then pick the server from the Connect to… menu. The server opens in Finder, which asks for the password and shows its shares
4. Mount the share you want in Finder, return to Settings, and click Use this

Picking a mounted share fills in both the share name and its address, so there is nothing to type. If you prefer, open “Type the address instead” and enter an smb:// address. A name ending in .local keeps working when the server gets a new network address.

### Connected when it is needed

Once a share is chosen, MediaFlowSwift connects it by itself whenever something needs it and it is not mounted: a couple of seconds after launch, a few seconds after the Mac wakes, and before opening a project whose file lives on it. The status area reads “Connecting to ‘share’…” meanwhile. The launch and wake attempts are made once, so a share that cannot be reached raises at most one password prompt; opening a project tries again, because you are there to answer. If the share still cannot be connected, the project is not opened and a message says so, rather than opening it from the database with every clip called missing. A project on some other drive that is unplugged gets the same treatment: the message names the drive.

If the share is dropped while MediaFlowSwift is open, because the network blinked or the server stopped answering for a minute and macOS removed it, MediaFlowSwift reconnects it. It waits 10 seconds before the first try, then 30 seconds, one minute and two minutes between tries, then five minutes, until the share is back. A strip at the top of the window says so, with Try Now and Stop. These tries never ask for a password; if macOS has not saved it, use Connect now. A share you eject in Finder is left alone, and nothing is tried while the Mac sleeps. Finder may still list the server under Network while the share itself is gone: seeing the server does not mean the share is connected.

While a drive is not connected, the clips on it read Volume not connected in the Where column, in grey, and Re-check files leaves their last known state alone. Nothing is called Missing because its drive is away.

### Passwords

macOS asks for the share’s password, not MediaFlow. MediaFlow never sees or stores it. If you let macOS remember the password, macOS keeps it in your Keychain and uses it to reconnect.

### Connect now and Forget

- The status line reads Connected with the mount path, Looking for the share…, or Not connected
- Connect now tries the stored address, then searches the network, then mounts the share. It is available only while the share is not connected
- Forget stops using this share. Settings that follow it go back to unset. The path to your database file is kept

### No servers found

Check that the server is switched on and on the same network. Also check that MediaFlow is allowed to use the local network: System Settings › Privacy & Security › Local Network.

See also: [Setting Up MediaFlow](#setting-up-mediaflow), [Updating MediaFlow](#updating-mediaflow), [Database File or Database Server?](/manual/shared-database/#database-file-or-database-server), [Database Connection Issues](/manual/troubleshooting/#database-connection-issues), [Network Share 'Resource Busy' Errors](/manual/troubleshooting/#network-share-resource-busy-errors), [Network Drive Settings for Working Away from Home](#network-drive-settings-for-working-away-from-home)

## Saved Setup: A Copy of Your Settings

*MediaFlow keeps a copy of your settings outside macOS preferences and puts it back if the settings are ever lost.*

The saved setup is a small file that holds your MediaFlow settings. It lives apart from the macOS preferences file, so a lost or reset preferences file does not take your setup with it. You do not need to do anything: it is written every time you quit, when you finish the Setup Wizard, and before an update installs.

Passwords, API keys and your YouTube sign-in are never in it. They stay in your Keychain.

### What it holds

- Your network share and its address
- The shared database settings: on or off, the store, the file path, and the server host, port, database and user
- The default destination, recent destinations and the verification setting
- Whether to check for new versions automatically
- Import analysis and model settings, including the daily spending limit. What has been spent today is kept too, and a restore only ever fills it in
- The category and camera lists that new projects start with
- The names you gave your cameras, and the categories MediaFlow has learned to suggest
- Your YouTube client ID, if you entered one, and which permissions Google gave at your last sign-in. A restore only ever fills in the permissions
- Which smart notifications are on
- How you left things: the welcome tour, sort orders, the layout, Review’s choices, and the folders you last chose

### What it never holds

API keys, the YouTube client secret and sign-in, and the database password. They stay in your Keychain. The saved setup is a plain file, and a secret copied into it would be readable by anyone who opened it. After a restore on a Mac with an empty Keychain, enter those again and sign in to YouTube again.

### When it is restored automatically

Only at launch, and only into a copy of MediaFlow that has nothing configured: no network share, no database file, no server and no default destination. It never overwrites settings you are already using.

### Doing it by hand

- Settings › General › Save Setup Now writes the file immediately. The line above the buttons shows when it was last saved
- Restore Saved Setup puts the saved settings back

> **Warning:** Restore Saved Setup overwrites the settings on this Mac with the saved ones, except today’s spend and the YouTube permissions, which it only fills in where this Mac has none. It asks you to confirm first. The saved copy is normally the one written when you last quit.

That way a restore never lowers what you have spent today, and the YouTube permissions stay with the sign-in in this Mac’s Keychain.

See also: [Setting Up MediaFlow](#setting-up-mediaflow), [Updating MediaFlow](#updating-mediaflow), [The Settings Window, Tab by Tab](#the-settings-window-tab-by-tab), [Connecting to a Database Server](/manual/shared-database/#connecting-to-a-database-server)

## Updating MediaFlow

*MediaFlow updates itself from the MediaFlow website and keeps your settings.*

MediaFlow looks for a newer version of itself, tells you when there is one, and installs it when you say so. Your settings and projects are not touched by an update.

### Where new versions come from

New versions come from the MediaFlow website. MediaFlow reads one small file from mediaflowswift.com that names the newest version, and nothing about you or your Mac goes with the request. When there is a newer version, it also reads that version’s list of changes from mediaflowswift.com, to show you what is new. Every copy of MediaFlow updates this way; earlier versions could also update from a copy of the app on a share, and that choice is gone.

### Who may sign an update

An update is installed only if it was signed with MediaFlowSwift’s Apple Developer ID. Nothing else can be handed to you as an update, whatever the website says. Since 1.10.19 every copy is signed with that Developer ID and notarized by Apple, so macOS opens it without a warning and treats each update as the app it already knows: your Keychain does not ask again after an update. The Local Network switch is another matter: on some versions of macOS the new build is still treated as a stranger, and the switch needs turning off and on once after an update. MediaFlowSwift now tells Launch Services about the new copy before reopening, which is meant to stop that; if it does not, the app says so and offers the switch.

### Automatic checks

MediaFlow asks once whether to check mediaflowswift.com for new versions: on a new copy after the setup, and on a copy updated from an earlier version the next time it opens, unless you had already set the switch. Until you say yes it never looks by itself. Not Now is an answer too and is not asked again; the switch is in Settings › Privacy, beside the other online features, and in Settings › General. Check for Updates… in the app menu and Check Now in About look whenever you choose them, whatever the answer. With “Check for new versions automatically” on, MediaFlow looks shortly after launch, when the Mac wakes, and then every few hours; while the website cannot be reached it tries again every half hour. Checking reads one small file, and that version’s list of changes from mediaflowswift.com when there is a new version.

### When a new version is found

A window opens over the main window saying which version is available and which one you have, with the new version’s headline and what is new in it. It never opens while an import, organize, copy, archive, export, upload to YouTube or other work is running, while another sheet or dialog is open, Settings included, while you are typing, or while another MediaFlow window such as Help is the one you are using, and not while a card you have just connected is being offered for import: it waits until nothing is going on for a few seconds, then asks. If you are working in another app, MediaFlow does not take the screen from it; the window waits over MediaFlow’s main window, and the Dock icon bounces once.

- Install Now (Return) installs the new version straight away, with the same checks as the Software Update window: never while something is running, and your work is saved first. The window then shows the install as it goes
- Later (Esc) closes the window. MediaFlow asks again the next time it opens, or after about a day if it stays open
- Skip This Version closes the window and does not ask about that version again. A newer version is asked about as usual
- Install Now and Skip This Version work only once the keyboard has been still for a moment: while keys keep coming, even a Return held down, Return and Space do nothing there, and neither does a click on either button. The same moment passes after the window opens and after you come back to MediaFlow from another app, so a key you were pressing for something else cannot install or skip a version. Tab and Shift-Tab between the window’s own buttons do not count, so with Full Keyboard Access you can Tab to a button and press Space straight away. Later (Esc) always works

Whatever you answered, Check for Updates… in the app menu always offers the newest version, even one you skipped or put off, and you can install it from there at once. Later in the Software Update window means the same as Later in the question. A version you skipped is shown in Settings › General under Updates, with Offer It Again to be asked about it once more.

### Installing

1. Choose Check for Updates… in the app menu, or click Install Now when a new version asks
2. From Check for Updates…, click Install Update. The button is unavailable while a background operation, such as an import or an upload to YouTube, is running; wait for it to finish
3. MediaFlow downloads the new version and checks that it is exactly the file, and the version, the website promised, checks that it is genuine and from the same maker as the one you are running, closes, puts it in place of the old one and reopens. It reopens only once the old copy has fully closed, which can take some seconds while the shared database is saved. Do not quit or reopen it yourself while it works

The update window lists what is new in the version on offer, taken from the change log the website publishes beside the version file. Each version newer than yours is one row: its number, its date, its one-line summary and how many changes it brings. Click a row, or its +, to see that version’s changes, each with the first sentence of what it means; the + turns into −, and a second click hides them again. The newest version starts open. The list scrolls, and while earlier versions are out of sight below it, a line under it says how many. When only one version is on offer, its changes are listed straight away. See every change on mediaflowswift.com opens the website’s What’s New page at the version on offer, in your browser. Notes are read before anything is installed and are not signed, so treat the list as a preview; the copy itself is checked for its maker’s signature when it is installed. When the website has no change log to offer, the list is simply absent, and See every change on mediaflowswift.com is there on its own.

Your settings are written to disk and to the saved setup before the app restarts. If the open project has changes that aren’t saved, MediaFlow asks first, as it does when you quit: Save, Don’t Save or Cancel. If the save doesn’t work, it asks what to do, as it does at Quit (see Saving Projects). Cancel installs nothing, and the window says why. Revert to Previous Version asks the same way. If something is still running, such as Organize or an archive, it asks first, as Quit does (see Saving Projects): Keep Working installs nothing; Install Anyway (or Revert Anyway) stops the work with its own Cancel and goes on once it has stopped.

With automatic checks on (your answer to the question, or the switch in Settings › Privacy or General), MediaFlow looks for a new version a few seconds after launch, again every half hour until it can reach the website, and then every few hours, as well as after the Mac wakes. If anything about the new version does not check out, nothing is changed and the version you had reopens. The version you updated from is kept whole for Revert, in MediaFlow’s own folder under Library › Application Support, not beside the app: two copies of MediaFlow in Applications made macOS judge the wrong one when the app asked for your local network after an update. A copy an earlier version left beside the app is moved there the first time this version opens. Every version is the same signed app to macOS, and before the new one reopens the installer tells Launch Services about it, so that permissions you have given MediaFlow carry over from one update to the next; the Keychain’s do. Reaching your local network is the one macOS has sometimes made the new version ask for again; see It Stopped Connecting After an Update. MediaFlow can update itself wherever you keep it, whatever its folders are called: on this Mac, on another disk or on a network share, as long as your account can change the folder it is in. It can’t update a copy in a folder that is read-only, one that was moved or renamed while it was open, or one macOS is running from a temporary place because it was opened straight from where it was downloaded; it says so before anything is downloaded, and nothing is changed. The new version is copied beside the one you have, under a hidden name, and checked there first: if that copy is not whole or does not check out, it is removed and the version you have is not touched. The two are then switched: in one step on APFS disks, such as this Mac’s own; on others, such as a network share or a Mac OS Extended or FAT disk, by two quick renames. Either way the app is never left half-copied. The copy kept for Revert is replaced only once a copy of the version you had has been made whole and checked. After that the installer removes the download, the earlier copy kept for Revert, and the version you had from beside the app. If an update is cut off part way, by a power cut for instance, a hidden copy may be left beside MediaFlow: it is never removed for you, and MediaFlow notes it in its log when it next opens. A copy left hidden beside MediaFlow, the version you had when it could not be kept for Revert or a new version that did not go in, is also named each time MediaFlow opens (one cut off part way may not be complete), and macOS is told to forget it: macOS can mistake such a copy for MediaFlow when it asks to reach your local network, so move it to the Trash once you no longer need it. If an update is cut off between those two renames, MediaFlow can be missing from its place: the version you had is kept beside it, whole and hidden. To get it back, show hidden files in Finder (⌘⇧.) or download MediaFlowSwift again. If the disk refuses the renames that would put the version you had back, it is given its own name with “(the version you had)” added, where the disk allows, and opened from there, so that it can say how to put it back; where the disk allows no new name, it opens from its hidden place and says the same. While it is open from either, MediaFlow won’t install an update or Revert: it says so before anything is downloaded, and asks you to put it back under its own name first, or, when MediaFlow is already in its place, to open that one instead. If the disk can’t be read just after the two are switched in one step, nothing more is moved, and the copy at MediaFlow’s place is opened. What the installer did is written to Library/Logs/MediaFlow/update.log in your home folder.

### Going back

After an update, the Software Update window shows Revert to Previous Version, or Revert to followed by the version it puts back, read from the copy kept for Revert itself, so the version named is right even after an update that did not finish. It copies the version you had before beside the app, checks it, switches the two the way an update does, and relaunches; the version you went back from becomes the copy kept for Revert, so you can return to it. If the copy kept for Revert does not check out, nothing is changed.

See also: [Choosing and Connecting Your Network Share](#choosing-and-connecting-your-network-share), [Saved Setup: A Copy of Your Settings](#saved-setup-a-copy-of-your-settings), [The Settings Window, Tab by Tab](#the-settings-window-tab-by-tab)

## The Settings Window, Tab by Tab

*A map of the nine Settings tabs, so you know which one holds the setting you are looking for.*

Settings has nine tabs. Each holds one subject. Most changes take effect as you make them.

`Cmd+,` — Open Settings

### General

Run Setup Again…, the saved copy of your settings (Save Setup Now, Restore Saved Setup), where app updates come from and whether to check automatically, and the version you are running.

### Network

Which network share MediaFlow uses: shares connected now, Look for servers, Connect now and Forget. There is no built-in share; nothing is assumed until you choose one.

### Storage

The shared database: Enable Shared Database, the Store (Database file or Database server), its file or connection fields, when a server last backed itself up, and copying records between the two. Below it, the default destination for new projects and “Verify organized copies by reading them back”.

### Cameras

The open project’s camera list (add, rename, remove), “Suggest import when a camera or card is connected”, and camera identities: the rules that turn a serial number or model into the camera name you use.

### Categories

The open project’s category list (add, rename, retire, restore, remove), Also use for new projects, and Category Learning with Reset Pattern Memory.

### Analysis

“Use a model to suggest categories” with its provider, model, API key and daily spending limit. Below it, Import Analysis: proposing a category, camera and scene after an import, and the optional Tier 1 pass that looks at pictures and listens to speech.

### Privacy

Everything that can leave this Mac for a company outside your network, with what is sent and to whom. Each outside service has its own switch and is off until you turn it on.

### Notifications

One switch for each kind of Smart Notification.

### Plan

The plan this Mac is on and how long it has left, your licence key (enter and Activate, the Macs it is active on, Release this Mac), and what each plan includes, with Buy on the website…. See Plans and Pricing.

> **Tip:** The camera and category lists belong to the project, not to the app. With no project open, those two tabs show Open a Project… instead of a list.

See also: [Setting Up MediaFlow](#setting-up-mediaflow), [Choosing and Connecting Your Network Share](#choosing-and-connecting-your-network-share), [Saved Setup: A Copy of Your Settings](#saved-setup-a-copy-of-your-settings), [Updating MediaFlow](#updating-mediaflow), [Database File or Database Server?](/manual/shared-database/#database-file-or-database-server), [Adding, Renaming, Retiring and Removing Categories](/manual/tags-categories/#adding-renaming-retiring-and-removing-categories), [Using a Model to Suggest Categories](/manual/organizing-media/#using-a-model-to-suggest-categories), [Privacy: What Leaves This Mac](#privacy-what-leaves-this-mac), [How MediaFlow Verifies Copies](/manual/organizing-media/#how-mediaflow-verifies-copies), [Smart Notifications](/manual/settings-preferences/#smart-notifications), [Plans and Pricing](/manual/settings-preferences/#plans-and-pricing)

## Privacy: What Leaves This Mac

*MediaFlow works on this Mac and your own network; each service that reaches an outside company is off until you turn it on.*

MediaFlow has no account and collects no usage data. Your media, projects and shared database stay on this Mac and on your own network.

It reaches its maker in two ways, and only when you let it. Once you say yes to checking for new versions, or choose Check for Updates…, it asks mediaflowswift.com whether there is a newer version, with nothing about you or your Mac in the request, reads that version’s list of changes from mediaflowswift.com when there is one, and downloads the new version when you choose to install it. And once you enter a licence key, it checks the key with MediaFlow’s licence service, sending the key, a one-way code made from this Mac’s hardware id (the same for every user account on this Mac, and never the hardware id itself), and the Mac’s name; until an account first activated with an earlier version has moved to that code, its checks also send the random id that version made for it, to release that id’s place. Settings › Privacy lists both, with the exact details. A problem report, a question or a feature request reaches its maker only when you send it: with Send to Support in Help → Report a Problem… or Help → Contact Support…, which asks before the first one goes (see Sending to support below), or from your own mail app with Email Report… or Email Instead….

A few features need a service run by another company. Settings › Privacy lists every one: what is sent, to whom, and what it is for. Each is off until you turn it on, and you can turn it off again at any time.

### The switches

- Apple’s online speech recognition — sends the audio of the clip being transcribed to Apple, only when this Mac has no on-device speech model for the language. While it is off, speech is recognized on this Mac only, and a language without an on-device model is not transcribed.
- Historical weather lookup — sends each clip’s GPS coordinates, rounded to three decimal places (about 110 m), and the date it was shot to Open-Meteo. While it is off, Look Up Weather does nothing and tells you where to turn it on.
- Place names for GPS coordinates — sends the coordinates of each clip, or of the middle of a group of clips shot close together, rounded to three decimal places (about 110 m), to Apple, and nothing else about the clip. While it is off, clips show their coordinates; names already looked up are kept.
- A model that writes your YouTube title, description and tags — sends the transcript of the finished video you chose, its length, the brief you typed, and then its own drafts, to the provider chosen in Settings › Analysis. Never the video or its file name. Not needed with the model on this Mac, when nothing is sent outside; a local model you have pointed at another computer on your network receives the same text. See The SEO Agent
- Sending to YouTube — for Apply to the Video I Uploaded, reads your channel’s newest uploads (title, upload time, length, visibility and the name of the file each came from, which YouTube tells only the owner) and fetches each one’s small picture, so you can confirm the video; then sends that video its title, description, chapters and tags, and only if you ask its category, visibility, publish time, recording date, thumbnail and the transcript as captions, always together with what was read so nothing on it is lost. The advanced Upload tab sends the finished video you chose, with the same words and settings and the file’s size and type, to Google. Signing in opens your browser at Google; MediaFlow never sees your password. Signing in and staying signed in send your client ID and secret to Google. The permission is the one Google words as “See, edit, and permanently delete your YouTube videos, ratings, comments and captions”; MediaFlow never deletes anything and changes only the video you confirm. Nothing is sent until you confirm the video and click Apply, or click Upload and confirm. While it is off, both are refused and sign-in does not ask for the permission; with both YouTube switches off, signing in is refused too. See Applying Your Details to the Video You Uploaded
- Reading your videos’ statistics from YouTube — asks Google which channel you signed in to, and sends the YouTube IDs of the videos your database records as published with MediaFlow with the span of dates from the first upload to today, and nothing else. Google answers with their views, likes, comments, watch time, average view, subscribers gained, shares, visibility and publish time. Turning it on makes the next sign-in ask Google for two more permissions, both read-only, which would allow reading your whole channel; MediaFlow asks only about those videos. Read only when you click Read from YouTube Now on the Results tab. See How Your Videos Are Doing
- Maps of where you shot — showing a map sends the area you are looking at to Apple, which is how the map images arrive. While it is off, the Shoot Map and GPS scene review list locations without a map, with a Turn On Maps button.
- Sending to support — sends only when you click Send to Support, in Help → Report a Problem… (the report exactly as shown under What’s Sent, a title, and the crash signature if there is one) or Help → Contact Support… (your question or feature request, its subject, and unless you turn it off this copy’s version, your macOS version and your Mac’s chip). With either go the email address you give for a reply and a random identifier for this copy of the app. They go to Long Road Software, MediaFlowSwift’s maker, through its report relay at Cloudflare, which holds each one until its support team collects it. Before the first message, and again if the relay will not take its key, MediaFlow asks the relay for a key of this Mac’s own, sending only a random identifier made for that and kept in your Keychain; the key it is given is kept there too, and signs each message. While this is off, the first Send to Support asks before anything goes, and saying yes turns it on. Email Report… and Email Instead… need no switch: they open the message in your own mail app, for you to send.

### A model that suggests categories

This one is set up in Settings › Analysis, and then ticked for each import you want it for. With a paid provider (Anthropic, OpenAI or Google) it sends three frames from each clip, your category list, the clip’s camera, duration and place name, the opening words of any speech, and your recent corrections. With a model on this Mac, nothing leaves it.

The local model’s Server address may be this Mac or another computer on your own network. An address on the internet is refused, and a redirect from the server is never followed, so frames go only to the computer you named.

### What stays on your network

- Your network share: finding it, connecting to it, and reading and writing media and the database file.
- Your database server, when you use one. That connection is encrypted only when Encryption is on in Settings › Storage; while it is Off, keep the server on a network you trust.

### Things that open your browser or mail app

Buttons and links such as a provider’s API-key page, the Ollama download, Help → Support Website or See every change on mediaflowswift.com in the update window open a web page only when you click them. Email Instead… in Help → Contact Support… and Email Report… in Report a Problem open a new message to support@mediaflowswift.com in your own mail app, with what you wrote and this copy’s version, your macOS version and your Mac’s chip, or the problem report you have read, for you to send. If email links on this Mac open in a web browser, or in nothing, they put the text on the clipboard instead. Open in (your browser) Anyway then hands your browser a new message to support with only a subject line, for your webmail to open: nothing you wrote and nothing about your Mac is in it. These buttons send nothing themselves.

> **Tip:** A saved setup keeps your Privacy switches, but they are not restored automatically on a new install — only when you choose Restore Saved Setup…, which says so before it does.

macOS may separately ask permission for speech recognition or for finding devices on your local network. Those prompts come from macOS and are managed in System Settings › Privacy & Security.

See also: [The Settings Window, Tab by Tab](#the-settings-window-tab-by-tab), [Using a Model to Suggest Categories](/manual/organizing-media/#using-a-model-to-suggest-categories), [Running a Model on This Mac](/manual/organizing-media/#running-a-model-on-this-mac), [Speech Transcription](/manual/organizing-media/#speech-transcription), [Historical Weather Lookup](/manual/organizing-media/#historical-weather-lookup), [Interactive Shoot Map](/manual/organizing-media/#interactive-shoot-map), [Saved Setup: A Copy of Your Settings](#saved-setup-a-copy-of-your-settings), [Contacting Support](/manual/troubleshooting/#contacting-support)

## Network Drive Settings for Working Away from Home

*A setting on your network drive called durable handles helps on a steady home network, but over a phone, a hotspot or a VPN it can leave a file locked for hours.*

If your footage goes to a network drive, often called a NAS, its file sharing most likely has a setting called durable handles. It decides what the drive does with a file that was open when a Mac’s connection dropped. It matters most if you organize to the drive from somewhere else, over a phone, a hotspot or a VPN.

### What durable handles do

When a Mac opens a file on the drive, the drive keeps a handle for it: a note that this Mac has the file open, with a lock so nobody else changes it meanwhile. With durable handles on, the drive holds on to that handle for a while after the connection drops. If the same connection comes back, it carries on with the file as if nothing had happened.

### Why they help at home

On a steady home or office network, drops are rare and short, and a Mac nearly always comes back as the same connection. Durable handles then let an editing app or a copy ride out the blip without reopening anything.

### Why they can hurt away from home

Over a phone, a hotspot or a VPN, a dropped link often comes back as a new connection. To the drive, that is someone else. It keeps the old connection’s handle, and its lock, waiting for a connection that will never return, sometimes for hours. Meanwhile your Mac is refused that one file, and macOS calls the refusal “Resource temporarily unavailable”, while the drive answers everything else.

### What you see

Organize waits through the refusals, as it does for any drop. If they go on, the Organize window says the network drive keeps refusing a file, or that the drive is still holding part of a file locked. Everything else on the drive works normally: that is the sign that a lock, not the connection, is the problem.

### Where the setting is

Open your drive’s own settings, usually in a web browser, and look at its SMB or Windows file service, under advanced settings. Drive makers word it differently, such as “SMB durable handles”, “Enable durable handles” or just “Durable handles”. Many drives share files with Samba, which has this setting, including drives from UGREEN, Synology, QNAP, TrueNAS and others; where your drive shows it, if it does, varies. Your drive’s manual can tell you.

### The trade-off of turning it off

- The drive lets go of a file as soon as a connection drops, so your Mac can open it again straight away when it is back
- A brief blip now breaks any file that was open at that moment. An editing app with a file open on the drive may need to reopen it
- Applying the change restarts the drive’s file sharing, which drops every Mac connected to it for a moment. Do it when nothing is copying, with files on the drive closed

### Oplocks and SMB2 leasing

These nearby settings can stay on. They let a Mac keep part of a file it is using in its own memory, which keeps things quick. Without durable handles, the drive lets go of them when a connection drops, so they leave nothing locked behind. MediaFlowSwift works with any of these settings on or off.

### What we suggest

- Away from home, over a phone, a hotspot or a VPN: consider turning durable handles off before you organize
- Back on a steady network: it’s your choice. Off costs little; on helps an editing app ride out a blip

> **Tip:** A file that is already locked is let go at once when you turn durable handles off and apply the change, because the drive’s file sharing restarts. Organize then carries on.

See also: [Choosing and Connecting Your Network Share](#choosing-and-connecting-your-network-share), [Organizing Media to Storage](/manual/organizing-media/#organizing-media-to-storage), [Organize Errors on a Network Drive](/manual/troubleshooting/#organize-errors-on-a-network-drive), [Network Share 'Resource Busy' Errors](/manual/troubleshooting/#network-share-resource-busy-errors)

<div class="chapter-nav" role="navigation" aria-label="Chapters">
<a rel="prev" href="/manual/getting-started/">&larr; Getting Started</a>
<a href="/manual/">All chapters</a>
<a rel="next" href="/manual/importing-media/">Importing Media &rarr;</a>
</div>
