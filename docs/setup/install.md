# Installation

This will walk through installing QuickShop-Hikari on your Spigot server.

## Requirements

* A [Spigot][spigot]-based Minecraft server (1.18.2 or higher, Java 17+)
  * You also can use [Paper][paper] and it's fork for better compatibility, more features and higher performance.
* Plugin [Vault][vault] for bridge economy system between QuickShop and your economy plugins.
* Plugin [ProtocolLib][plib] for Virtual DisplayItem, Per-player localization.
* Any Vault compatiable economy plugin like [XConomy][xconomy], If you have [EssentialsX][essx], it will also works well.
* A permission management plugin like [LuckPerms][luckperm].

In the following documents, we will assume that you are using the latest version of QuickShop-Hikari, ProtocolLib, XConomy, Vault and LuckPerms under Windows 11 operation system (Linux basiclly same).

## Install dependencies

Before install QuickShop-Hikari, you should make sure you have all dependencies including [Vault][vault], [ProtocolLib][plib], [XConomy][xconomy] (or [EssentialsX][essx] if you want) and [LuckPerms][luckperm] installed!

Just download them and drop into `plugins` folder and you're done!

## Install QuickShop-Hikari

Download latest QuickShop-Hikari from [Modrinth][qs-modrinth], if you find multiple files that have `Compat-` prefix in file name, ignore them in this step.  
The only file you need download should have a **Primary** tag like the image below:

![download primary file](./img/download-primary.png)

Drop the QuickShop jar into your `plugins` folder, start the server, then execute `qs` command in console. If your install properly, plugin commands help will output like the image below:

![console test](./img/qs-command-test.png)

If you see any errors in output, you can read FAQ section or join our [Discord][dc] support server and ask in `#qsh-support` channel.

## Configure QuickShop to allow player use it

By default settings, players are unable to create their shops.

To allow players create and own shops, you must grant the necessary permissions to players.

Fortunately, for the most of users, all you need to do is run a simple command:

```mcfunction
/lp group default permission set quickshop.player true
```

and you're done! Players now able to create and use shops and access to most features.

To advanced permission setup, you check [here](./permissions.md).

## It's done

Now QuickShop-Hikari can running on your server, for more settings, check the left navigation and see different sections.

[spigot]: https://www.spigotmc.org/wiki/buildtools/
[paper]: https://papermc.io/
[vault]: https://www.spigotmc.org/resources/34315/
[xconomy]: https://www.spigotmc.org/resources/75669/
[essx]: https://modrinth.com/plugin/essentialsx
[plib]: https://www.spigotmc.org/resources/1997
[luckperm]: https://luckperms.net/
[qs-modrinth]: https://modrinth.com/plugin/quickshop-hikari
[dc]: https://discord.gg/Bu3dVtmsD3