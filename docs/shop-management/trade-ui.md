---
slug: /modules/shops/trade-ui
---
# Shop Trade Menu

The Shop Trade Menu is QuickShop-Hikari's player-facing GUI for buying from and selling to shops.

Instead of requiring repeated direct interactions with the shop, the menu provides a configurable inventory interface with:

- the shop item;
- current stock or available space;
- formatted price information;
- the shop owner;
- preset quantity buttons;
- custom amount entry;
- a configurable close button.

The Trade Menu is configured through `gui.yml`.

## Opening the Trade Menu

The GUI is opened by QuickShop's Interaction Manager through the:

```text
TRADE_UI
```

interaction behavior.

When `TRADE_UI` handles an existing shop, QuickShop first checks that the shop is not frozen.

Frozen shops cannot be traded with through the menu.

Before opening the GUI, QuickShop asynchronously calculates the shop's remaining stock:

```java
shop.shopType().remainingStockAsync(shop)
```

The calculated value is stored with the menu viewer and used when rendering the Trade Menu.

:::note
The menu's stock information is therefore prepared asynchronously before the GUI opens instead of requiring a synchronous stock calculation during menu rendering.
:::

## Default Layout

The Trade Menu is configured under:

```yaml
trade:
```

in `gui.yml`.

The default menu uses six inventory rows:

```yaml
trade:
  title: "lang:gui.trade.title"
  rows: 6
```

The default layout includes:

| Element | Default Slot |
| --- | ---: |
| Shop item | `13` |
| Stock information | `21` |
| Price information | `22` |
| Seller information | `23` |
| Quantity buttons | `37`–`42` |
| Custom amount | `43` |
| Close button | `49` |

The top, separator, and bottom rows use the configured border:

```yaml
border:
  material: GRAY_STAINED_GLASS_PANE
  name: " "
  rows: [1, 4, 6]
```

All of these materials, slots, names, and lore can be changed in `gui.yml`.

## Shop Item

The shop's actual item is displayed in the configured `shop-item` slot:

```yaml
shop-item:
  slot: 13
```

QuickShop fires its item-preview population event before placing the item in the menu, allowing compatible integrations to modify the displayed preview.

## Stock Information

The stock icon defaults to:

```yaml
info-stock:
  material: CHEST
  name: "lang:gui.trade.info-stock.display"
  lore:
    - "lang:gui.trade.info-stock.lore"
  slot: 21
```

The value shown depends on the shop.

QuickShop handles:

- normal stock counts;
- unlimited shops;
- out-of-stock states;
- shop states that override the normal shop-type text.

The stock value is based on the remaining-stock result calculated before the Trade Menu is opened.

## Price Information

The default price icon is:

```yaml
info-price:
  material: GOLD_INGOT
  name: "lang:gui.trade.info-price.display"
  lore:
    - "lang:gui.trade.info-price.lore"
  slot: 22
```

QuickShop formats the price through the shop's active currency and economy formatting.

For stacking shops, the menu also uses the shop item's configured stack amount when displaying quantity information.

## Seller Information

The default seller icon is:

```yaml
info-seller:
  material: PLAYER_HEAD
  name: "lang:gui.trade.info-seller.display"
  lore:
    - "lang:gui.trade.info-seller.lore"
  slot: 23
```

For shops owned by real players, QuickShop applies the owner's UUID to the player-head profile.

The displayed owner name comes from the shop owner's QuickShop user information.

## Quantity Buttons

Preset trade quantities are configured under:

```yaml
trade:
  quantity-buttons:
```

The default configuration is:

```yaml
quantity-buttons:
  material-buy: LIME_CONCRETE
  material-sell: ORANGE_CONCRETE
  custom-model-data: 0
  slots: [37, 38, 39, 40, 41, 42]
  quantities: [1, 2, 4, 8, 16, 64]
  close-after: true
  display-buy: "lang:gui.trade.quantity-button.display-buy"
  display-sell: "lang:gui.trade.quantity-button.display-sell"
  lore:
    - "lang:gui.trade.quantity-button.lore"
```

Each entry in `quantities` corresponds to the entry in the same position in `slots`.

For example:

```yaml
slots:      [37, 38, 39]
quantities: [1,  2,  4]
```

creates three buttons trading one, two, or four shop units.

:::important
For a stacking shop, these values represent **shop units**, not necessarily individual items.

If the shop sells stacks of 16 items, a quantity button configured as:

```yaml
quantities: [4]
```

represents four shop units, or 64 actual items.
:::

## Quantity Button Display Amount

The visible amount used by each quantity button is calculated as:

```text
shop item amount × configured quantity
```

For example, if the shop item amount is `8` and the button quantity is `4`:

```text
8 × 4 = 32 items
```

The menu item stack itself is capped at Minecraft's normal visible stack size of `64`, while the actual trade quantity still uses the configured shop-unit quantity.

## `close-after`

QuickShop-Hikari 6.3 adds the `close-after` setting for quantity buttons.

```yaml
trade:
  quantity-buttons:
    close-after: true
```

When:

```yaml
close-after: true
```

the Trade Menu closes after the player clicks a preset quantity button.

When:

```yaml
close-after: false
```

QuickShop keeps the player on the Trade Menu page after the action, allowing repeated trades without reopening the GUI.

The default is:

```yaml
close-after: true
```

This setting applies to the preset quantity buttons.

## Custom Amount

Players can also enter an exact amount through the custom amount button:

