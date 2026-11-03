---
slug: /modules/shops/text-display
---
# Text Displays

QuickShop-Hikari 6.3 adds **Text Displays**, allowing shop information to be shown as floating text above a shop's displayed item.

Text Displays use Minecraft's native `TextDisplay` entities and support Adventure/MiniMessage formatting, allowing server owners to create more informative and visually customized shop displays.

:::warning
Text Displays currently only work with the Display Entity display system:

```yaml
shop:
  display-type: 3
```

They do not currently work with `display-type: 2`.

See [Shop Display System](display-system.md) for information about configuring shop item displays.
:::

## Enabling Text Displays

Text Displays are disabled by default.

Enable them in `config.yml`:

```yaml
shop:
  display-type: 3

  text-display:
    enabled: true
```

When enabled, QuickShop creates a separate floating text entity alongside the shop's item display.

:::note
Enabling `text-display.enabled` does not change the configured item display type. `shop.display-type` must still be set to `3`.
:::

## Basic Configuration

A Text Display configuration looks similar to:

```yaml
shop:
  display-type: 3

  text-display:
    enabled: true
    range-blocks: 3
    y-offset: 0.8
    background-color: 1073741824
    line-width: 200
    text-opacity: -1
    see-through: false

    shadow:
      enabled: true

    scale:
      x: 0.5
      y: 0.5
      z: 0.5

    lines:
      - "<green><item_name></green>"
      - "<gray><owner></gray>"
      - "<gray><type></gray>"
      - "<gold><price_amount></gold>"
```

The `lines` section controls the information shown to players, while the other settings control the appearance and visibility of the display.

## Display Lines

The contents of a Text Display are configured through:

```yaml
shop:
  text-display:
    lines:
      - "<green><item_name></green>"
      - "<gray><owner></gray>"
      - "<gray><type></gray>"
      - "<gold><price_amount></gold>"
```

Each entry creates a new line in the floating display.

The lines use QuickShop's **RenderComponent** system. This allows shop information to be inserted into the text while still allowing normal text and MiniMessage formatting around it.

For example:

```yaml
lines:
  - "<gold>Item:</gold> <item_name>"
  - "<yellow>Owner:</yellow> <owner>"
  - "<yellow>Price:</yellow> <price_amount>"
```

## MiniMessage Formatting

Text Displays support Adventure/MiniMessage formatting.

For example:

```yaml
lines:
  - "<bold><gold><item_name></gold></bold>"
  - "<gray>Sold by <white><owner></white></gray>"
  - "<green><price_amount></green>"
```

This can be used to customize colors, decorations, and other supported MiniMessage formatting.

:::tip
RenderComponents such as `<item_name>` and `<owner>` can be combined with MiniMessage tags and normal text on the same line.
:::

## RenderComponents

RenderComponents insert information from the shop into a configured line.

### `<item_name>`

Displays the shop item's name.

```yaml
- "<green><item_name></green>"
```

Example output:

```text
Diamond
```

### `<amount>`

Displays the amount of the item being traded.

```yaml
- "<gray>Amount: <amount></gray>"
```

### `<item_level>`

Displays applicable level information for the shop item, such as an enchantment level or potion duration.

```yaml
- "<gray><item_level></gray>"
```

### `<owner>`

Displays the shop owner's name.

```yaml
- "<gray>Owner: <owner></gray>"
```

### `<price_solo>`

Displays the formatted shop price without the additional amount formatting used by `price_amount`.

```yaml
- "<gold><price_solo></gold>"
```

:::note
Earlier 6.3 development versions used `price` for this component. It was renamed to `price_solo`.
:::

### `<price_amount>`

Displays the formatted shop price with the applicable trade amount.

```yaml
- "<gold><price_amount></gold>"
```

This is generally the most useful price component for the default Text Display layout.

### `<stock>`

Displays the shop's current stock information.

```yaml
- "<gray>Stock: <stock></gray>"
```

### `<type>`

Displays the shop type.

```yaml
- "<gray><type></gray>"
```

For example, this can represent whether the shop is buying or selling.

### `<status>`

Displays the shop's current state or status.

```yaml
- "<gray>Status: <status></gray>"
```

### `<amount_auto>`

`amount_auto` is a conditional RenderComponent that changes its output depending on the shop's current state.

```yaml
- "<gray>Stock: <amount_auto></gray>"
```

It can represent:

