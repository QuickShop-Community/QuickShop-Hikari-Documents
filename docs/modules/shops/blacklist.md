# Blacklist System

Server administrator can disable shop creation at/for world or items.

## World Blacklist

The worlds added into `shop.blacklist-world` will be disabled for new shop creation.

```yaml
shop:
  #The list of worlds in which creating new shops is disabled.
  blacklist-world:
    - disabled_world_name
```

## Item Blacklist

### Item name based

Server administrator can add the item name that disallow used for shop creating into `blacklist` in config.yml:

```yaml
#List of items that can't be sold in shops.
#Anyone with the quickshop.bypass.<itemID> permission can bypass it.
#Add the reference the item lookup table by adding @ before the name.
#For referenced item, the permission quickshop.bypass.reference will be used.
blacklist:
  - Bedrock
```

The `blacklist` supports [Item Reference](../item-ref.md)

### Item lores based

Server administrator can add the item lores that disallow used for shop creating into `shop.blacklist-lores` in config.yml:

```yaml
shop:
  #The list of lore keywords that are blocked from being sold.
  #This will not affect existing shops!
  blacklist-lores:
    - "SoulBound"
```

### Legacy shops

New rules only blocks the shop creation, it won't affect all exists shops.
