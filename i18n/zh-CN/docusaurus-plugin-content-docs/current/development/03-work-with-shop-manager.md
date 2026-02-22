# 0x03 着手使用商店管理器（Shop(Manager)）

ShopManager 是 QuickShop-Hikari 的核心部分，大部分与商店交互的操作都通过 ShopManager 完成。

## 获取 ShopManager 实例

```java
ShopManager manager = api.getShopManager();
```

## 获取商店

Since Minecraft has a special "Large Chest", we can't simply get the store map directly from the coordinates.  
因为 Minecraft 有一个特殊的“大型箱子”，我们不能直接通过坐标绘制商店分布地图。  
QuickShop-Hikari 的商店只会与半个“大型箱子”绑定，所以若要获取商店信息，你需要找到箱子方块本身，以及与其相连的另一个箱子。

好消息是，插件内置了一个 API，能快速处理这种情况。

这个操作必须在服务器的主线程上进行。

```java
Shop shop = manager.getShopIncludeAttached(location);
```

默认情况下，我们会使用 ShopCache 来提升方法的性能。

我们会妥善处理商店缓存的更新，所以你不应该绕过缓存操作，除非出现了某些非预期结果。 无缓存查找相对有更高的性能开销，且它只能在服务器主线程上执行。
Cacheless lookups are slightly more expensive and can only be performed on the server main thread.

```java
Shop bypassCacheShop = manager.getShopIncludeAttached(location,false);
```

## 获取服务器上的所有商店

此方法通常不会消耗太多性能，但我们仍不推荐你频繁调用此 API（例如每秒 20 次）。

```java
List<Shop> allShops = manager.getAllShops();
```

## 获取所有已载入的商店

这个方法只会返回处于活跃状态的商店（例如位于已加载区块内或其他原因保持激活的商店）。

此方法不会唤起完整的商店查找，且这些商店会由 QuickShop 单独保存。

```java
List<Shop> loadedShops = manager.getLoadedShops();
```

## 商店的载入&卸载

这个操作必须在服务器的主线程上进行。

```java
Shop shop = ...;
ShopManager manager = ...;
manager.unloadShop(shop); // load the shop and put it into loaded shops list
manager.loadShop(shop); // unload the shop and remove it from loaded shops list
```

## 删除或禁用商店

这个操作必须在服务器的主线程上进行。

```java
Shop shop = ...;
ShopManager manager = ...;
manager.deleteShop(shop) // 从内存与数据库中完全删除此商店
```

## 识别商店

Please note that store locations are technically variable and you should not use coordinates to identify a store.  
需要注意的是，商店位置是一种内部变量，且不应通过坐标查找商店。  
另外，RuntimeRandomUniqueId 不应用于识别商店，因为正如其名称所述，它的值会在服务器每次重启时刷新，因此它应当只用于玩家与服务器交互时的场景。

```java
long shopId = shop.getShopId(); // 除非商店被删除，否则一般不会出现变化。若商店尚未准备好，则有可能为 -1。如 ShopCreateEvent。这种情况下应当使用 ShopCreateSuccessEvent。
```

## 获取收购或出售模式下的商店

```java
ShopType type = shop.getShopType();
// 可为 ShopType.SELLING 或 ShopType.BUYING
```

## 获取商店剩余物品量

尽管这个值存储在实现过程中的 ItemStack 内，你仍不应直接从 ItemStack 获取该值，它可以在运行时由配置文件覆盖。

```java
int stackingAmount = shop.getShopStackingAmount();
```

## 物品比较

QuickShop-Hikari 有两种物品比较的实现方式，各有不同的选项，适用于不同的情况。所以你应该避免使用 ItemStack.isSimilar()，否则可能导致非预期的情况出现。

### 商店比较

若你需要比较商店内的物品，你可以参考如下代码：

```java
Shop shop = ...;
boolean applicable = shop.matches(YOUR_ITEM_STACK);
```

或在独立物品之间比较（不推荐，不同的字段顺序也可能导致不同的结果。）

```java
ItemMatcher matcher = api.getItemMatcher();
boolean applicable = matcher.matches(ORIGINAL, TARGET);
```
