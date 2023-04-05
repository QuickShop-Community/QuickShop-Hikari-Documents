# Interaction Manager

The Interaction Manager allows you customize the click handler.  
For example, you can set store creation or interaction to occur only when you click on a store while sneaking.

## Configuration

There is example configuration for `interaction.yml`.

```yaml
version: 1

STANDING_LEFT_CLICK_SIGN: TRADE_INTERACTION
STANDING_RIGHT_CLICK_SIGN: CONTROL_PANEL
STANDING_LEFT_CLICK_SHOPBLOCK: TRADE_INTERACTION
STANDING_RIGHT_CLICK_SHOPBLOCK: NONE # Reserve for open chest
SNEAKING_LEFT_CLICK_SIGN: NONE
SNEAKING_RIGHT_CLICK_SIGN: NONE
SNEAKING_LEFT_CLICK_SHOPBLOCK: NONE
SNEAKING_RIGHT_CLICK_SHOPBLOCK: NONE # Reserve for open chest
# Direct trade:
#STANDING_LEFT_CLICK_SIGN: TRADE_INTERACTION
#STANDING_RIGHT_CLICK_SIGN: CONTROL_PANEL
#STANDING_LEFT_CLICK_SHOPBLOCK: TRADE_INTERACTION
#STANDING_RIGHT_CLICK_SHOPBLOCK: NONE
#SNEAKING_LEFT_CLICK_SIGN: TRADE_DIRECT
#SNEAKING_RIGHT_CLICK_SIGN:  TRADE_DIRECT_ALL
#SNEAKING_LEFT_CLICK_SHOPBLOCK: TRADE_DIRECT
#SNEAKING_RIGHT_CLICK_SHOPBLOCK: NONE
```

The key name of the configuration indicates the behavior.
The value value of the configuration indicates the action corresponding to the behavior.

## Glossary

* SIGN - The shop information sign that displaying the price, owner, item name etc.
* SHOPBLOCK - The shop block itself, for example, the Chest.
* LEFT_CLICK - The key that used for destory block, by Minecraft default value - LEFT_CLICK
* RIGHT_CLICK - The key that used for interact block, by Minecraft default value - RIGHT_CLICK

## Available Keys

* STANDING_LEFT_CLICK_SIGN - Player left click the sign information when standing
* STANDING_RIGHT_CLICK_SIGN - Player right click the shop information sign when standing
* STANDING_LEFT_CLICK_SHOPBLOCK - Player left click the shop block when standing
* STANDING_RIGHT_CLICK_SHOPBLOCK - Player right click the shop block when standing
* SNEAKING_LEFT_CLICK_SIGN - Player left click the sign information when sneaking
* SNEAKING_RIGHT_CLICK_SIGN - Player right click the shop information sign when sneaking
* SNEAKING_LEFT_CLICK_SHOPBLOCK - Player left click the shop block when sneaking
* SNEAKING_RIGHT_CLICK_SHOPBLOCK - Player right click the shop block when sneaking

## Available Values

* NONE - Do nothing.
* TRADE_INTERACTION - If there is a shop at the target location, send the shop information panel. Otherwise ask the player for shop creation.
* CONTROL_PANEL - If there is a shop at the target location, send the shop control panel. Otherwise do nothing.
* TRADE_DIRECT - If there is a shop at the target location, directly purchase for 1x item (or 1x stack in stacking shop) without ask.'
* TRADE_DIRECT_ALL - If there is a shop at the target location, directly purchase for as much as possible items without ask. (same with type `all` keyword in the chat when quickshop asking the amount in purchase)