- the remaining stock amount when stock is available;
- an out-of-stock state when the shop has no remaining stock;
- an unlimited state when the shop has unlimited stock.

This makes it useful when you want one line to automatically represent several possible stock conditions.

## Example Layouts

### Simple

```yaml
lines:
  - "<green><item_name></green>"
  - "<gold><price_amount></gold>"
```

This provides a compact display showing only the item and price.

### Shop Information

```yaml
lines:
  - "<bold><green><item_name></green></bold>"
  - "<gray>Owner: <white><owner></white></gray>"
  - "<gray>Type: <white><type></white></gray>"
  - "<gold><price_amount></gold>"
```

This provides more information without displaying stock.

### Stock Display

```yaml
lines:
  - "<bold><green><item_name></green></bold>"
  - "<gold><price_amount></gold>"
  - "<gray>Stock: <amount_auto></gray>"
```

The final line automatically changes based on the shop's stock state.

## View Range

The maximum configured viewing range is controlled by:

```yaml
shop:
  text-display:
    range-blocks: 3
```

This controls how far away the Text Display can be rendered.

Lower values can help keep floating shop information limited to players who are close to the shop, while larger values make the information visible from farther away.

## Vertical Position

The Text Display is positioned above the shop's item display.

Its vertical offset is controlled by:

```yaml
shop:
  text-display:
    y-offset: 0.8
```

Increasing the value moves the text upward:

```yaml
y-offset: 1.2
```

Decreasing it moves the text closer to the displayed item:

```yaml
y-offset: 0.5
```

Decimal values are supported.

## Scale

The size of the Text Display can be adjusted independently on each axis:

```yaml
shop:
  text-display:
    scale:
      x: 0.5
      y: 0.5
      z: 0.5
```

Using the same value for all three axes keeps the text proportionally scaled.

For example, a larger display could use:

```yaml
scale:
  x: 0.75
  y: 0.75
  z: 0.75
```

Changing the axes independently can distort the text and is generally unnecessary for normal shop layouts.

## Background Color

The Text Display background is controlled by:

```yaml
shop:
  text-display:
    background-color: 1073741824
```

The value is a **32-bit ARGB color value**.

The default value is:

```text
1073741824
```

which uses Minecraft's default Text Display background behavior.

Changing this value allows the background behind the floating text to be customized.

## Text Opacity

Text opacity is controlled with:

```yaml
shop:
  text-display:
    text-opacity: -1
```

`-1` uses full opacity.

The supported opacity values are `0` through `255`, although very low values may be treated as effectively invisible by Minecraft's rendering system.

For normal readable displays, leaving this at the default value is recommended unless a transparent or faded appearance is specifically desired.

## Text Shadow

A shadow can be rendered behind the text:

```yaml
shop:
  text-display:
    shadow:
      enabled: true
```

Disable it with:

```yaml
shadow:
  enabled: false
```

Text shadows can improve readability when the display is viewed against bright or visually complex blocks.

## See Through Blocks

Text Displays can optionally remain visible through blocks:

```yaml
shop:
  text-display:
    see-through: false
```

Enable this behavior with:

```yaml
see-through: true
```

:::warning
Enabling `see-through` can make shop information visible through walls and other solid blocks. Consider the layout of your server's shops before enabling it globally.
:::

## Line Width

The display's line width is configured with:

```yaml
shop:
  text-display:
    line-width: 200
```

This controls the width used when rendering Text Display content.

A smaller value causes long content to wrap sooner, while a larger value allows more text to fit before wrapping.

For example:

```yaml
line-width: 120
```

can create a narrower display, while:

```yaml
line-width: 300
```

provides more horizontal space.

## Complete Example

The following configuration creates a compact Text Display with the item name, shop owner, price, and current stock state:

```yaml
shop:
  display-type: 3

  text-display:
    enabled: true

    range-blocks: 3
    y-offset: 0.8

    background-color: 1073741824
    line-width: 200
    text-opacity: -1
    see-through: false

    shadow:
      enabled: true

    scale:
      x: 0.5
      y: 0.5
      z: 0.5

    lines:
      - "<bold><green><item_name></green></bold>"
      - "<gray>Owner: <white><owner></white></gray>"
      - "<gold><price_amount></gold>"
      - "<gray>Stock: <amount_auto></gray>"
```

This configuration requires:

```yaml
shop:
  display-type: 3
```

because Text Displays currently only work with QuickShop's Display Entity display system.
