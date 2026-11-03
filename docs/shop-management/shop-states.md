---
slug: /modules/shops/shop-states
---
# Shop States

QuickShop-Hikari 6.3.0.0 introduces **Shop States** as a separate system from [Shop Types](shop-types.md).

A shop type answers:

```text
What kind of trade does this shop perform?
```

A shop state answers:

```text
What operational condition is this shop currently in?
```

This change allows a shop to remain a `BUYING` or `SELLING` shop while being temporarily frozen.

## Built-in Shop States

QuickShop currently provides two built-in states:

| State | Identifier | Trading Allowed |
| --- | --- | --- |
| Active | `active` | Yes |
| Frozen | `frozen` | No |

Every shop therefore has both a **type** and a **state**.

For example:

```text
Type: SELLING
State: active
```

or:

```text
Type: SELLING
State: frozen
```

The second shop remains a selling shop even though trading is temporarily disabled.

## Active State

The normal state is:

```text
active
```

An active shop allows normal trading according to its shop type.

For example:

```text
Type: BUYING
State: active
```

allows players to sell items to the shop.

The built-in `ActiveState` does not override the shop type's normal sign/trading text.

## Frozen State

The frozen state is:

```text
frozen
```

A frozen shop:

- remains registered as its original shop type;
- keeps its item, price, owner, inventory, and other shop data;
- blocks player trading;
- reports itself as frozen to QuickShop's UI and rendering systems;
- overrides the normal shop-type trading text where applicable.

The built-in Frozen state returns:

```java
isTradingAllowed() == false
isFrozen() == true
```

and uses:

```text
shop-cannot-trade-when-freezing
```

as its blocked-trading translation key.

## Why Frozen Became a State

Before 6.3.0.0, freezing was represented through a dedicated `FrozenType`.

That mixed two different concepts:

```text
Trade direction
Operational condition
```

For example, changing:

```text
BUYING → FROZEN
```

meant the shop temporarily lost its normal type identity.

With Shop States, QuickShop instead stores:

```text
Type: BUYING
State: frozen
```

When unfrozen, only the state changes:

```text
Type: BUYING
State: active
```

The shop's underlying trade type never needs to be reconstructed.

This is also more extensible for custom shop types, because every custom type can use the same state system.

## Freezing and Unfreezing a Shop

The existing freeze command now toggles the shop's state:

```text
/qs freeze
```

When an active shop is frozen, QuickShop changes its state to:

```text
frozen
```

Running the command again changes it back to:

```text
active
```

The shop type remains unchanged throughout the process.

For example:

```text
Before:
/qs freeze

Type: SELLING
State: active
```

becomes:

```text
Type: SELLING
State: frozen
```

and after running `/qs freeze` again:

```text
Type: SELLING
State: active
```

## Permissions

Freezing a shop is controlled through QuickShop's shop permission system.

The freeze command checks the shop-level permission represented by:

```text
SET_SHOP_STATE
```

Users with the administrative bypass:

```text
quickshop.other.freeze
```

can also change the frozen state of shops they do not normally manage.

## Shop State Rendering

A state can decide whether it should override the shop type's normal text.

The `ShopState` API exposes:

```java
boolean overrideShopTypeText();
```

The built-in states behave as follows:

| State | Overrides Type Text |
| --- | --- |
| Active | No |
| Frozen | Yes |

This allows a frozen buying or selling shop to display frozen text without changing its underlying shop type.

This behavior is also used by QuickShop's configurable sign layout system.

## Developer API

Shop states implement:

```java
ShopState
```

The interface includes:

```java
String identifier();
String translationKey();
String miniLoreTranslationKey();

boolean overrideShopTypeText();
boolean isTradingAllowed();
boolean isFrozen();
String blockedReasonTranslationKey();
```

A shop's current state can be accessed through:

```java
ShopState state = shop.shopState();
```

Common checks include:

```java
if(!shop.shopState().isTradingAllowed()) {
    // Trading is currently unavailable
}
```

or:

```java
if(shop.shopState().isFrozen()) {
    // Shop is frozen
}
```

Prefer capability-style checks such as:

```java
isTradingAllowed()
```

over checking only for the literal identifier when your addon only needs to know whether a trade may occur.

That allows future states to block trading without requiring every integration to know each state name.

## Changing a Shop State

The current state can be changed through the shop API:

```java
shop.shopState(newState);
```

QuickShop's built-in freeze command switches between the registered Active and Frozen state instances.

When writing addons, prefer retrieving states through QuickShop's state registration/management APIs rather than constructing assumptions around the deprecated `FrozenType`.

## State Lookup

The `ShopManager` exposes state lookup methods for registered states.

For example, integrations can work with state identifiers such as:

```text
active
frozen
```

This makes the state system extensible in the same way that QuickShop's shop-type system can support additional implementations.

## State-Aware Queries

QuickShop's `ShopQuery` system also supports filtering by:

```java
ShopState
```

through its state filter.

This allows addons to query collections such as:

```text
all active shops
all frozen shops
```

independently from whether those shops are buying or selling.

That separation makes queries such as:

```text
all frozen BUYING shops
```

possible by combining a type filter with a state filter.

## Shop Type vs State

A useful way to think about the new model is:

```text
Shop Type  = what the shop does
Shop State = whether/how the shop is currently operating
```

For example:

| Type | State | Result |
| --- | --- | --- |
| `SELLING` | `active` | Players can buy from the shop |
| `SELLING` | `frozen` | Selling behavior is preserved, trading blocked |
| `BUYING` | `active` | Players can sell to the shop |
| `BUYING` | `frozen` | Buying behavior is preserved, trading blocked |

## Custom Shop States

The `ShopState` interface is designed to support additional states.

A custom state can define:

- its stable identifier;
- its display translation;
- miniature lore text;
- whether it overrides shop-type text;
- whether trading is allowed;
- whether it should be treated as frozen;
- the reason shown when trading is blocked.

This allows future or addon-defined states such as maintenance or disabled states without creating new shop types for each operational condition.

## Summary

Shop States separate a shop's current condition from its trade behavior.

QuickShop-Hikari 6.3.0.0 uses:

```text
active
frozen
```

as its built-in states, while normal trade types remain:

```text
SELLING
BUYING
```

The key result is that freezing a shop no longer destroys or replaces its original buying/selling identity.
