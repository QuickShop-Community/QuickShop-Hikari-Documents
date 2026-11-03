---
slug: /modules/shops/display-system
---
# Shop Display System

QuickShop can display the item being bought or sold directly above a shop container. This makes shops easier to identify without requiring players to read the shop sign or open the shop interface.

QuickShop-Hikari 6.3 introduces a new **Display Entity** system alongside the existing virtual item system.

## Enabling Shop Displays

Shop displays are controlled globally using the `display-items` option in `config.yml`:

```yaml
shop:
  display-items: true
```

Set this to `false` to completely disable item displays for all shops.

You can also control whether displays are enabled by default when shops are created:

```yaml
shop:
  display-default: true
```

Setting `display-default` to `false` keeps the display system available while causing newly created shops to start with their display disabled.

## Display Types

The display implementation used by QuickShop is controlled with:

```yaml
shop:
  display-type: 3
```

QuickShop-Hikari 6.3 supports two display systems:

| Type | Display System | External Dependency |
| --- | --- | --- |
| `2` | Virtual Item | ProtocolLib or PacketEvents |
| `3` | Display Entity | None |

### Display Type 2 — Virtual Item

```yaml
shop:
  display-type: 2
```

Display Type 2 creates a **virtual item** that is sent to players through packets.

The displayed item exists on the player's client but does not exist as a normal item entity on the server.

This mode requires either **ProtocolLib** or **PacketEvents**.

Choose the packet implementation with:

```yaml
shop:
  display-protocol: protocollib
```

Available values are:

```text
protocollib
packetevents
```

For example, to use PacketEvents:

```yaml
shop:
  display-type: 2
  display-protocol: packetevents
```

If the required packet library is unavailable, QuickShop cannot use the virtual display system.

### Display Type 3 — Display Entity

```yaml
shop:
  display-type: 3
```

Introduced in QuickShop-Hikari 6.3, Display Type 3 uses Minecraft's native **Display Entity** system.

Unlike Display Type 2, this implementation does not depend on ProtocolLib or PacketEvents.

Display Type 3 also provides additional display customization, including:

- Display scaling
- Display rotation
- Display positioning
- Optional display hitboxes
- Text Displays

:::note
The **Text Display** system has its own configuration and documentation because it provides significantly more customization than the item display itself.

Text Displays currently only work when using:

```yaml
display-type: 3
```
:::

## Choosing a Display Type

For servers running a Minecraft version that supports Display Entities, `display-type: 3` provides the most customization and does not require an external packet library.

Use `display-type: 2` if you specifically want QuickShop's packet-based virtual display implementation.

A basic Display Entity configuration looks like:

```yaml
shop:
  display-items: true
  display-default: true
  display-type: 3
```

## Display Position

The position of the displayed item can be adjusted relative to the shop container:

```yaml
shop:
  display-coords:
    x: 0.5
    y: 0.8
    z: 0.5
```

Each value supports decimals.

### X

Controls the east/west position of the display.

```yaml
x: 0.5
```

Positive values move the display east, while negative values move it west.

### Y

Controls the height of the display.

```yaml
y: 0.8
```

Positive values move the display upward, while negative values move it downward.

### Z

Controls the north/south position of the display.

```yaml
z: 0.5
```

Positive values move the display south, while negative values move it north.

The default values position the display approximately above the center of the shop container.

## Display Scale

:::info
Display scaling only applies when using `display-type: 3`.
:::

The size of the displayed item can be customized independently along each axis:

```yaml
shop:
  display-scale:
    x: 1.25
    y: 1.25
    z: 1.25
```

The default scale is:

```text
1.25 × 1.25 × 1.25
```

Using the same value for all three axes keeps the item proportionally scaled.

For example, a smaller display could use:

```yaml
display-scale:
  x: 0.8
  y: 0.8
  z: 0.8
```

Changing individual axes can stretch or flatten the displayed item and is generally only useful for specialized layouts.

## Display Rotation

:::info
Display rotation only applies when using `display-type: 3`.
:::

Display Entities can be rotated using an angle and rotation axis:

