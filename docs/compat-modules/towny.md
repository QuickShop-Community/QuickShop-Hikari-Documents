# Towny

:::caution

Warning! This is a SUPER COMPLEX module, read the guidelines carefully!

:::

## Commands

### /qs nation

Nation sub-command allow you switch a quickshop between regular shop and nation shop.

### /qs town

Town sub-command allow you switch a quickshop between regular shop and town shop.

## Nation shop

For a nation shop, the shop owner will changed to nation fake player created by Towny, and use Nation's Tax account for receiving the shop taxes.

All purchases will deposit or withdraw money from nation Towny account.  
At the same time, if the bank mode is enabled, the price will be forced to adjust automatically according to the price of the item in the profile.

If Plot type restriction is enabled, only a specific Plot type can create a Nation Shop.

## Town shop

For a town shop, the shop owner will changed to town fake player created by Towny, and use Town's Tax account for receiving the shop taxes.

All purchases will deposit or withdraw money from town Towny account.  
At the same time, if the bank mode is enabled, the price will be forced to adjust automatically according to the price of the item in the profile.

If Plot type restriction is enabled, only a specific Plot type can create a Town Shop.

## Bank System

The Bank System allows you to complete your Town/Nation economic flow through QuickShop-Hikari.

You can set an additional percentage to `make money` during the transaction.

```yaml
#The shops under bank mode will only accept items from player but money goes to the town bank account.
#And all
bank-mode:
  #Only allow shop transform to bank mode when shop at bank plot
  bank-plot-only: true
  #Enforce the bank mode shops to use price that specified in the config.
  #The items not included will deny to be turned a bank mode shop
  enable: true
  #Extra percent of money they can make from the bank mode shop to bank account so bank can make money.
  extra-percent: 0.10 # 0.10 = 10%
  #Item list
  #Only allow the bank mode shops created if they trade those items.
  #To add a price for an item to lock the item price (if force-prices enabled)
  #Set -1 for price will disable price lock for this type of item even force-prices turned on.
  # MATERIAL: PRICE
  item-list:
    COPPER_ORE: 0.01
    IRON_ORE: 0.05
    COAL_ORE: 0.10
    LAPIS_ORE: 0.25
    REDSTONE_ORE: 1.00
    GOLD_ORE: 5.00
    DIAMOND_ORE: 20.00
    EMERALD_ORE: 500.00
    DEEPSLATE_COPPER_ORE: 0.01
    DEEPSLATE_IRON_ORE: 0.05
    DEEPSLATE_COAL_ORE: 0.10
    DEEPSLATE_LAPIS_ORE: 0.25
    DEEPSLATE_REDSTONE_ORE: 1.00
    DEEPSLATE_GOLD_ORE: 5.00
    DEEPSLATE_DIAMOND_ORE: 20.00
    DEEPSLATE_EMERALD_ORE: 500.00
    # NETHER_QUARTZ_ORE: 0.50
    # NETHER_GOLD_ORE: 1.25
    ANCIENT_DEBRIS: 250.00
    # HEART_OF_THE_SEA: 2500.00
    # ENCHANTED_GOLDEN_APPLE: 25000.00
```

## Permission Override

By adjust configuration, you're allow mayor or king automaticlly grant administrator permission on all shops in their management range.

```yaml
#Should allow Mayor grant the shop administrator permission on they town.
allow-mayor-permission-override: true

#Should allow King grant the shop administrator permission on they nation.
allow-king-permission-override: true
```

## Name Override

We provide a way to use Nation Name or Town Name instead of the owner's name on the information sign of Nation Shop or Town Shop.

```yaml
#Should allow override the owner name from town/nation vault name to town/nation display name.
allow-owner-name-override: true
```

## Taxes to town

This mechanism allows you to set the QuickShop Hikari tax system to give priority to paying taxes to the Towny system account of Town or Nation, rather than the server tax account.

```yaml
#Should we send the taxes to the town/nation vault account if shop inside a town or nation.
#NOTE: If shop belongs to a Town or Nation, taxes will still send to Server taxes account.
taxes-to-town: true
```

## Delete shops bridge

Same as other compatibility modules, Towny module will also allow you delete shops when resident leave your town, plot cleared and plot unclaimed.

```yaml
#Should we delete player's shops in town when they leaved the that town
delete-shop-on-resident-leave: false

#Should we remove the shops in plot when plot cleared
delete-shop-on-plot-clear: true

#Should we remove the shops in plot when plot unclaimed
delete-shop-on-plot-unclaimed: true
```

## Create/Purchase control

```yaml
#Which checks does a player need to pass to create a shop?
#You can use multiple checks at the same time.
#Priority: UP > DOWN
#
#Available fields:
#OWN = The player must own the plot to create a shop.
#MODIFY = The player must have the ability to build on the target plot to create a shop.
#SHOPTYPE = The player must create the shop on a SHOP type plot.
create:
  - SHOPTYPE
  - MODIFY

#Which checks does a player need to pass to trade with a shop?
#You can use multiple checks at the same time.
#Priority: UP > DOWN
#
#Available fields:
#OWN = The player must own the plot to trade with a shop.
#MODIFY = The player must have the ability to build on the target plot to trade with a shop.
#SHOPTYPE = The player must trade with the shop on a SHOP type plot.
trade: [ ]
```

## Essentials Workaround

Because Essentials use username to lookup user account if API calls is username based.

But it lead to a problem that QuickShop-Hikari always use UUID, and generate offline UUID by use Bukkit API with Standard Offline UUID Generate algorithm.

This causes Towny and QuickShop Hikari to use accounts with the same name but different UUIDs, and leads to a series of problems.

You can adjust the option in configuration to enable workaround.

NOTE: It will force turned on if detected EssentialsX installed on your server.  
At present, we do not provide a method for disable it.

```yaml
#Workaround for username issue
workaround-for-account-name: false
```
