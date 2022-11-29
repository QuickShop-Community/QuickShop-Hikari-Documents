# Item Matcher

ItemMatcher is a utility used by QuickShop-Hikari to compare the items, it is the most important thing in whole system.

:::caution

If this feature is misconfigured, it will cause the plugin to stop working, and it can even be used for dupes, glitches or even worse.  
**TL;DR: Keep default unless you know what you're doing.**

:::

## Matchers

QuickShop-Hikari supports two of matchers by default:

* Bukkit Item Matcher (default)
* QuickShop Item Matcher

You can change the matcher by tweak the setting:

```yaml
matcher:
  #Matcher type
  #0= QuickShop item matcher with configurable options below.
  #1= Bukkit item matcher, can be more accurate.
  work-type: 1
```

By default, QuickShop-Hikari will use Bukkit's matcher to provide the best cross-compatibility.  
But still, you can toggle to QuickShop Item Matcher if you need customize the comparing or running QuickShop on the server jar which have bug affect the Bukkit comparing system.

## Customize the metadata compareing

Customize only works under QuickShop Item Matcher.  

:::info

Using the QuickShop Item Matcher may have a slight performance impact on the server. Using the Bukkit API to compare item by item results in more serialization/deserialization work.

Keep using Bukkit Item Matcher if not necessary.

:::

You can specific to enable or disable the some checks by tweak the configuration.

```yaml
matcher:
  #For Item (Only works under QuickShop ItemMatcher)
  item:
    #Should the Plugin check the item damage?
    damage: true
    #Should the Plugin check the item repair cost?
    repaircost: false
    #Should the Plugin check the item display name?
    displayname: true
    #Should the Plugin check the item lores?
    lores: true
    #Should the Plugin check the item enchs?
    enchs: true
    #Should the Plugin check the item potions?
    potions: true
    #Should the Plugin check the item attributes?
    attributes: true
    #Should the Plugin check the item itemflags?
    itemflags: true
    #Should the Plugin check the item custommodeldata?
    custommodeldata: true
    #Should the Plugin check the item bookmetas?
    books: true
    #Should the Plugin check the banner meta?
    banner: true
    #Should the Plugin check the skull meta?
    skull: true
    #Should the Plugin check the firework meta?
    firework: true
    #Should the Plugin check the map meta?
    map: true
    #Should the Plugin check the leather armor meta?
    leatherArmor: true
    #Should the Plugin check the fishBucket meta?
    fishBucket: true
    #Should the Plugin check the suspiciousStew meta?
    suspiciousStew: true
    #Should the Plugin check the shulkerBox contents?
    shulkerBox: true
    #Should the Plugin check the bundle contents?
    bundle: true
```
