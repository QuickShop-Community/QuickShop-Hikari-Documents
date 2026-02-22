# 交易系统

QuickShop-Hikari 有一个系统来确保交易一致性，避免交易过程中的错误。

TL;DR 如果交易失败，QuickShop 将会回滚双方的钱和物品，将背包和金钱回滚到交易开始之前的状态。

## 它是如何工作的?

目前，QuickShop-Hikari 有两种类型支持交易系统。

## 经济

QuickShop 记录存款或提取的余额金额，并在交易失败时重新提取和重新存回。

## For Inventory

QuickShop 将为商店容器的物品栏和玩家物品栏拍摄快照，并在交易失败时恢复快照。