```yaml
custom-amount:
  material: NAME_TAG
  name: "lang:gui.trade.custom-amount.display"
  slot: 43
```

Clicking the button opens QuickShop's chat-input flow.

The entered value represents the **actual number of items** the player wants to trade.

QuickShop then validates the amount against the shop's configured item amount.

For example, if a stacking shop trades:

```text
16 items per shop unit
```

valid custom amounts include:

```text
16
32
48
64
```

but:

```text
20
```

is rejected because it is not divisible by the shop-unit amount.

Internally, QuickShop normalizes the player-entered item quantity into shop units:

```text
normalized quantity = entered item amount / shop item amount
```

This normalized quantity is then passed into QuickShop's trade logic.

## Custom Amount Stock Validation

For limited shops, QuickShop verifies that the normalized quantity does not exceed the available stock.

If it does, the trade is rejected and the player receives the configured invalid-stock message.

Unlimited shops are not subject to this stock check.

## Zero and Invalid Input

Entering:

```text
0
```

does not perform a trade.

Non-numeric input causes QuickShop to display the custom amount prompt again.

Values that are not valid multiples of the shop's trade amount produce the configured:

```text
trade.invalid-multiple
```

message.

## Buy and Sell Behavior

The same Trade Menu is used for both shop directions.

For a shop that sells items to players, the GUI uses the buy visual configuration:

```yaml
material-buy: LIME_CONCRETE
display-buy: "lang:gui.trade.quantity-button.display-buy"
```

For a shop that buys items from players, it uses:

```yaml
material-sell: ORANGE_CONCRETE
display-sell: "lang:gui.trade.quantity-button.display-sell"
```

QuickShop then delegates the transaction to its normal shop trading logic rather than implementing a separate GUI-specific economy transaction.

This means Trade Menu transactions still use QuickShop's normal:

- economy handling;
- tax handling;
- inventory checks;
- stock checks;
- permissions;
- shop behavior.

## Threading

Trade execution from the GUI is scheduled through QuickShop's region-thread helper:

```java
Util.regionThread(...)
```

This allows the Trade Menu to work with QuickShop's modern server-threading support rather than assuming that all Bukkit operations should run from one global server thread.

## Close Button

The default close button is:

```yaml
close:
  material: BARRIER
  name: "lang:gui.shared.close.display"
  slot: 49
```

Clicking it closes the menu without performing a transaction.

## Language Entries

Trade Menu names and lore can use QuickShop language entries by prefixing values with:

```text
lang:
```

For example:

```yaml
name: "lang:gui.trade.info-price.display"
```

or:

```yaml
lore:
  - "lang:gui.trade.info-price.lore"
```

QuickShop resolves those values through its localization system.

Direct MiniMessage-formatted strings can also be used:

```yaml
name: "<gold>Price</gold>"
```

## MiniMessage Formatting

`gui.yml` supports Adventure MiniMessage formatting for menu text.

For example:

```yaml
name: "<bold><green>Buy Items</green></bold>"
```

Common tags include:

```text
<bold>
<italic>
<red>
<green>
<yellow>
<aqua>
<gradient:...>
```

## Custom Model Data

Trade Menu icons support `custom-model-data`.

For example:

```yaml
info-price:
  material: GOLD_INGOT
  custom-model-data: 1001
```

This can be used with a resource pack to give QuickShop GUI icons custom textures or models.

## Complete Example

```yaml
trade:
  title: "lang:gui.trade.title"
  rows: 6

  border:
    material: GRAY_STAINED_GLASS_PANE
    name: " "
    rows: [1, 4, 6]

  shop-item:
    slot: 13

  info-stock:
    material: CHEST
    name: "lang:gui.trade.info-stock.display"
    lore:
      - "lang:gui.trade.info-stock.lore"
    slot: 21

  info-price:
    material: GOLD_INGOT
    name: "lang:gui.trade.info-price.display"
    lore:
      - "lang:gui.trade.info-price.lore"
    slot: 22

  info-seller:
    material: PLAYER_HEAD
    name: "lang:gui.trade.info-seller.display"
    lore:
      - "lang:gui.trade.info-seller.lore"
    slot: 23

  quantity-buttons:
    material-buy: LIME_CONCRETE
    material-sell: ORANGE_CONCRETE
    slots: [37, 38, 39, 40, 41, 42]
    quantities: [1, 2, 4, 8, 16, 64]
    close-after: true
    display-buy: "lang:gui.trade.quantity-button.display-buy"
    display-sell: "lang:gui.trade.quantity-button.display-sell"
    lore:
      - "lang:gui.trade.quantity-button.lore"

  custom-amount:
    material: NAME_TAG
    name: "lang:gui.trade.custom-amount.display"
    slot: 43

  close:
    material: BARRIER
    name: "lang:gui.shared.close.display"
    slot: 49
```

## Summary

The Trade Menu provides a configurable GUI over QuickShop's normal trading system.

QuickShop-Hikari 6.3's important Trade Menu behavior includes:

- asynchronous remaining-stock calculation before opening;
- configurable preset quantities;
- correct stacking-shop quantity normalization;
- custom exact-item amount entry;
- configurable `close-after` behavior;
- configurable materials, slots, names, lore, and custom model data;
- MiniMessage and `lang:` localization support;
- region-thread-aware trade execution.

For most servers, the default GUI provides a complete trading interface while `gui.yml` allows the visual layout and quantity choices to be adapted to the server's economy.
