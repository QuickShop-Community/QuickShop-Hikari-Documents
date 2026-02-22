# Price Limiter

QuickShop provide a price limiter allow you specific the item's min or max price on your server.

![price-restricted](img/price-restricted.png)

To edit the limit rules, you need to open `price-restriction.yml` file.

---

## Enable the limiter

Limiter is disabled by default, you must turn it on before you edit the rules to make it works.

```yaml
enable: true
```

---

## Define unspecified item price limit

You can limit all items maximum or minimum price that not match any rules.

```yaml
undefined: # This option not control by enable option, always enabled
  min: 0.01 # Can be zero if you want player create a free shop
  max: -1 # Actually this can be up to 1.7976931348623157E308
```

---

## Create a rule

All rules are under the `rules` section in configuration.

```yaml
rules: # Rules set
  example1: # Rules name, used for identifier and permission node (quickshop.price.restriction.bypass.<name>)
    items:
      - STONE_SWORD
      - STONE_PICKAXE
      - STONE_AXE
      - STONE_SHOVEL
      - STONE_HOE
    currency:
      - '*'
    min: 1.0
    max: 50.0

  example2:
    items:
      - GOLDEN_SWORD
      - GOLDEN_PICKAXE
      - GOLDEN_AXE
      - GOLDEN_SHOVEL
      - GOLDEN_HOE
    currency:
      - '*'
    min: 10.0
    max: 100.0

  example3:
    items:
      - DIAMOND_SWORD
      - DIAMOND_PICKAXE
      - DIAMOND_AXE
      - DIAMOND_SHOVEL
      - DIAMOND_HOE
    currency:
      - '*'
    min: 10.0
    max: 100.0
```

The `example1` and `example2` are rule name, you can write any random name that you can read.

The `items` is a list that contains the items which you want limit to.
The item name can be:

- Bukkit Material Name
- Item Reference tag (add `@` prefix)

The `currency` only works under Multi Currency mode.

The `min` means the item minimal price.
The `max` means the item maximum price.

All items in one rule set to share the same price limit, to give different price limit, you must create another rule.

---

# 🆕 Wildcard Support in Item Blacklist (6.2.0.11+)

QuickShop now supports wildcard pattern matching inside item configurations.

This allows you to block entire categories of items using simple patterns instead of listing every item manually.

## Supported Wildcards

| Pattern | Meaning                          |
| ------- | -------------------------------- |
| `*`     | Matches any number of characters |
| `?`     | Matches a single character       |

### Case-Insensitive Matching

Pattern matching is case-insensitive.

```
*_axe
*_AXE
```

Both behave the same.

---

## Example Usage

Instead of writing:

```yaml
items:
  - WOODEN_AXE
  - STONE_AXE
  - IRON_AXE
  - GOLDEN_AXE
  - DIAMOND_AXE
  - NETHERITE_AXE
```

You can now simply write:

```yaml
items:
  - "*_AXE"
```

### More Examples

Block all spawn eggs:

```yaml
items:
  - "*_SPAWN_EGG"
```

Block all swords:

```yaml
items:
  - "*_SWORD"
```

Use single-character matching:

```yaml
items:
  - "DIAMOND_SPAWN_EG?"
```

---

## Important Notes

- Wildcard patterns apply to Material names.
- They do not replace Item Reference (`@reference`) matching.
- Patterns are evaluated during rule matching.
- Wildcards reduce configuration size and improve maintainability.

---

## Permission

Players who have:

```
quickshop.price.restriction.bypass.<rule-name>
```

can ignore that rule's limitation.