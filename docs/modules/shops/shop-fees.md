# Shop Fees

QuickShop allow server administrator setup the shops fees for creating, changing prices.

## Configuration

```yaml
shop:
  #The cost to make a shop. Set to 0 for free.
  cost: 10
  #Should QS refund the player when their shops are deleted/removed/broken?
  refund: false
  # Should QS refund from the tax-account?
  # refund is as much as possible, player may won't get all refund if the tax-account had no enough money.
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

It controlled by `shop.cost`, set it to `0` for free.  
You can refund the creation cost by turn on `shop.refund` option, and if you want refund player from quickshop tax account, you can also turn on option `shop.refund-from-tax-account`, but player may won't receive the refund if tax account run out of money.

## Price changing fee

To prevent player change their shops price too frequently, you can turn on price changing fee by turn on option `shop.price-change-requires-fee`.  
After option enabled, player need pay the tax account money that specficed by `shop.fee-for-price-change` option everytime their changes.

## Naming fee

You can set that require player pay for naming their shop by set option `shop.name-fee` to an non-zero number.  
Everytime player want change their shop's name, player must pay for it.

## Ongoing Fee

To prevent players hold massive idle shops on your server, or keep the market balance, you can enable on-going fee.  

When this feature enabled, player need pay `shop.ongoing-fee.cost-per-shop`$ every `shop.ongoing-fee.ticks` game ticks, for every single shop they're owned.  

If player cannot afford the ongoing-fee, the shops will be deleted.

## Tax

QuickShop provide a system that allow you to tax.

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

## Transaction Tax

For every transaction, we will took some amount from transaction for tax, it controlled by option `tax`.  

`1` means `100%`, `0.05` means `5%`, you need convert the percentage to decimal format.  

You can also turn on `show-tax` to allow player see the taxes included in transaction.

## Tax Account

By default, all tax were going to a account named `tax`.  
Depends on the difference in economy plugins and the design of your server, default value may won't work well, and you might want change it.

`tax-account` accepts both player username and player's uuid.