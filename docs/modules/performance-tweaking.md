# Performance Tweaking

If you're running a larget network, you can tweak QuickShop-Hikari settings for better performance.

:::info

The default configuration of QuickShop-Hikari has achieved a moderate balance between performance and player friendliness, unless you notice that QuickShop-Hikari has affected the performance of the server, otherwise you do not need to perform optimization.

:::

## Trim the isolated data

While the QuickShop-Hikari working progress, some data will went to a isolated data which had no reference by any other records.

Trim the isolated data can improve the plugin startup time and database query time.

```plain
/qs database trim
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

You can purge them by execute command:

```plain
/qs database purgelogs
```

## Use Virual DisplayItem

:::note

This feature are **ENABLED** by default but only works if you have ProtocolLib installed.

:::  

If you hadn't try Virtual DisplayItem yet, you totally should use it! It greatly improve the display performance and tick time.

See [DisplayItem System](shops/display-system.md)

## Turn off offline-player auto-complete

:::note

This feature are **DISABLED** by default.

:::  

The offline-player auto-complete can offer better experenice for player auto-complete.  
But it can create massive Mojang API requests if server running under online-mode.  
It can increase the load of Mojang's API server and may ban your ip for few mintues to too frequent requests.  
Turn off this feature by set the settings in config.yml like below:

```yaml
#Should QS use OfflinePlayer list for TabComplete?
#This might improve player experience, but may cause lag due to searching what can be a long list.
#false = Only use the OnlinePlayer list.
#true = A list of all players that have ever joined your server.
include-offlineplayer-list: false
```

## Turn off responsive inventory stock/space recalculate

:::note

This feature are **ENABLED** by default.

:::

QuickShop-Hikari will recalculate the shop inventory contents for update stock/space on hopper move event.  
It may cause the heavy load the hurt the TPS on busy or redstone theme servers.

 it can be disabled by change the setting below:

```yaml
shop:
  #Update the signs when something (eg Hoppers) triggers InventoryMoveItemEvent?
  #Disable this if you think that it impacts your server performance.
  update-sign-when-inventory-moving: false
```

## Turn off display item auto despawn

:::note

This feature are **DISABLED** by default.

:::

The display-auto-despawn will check ALL loaded shops location and calculate the distance with ALL online players who in the same world with target shop.  
It can cause the heavy load on your server.

Disable this feature by change the setting below:

```yaml
shop:
  #Allow QuickShop to automatically despawn displays when no players are in range of the shop.
  display-auto-despawn: false
```

## Disable QuickShop-Reremake shop sign migrating

:::note

This feature are **DISABLED** by default.

:::

If your server are not migrated from QuickShop-Reremake, you should keep this option off to avoid unnecessary sign metadata checks.

```yaml
# Legacy data updater
# Turn on this will make QuickShop to execute extra checks and may affect performance.
# Only turn it on when you updating from old versions.
legacy-updater:
  shop-sign: false
```
