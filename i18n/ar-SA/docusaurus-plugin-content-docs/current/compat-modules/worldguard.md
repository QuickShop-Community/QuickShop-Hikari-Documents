# WorldGuard

:::info

Can't find where to download the JAR? [Click here](../faq/where-addons-compacts-at).

:::

It registered two of flags into WorldGuard flags registry: `quickshophikari-create` and `quickshophikari-trade`.

You can use them to control the players permission in your worldguard region.

## 🆕 Global Support (6.2.0.11+)

As of 6.2.0.11 QuickShop now supports using the flags in the global context.

## Configuration

```yaml
create:
  default-allow: false
trade:
  default-allow: true
# amount limit for per region, -1 for no limit
# this is a simple limit, There are no plans to expand it
max-shops-in-region: -1
```
