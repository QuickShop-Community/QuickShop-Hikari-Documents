---
slug: /development/10-events
---
# Custom Events

QuickShop-Hikari exposes Bukkit-compatible custom events that allow addons and integrations to react to shop lifecycle changes, purchases, settings, displays, inventory changes, protection checks, and other QuickShop behavior.

This page documents the public event system for **QuickShop-Hikari 6.3.0.0**.

:::note
This guide focuses on the events most useful to addon developers. The API may contain additional specialized events for internal or advanced integrations.
:::

---

# Event Architecture

QuickShop events are located under:

```java
com.ghostchu.quickshop.api.event
```

The base event class is:

```java
AbstractQSEvent
```

Some events extend `AbstractQSEvent` directly, while settings and other lifecycle-sensitive events may extend:

```java
PhasedEvent
```

QuickShop events can be registered using the normal Bukkit event system.

```java
Bukkit.getPluginManager().registerEvents(listener, plugin);
```

---

# Phased Events

Some QuickShop events can fire multiple times during a single operation.

The available phases are:

```java
PRE
PRE_CANCELLABLE
MAIN
POST
RETRIEVE
```

Each phase has different behavior.

| Phase | Update Values | Cancelable | Purpose |
| --- | --- | --- | --- |
| `PRE` | No | No | Called before the operation |
| `PRE_CANCELLABLE` | No | Yes | Called before the operation and may block it |
| `MAIN` | Yes | Yes | Called while the value or operation is being processed |
| `POST` | No | No | Called after the operation |
| `RETRIEVE` | Yes | No | Called when a value is being retrieved |

You can check the current phase with:

```java
event.phase()
```

or:

```java
event.isPhase(Phase.MAIN)
```

:::warning
Do not attempt to cancel a phased event during a phase that is not cancellable.

`PhasedEvent#setCancelled(...)` will throw an `IllegalStateException` if the current phase does not allow cancellation.
:::

Example:

```java
@EventHandler
public void onPriceChange(final ShopPriceEvent event) {

    if(event.isPhase(Phase.MAIN)) {

        // The updated value may be changed during MAIN.
    }
}
```

---

# Shop Management Events

Shop management events are located under:

```java
com.ghostchu.quickshop.api.event.management
```

## ShopCreateEvent

Called during shop creation.

```java
ShopCreateEvent
```

This is useful for:

- validating custom shop creation conditions;
- integrating protection or region systems;
- reacting when a new shop is created.

## ShopDeleteEvent

Called when a shop is being deleted.

```java
ShopDeleteEvent
```

Common uses include:

- external cleanup;
- removing addon-specific data;
- analytics and logging.

## ShopLoadEvent

Called when a shop is loaded into QuickShop.

```java
ShopLoadEvent
```

## ShopUnloadEvent

Called when a shop is unloaded.

```java
ShopUnloadEvent
```

## ShopDatabaseEvent

Called for shop database-related operations.

```java
ShopDatabaseEvent
```

Use this for integrations that need to react to shop persistence or database activity.

## ShopClickEvent

Called when QuickShop handles a click associated with a shop.

```java
ShopClickEvent
```

## ShopPermissionCheckEvent

Called while QuickShop performs a shop permission check.

```java
ShopPermissionCheckEvent
```

This can be useful for custom permission systems or integrations that add additional shop authorization logic.

---

# Shop Setting Events

Shop setting events are located under:

```java
com.ghostchu.quickshop.api.event.settings
```

Many setting events extend:

```java
ShopSettingEvent<T>
```

`ShopSettingEvent` is phase-based and exposes:

```java
event.shop()
event.old()
event.updated()
event.updated(newValue)
```

The updated value can only be changed during a phase that allows updates.

## ShopPriceEvent

Called when the price of a shop is read or changed.

```java
ShopPriceEvent
```

Typical uses include:

- enforcing price restrictions;
- modifying prices;
- reacting to price changes;
- economy balancing integrations.

## ShopOwnerEvent

Called when shop ownership is retrieved or changed.

```java
ShopOwnerEvent
```

## ShopOwnerNameEvent

Called for shop owner-name related operations.

```java
ShopOwnerNameEvent
```

## ShopNameEvent

Called when a shop's custom name is retrieved or changed.

