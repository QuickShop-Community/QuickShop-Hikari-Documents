---
slug: /modules/itemmatcher
---
# Item Matcher

The Item Matcher controls how QuickShop-Hikari decides whether two `ItemStack`s should be treated as the same item for shop matching.

Because item matching affects trading, stock checks, item lookup, and shop behavior, changing these settings can have significant consequences.

:::caution

Incorrect matcher configuration can cause unexpected shop behavior and may create item-matching inconsistencies.

**Keep the defaults unless you specifically need different comparison behavior.**

:::

## Matcher Modes

QuickShop-Hikari currently supports four matcher modes:

| `work-type` | Matcher | Status |
| ---: | --- | --- |
| `0` | QuickShop Item Matcher | Deprecated; planned for removal in 6.4 |
| `1` | Bukkit Item Matcher | Default |
| `2` | Strict Bukkit Matcher | Supported |
| `3` | Modern Matcher | Supported; configurable with Data Components |

Configure the matcher in `config.yml`:

```yaml
matcher:
  # Matcher type:
  # 0 = QuickShop matcher (deprecated; planned for removal in 6.4)
  # 1 = Bukkit matcher
  # 2 = Strict Bukkit matcher (equals method)
  # 3 = Modern matcher
  work-type: 1
```

## Bukkit Item Matcher

The default matcher is:

```yaml
work-type: 1
```

This uses Bukkit's item similarity behavior and is the recommended default for most servers.

It provides good compatibility with normal Bukkit/Paper item handling without requiring additional matcher configuration.

## Strict Bukkit Matcher

The strict Bukkit matcher is:

```yaml
work-type: 2
```

This uses a stricter equality comparison than the normal Bukkit matcher.

Use this only if you specifically need stricter item equality rules.

## Modern Matcher

The Modern Matcher is:

```yaml
work-type: 3
```

The Modern Matcher was introduced for modern Paper versions and uses Paper's Data Component API.

It is whitelist-based: only enabled component keys under:

```text
matcher.components
```

are compared.

This makes it the preferred configurable matcher for newer QuickShop installations.

## Modern Matcher Base Settings

The Modern Matcher also supports these base settings:

```yaml
matcher:
  # Ignore stack amount while matching.
  # Recommended for shop matching.
  ignore-count: true

  # Require ItemStack#getType() to match.
  # Strongly recommended.
  check-material: true
```

### `ignore-count`

```yaml
ignore-count: true
```

When enabled, the amount of items in the stack does not affect whether two items match.

For example:

```text
1 diamond
64 diamonds
```

can still represent the same shop item.

This is the recommended behavior for shop matching.

### `check-material`

```yaml
check-material: true
```

Requires both items to have the same Bukkit material.

For example:

```text
DIAMOND
```

will not match:

```text
EMERALD
```

This should normally remain enabled.

## Modern Matcher Components

The Modern Matcher compares only the enabled entries under:

```yaml
matcher:
  components:
```

There are two kinds of entries:

- **Direct component keys** — map directly to Paper Data Component keys.
- **Group component toggles** — expand into multiple related component keys.

### Direct Component Keys

The current built-in direct component configuration is:

```yaml
matcher:
  components:
    DAMAGE: true
    REPAIR_COST: false
    CUSTOM_NAME: true
    ITEM_NAME: false
    LORE: true
    CUSTOM_MODEL_DATA: true
    ENCHANTMENTS: true
    STORED_ENCHANTMENTS: true
    ATTRIBUTE_MODIFIERS: true
    UNBREAKABLE: true
    TRIM: true
    DYED_COLOR: true
    HIDE_ADDITIONAL_TOOLTIP: true
    ENCHANTMENT_GLINT_OVERRIDE: true
    POTION_CONTENTS: true
    POTION_DURATION_SCALE: true
```

These correspond to modern item components such as durability, lore, enchantments, custom names, trim, potion data, and other item metadata.

### Group Component Toggles

The current grouped component toggles are:

```yaml
matcher:
  components:
    BOOKS: true
    BANNER: true
    SKULL: true
    FIREWORK: true
    MAP: true
    LEATHER_ARMOR: true
    FISH_BUCKET: true
    SUSPICIOUS_STEW: true
    SHULKER_BOX: true
    BUNDLE: true
```

Group toggles represent logical groups of related Data Components.

For example:

```text
BOOKS
```

covers the relevant written and writable book components rather than requiring each underlying component key to be configured individually.

## Complete Modern Matcher Example

A complete current configuration looks like:

