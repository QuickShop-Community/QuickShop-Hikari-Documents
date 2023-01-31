# Velocity

This is a Velocity plugin, you need install it on your Velocity's plugins folder.

## How does it works

Velocity Bridge plugins will register `quickshop:bungee` channel for fowarding the player commands, chats to sub server when sub server waiting for player's input. (yes, even Velocity will also use `bungee` channel.)

All forwarding is indicated by QuickShop-Hikari on the Spigot server and ends when it is not needed.

## Extra settings for Spigot side

You might need add startup flag `-Dcom.ghostchu.quickshop.util.Util.forceBungeeCord=true` to force QuickShop-Hikari register message channel, because Hikari couldn't detect Velocity by it self. 
