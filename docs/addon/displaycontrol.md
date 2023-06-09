# DisplayControl Addon

DisplayControl Addon gives you ability to allow player controls the display item behavior on different clients.

**THIS ADDON ONLY WORKS WITH VIRTUAL DISPLAY ITEM TOGETHER**

## Requirement

If you Bukkit/Spigot server behind a BungeeCord, you will need install [Compat-BungeeCord-Geyser Bridge](../compat-modules/bungeecord-geyser.md) on your BungeeCord instance.
Otherwise it will doesn't work at all.

## Commands

`/qs displaycontrol <auto/enable/disable>`

* `auto` - Default behavior, will enable display on Java Edition clients, and disable on Bedrock clients.
* `enable` - Always enable display on all clients. *If server disabled display items, this option will respect the server global settings.*
* `disable` - Always disable display on all clients. 

## Permissions

* `quickshopaddon.displaycontrol.use` - Allows players to use `/qs displaycontrol` commands

## Demo

![display-control demo](img/display-control.gif)