```yaml
matcher:

  # 0 = QuickShop matcher (deprecated; planned for removal in 6.4)
  # 1 = Bukkit matcher
  # 2 = Strict Bukkit matcher
  # 3 = Modern matcher
  work-type: 3

  # Ignore stack size when matching.
  ignore-count: true

  # Require the material/type to match.
  check-material: true

  components:

    # Direct component keys
    DAMAGE: true
    REPAIR_COST: false
    CUSTOM_NAME: true
    ITEM_NAME: false
    LORE: true
    CUSTOM_MODEL_DATA: true
    ENCHANTMENTS: true
    STORED_ENCHANTMENTS: true
    ATTRIBUTE_MODIFIERS: true
    UNBREAKABLE: true
    TRIM: true
    DYED_COLOR: true
    HIDE_ADDITIONAL_TOOLTIP: true
    ENCHANTMENT_GLINT_OVERRIDE: true
    POTION_CONTENTS: true
    POTION_DURATION_SCALE: true

    # Group component toggles
    BOOKS: true
    BANNER: true
    SKULL: true
    FIREWORK: true
    MAP: true
    LEATHER_ARMOR: true
    FISH_BUCKET: true
    SUSPICIOUS_STEW: true
    SHULKER_BOX: true
    BUNDLE: true
```

## Legacy QuickShop Item Matcher

The legacy QuickShop Item Matcher is:

```yaml
work-type: 0
```

:::warning
The QuickShop Item Matcher is deprecated and planned for removal in QuickShop-Hikari 6.4.

Existing servers may continue using it during the 6.3 series, but new configurations should use the Bukkit matcher or Modern Matcher instead.
:::

The legacy matcher uses the older:

```yaml
matcher:
  item:
```

configuration model.

Example:

```yaml
matcher:
  item:
    damage: true
    repaircost: false
    displayname: true
    lores: true
    enchs: true
    potions: true
    attributes: true
    itemflags: true
    custommodeldata: true
    books: true
    banner: true
    skull: true
    firework: true
    map: true
    leatherArmor: true
    fishBucket: true
    suspiciousStew: true
    shulkerBox: true
    bundle: true
```

These settings affect only the legacy QuickShop matcher.

They do **not** control the Modern Matcher.

## Legacy Metadata Options

The old `matcher.item` settings control comparisons for metadata such as:

| Setting | Purpose |
| --- | --- |
| `damage` | Item durability/damage |
| `repaircost` | Anvil repair cost |
| `displayname` | Custom display name |
| `lores` | Item lore |
| `enchs` | Enchantments and stored enchantments |
| `potions` | Potion data |
| `attributes` | Attribute modifiers |
| `itemflags` | Bukkit item flags |
| `custommodeldata` | CustomModelData |
| `books` | Book metadata |
| `banner` | Banner metadata |
| `skull` | Skull/player-head metadata |
| `firework` | Firework metadata |
| `map` | Map metadata |
| `leatherArmor` | Leather armor metadata |
| `fishBucket` | Tropical fish bucket metadata |
| `suspiciousStew` | Suspicious stew effects |
| `shulkerBox` | Shulker box contents |
| `bundle` | Bundle contents |

Because this matcher is deprecated, avoid building new server behavior around these settings.

## Legacy vs Modern Configuration

The two configurable matcher systems use different configuration sections.

### Legacy QuickShop Matcher

```yaml
work-type: 0

matcher:
  item:
    damage: true
    lores: true
    enchs: true
```

### Modern Matcher

```yaml
work-type: 3

matcher:
  ignore-count: true
  check-material: true

  components:
    DAMAGE: true
    LORE: true
    ENCHANTMENTS: true
```

Do not mix the two models.

The `matcher.item` section belongs to the deprecated QuickShop matcher.

The `matcher.components` section belongs to the Modern Matcher.

## Choosing a Matcher

For most servers:

```yaml
work-type: 1
```

is the safest default.

Use:

```yaml
work-type: 2
```

only when strict Bukkit equality is specifically desired.

Use:

```yaml
work-type: 3
```

when you need configurable modern Data Component matching.

Avoid selecting:

```yaml
work-type: 0
```

for new installations because the legacy QuickShop matcher is planned for removal in 6.4.

## Summary

QuickShop-Hikari currently provides:

```text
0 = QuickShop Item Matcher
1 = Bukkit Item Matcher
2 = Strict Bukkit Matcher
3 = Modern Matcher
```

The important distinction is:

```text
matcher.item       → Legacy QuickShop Matcher
matcher.components → Modern Matcher
```

The legacy matcher remains available during 6.3 for compatibility, but it is deprecated and planned for removal in 6.4.
