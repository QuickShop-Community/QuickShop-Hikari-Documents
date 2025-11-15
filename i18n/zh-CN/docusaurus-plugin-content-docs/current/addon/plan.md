# Plan 拓展组件

:::info

找不到在哪里下载JAR？ [点击这里](../faq/where-addons-compacts-at.md). [Click here](../faq/where-addons-compacts-at.md).

:::

Plan 扩展组件允许通过 Plan 在服务器上展示最近的 QuickShop-Hikari 活动。

## 数据跟踪

可以展示自从 Hikari v2.0.0.0 起收集的数据，但只有在 3.6.0.0 版本之后，才能正确显示购买历史记录中的物品数量。

## 全局范围

- 商店总数
- 所有商店（商店列表）
- 最近的购买历史(包括删除或无效的商店)，仅在最近365天或者最近1000行将被显示。

Due the Plan limitations, We can't add more data into the list because the maximum columns are hardcoded limited to `5` in server scope.  
And still is Plan limitations, the list sorting is disturbed, so the display order is not the actual order.

## 玩家范围

- 商店总数
- 所有拥有的商店（商店列表）
- 最近的购买历史记录（包括已删除或无效的商店），仅显示最近 365 天内的 50 行。

Due the Plan limitations, We can't add more data into the list because the maximum columns are hardcoded limited to `4` in player scope.  
And still is Plan limitations, the list sorting is disturbed, so the display order is not the actual order.

## 展示

| 全局购买                                                                                                                | 玩家购买                                                                                                                |
| ------------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------- |
| <img src="https://user-images.githubusercontent.com/30802565/208290345-2aa32f74-8c0a-4d27-9f69-b72a3ad605f4.png" /> | <img src="https://user-images.githubusercontent.com/30802565/208110771-b8d3a1cc-3c07-449f-a2ad-1348eafa7134.png" /> |

| 全球商店                                                                                                                | 玩家商店                                                                                                                |
| ------------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------- |
| <img src="https://user-images.githubusercontent.com/30802565/208109812-4f040bfb-4342-4510-adee-928d9041fa60.png" /> | <img src="https://user-images.githubusercontent.com/30802565/208110850-d59f4ec9-6c86-4a89-a2f9-87ced3d3d74e.png" /> |

## 本地化

由于 Plan 的限制，无法添加翻译。
