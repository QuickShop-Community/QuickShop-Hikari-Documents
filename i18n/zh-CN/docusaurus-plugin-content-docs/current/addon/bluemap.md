# BlueMap 插件

:::info

找不到在哪里下载JAR？ [点击这里](../faq/where-addons-compacts-at.md). [Click here](../faq/where-addons-compacts-at).

:::

BlueMap Addon can display the shop on your [BlueMap](https://modrinth.com/plugin/bluemap) instance!

## 展示



## 配置

```yaml
config-version: 1
# If you want the marker set/markers to display by default when opening the map.
display-by-default: true
#Location for the image you want as your quick-shop marker, it's defaulted to the BlueMap assets folder.
icon-file-location: "/assets/chest.png"
# If you want to display the marker icon.
display-icon: true
# Max distance of range where the user can see the marker, useful for lag reduction in frames.
max-distance: 1000
# This is where the name of each quick-shop marker when looking at the list (placeholders are %item%, %price%, %stock%, %owner%, %type%, %location%).
marker-label: "%item%, %price%, %stock%, %owner%, %type%"
# This is the popup text when clicking the shop marker itself.
marker-detail: '<span style="font-size: 120%">Chest Shop</span><hr><span>Owner: <strong>%owner%</strong></span><br><span>Item: <strong>%item%</strong></span><br><span>Price: <strong>%price%</strong><br><span>Stock: <strong>%stock%</strong><br><span>Type: <strong>%type%</strong><br><span>Location: <strong>%location%</strong></span>'
# How many times per second does the plugin refresh the chestshops?
refresh-per-seconds: 5
```

## 本地化

BlueMap 插件使用QuickShop-Hikari 已配置的游戏语言。

You can customize the string via QuickShop-Hikari's [Localization System](../modules/localization.md).
