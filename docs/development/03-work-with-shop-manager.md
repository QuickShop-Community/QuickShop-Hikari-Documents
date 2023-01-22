# 0x03 Work with Shop(Manager)

ShopManager is the core component of QuickShop-Hikari, almost everything directly related to the store is done through ShopManager.

## Getting ShopManager

```java
ShopManager manager = api.getShopManager();
```

## Getting a shop

Since Minecraft has a special "Large Chest", we can't simply get the store map directly from the coordinates.  
QuickShop-Hikari's store is only bound to one half of "Large Chest", so to get the store, you need to query both the cube itself and its associated cube.

The good thing is that there is an API in the plugin that allows you to handle this situation very easily.

This operation requires that it must be performed on the main thread of the server.

```java
Shop shop = manager.getShopIncludeAttached(location);
```

By default, we will use ShopCache in order to improve the performance of this method.  

We handle the impact of store updates on the cache very well, so you should not bypass the cache unless there is an unintended result.
Cacheless lookups are slightly more expensive and can only be performed on the server main thread.

```java
Shop bypassCacheShop = manager.getShopIncludeAttached(location,false);
```

## Getting all shops on this server

The performance of this method is usually not a problem, but we still do not recommend calling this API too often (e.g. 20 times per second)

```java
List<Shop> allShops = manager.getAllShops();
```

## Getting all loaded shops

This method will only return stores that are currently active (chunks are loaded, or for some reason in active status).

This method does not trigger a full store lookup, and such stores are maintained separately within QuickShop.

```java
List<Shop> loadedShops = manager.getLoadedShops();
```

## Load&Unload a shop

This operation requires that it must be performed on the main thread of the server.

```java
Shop shop = ...;

shop.onLoad(); // load the shop and put it into loaded shops list
shop.onUnload(); // unload the shop and remove it from loaded shops list
```

## Delete or disable shop

This operation requires that it must be performed on the main thread of the server.

```java
Shop shop = ...;

shop.delete(); // Permanently delete this store, both memory and database
shop.delete(true); // Delete this store from memory only, it still will load back from database in next loading
```

## Identify a store

Please note that store locations are technically variable and you should not use coordinates to identify a store.  
Also RuntimeRandomUniqueId should not be used to identify the store, as the name suggests, the value changes every time the server restarts, it should only be used to handle scenarios where the player interacts with the server.

```
long shopId = shop.getShopId(); // never changes unless this shop was deleted, it can be -1 if shop not ready yet, e.g ShopCreateEvent, use ShopCreateSuccessEvent instead.
```

## Getting a shop is buying mode or selling mode

```
ShopType type = shop.getShopType();
// It can be ShopType.SELLING or ShopType.BUYING
```

## Getting a shop stacking amount

Although the value is stored in the ItemStack in the implementation, you should not get this value directly from the ItemStack, it can be overwritten by the configuration in runtime.

```
int stackingAmount = shop.getShopStackingAmount();
```

## Compare between items

QuickShop-Hikari has two item matching implementations with different options for different users, so you should avoid using ItemStack.isSimilar() directly, which can lead to unintended results.

### Compare with shop

If you need compare with a shop's item, you can use:

```java
Shop shop = ...;
boolean applicable = shop.matches(YOUR_ITEM_STACK);
```

or compare between standalone items (We do not recommend this, different parameter order may lead to different results.)

```java
ItemMatcher matcher = api.getItemMatcher();
boolean applicable = matcher.matches(ORIGINAL, TARGET);
```
