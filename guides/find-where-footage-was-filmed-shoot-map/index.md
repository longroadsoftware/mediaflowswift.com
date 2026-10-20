---
layout: guide
title: "How to Find Where Each Clip in Your Project Was Filmed"
description: "The Shoot Map pins every clip with GPS data by location, clustered and clickable. Turning it on sends the area you're viewing to Apple."
published: "2026-10-13"
updated: 2026-10-20
permalink: /guides/find-where-footage-was-filmed-shoot-map/
---
# How to Find Where Each Clip in Your Project Was Filmed

Open the Shoot Map (Workflow → Plan & Deliver → Shoot Map, or Cmd+Opt+M). Clips with GPS data appear as pins, grouped into one numbered pin per nearby location. Click a pin to see its clips and select them in the media list. Only clips that carry GPS data, usually phone and drone footage, can be placed.

The rest of this page covers what the map needs, the one setting that gates it, and its limits.

## What does the map show?

> The Shoot Map displays all clips with GPS data on a map. Clips shot at the same place share one numbered pin. Click a pin to see its clips and select them in the media list.

- **Cluster pins** — clips within 50m are grouped into one numbered cluster
- **Click a cluster** — highlights it in the sidebar with clip details
- **Click a single pin** — selects that clip in the media list
- **Select All in Browser** — selects every clip at that location, for batch editing
- **Map styles** — Standard, Satellite or Hybrid
- **Filters** — by Category, or by a minimum star rating

The sidebar lists every location cluster, sorted by clip count, with the place name, clip count, sample filenames and category badges for each. Click one to zoom the map there.

## Which of my clips have GPS data?

You don't have to guess. Three places in the app tell you:

- **The Places section** in the sidebar lists the places your clips were shot, grouped from their GPS data. It appears only when at least one clip has GPS data.
- **The metadata panel** shows a GPS section in a clip's Full Metadata when the file carries one.
- **Workflow → Analyze…** counts it for you on rows that need it, for example "needs GPS — 38 of 212 clips have it".

## What does that look like on a real project?

Say a travel day gives you 212 clips. 174 came from a mirrorless camera with no GPS, and 38 from a phone and a drone. The Shoot Map shows those 38 clips and nothing else.

Say 14 of them were shot within 50 m of one trailhead. They become one pin with a 14 on it. Filter to a minimum rating of 4 stars to see only your best shots there. Select All in Browser then selects those clips in the media list, ready to tag in one go.

## How do I turn the map on?

The map itself is opt-in, and for a reason worth knowing before you click it:

> The map itself is off until you turn on Maps in Settings › Privacy, or with the Turn On Maps button: showing a map sends the area you are looking at to Apple. Until then the locations are counted without a map.

Showing a map at all means asking Apple's mapping service for tiles. That is the same [MapKit](https://developer.apple.com/documentation/mapkit) framework any Mac or iOS app uses to draw a map. So that step, not simply having GPS data, is the one that sends something to Apple.

With Maps off, the Shoot Map still counts and lists the locations. It just doesn't draw the map.

## How do I get readable place names first?

A pin works from raw coordinates on its own, but the sidebar and cluster details are easier to read with place names attached. Place names is its own opt-in. It's off until you turn on "Place names for GPS coordinates" in Settings › Privacy, and once on, it sends each clip's coordinates (rounded to about 110 m) to Apple. The manual's tip, from the related GPS Scene Detection feature, applies here too:

> Run Place names first (Workflow → Analyze… → Place names, once called Geocode Locations) so clips have readable place names. GPS Scenes works with raw coordinates too, but named places make the suggestions much easier to review.

## How do I use the map to double-check scene groupings?

If you've run GPS Scene Detection to group clips shot near each other into proposed scenes, the map is a way to sanity-check those groupings before you accept them:

> Use the Shoot Map alongside GPS Scene Detection to visually verify scene groupings before applying them.

GPS Scene Detection and the Shoot Map are separate features that both read a clip's GPS data. One proposes scenes from it; the other shows you the pins. Running one doesn't require the other, but they're a natural pair on a multi-location shoot.

## What are the limits?

- **Clips without GPS data never appear on the map.** Many dedicated cameras don't record it, so a camera-only project may have nothing to show.
- **Map pins group clips within 50 m.** GPS Scene Detection offers radii from 25 m to 250 m.
- **GPS is where the phone or drone was,** not what it was pointed at. A drone shot of a far ridge is pinned where the drone flew.
- **GPS data stays in the project file.** A shared database does not keep it, so open the project file, not just the database's copy, to see the pins.

## How do I hand locations to my editor?

NLE Template Export for Final Cut Pro puts the place name and GPS coordinates on every clip. Its CSV (Universal) target writes them as columns, one row per clip. See [NLE Template Export](/manual/reports/#nle-template-export).

## Read more

- [Interactive Shoot Map](/manual/organizing-media/#interactive-shoot-map) — every map feature and filter, in full
- [GPS Scene Detection](/manual/organizing-media/#gps-scene-detection) — grouping clips into scenes by where and when they were shot
- [Privacy: What Leaves This Mac](/manual/setup-network/#privacy-what-leaves-this-mac) — what each opt-in switch actually sends, and to whom

## Other guides

- [How to Review Footage and Pick Your Selects on a Mac](/guides/review-and-pick-selects-on-a-mac/) — narrowing to a location's clips is one more way to focus a review session.

[All guides](/guides/) — the full list.

## Try it on your own footage

MediaFlowSwift is the Mac app this guide describes. [Download it](/download.html) and the full app runs for 14 days, with no card asked for — macOS 14 or later, on a Mac with Apple silicon.
