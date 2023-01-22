# Limited Addon

:::info

This addon was added into QuickShop-Hikari at 4.1.0.0-SNAPSHOT

:::

This addon allows store owners to set a limit on the number of sales for their store over a period of time.

## Permissions

* `quickshopaddon.limit.use` - Permission to use `/qs limit`

## Usage

### Permanent sales quantity limit

This restriction does not reset periodically.

Limit player purchases to a maximum of 32 items in this store:

```
/qs limit set 32
```

### Periodic repetition limit

This restriction type allows resetting everyone's quota at certain intervals.

Limit players to purchase up to 16 items per month.

```
/qs limit set 32
/qs limit period MONTH
```

The system is based on the QuickShop-Hikari calendar system.  
The timing is updated using the "value change" update system, which means that 2022-12-31 to 2023-01-01 is also considered a year.  
Same for days, months and hours.

Available time units:

* ~~SECOND - 1 second~~ DELETED DUE PERFORMANCE IMPACT
* MINUTE - 1 mintue
* HOUR - 1 hour
* DAY - 1 day
* WEEK - 1 week
* MONTH - 1 month
* YEAR - 1 year

Due to the limitation of QuickShop-Hikari's calendar timing system, it is impossible to set other values (for example, 3 days)

## Purchase Notice

When a player purchases from a store that has set a limit, the plugin will prompt the player with the remaining purchase quota after the purchase.

![purchase](img/limited_purchase.png)

## Block the purchase

When the player exceeds or exhausts the purchase quota, the purchase will be blocked.

![run-out-of-quota](img/limited_run-out-of-quota.png)

