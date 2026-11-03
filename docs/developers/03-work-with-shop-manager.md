---
slug: /development/03-work-with-shop-manager
---
# Working with ShopManager

`ShopManager` is the primary API for locating, querying, registering, loading, and managing QuickShop shops.

Get it from the public QuickShop API:

```java
QuickShopAPI api = QuickShopAPI.getInstance();
ShopManager manager = api.getShopManager();
```

Required imports:

```java
import com.ghostchu.quickshop.api.QuickShopAPI;
import com.ghostchu.quickshop.api.shop.Shop;
import com.ghostchu.quickshop.api.shop.ShopManager;
```

## Getting a Shop by Location

Minecraft double chests require special handling because a QuickShop is associated with one side of the container.

For most location lookups, use:

```java
Shop shop = manager.getShopIncludeAttached(location);
```

This checks the requested location and accounts for attached containers such as double chests.

The method may return `null`:

```java
Shop shop = manager.getShopIncludeAttached(location);

if(shop == null) {
    return;
}
```

If you specifically do **not** want attached-container handling, use:

```java
Shop shop = manager.getShop(location);
```

## Cached Location Lookups

QuickShop also exposes explicit cache-based lookup methods:

```java
Shop shop = manager.getShopViaCache(location);
```

or, including attached containers:

```java
Shop shop = manager.getShopIncludeAttachedViaCache(location);
```

For normal shop interaction code, prefer the API method that matches the behavior you actually need instead of reading QuickShop's internal shop maps directly.

## Getting a Shop by ID

A persisted shop has a database-backed shop ID:

```java
long shopId = shop.getShopId();
```

You can retrieve it later with:

```java
Shop shop = manager.getShop(shopId);
```

`getShop(long)` may return `null` when no shop with that ID exists.

:::note
`shop.getShopId()` may return `-1` while a shop is still being created and has not yet received its persisted ID.
:::

## Runtime Random UUIDs

A shop also has a runtime UUID:

```java
UUID runtimeId = shop.getRuntimeRandomUniqueId();
```

You can look it up with:

```java
Shop shop = manager.getShopFromRuntimeRandomUniqueId(runtimeId);
```

:::warning
Do not persist a shop's runtime random UUID.

It can change after a plugin reload, shop reload, or server restart. Use `shop.getShopId()` when you need a persistent identifier.
:::

## Getting All Shops

To retrieve all shops in the database, including unloaded shops:

```java
List<Shop> shops = manager.getAllShops();
```

This can be relatively expensive because it represents the full shop collection.

:::warning
Do not repeatedly call `getAllShops()` in a hot loop.

If you need the same result repeatedly, cache the result where appropriate or use a more targeted API.
:::

## Getting Loaded Shops

To retrieve only currently loaded shops:

```java
Set<Shop> loadedShops = manager.getLoadedShops();
```

Unlike older documentation, the current API returns a `Set<Shop>`, not a `List<Shop>`.

Loaded shops are the shops currently registered in QuickShop's active in-memory shop mappings.

## Getting Shops Owned by a Player

QuickShop provides direct owner lookups.

Using a UUID:

```java
List<Shop> shops = manager.getAllShops(playerUuid);
```

or using a `QUser`:

```java
List<Shop> shops = manager.getAllShops(qUser);
```

These methods can involve retrieving the player's complete shop collection, so cache their results when repeatedly accessing the same data.

## Getting Shops in a World

You can retrieve all shops in a specific world:

```java
List<Shop> shops = manager.getShopsInWorld(world);
```

or by world name:

```java
List<Shop> shops = manager.getShopsInWorld(worldName);
```

## Getting Shops in a Chunk

For chunk-scoped operations:

```java
Map<Location, Shop> shops = manager.getShops(chunk);
```

QuickShop also supports its internal `ShopChunk` representation:

```java
Map<Location, Shop> shops = manager.getShops(shopChunk);
```

or explicit world/chunk coordinates:

```java
Map<Location, Shop> shops =
        manager.getShops(worldName, chunkX, chunkZ);
```

These APIs are preferable when your addon already knows the relevant world or chunk and does not need to scan every shop on the server.

## Iterating Shops

QuickShop provides a shop iterator:

```java
Iterator<Shop> iterator = manager.getShopIterator();

while(iterator.hasNext()) {

    Shop shop = iterator.next();

    // Work with the shop.
}
```

This is useful when you need to traverse QuickShop's shop collection without directly navigating the underlying world/chunk maps.

## ShopQuery

QuickShop-Hikari 6.3 introduces the `ShopQuery` API for composing reusable shop filters.

Create a query with:

```java
ShopQuery query = new ShopQuery();
```

Then add one or more filters:

```java
List<Shop> shops = new ShopQuery()
        .filterBy(Filters.ITEM_TYPE, Material.DIAMOND)
        .execute();
```

Required imports:

```java
import com.ghostchu.quickshop.api.shop.query.Filters;
import com.ghostchu.quickshop.api.shop.query.ShopQuery;
```

