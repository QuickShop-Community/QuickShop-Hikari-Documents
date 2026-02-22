# DiscordSRV 附加组件

:::info

找不到在哪里下载JAR？ [点击这里](../faq/where-addons-compacts-at.md). [Click here](../faq/where-addons-compacts-at).

:::

DiscordSRV 附加组件将允许您将 QuickShop-Hikari 绑定到您的 [DiscordSRV](https://www.spigotmc.org/resources/discordsrv.18494/)，并通过Discord DM 向您的玩家发送实时通知。

## 它是如何工作的

附加组件将读取DiscordSRV玩家绑定数据，并使用DiscordSRV的API向玩家发送嵌入消息

嵌入消息可以在使用中自定义 [语言覆盖系统](../modules/localization.md)。

## 配置

```yaml
# 配置文件版本号，不要修改
config-version: 2

# 管理员频道 ID，该频道将会接收管理员消息
moderator-channel: "000000000000000000"

# 功能管理
features:
  notify-shop-permission-changed: true
  notify-shop-price-changed: true
  notify-shop-transfer: true
  notify-shop-out-of-stock: true
  notify-shop-out-of-space: true
  notify-shop-purchase: true
  mod-notify-shop-purchase: true
  mod-notify-shop-price-changed: true
  mod-notify-shop-removed: true
  mod-notify-shop-transfer: false
```

## 每个玩家设置

Players are able to use `/quickshop discord <type> <enable/disable>` to toggle personal notification settings.

## 截图

![](https://user-images.githubusercontent.com/30802565/206912863-aecd677f-194a-40bf-8f2c-564f7e3be368.png) ![](https://user-images.githubusercontent.com/30802565/206912864-34a5114a-53c7-41d4-9931-75532c6525b8.png) ![](https://user-images.githubusercontent.com/30802565/206912867-01a5b862-82d3-4988-929d-d6db20f0dd44.png) ![](https://user-images.githubusercontent.com/30802565/206912869-2b0609a8-46f8-4ba0-8a8e-9e2afb77e0a9.png)
