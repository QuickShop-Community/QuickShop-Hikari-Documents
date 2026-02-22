# Limited Addon

:::info

找不到在哪里下载JAR？ [点击这里](../faq/where-addons-compacts-at.md). [Click here](../faq/where-addons-compacts-at).

:::

此插件允许商店所有者对其商店在一段时间内的销售数量设置限制。

## 权限设置

- `quickshopaddon.limit.use` - 允许使用命令 `/quickshop limit`

## 使用说明

### 永久销售数量限制

此限制不会定期重置。

限制玩家在此商店中最多购买 32 件物品：

```
/quickshop limit set 32
```

### 定期重复限制

此限制类型允许按特定时间间隔重置每个人的配额。

限制玩家每月最多购买 16 件物品。

```
/quickshop limit set 32
/quickshop limit period MONTH
```

该系统基于QuickShop-Hikari日历系统。  
时间使用 “值变化” 更新系统进行更新，这意味着 2022-12-31 到 2023-01-01 也被视为一年，且同时会更新月、周、日、小时、分钟、秒的限制。  
其余的也都一样。  
The timing is updated using the "value change" update system, which means that 2022-12-31 to 2023-01-01 is also considered a year.  
Same for days, months and hours.

可用时间单位：

- ~~SECOND - 1 秒~~ 由于性能影响而删除，现存的秒计时规则将强制和分钟同步
- MINUTE - 1分钟
- HOUR - 1 小时
- DAY -1 天
- WEEK - 1 周
- MONTH - 1 个月
- YEAR - 1年

由于QuickShop-Hikari的日历计时系统的限制，无法设置其他值（例如，3天）

## 购买通知

当玩家从设置了限制的商店购买时，插件会在购买后提示玩家剩余的购买配额。

![purchase](img/limited_purchase.png)

## 阻止购买

当玩家超过或用尽购买配额时，购买将被阻止。

![run-out-of-quota](img/limited_run-out-of-quota.png)

