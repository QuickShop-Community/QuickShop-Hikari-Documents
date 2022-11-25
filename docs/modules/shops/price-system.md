# Price Limiter

QuickShop provide a price limiter allow you specific the item's min or max price on your server.

![price-restricted](img/price-restricted.png)

To edit the limit rules, you need open `price-restriction.yml` file.

## Enable the limiter

Limiter are disabled by default, you must turn on it before edit the rules to let it take the effects.

```yaml
enable: true
```

## Define unspecified item price limit

You can limit all items maximum or minimum price that not match any rules.

```yaml
undefined: # This option not control by enable option, always enabled
  min: 0.01 # Can be zero if you want player create a free shop
  max: -1 # Actually this can be up to 1.7976931348623157E308
```

## Create a rule

All rules are under the `rules` section in configuration.

```yaml
rules: # Rules set
  example1: # Rules name, used for identifier and permission node (quickshop.price.restriction.bypass.<name>)
    items: # Items in the rule (https://hub.spigotmc.org/javadocs/spigot/org/bukkit/Material.html), or the reference the item lookup table by adding @ before the name
      - STONE_SWORD
      - STONE_PICKAXE
      - STONE_AXE
      - STONE_SHOVEL
      - STONE_HOE
    currency: # Currency name, If your plugin doesn't support multi-currency (Vault API), this section won't be used
      - '*'
    min: 1.0 # Min price (double)
    max: 50.0 # Max price (double)
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
The item name can be [Bukkit Material Name](https://hub.spigotmc.org/javadocs/spigot/org/bukkit/Material.html) or [Item Reference](../item-ref.md) tag.

The `currency` only works under [Multi Currency](../multi-currency.md) mode.

The `min` means the item minimal price.  
The `max` means the item maxmium price.  

All items in one rule set share same price limit, to give different price limit, you must create another rule.  

## Permission

The players who has `quickshop.price.restriction.bypass.<rule-name>` can ignore that rule's limitation.
