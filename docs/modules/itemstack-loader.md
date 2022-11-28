# ItemStack Loader

ItemStack Loader is a workaround for loading the Bukkit ItemStack.

:::caution

Before use this function, you **MUST** create a server full backup. After enable this function, all changes will write into worlds and databases, and it is persistent, rollback without backup is impossble.

:::

## When is this feature required

When you update to Minecraft to a newer versions and downgrade after that (but without quickshop database), you may see the errors like this:

```log
[Server] ERROR Could not call method 'public static org.bukkit.inventory.ItemStack org.bukkit.inventory.ItemStack.deserialize(java.util.Map)' of class org.bukkit.inventory.ItemStack for deserialization
[Server] INFO java.lang.IllegalArgumentException: Newer version! Server downgrades are not supported!
```

In this case, our recommendation is to restore the last normal QuickShop database backup, but if you are unfortunate enough to lose all your backups, here is a workaround you can try.

QuickShop will prompt on the console when an error is detected as a result of a version downgrade, such as the following:

```log
[QuickShop-Hikari] [WARN] Cannot load ItemStack {ITEM_INFO} because it saved from higher Minecraft server version, the action will fail and you will receive a exception, PLELASE DON'T REPORT TO QUICKSHOP!
[QuickShop-Hikari] [WARN] You can try force load this ItemStack by our hacked ItemStack read util(shop.force-load-downgrade-items), but beware, the data may damaged if you load on this lower Minecraft server version, Please backup your world and database before enable!
```

## Turn on workaround

You can turn on loader workaround by change the settings in config.yml:

```yaml
  force-load-downgrade-items:
    enable: true
    #WorkMode
    #0=Call Bukkit to try to update the ItemStack
    #1=Call Bukkit to directly load the ItemStack
    method: 0
```

method = 0 means the ItemStack version will override by current ItemStack version number but -1.
method = 1 means trick Bukkit the ItemStack version exactly same with current ItemStack version number.

By default, method value is `0`.
