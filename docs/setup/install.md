# Installation

This page will walk you through the process of installing QuickShop-Hikari on your Spigot server.  

## Requirements

* A [Spigot][spigot]-based Minecraft server (1.18.2 or higher, Java 17+)
  * You can also use [Paper][paper], which is a fork of Spigot for better compatibility, more features and higher performance.
* [Vault][vault] for bridging the economy system between QuickShop and your economy plugins.
* [ProtocolLib][plib] for virtual display item, Per-player localization.
* Any Vault compatible economy plugin, such as [XConomy][xconomy], If you have [EssentialsX][essx], it will also works well.
* A permission management plugin like [LuckPerms][luckperm].

In this document, we assume that you are using the latest version of QuickShop-Hikari, ProtocolLib, XConomy, Vault and LuckPerms under Windows 11 operation system (Linux is basically the same).

## Installing dependencies

Before installing QuickShop-Hikari, you should make sure that you have all dependencies installed, including [Vault][vault], [ProtocolLib][plib], [XConomy][xconomy] (or [EssentialsX][essx] if you want) and [LuckPerms][luckperm]!

Download the plugins and drop them into `plugins` folder and you're all set!

## Installing QuickShop-Hikari

Download the latest version of QuickShop-Hikari from [Modrinth][qs-modrinth], if you find multiple files that have `Compat-` prefix in file name, ignore them in this step.  
The only file you need to download should have a **Primary** tag like this in the image below:

![download primary file](./img/download-primary.png)

Drop the QuickShop jar into your `plugins` folder, start the server, then execute `qs` in the console. If you properly installed the plugin, a command help page will pop-up like this in the image below:

![console test](./img/qs-command-test.png)

If you see any errors in the output, you can read the FAQ section or join our [Discord][dc] support server and ask them in the `#qsh-support` channel.

## Configure QuickShop to allow players to use it

By default, players are unable to create shops.

To allow players to create and own shops, you must grant the necessary permissions to them.

Fortunately, for most of the users, all you need to do is to run a simple command:

```mcfunction
/lp group default permission set quickshop.player true
```

and you're done! Players are now able to create and use shops, they will also have access to other features.

For advanced permission setup, you can check [here](./permissions.md).

## All set! You are good to go!

Now QuickShop-Hikari is running on your server, for more settings, check the navigation panel on the left and see different sections.

[spigot]: https://www.spigotmc.org/wiki/buildtools/
[paper]: https://papermc.io/
[vault]: https://www.spigotmc.org/resources/34315/
[xconomy]: https://www.spigotmc.org/resources/75669/
[essx]: https://modrinth.com/plugin/essentialsx
[plib]: https://www.spigotmc.org/resources/1997
[luckperm]: https://luckperms.net/
[qs-modrinth]: https://modrinth.com/plugin/quickshop-hikari
[dc]: https://discord.gg/Bu3dVtmsD3
