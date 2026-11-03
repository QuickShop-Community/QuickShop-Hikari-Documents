---
slug: /addon/squaremap
---
# squaremap Addon

:::info

Can't find where to download the JAR? [Click here](../faq/where-addons-compacts-at).

:::

QuickShop-Hikari includes an optional addon for **squaremap** that displays QuickShop shops as markers on the squaremap web map.

The addon creates a dedicated QuickShop layer for every squaremap-enabled world and keeps shop markers synchronized automatically.

## What It Does

The squaremap addon:

- creates a `QuickShop-Hikari Shops` layer;
- displays shops as map markers;
- includes a bundled QuickShop shop icon;
- supports configurable marker labels and tooltips;
- refreshes markers asynchronously on a configurable interval;
- registers and unregisters layers when worlds load and unload.

## Installation

Install the addon alongside:

- QuickShop-Hikari;
- squaremap.

The addon is packaged separately from the main QuickShop-Hikari jar.

No additional QuickShop core configuration is required.

## Configuration

The addon creates its own `config.yml`.

The current default configuration is:

```yaml
config-version: 1

# Enable or disable the squaremap layer
layer-enabled: true

# If you want the marker set/markers to display by default when opening the map.
default-hidden: false

# The name for the map layer
layer-name: "QuickShop-Hikari Shops"

# The priority for the map layer
layer-priority: 99

# The z-index for the layer
z-index: 250

# Should we show the controls for the layer?
show-controls: true

# Marker label
# Available placeholders:
# %item%, %price%, %stock%, %owner%, %type%, %location%,
# %x%, %y%, %z%, %world%
marker-label: "%item% - %price%"

# Tooltip displayed when hovering over the marker
marker-tooltip: |
  <div style="font-size: 14px; padding: 5px;">
    <strong>QuickShop</strong><br>
    <hr style="margin: 5px 0;">
    <strong>Owner:</strong> %owner%<br>
    <strong>Item:</strong> %item%<br>
    <strong>Price:</strong> %price%<br>
    <strong>Stock:</strong> %stock%<br>
    <strong>Type:</strong> %type%<br>
    <strong>Location:</strong> %x%, %y%, %z%
  </div>

# How many seconds between marker refreshes
refresh-per-seconds: 5
```

## Layer Settings

### `layer-enabled`

```yaml
layer-enabled: true
```

Enables or disables the squaremap integration.

When disabled, the addon does not register map layers or shop markers.

### `default-hidden`

```yaml
default-hidden: false
```

Controls whether the QuickShop layer is hidden by default when users open squaremap.

### `layer-name`

```yaml
layer-name: "QuickShop-Hikari Shops"
```

Controls the display name of the QuickShop layer.

### `layer-priority`

```yaml
layer-priority: 99
```

Controls the layer's priority.

### `z-index`

```yaml
z-index: 250
```

Controls the stacking order of the QuickShop layer relative to other squaremap layers.

### `show-controls`

```yaml
show-controls: true
```

Controls whether the layer is shown in squaremap's layer controls.

## Shop Icon

The addon includes a bundled:

```text
shop_icon.png
```

and registers it with squaremap as the QuickShop shop icon.

Unlike the Pl3xMap addon, the current squaremap integration does not expose a custom icon path in its configuration.

## Marker Placeholders

Both the marker label and tooltip support:

```text
%item%
%price%
%stock%
%owner%
%type%
%location%
%x%
%y%
%z%
%world%
```

For example:

```yaml
marker-label: "%item% - %price%"
```

## Marker Tooltip

`marker-tooltip` controls the HTML shown when hovering over a QuickShop marker.

Because it is a multiline YAML value, it can be customized with HTML markup.

For example:

```yaml
marker-tooltip: |
  <strong>%item%</strong><br>
  Owner: %owner%<br>
  Price: %price%
```

## Refresh Interval

```yaml
refresh-per-seconds: 5
```

Controls how frequently QuickShop refreshes the marker layer.

The update task runs asynchronously using QuickShop's scheduler.

## World Handling

The addon registers its layer only for worlds that are enabled in squaremap.

When a Bukkit world loads, QuickShop checks whether that world is available in squaremap and registers the layer if needed.

When a world unloads, the corresponding QuickShop layer and cached marker data are removed.

When the addon shuts down, it unregisters its map layers and cancels its scheduled tasks.

## Permissions

The squaremap addon does not add player-facing permissions.

## Summary

The squaremap addon provides a live QuickShop map layer with configurable:

- layer visibility;
- default hidden state;
- layer name;
- priority;
- z-index;
- controls;
- marker label;
- marker tooltip;
- refresh interval.

It also includes its own bundled QuickShop shop icon.
