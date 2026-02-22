# PlotSquared

:::info

找不到在哪里下载JAR？ [点击这里](../faq/where-addons-compacts-at.md). [Click here](../faq/where-addons-compacts-at).

:::

此模块添加了对 [PlotSquared v6](https://www.spigotmc.org/resources/plotsquared-v6.77506/) 的支持。

## How does it work?

This module will register two of flags `quickshop-create` and `quickshop-trade` into your PSv6 permission flags registry.  
You can use them to control the players permission in your plot.

当然他还提供删除你地皮中不信任玩家商店的功能。

## 配置相关

```yaml
#我们是否阻止在地皮区域区域外的商店创建或交易？
白名单模式：true
#我们是否应该删除那些由不被信任玩家所创建的商店？
当用户不被信任时删除所创建的商店：true
```
