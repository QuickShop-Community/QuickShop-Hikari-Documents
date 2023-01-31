# Differences between Hikari and Reremake

If you are a Reremake user, you may be confused about the differences between Hikari and Reremake.

## Comparison

✔️ = Full Support  
✔️+ = Enhanced full support  
❌ = Unsupported  
⚠️ = Partial Support (or doesn't work)  

| Features                                                                                | Reremake                            | Hikari                   |
| --------------------------------------------------------------------------------------- | ----------------------------------- | ------------------------ |
| Minecraft version compatibility                                                                 | 1.16+                               | 1.18.2+                    |
| Simple interaction                                                                      | ✔️                                   | ✔️                        |
| Full customize interaction                                                              | ❌                                   | ✔️                        |
| NBT                                                                                     | ✔️                                   | ✔️                        |
| Potions                                                                                 | ✔️                                   | ✔️                        |
| Enchantment (or Book)                                                                   | ✔️                                   | ✔️                        |
| Item Damage                                                                             | ✔️                                   | ✔️                        |
| Mob Eggs                                                                                | ✔️                                   | ✔️                        |
| Shulker Boxes                                                                           | ✔️                                   | ✔️                        |
| Item with Custom Model Data                                                             | ✔️                                   | ✔️                        |
| [AdminShop (Unlimited Shop)](../modules/shops/adminshop.md)                             | ✔️                                   | ✔️                        |
| [BlackList](../modules/shops//blacklist.md)                                             | ✔️                                   | ✔️+                       |
| DoubleChest                                                                             | ✔️                                   | ✔️                        |
| [Item Preview](../modules/shops/shop-basic.md#preview-the-item)                         | ✔️                                   | ✔️                        |
| [Localization](../modules/localization.md)                                              | ✔️                                   | ✔️                        |
| Localization client adaptation                                                          | ✔️                                   | ✔️                        |
| Localization Format                                                                     | MineDown                            | MiniMessage              |
| [Item Find (/qs find)](../modules/shops/shop-search.md)                                 | ✔️                                   | ⚠️                        |
| Chat Control Panel                                                                      | ✔️                                   | ✔️                        |
| 1.14+ Signs                                                                             | ✔️                                   | ✔️                        |
| [Multi-Currency](../modules/multi-currency.md)                                          | ✔️                                   | ✔️                        |
| [Protection Checker](../modules/shops/protection-checker.md)                            | ✔️                                   | ✔️+                       |
| [Shop Benefits](../modules/shops/benefit.md)                                            | ❌                                   | ✔️                        |
| [Virtual DisplayItem](../modules/shops/display-system.md)                               | ✔️                                   | ✔️                        |
| [Per shop permission management](../modules/shops/per-shop-perms-management.md)         | ❌                                   | ✔️                        |
| [Price Limiter](../modules/shops/price-system.md)                                       | ✔️                                   | ✔️+                       |
| [Shop Protection](../modules/shops/protection.md)                                       | ✔️                                   | ✔️                        |
| [Ranks](../modules/shops/ranks.md)                                                      | ✔️                                   | ✔️                        |
| Multiple shop blocks                                                                    | ✔️                                   | ✔️                        |
| [Shop Fees](../modules/shops/shop-fees.md)                                              | ✔️                                   | ✔️+                       |
| [Shop Purger](../modules/shops/shop-purger.md)                                          | ✔️                                   | ✔️                        |
| [Stacking Shop](../modules/shops/stacking-shop.md)                                      | ✔️                                   | ✔️                        |
| [Command Alias](../modules/cmd-alias.md)                                                | ✔️                                   | ✔️                        |
| [Item Reference (Item Lookup)](../modules/item-ref.md)                                  | ❌                                   | ✔️                        |
| [Economy Formatter](../modules/economy-formatter.md)                                    | ✔️                                   | ✔️                        |
| [Database Backup (Exporter/Importer)](../modules/datasource.md)                         | ⚠️                                   | ✔️                        |
| [Database Type](../modules/datasource.md)                                               | MySQL/SQLite                        | MySQL/H2                 |
| [Localization](../modules/localization.md)                                              | Bundled+Crowdin+Override            | Bundled+Crowdin+Override |
| [Per player shop info sign localization](../modules/shops/per-shop-perms-management.md) | ⚠️                                   | ✔️                        |
| Sounds And Effects                                                                      | ✔️                                   | ✔️                        |
| [Transaction System](../modules/transaction-system.md)                                  | ⚠️ (It doesn't work at all actually) | ✔️+                       |
| Jar digital signature and integrity check self-protection                               | ✔️                                   | ❌                        |
| Automatically adjust server configs                                                     | ✔️                                   | ❌                        |
| Enchantments Filter                                                                     | ❌                                   | ✔️                        |
| Buy & Sell in single block                                                              | ❌                                   | ❌                        |

## Which one should I use?

Well, it depends on what your needs are.  
If you have an old 1.16 server instance, Reremake is your only choice.  
If you are in China which has GFW interfere, you also should consider Reremake because it doesn't need to load libraries from Global Internet.  

If none of these applies, give Hikari a try!
