# Permission

Most QuickShop features are controlled by permissions, you are able to control most features by using QuickShop-Hikari's permissions.

## Basic LuckPerms Guide

To give a group a specific permission, you can use:  
**Grant**: `/lp group <group> permission set <permission> true`  

To revoke it, execute:  
**Revoke**: `/lp group <group> permission unset <permission>`

If a permission is included in a *Simple Permission*, you can explicit override to disable it:  
**Force disable**: `/lp group <group> permission set <permission> false`

If you don't know what is the name of your group, use `default`.  
To learn more about LuckPerms, you can read their wiki at [here](https://luckperms.net/wiki/Home).

## Simple Permissions

QuickShop provides a simple permission that allows you to quickly setup permissions, they are:

`quickshop.player` which contains all [sub permission nodes](https://github.com/Ghost-chu/QuickShop-Hikari/blob/f7b12693d753fa9d2f147238b3afdf0e4030cfa6/quickshop-bukkit/src/main/resources/plugin.yml#L78) that players required.  
`quickshop.moderator` which contains all [sub permission nodes](https://github.com/Ghost-chu/QuickShop-Hikari/blob/f7b12693d753fa9d2f147238b3afdf0e4030cfa6/quickshop-bukkit/src/main/resources/plugin.yml#L101) that moderators required.  

The biggest advantage of using Simple Permission is that when a new permission is added to QuickShop, it will be automatically authorized without additional configuration.

## Details Permissions

There is a detailed list of all QuickShop-Hikari permission nodes, you can grant/revoke them by using command.

### Player Permissions

* quickshop.use  
  Required for any QuickShop actions.
* quickshop.create.sell  
  Required to create a shop (Sell-Mode)
* quickshop.create.buy  
  Required to create a shop (Buy-Mode) or to switch from Sell to Buy-Mode.
* quickshop.create.stacks  
  Required to allow selling items in stacks.
* quickshop.create.changeitem  
  Allows the player to change a shop's item.
* quickshop.create.changeamount  
  Allows the player to change the amount per buy/sell.
* quickshop.create.changeprice  
  Allows the player to change the buy/sell price of their shops.
* quickshop.create.double  
  Allows the player to create a double chest shop.
* quickshop.create.cmd  
  Required to have access to the `/quickshop create` command.  
  This command may bypass certain protections of not-supported protection plugins!
* quickshop.transfer  
  Required to transfer shops to another player.
* quickshop.find  
  Required to use `/quickshop find <item>`
* quickshop.fetchmessage  
  Required to use `/quickshop fetchmessage`
* quickshop.staff  
  Required to use `/quickshop staff` and all its subcommands.
* quickshop.preview  
  Required to use the GUI Item Preview.
* quickshop.currency  
  Required to use the `/quickshop currency <currency>`
* quickshop.shopnaming  
  Required to use the `/quickshop name <name>`
* quickshop.permission  
  Required to use the `/quickshop permission`
* quickshop.benefit  
  Required to use the `/quickshop benefit`
* quickshop.sign  
  Required to use the `/quickshop sign`
* quickshop.history  
  Required to use the `/quickshop history`
* quickshop.suggestprice  
  Required to use the `/quickshop suggestprice`

### Admin Permissions

* quickshop.unlimited  
  Required to use `/quickshop unlimited`
* quickshop.setowner  
  Required to use /quickshop setowner
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
  Required to use `/quickshop info`
* quickshop.debug  
  Required to use `/quickshop debug`
* quickshop.paste  
  Required to use `/quickshop paste`
* quickshop.purge  
  Required to use `/quickshop purge`
* quickshop.create.admin  
  Required to bypass any protection-checks while creating a shop using `/quickshop supercreate`
* quickshop.tax  
  Permission to bypass the tax fee.
* quickshop.tax.bypassunlimited  
  Permission to bypass the tax fee but only in the unlimited shop.
* quickshop.cleanghost  
  Permission to remove any broken shop using `/quickshop cleanghost`
* quickshop.export  
  Permission to use `/quickshop export`  
  This permission is pointless since the command is console only.
* quickshop.recovery  
  Permission to use `/quickshop recovery`  
  This permission is pointless since the command is console only.
* quickshop.removeworld  
  Permission to remove all shops in a world using /quickshop removeworld
* quickshop.other.changeitem  
  Allows the player to change the item of someone's shop.
* quickshop.other.changeamount  
  Allows the player to change the bulk amount of someone's shop.
* quickshop.other.shopnaming  
  Allows the player to change the name of someone's shop.
* quickshop.bypass.namefee  
  Allows the player to bypass the fee of shop naming.
* quickshop.other.sign  
  Allows a staff member to change the sign type of someone else's shop.
* quickshop.other.history  
  Permission to view the other's shop history
* quickshop.database  
  Permission to use `/quickshop database`
