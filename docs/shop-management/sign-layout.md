---
slug: /modules/shops/sign-layout
---
# Sign Layout

QuickShop-Hikari allows you to customize the contents of shop signs through the **RenderComponent** system.

QuickShop-Hikari 6.3 expands the sign layout system so that sign lines can use built-in full-line components or inline components that can be combined with your own text.

This makes it possible to keep the traditional QuickShop sign layout or create more customized sign formats.

## Configuration Location

Shop sign layouts are configured in `config.yml` under:

```yaml
shop:
  layout:
```

The default layout is:

```yaml
shop:
  layout:

    BUYING:
      line1: "header"
      line2: "trading"
      line3: "item"
      line4: "price"

    FROZEN:
      line1: "header"
      line2: "trading"
      line3: "item"
      line4: "price"

    SELLING:
      line1: "header"
      line2: "trading"
      line3: "item"
      line4: "price"
```

Each shop state can use its own four-line layout.

## RenderComponents

QuickShop-Hikari 6.3 introduces a unified RenderComponent system for rendering shop information.

RenderComponents are divided into three types:

- **Full-line components** — generate an entire formatted sign line.
- **Inline components** — replace only themselves and can be combined with surrounding text.
- **Conditional components** — inline components whose output changes depending on the shop's current state.

## Full-Line Components

Full-line components retain the traditional QuickShop sign layout behavior.

### `header`

Displays the shop header.

```yaml
line1: "header"
```

The exact text and formatting are determined by QuickShop's localization and shop state.

### `trading`

Displays the shop's trading or stock information.

```yaml
line2: "trading"
```

### `item`

Displays the formatted shop item.

```yaml
line3: "item"
```

### `level`

Displays applicable item level information.

```yaml
line3: "level"
```

This can include information such as:

- enchantment levels;
- potion duration;
- other supported item-level information.

### `price`

Displays the complete formatted price line.

```yaml
line4: "price"
```

The `price` full-line component automatically uses QuickShop's normal price formatting, including support for applicable stacking-shop formatting.

## Inline Components

Inline components can be placed inside a sign line and combined with normal text.

For example:

```yaml
line1: "<owner>"
line2: "<item_name>"
line3: "<type> <amount>"
line4: "<price_amount>"
```

Unlike full-line components, inline components only replace their placeholder.

### `<amount>`

Displays the amount of the item being traded.

```yaml
line2: "Amount: <amount>"
```

### `<item_name>`

Displays the shop item's name.

```yaml
line2: "<item_name>"
```

### `<item_level>`

Displays applicable item-level information.

```yaml
line3: "<item_level>"
```

Depending on the item, this may represent information such as an enchantment level or potion duration.

### `<owner>`

Displays the shop owner's name.

```yaml
line1: "<owner>"
```

### `<price_alone>`

Displays only the formatted shop price.

```yaml
line4: "<price_alone>"
```

The full-line `price` component remains separate and uses QuickShop's complete sign price formatting.

### `<price_amount>`

Displays the formatted shop price together with the applicable trade amount formatting.

```yaml
line4: "<price_amount>"
```

This is useful when creating a custom version of QuickShop's normal price line.

### `<status>`

Displays the shop's current state or status.

```yaml
line2: "<status>"
```

### `<stock>`

Displays the shop's current stock information.

```yaml
line3: "Stock: <stock>"
```

### `<type>`

Displays the shop type.

```yaml
line2: "<type>"
```

This can be used to identify whether the shop is buying, selling, or another supported shop type.

## Conditional Components

Conditional components determine their output based on the current shop state.

### `<amount_auto>`

`amount_auto` automatically represents the shop's available stock state.

```yaml
line3: "<amount_auto>"
```

Depending on the shop, it can display:

- the remaining stock amount;
- an out-of-stock state;
- an unlimited-stock state.

This allows one layout to handle multiple stock conditions without requiring separate configuration.

## Traditional Layout

The default layout uses only full-line components:

```yaml
shop:
  layout:

    SELLING:
      line1: "header"
      line2: "trading"
      line3: "item"
      line4: "price"
```

This preserves QuickShop's traditional sign appearance while using the new rendering system internally.

## Custom Inline Layout

You can instead construct your own sign lines using inline components:

```yaml
shop:
  layout:

    SELLING:
      line1: "<owner>"
      line2: "<item_name>"
      line3: "Stock: <amount_auto>"
      line4: "<price_amount>"
```

