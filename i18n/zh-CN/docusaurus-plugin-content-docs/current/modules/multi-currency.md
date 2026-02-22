# Multi Currency

QuickShop-Hikari supports some Multi-Currency economy plugin or bridge plugin, but they're not out of the box, you must configure them to take effect.

## Supported Economy Plugin

QuickShop-Hikari currently supports multi-currency economy plugins that support [VaultUnlocked](https://modrinth.com/plugin/vaultunlocked)

<!--* Any other economy plugin that support [Reserve](https://www.spigotmc.org/resources/50739/)-->

## Enable Multi-Currency support

To enable multi-currency feature, you need to use VaultUnlocked instead of the Vault plugin

```yaml
#What economy provider should QuickShop use?
#0=Vault/VaultUnlocked - VaultUnlocked supports multi-currency if you economy plugin supports it.
#DO NOT TOUCH THIS IF YOU DON'T KNOW WHAT IT DOES. ASK FOR SUPPORT BEFORE TOUCHING THIS!
economy-type: 0
```

## Set default currency

You need to set a currency for default usage (like new shop default currency),and configure it in config.yml:

```yaml
# The currency used to create shops.
# Set this to "" to use default currency.
# Only required if you use multiple currencies.
currency: ''
```

## Set multi-currency alternate symbol

You can set a alternate for symbols, QuickShop-Hikari will use alternate for specific currencies in text.

```yaml
  # This setting is for multi-currency setups.
  # If nothing matches in this list, it falls back to the name of currency itself.
  alternate-currency-symbol-list:
  - USD;$
  - CNY;￥
```

## Change the currency for shops

Looking at a shop, execute `/quickshop currency <new-currency>` to change shop currency.

## Ongoing Fee Currency

OngoingFee will always use server scope default currency (`currency`).

## Shop Tax Currency

Shop tax will use per-shop currency with global tax rate (cannot change yet).\
If you really want this feature, open a Feature Request on our Issue Tracker!