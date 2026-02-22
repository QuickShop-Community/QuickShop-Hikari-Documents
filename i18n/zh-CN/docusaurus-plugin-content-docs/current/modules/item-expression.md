# 物品表达式

Hikari允许您使用字符串来表示或匹配物品。

## 匹配 Material 名称

直接填写Bukkit的 Material 名称。

```yaml
- BEDROCK # select items that matches given material name
- GOLDEN_SWORD
```

您可以在这里 [找到所有 Material 名称](https://hub.spigotmc.org/javadocs/spigot/org/bukkit/Material.html)。

## 匹配 物品引用

在物品引用名称前添加 `@` 前缀。

```yaml
- "@purediamond" # select items that matches with specfics item references
```

您可参考 [物品引用系统](item-ref.md)

## 匹配 附魔

在附魔 Namespaced Key 之前添加 `%` 前缀。

```yaml
- "%minecraft:sharpness" # select all items with sharpness enchantment
- "%minecraft:sharpness|1|3" # select all items with sharpness enchantment but only the enchantment level between 1 and 3
- "%ecoenchants:soulbound" # it also support 3rd-party enchantments IF they registered into Bukkit enchantments registry...
```
