# 权限

Permissions control most QuickShop features, and you can control most features using QuickShop-Hikari's permissions.

## 最简单的 LuckPerms 指南

要将一个权限节点授予一个权限组，您可以使用：  
**授予**：`/lp group <group> permission set <permission> true`

要移除这个权限节点，请使用：  
**移除**：`/lp group <group> permission unset <permission>`

If a permission is included in a _Simple Permission_, you can explicitly override to disable it:  
**Force disable**: `/lp group <group> permission set <permission> false`

If you don't know what the name of your group is, use `default`.  
To learn more about LuckPerms, read their wiki at [here](https://luckperms.net/wiki/Home).

## Simple Permissions

QuickShop 提供了一套简单的权限模板，方便您快速分配权限，它们是：

`quickshop.player` which contains all [sub permission nodes](https://github.com/QuickShop-Community/QuickShop-Hikari/blob/f7b12693d753fa9d2f147238b3afdf0e4030cfa6/quickshop-bukkit/src/main/resources/plugin.yml#L78) that players required.  
`quickshop.moderator` which includes all [sub permission nodes](https://github.com/QuickShop-Community/QuickShop-Hikari/blob/f7b12693d753fa9d2f147238b3afdf0e4030cfa6/quickshop-bukkit/src/main/resources/plugin.yml#L101) that moderators required.

The most significant advantage of using Simple Permission is that when a new permission is added to QuickShop, it will be automatically authorized without additional configuration.

## Details Permissions

这里是 QuickShop-Hikari 所有权限节点的详细列表。您可以使用命令授予 / 移除它们。

See [plugin.yml -> permissions](https://github.com/QuickShop-Community/QuickShop-Hikari/blob/hikari/quickshop-bukkit/src/main/resources/plugin.yml) node.
