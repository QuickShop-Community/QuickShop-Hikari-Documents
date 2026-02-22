# [Ronsane] 商店搜索

QuickShop Reremake 和 Hikari spigot的附加插件。 在游戏中添加一个 /finditem 命令，用于搜索服务器上的所有商店。 Adds a /finditem command in game for searching through all the shops on the server.

## 功能介绍:

- 在购买/销售商店中搜索商品
- 按不同类型搜索项目
- 支持基于查询的项目搜索
- 支持自定义项目的自定义模型数据
- 可配置的商店排序方式
- Displays enchantments in the result for enchanted items
- Hides item enchants if item has hide_enchants flag
- 显示药水效果
- 在搜索列表中隐藏某些商店
- 支持安全传送到商店（可在 config.yml 中配置）
- 忽略缺货的商店
- 支持世界黑名单（黑名单中的商店在搜索结果中被忽略）
- Config.yml 中的所有消息都支持十六进制码，因此您可以自定义颜色。

## Integrations:

- Supports PlayerWarps (by Olzie-12) integration. It shows the nearest warp to each shop in the search result GUI.
- 支持用于获取最近一次信息的EssentialsX Warps整合包。
  - 由于技术限制，在每次搜索查询中，全局信息列表都要每15分钟更新一次。
  - 如果添加了新的信息并希望它立即更新，请运行 /finditemadmin reload 命令符。
  - 请记住，这仅适用于 Essential Warps整合包。
- WorldGuard region 整合包支持获取商店所在的 WorldGuard 区域（如果区域重叠，将选择最高优先级。

## 下载地址：

从 [SpigotMC](https://www.spigotmc.org/resources/quickshop-addon-shop-search.95104/) 下载