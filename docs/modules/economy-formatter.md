# Economy Formatter

QuickShop use Economy Formatter to format balance to human readable text.

## Work with Economy plugins

By default, QuickShop will request your installed economy plugin to format balance, but sometimes it may doesn't work (like eco plugin author returns a null), then QuickShop will fallback to internal economy formatter for make sure balance can be formatted.

## Internal Formatter

Internal formatter only will be used when economy plugin's one doesn't work, but anyway, you can force enable it by tweak settings in config.yml:

```yaml
  #This should fix Vault or an economy plugin incorrectly processing the price and returning a "0" result.
  #If you enable this setting, then QS will force use the "alternate-currency-symbol".
  disable-vault-format: false
```

Then you can use these options to customize it:

```yaml
#Whether to use decimal format to display money.
use-decimal-format: false
#The decimal format to display money in.
#The default is #,###.##
decimal-format: "#,###.##"
shop:
  #If vault doesn't return a currency symbol, QuickShop will use this symbol.
  alternate-currency-symbol: '$'
  #If the currency symbol should be displayed on the right side (eg 1234$).
  #By default, it is on the left side (eg $1234).
  #Only works when disable-vault-format is true.
  currency-symbol-on-right: false
  #The maximum number of digits after the decimal.
  #Set this to -1 to disable it. (Unlimited maximum digits)
  maximum-digits-in-price: -1
```