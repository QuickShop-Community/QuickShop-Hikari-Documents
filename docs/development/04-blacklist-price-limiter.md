# 0x04 Blacklist and PriceLimiter

Often during the coding process you may try to respect QuickShop-Hikari's blacklist and price limiter.
Thanks to ItemExpression, you definitely do not want to parse expressions yourself.

## Check if a material can be a shop

```java
  boolean shoppable = Util.isShoppables(material);
```

## Check if a item has been blacklisted

```java
ItemStack stack = ...;
QuickShopAPI api = ...;

ShopItemBlackList blacklist = api.getShopItemBlackList();
boolean blacklisted = blacklist.isBlacklisted(stack);
```

## Check if a price is allow with given price

```java
ItemStack stack = ...;
ShopManager manager = ...;
PriceLimiter limiter = manager.getPriceLimiter();
PriceLimiterCheckResult result = limiter.check(player/sender, stack, currency, price);

double min = result.getMin();
double max = result.getMax();
PriceLimiterStatus status = result.getStatus();

//status can be:
//PASS
//REACHED_PRICE_MAX_LIMIT (unused yet)
//REACHED_PRICE_MIN_LIMIT (unused yet)
//PRICE_RESTRICTED (usually use this one)
//NOT_A_WHOLE_NUMBER
//NOT_VALID
```

