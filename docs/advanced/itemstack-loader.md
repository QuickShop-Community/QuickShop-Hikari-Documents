---
slug: /modules/itemstack-loader
---
# ItemStack Loader

ItemStack Loader is a workaround for loading the Bukkit ItemStack.

:::caution

Before using this feature, you **MUST** create a full server backup. After you enable it, changes are written permanently to worlds and databases; rollback is impossible without a backup.

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
[QuickShop-Hikari] [WARN] Cannot load ItemStack {ITEM_INFO} because it was saved by a newer Minecraft server version. The action will fail and you will receive an exception. PLEASE DON'T REPORT THIS TO QUICKSHOP!
[QuickShop-Hikari] [WARN] You can try force load this ItemStack by our hacked ItemStack read util(shop.force-load-downgrade-items), but beware, the data may damaged if you load on this lower Minecraft server version, Please backup your world and database before enable!
```

## Turn on workaround

Enable the loader workaround by changing the following setting in `config.yml`:

```yaml
shop:
  # Cross-Version Item Loading (Advanced / Risky)
  # Attempts to load items created on newer Minecraft versions.
  # WARNING: This may corrupt server or shop data. Always backup first.
  force-load-downgrade-items:
    enable: true
    # Work mode:
    # 0 = Ask Bukkit to update the ItemStack
    # 1 = Ask Bukkit to load the ItemStack directly
    method: 0
```

Method `0` asks Bukkit to update the ItemStack version, while method `1` asks Bukkit to load it directly. By default, the value is `0`.
