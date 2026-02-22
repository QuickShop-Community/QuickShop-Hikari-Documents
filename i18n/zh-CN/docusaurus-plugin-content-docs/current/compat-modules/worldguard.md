# WorldGuard

:::info

Can't find where to download the JAR? [Click here](../faq/where-addons-compacts-at.md).

:::

It registered two of flags into WorldGuard flags registry: `quickshophikari-create` and `quickshophikari-trade`.

You can use them to control the players permission in your worldguard region.

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
