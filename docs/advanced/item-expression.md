---
slug: /modules/item-expression
---
# Item Expression

Hikari allows you to use a string to represent or match items.

## Matching with Material name

Enter the Bukkit material name directly.

```yaml
- BEDROCK # select items that match the given material name
- GOLDEN_SWORD
```

You can find all materials [here](https://hub.spigotmc.org/javadocs/spigot/org/bukkit/Material.html).

## Matching with Item Reference

Add the `@` prefix before the item reference name.

```yaml
- "@purediamond" # select items that match specific item references
```

Please also check [here](item-ref.md)

## Matching with Enchantment

Add the `%` prefix before the enchantment's namespaced key.

```yaml
- "%minecraft:sharpness" # select all items with sharpness enchantment
- "%minecraft:sharpness|1|3" # select all items with sharpness enchantment but only the enchantment level between 1 and 3
- "%ecoenchants:soulbound" # third-party enchantments are also supported if they are registered in Bukkit's enchantment registry
```
