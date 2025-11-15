# 折扣促销扩展

:::info

找不到在哪里下载JAR？ [点击这里](../faq/where-addons-compacts-at.md). [Click here](../faq/where-addons-compacts-at.md).

:::

折扣促销扩展模块向 QuickShop-Hikari 添加了优惠码功能。

## 权限节点

- **quickshopaddon.discount.use** _(默认: 所有人)_  
  允许使用任何 `/quickshop discount` 命令的权限。
- **quickshopaddon.discount.bypass** _(默认: OP)_  
  允许绕过权限检查，强制修改、删除优惠码。
- **quickshopaddon.discount.create.server_all_shops** _(默认：OP)_  
  创建范围为 “服务器上任何人的所有商店” 的优惠码权限。
- **quickshopaddon.discount.create.player_all_shops** _(默认：所有人)_  
  创建范围为 “优惠码创建者拥有的所有的商店” 的优惠码权限。
- **quickshopaddon.discount.create.specific_shops** _(默认：所有人)_  
  创建范围为 “优惠码所指定的商店” 的优惠码权限。

## 创建优惠码

若要创建一个优惠码，则需要使用 discount 命令：

```plain
/quickshop discount create <code> <code-type> <rate> [最大使用次数] [门槛价格] [过期时间]
```

命令可能比较长，但你有一个命令助手来帮助你补全指令。

![](https://user-images.githubusercontent.com/30802565/208291577-59fcd76e-2b4a-4e87-bdf5-582ba573795e.png)

### 可用的代码类型

- SERVER_ALL_SHOPS (可应用到服务器上任何人的任何商店)
- PLAYER_ALL_SHOPS (可应用到优惠码创建者所拥有的所有商店)
- SPECIFIC_SHOPS (生效于通过命令 `/quickshop discount config <code> addshop` 添加的商店)

## 安装优惠码

如需使用优惠码，则必须在和商店交易之前安装优惠码。

```plain
/quickshop discount install <code>
```

The installed code will remember during this session.

## 卸载优惠码

若要卸载优惠码，您需要使用命令：

```plain
/quickshop discount uninstall <code>
```

## Show details for a installed discount code

通过使用 `info` 子命令, 你可以查询优惠码创建者、适用范围、剩余使用次数、过期时间、最低使用门槛和折扣率。

```plain
/quickshop disount info
```

![](https://user-images.githubusercontent.com/30802565/208291677-85469f8b-2c34-4563-bb57-619cfe70e105.png)

## 删除优惠码

若要移除一个指定的优惠码，请执行命令：

```plain
/quickshop discount remove <code>
```

## 检查优惠码是否可以应用于特定商店

You need install a discount code first, then you click the shop you want to check, a promote message will show up when you can enjoy the discount in this shop.  
If code not accepted by target shop, you will also receive a warning message when you click it.

![](https://user-images.githubusercontent.com/30802565/208291999-a32277bb-4111-4dde-bcd4-1d5f5b40ce9e.png)

## Apply the discounting

您需要先安装一个优惠码，然后在接受您的优惠码的一个商店购买物品。  
如果符合优惠条件，优惠码将自动生效，并在原价上计算折扣，并消耗优惠码的剩余使用次数。  
Then discount will applied to your purchase, and your remaining count will be consumed.

![](https://user-images.githubusercontent.com/30802565/208292084-633fe7e1-239c-4b8c-99b2-87fc9e824e1f.png)

_注意：如果上述附加条件未得到满足，优惠码将不会应用，您将不会得到折扣， 但同时剩余使用次数也不会被消耗，您将在提示信息中获得具体原因。_

## 自动清理过期的优惠码

An expired discount code will automatically removed while server startup or in 30mins.  
过期的优惠码将在服务器启动或 30 分钟内自动删除。  
在他们被清除之前，使用过期代码的玩家将收到一个错误消息，表明代码已过期。

## 时间格式转换

过期时间接受 Zulu 时间格式和秒计 UNIX 时间戳格式：

![](https://user-images.githubusercontent.com/30802565/208248088-01b1cbfe-ff79-4448-8a34-7e95324a71e1.png)

您可以使用这个在线网站来帮助转换时间格式：  
[https://www.unixtimestamp.com/](https://www.unixtimestamp.com/)

Zulu 时间 (ISO 8601 Extended) 格式：

```plain
yyyy-MM-dd'T'HH:mm:ssZZ
```

Note that the server time zone is used for calculations during the conversion.
