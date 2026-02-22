# Reremake转换附属插件

:::info

Can't find where to download the JAR? [Click here](../faq/where-addons-compacts-at).

:::

:::caution

该附属插件仍处于实验阶段，所以请在使用之前正确管理您的备份文件 自行承担使用风险! Use at your own risk.

:::

该附属添加了一个转换器，允许用户轻松地从 [QuickShop-Reremake](https://www.spigotmc.org/resources/62575/) 转换到 QuickShop-Hikari

![preview](img/reremake-migrator.jpg)

## 分步教程

:::info

请注意，如果您无法理解本教程的内容， 请加入我们的 Discord 频道或询问其他专业服务器所有者/操作者。

:::

### 备份所有内容

进行数据转换有风险，所以您最好创建所有数据的完整备份，包括世界数据的全备份。 数据库和插件文件夹，以便在转换失败时还原它们

### 配置QuickShop-Hikari

按照通常步骤设置 QuickShop-Hikari 和 Addon-Reremake-Migrator，确保QuickShop-Hikari, QuickShop-Reremake Addon-Reremake-Migrator 同时安装在服务器中。

Afterwards, configure QuickShop-Hikari's database settings. 然后配置QuickShop-Hikari的数据库设置 如果QuickShop-Hikari 和 QuickShop-Reremake 正在使用相同的 MySQL 数据库。 **您必须为 QuickShop-Hikari 设置不同的表前缀。 否则，两者的数据都将损坏，转换将失败**。 _配置文件中表前缀的路径为 `database.prefix`._ _The path of the table prefix in the configuration file is `database.prefix`._

_如果您使用的是 H2 数据库，则不需要这样做。_

### 准备转换

为了避免数据损坏，在进行数据转换时，服务器上不允许玩家(包括管理员) 在线，所有操作都将在控制台上进行。  
如果玩家在服务器中，则无法开始转换。  
If a player is in the server, the conversion cannot be started.

转换开始后， 服务器将在数据转换过程中被锁定，任何玩家在数据转换过程中都不能加入服务器。

在数据转换结束时，不论转换是否成功。 服务器将被锁定，在服务器重新启动之前，任何玩家都无法加入服务器。

### 开始转换

在控制台中执行命令：

```shell
/quickshop-hikari:quickshop migratefromreremake (是否覆盖) (迁移日志)
```

> (overwrite) 是否覆盖: 当 Reremake 与 Hikari 商店在转换过程中发生冲突时, 是允许转换器用 Reremake 的数据覆盖冲突的 Hikari 存储。 它可以是 `true`, 也可以是 `false`: It accepts `true` or `false`

> (migratelogs) 迁移日志: 本插件是否一并转移 `qs.log` 交易日志(及其压缩文件)至新数据库？ 该功能尚处于测试阶段，后果自负。 当前仅支持迁移购买日志。 若要转移交易日志，请将在 config.yml 中将交易日志记录的存储类型切换为数据库。 It still in beta, use at your own risks. Currently only support migrate Purchase logs. To convert the transaction logs, please switch to Database storage method in Hikari's config.yml for transaction logging.

> /quickshop-hikari:quickshop: Quickshop-Hikari和QuickShop-Reremake同时安装，因此会出现命令注册问题。 此命令使用命名空间来解决命令被Reremake注册的问题。 This command uses namespaces in order to solve the problem of commands being grabbed by Reremake.

以下是此命令的示例：

```shell
/quickshop-hikari:quickshop migratefromreremake true false
```

### 转换中

Once the command is executed, the conversion begins immediately.
执行命令后，转换立即开始。 转换器将把大多数功能的配置信息转换为 QuickShop-Hikari 格式。

转换所需的时间取决于您拥有的商店数量、处理器性能和数据库性能。

绝大多数数据和配置将被转换，但交易日志和交互行为不被支持。 转换后请再次检查配置文件，以确保所有配置都按预期转换。 如果没有，您可能需要手动配置它。
Please check the configuration file again after the conversion to make sure that all configurations are converted as you expected. If not, you may be required to configure it manually.

### 完成

在转换完成后，QuickShop-Reremake 将被暂时禁用(但尚未卸载)。

您需要关闭服务器并删除 QuickShop-Reremake 和 Addon-Reremake-Migrator JAR 文件。 如果一切顺利，您的所有商店现在都将被QuickShop-Hikari接管，并将按预期正常工作。
If all goes well, all your stores will now be taken over by QuickShop-Hikari and will work properly as expected.