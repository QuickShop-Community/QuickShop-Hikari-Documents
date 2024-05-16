# DisplayControl Addon

:::info

Can't find where to download the JAR? [Click here](../faq/where-addons-compacts-at.md).

:::

DisplayControl Addon gives you the ability to allow player controls the display item behavior on different clients.

**THIS ADDON ONLY WORKS WITH VIRTUAL DISPLAY ITEM TOGETHER**

## Requirement

If you Bukkit/Spigot server behind a BungeeCord, you will need to install [Compat-BungeeCord-Geyser Bridge](../compat-modules/bungeecord-geyser.md) on your BungeeCord instance.
Otherwise, it will doesn't work at all.

## Commands

`/quickshop displaycontrol <auto/enable/disable>`

* `auto` - Default behavior, will enable display on Java Edition clients, and disable on Bedrock clients.
* `enable` - Always enable display on all clients. *If the server disabled display items, this option will respect the server global settings.*
* `disable` - Always disable display on all clients. 

## Permissions

* `quickshopaddon.displaycontrol.use` - Allows players to use `/quickshop displaycontrol` commands

## Demo

![display-control demo](img/display-control.gif)