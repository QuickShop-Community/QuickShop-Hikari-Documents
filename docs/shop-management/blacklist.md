---
slug: /modules/shops/blacklist
---
# Blacklist System

Server administrators can control where and what shops can be created.

You can restrict shop creation based on:

- World blacklist
- World whitelist
- Item blacklist
- Item lore blacklist

These rules only affect **new shop creation** and do not modify existing shops.

---

# World Restrictions

QuickShop now supports both blacklist and whitelist modes for world-based shop creation control.

---

## World Blacklist

Worlds added to `shop.blacklist-world` will have shop creation disabled.

```yaml
shop:
  # The list of worlds in which creating new shops is disabled.
  blacklist-world:
    - disabled_world_name
```

If a world is listed here:

* Players cannot create new shops.
* Existing shops remain functional.
* Trading is still allowed unless restricted elsewhere.

---

## World Whitelist (6.2.x+)

World whitelist allows you to restrict shop creation to specific worlds only.

```yaml id="ec5bzw"
shop:
  # Only allow shop creation in these worlds.
  whitelist-world:
    - survival_world
    - skyblock_world
```

When `whitelist-world` is used:

* Shops can only be created in listed worlds.
* All other worlds automatically block shop creation.
* Existing shops outside whitelist remain unaffected.

---

## Blacklist vs Whitelist

Use **blacklist-world** if:

* You want shops allowed everywhere except specific worlds.

Use **whitelist-world** if:

* You want shops allowed only in specific worlds.
* You run multi-world servers (creative, event, minigame, etc.).
* You want stricter control over economy worlds.

It is recommended to use whitelist mode for large multi-world networks.

---

# Item Restrictions

You can also restrict which items can be used to create shops.

---

## Item Name Based Blacklist

Add items to `blacklist` in `config.yml`:

```yaml id="ts8dzn"
# List of items that can't be sold in shops.
# Anyone with the quickshop.bypass.<itemID> permission can bypass it.
# Add the reference the item lookup table by adding @ before the name.
# For referenced item, the permission quickshop.bypass.reference will be used.
blacklist:
  - Bedrock
```

The `blacklist` supports:

* Bukkit Material names
* [Item Reference](../advanced/item-ref.md) tags (prefix with `@`)
* Wildcard patterns (6.2.0.11+)

Example wildcard:

```yaml id="t1xw2k"
blacklist:
  - "*_SPAWN_EGG"
  - "*_AXE"
```

---

## Item Lore Based Blacklist

Restrict items by lore keywords:

```yaml
shop:
  # The list of lore keywords that are blocked from being sold.
  # This will not affect existing shops.
  blacklist-lores:
    - "SoulBound"
```

If an item contains matching lore:

* Shop creation will be blocked.
* Existing shops are unaffected.

---

# Legacy Shops

Blacklist and whitelist rules only apply to:

* New shop creation

They do NOT:

* Delete existing shops
* Disable already-created shops

If you need to remove existing shops, use:

* `/qs clean`
* `/qs cleanghost`
* Manual removal

---

# Recommended Setup

For multi-world servers:

```yaml id="pkl91r"
shop:
  whitelist-world:
    - survival
    - skyblock
```

For creative restrictions:

```yaml id="hn3bue"
shop:
  blacklist-world:
    - creative
    - minigames
```

---

# Summary

The Blacklist System allows you to:

* Control which worlds allow shop creation
* Restrict specific items
* Block custom items via lore
* Use wildcard patterns
* Protect special-purpose worlds

World Whitelist support (6.2.0.11+) gives you stricter and safer economy control for large servers.