```java
ShopNameEvent
```

## ShopItemEvent

Called when the item associated with a shop is retrieved or changed.

```java
ShopItemEvent
```

## ShopCurrencyEvent

Called for shop currency changes or retrieval.

```java
ShopCurrencyEvent
```

## ShopDisplayEvent

Called when the enabled state of a shop display is read or changed.

```java
ShopDisplayEvent
```

This is different from the DisplayManager events described later in this page.

## ShopUnlimitedEvent

Called when the unlimited state of a shop is retrieved or changed.

```java
ShopUnlimitedEvent
```

## ShopTypeEnhancedEvent

Called when the shop type is retrieved or changed.

```java
ShopTypeEnhancedEvent
```

This event works with QuickShop's extensible shop type system rather than relying on the old `ShopType` enum.

## ShopStateEvent

Called when the shop's state is retrieved or changed.

```java
ShopStateEvent
```

QuickShop-Hikari 6.3 uses the shop state system for conditions such as active and frozen shops.

## ShopSignLinesEvent

Called when the sign lines associated with a shop are retrieved or changed.

```java
ShopSignLinesEvent
```

This is useful when integrating with QuickShop's sign rendering system.

## ShopTaxAccountEvent

Called when the tax account associated with a shop is retrieved or changed.

```java
ShopTaxAccountEvent
```

## ShopPlayerGroupEvent

Called for shop player-group related settings.

```java
ShopPlayerGroupEvent
```

---

# Purchase & Economy Events

Economy events are located under:

```java
com.ghostchu.quickshop.api.event.economy
```

## ShopPurchaseEvent

Called when a purchase begins.

```java
ShopPurchaseEvent
```

`ShopPurchaseEvent` is cancellable.

Useful values include:

```java
event.getShop()
event.getPurchaser()
event.getPurchaserInventory()
event.getAmount()
event.getTotal()
```

The transaction total can also be changed:

```java
event.setTotal(newTotal);
```

To cancel the purchase:

```java
event.setCancelled(true);
```

:::tip
Use `ShopPurchaseEvent` when you need to validate, modify, or cancel a purchase before it completes.
:::

Example:

```java
@EventHandler
public void onPurchase(final ShopPurchaseEvent event) {

    if(event.getTotal() > 100000) {

        event.setCancelled(true);
    }
}
```

## ShopSuccessPurchaseEvent

Called after a purchase has completed successfully.

```java
ShopSuccessPurchaseEvent
```

Use this event when you need to record completed trades.

Typical uses include:

- transaction logging;
- statistics;
- achievements;
- Discord notifications;
- external analytics.

:::note
If you need to know whether a trade actually completed, prefer `ShopSuccessPurchaseEvent` rather than `ShopPurchaseEvent`.
:::

## ShopEnhancedTaxEvent

Called during QuickShop's enhanced tax calculation process.

```java
ShopEnhancedTaxEvent
```

Use this event for integrations such as:

- custom tax providers;
- dynamic tax adjustments;
- player-specific tax rules;
- region or rank-based tax behavior.

## ShopTaxEvent

The legacy tax event is still present in the 6.3 API:

```java
ShopTaxEvent
```

For new integrations, prefer the newer tax APIs and `ShopEnhancedTaxEvent` where applicable.

## EconomyTransactionEvent

QuickShop also exposes:

```java
EconomyTransactionEvent
```

for lower-level economy transaction integrations.

---

# Inventory Events

Inventory events are located under:

```java
com.ghostchu.quickshop.api.event.inventory
```

## ShopInventoryCalculateEvent

Called when QuickShop calculates shop inventory information.

```java
ShopInventoryCalculateEvent
```

## ShopInventoryChangedEvent

Called when QuickShop detects that the inventory associated with a shop has changed.

```java
ShopInventoryChangedEvent
```

This is useful for:

- stock tracking;
- external displays;
- addon caches;
- shop monitoring systems.

## ShopInventoryPreviewEvent

Called when QuickShop prepares an inventory preview.

```java
ShopInventoryPreviewEvent
```

## InventoryTransactionEvent

QuickShop exposes a lower-level inventory transaction event:

```java
InventoryTransactionEvent
```

for integrations that need to observe QuickShop inventory transactions.

