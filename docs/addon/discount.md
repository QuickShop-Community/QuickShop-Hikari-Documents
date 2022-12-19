# Discount Addon

Discount Addon added Discount Code in your QuickShop-Hikari server.

## Permission

* **quickshopaddon.discount.use** *(default: everyone)*  
  Permission to use any `/qs discount` commands.
* **quickshopaddon.discount.bypass** *(default: OP)*  
  Permission to bypass the owner checks to force config discount codes, add non-self shops in allow list or remove a discount code.
* **quickshopaddon.discount.create.server_all_shops** *(default: OP)*  
  Permission to create discount code that applied to all shops in your server.
* **quickshopaddon.discount.create.player_all_shops** *(default: everyone)*  
  Permission to create discount code that applied to player themself shops.
* **quickshopaddon.discount.create.specific_shops** *(default: everyone)*  
  Permission to create discount code that applied to shops in the code allow list.

## Create a discount code

To create a discount code, you need use discount command:

```plain
/qs discount create <code> <code-type> <rate> [max-usage] [threshold] [expired-time]
```

Command pretty long, but you have in-game command assistant to help you in your tab complete hint.  

![](https://user-images.githubusercontent.com/30802565/208291577-59fcd76e-2b4a-4e87-bdf5-582ba573795e.png)

### Available Code Type

* SERVER_ALL_SHOPS (Applied to all shops in your server)
* PLAYER_ALL_SHOPS (Applied to all shops belongs to code creator)
* SPECIFIC_SHOPS (Applied to shops in allow list that added by command `/qs discount config <code> addshop`)

## Install a code

To use a Discount Code, you need install them before purchase shops.

```plain
/qs discount install <code>
```

The installed code will remember during this session.

## Uninstall a code

To uninstall a Discount Code, you need use command:

```plain
/qs discount uninstall <code>
```

## Show detailes for a installed discount code

To use `info` subcommand, you can query the code creator, range, remaining usage, expired time, threshold and discount rate.

```plain
/qs disount info
```

![](https://user-images.githubusercontent.com/30802565/208291677-85469f8b-2c34-4563-bb57-619cfe70e105.png)

## Remove discount code

To remove your a specified discount code, execute command:

```plain
/qs discount remove <code>
```

## Check if discount code can be applied to specific shop

You need install a discount code first, then you click the shop you want to check, a promot message will show up when you can enjoy the discount in this shop.  
If code not accepted by target shop, you will also receive a warning message when you click it.  

![](https://user-images.githubusercontent.com/30802565/208291999-a32277bb-4111-4dde-bcd4-1d5f5b40ce9e.png)

## Apply the discounting

You need install a discount code first, then purchase a shop that accept your code.  
Then discount will applied to your puchase, and your remaining count will be consumed.

![](https://user-images.githubusercontent.com/30802565/208292084-633fe7e1-239c-4b8c-99b2-87fc9e824e1f.png)

*NOTE: If the above additional conditions are not met, the Discount Code will not be applied and you will not get a discount, but at the same time, the Discount Code will not be consumed, and the prompt message will contain the specific reason.*

## Auto Purge Expired Code

An expired discount code will automaticlly removed while server startup or in 30mins.  
Before they got purged, players who use a expired code will receive a error message that says the code has been expired.

## Convert your time

Expired time accepts both Zulu Time format and UNIX Timestamp in seconds format:  

![](https://user-images.githubusercontent.com/30802565/208248088-01b1cbfe-ff79-4448-8a34-7e95324a71e1.png)

There have a such pretty online website can help you convert the time:  
[https://www.unixtimestamp.com/](https://www.unixtimestamp.com/)

For Zulu Time (ISO 8601 Extended) format:

```plain
yyyy-MM-dd'T'HH:mm:ssZZ
```

Note that the server time zone is used for calculations during the conversion.
