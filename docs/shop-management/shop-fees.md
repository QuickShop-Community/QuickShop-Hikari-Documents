---
slug: /modules/shops/shop-fees
---
# Shop Fees

QuickShop allows server administrators to configure fees for creating shops and changing prices.

## Configuration

```yaml
shop:
  #The cost to make a shop. Set to 0 for free.
  cost: 10
  #Should QS refund the player when their shops are deleted/removed/broken?
  refund: false
  # Should QS refund from the tax-account?
  # Refund as much as possible; players may not receive a full refund if the tax account has insufficient funds.
  refund-from-tax-account: false
  #Should there be a fee for changing shop prices?
  #This can help with endless price undercutting.
  price-change-requires-fee: true
  #The amount of this fee.
  fee-for-price-change: 50
  #Sets the name cost
  name-fee: 0
  #Sets the max length for shop naming
  name-max-length: 32
  #The shop ongoing fee.
  #If the shop owner doesn't have enough money, the shop will automatically be removed.
  ongoing-fee:
    enable: false
    #How often should the ongoing fee be due for payment?
    ticks: 42000
    #How much should the ongoing fee be?
    cost-per-shop: 2
    #Should we ignore unlimited shops?
    ignore-unlimited: true
```

## Creation fee

It is controlled by `shop.cost`, set it to `0` for free.  
Enable `shop.refund` to refund the creation fee. To pay refunds from the QuickShop tax account, also enable `shop.refund-from-tax-account`. A player may not receive a refund if the tax account does not have enough money.

## Price changing fee

To prevent players from changing shop prices too frequently, enable `shop.price-change-requires-fee`.  
After this option is enabled, players must pay the amount specified by `shop.fee-for-price-change` each time they change a price.

## Naming fee

To charge players for naming their shops, set `shop.name-fee` to a nonzero value.  
Players must pay this fee each time they change a shop's name.

## Ongoing Fee

To discourage players from keeping large numbers of idle shops and to maintain market balance, you can enable an ongoing fee.  

When this feature is enabled, players pay the amount set by `shop.ongoing-fee.cost-per-shop` every `shop.ongoing-fee.ticks` game ticks for each shop they own.  

If player cannot afford the ongoing-fee, the shops will be deleted.

## Tax

QuickShop provides a configurable taxation system.

### Configuration

```yaml
#Tax amount (decimal)
#Example: P1 buys $50 worth of stuff from P2.  Therefore, P1 loses $50, P2 gains $(1-0.05)*50, and the tax-account gains $(0.05)*50.
tax: 0.05

#The fake player where the tax money goes to.
#Set this to "" to disable it (Taxing will still work but not deposit to any account)
tax-account: tax

# Disable taxes for unlimited shop
tax-free-for-unlimited-shop: false

#Whether to show taxes paid when selling to a shop
show-tax: false
```

### Transaction Tax

For every transaction, we will took some amount from transaction for tax, it controlled by option `tax`.  

`1` means `100%`, `0.05` means `5%`, you need convert the percentage to decimal format.  

You can also turn on `show-tax` to allow player see the taxes included in transaction.

### Tax Account

By default, all tax were going to a account named `tax`.  
Depends on the difference in economy plugins and the design of your server, default value may won't work well, and you might want change it.

`tax-account` accepts both player username and player's uuid.
