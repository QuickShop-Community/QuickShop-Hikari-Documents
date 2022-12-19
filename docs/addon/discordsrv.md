# DiscordSRV Addon

DiscordSRV addon will allow you hook QuickShop-Hikari into your [DiscordSRV](https://www.spigotmc.org/resources/discordsrv.18494/), send real-time notifications to your players through Discord DM.

## How it works

Addon will read DiscordSRV's player binding data and use DiscordSRV's API send embed messages to player.  

Embed messages can be customize in use [Language Override System](../modules/localization.md).

## Configuration

```yaml
# the config-version, don't touch it.
config-version: 2

# the moderator discord channel ID used for sending mod messages.
moderator-channel: "000000000000000000"

# the features should be enabled.
features:
  notify-shop-permission-changed: true
  notify-shop-price-changed: true
  notify-shop-transfer: true
  notify-shop-out-of-stock: true
  notify-shop-out-of-space: true
  notify-shop-purchase: true
  mod-notify-shop-purchase: true
  mod-notify-shop-price-changed: true
  mod-notify-shop-removed: true
  mod-notify-shop-transfer: false
```

## Screenshot

![](https://user-images.githubusercontent.com/30802565/206912863-aecd677f-194a-40bf-8f2c-564f7e3be368.png)
![](https://user-images.githubusercontent.com/30802565/206912864-34a5114a-53c7-41d4-9931-75532c6525b8.png)
![](https://user-images.githubusercontent.com/30802565/206912867-01a5b862-82d3-4988-929d-d6db20f0dd44.png)
![](https://user-images.githubusercontent.com/30802565/206912869-2b0609a8-46f8-4ba0-8a8e-9e2afb77e0a9.png)
