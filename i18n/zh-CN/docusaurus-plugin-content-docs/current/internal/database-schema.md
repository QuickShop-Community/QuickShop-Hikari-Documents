# 数据库结构

此章节将讲解 QuickShop-Hikari 的数据库存储格式的实现细节。

## 数据表

This section explains the database tables created by QuickShop-Hikari.  
Unless otherwise specified, the initial `qs_` in table name is the table prefix.  
该部分解释了 QuickShop-Hikari 创建的数据库表  
除非特别注明，表内默认的 `qs_` 即为表前缀。  
若要查找每个表的最新代码定义，请参阅：[DataTables.java](https://github.com/QuickShop-Community/QuickShop-Hikari/blob/hikari/quickshop-bukkit/src/main/java/com/ghostchu/quickshop/database/DataTables.java)

### `数据`

此数据表存储此服务器上的所有现有存储数据或已删除但仍以特定形式引用的存储数据，并且不包含坐标信息。  
无论如何，数据记录在创建后都不应被修改，直到它被删除。  
对商店的任何新更改都应创建一个新副本，将更改应用于该副本，并将其作为新记录插入。  
No matter what, a data record should not be modified after it is created, until it got deleted.  
Any new changes to the shop should create a new copy, apply the changes to the copy, and insert it as a new record.

Basically, Copy-on-write.

仅当没有任何表引用其数据记录时，才会从数据库中删除数据记录 `data_id`.

| Column Name                                               | 数据类型                                      | 默认值     | 说明                                                                                                |
| --------------------------------------------------------- | ----------------------------------------- | ------- | ------------------------------------------------------------------------------------------------- |
| id                                                        | INT UNSIGNED Primary Key                  | 自动递增    | 记录 ID（又叫 `data_id`)                                                                               |
| owner                                                     | VARCHAR(36) NOT NULL   | 无       | 店主个人ID（又叫UUID）                                                                                    |
| item                                                      | TEXT NOT NULL                             | 无       | 该商店条目经过 [YAML 序列化][YAML ItemStack Serialize]的 [ItemStack][ItemStack]                              |
| type                                                      | INT NOT NULL                              | 0       | [商店类型 ID][ShopType Id]，表示商店类型                                                                     |
| currency                                                  | VARCHAR(64)            | NULL    | The currency name for this shop data entry. 该商店条目使用的货币名称。 若使用 Vault 或不受支持，则为 NULL |
| price                                                     | DECIMAL(32,2) NOT NULL | 无       | 该商店条目中每份物品的价格                                                                                     |
| unlimited                                                 | BIT NOT NULL                              | 0       | 用于表示该商店是否为无限收购/出售，0 表示有限，1 表示无限                                                                   |
| hologram                                                  | BIT NOT NULL                              | 0       | 表示商店展示物品的暂停状态，0 表示跟随全局设置，1 表示禁用                                                                   |
| tax_account                          | VARCHAR(36)            | NULL    | 税收账户的 UUID，若非空，则税收将会汇入指定账户                                                                        |
| permissions                                               | MEDIUMTEXT                                | 空 Json  | Indicates the override status of the store player permission group, serialized to JSON string     |
| extra                                                     | LONGTEXT                                  | 空 Yaml  | 用于存储 QuickShop Hikari 的实验性设定或其他插件的持久化数据                                                           |
| inv_wrapper                          | VARCHAR(255) NOT NULL  | 无       | 该商店条目使用的 InventoryWrapper 独立 ID                                                                   |
| inv_symbol_link | TEXT NOT NULL                             | 无       | 用于传递至 InventoryWrapper 的界面标识符，用于定位界面                                                              |
| create_time                          | DATETIME NOT NULL                         | 数据集插入时间 | 用于显示商店创建时间                                                                                        |
| benefit                                                   | MEDIUMTEXT                                | 无       | JSON 序列化处理后的盈利分配                                                                                  |

### `shops`

该表用于存储商店数据映射，因此商店 ID 不会在商店数据变化时变化。  
多个 `shop_id` 可以对应同一个 `data_id`。  
Multiple `shop_id` can correspond to the same `data_id`.

| Column Name                  | 数据类型                     | 默认值  | 说明                   |
| ---------------------------- | ------------------------ | ---- | -------------------- |
| id                           | INT UNSIGNED Primary Key | 自动递增 | 记录 ID（即 `shop_id`)   |
| data_id | INT UNSIGNED NOT NULL    | 无    | 数据记录 ID（即 `data_id`) |

### `shop_map`

此表用于以 Bukkit 映射的形式将商店位置存储至 shop_id 中。 另外，这也是将商店载入世界的关键记录。 At the same time, this is also the key record of loading the store into the game world.

