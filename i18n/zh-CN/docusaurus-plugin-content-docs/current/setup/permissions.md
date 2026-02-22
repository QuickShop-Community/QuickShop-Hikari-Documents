# Permission

Permissions control most QuickShop features, and you can control most features using QuickShop-Hikari's permissions.

## Basic LuckPerms Guide

To give a group a specific permission, you can use:\
**Grant**: `/lp group <group> permission set <permission> true`

To revoke it, execute:\
**Revoke**: `/lp group <group> permission unset <permission>`

If a permission is included in a _Simple Permission_, you can explicitly override to disable it:\
**Force disable**: `/lp group <group> permission set <permission> false`

If you don't know what the name of your group is, use `default`.\
To learn more about LuckPerms, read their wiki at [here](https://luckperms.net/wiki/Home).

## Simple Permissions

QuickShop provides a simple permission that allows you to quickly setup permissions, they are:

`quickshop.player` which contains all [sub permission nodes](https://github.com/QuickShop-Community/QuickShop-Hikari/blob/f7b12693d753fa9d2f147238b3afdf0e4030cfa6/quickshop-bukkit/src/main/resources/plugin.yml#L78) that players required.\
`quickshop.moderator` which includes all [sub permission nodes](https://github.com/QuickShop-Community/QuickShop-Hikari/blob/f7b12693d753fa9d2f147238b3afdf0e4030cfa6/quickshop-bukkit/src/main/resources/plugin.yml#L101) that moderators required.

The most significant advantage of using Simple Permission is that when a new permission is added to QuickShop, it will be automatically authorized without additional configuration.

## Details Permissions

There is a detailed list of all QuickShop-Hikari permission nodes, you can grant/revoke them by using command.

See [plugin.yml -> permissions](https://github.com/QuickShop-Community/QuickShop-Hikari/blob/hikari/quickshop-bukkit/src/main/resources/plugin.yml) node.
