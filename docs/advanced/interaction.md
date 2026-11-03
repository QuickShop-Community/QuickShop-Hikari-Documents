---
slug: /modules/interaction
---
# Interaction Manager

The Interaction Manager controls what QuickShop-Hikari does when a player clicks a shop sign, shop block, container, or shop display.

This allows server owners to customize QuickShop interaction behavior for:

- standing players;
- sneaking players;
- left-clicks;
- right-clicks;
- shop signs;
- shop blocks;
- containers;
- display entities.

Interaction behavior is configured in:

```text
interaction.yml
```

## Default Configuration

The current default configuration is:

```yaml
version: 4

# Chat Mode:
STANDING_LEFT_CLICK_SIGN: TRADE_INTERACTION
STANDING_RIGHT_CLICK_SIGN: CONTROL_PANEL

STANDING_LEFT_CLICK_SHOPBLOCK: TRADE_INTERACTION
STANDING_RIGHT_CLICK_SHOPBLOCK: NONE # Reserve for open chest

STANDING_LEFT_CLICK_CONTAINER: TRADE_INTERACTION
STANDING_RIGHT_CLICK_CONTAINER: NONE

STANDING_LEFT_CLICK_DISPLAY: NONE
STANDING_RIGHT_CLICK_DISPLAY: NONE

SNEAKING_LEFT_CLICK_CONTAINER: NONE
SNEAKING_RIGHT_CLICK_CONTAINER: NONE

SNEAKING_LEFT_CLICK_DISPLAY: NONE
SNEAKING_RIGHT_CLICK_DISPLAY: NONE

SNEAKING_LEFT_CLICK_SIGN: NONE
SNEAKING_RIGHT_CLICK_SIGN: NONE

SNEAKING_LEFT_CLICK_SHOPBLOCK: NONE
SNEAKING_RIGHT_CLICK_SHOPBLOCK: NONE # Reserve for open chest
```

The key defines **how the player interacted with the shop**.

The value defines **which QuickShop behavior should run**.

## Interaction Targets

QuickShop supports several interaction targets.

### Sign

```text
SIGN
```

The shop information sign associated with the shop.

Examples:

```text
STANDING_LEFT_CLICK_SIGN
STANDING_RIGHT_CLICK_SIGN
```

### Shop Block

```text
SHOPBLOCK
```

The block representing the shop itself.

For a normal container shop, this is typically the shop's chest or other supported inventory block.

Examples:

```text
STANDING_LEFT_CLICK_SHOPBLOCK
SNEAKING_RIGHT_CLICK_SHOPBLOCK
```

### Container

```text
CONTAINER
```

A direct interaction with the shop's inventory container.

Examples:

```text
STANDING_LEFT_CLICK_CONTAINER
STANDING_RIGHT_CLICK_CONTAINER
SNEAKING_LEFT_CLICK_CONTAINER
SNEAKING_RIGHT_CLICK_CONTAINER
```

The default configuration reserves normal right-click container behavior by assigning:

```yaml
STANDING_RIGHT_CLICK_CONTAINER: NONE
```

### Display

```text
DISPLAY
```

Interactions with QuickShop's shop display.

The available display interaction keys are:

```yaml
STANDING_LEFT_CLICK_DISPLAY: NONE
STANDING_RIGHT_CLICK_DISPLAY: NONE
SNEAKING_LEFT_CLICK_DISPLAY: NONE
SNEAKING_RIGHT_CLICK_DISPLAY: NONE
```

By default, all four display interactions use:

```text
NONE
```

so interacting directly with a display does not trigger a QuickShop behavior unless the server owner explicitly configures one.

:::info
Display interaction keys are separate from sign, shop-block, and container interactions. This allows display entities to have their own behavior without changing how the physical shop block works.
:::

## Player Position

Each interaction distinguishes between a player who is standing normally and a player who is sneaking.

### Standing

Keys beginning with:

```text
STANDING_
```

apply when the player is not sneaking.

For example:

```text
STANDING_LEFT_CLICK_SIGN
```

### Sneaking

Keys beginning with:

```text
SNEAKING_
```

apply while the player is sneaking.

For example:

```text
SNEAKING_LEFT_CLICK_SIGN
```

This makes it possible to assign different actions to the same click depending on whether the player is holding the sneak key.

## Click Types

### Left Click

```text
LEFT_CLICK
```

Represents Minecraft's normal attack/break interaction.

For example:

```text
STANDING_LEFT_CLICK_SIGN
```

### Right Click

```text
RIGHT_CLICK
```

Represents Minecraft's normal use/interact action.

For example:

```text
STANDING_RIGHT_CLICK_SIGN
```

Some right-click interactions default to `NONE` so Minecraft's normal block or inventory behavior can continue.

## Available Interaction Keys

The current built-in interaction keys include:

