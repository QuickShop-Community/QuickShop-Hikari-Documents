---
slug: /addon-3rdparty/quickshop-hikari-dialog
---
# QuickShop-Hikari Dialog

[QuickShop-Hikari Dialog](https://modrinth.com/plugin/quickshop-hikari-dialog) is a third-party addon that replaces QuickShop-Hikari's default shop interactions with Paper dialog UIs.

:::info Third-party addon

This addon is not bundled with QuickShop-Hikari. Support, releases, and issue tracking are handled by the addon's developer.

:::

## Features

QuickShop-Hikari Dialog provides dialog-based interfaces for:

- creating shops;
- editing existing shops;
- buying from and selling to shops.

It integrates with QuickShop-Hikari's interaction system instead of replacing QuickShop's shop logic or permissions.

## Requirements

The current published version requires:

| Dependency | Version |
| --- | --- |
| Java | 25 or later |
| Paper | 1.21.11 or later |
| QuickShop-Hikari | 6.2.0.11 or later |

### Optional dependency

[MiniPlaceholders](https://modrinth.com/plugin/miniplaceholders) can be installed to provide audience and global placeholder tags inside the addon's translation messages.

## Installation

1. Download QuickShop-Hikari Dialog from [Modrinth](https://modrinth.com/plugin/quickshop-hikari-dialog).
2. Place the addon jar in your server's `plugins/` directory.
3. Make sure QuickShop-Hikari is installed.
4. Start the server once so the addon can generate:

```text
plugins/QuickShop-Hikari-Dialog/config.conf
```

and its default translation files.

5. Configure QuickShop-Hikari's `interaction.yml` to use the dialog behaviors.

## Interaction Behaviors

The addon registers three QuickShop interaction behaviors:

| Behavior | Description |
| --- | --- |
| `SHOP_CREATE_DIALOG` | Opens the shop creation dialog when assigned to a supported interaction |
| `SHOP_EDIT_DIALOG` | Opens the dialog for modifying an existing shop |
| `TRADE_DIALOG` | Opens the dialog for buying from or selling to an existing shop |

These behaviors can be assigned to QuickShop-Hikari interaction actions just like built-in interaction behaviors.

## Recommended `interaction.yml`

A recommended configuration is:

```yaml
STANDING_LEFT_CLICK_SIGN: TRADE_DIALOG
STANDING_RIGHT_CLICK_SIGN: SHOP_EDIT_DIALOG

STANDING_LEFT_CLICK_SHOPBLOCK: TRADE_DIALOG
STANDING_RIGHT_CLICK_SHOPBLOCK: NONE # Reserved for opening the chest

STANDING_LEFT_CLICK_CONTAINER: SHOP_CREATE_DIALOG
STANDING_RIGHT_CLICK_CONTAINER: NONE
```

The behavior identifiers can be reassigned to other interaction actions depending on your server's preferred workflow.

See the QuickShop-Hikari interaction documentation for the full list of configurable interaction targets.

## Permissions

The addon provides the following permissions:

| Permission | Description | Default |
| --- | --- | --- |
| `qshdialog.command.qshdialog.reload` | Reloads the addon's configuration and translations | OP |
| `qshdialog.command.shopdialog.create` | Allows use of `/shopdialog create` | `true` |
| `qshdialog.command.shopdialog.edit` | Allows use of `/shopdialog edit` | `true` |
| `qshdialog.command.tradedialog` | Allows use of `/tradedialog` | `true` |

QuickShop-Hikari's own shop permissions continue to determine which actions and dialog inputs are available to each player.

## Placeholder Tags

QuickShop-Hikari Dialog provides custom MiniMessage-style tags for use in its translation messages.

### Shop placeholders

When a message has a shop context, the addon provides tags including:

```text
<shop:name>
<shop:name_or:[fallback]>
<shop:owner_name>
<shop:owner_balance>
<shop:owner_balance_formatted>
<shop:price>
<shop:price_formatted>
<shop:trade_type>
<shop:currency>
<shop:stock>
<shop:space>
<shop:display>
<shop:unlimited_stock>
<shop:product_id>
<shop:product_name>
<shop:product_display_name>
```

### Player placeholders

Messages with an audience can use:

```text
<player_name>
<player_display_name>
<player_balance>
<player_balance_formatted>
```

### Shop count placeholders

```text
<shop_count:[player]>
<shop_count_max:[player]>
```

### Shop fee placeholders

The addon can expose QuickShop shop fees in translations:

```text
<shop_fee:create:(player)>
<shop_fee:create_formatted:(player)>

<shop_fee:change_name:(player)>
<shop_fee:change_name_formatted:(player)>

<shop_fee:change_price:(player)>
<shop_fee:change_price_formatted:(player)>
```

### Price limit placeholders

Price limits can be queried using a namespaced item key:

```text
<price:[item_id]:min>
<price:[item_id]:max>
```

For example:

```text
<price:minecraft:diamond:min>
```

## QuickShop Translation Messages

The addon can also render QuickShop-Hikari translation messages from within its own translation files using:

```text
<quickshop:key>
```

or:

```text
<quickshop:key:arg0:arg1>
```

Arguments are parsed as MiniMessage, allowing other addon tags to be nested inside them.

## Download and Source

- [Download on Modrinth](https://modrinth.com/plugin/quickshop-hikari-dialog)
- Source code and issue tracker links are available from the addon's Modrinth page.

