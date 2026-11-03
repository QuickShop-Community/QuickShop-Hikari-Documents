---
slug: /compat-modules/voidchest
---
# VoidChest Compatibility

:::info

Can't find where to download the JAR? [Click here](../faq/where-addons-compacts-at).

:::

QuickShop-Hikari includes an optional compatibility module for **VoidChest**.

The module prevents VoidChest from processing QuickShop display/guard items as normal dropped items. This protects QuickShop's display system from being accidentally sold or consumed by VoidChest.

## Installation

Install the compatibility module alongside:

- QuickShop-Hikari
- VoidChest

The module is packaged as:

```text
Compat-VoidChest
```

Both `VoidChest` and `QuickShop-Hikari` are required dependencies, so the compatibility module should only be installed when both plugins are present.

## What It Does

QuickShop uses specially identified item stacks for parts of its display system.

The VoidChest compatibility module listens to VoidChest's item-processing events and checks whether the item being processed is one of these QuickShop guard items.

If it is, the VoidChest event is cancelled.

This prevents QuickShop display items from being:

- processed as normal dropped items;
- sold through VoidChest's chunk-item selling system;
- otherwise consumed by the VoidChest item-processing flow handled by these events.

## Supported VoidChest Events

The compatibility module currently integrates with two VoidChest API events.

### `VoidSellChunkItemEvent`

When VoidChest attempts to sell a dropped chunk item, QuickShop checks the dropped item's `ItemStack`.

If the item is identified as a QuickShop guard item, the event is cancelled.

### `ItemSpawnEvent`

When VoidChest processes an item spawn, QuickShop checks either the Bukkit `Item` or the supplied `ItemStack`.

If it is identified as a QuickShop guard item, the event is cancelled.

## QuickShop Display Protection

The compatibility check uses QuickShop's display-item protection system:

```java
AbstractDisplayItem.checkIsGuardItemStack(...)
```

This means the module is specifically intended to stop VoidChest from interfering with item stacks that QuickShop has marked for its display system.

Normal player items are not cancelled by this compatibility module simply because they are near a QuickShop shop.

## Configuration

The VoidChest compatibility module does not currently provide its own configuration file.

Once installed with both required plugins, the integration is enabled automatically.

## Permissions

The compatibility module does not add any player-facing permissions.

## Dependencies

The module requires:

```text
VoidChest
QuickShop-Hikari
```

It is built against the VoidChest API and registers its listeners directly with VoidChest's event manager.

## Folia Support

The module declares Folia support:

```yaml
folia-supported: true
```

## Summary

The VoidChest compatibility module is a small protection integration between QuickShop-Hikari and VoidChest.

Its purpose is to ensure that QuickShop display/guard items are ignored by VoidChest's item selling and item-spawn processing systems, preventing those internal display items from being accidentally processed as normal items.
