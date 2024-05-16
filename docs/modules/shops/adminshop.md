# Admin Shop (Unlimited Shop)

QuickShop provides a feature that allow you set a shop to unlimited space (for buying shop) or unlimited stock (for selling shop).

## Owner Mechanism

Even set a shop to admin shop, **the shop owner still is you!**  

## Set a shop to unlimited shop

Looking an quickshop and execute `/quickshop unlimited` to toggle that shop between limited or unlimited.

| Unlimited Shop                         | Limited Shop (Out of stock)            |
| -------------------------------------- | -------------------------------------- |
| ![adminshop](img/a-unlimited-shop.png) | ![regularshop](img/a-limited-shop.png) |

## Automatic change the owner when a shop turn to unlimited

You can turn on `unlimited-shop-owner-change` in config.yml, then configure `unlimited-shop-owner-change-account` in config.yml to an player username or uuid. Then all **new** unlimited shops will automatically transfer to specific player.

The mechanic is not limited by the option that control maximum number of stores a player can create.