| Key | Description |
| --- | --- |
| `STANDING_LEFT_CLICK_SIGN` | Left-click a shop sign while standing |
| `STANDING_RIGHT_CLICK_SIGN` | Right-click a shop sign while standing |
| `STANDING_LEFT_CLICK_SHOPBLOCK` | Left-click a shop block while standing |
| `STANDING_RIGHT_CLICK_SHOPBLOCK` | Right-click a shop block while standing |
| `STANDING_LEFT_CLICK_CONTAINER` | Left-click the shop container while standing |
| `STANDING_RIGHT_CLICK_CONTAINER` | Right-click the shop container while standing |
| `STANDING_LEFT_CLICK_DISPLAY` | Left-click the shop display while standing |
| `STANDING_RIGHT_CLICK_DISPLAY` | Right-click the shop display while standing |
| `SNEAKING_LEFT_CLICK_SIGN` | Left-click a shop sign while sneaking |
| `SNEAKING_RIGHT_CLICK_SIGN` | Right-click a shop sign while sneaking |
| `SNEAKING_LEFT_CLICK_SHOPBLOCK` | Left-click a shop block while sneaking |
| `SNEAKING_RIGHT_CLICK_SHOPBLOCK` | Right-click a shop block while sneaking |
| `SNEAKING_LEFT_CLICK_CONTAINER` | Left-click the shop container while sneaking |
| `SNEAKING_RIGHT_CLICK_CONTAINER` | Right-click the shop container while sneaking |
| `SNEAKING_LEFT_CLICK_DISPLAY` | Left-click the shop display while sneaking |
| `SNEAKING_RIGHT_CLICK_DISPLAY` | Right-click the shop display while sneaking |

## Available Behaviors

QuickShop currently provides several built-in interaction behaviors.

| Behavior | Description |
| --- | --- |
| `TRADE_UI` | Opens the GUI-based Trade Menu |
| `TRADE_INTERACTION` | Uses the chat-based trading interaction |
| `TRADE_DIRECT` | Immediately performs a single direct trade |
| `TRADE_DIRECT_ALL` | Immediately trades the available amount |
| `CONTROL_PANEL_UI` | Opens the GUI-based shop control panel |
| `CONTROL_PANEL` | Uses the chat-based shop control panel |
| `NONE` | Performs no QuickShop interaction behavior |

## Chat Mode

The default configuration uses the traditional interaction behavior:

```yaml
STANDING_LEFT_CLICK_SIGN: TRADE_INTERACTION
STANDING_RIGHT_CLICK_SIGN: CONTROL_PANEL

STANDING_LEFT_CLICK_SHOPBLOCK: TRADE_INTERACTION
STANDING_RIGHT_CLICK_SHOPBLOCK: NONE

STANDING_LEFT_CLICK_CONTAINER: TRADE_INTERACTION
STANDING_RIGHT_CLICK_CONTAINER: NONE

STANDING_LEFT_CLICK_DISPLAY: NONE
STANDING_RIGHT_CLICK_DISPLAY: NONE

SNEAKING_LEFT_CLICK_CONTAINER: NONE
SNEAKING_RIGHT_CLICK_CONTAINER: NONE

SNEAKING_LEFT_CLICK_DISPLAY: NONE
SNEAKING_RIGHT_CLICK_DISPLAY: NONE

SNEAKING_LEFT_CLICK_SIGN: NONE
SNEAKING_RIGHT_CLICK_SIGN: NONE

SNEAKING_LEFT_CLICK_SHOPBLOCK: NONE
SNEAKING_RIGHT_CLICK_SHOPBLOCK: NONE
```

This keeps normal shop trading and management on the shop's physical sign/block while leaving display interactions disabled by default.

## GUI Mode

To use QuickShop's GUI-based trading and control panel, interactions can instead be mapped to:

```text
TRADE_UI
CONTROL_PANEL_UI
```

For example:

```yaml
STANDING_LEFT_CLICK_SIGN: TRADE_UI
STANDING_RIGHT_CLICK_SIGN: CONTROL_PANEL_UI

STANDING_LEFT_CLICK_SHOPBLOCK: TRADE_UI
STANDING_RIGHT_CLICK_SHOPBLOCK: NONE

SNEAKING_LEFT_CLICK_SIGN: TRADE_UI
SNEAKING_RIGHT_CLICK_SIGN: CONTROL_PANEL_UI

SNEAKING_LEFT_CLICK_SHOPBLOCK: TRADE_UI
SNEAKING_RIGHT_CLICK_SHOPBLOCK: NONE
```

The display keys can also be configured independently if you want interactions with the shop display to open a GUI.

For example:

```yaml
STANDING_LEFT_CLICK_DISPLAY: TRADE_UI
STANDING_RIGHT_CLICK_DISPLAY: CONTROL_PANEL_UI
```