Each call to `filterBy(...)` adds another condition. All configured filters must pass for a shop to be included.

For example:

```java
List<Shop> shops = new ShopQuery()
        .filterBy(Filters.ITEM_TYPE, Material.DIAMOND)
        .filterBy(Filters.OWNER_UUID, ownerUuid)
        .execute();
```

This returns shops whose item type is `DIAMOND` **and** whose owner matches `ownerUuid`.

:::note
`ShopQuery#execute()` currently evaluates the query against `ShopManager#getAllShops()`.

Treat it like a full-shop query rather than a lightweight lookup suitable for running every tick.
:::

## Built-in Query Filters

QuickShop currently provides these built-in filters:

| Filter | Value Type | Purpose |
| --- | --- | --- |
| `Filters.ITEM_TYPE` | `Material` | Match the shop item's material |
| `Filters.OWNER_UUID` | `UUID` | Match a shop owner by UUID |
| `Filters.OWNER_QUSER` | `QUser` | Match a shop owner by `QUser` |
| `Filters.STATE` | `ShopState` | Match the shop's current state |
| `Filters.TYPE` | `IShopType` | Match the shop type |
| `Filters.WORLD_UUID` | `UUID` | Match the shop's world |

Example using several filters:

```java
List<Shop> shops = new ShopQuery()
        .filterBy(Filters.WORLD_UUID, world.getUID())
        .filterBy(Filters.ITEM_TYPE, Material.DIAMOND)
        .filterBy(Filters.STATE, desiredState)
        .execute();
```

## Creating Custom Query Filters

A query filter implements:

```java
Filter<T>
```

The interface contains:

```java
boolean applies(Shop shop, T object);
```

For example:

```java
Filter<Double> minimumPrice = (shop, price) ->
        shop.price() >= price;
```

Then use it in a query:

```java
List<Shop> expensiveShops = new ShopQuery()
        .filterBy(minimumPrice, 1000.0)
        .execute();
```

This makes `ShopQuery` useful for addon-specific criteria without requiring changes to QuickShop itself.

## Shop Types

QuickShop-Hikari uses the extensible `IShopType` API.

Retrieve a shop's type with:

```java
IShopType type = shop.shopType();
```

Do not rely on the older `ShopType` enum pattern.

For simple buying/selling checks, the shop also exposes:

```java
if(shop.isBuying()) {

    // Buying shop
}

if(shop.isSelling()) {

    // Selling shop
}
```

You can retrieve a registered shop type from the manager by numeric ID:

```java
Optional<IShopType> type = manager.shopType(id);
```

or by identifier:

```java
Optional<IShopType> type = manager.shopType(identifier);
```

QuickShop also provides fallback versions:

```java
IShopType type = manager.shopTypeOrDefault(id);
```

and:

```java
IShopType type = manager.shopTypeOrDefault(identifier);
```

## Shop States

QuickShop-Hikari 6.3 also uses an extensible `ShopState` system.

Retrieve the current state with:

```java
ShopState state = shop.shopState();
```

The `ShopManager` exposes registered states:

```java
Optional<ShopState> state = manager.shopState(identifier);
```

or:

```java
ShopState state = manager.shopStateOrDefault(identifier);
```

For common checks, a shop also provides convenience methods such as:

```java
boolean frozen = shop.isFrozen();
```

## Getting the Shop Item

Retrieve the shop's configured item with:

```java
ItemStack item = shop.getItem();
```

When changing it through the API:

```java
shop.setItem(newItem);
```

QuickShop-Hikari 6.3 also exposes its serialized item representation:

```java
String serialized = shop.itemSerializeString();
```

## Getting the Shop Price

The modern price API is:

```java
double price = shop.price();
```

and:

```java
shop.price(newPrice);
```

:::warning
`shop.getPrice()` and `shop.setPrice(...)` are deprecated for removal as of 6.3.0.0.

Use `price()` and `price(...)` for new addon code.
:::

To format a price using QuickShop's configured economy formatting:

```java
String formatted = manager.format(shop.price(), shop);
```

## Getting the Shop Owner

A shop's owner is represented as a `QUser`:

```java
QUser owner = shop.getOwner();
```

To change ownership:

```java
shop.setOwner(newOwner);
```

## Shop Stacking Amount

When dealing with stacking shops, use QuickShop's shop API instead of assuming that the `ItemStack` amount alone represents the configured trade amount.

Use the appropriate shop stacking API exposed by the active shop implementation rather than manually deriving stacking behavior from the raw item.

## Comparing Items

QuickShop has configurable item matching behavior, so addons should avoid using:

```java
ItemStack.isSimilar(...)
```

when determining whether an item matches a shop.

Instead, compare directly through the shop:

```java
boolean matches = shop.matches(itemStack);
```

For standalone item comparison, use QuickShop's active `ItemMatcher`:

```java
ItemMatcher matcher = api.getItemMatcher();

boolean matches = matcher.matches(original, target);
```

