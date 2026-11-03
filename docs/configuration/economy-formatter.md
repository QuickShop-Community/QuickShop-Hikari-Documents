---
slug: /modules/economy-formatter
---
# Economy Formatter

QuickShop uses the Economy Formatter to display balances in a human-readable format.

## Work with Economy plugins

By default, QuickShop will request your installed economy plugin to format balance, but sometimes it may doesn't work (like eco plugin author returns a null), then QuickShop will fallback to internal economy formatter for make sure balance can be formatted.

## Internal Formatter

The internal formatter is only used when the economy plugin's formatter does not work. You can force QuickShop to use it by tweaking the relevant settings in config.yml:

```yaml
# Format money values using a decimal pattern.
use-decimal-format: false

# Decimal format pattern.
# Default: #,###.##
decimal-format: '#,###.##'

shop:
  # Fallback currency symbol if Vault/economy does not provide one.
  alternate-currency-symbol: $

  # Force QuickShop to use the alternate currency symbol if Vault formatting is incorrect.
  disable-vault-format: false

  # Display currency symbol on the right side (example: 1234$).
  # Only works when disable-vault-format is true.
  currency-symbol-on-right: false

  # Maximum number of digits allowed after the decimal point in prices.
  # Set to -1 to disable this limit.
  maximum-digits-in-price: -1
```
