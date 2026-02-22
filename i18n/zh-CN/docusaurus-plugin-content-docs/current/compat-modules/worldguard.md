# WorldGuard插件

:::info

找不到在哪里下载JAR？ [点击这里](../faq/where-addons-compacts-at.md). [Click here](../faq/where-addons-compacts-at.md).

:::

它将两种权限分配到 WorldGuard 注册表中： `quickshophikari-create` 和 `quickshophikari-trade`.

你可以使用它们来控制玩家在你所规划世界区域的权限。

## 🆕 Global Support (6.2.0.11+)

As of 6.2.0.11 QuickShop now supports using the flags in the global context.

## 配置

```yaml
create:
  default-allow: false
trade:
  default-allow: true
# amount limit for per region, -1 for no limit
# this is a simple limit, There are no plans to expand it
max-shops-in-region: -1
```
