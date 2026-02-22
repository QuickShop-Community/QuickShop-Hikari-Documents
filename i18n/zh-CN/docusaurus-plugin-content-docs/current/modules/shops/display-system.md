# Display Item

QuickShop 提供了一个很酷的功能，让玩家识别商店物品。

## 工作模式

Display Item has one work mode:

- Virtual DisplayItem

## Real DisplayItem

This work mode has been removed. If you were using it before, QuickShop will be disabled display item globally.

## Virtual DisplayItem

此工作模式将向玩家的客户端发送一个数据包，以欺骗客户端在商店容器上方生成一个悬浮物品。  
玩家\*\* 可以看到该物品，但它实际上不存在于服务器上，它不会影响服务器性能和更高的安全性。  
Player _can_ see the item BUT it actually not exists on the server, it won't affect the server performance and more security.

要使用此功能，您需要安装 [ProtocolLib](https://www.spigotmc.org/resources/protocollib.1997/) 并设置 `display-type` 到 `2`。

If you want to use [PacketEvents](https://modrinth.com/plugin/packetevents) as a Virtual DisplayItem, you need set `display-protocol` to `packetevents`.

## 配置

```yaml
  # 想要使用的展示类型。
  # 旧模式，盔甲架（display-type=1）过时且不能使用
 # 0 = 物品形式
 # 2 = 虚拟物品（需要安装 ProtocolLiv，若未安装则自动退回模式 0）
 display-type: 2
```

## Globally disable display item

出于某些原因，您不想在您的服务器上的商店生成悬浮物，您可以在 config.yml 中禁用此功能

```yaml
  #Should we place display items on the chests?
  #This may cause duped items, especially for modded servers!
  #Virtual DisplayItem is safe for dupe
  display-items: false
```

## Per shop disable display item

同一区块太多悬浮物可能会损害客户端 fps，尤其是当您在购物中心时。  
您可以通过查看商店并执行以下命令来禁用或启用单个商店的悬浮物是否显示：  
You can disable or enable display item for single shop by looking a quickshop and execute:

```mcfunction
/quickshop toggledisplay
```

Note: If display item already globally disabled, it won't force spawn display items.

## DisplayItem Guard

当QuickShop在**Real DisplayItem模式下**工作时，DisplayItem Guard将启用以保护DisplayItem 被漏斗和水等进行复制，  
服务器管理员将在玩家尝试复制物品时收到警报。

您可以通过调整设置来禁用警报：

```yaml
# 允许 QuickShop 在玩家尝试复制展示物品时发送警告消息。
send-display-item-protection-alert: false
```

QuickShop还将检查所有显示物品，以确保它们仍然处于应有的位置，并在需要时重置或者重新生成它们。 您可以调整更改下面的选项：
You can tweak the options below the change this:

```yaml
  # QuickShop 将会每隔一段时间检查展示物品是否在原先的位置。
  # 设置为 0 以禁用。
  display-items-check-ticks: 6000
  # 商店检查展示物品的间隔（单位为刻）
  display-check-time: 40
```

## 悬浮物自动取消生成（不推荐）

此功能完全是对客户端渲染性能的妥协，会大大增加服务器的压力，不建议使用。

此功能允许您在玩家距离商店太远时隐藏虚拟悬浮物。

```yaml
  # 允许 QuickShop 在附近无玩家时自动消除展示物品。
  display-auto-despawn: false

 # 展示物品消失的距离。
  display-despawn-range: 20
```
