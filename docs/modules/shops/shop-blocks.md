# Shop Blocks

Not only Chests, but also all Containers all supported used for QuickShop containers!

![shop-blocks](img/shop-blocks.png)

## Configuration

To add or remove shop blocks, you can change the settings in config.yml: 

```yaml
#The list of blocks that can be used to create shops.
#By default, chests are added to this list.
#This will only work for blocks that implement an InventoryHolder!
#In other words, You cannot create shops with normal blocks like dirt or stone.
#May cause unexpected behavior with some blocks...eg:
#-Hopper shops suck the display item in,
#-Furnace shops allow players whatever item they want in all 3 slots,
#-Dispenser shops aren't protected from redstone,
#-Etc...
shop-blocks:
- CHEST
- TRAPPED_CHEST
- BARREL
- BLAST_FURNACE
- FURNACE
- BREWING_STAND
- DISPENSER
- DROPPER
- HOPPER
- SMOKER
```

The `shop-blocks` list doesn't support ItemReference, you can only use [Bukkit Material Name](https://hub.spigotmc.org/javadocs/spigot/org/bukkit/Material.html) in this list.
