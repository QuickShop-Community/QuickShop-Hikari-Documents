# Item Expression

Hikari allows you to use a string to represent or match items.

## Matching with Material name

Fill in the Material name of Bukkit directly.

```yaml
- BEDROCK # select items that matches given material name
- GOLDEN_SWORD
```

You can find all materials in [here](https://hub.spigotmc.org/javadocs/spigot/org/bukkit/Material.html).

## Matching with Item Reference

Add `@` prefix before item reference name.

```yaml
- "@purediamond" # select items that matches with specfics item references
```

Please also check [here](item-ref.md)

## Matching with Enchantment

:::info

This feature added since Hikari-4.0.0.0.

:::  

Add `%` prefix before enchantment namespaced key.

```yaml
- "%minecraft:sharpness" # select all items with sharpness enchantment
- "%minecraft:sharpness|1|3" # select all items with sharpness enchantment but only the enchantment level between 1 and 3
- "%ecoenchants:soulbound" # it also support 3rd-party enchantments IF they registered into Bukkit enchantments registry...
```
