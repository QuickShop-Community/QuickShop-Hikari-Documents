# Hikari 和 Reremake 之间的差异

如果你是 Reremake 用户，你可能会对 Hikari 和 Reremake 之间的差异感到困惑。

## 对比

✔️ = 完全支持  
✔️ + = 增强的充分支持  
❌ = 不支持  
⚠️ = 部分支持（或不支持）

| 功能介绍                                                                     | Reremake                 | Hikari                   |
| ------------------------------------------------------------------------ | ------------------------ | ------------------------ |
| Minecraft版本兼容性                                                           | 1.15+    | 1.20+    |
| 简单的交互                                                                    | ✔️                       | ✔️                       |
| 完全自定义交互                                                                  | ❌                        | ✔️                       |
| NBT                                                                      | ✔️                       | ✔️                       |
| Potions                                                                  | ✔️                       | ✔️                       |
| 附魔(或书)                                                | ✔️                       | ✔️                       |
| Item Damage                                                              | ✔️                       | ✔️                       |
| Mob Eggs                                                                 | ✔️                       | ✔️                       |
| 大箱子                                                                      | ✔️                       | ✔️                       |
| 带有自定义模型数据的物品                                                             | ✔️                       | ✔️                       |
| [系统商店（无限商店）](../modules/shops/adminshop.md)                              | ✔️                       | ✔️                       |
| [黑名单](../modules/shops//blacklist.md)                                    | ✔️                       | ✔️+                      |
| DoubleChest                                                              | ✔️                       | ✔️                       |
| [物品预览](../modules/shops/shop-basic.md#preview-the-item)                  | ✔️                       | ✔️                       |
| [本地化](../modules/localization.md)                                        | ✔️                       | ✔️                       |
| 客户端语言本地化适应                                                               | ✔️                       | ✔️                       |
| 本地化格式                                                                    | MineDown                 | MiniMessage              |
| [物品查找(/qs find)](../modules/shops/shop-search.md)     | ✔️                       | ⚠️                       |
| 控制面板                                                                     | ✔️                       | ✔️                       |
| 1.14+ 牌子                                                 | ✔️                       | ✔️                       |
| [多货币](../modules/multi-currency.md)                                      | ✔️                       | ✔️                       |
| [保护检查](../modules/shops/protection-checker.md)                           | ✔️                       | ✔️+                      |
| [商店分成](../modules/shops/benefit.md)                                      | ❌                        | ✔️                       |
| [虚拟悬浮物](../modules/shops/display-system.md)                              | ✔️                       | ✔️                       |
| [每个商店的权限管理](../modules/shops/per-shop-perms-management.md)               | ❌                        | ✔️                       |
| [价格限制](../modules/shops/price-system.md)                                 | ✔️                       | ✔️+                      |
| [商店保护](../modules/shops/protection.md)                                   | ✔️                       | ✔️                       |
| [等级](../modules/shops/ranks.md)                                          | ✔️                       | ✔️                       |
| 多个商店方块                                                                   | ✔️                       | ✔️                       |
| [商店费用](../modules/shops/shop-fees.md)                                    | ✔️                       | ✔️+                      |
| [商店删除器](../modules/shops/shop-purger.md)                                 | ✔️                       | ✔️                       |
| [堆叠商店](../modules/shops/stacking-shop.md)                                | ✔️                       | ✔️                       |
| [命令别名](../modules/cmd-alias.md)                                          | ✔️                       | ✔️                       |
| [物品引用 (物品查找)](../modules/item-ref.md)                 | ❌                        | ✔️                       |
| [Shop History](../modules/shops/shop-history.md)                         | ❌                        | ✔️                       |
| [经济格式化](../modules/economy-formatter.md)                                 | ✔️                       | ✔️                       |
| [数据库备份 (导出/导入)](../modules/datasource.md)             | ⚠️                       | ✔️                       |
| [数据库类型](../modules/datasource.md)                                        | MySQL/SQLite             | MySQL/H2                 |
| [本地化](../modules/localization.md)                                        | Bundled+Crowdin+Override | Bundled+Crowdin+Override |
| [每个玩家商店牌子信息本地化](../modules/shops/per-shop-perms-management.md)           | ⚠️                       | ✔️                       |
| 声音和效果                                                                    | ✔️                       | ✔️                       |
| [交易系统](../modules/transaction-system.md)                                 | ⚠️ （实际上根本不起作用）           | ✔️+                      |
| Jar 数字签名和完整性检查自我保护                                                       | ✔️                       | ❌                        |
| 自动调整服务器配置                                                                | ✔️                       | ❌                        |
| 附魔过滤器                                                                    | ❌                        | ✔️                       |
| 在单个方块中进行交易                                                               | ❌                        | ❌                        |
| [Interaction Manager](../modules/interaction)                            | ❌                        | ✔️                       |
| [Freeze Mode](../modules/shops/shop-basic.md#turn-a-shop-to-freeze-mode) | ❌                        | ✔️                       |
| Folia Support                                                            | ❌                        | ✔️                       |

## 我应该使用哪一个？

Well, it depends on what your needs are.  
If you have an old server ({'<'}1.20) instance, Reremake is your only choice.  
~~If you are in China which has GFW interfere, you also should consider Reremake because it doesn't need to load libraries from Global Internet.~~ Solved in 6.0.0.0.

如果所有这些都不适用，请尝试Hikari！
