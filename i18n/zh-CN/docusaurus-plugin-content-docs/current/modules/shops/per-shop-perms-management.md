# 商店权限独立控制

QuickShop-Hikari提供了一个系统来控制每个商店的权限。

**这不是插件权限节点，这是商店自己权限！**  
要查看插件的权限节点，请单击 [这里](../../setup/permissions.md).

## 检查当前的商店设置

看向快捷商店，输入命令 `/quickshop permission group list` 即可列出商店中单独设置过的所有玩家。

![showcase1](img/per-shop-permission-management-group-list-demo.png)

## 默认商店权限组

QuickShop-Hikari有以下内置的商店权限组：

- quickshop-hikari.blocked - 所有属于此权限组的玩家都无法在此商店内交易
- quickshop-hikari.everyone - All undefined players will have this group's permissions.
- quickshop-hikari.staff - 使用命令 `/quickshop staff` 会将命令执行者加入商店。
- quickshop-hikari.admin - 与店主几乎完全相同的权限，几乎可以做任何事情。

## 默认商店权限组

QuickShop-Hikari 内置了如下权限：

- quickshop-hikari.purchase  
  任何拥有该权限的玩家可在该商店购买物品。
- quickshop-hikari.show_information  
  Any players who own this permission can open shop purchase info panel.
- quickshop-hikari.preview_shop  
  任何拥有此权限的玩家会在购买界面出现一个 `[预览物品]` 按钮，并打开物品预览界面。
- quickshop-hikari.search  
  任何拥有此权限的玩家都可以让该商店出现在 `/quickshop find` 的搜索结果中。
- quickshop-hikari.delete  
  任何拥有该权限的玩家均可删除该商店。
- quickshop-hikari.alert.receive  
  任何拥有该权限的玩家均会收到商店消息提醒。
- quickshop-hikari.access_inventory  
  任何拥有该权限的玩家均可打开商店容器。
- quickshop-hikari.ownership_transfer  
  任何拥有该权限的玩家均可转移商店所有权至其他玩家。
- quickshop-hikari.management_permission  
  任何拥有该权限的玩家均可自行管理单商店权限分配。
- quickshop-hikari.toggle_display  
  任何拥有该权限的玩家可通过命令 `/quickshop toggledisplay` 切换单商店展示物品。
- quickshop-hikari.set_shoptype  
  任何拥有该权限的玩家均可使用命令 `/quickshop buy` 或 `/quickshop sell` 对商店的购买/出售状态进行切换。
- quickshop-hikari.set_price  
  任何拥有该权限的玩家均可修改商店内的物品价格。
- quickshop-hikari.set_item  
  任何拥有该权限的玩家均可修改商店内的出售/收购物品。
- quickshop-hikari.set_stack_amount  
  任何拥有该权限的玩家均可修改商店内一份物品的量 （如价格为 5，份数设置为 5，则实际价格为 1 单位/个物品，且玩家只能以 5 的倍数购买物品）。
- quickshop-hikari.set_currency  
  任何拥有该权限的玩家均可修改商店交易使用的货币。
- quickshop-hikari.set_name  
  任何拥有该权限的玩家均可修改商店的名称。
- quickshop-hikari.set_benefit  
  任何拥有该权限的玩家均可修改商店的额外收费比例。

## 配置组权限

:::caution

如果组权限配置不当，插件可能会停止工作。

:::

打开 `group.yml`，你就可以分组编辑插件权限。

你不能删除 `quickshop-hikari.everyone`, `quickshop-hikari.staff` 和 `quickshop-hikari.administrator` 组。 这可能会让插件无法正常工作。 It may cause plugin working incorrectly.

## 为玩家分配至指定权限组。

看向商店并输入命令 `/quickshop permission user set <player> <group>`，然后玩家就会被分配至新组。  
如果玩家已经处于其他权限组中，则他会被移出旧组。  
If this player already in another group, it will be removed from old group.

你也可以输入命令 `/quickshop permission user unset <player>` 将玩家重新分配回默认组。

![showcase2](img/per-shop-permission-management-group-list-demo2.png)

## Usage: Ban a player from your shop

你可以给玩家 `quickshop-hikari.blocked` 权限，这样他们就无法与你的商店交互。