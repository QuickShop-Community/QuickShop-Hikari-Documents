---
slug: /compat-modules/reforges
---
# Reforges Compatibility

:::info

Can't find where to download the JAR? [Click here](../faq/where-addons-compacts-at).

:::

QuickShop-Hikari includes an optional compatibility module for **Reforges**.

The integration allows QuickShop item previews to use Reforges' own item display formatting, ensuring reforge information is represented when QuickShop prepares an item preview for a player.

## Installation

Install the compatibility module alongside:

- QuickShop-Hikari
- Reforges

The module requires both plugins and is loaded automatically when they are present.

No additional QuickShop configuration is required.

## What It Does

The Reforges compatibility module integrates with QuickShop's item-preview system.

Before QuickShop presents an item preview to a player, the module passes a cloned version of the preview item through Reforges' `ReforgesDisplay`.

This allows Reforges-specific display information to be applied to the item shown by QuickShop.

The formatted clone is then returned to QuickShop as the preview item.

## Player-Specific Preview Formatting

The integration listens for QuickShop's:

```text
ItemPreviewComponentPrePopulateEvent
```

When the event contains a player, the module:

1. clones the preview `ItemStack`;
2. applies the standard Reforges display processing;
3. applies Reforges display processing using its display properties;
4. replaces the QuickShop preview item with the formatted clone.

:::info

Reforges formatting is only applied when the QuickShop preview has an associated player.

:::

## Shop Items Are Not Modified

The compatibility module works on a cloned preview `ItemStack`.

It does not modify the actual item stored by the shop simply to display Reforges information.

The integration is specifically part of QuickShop's player-facing item-preview rendering process.

## Configuration

The Reforges compatibility module does not provide its own configuration file.

Once the compatibility module, QuickShop-Hikari, and Reforges are installed, the integration operates automatically.

## Permissions

The module does not add any player-facing permissions.

## Dependencies

The compatibility module requires:

```text
Reforges
QuickShop-Hikari
```

## Summary

The Reforges compatibility module integrates Reforges with QuickShop's item-preview pipeline.

Its purpose is to ensure that Reforges display information is applied to the item preview shown to players without modifying the shop's actual stored item.

There are no additional configuration options or permissions required.
