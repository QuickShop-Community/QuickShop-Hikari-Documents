# 安装

这一页将会引导您在您的 Spigot 服务器上安装 QuickShop-Hikari。

## 环境需求

- A [Paper][paper]-based Minecraft server (1.20 or higher, Java 21)
- [Vault][vault]，用于连接 QuickShop 和您的经济插件。
- [ProtocolLib][plib]，用于显示仅玩家可见的虚拟悬浮物品。
- 任何兼容 Vault 的经济插件，例如 [XConomy][xconomy]。如果你已经安装了 [EssentialsX][essx] 可直接使用其内置的经济系统。
- 一个权限管理插件，例如 [LuckPerms][luckperm].

在这篇教程中，我们假定您正在使用最新版本的 QuickShop-Hikari、ProtocolLib、XConomy、Vault 和 LuckPerms，并且使用 Windows 11 操作系统（Linux 基本相同）。

## 安装前置依赖

在安装 QuickShop-Hikari 之前，请确保您已经安装了所有前置插件：[Vault][vault]、[ProtocolLib][plib]、[XConomy][xconomy]（也可以是 [EssentialsX][essx]) 和 [LuckPerms][luckperm]！

下载以上插件并将它们放入 `plugins` 文件夹即可！

## 安装 QuickShop-Hikari

从 [Modrinth][qs-modrinth] 下载最新版本的 QuickShop-Hikari。在此步骤中，请暂时忽略 `Compat-` 前缀的文件。  
您需要下载的是带有 **Primary** 标签的一个文件，类似于下面的图片：  
The only file you need to download should have a **Primary** tag like this in the image below:

![download primary file](./img/download-primary.png)

将 QuickShop 的 jar 文件放入 `plugins` 文件夹，启动服务端，在控制台输入 `qs` 指令。 如果你正确地安装了插件，QuickShop 的指令帮助将会显示到控制台： If you properly installed the plugin, a command help page will pop-up like this in the image below:

![console test](./img/qs-command-test.png)

如果您在控制台中看到任何报错，可以阅读常见问题章节或加入我们的 [Discord][dc] 支持服务器，并在 `#qsh-support` 频道询问它们。

## 配置 QuickShop 以允许玩家使用

默认情况下，玩家无法创建商店。

要允许玩家创建和拥有商店，您必须授予他们必要的权限。

对大多数用户来说，你需要做的只是运行一个简单的命令：

```mcfunction
/lp group default permission set quickshop.player true
```

and you're done! 这样就完成了！ 玩家现在可以创建和使用商店，也可以使用其他功能。

对于高级权限设置，您可以看 [这一章节](./permissions.md)。

## All set! You are good to go!

现在，QuickShop-Hikari 正在您的服务器上运行。关于更多设置，请查看左侧的导航面板并阅读不同的部分。

[paper]: https://papermc.io/
[vault]: https://www.spigotmc.org/resources/34315/
[xconomy]: https://www.spigotmc.org/resources/75669/
[essx]: https://modrinth.com/plugin/essentialsx
[plib]: https://www.spigotmc.org/resources/1997
[luckperm]: https://luckperms.net/
[qs-modrinth]: https://modrinth.com/plugin/quickshop-hikari
[dc]: https://discord.gg/Bu3dVtmsD3
