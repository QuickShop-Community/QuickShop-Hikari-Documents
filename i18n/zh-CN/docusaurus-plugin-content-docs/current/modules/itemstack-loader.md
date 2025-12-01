# ItemStack加载器

ItemStack加载器是加载Bukkit ItemStack的工具。

:::caution

Before use this function, you **MUST** create a server full backup. After enable this function, all changes will write into worlds and databases, and it is persistent, rollback without backup is impossible.

:::

## 何时需要此功能

当您更新到 Minecraft 到较新版本并在之后降级（但没有同时回滚 quickshop 数据库）时，您可能会看到如下错误：

```log
[Server] ERROR Could not call method 'public static org.bukkit.inventory.ItemStack org.bukkit.inventory.ItemStack.deserialize(java.util.Map)' of class org.bukkit.inventory.ItemStack for deserialization
[Server] INFO java.lang.IllegalArgumentException: Newer version! Server downgrades are not supported!
```

在这种情况下，我们的建议是恢复最后一个正常的QuickShop数据库备份，但是如果您不幸丢失了所有备份，则可以尝试以下解决方法。

QuickShop 会在控制台出现因版本降级而出现错误时提示, 例如:

```log
[QuickShop-Hikari] [WARN] Cannot load ItemStack {ITEM_INFO} because it saved from higher Minecraft server version, the action will fail and you will receive a exception, PLELASE DON'T REPORT TO QUICKSHOP!
[QuickShop-Hikari] [WARN] You can try force load this ItemStack by our hacked ItemStack read util(shop.force-load-downgrade-items), but beware, the data may damaged if you load on this lower Minecraft server version, Please backup your world and database before enable!
```

## 启用后备解决方案

您可以通过更改config.yml中的设置来打开加载器后备加载模式：

```yaml
  force-load-downgrade-items:
    enable: true
    #WorkMode
    #0=Call Bukkit to try to update the ItemStack
    #1=Call Bukkit to directly load the ItemStack
    method: 0
```

method = 0 means the ItemStack version will override by current ItemStack version number but -1.
method = 0 表示 ItemStack 版本将被当前 ItemStack 版本号覆盖，但在原来的基础上 -1 以触发更新。 method = 1 表示欺骗 Bukkit，ItemStack 版本与当前 ItemStack 版本号完全相同。

默认情况下，此值为 `0`。
