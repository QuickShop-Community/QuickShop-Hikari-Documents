# Towny

:::info

找不到在哪里下载JAR？ [点击这里](../faq/where-addons-compacts-at.md). [Click here](../faq/where-addons-compacts-at).

:::

:::caution

Warning! 警告！ 这是一个超级复杂的模块，请仔细阅读文档！

:::

## 命令

### /quickshop nation

Nation 子命令允许您在普通商店和国家商店之间切换。

### /quickshop town

Town 子命令允许您在普通商店和城镇商店之间切换。

## 国家商店

对于国家商店，店主将更改为由Towny创建的对应国家的假玩家，并使用该国家所指定的税收账户作为其税务帐户。

All purchases will deposit or withdraw money from nation Towny account.  
At the same time, if the bank mode is enabled, the price will be forced to adjust automatically according to the price of the item in the profile.

如果启用了地皮类型限制，则只有特定的地皮类型才能创建国家商店。

## 城镇商店

对于城镇商店，店主将更改为Towny创建的城镇的假玩家，并使用该城镇所指定的的税收帐户作为其税务账户。

All purchases will deposit or withdraw money from town Towny account.  
At the same time, if the bank mode is enabled, the price will be forced to adjust automatically according to the price of the item in the profile.

如果启用了地皮类型限制，则只有特定的地皮类型才能创建城镇商店。

## 银行系统

银行系统允许您通过QuickShop-Hikari完成您的城镇/国家经济体系循环。

您可以设置额外的百分比以 `在交易期间` 印钱。

```yaml
#银行模式下的商店将只接受玩家的物品，但钱转入城镇银行账户。
#银行模式更多配置
银行模式：
  #当商店在银行地皮，只允许商店为银行模式。
  只允许银行地皮：true
  #强制银行模式商店使用配置中指定的价格。
  #未包括的物品将拒绝转为银行模式商店
  启用：true
  #可以通过银行模式收取部分的钱作为手续费。
  extra-percent: 0.10 # 0.10 = 10%
  # 物品列表
  # 只允许创建交易如下物品银行模式商店。
  #要添加一个物品的价格来锁定物品的价格(如果启用强制价格)
  #设置-1将禁用这种物品的价格锁定，即使启用了强制价格。
  #矿物：价格
 物品列表：
  铜矿：0.01
  铁矿：0.05
  煤矿：0.10
  青金石矿：0.25
  红石矿：1.00
  金矿：5.00
  钻石矿：20.00
  绿宝石矿：500.00
  深板岩铜矿：0.01
  深板岩铁矿：0.05
  深板岩煤矿：0.10
  深板岩青金石矿：0.25
  深板岩红石矿：1.00
  深板岩金矿：5.00
  深板岩钻石矿：20.00
  深板岩绿宝石矿：500.00
  下界石英矿：0.50
  下界金矿：1.25
  远古残骸：250.00
  海洋之心：2500.00
  附魔金苹果：25000.00
```

## 权限覆盖

By adjust configuration, you're allow mayor or king automatically grant administrator permission on all shops in their management range.

```yaml
#由市长授权设立商店管理员。
允许市长授权覆盖：true

#允许镇长授予商店管理员权限。
允许国王权限覆盖：true
```

## 名称覆盖

我们提供了一种，以便在国家/城镇商店的信息牌上显示国家名称或城镇名称。

```yaml
#允许用城镇/乡村保险库名称 覆盖显示 所有者名称。
允许所有者名称覆盖：true
```

## 城镇税收

此机制允许您设置 QuickShop Hikari 税收系统，以优先向城镇或国家的城镇系统帐户纳税，而不是服务器税务帐户。

```yaml
# 是否将城镇或国家内的商店税收信息发送至城镇/国家存款账号。
# 注意：若某个商店属于城镇或国家本身，税收信息将会直接发送给服务器税收账户。
taxes-to-town: true
```

## Delete shops bridge

与其他兼容性模块一样，Towny 扩展组件也允许您在居民离开您的城镇、重置地皮和取消认领地皮时删除商店。

```yaml
# 是否在玩家离开城镇时删除他们在区域内开设的商店
delete-shop-on-resident-leave: false

# 是否在清除地皮时一并清理玩家先前开设的商店
 delete-shop-on-plot-clear: true

# 是否在解除地皮认领时清理其中开设的商店
delete-shop-on-plot-unclaimed: true
```

## 创建/交易控制

```yaml
# 玩家在开设商店前需要通过哪些检查？
# 你可以一次使用多种检查条件。
# 优先级：越靠前越优先
#
# 可用内容：
# OWN = 玩家必须拥有对应地皮才可在其上开设商店。
# MODIFY = 玩家必须有权改变对应地皮才可在其上开设商店。
# SHOPTYPE = 玩家只能在类型为 SHOP（商店）的地皮上开设商店。
create:
  - SHOPTYPE
  - MODIFY

# 玩家需要在开设商店前通过哪些检查？
# 你可以一次使用多种检查条件。
# 优先级：越靠前越优先
#
# 可用内容：
# OWN = 玩家必须拥有对应地皮才可与商店交互。
# MODIFY = 玩家必须有权改变对应地皮才可与商店交互。
# SHOPTYPE = 玩家只能在类型为 SHOP（商店）的地皮上与商店交互。
trade: [ ]
```

## Essentials 修补

Because Essentials use username to lookup user account if API calls is username based.

但因为 QuickShop-Hikari 使用的是 UUID，并通过 Bukkit API 生成独立的离线 UUID，并与一般的 UUID 生成算法有所差距。

这导致 Towny 与 QuickShop-Hikari 使用了名称相同但 UUID 不同的玩家账户，由此引发了众多问题。

You can adjust the option in configuration to enable workaround.

NOTE: It will force turned on if detected EssentialsX installed on your server.  
At present, we do not provide a method for disable it.

```yaml
# 针对玩家名称问题的修复
workaround-for-account-name: false
```
