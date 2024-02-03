# Per shop permission management

QuickShop-Hikari provide a system to allow control every single shop's permissions.

**THIS IS NOT PLUGIN PERMISSION NODES, IT IS SHOP LEVEL!**  
To check the plugin's permission nodes, please click [here](../../setup/permissions.md).

## Check the current shop settings

Looking at a quickshop, execute command `/quickshop permission group list` will listing all users you configured on this shop.

![showcase1](img/per-shop-permission-management-group-list-demo.png)

## Default Shop Permission Groups

QuickShop-Hikari has built-in groups below:

* quickshop-hikari.blocked - All players in this shop will cannot purchase this shop.
* quickshop-hiakri.everyone - All undefined players will have this group's permissions.
* quickshop-hikari.staff - Use command `/quickshop staff` will add that player into this group.
* quickshop-hikari.administrator - Exactly same permission with shop owner, can do almost everything on this shop.

## Default Shop Permission Permissions

QuickShop-Hikari has built-in permissions in the list below:

* quickshop-hikari.purchase  
  Any players who own this permission can purchase with this shop.
* quickshop-hiakri.show_information  
  Any players who own this permission can open shop purchase info panel.
* quickshop-hikari.preview_shop  
  Any players who own this permission will have a `[Preview Item]` button on shop purchase info panel and allow to open this shop's preview GUI.
* quickshop-hikari.search  
  Any players who own this permission will make this shop visible on that player's `/quickshop find` results.
* quickshop-hikari.delete  
  Any players who own this permission can delete this shop.
* quickshop-hikari.alert.receive  
  Any players who own this permission will receive the shop alerts.
* quickshop-hikari.access_inventory  
  Any players who own this permission can open the container inventory.
* quickshop-hikari.ownership_transfer  
  Any players who own this permission can transfer this shop to another one.
* quickshop-hikari.management_permission  
  Any players who own this permission can management the per-shop permissions on this shop.
* quickshop-hikari.toggle_display  
  Any players who own this permission can use command `/quickshop toggledisplay` to toggle per-shop display item.
* quickshop-hikari.set_shoptype  
  Any players who own this permission can use command `/quickshop buy` or `/quickshop sell` to switch shop type between selling and buying.
* quickshop-hikari.set_price  
  Any players who own this permission can modify the price on this shop.
* quickshop-hikari.set_item  
  Any players who own this permission can modify the shop item on this shop.
* quickshop-hikari.set_stack_amount  
  Any players who own this permission can change the amount of shop item stacking on this shop.
* quickshop-hikari.set_currency  
  Any players who own this permission can change the shop currency on this shop.
* quickshop-hikari.set_name  
  Any players who own this permission can change the shop name on this shop.
* quickshop-hikari.set_benefit  
  Any players who own this permission can modify the shop benefits on this shop.

## Configure the group's permissions

:::caution

Incorrect group permissions configure will cause plugin stop working.

:::

Open `group.yml` and you will be able to edit permissions in every single group.

You cannot delete `quickshop-hikari.everyone`, `quickshop-hikari.staff` and `quickshop-hikari.administrator` groups. It may cause plugin working incorrectly.

## Assign players to specific permission group

Looking at a quickshop and execute command `/quickshop permission user set <player> <group>`, then a player will assign to new group.  
If this player already in another group, it will be removed from old group.

You can also use `/quickshop permission user unset <player>` to send player back to default group.

![showcase2](img/per-shop-permission-management-group-list-demo2.png)

## Usage: Ban a player from your shop

You can assign a player to group `quickshop-hikari.blocked` to block that player interact with your shop.