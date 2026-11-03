---
slug: /compat-modules/velocity
---
# Velocity

:::info

Can't find where to download the JAR? [Click here](../faq/where-addons-compacts-at).

:::

This is a Velocity plugin. Install it in Velocity's `plugins` folder.

## How does it work?

Velocity Bridge plugins will register `quickshop:bungee` channel for forwarding the player commands, chats to sub server when sub server waiting for player's input. (yes, even Velocity will also use `bungee` channel.)

All forwarding is indicated by QuickShop-Hikari on the Spigot server and ends when it is not needed.

## Extra settings for Spigot side

You may need to add the startup flag `-Dcom.ghostchu.quickshop.util.Util.forceBungeeCord=true` to force QuickShop-Hikari to register the messaging channel if it cannot detect Velocity automatically.