---

# Display Events

Display events are located under:

```java
com.ghostchu.quickshop.api.event.display
```

QuickShop-Hikari 6.3 expands this area significantly with the introduction of the `DisplayManager` API.

## DisplayManagerPutEvent

**Added in 6.3.0.0.**

Called when a display is added to a `DisplayManager`.

```java
DisplayManagerPutEvent<T>
```

The event exposes:

```java
event.getShopChunk()
event.getDisplay()
```

Example:

```java
@EventHandler
public void onDisplayAdded(final DisplayManagerPutEvent<?> event) {

    Object display = event.getDisplay();

    // React to the display being registered.
}
```

This event is particularly useful for addons that track or extend QuickShop's display systems.

## DisplayManagerRemoveEvent

**Added in 6.3.0.0.**

Called when a display is removed from a `DisplayManager`.

```java
DisplayManagerRemoveEvent<T>
```

The event exposes:

```java
event.getShopChunk()
event.getDisplay()
```

Example:

```java
@EventHandler
public void onDisplayRemoved(final DisplayManagerRemoveEvent<?> event) {

    Object display = event.getDisplay();

    // Clean up addon-specific display state.
}
```

## ShopDisplayItemSpawnEvent

Called before QuickShop spawns a shop display item.

```java
ShopDisplayItemSpawnEvent
```

This can be used by addons that replace or customize display behavior.

## DisplayApplicableCheckEvent

Called when QuickShop checks whether a display should be applicable to a particular player.

```java
DisplayApplicableCheckEvent
```

This is useful for per-player display visibility integrations.

## Item Preview Events

QuickShop also provides:

```java
ItemPreviewComponentPrePopulateEvent
ItemPreviewComponentPopulateEvent
```

These events allow addons to participate while QuickShop builds item preview content.

---

# Sign & Rendering Events

QuickShop provides several events related to sign contents and rendering.

## ShopSignUpdateEvent

Located under:

```java
com.ghostchu.quickshop.api.event.general
```

Called when a shop sign is being updated.

```java
ShopSignUpdateEvent
```

## ShopSignLinesEvent

Located under:

```java
com.ghostchu.quickshop.api.event.settings.type
```

This phase-based setting event provides access to the sign lines associated with a shop.

```java
ShopSignLinesEvent
```

For new rendering integrations, also review the RenderComponent and Shop Layout Provider APIs.

---

# General Shop Events

General-purpose events are located under:

```java
com.ghostchu.quickshop.api.event.general
```

## ShopItemMatchEvent

Called during item matching.

```java
ShopItemMatchEvent
```

Useful for addons that need to participate in or observe QuickShop item comparisons.

## ShopProtectionCheckEvent

Called during QuickShop protection checks.

```java
ShopProtectionCheckEvent
```

This is useful when integrating external protection systems.

## ShopControlPanelOpenEvent

Called when the shop control panel is opened.

```java
ShopControlPanelOpenEvent
```

## ShopHistoryGuiOpenEvent

Called when the shop history GUI is opened.

```java
ShopHistoryGuiOpenEvent
```

## ShopInfoPanelEvent

Called while QuickShop prepares shop information panel content.

```java
ShopInfoPanelEvent
```

## ShopOngoingFeeEvent

Called for ongoing shop fee calculations or handling.

```java
ShopOngoingFeeEvent
```

---

# User Events

User events are located under:

```java
com.ghostchu.quickshop.api.event.user
```

## UserLimitCalculateEvent

Called when QuickShop calculates the number of shops a user may own.

```java
UserLimitCalculateEvent
```

This can be used for:

- rank-based limits;
- permission-based bonuses;
- temporary shop limit increases;
- custom progression systems.

:::note
The event class is named `UserLimitCalculateEvent`.

Older documentation may refer to `UserLimitCalculationEvent`, which is not the 6.3 API class name.
:::

---

# Control Panel Events

Control panel events are located under:

```java
com.ghostchu.quickshop.api.event.panel
```

## ControlComponentGenerateEvent

Called while QuickShop generates a control panel component.

```java
ControlComponentGenerateEvent
```

This is useful for addons that extend or customize QuickShop's control panel.

---

# Configuration Events

## QSConfigurationReloadEvent

