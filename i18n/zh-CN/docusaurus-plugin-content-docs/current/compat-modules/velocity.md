# Velocity

:::info

找不到在哪里下载JAR？ [点击这里](../faq/where-addons-compacts-at.md).

:::

这是一个 Velocity 插件，你需要在你的 Velocity 的插件文件夹中安装它

## How does it work?

Velocity Bridge plugins will register `quickshop:bungee` channel for forwarding the player commands, chats to sub server when sub server waiting for player's input. (yes, even Velocity will also use `bungee` channel.)

所有转发都由 QuickShop-Hikari 在 Spigot 服务器上发起，并在不需要时停止。

## Spigot 侧子服的额外设置

你可能需要将启动参数 `-Dcom.ghostchu.quickshop.util.Util.forceBungeeCord=true` 加入开服脚本，使得本插件能够注册通信通道，因为默认情况下 Hikari 不会自行检测 Velocity 是否存在。
