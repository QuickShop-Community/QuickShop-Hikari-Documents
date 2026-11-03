---
slug: /faq/compare-reremake
---
# Differences between Hikari and Reremake

If you are a Reremake user, you may be confused about the differences between Hikari and Reremake.

## Comparison

✔️ = Full Support  
✔️+ = Enhanced full support  
❌ = Unsupported  
⚠️ = Partial Support (or doesn't work)  

| Features                                                                                | Reremake                            | Hikari                   |
| --------------------------------------------------------------------------------------- | ----------------------------------- | ------------------------ |
| Minecraft version compatibility                                                         | 1.15+                               | 1.20+                    |
| Simple interaction                                                                      | ✔️                                   | ✔️                        |
| Full customize interaction                                                              | ❌                                   | ✔️                        |
| NBT                                                                                     | ✔️                                   | ✔️                        |
| Potions                                                                                 | ✔️                                   | ✔️                        |
| Enchantment (or Book)                                                                   | ✔️                                   | ✔️                        |
| Item Damage                                                                             | ✔️                                   | ✔️                        |
| Mob Eggs                                                                                | ✔️                                   | ✔️                        |
| Shulker Boxes                                                                           | ✔️                                   | ✔️                        |
| Item with Custom Model Data                                                             | ✔️                                   | ✔️                        |
| [AdminShop (Unlimited Shop)](../shop-management/adminshop.md)                             | ✔️                                   | ✔️                        |
| [BlackList](../shop-management/blacklist.md)                                             | ✔️                                   | ✔️+                       |
| DoubleChest                                                                             | ✔️                                   | ✔️                        |
| [Item Preview](../shop-management/shop-basic.md#preview-the-item)                         | ✔️                                   | ✔️                        |
| [Localization](../configuration/localization.md)                                              | ✔️                                   | ✔️                        |
| Localization client adaptation                                                          | ✔️                                   | ✔️                        |
| Localization Format                                                                     | MineDown                             | MiniMessage              |
| [Item Find (/qs find)](../shop-management/shop-search.md)                                 | ✔️                                   | ⚠️                        |
| Chat Control Panel                                                                      | ✔️                                   | ✔️                        |
| 1.14+ Signs                                                                             | ✔️                                   | ✔️                        |
| [Multi-Currency](../shop-management/multi-currency.md)                                          | ✔️                                   | ✔️                        |
| [Protection Checker](../shop-management/protection-checker.md)                            | ✔️                                   | ✔️+                       |
| [Shop Benefits](../shop-management/benefit.md)                                            | ❌                                   | ✔️                        |
| [Virtual DisplayItem](../shop-management/display-system.md)                               | ✔️                                   | ✔️                        |
| [Per shop permission management](../shop-management/per-shop-perms-management.md)         | ❌                                   | ✔️                        |
| [Price Limiter](../shop-management/price-system.md)                                       | ✔️                                   | ✔️+                       |
| [Shop Protection](../shop-management/protection.md)                                       | ✔️                                   | ✔️                        |
| [Ranks](../shop-management/ranks.md)                                                      | ✔️                                   | ✔️                        |
| Multiple shop blocks                                                                    | ✔️                                   | ✔️                        |
| [Shop Fees](../shop-management/shop-fees.md)                                              | ✔️                                   | ✔️+                       |
| [Shop Purger](../shop-management/shop-purger.md)                                          | ✔️                                   | ✔️                        |
| [Stacking Shop](../shop-management/stacking-shop.md)                                      | ✔️                                   | ✔️                        |
| [Command Alias](../advanced/cmd-alias.md)                                                | ✔️                                   | ✔️                        |
| [Item Reference (Item Lookup)](../advanced/item-ref.md)                                  | ❌                                   | ✔️                        |
| [Shop History](../shop-management/shop-history.md)                                        | ❌                                   | ✔️                        |
| [Economy Formatter](../configuration/economy-formatter.md)                                    | ✔️                                   | ✔️                        |
| [Database Backup (Exporter/Importer)](../advanced/datasource.md)                         | ⚠️                                   | ✔️                        |
| [Database Type](../advanced/datasource.md)                                               | MySQL/SQLite                        | MySQL/H2                 |
| [Localization](../configuration/localization.md)                                              | Bundled+Crowdin+Override            | Bundled+Crowdin+Override |
| [Per player shop info sign localization](../shop-management/per-shop-perms-management.md) | ⚠️                                   | ✔️                        |
| Sounds And Effects                                                                      | ✔️                                   | ✔️                        |
| [Transaction System](../shop-management/transaction-system.md)                                  | ⚠️ (It doesn't work at all actually) | ✔️+                       |
| Jar digital signature and integrity check self-protection                               | ✔️                                   | ❌                        |
| Automatically adjust server configs                                                     | ✔️                                   | ❌                        |
| Enchantments Filter                                                                     | ❌                                   | ✔️                        |
| Buy & Sell in single block                                                              | ❌                                   | ❌                        |
| [Interaction Manager](../modules/interaction)                                           | ❌                                   | ✔️                        |
| [Freeze Mode](../shop-management/shop-basic.md#turn-a-shop-to-freeze-mode)                | ❌                                   | ✔️                        |
| Folia Support                                                                           | ❌                                   | ✔️                        |

## Which one should I use?

Well, it depends on what your needs are.  
If you have an old server ({'<'}1.20) instance, Reremake is your only choice.  
~~If you are in China which has GFW interfere, you also should consider Reremake because it doesn't need to load libraries from Global Internet.~~ Solved in 6.0.0.0.  

If none of these applies, give Hikari a try!
