# Admin Shop (Unlimited Shop)

QuickShop provides a feature that allow you set a shop to unlimited space (for buying shop) or unlimited stock (for selling shop).

## Owner Mechanism

Even set a shop to admin shop, **the shop owner still is you!**  

## Set a shop to unlimited shop

Looking an quickshop and execute `/qs unlimited` to toggle that shop between limited or unlimited.

| Unlimited Shop                         | Limited Shop (Out of stock)            |
| -------------------------------------- | -------------------------------------- |
| ![adminshop](img/a-unlimited-shop.png) | ![regularshop](img/a-limited-shop.png) |

## Automatic change the owner when a shop turn to unlimited

You can turn on [`unlimited-shop-owner-change`](https://github.com/Ghost-chu/QuickShop-Hikari/blob/f7b12693d753fa9d2f147238b3afdf0e4030cfa6/quickshop-bukkit/src/main/resources/config.yml#L51) in config.yml, then configure [`unlimited-shop-owner-change-account`](https://github.com/Ghost-chu/QuickShop-Hikari/blob/f7b12693d753fa9d2f147238b3afdf0e4030cfa6/quickshop-bukkit/src/main/resources/config.yml#L55) in config.yml to an player username or uuid. Then all **new** unlimited shops will automatically transfer to specfic player.

The mechanic is not limited by the option that control maximum number of stores a player can create.