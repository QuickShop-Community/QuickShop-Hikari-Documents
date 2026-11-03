---
slug: /addon/discount
---
# Discount Addon

:::info

Can't find where to download the JAR? [Click here](../faq/where-addons-compacts-at).

:::

Discount Addon added Discount Code in your QuickShop-Hikari server.

## Permission

* **quickshopaddon.discount.use** *(default: everyone)*  
  Permission to use any `/quickshop discount` commands.
* **quickshopaddon.discount.bypass** *(default: OP)*  
  Permission to bypass the owner checks to force config discount codes, add non-self shops in allow list or remove a discount code.
* **quickshopaddon.discount.create.server_all_shops** *(default: OP)*  
  Permission to create discount code that applied to all shops in your server.
* **quickshopaddon.discount.create.player_all_shops** *(default: everyone)*  
  Permission to create a discount code that applies to the player's own shops.
* **quickshopaddon.discount.create.specific_shops** *(default: everyone)*  
  Permission to create discount code that applied to shops in the code allow list.

## Create a discount code

To create a discount code, use the discount command:

```plain
/quickshop discount create <code> <code-type> <rate> [max-usage] [threshold] [expired-time]
```

Command pretty long, but you have in-game command assistant to help you in your tab complete hint.  

![](https://user-images.githubusercontent.com/30802565/208291577-59fcd76e-2b4a-4e87-bdf5-582ba573795e.png)

### Available Code Type

* SERVER_ALL_SHOPS (Applied to all shops in your server)
* PLAYER_ALL_SHOPS (Applied to all shops belongs to code creator)
* SPECIFIC_SHOPS (Applied to shops in allow list that added by command `/quickshop discount config <code> addshop`)

## Install a code

To use a discount code, install it before purchasing from a shop.

```plain
/quickshop discount install <code>
```

The installed code will remember during this session.

## Uninstall a code

To uninstall a discount code, run:

```plain
/quickshop discount uninstall <code>
```

## Show details for an installed discount code

Use the `info` subcommand to view the code creator, scope, remaining uses, expiration time, threshold, and discount rate.

```plain
/quickshop discount info
```

![](https://user-images.githubusercontent.com/30802565/208291677-85469f8b-2c34-4563-bb57-619cfe70e105.png)

## Remove discount code

To remove a specific discount code, run:

```plain
/quickshop discount remove <code>
```

## Check if discount code can be applied to specific shop

Install a discount code, then click the shop that you want to check. A prompt appears if the discount is valid for that shop.  
If code not accepted by target shop, you will also receive a warning message when you click it.  

![](https://user-images.githubusercontent.com/30802565/208291999-a32277bb-4111-4dde-bcd4-1d5f5b40ce9e.png)

## Apply the discounting

Install a discount code, then purchase from a shop that accepts it.  
Then discount will applied to your purchase, and your remaining count will be consumed.

![](https://user-images.githubusercontent.com/30802565/208292084-633fe7e1-239c-4b8c-99b2-87fc9e824e1f.png)

*NOTE: If the above additional conditions are not met, the Discount Code will not be applied and you will not get a discount, but at the same time, the Discount Code will not be consumed, and the prompt message will contain the specific reason.*

## Auto Purge Expired Code

An expired discount code will automatically removed while server startup or in 30mins.  
Before expired codes are purged, players who try to use one receive an error saying that it has expired.

## Convert your time

Expired time accepts both Zulu Time format and UNIX Timestamp in seconds format:  

![](https://user-images.githubusercontent.com/30802565/208248088-01b1cbfe-ff79-4448-8a34-7e95324a71e1.png)

The following website can help you convert the time:  
[https://www.unixtimestamp.com/](https://www.unixtimestamp.com/)

For Zulu Time (ISO 8601 Extended) format:

```plain
yyyy-MM-dd'T'HH:mm:ssZZ
```

Note that the server time zone is used for calculations during the conversion.
