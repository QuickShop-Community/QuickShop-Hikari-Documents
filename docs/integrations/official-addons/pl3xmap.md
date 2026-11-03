---
slug: /addon/pl3xmap
---
# Pl3xMap Addon

:::info

Can't find where to download the JAR? [Click here](../faq/where-addons-compacts-at).

:::

QuickShop-Hikari includes an optional addon for **Pl3xMap** that displays QuickShop shops as markers on the web map.

The addon creates a dedicated QuickShop layer and automatically registers it for Pl3xMap worlds.

## What It Does

The Pl3xMap addon:

- creates a `QuickShop-Hikari Shops` layer;
- displays QuickShop shops as map markers;
- supports configurable marker labels and details;
- supports a configurable marker icon;
- refreshes shop markers on a timer;
- registers and unregisters map layers as worlds load and unload.

## Installation

Install the addon alongside:

- QuickShop-Hikari;
- Pl3xMap.

The addon is packaged separately from the main QuickShop-Hikari jar.

No additional QuickShop core configuration is required.

## Configuration

The addon creates its own `config.yml`.

The current default configuration is:

```yaml
config-version: 1

# If you want the marker set/markers to display by default when opening the map.
display-by-default: true

# The name for the map layer
layer-name: "QuickShop-Hikari Shops"

# The priority for the map layer
layer-priority: 99

# Should we show the controls for the layer?
layer-controls: true

# Should we use a custom icon for the marker?
# If enabled, place the image in the qsaddon-pl3xmap data folder
# and include the file extension in icon-file-location.
icon-custom: false

# Location for the image used as the QuickShop marker.
icon-file-location: "players"

# Max distance where users can see the marker.
max-distance: 1000

# Marker label.
# Placeholders:
# %item%, %price%, %stock%, %owner%, %type%, %location%
marker-label: "%item%, %price%, %stock%, %owner%, %type%"

# Popup text displayed when clicking the marker.
marker-detail: '<span style="font-size: 120%">Chest Shop</span><hr><span>Owner: <strong>%owner%</strong></span><br><span>Item: <strong>%item%</strong></span><br><span>Price: <strong>%price%</strong><br><span>Stock: <strong>%stock%</strong><br><span>Type: <strong>%type%</strong><br><span>Location: <strong>%location%</strong></span>'

# How many times per second the addon refreshes chest shops.
refresh-per-seconds: 5
```

## Layer Settings

### `display-by-default`

```yaml
display-by-default: true
```

Controls whether the QuickShop map layer is enabled when the addon starts.

If disabled, the addon does not register the Pl3xMap event handlers or world layers.

### `layer-name`

```yaml
layer-name: "QuickShop-Hikari Shops"
```

Controls the display name of the map layer.

### `layer-priority`

```yaml
layer-priority: 99
```

Controls the layer priority inside Pl3xMap.

### `layer-controls`

```yaml
layer-controls: true
```

Controls whether Pl3xMap shows layer controls for the QuickShop layer.

## Marker Icon

The addon can use a custom icon:

```yaml
icon-custom: false
icon-file-location: "players"
```

When `icon-custom` is enabled, QuickShop attempts to load the configured image from the addon data folder and register it with Pl3xMap.

If the image cannot be loaded, the addon logs a warning.

## Marker Visibility Distance

```yaml
max-distance: 1000
```

Controls the maximum map distance at which shop markers are displayed.

Reducing this can help reduce the number of markers rendered at once on maps with many shops.

## Marker Placeholders

The marker label supports:

```text
%item%
%price%
%stock%
%owner%
%type%
%location%
```

For example:

```yaml
marker-label: "%item% - %price%"
```

The same values can be used in `marker-detail`.

## Marker Detail

`marker-detail` controls the popup content displayed when a user clicks a shop marker.

It accepts HTML-style content.

For example:

```yaml
marker-detail: '<strong>%item%</strong><br>Owner: %owner%<br>Price: %price%'
```

## Refresh Interval

```yaml
refresh-per-seconds: 5
```

Controls how frequently the addon refreshes shop marker data.

## World Handling

The addon automatically handles Pl3xMap worlds.

When Pl3xMap finishes loading, QuickShop registers the shop layer for all available worlds.

When a new world loads, the layer is registered for that world.

When a world unloads, the QuickShop layer and its cached markers for that world are removed.

## Permissions

The Pl3xMap addon does not add player-facing permissions.

## Summary

The Pl3xMap addon provides a live QuickShop map layer with configurable:

- layer name;
- layer priority;
- controls;
- custom marker icon;
- marker visibility distance;
- marker labels;
- marker popup details;
- refresh interval.
