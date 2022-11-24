# Permission

Most QuickShop features are controlled by permission, you're able to control most feature by learn QuickShop-Hikari's permissions.

## Basic LuckPerms Guide

To give a group for the specfic permission, you can use:  
**Grant**: `/lp group <group> permission set <permission> true`  

Or revoke it by execute:  
**Revoke**: `/lp group <group> permission unset <permission>`

If a permission are included in a *Simple Permission*, you can explicit override to disable it:  
**Force disable**: `/lp group <group> permission set <permission> false`

If you don't know what name for your group, just type `default`.  
To learn more about LuckPerms, you can read their wiki [here](https://luckperms.net/wiki/Home).

## Simple Permissions

QuickShop provides a simple permission that allow you quick setup permissions, they're:

`quickshop.player` which contains all [sub permission nodes](https://github.com/Ghost-chu/QuickShop-Hikari/blob/f7b12693d753fa9d2f147238b3afdf0e4030cfa6/quickshop-bukkit/src/main/resources/plugin.yml#L78) that player required.  
`quickshop.moderator` which contains all [sub permission nodes](https://github.com/Ghost-chu/QuickShop-Hikari/blob/f7b12693d753fa9d2f147238b3afdf0e4030cfa6/quickshop-bukkit/src/main/resources/plugin.yml#L101) that moderators required.  

The biggest advantage of using Simple Permission is that when a new permission is added to QuickShop, it will be automatically authorized without additional configuration.

## Details Permissions

There is a detailed list of all QuickShop-Hikari permission nodes, you can grant/revoke them by command.

### Player Permissions

* quickshop.use  
  Required for any QuickShop Actions.
* quickshop.create.sell  
  Required to make a shop (Sell-Mode)
* quickshop.create.buy  
  Required to make a shop (Buy-Mode) or to switch from Sell to Buy-Mode.
* quickshop.create.stacks  
  Required to allow selling items in stacks.
* quickshop.create.changeitem  
  Allows a player to change a shop's item.
* quickshop.create.changeamount  
  Allows a player to change the item amount per buy/sell.
* quickshop.create.changeprice  
  Allows a player to change the buy/sell price of their shops.
* quickshop.create.double  
  Allows a player to create a double chest shop.
* quickshop.create.cmd  
  Required to have access to the `/qs create` command.  
  This command may bypass certain protections of not-supported protection plugins!
* quickshop.transfer  
  Required to transfer all owned shops to another player.
* quickshop.find  
  Required to use `/qs find <item>`
* quickshop.fetchmessage  
  Required to use `/qs fetchmessage`
* quickshop.staff  
  Required to use `/qs staff` and all its subcommands.
* quickshop.preview  
  Required to use the GUI Item Preview.
* quickshop.currency  
  Required to use the `/qs currency <currency>`
* quickshop.shopnaming  
  Required to use the `/qs name <name>`
* quickshop.permission  
  Required to use the `/qs permission`
* quickshop.benefit  
  Required to use the `/qs benefit`

### Admin Permissions

* quickshop.unlimited  
  Required to use `/qs unlimited`
* quickshop.alwayscounting  
  Required to use `/qs alwayscounting`
* quickshop.setowner  
  Required to use /qs setowner
* quickshop.other.destroy  
  Allows the player to remove/destroy the shops of others.
* quickshop.other.open  
  Allows the player to open chests of other shops and take/put items from/into it.
* quickshop.other.price  
  Allows the player to change the price of someone's shop.
* quickshop.transfer.other  
  Required to transfer ALL shops of someone to another player.
* quickshop.refill  
  Allows the player to refill their shops using a command, essentially making the shop having unlimited items.
* quickshop.empty  
  Allows the player to clear the shop's inventory.
* quickshop.clean  
  Allows the purging/removal of any Shops that have no items in stock.
* quickshop.bypass.`<ItemID>`  
  Required to sell blacklisted items (E.g. bedrock).
* quickshop.price.restriction.bypass.`<RuleName>`  
  Required to bypass a specific price limit rule.
* quickshop.alerts  
  Required to receive notifications about possible cheating, plugin warnings and updates.
* quickshop.info  
  Required to use `/qs info`
* quickshop.debug  
  Required to use `/qs debug`
* quickshop.paste  
  Required to use `/qs paste`
* quickshop.purge  
  Required to use `/qs purge`
* quickshop.create.admin  
  Required to bypass any protection-checks while creating a shop using `/qs supercreate`
* quickshop.tax  
  Permission to bypass the tax fee.
* quickshop.tax.bypassunlimited  
  Permission to bypass the tax fee but only in the unlimited shop.
* quickshop.cleanghost  
  Permission to remove any broken shop using `/qs cleanghost`
* quickshop.export  
  Permission to use `/qs export`  
  This permission is pointless since the command is console only.
* quickshop.recovery  
  Permission to use `/qs recovery`  
  This permission is pointless since the command is console only.
* quickshop.removeworld  
  Permission to remove all shops in a world using /qs removeworld
* quickshop.other.changeitem  
  Allows the player to change the item of someone's shop.
* quickshop.other.changeamount  
  Allows the player to change the bulk amount of someone's shop.
* quickshop.other.shopnaming  
  Allows the player to change the name of someone's shop.
* quickshop.bypass.namefee  
  Allows the player to bypass the fee of shop naming.
* quickshop.database  
  Permission to use `/qs database`