```yaml
shop:
  display-rotation:
    degrees: 0.0
    x: 0.0
    y: 1.0
    z: 0.0
```

`degrees` controls the rotation angle.

The `x`, `y`, and `z` values define the axis around which the item rotates.

The default configuration:

```yaml
degrees: 0.0
x: 0.0
y: 1.0
z: 0.0
```

uses the vertical Y axis with no additional rotation.

For example:

```yaml
display-rotation:
  degrees: 45.0
  x: 0.0
  y: 1.0
  z: 0.0
```

rotates the display 45 degrees around the Y axis.

## Display Hitbox

Display Entities can optionally have an interaction hitbox:

```yaml
shop:
  display-hitbox: false
```

When disabled, the displayed item does not provide an additional interaction target.

Enable this if you want players to be able to interact directly with the shop's displayed item.

```yaml
shop:
  display-hitbox: true
```

How QuickShop responds to interactions with the display is controlled by the shop interaction configuration.

## Display Enchantments

QuickShop can preserve enchantment visuals on displayed items:

```yaml
shop:
  display-allow-enchants: true
```

Set this to `false` if you do not want displayed shop items to show their enchantment appearance.

## Display Stacks

QuickShop can allow display items to use stacked visual effects:

```yaml
shop:
  display-allow-stacks: false
```

This setting is used when stack creation is enabled.

:::note
This option does not apply to Virtual Display Items (`display-type: 2`).
:::

## Automatically Despawning Displays

QuickShop can automatically remove displays when no players are near a shop.

This can be useful for large shopping areas containing many shops.

```yaml
shop:
  display-auto-despawn: false
  display-despawn-range: 20
  display-check-time: 40
```

### `display-auto-despawn`

Enables or disables automatic display despawning.

```yaml
display-auto-despawn: true
```

### `display-despawn-range`

Controls the distance, in blocks, used to determine whether a display should remain active.

```yaml
display-despawn-range: 20
```

### `display-check-time`

Controls how often QuickShop checks whether displays should be spawned or despawned.

The value is measured in server ticks.

```yaml
display-check-time: 40
```

At the default Minecraft tick rate, `40` ticks is approximately two seconds.

:::note
`display-check-time` does not apply to Virtual Display Items (`display-type: 2`).
:::

## Display Validation

QuickShop can periodically validate the location of applicable display items:

```yaml
shop:
  display-items-check-ticks: 6000
```

Set the value to `0` to disable the validation check.

```yaml
display-items-check-ticks: 0
```

:::note
This setting does not apply to Virtual Display Items (`display-type: 2`).
:::

## Toggling a Display for an Individual Shop

Shop displays can be enabled or disabled for individual shops.

Look at the shop and run:

```mcfunction
/quickshop toggledisplay
```

This allows players or administrators to hide displays for specific shops without disabling the display system globally.

For example, this can be useful in dense shopping areas where many displays are visible at the same time.

:::note
If `display-items` is disabled globally in `config.yml`, enabling the display for an individual shop will not override the global setting.
:::

## Example Configuration

The following configuration enables the 6.3 Display Entity system with the default positioning, rotation, and scale:

```yaml
shop:
  display-items: true
  display-default: true

  display-type: 3

  display-auto-despawn: false
  display-despawn-range: 20
  display-check-time: 40

  display-allow-stacks: false
  display-allow-enchants: true
  display-hitbox: false

  display-coords:
    x: 0.5
    y: 0.8
    z: 0.5

  display-rotation:
    degrees: 0.0
    x: 0.0
    y: 1.0
    z: 0.0

  display-scale:
    x: 1.25
    y: 1.25
    z: 1.25
```

This configuration uses Minecraft Display Entities and therefore does not require ProtocolLib or PacketEvents.

## Legacy Display Modes

Older versions of QuickShop included additional real-item-based display implementations.

These modes are no longer supported and should not be used on modern QuickShop-Hikari installations.

Servers upgrading from an older QuickShop version should use either:

```yaml
display-type: 2
```

for Virtual Items, or:

```yaml
display-type: 3
```

for the modern Display Entity system.