---
slug: /faq/frequently-asked-questions
---
# Frequently Asked Questions

## Can I create a shop that sells AND buys items?

> No. Each shop can either sell or buy items, but it cannot do both at once. You can, however, use a double chest to create two shops: one that buys the item and one that sells it.

## Can I use item-based currency (e.g., diamonds)?  

> No. We won't add it. However, you can use economy plugins that support item-based currencies.

## The plugin doesn't respond when creating a shop. Is it broken?

> Some plugins may cancel shop creation, most commonly protection plugins. You can disable `shop.protection-checking` in the configuration to bypass this check.

## How can I create a shop that sells stacks?

> To create such a shop, follow these steps:
>
> 1. Set "allow-stacks" to true in the config.yml and reload the plugin.
> 2. Give the player (or yourself) the `quickshop.create.stacks` permission.
> 3. Hold the number of items to buy/sell and create the shop as normal.

## Can I create a shop that bypasses the default vanilla stack size?

> Yes. Enable the custom-item-stacksize option in the config.yml and reload the plugin. After that, you can use "/quickshop stack"

## My shop was broken or denied by a non-protection plugin. Why?

> QuickShop creates a fake `BlockBreakEvent` to check whether you can build in that area. Some plugins may interfere by canceling this event. Try using the [protection listener filter](../modules/shops/protection-checker#resolve-plugin-conflicts) to resolve the conflict.

## How can I migrate from H2 to MySQL or MariaDB (or vice versa)?

> [See Docs](../modules/datasource#migrate)

## The plugin is showing a NoClassDefFoundError or NoSuchMethodError in the console. Why?

> This may be caused by an incompatible plugin or a damaged QuickShop JAR. Update QuickShop, then test the server with only QuickShop and its required dependencies installed. If the issue persists, report it on GitHub.

## How can I change or delete some messages?  

> [Override the OTA translation](../modules/localization#override-the-ota-translation)

## Can you add support for X?  

> Maybe. Please open an issue on our GitHub for this.

## I installed Vault, so why is QuickShop still not working?

> Vault is not an economy plugin; it is only an economy API. Please install an economy plugin that supports Vault.

## Why does it not load on Minecraft 1.7–1.19?

> See "Tested Minecraft Versions." The latest version supports only Minecraft 1.20 and later.

## Are there any known incompatibilities?

> Some plugins may not work correctly alongside QuickShop, and unfortunately there is often little we can do on our side to resolve these conflicts.

### BungeeCord Chat Plugins

> Most BungeeCord chat plugins are known to be incompatible with QuickShop.  
> To resolve these conflicts, download and install the [Compat-BungeeCord](../compat-modules/bungeecord) compatibility module from the releases page.  

### Hybrid Server Software

> Hybrid servers (such as Mohist, Arclight, Magma, and CatServer) are not fully supported by QuickShop-Hikari.  
> Some features may not function correctly on these server implementations and could result in errors or unexpected behavior. If you choose to run  QuickShop-Hikari on a Hybrid server, you do so at your own risk and are responsible for any issues that may arise.  

## How can I support the project?

> You can support QuickShop-Hikari via [GitHub Sponsors](https://github.com/sponsors/creatorfromhell) or [YuanYuan’s Afdian](https://afdian.com/a/yuanyuanowo)
