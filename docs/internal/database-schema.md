# Database Schema

This chapter will explain the implementation details of QuickShop Hikari's database storage format.

## Tables

This section explains the database tables created by QuickShop-Hikari.  
Unless otherwise specified, the initial `qs_` in table name is the table prefix.  
For the latest code definition for each table, see: [DataTables.java](https://github.com/QuickShop-Community/QuickShop-Hikari/blob/hikari/quickshop-bukkit/src/main/java/com/ghostchu/quickshop/database/DataTables.java)

### `data`

This data table stores all the existing store data on this server or the store data that has been deleted but is still referenced in a specific form, and does not contain coordinate information.  
No matter what, a data record should not be modified after it is created, until it got deleted.  
Any new changes to the shop should create a new copy, apply the changes to the copy, and insert it as a new record.

Basiclly, Copy-on-write.  

A data record only be deleted from the database when no any table references their `data_id`.


| Column Name     | DataType                 | Default             | Description                                                                                        |
| --------------- | ------------------------ | ------------------- | -------------------------------------------------------------------------------------------------- |
| id              | INT UNSIGNED Primary Key | Auto Increment      | Record ID (aka. `data_id`)                                                                         |
| owner           | VARCHAR(36) NOT NULL     | N/A                 | The shop owner unique id (aka. UUID)                                                               |
| item            | TEXT NOT NULL            | N/A                 | [YAML serialized][YAML ItemStack Serialize] [ItemStack][ItemStack] for this shop data entry        |
| type            | INT NOT NULL             | 0                   | The [shoptype id][ShopType Id], Indicates the store type                                           |
| currency        | VARCHAR(64)              | NULL                | The currency name for this shop data entry. NULL if using Vault or not supported                   |
| price           | DECIMAL(32,2) NOT NULL   | N/A                 | The price per stack for this shop data entry                                                       |
| unlimited       | BIT NOT NULL             | 0                   | Indicates whether this store is an unlimited store, 0=Limited, 1=Unlimited                         |
| hologram        | BIT NOT NULL             | 0                   | Indicates the suspension status of this store's display item, 0=Follow global settings, 1=Disabled |
| tax_account     | VARCHAR(36)              | NULL                | The uuid for tax account, If it is not NULL, tax will be paid to the specified account             |
| permissions     | MEDIUMTEXT               | Empty Json          | Indicates the override status of the store player permission group, serilized to JSON string       |
| extra           | LONGTEXT                 | Empty Yaml          | Used to store experimental settings of QuickShop Hikari or persistent data of other plugins        |
| inv_wrapper     | VARCHAR(255) NOT NULL    | N/A                 | Unique identifier for InventoryWrapper for this shop data entry                                    |
| inv_symbol_link | TEXT NOT NULL            | N/A                 | Unique Inventory symbol used to pass to InventoryWrapper, for locating inventory                   |
| create_time     | DATETIME NOT NULL        | Dataset Insert Time | Indicates when this store was created                                                              |
| benefit         | MEDIUMTEXT               | N/A                 | Setup of Benefit Allocation after JSON Serialization                                               |

### `shops`

This table is used to store shop to shop data mapping, so that shop ID will not change when shop data changes.  
Multiple `shop_id` can correspond to the same `data_id`.

| Column Name | DataType                 | Default        | Description                     |
| ----------- | ------------------------ | -------------- | ------------------------------- |
| id          | INT UNSIGNED Primary Key | Auto Increment | Record ID (aka. `shop_id`)      |
| data_id     | INT UNSIGNED NOT NULL    | N/A            | Data Record ID (aka. `data_id`) |


### `shop_map`

This table is used to store shop_id to shop location in Bukkit mapping. At the same time, this is also the key record of loading the store into the game world.  

| Column Name | DataType             | Default | Description                        |
| ----------- | -------------------- | ------- | ---------------------------------- |
| world       | VARCHAR(32) NOT NULL | N/A     | The world name in Bukkit           |
| x           | INT NOT NULL         | N/A     | The block X position for this shop |
| y           | INT NOT NULL         | N/A     | The block Y position for this shop |
| z           | INT NOT NULL         | N/A     | The block Z position for this shop |

### `messages`

This table is used to store offline messages.

| Column Name | DataType                 | Default             | Description                                                                  |
| ----------- | ------------------------ | ------------------- | ---------------------------------------------------------------------------- |
| id          | INT UNSIGNED Primary Key | Auto Increment      | Record ID                                                                    |
| receiver    | VARCHAR(36) NOT NULL     | N/A                 | The unique id for receiver                                                   |
| time        | DATETIME                 | Dataset Insert Time | The time that this message created                                           |
| content     | MEDIUMTEXT NOT NULL      | N/A                 | Serialized [Adventure Component](https://docs.adventure.kyori.net/text.html) |

### `metadata`

This table is used to store the metadata, e.g database schema version.

| Column Name | DataType                          | Default | Description |
| ----------- | --------------------------------- | ------- | ----------- |
| key         | VARCHAR(255) NOT NULL Primary Key | N/A     | The key     |
| value       | LONGTEXT NOT NULL                 | N/A     | The value   |

### `player`

This table is used to store the player data, e.g locales.

| Column Name | DataType                         | Default | Description                      |
| ----------- | -------------------------------- | ------- | -------------------------------- |
| uuid        | VARCHAR(36) NOT NULL Primary Key | N/A     | The player unique id             |
| locale      | VARCHAR(255) NOT NULL            | N/A     | The player's client locale       |
| cachedName  | VARCHAR(255) NOT NULL            | N/A     | The player's username last known |

### `external_cache`

This table is stored cached shop space/stock for WebUI or what else other pure database apps.

| Column Name | DataType                          | Default | Description                     |
| ----------- | --------------------------------- | ------- | ------------------------------- |
| shop        | INT UNSIGNED NOT NULL Primary Key | N/A     | The id of shop (aka. `shop_id`) |
| stock       | INT NOT NULL                      | N/A     | The stock for this shop         |
| space       | INT NOT NULL                      | N/A     | The space for this shop         |

### `log_purchase`

This table records all history purchases activities on this server.

| Column Name | DataType                 | Default             | Description                                                                                                    |
| ----------- | ------------------------ | ------------------- | -------------------------------------------------------------------------------------------------------------- |
| id          | INT UNSIGNED Primary Key | Auto Increment      | Record ID                                                                                                      |
| time        | DATETIME NOT NULL        | Dataset Insert Time | The time that this purchase created                                                                            |
| shop        | INT UNSIGNED NOT NULL    | N/A                 | The shop id (aka. `shop_id`)                                                                                   |
| data        | INT UNSIGNED NOT NULL    | N/A                 | The data id (aka. `data_id`)                                                                                   |
| buyer       | VARCHAR(36) NOT NULL     | N/A                 | The purchaser unique id, In fact, it is more accurate to call it a purchaser, not only selling but also buying |
| type        | VARCHAR(32) NOT NULL     | N/A                 | The [ShopType][ShopType Id] enum name                                                                          |
| amount      | INT NOT NULL             | N/A                 | Purchased stack amount                                                                                         |
| money       | DECIMAL(32,2) NOT NULL   | N/A                 | Total balance in this purchase                                                                                 |
| tax_amount  | DECIMAL(32,2) NOT NULL   | 0                   | The tax in this purchase                                                                                       |

### `log_transaction`

TODO

### `log_changes`

TODO

### `log_others`

TODO

[ItemStack]: https://hub.spigotmc.org/javadocs/spigot/org/bukkit/inventory/ItemStack.html
[YAML ItemStack Serialize]: https://github.com/QuickShop-Community/QuickShop-Hikari/blob/dc8a1b3da68f1c4367328b4647be77f8d4aa9468/quickshop-bukkit/src/main/java/com/ghostchu/quickshop/util/Util.java#L1039
[ShopType Id]: https://github.com/QuickShop-Community/QuickShop-Hikari/blob/dc8a1b3da68f1c4367328b4647be77f8d4aa9468/quickshop-api/src/main/java/com/ghostchu/quickshop/api/shop/ShopType.java#L12