## Direct Trade Mode

QuickShop also supports direct trade behaviors.

An example configuration is:

```yaml
STANDING_LEFT_CLICK_SIGN: TRADE_INTERACTION
STANDING_RIGHT_CLICK_SIGN: CONTROL_PANEL

STANDING_LEFT_CLICK_SHOPBLOCK: TRADE_INTERACTION
STANDING_RIGHT_CLICK_SHOPBLOCK: NONE

SNEAKING_LEFT_CLICK_SIGN: TRADE_DIRECT
SNEAKING_RIGHT_CLICK_SIGN: TRADE_DIRECT_ALL

SNEAKING_LEFT_CLICK_SHOPBLOCK: TRADE_DIRECT
SNEAKING_RIGHT_CLICK_SHOPBLOCK: NONE
```

This allows normal interaction while standing and faster direct trading while sneaking.

## Configuring Display Interactions

The four display interactions are disabled by default:

```yaml
STANDING_LEFT_CLICK_DISPLAY: NONE
STANDING_RIGHT_CLICK_DISPLAY: NONE
SNEAKING_LEFT_CLICK_DISPLAY: NONE
SNEAKING_RIGHT_CLICK_DISPLAY: NONE
```

You can assign them the same behaviors used by signs and shop blocks.

For example, to make a normal left-click on the display open the Trade Menu:

```yaml
STANDING_LEFT_CLICK_DISPLAY: TRADE_UI
```

To make right-click open the shop control panel:

```yaml
STANDING_RIGHT_CLICK_DISPLAY: CONTROL_PANEL_UI
```

Or configure sneaking interactions separately:

```yaml
SNEAKING_LEFT_CLICK_DISPLAY: TRADE_DIRECT
SNEAKING_RIGHT_CLICK_DISPLAY: TRADE_DIRECT_ALL
```

This makes the shop display a fully configurable interaction target rather than forcing it to behave like the underlying shop block.

## Using `NONE`

The behavior:

```text
NONE
```

tells QuickShop not to execute an interaction behavior for that input.

This is commonly used where Minecraft's normal interaction should remain available.

For example:

```yaml
STANDING_RIGHT_CLICK_SHOPBLOCK: NONE
```

allows normal right-click behavior on the shop block rather than forcing QuickShop to open another interaction.

The same default applies to display interactions:

```yaml
STANDING_LEFT_CLICK_DISPLAY: NONE
STANDING_RIGHT_CLICK_DISPLAY: NONE
SNEAKING_LEFT_CLICK_DISPLAY: NONE
SNEAKING_RIGHT_CLICK_DISPLAY: NONE
```

## Example Custom Layout

A server could configure interactions so that:

- standing left-click opens the Trade GUI;
- standing right-click opens the Control Panel;
- sneaking left-click performs a direct trade;
- display left-click opens the Trade GUI;
- display right-click does nothing.

For example:

```yaml
version: 4

STANDING_LEFT_CLICK_SIGN: TRADE_UI
STANDING_RIGHT_CLICK_SIGN: CONTROL_PANEL_UI
STANDING_LEFT_CLICK_SHOPBLOCK: TRADE_UI
STANDING_RIGHT_CLICK_SHOPBLOCK: NONE
STANDING_LEFT_CLICK_CONTAINER: TRADE_UI
STANDING_RIGHT_CLICK_CONTAINER: NONE
STANDING_LEFT_CLICK_DISPLAY: TRADE_UI
STANDING_RIGHT_CLICK_DISPLAY: NONE

SNEAKING_LEFT_CLICK_SIGN: TRADE_DIRECT
SNEAKING_RIGHT_CLICK_SIGN: TRADE_DIRECT_ALL
SNEAKING_LEFT_CLICK_SHOPBLOCK: TRADE_DIRECT
SNEAKING_RIGHT_CLICK_SHOPBLOCK: NONE
SNEAKING_LEFT_CLICK_CONTAINER: NONE
SNEAKING_RIGHT_CLICK_CONTAINER: NONE
SNEAKING_LEFT_CLICK_DISPLAY: TRADE_DIRECT
SNEAKING_RIGHT_CLICK_DISPLAY: NONE
```

## Summary

The Interaction Manager lets you independently control:

```text
Player posture
+
Click type
+
Interaction target
+
QuickShop behavior
```

In the current interaction configuration, QuickShop supports signs, shop blocks, containers, and displays as separate targets.

The new display interaction mappings are:

```yaml
STANDING_LEFT_CLICK_DISPLAY: NONE
STANDING_RIGHT_CLICK_DISPLAY: NONE
SNEAKING_LEFT_CLICK_DISPLAY: NONE
SNEAKING_RIGHT_CLICK_DISPLAY: NONE
```

These default to `NONE`, but server owners can map them to any registered QuickShop interaction behavior.