Called when QuickShop reloads its configuration.

```java
QSConfigurationReloadEvent
```

Use this event when an addon needs to refresh cached configuration or rebuild state after a QuickShop reload.

---

# Registering an Event Listener

QuickShop events use the Bukkit event system.

Example listener:

```java
public final class QuickShopListener implements Listener {

    @EventHandler
    public void onPurchase(final ShopSuccessPurchaseEvent event) {

        Shop shop = event.getShop();

        // Handle the completed purchase.
    }

    @EventHandler
    public void onDisplayAdded(final DisplayManagerPutEvent<?> event) {

        // Handle a display being registered.
    }
}
```

Register the listener from your plugin:

```java
Bukkit.getPluginManager().registerEvents(
    new QuickShopListener(),
    this
);
```

---

# Cancelling Events

QuickShop has two main styles of cancellable events.

## Directly Cancellable Events

Events such as:

```java
ShopPurchaseEvent
```

implement QuickShop's cancellable event interface directly.

For these events, check:

```java
event.isCancelled()
```

and cancel using:

```java
event.setCancelled(true);
```

Some QuickShop cancellable events also support providing an Adventure `Component` as a cancellation reason.

## Phased Events

For a `PhasedEvent`, cancellation depends on the current `Phase`.

Check the phase before cancelling:

```java
if(event.phase().cancellable()) {

    event.setCancelled(true);
}
```

---

# Event Threading

Do not assume that every QuickShop event is fired synchronously on Bukkit's traditional main thread.

QuickShop supports modern server threading environments, including Folia.

When handling events:

- avoid blocking I/O;
- avoid long-running database operations;
- use the appropriate scheduler when interacting with world state;
- do not assume an event is safe for arbitrary Bukkit API calls based only on older Bukkit conventions.

If your listener performs expensive work, move that work to an appropriate asynchronous task where safe.

---

# API Changes to Note in 6.3

QuickShop-Hikari 6.3 introduces several event-related API changes that are especially important for addon developers:

- `DisplayManagerPutEvent` was added.
- `DisplayManagerRemoveEvent` was added.
- The new `DisplayManager` API is the base for QuickShop display managers.
- Shop state handling now uses the newer `ShopState` system.
- `ShopStateEvent` is available for shop state changes.
- The phase system includes `PRE`, `PRE_CANCELLABLE`, `MAIN`, `POST`, and `RETRIEVE`.
- The user limit event class is `UserLimitCalculateEvent`.

---

# Package Overview

The public event API is organized into these packages:

```text
com.ghostchu.quickshop.api.event
com.ghostchu.quickshop.api.event.display
com.ghostchu.quickshop.api.event.economy
com.ghostchu.quickshop.api.event.general
com.ghostchu.quickshop.api.event.inventory
com.ghostchu.quickshop.api.event.management
com.ghostchu.quickshop.api.event.packet
com.ghostchu.quickshop.api.event.panel
com.ghostchu.quickshop.api.event.settings
com.ghostchu.quickshop.api.event.settings.type
com.ghostchu.quickshop.api.event.user
```

When building an addon, import events from the public `quickshop-api` module rather than relying on internal implementation classes.

---

# Best Practices

- Check `Phase` before modifying or cancelling a phased event.
- Use `ShopSuccessPurchaseEvent` when recording completed transactions.
- Use `ShopPurchaseEvent` when validating or modifying a transaction before completion.
- Use the 6.3 `DisplayManagerPutEvent` and `DisplayManagerRemoveEvent` for display-manager lifecycle integrations.
- Avoid blocking event handlers with database, network, or file operations.
- Prefer public classes under `com.ghostchu.quickshop.api` rather than implementation classes.
- Expect the API to support custom shop types, currencies, states, and display implementations.

---

# Summary

QuickShop-Hikari 6.3 exposes events covering:

- shop creation, loading, unloading, and deletion;
- shop settings and state;
- purchases and taxes;
- inventory changes;
- shop displays and DisplayManager lifecycle;
- sign rendering;
- item matching;
- protection checks;
- user shop limits;
- control panel generation;
- configuration reloads.

The 6.3 event API is designed around QuickShop's extensible shop, setting, display, and phase systems, making events suitable for both small addons and deeper integrations.
