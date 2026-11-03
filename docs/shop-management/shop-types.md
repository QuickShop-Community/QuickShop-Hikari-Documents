---
slug: /modules/shops/shop-types
---
# Shop Types

QuickShop-Hikari uses **shop types** to define the direction of a shop's trade.

The built-in shop types are:

- `SELLING`
- `BUYING`

:::info
Starting with QuickShop-Hikari 6.3.0.0, **Frozen is no longer a normal shop type**.

Freezing is now represented by a [Shop State](shop-states.md), allowing a shop to remain either `SELLING` or `BUYING` while its current state controls whether trading is allowed.
:::

## Selling Shop

A `SELLING` shop sells items **from the shop to the player**.

Players:

- pay money to the shop;
- receive the configured item.

The built-in identifier is:

```text
SELLING
```

QuickShop uses the selling shop's inventory stock when determining how many trades remain available.

For example, if the shop contains 64 diamonds and trades one diamond at a time, its remaining stock is based on those available diamonds.

## Buying Shop

A `BUYING` shop buys items **from the player**.

Players:

- give items to the shop;
- receive money from the shop.

The built-in identifier is:

```text
BUYING
```

Unlike a selling shop, a buying shop's remaining capacity is based on the amount of free inventory space available for the item being purchased.

This makes buying shops useful for:

- resource collection;
- server buy-back systems;
- material sinks;
- automated collection shops.

## Shop Type vs Shop State

Shop types and shop states now represent different concerns.

| Property | Shop Type | Shop State |
| --- | --- | --- |
| Purpose | Defines trade direction and behavior | Defines the shop's current operational condition |
| Built-in examples | `SELLING`, `BUYING` | `active`, `frozen` |
| Changes money/item flow | Yes | Usually no |
| Can block trading | Type API supports it, but normal freezing is now state-based | Yes |
| Example | Shop buys diamonds | Buying shop is temporarily frozen |

A shop therefore has both values at the same time.

For example:

```text
Type: BUYING
State: active
```

means the shop is currently buying items normally.

```text
Type: BUYING
State: frozen
```

means the shop is still fundamentally a buying shop, but trading is temporarily blocked.

When the shop is unfrozen, it returns to:

```text
Type: BUYING
State: active
```

without needing to restore or infer its previous trade type.

See [Shop States](shop-states.md) for details.

## Switching Shop Types

Shop owners or authorized staff can switch between buying and selling behavior through QuickShop's normal shop-management controls.

Changing the shop type affects the direction of the transaction:

```text
SELLING → player buys from shop
BUYING  → player sells to shop
```

Freezing should not be treated as a type change.

To temporarily stop trading, use the shop's state instead.

## FrozenType Compatibility

The API still contains the legacy:

```java
FrozenType
```

class for compatibility with older code.

However, as of 6.3.0.0 it is:

```java
@Deprecated(since = "6.3.0.0", forRemoval = true)
```

New addons and integrations should **not** use `FrozenType` to freeze a shop.

Use the `ShopState` API instead.

## Developer API

Shop types implement:

```java
IShopType
```

The interface defines information such as:

```java
int id();
String identifier();
String translationKey();

boolean isBuying();
boolean isStackable();
boolean isTradingBlocked();

Integer remainingStock(Shop shop);
CompletableFuture<Integer> remainingStockAsync(Shop shop);
```

A shop's current type can be accessed through:

```java
IShopType type = shop.shopType();
```

Common checks include:

```java
if(shop.shopType().isBuying()) {
    // Buying shop
}
```

or:

```java
if(shop.shopType().identifier().equalsIgnoreCase("SELLING")) {
    // Selling shop
}
```

Where possible, addons should work with the `IShopType` abstraction instead of depending directly on built-in implementation classes.

## Built-in Type Identifiers

| Shop Type | Numeric ID | Identifier |
| --- | ---: | --- |
| Selling | `0` | `SELLING` |
| Buying | `1` | `BUYING` |

The old Frozen type used numeric ID `2`, but it is deprecated in 6.3.0.0 and should not be used for new implementations.

## Custom Shop Types

QuickShop's type system is extensible through `IShopType`.

A custom shop type can define its own:

- identifier;
- translation keys;
- operation type;
- buying/selling semantics;
- stacking support;
- remaining-stock calculation;
- asynchronous stock calculation.

Shop states remain separate from these behaviors.

This separation allows an addon-defined shop type to also become `active` or `frozen` without requiring a separate frozen version of every custom type.

## Summary

QuickShop-Hikari's normal built-in shop types are now:

```text
SELLING
BUYING
```

`Frozen` is no longer the shop's trade type. It is a **Shop State**.

This means the shop's underlying buying or selling behavior is preserved while the state independently controls whether that shop is currently allowed to trade.
