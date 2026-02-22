# GreifPrevention

:::info

找不到在哪里下载JAR？ [点击这里](../faq/where-addons-compacts-at.md). [Click here](../faq/where-addons-compacts-at).

:::

GreifPrevention compatibility module added compatibility with GF.

## How does it work

此模块允许 QuickShop-Hikari 检查玩家是否有权限在特定区域创建或使用 QuickShop。

And delete shops when claim removed, untrusted, unclaimed, expired, resized or subclaim created.

## 配置

```yaml
# 是否阻止 GriefPrevention 领地外创建商店或进行相关交易的行为？
白名单模式：开启
#哪个玩家需要通过哪个检查才能创建商店？
#可用字段:
#BUILD = 玩家必须有能力支付目标地皮价格。
#INVENTORY = 玩家必须能够访问容器。
#ACESS = 玩家必须有权限访问目标地皮。
创建: INVENTORY
#哪个玩家需要通过哪个检查来与商店进行交易？
#您可以同时使用多次检查。
#可用字段:
#BUILD = 玩家必须有能力支付目标地皮价格。
#INVENTORY = 玩家必须能够访问容器。
#ACESS = 玩家必须有权限访问目标地皮。
交易：[ ]
#QuickShop 是否应该删除店主能否修改信任权限？
#如果商店所有者不再有权限在那里建造商店，则删除商店。
#永远不要拆除地皮所有者的商店。
更改有地皮权限者能否删除商店：true
#QuickShop 如果该领地/子领地无人认领，该商店是否删除？
#移除领地/子领地内所有无人认领的商店。
#取消子领地时永远不删除领地所有者的商店。
delete-on-claim-unclaimed: true
# 是否在领地到期时删除其内的商店？
# 移除领地内所有的商店。
delete-on-claim-expired: true
# 是否在领地/子领地大小改变时删除其内的所有商店？
# 移除只在旧领地中存在的商店。
# 移除只在旧子领地中存在的商店。
# 移除曾在子领地外的商店。
# 不对领地内外的商店进行任何改动。
delete-on-claim-resized: true
# 是否在创建子领地时移除商店？
# 若创建的子领地包含了其他玩家的商店，则插件会尝试移除它。
# 因为这些玩家一开始就没有新创建的子领地权限。
# 永不移除领地拥有者的商店。
delete-on-subclaim-created: true
```
