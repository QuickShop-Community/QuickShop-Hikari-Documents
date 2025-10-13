# 性能调优

如果您运行的是大型服务器网络，则可以调整QuickShop-Hikari设置以获得更好的性能。

:::info

QuickShop-Hikari的默认配置已经在性能和玩家友好性之间取得了适度的平衡， 除非您注意到 QuickShop-Hikari已经影响到服务器的性能，否则您不需要执行优化。

:::

## 修剪孤立的数据

在QuickShop-Hikari工作时，一些数据会由于未被其他人引用，成为一个孤立的数据。

修剪孤立的数据可以改善插件启动时间和数据库查询时间。

```plain
/quickshop database trim
```

## 清除历史记录日志

:::caution

清除历史日志还将重置此服务器上的所有QuickShop-Hikari统计，并有可能使依赖内部统计的其他插件停止工作。

谨慎操作，注意备份！

:::

QuickShop-Hikari会将日志记录到数据库中，包括：

- 系统日志
- 商店创建
- 商店更改
- 商店删除
- 玩家购买
- QuickShop-Hikari的任何交易

您可以通过执行命令来清除他们：

```plain
/quickshop database purgelogs
```

## Use Virtual DisplayItem

:::note

This feature is **ENABLED** by default but only works if you have ProtocolLib or PacketEvents installed.

:::

If you hadn't try Virtual DisplayItem yet, you totally should use it! It greatly improve the display performance and tick time.

请参阅 [悬浮物系统](shops/display-system.md)

## 关闭离线玩家自动补全功能

:::note

默认情况下，此功能 **禁用** 。

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

## 关闭响应式剩余库存/剩余空间重计算

:::note

This feature is **DISABLED** by default.

:::

QuickShop-Hikari会在漏斗等物品传输事件上，重新计算商店库存内容。  
它可能会在繁忙或生电、红石服务器上造成相当高的负载，并降低服务器 TPS。  
It may cause the heavy load the hurt the TPS on busy or redstone theme servers.

可以通过更改下面的设置禁用它：

```yaml
shop:
  #Update the signs when something (eg Hoppers) triggers InventoryMoveItemEvent?
  #Disable this if you think that it impacts your server performance.
  update-sign-when-inventory-moving: false
```

## Turn off display item auto despawn

:::note

默认情况下，此功能 **禁用** 。

:::

The display-auto-despawn will check ALL loaded shops location and calculate the distance with ALL online players who in the same world with target shop.  
It can cause the heavy load on your server.

通过更改下面的设置禁用此功能：

```yaml
shop:
  #Allow QuickShop to automatically despawn displays when no players are in range of the shop.
  display-auto-despawn: false
```

## 禁用 QuickShop-Remake 商店信息牌迁移

:::note

默认情况下，此功能 **禁用** 。

:::

如果您的服务器没有从 QuickShop-Reemake 迁移，您应该关闭此选项，以避免不必要的告示牌元数据检查。

```yaml
# Legacy data updater
# Turn on this will make QuickShop to execute extra checks and may affect performance.
# Only turn it on when you updating from old versions.
legacy-updater:
  shop-sign: false
```

