# 变量

QuickShop-Hikari 与 PlaceholderAPI 一同安装时，会提供一些可在其他地方使用的变量。

## 在本插件中使用第三方变量

本插件中的大部分消息均支持嵌入 PlaceholderAPI 的变量。

## QuickShop 变量

QuickShop-Hikari 会向 PlaceholderAPI 注册一些变量，你可以在其他支持的地方使用它们。

所有变量的数据缓存至多 15 分钟，避免影响服务器性能。

- `%qs_metrics_recent_purchases_global_all_x%` - 最近 x 日任意类型交易次数总计
- `%qs_metrics_recent_purchases_global_selling_x%` - 最近 x 日出售类型交易次数总计
- `%qs_metrics_recent_purchases_global_buying_x%` - 最近 x 日收购类型交易次数总计
- `%qs_metrics_recent_purchases_global_buying_x%` - 最近 x 日仅收购类型交易次数总计
- `%qs_metrics_recent_purchases_player_all_x%` - 最近 x 日任意类型交易次数总计
- `%qs_metrics_recent_purchases_player_selling_x%` - 最近 x 日单玩家出售类型交易次数总计
- `%qs_metrics_recent_purchases_player_buying_x%` - 最近 x 日单玩家仅收购类型交易次数总计
- `%qs_metrics_recent_purchases_player_buying_x%` - 最近 x 日单玩家收购类型交易次数总计
- `%qs_metrics_recent_transactionamount_global_all_x%` - 最近 x 日任意类型交易次数总计
- `%qs_metrics_recent_transactionamount_global_selling_x%` - 最近 x 日仅出售类型交易额度总计
- `%qs_metrics_recent_transactionamount_global_buying_x%` - 最近 x 日仅收购类型交易额度总计
- `%qs_metrics_recent_transactionamount_global_buying_x%` - 最近 x 日仅收购类型交易额度总计
- `%qs_metrics_recent_transactionamount_player_all_x%` - Count all purchases transaction amount in recent x days with all types
- `%qs_metrics_recent_transactionamount_player_selling_x%` - Count all purchases transaction amount in recent x days which only selling shops for single player
- `%qs_metrics_recent_transactionamount_player_buying_x%` - Count all purchases transaction amount in recent x days which only buying shops for single player
- `%qs_metrics_recent_transactionamount_player_buying_x%` - Count all purchases transaction amount in recent x days which only buying shops for single player
- `%qs_shopmanager_global_total_all%` - Count all shops in this server
- `%qs_shopmanager_global_total_selling%` - Count all selling shops in this server
- `%qs_shopmanager_global_total_buying%` - Count all buying in this server
- `%qs_shopmanager_global_total_loaded%` - Count loaded shops in this server
- `%qs_shopmanager_global_total_unloaded%` - Count unloaded shops in this server
- `%qs_shopmanager_player_total_all%` - Count all shops in this server for single player
- `%qs_shopmanager_player_total_selling%` - Count all selling shops in this server for single player
- `%qs_shopmanager_player_total_buying%` - Count all buying in this server for single player
- `%qs_shopmanager_player_total_loaded%` - Count loaded shops in this server for single player
- `%qs_shopmanager_player_total_unloaded%` - Count unloaded shops in this server for single player
- `%qs_metadata_fork%` - Gets the QuickShop fork name
- `%qs_metadata_version%` - Gets the QuickShop version