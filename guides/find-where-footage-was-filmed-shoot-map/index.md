---
layout: guide
title: "How to Find Where Each Clip in Your Project Was Filmed"
description: "The Shoot Map pins every clip with GPS data by location, clustered and clickable. Turning it on sends the area you're viewing to Apple."
published: "2026-10-13"
updated: 2026-10-19
permalink: /guides/find-where-footage-was-filmed-shoot-map/
---
# How to Find Where Each Clip in Your Project Was Filmed

Open the Shoot Map (Workflow → Plan & Deliver → Shoot Map, or Cmd+Opt+M). Clips with GPS data appear as pins, grouped into one numbered pin per nearby location; click a pin to see its clips and select them in the media list.

That answers where. The rest of this page is what the map needs to show you that, and the one setting that gates it.

## What does the map show?

> The Shoot Map displays all clips with GPS data on a map. Clips shot at the same place share one numbered pin. Click a pin to see its clips and select them in the media list.

- **Cluster pins** — clips within 50m are grouped into one numbered cluster
- **Click a cluster** — highlights it in the sidebar with clip details
- **Click a single pin** — selects that clip in the media list
- **Select All in Browser** — selects every clip at that location, for batch editing
- **Map styles** — Standard, Satellite or Hybrid
- **Filters** — by Category, or by a minimum star rating

The sidebar lists every location cluster, sorted by clip count, with the place name, clip count, sample filenames and category badges for each. Click one to zoom the map there.

This is for clips with GPS data — phone and drone footage typically carries it; most cameras don't. A clip with no GPS data simply has nothing to put on the map.

## How do I turn the map on?

The map itself is opt-in, and for a reason worth knowing before you click it:

> The map itself is off until you turn on Maps in Settings › Privacy, or with the Turn On Maps button: showing a map sends the area you are looking at to Apple. Until then the locations are counted without a map.

Showing a map at all means asking Apple's own mapping service for tiles — the same [MapKit](https://developer.apple.com/documentation/mapkit) framework any Mac or iOS app uses to draw a map — which is why that step, and not simply having GPS data, is the one that sends something to Apple.

So with Maps off, MediaFlowSwift still knows which clips have GPS data and can count and list them. It just can't draw a map of them, because drawing one means asking Apple for map tiles of the area you're looking at.

## How do I get readable place names first?

A pin works from raw coordinates on its own, but the sidebar and cluster details are easier to read with place names attached. Place names is its own opt-in. It's off until you turn on "Place names for GPS coordinates" in Settings › Privacy, and once on, it sends each clip's coordinates (rounded to about 110 m) to Apple. The manual's tip, from the related GPS Scene Detection feature, applies here too:

> Run Place names first (Workflow → Analyze… → Place names, once called Geocode Locations) so clips have readable place names. GPS Scenes works with raw coordinates too, but named places make the suggestions much easier to review.

## How do I use the map to double-check scene groupings?

If you've run GPS Scene Detection to group clips shot near each other into proposed scenes, the map is a way to sanity-check those groupings before you accept them:

> Use the Shoot Map alongside GPS Scene Detection to visually verify scene groupings before applying them.

GPS Scene Detection and the Shoot Map are separate features that both read a clip's GPS data — one proposes scenes from it, the other just shows you the pins — so running one doesn't require the other, but they're a natural pair on a multi-location shoot.

## Read more

- [Interactive Shoot Map](/manual/organizing-media/#interactive-shoot-map) — every map feature and filter, in full
- [GPS Scene Detection](/manual/organizing-media/#gps-scene-detection) — grouping clips into scenes by where and when they were shot
- [Privacy: What Leaves This Mac](/manual/setup-network/#privacy-what-leaves-this-mac) — what each opt-in switch actually sends, and to whom

## Other guides

- [How to Review Footage and Pick Your Selects on a Mac](/guides/review-and-pick-selects-on-a-mac/) — narrowing to a location's clips is one more way to focus a review session.

[All guides](/guides/) — the full list.

## Try it on your own footage

MediaFlowSwift is the Mac app this guide describes. [Download it](/download.html) and the full app runs for 14 days, with no card asked for — macOS 14 or later, on a Mac with Apple silicon.