This provides direct control over which pieces of shop information appear on each line.

## Different Layouts Per Shop State

BUYING, SELLING, and FROZEN shops can each use different layouts.

For example:

```yaml
shop:
  layout:

    SELLING:
      line1: "<owner>"
      line2: "<item_name>"
      line3: "Sell <amount>"
      line4: "<price_amount>"

    BUYING:
      line1: "<owner>"
      line2: "<item_name>"
      line3: "Buy <amount>"
      line4: "<price_amount>"

    FROZEN:
      line1: "header"
      line2: "<status>"
      line3: "<item_name>"
      line4: "<price_alone>"
```

This makes it easier for players to visually distinguish different shop states.

## Leaving a Line Blank

A sign line can be left empty:

```yaml
line4: ""
```

For example:

```yaml
shop:
  layout:

    SELLING:
      line1: "<item_name>"
      line2: "<price_amount>"
      line3: ""
      line4: ""
```

This can be useful for minimalist layouts.

## Combining Text and Components

Inline components can be combined with normal text:

```yaml
line1: "Owner: <owner>"
line2: "<item_name>"
line3: "Stock: <amount_auto>"
line4: "Price: <price_alone>"
```

Keep in mind that Minecraft signs have limited horizontal space. Long owner names, item names, or currency formats may make heavily customized lines difficult to read.

## Full-Line vs Inline Components

Full-line components and inline components serve different purposes.

Use a full-line component when you want QuickShop to generate and format the complete line:

```yaml
line4: "price"
```

Use an inline component when you want to control the rest of the line yourself:

```yaml
line4: "Price: <price_alone>"
```

For most servers, the default full-line components provide the simplest and most compatible layout.

Inline components are useful when you want a more customized sign appearance.

## The `level` Component

QuickShop-Hikari 6.3 adds `level` as a full-line sign layout option.

For example:

```yaml
shop:
  layout:

    SELLING:
      line1: "header"
      line2: "item"
      line3: "level"
      line4: "price"
```

This can provide additional information for items where a level or duration is important, such as enchanted items or potions.

If you need the same value as part of a custom line, use:

```yaml
<item_level>
```

## Applying Layout Changes

New shops use the configured layout when their signs are rendered.

Existing shops must have their signs refreshed before changes become visible.

Depending on your server setup, this may occur when the shop is updated, reloaded, or otherwise causes QuickShop to refresh its sign.

If you are making significant layout changes, test the layout on a small number of shops before deploying it across a large server.

## Sign Limitations

Minecraft shop signs are still limited to four lines.

RenderComponents allow more control over the contents of those lines, but they do not increase the number of available sign lines.

Also keep the physical width of Minecraft signs in mind. A technically valid layout may still become difficult to read if too much information is placed on one line.

## Text Displays

The same RenderComponent system is also used by QuickShop's Text Display feature.

Text Displays provide substantially more room and visual customization than Minecraft signs.

:::note
Text Displays currently only work when using:

```yaml
shop:
  display-type: 3
```

See [Text Displays](text-display.md) for Text Display configuration and examples.
:::

## Example: Detailed Four-Line Sign

```yaml
shop:
  layout:

    SELLING:
      line1: "<owner>"
      line2: "<item_name>"
      line3: "<amount_auto>"
      line4: "<price_amount>"

    BUYING:
      line1: "<owner>"
      line2: "<item_name>"
      line3: "<amount_auto>"
      line4: "<price_amount>"

    FROZEN:
      line1: "header"
      line2: "<status>"
      line3: "<item_name>"
      line4: "<price_alone>"
```

## Example: Default-Style Sign With Item Level

```yaml
shop:
  layout:

    SELLING:
      line1: "header"
      line2: "item"
      line3: "level"
      line4: "price"

    BUYING:
      line1: "header"
      line2: "item"
      line3: "level"
      line4: "price"

    FROZEN:
      line1: "header"
      line2: "trading"
      line3: "item"
      line4: "price"
```

## Summary

QuickShop-Hikari 6.3's sign rendering system supports both the traditional layout components and more flexible inline RenderComponents.

The main full-line components are:

```text
header
trading
item
level
price
```

The available inline and conditional components include:

```text
<amount>
<amount_auto>
<item_name>
<item_level>
<owner>
<price_alone>
<price_amount>
<status>
<stock>
<type>
```

Use full-line components for QuickShop's standard formatting and inline components when you want to construct custom sign lines yourself.