| Column Name | 数据类型                                    | 默认值 | 说明            |
| ----------- | --------------------------------------- | --- | ------------- |
| world       | VARCHAR(32) NOT NULL | 无   | Bukkit 内的世界名称 |
| x           | INT NOT NULL                            | 无   | 商店的实际 X 轴位置   |
| y           | INT NOT NULL                            | 无   | 商店的实际 Y 轴位置   |
| z           | INT NOT NULL                            | 无   | 商店的实际 Z 轴位置   |

### `messages`

该表用于存储离线消息。

| Column Name | 数据类型                                    | 默认值     | 说明                                                                     |
| ----------- | --------------------------------------- | ------- | ---------------------------------------------------------------------- |
| id          | INT UNSIGNED Primary Key                | 自动递增    | 记录 ID                                                                  |
| receiver    | VARCHAR(36) NOT NULL | 无       | 接收方的 ID                                                                |
| time        | DATETIME                                | 数据集插入时间 | 消息创建时间                                                                 |
| content     | MEDIUMTEXT NOT NULL                     | 无       | 序列化的 [Adventure Component](https://docs.adventure.kyori.net/text.html) |

### `metadata`

此表用于存储元数据，如数据库结构版本。

| Column Name | 数据类型                                                 | 默认值 | 说明 |
| ----------- | ---------------------------------------------------- | --- | -- |
| key         | VARCHAR(255) NOT NULL Primary Key | 无   | 键  |
| value       | LONGTEXT NOT NULL                                    | 无   | 值  |

### `player`

该表用于存储玩家数据，如客户端语言。

| Column Name | 数据类型                                                | 默认值 | 说明         |
| ----------- | --------------------------------------------------- | --- | ---------- |
| uuid        | VARCHAR(36) NOT NULL Primary Key | 无   | 玩家的 UUID   |
| locale      | VARCHAR(255) NOT NULL            | 无   | 玩家客户端使用的语言 |
| cachedName  | VARCHAR(255) NOT NULL            | 无   | 玩家最近的用户名   |

### `external_cache`

该表用于缓存网页界面的商店空间/库存，或其他纯数据库应用的内容。

| Column Name | 数据类型                              | 默认值 | 说明                 |
| ----------- | --------------------------------- | --- | ------------------ |
| shop        | INT UNSIGNED NOT NULL Primary Key | 无   | 商店 ID（即 `shop_id`） |
| stock       | INT NOT NULL                      | 无   | 商店库存               |
| space       | INT NOT NULL                      | 无   | 商店空闲位置             |

### `log_purchase`

该表记录了服务器上所有的历史交易记录。

| Column Name                     | 数据类型                                      | 默认值     | 说明                                       |
| ------------------------------- | ----------------------------------------- | ------- | ---------------------------------------- |
| id                              | INT UNSIGNED Primary Key                  | 自动递增    | 记录 ID                                    |
| time                            | DATETIME NOT NULL                         | 数据集插入时间 | The time that this purchase created      |
| shop                            | INT UNSIGNED NOT NULL                     | 无       | 商店 ID（即 `shop_id`）                       |
| 数据                              | INT UNSIGNED NOT NULL                     | 无       | 数据 ID（即 `data_id`）                       |
| buyer                           | VARCHAR(36) NOT NULL   | 无       | 交易者的 UUID，实际上应该如此，因为参与交易的玩家既可能是买家，也可能是卖家 |
| type                            | VARCHAR(32) NOT NULL   | 无       | [ShopType][ShopType Id] 的枚举名称            |
| amount                          | INT NOT NULL                              | 无       | 购买数量                                     |
| money                           | DECIMAL(32,2) NOT NULL | 无       | 购买总花费                                    |
| tax_amount | DECIMAL(32,2) NOT NULL | 0       | 此次购买征收税费                                 |

### `log_transaction`

TODO

### `log_changes`

TODO

### `log_others`

TODO

[ItemStack]: https://hub.spigotmc.org/javadocs/spigot/org/bukkit/inventory/ItemStack.html
[YAML ItemStack Serialize]: https://github.com/QuickShop-Community/QuickShop-Hikari/blob/dc8a1b3da68f1c4367328b4647be77f8d4aa9468/quickshop-bukkit/src/main/java/com/ghostchu/quickshop/util/Util.java#L1039
[ShopType Id]: https://github.com/QuickShop-Community/QuickShop-Hikari/blob/dc8a1b3da68f1c4367328b4647be77f8d4aa9468/quickshop-api/src/main/java/com/ghostchu/quickshop/api/shop/ShopType.java#L12