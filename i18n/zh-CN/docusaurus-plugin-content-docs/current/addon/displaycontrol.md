# DisplayControl 插件

:::info

找不到在哪里下载JAR？ [点击这里](../faq/where-addons-compacts-at.md). [Click here](../faq/where-addons-compacts-at).

:::

DisplayControl插件使您能够允许玩家控制不同客户端的悬浮物。

**此插件仅适用于虚拟悬浮物。**

## Requirement

如果您在Bukkit/Spigot 服务器上使用BungeeCord ，您将需要在BungeeCord 环境中安装 [Compat-BungeeCord-Geyser Bridge](../compat-modules/bungeecord-geyser.md) 。 否则，将不会运行。
Otherwise, it will doesn't work at all.

## 命令

`/quickshop displaycontrol <auto/enable/disable>`

- `auto` - 默认在Java版客户端运行，同时禁止在基岩版客户端运行。
- `enable` - Always enable display on all clients. _If the server disabled display items, this option will respect the server global settings._
- `disable` -始终禁止在所有客户端运行。

## 权限

- `quickshopaddon.displaycontrol.use` - 允许玩家使用命令 `/quickshop displaycontrol`

## 演示

![display-control 演示](img/display-control.gif)