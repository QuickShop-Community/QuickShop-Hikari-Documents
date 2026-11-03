---
slug: /modules/performance-tweaking
---
# Performance Tweaking

If you are running a larger network, you can tune QuickShop-Hikari's settings for better performance.

:::info

QuickShop-Hikari's default configuration balances performance and player experience. You do not need to tune it unless the plugin is affecting server performance.

:::

## Trim the isolated data

As QuickShop-Hikari operates, some records may become isolated and no longer referenced by other data.

Trimming isolated data can improve plugin startup and database query times.

```plain
/quickshop database trim
```

## Purge the history logs

:::caution

Purge the history logs will also reset all QuickShop-Hikari metrics on this server, and have the risk make other addons who depend on internal-metrics stop working.

Take care and backup!

:::

QuickShop-Hikari will record logs into database including:

* System logs
* Shop Creation
* Shop Changes
* Shop Deletion
* Player Purchase
* Any Transaction by QuickShop-Hikari

You can purge them by running:

```plain
/quickshop database purgelogs
```

## Use Virtual DisplayItem

:::note

This feature is **ENABLED** by default but only works if you have ProtocolLib or PacketEvents installed.

:::  

If you hadn't try Virtual DisplayItem yet, you totally should use it! It greatly improve the display performance and tick time.

See [DisplayItem System](../shop-management/display-system.md)

## Turn off offline-player auto-complete

:::note

This feature is **DISABLED** by default.

:::  

The offline-player auto-complete can offer better experience for player auto-complete.  
But it can create massive Mojang API requests if server running under online-mode.  
It can increase the load of Mojang's API server and may ban your ip for few minutes to too frequent requests.  
Disable this feature by changing the following setting in `config.yml`:

```yaml
#Should QS use OfflinePlayer list for TabComplete?
#This might improve player experience, but may cause lag due to searching what can be a long list.
#false = Only use the OnlinePlayer list.
#true = A list of all players that have ever joined your server.
include-offlineplayer-list: false
```

## Turn off responsive inventory stock/space recalculate

:::note

This feature is **DISABLED** by default.

:::

QuickShop-Hikari will recalculate the shop inventory contents for update stock/space on hopper move event.  
It may cause the heavy load the hurt the TPS on busy or redstone theme servers.

It can be disabled by changing the setting below:

```yaml
shop:
  #Update the signs when something (eg Hoppers) triggers InventoryMoveItemEvent?
  #Disable this if you think that it impacts your server performance.
  update-sign-when-inventory-moving: false
```

## Turn off display item auto despawn

:::note

This feature is **DISABLED** by default.

:::

The display-auto-despawn will check ALL loaded shops location and calculate the distance with ALL online players who in the same world with target shop.  
It can cause the heavy load on your server.

Disable this feature by changing the setting below:

```yaml
shop:
  #Allow QuickShop to automatically despawn displays when no players are in range of the shop.
  display-auto-despawn: false
```

## Disable QuickShop-Reremake shop sign migrating

:::note

This feature is **DISABLED** by default.

:::

If your server is not migrated from QuickShop-Reremake, you should keep this option off to avoid unnecessary sign metadata checks.

```yaml
# Legacy data updater
# Turn on this will make QuickShop to execute extra checks and may affect performance.
# Only turn it on when you updating from old versions.
legacy-updater:
  shop-sign: false
```
