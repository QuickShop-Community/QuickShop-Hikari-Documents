---
slug: /compat-modules/ecoenchants
---
# EcoEnchants Compatibility

:::info

Can't find where to download the JAR? [Click here](../faq/where-addons-compacts-at).

:::

QuickShop-Hikari includes an optional compatibility module for **EcoEnchants**.

The integration allows QuickShop item previews to use EcoEnchants' own display formatting and registers EcoEnchants enchantment names with QuickShop's localization system.

## Installation

Install the compatibility module alongside:

- QuickShop-Hikari
- EcoEnchants

The module requires both plugins and is loaded automatically when they are present.

No additional QuickShop configuration is required.

## What It Does

The EcoEnchants compatibility module provides two main integrations:

1. **EcoEnchants formatting in QuickShop item previews**
2. **EcoEnchants enchantment translation-key mappings**

## Item Preview Integration

QuickShop fires an item-preview event before an item is displayed to a player.

When a player-specific preview is being prepared, the compatibility module clones the preview `ItemStack` and passes it through EcoEnchants' `EnchantDisplay`.

This allows EcoEnchants-specific display information to be applied to the item that QuickShop presents to the player.

The modified clone is then returned to QuickShop as the preview item.

:::info

The integration only applies EcoEnchants display formatting when the preview has an associated player.

:::

## Enchantment Name Integration

The module also registers EcoEnchants enchantments with QuickShop's localized translation-key system.

For every enchantment reported by EcoEnchants, QuickShop registers a key using this format:

```text
ecoenchants:enchantment.<enchantment-id>
```

The key is mapped to the enchantment's raw display name from EcoEnchants.

This allows QuickShop's item-name and component rendering systems to correctly resolve EcoEnchants enchantment names where those translation keys are used.

## Reload Handling

EcoEnchants translation mappings are refreshed when QuickShop's configuration is reloaded.

The module also refreshes the mappings shortly after any of these plugins are enabled:

```text
EcoEnchants
libreforge
eco
```

This helps ensure the available EcoEnchants enchantments have been initialized before QuickShop registers their translation mappings.

## Configuration

The EcoEnchants compatibility module does not provide its own configuration file.

Once the compatibility module, QuickShop-Hikari, and EcoEnchants are installed, the integration operates automatically.

## Permissions

The module does not add any player-facing permissions.

## Dependencies

The compatibility module requires:

```text
EcoEnchants
QuickShop-Hikari
```

## Summary

The EcoEnchants compatibility module makes EcoEnchants items display more naturally inside QuickShop by:

- applying EcoEnchants' display formatting to player-facing QuickShop item previews;
- registering EcoEnchants enchantment translation keys with QuickShop;
- refreshing those mappings when QuickShop reloads or relevant Eco plugins are enabled.

There are no additional configuration options or permissions required.