Using the active matcher ensures your addon respects the server's configured QuickShop matching rules.

## Loading a Shop

To add a shop to QuickShop's active mappings:

```java
manager.loadShop(shop);
```

## Unloading a Shop

To remove a shop from the active mappings without deleting it:

```java
manager.unloadShop(shop);
```

QuickShop also provides an overload intended for chunk-unload behavior:

```java
manager.unloadShop(shop, true);
```

The boolean indicates that the unload was caused by chunk unloading, allowing QuickShop to avoid operations that could trigger a load/unload loop.

:::warning
Do not use `loadShop()` or `unloadShop()` merely to hide or disable a shop.

These methods manage QuickShop's active shop mappings and lifecycle.
:::

## Deleting a Shop

To permanently delete a shop through QuickShop:

```java
manager.deleteShop(shop);
```

Do not manually remove the shop from QuickShop's internal maps or database.

## Registering and Unregistering Shops

QuickShop exposes lower-level registration APIs:

```java
CompletableFuture<?> future =
        manager.registerShop(shop, true);
```

and:

```java
CompletableFuture<?> future =
        manager.unregisterShop(shop, true);
```

The `persist` argument controls whether the operation should be persisted.

For normal shop lifecycle operations, prefer QuickShop's higher-level creation/deletion APIs unless your addon specifically needs to work with registration directly.

## Saving Shop Changes

A `Shop` exposes asynchronous persistence:

```java
CompletableFuture<Void> future = shop.update();
```

For example:

```java
shop.price(500.0);

shop.update().thenRun(() -> {
    // Save completed.
});
```

There is also:

```java
shop.updateSync();
```

:::danger
Avoid `updateSync()` unless you specifically understand why synchronous waiting is required.

It waits for the asynchronous save operation to complete and can block the calling thread.
:::

## Tagged Shops

QuickShop's `ShopManager` also exposes the per-player tagging system.

Query shops with a specific tag:

```java
CompletableFuture<List<Shop>> shops =
        manager.queryTaggedShops(playerUuid, "favorite");
```

Tag a shop:

```java
manager.tagShop(playerUuid, shop, "favorite");
```

Remove a tag from a shop:

```java
manager.removeTag(playerUuid, shop, "favorite");
```

Clear all tags for one shop:

```java
manager.clearShopTags(playerUuid, shop);
```

Clear one tag from all of a player's tagged shops:

```java
manager.clearTagFromShops(playerUuid, "favorite");
```

List the player's known tags:

```java
List<String> tags = manager.listTags(playerUuid);
```

The tag mutation/query methods that return `CompletableFuture` should be handled asynchronously rather than blocked on the server thread.

## TradeService

QuickShop-Hikari exposes the modern trade service through `ShopManager`:

```java
TradeService tradeService = manager.tradeService();
```

Use this API for integrations that need to execute or preview QuickShop trade operations rather than duplicating QuickShop's transaction logic.

This is preferable to manually moving items, calculating money transfers, taxes, stock, and space yourself.

## TaxManager

The enhanced tax system is available through:

```java
TaxManager taxManager = manager.taxManager();
```

The older:

```java
manager.getTax(shop, user);
```

API is deprecated for removal and no longer represents the enhanced tax system.

## Shop Layout Provider

The active shop layout provider is available through:

```java
IShopLayoutProvider layoutProvider =
        manager.shopLayoutProvider();
```

Addons that provide a custom layout implementation can replace it with:

```java
manager.shopLayoutProvider(customProvider);
```

See [Shop Layout Provider](09-layout-provider.md) for layout-provider-specific development information.

## Threading

ShopManager operations do not all have identical threading requirements.

Operations that interact with Bukkit world state, shop loading, signs, containers, or other live Minecraft objects must be performed using the appropriate server or region thread.

Database-backed operations may return `CompletableFuture` and should not be synchronously blocked on the server thread.

:::warning
QuickShop-Hikari supports modern threaded server environments such as Folia.

Do not assume that "main thread" is the only valid scheduling model. Use the appropriate scheduler for the server platform and the world/entity being accessed.
:::

## Summary

For most addons, the core workflow looks like:

```java
QuickShopAPI api = QuickShopAPI.getInstance();
ShopManager manager = api.getShopManager();

Shop shop = manager.getShopIncludeAttached(location);

if(shop == null) {
    return;
}

if(shop.matches(itemStack)) {

    double price = shop.price();
    IShopType type = shop.shopType();

    // Work with the shop.
}
```

For broader searches, QuickShop-Hikari 6.3 provides `ShopQuery`:

```java
List<Shop> shops = new ShopQuery()
        .filterBy(Filters.OWNER_UUID, ownerUuid)
        .filterBy(Filters.ITEM_TYPE, Material.DIAMOND)
        .execute();
```

Use the public `ShopManager`, `Shop`, `ShopQuery`, `TradeService`, and related API abstractions rather than manipulating QuickShop's internal maps or implementation classes directly.
