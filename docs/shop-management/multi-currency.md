---
slug: /modules/multi-currency
---
# Multi Currency

QuickShop-Hikari supports some Multi-Currency economy plugin or bridge plugin, but they're not out of the box, you must configure them to take effect.

## Supported Economy Plugin

QuickShop-Hikari currently supports multi-currency economy plugins that support [VaultUnlocked](https://modrinth.com/plugin/vaultunlocked)

## Enable Multi-Currency support

To enable multi-currency feature, you need to use VaultUnlocked instead of the Vault plugin

```yaml
# Economy provider selection.
# 0 = Vault/VaultUnlocked
# VaultUnlocked supports multi-currency if your economy plugin supports it.
#
# Advanced option—ask for support before changing if unsure.
economy-type: 0
```

## Set default currency

You need to set a currency for default usage (like new shop default currency),and configure it in config.yml:

```yaml
# Currency used when creating shops.
# Set to "" to use the default currency.
# Only required for multi-currency setups.
currency: ''
```

## Set multi-currency alternate symbol

You can set a alternate for symbols, QuickShop-Hikari will use alternate for specific currencies in text.

```yaml
# Multi-currency symbol mapping:
# Format: <currencyName>;<symbol>
# If no match, the currency name itself is used.
alternate-currency-symbol-list:
- USD;$
- CNY;￥
```

## Change the currency for shops

Looking at a shop, execute `/quickshop currency <new-currency>` to change shop currency.

## Ongoing Fee Currency

OngoingFee will always use server scope default currency (`currency`).

## Shop Tax Currency

Shop tax will use per-shop currency with global tax rate (cannot change yet).  
If you really want this feature, open a Feature Request on our Issue Tracker!
