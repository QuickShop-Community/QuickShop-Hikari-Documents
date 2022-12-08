# Shop Benefits

Shop Benefits feature allow you split your shop reward to multiple players.

## Add a benefit

Looking at a quickshop, execute command `/qs benefit add <player> <percentage>` (example: `/qs benefit add Aether 50%`) will split `<percentage>%` rewards to `<player`.  

For example:

* `/qs benefit add Nahida 50%`
* `/qs benefit add Venti 30%`

In those commands, shop owner set split `50%` rewards to Nahida and `30%` to Venti.
When a shop earn `100\$`, Nahida will get `50$` for rewards, and Venti will get `30$` for rewards, and shop owner will get remains `20%` (`20$`) for rewards.

## Remove from benefits

To remove a player from your shop benefits, simple use command: `/qs benefit remove <player>`.

## Query all benefits in your shop

To query the all benefits in your shop, simple use command: `/qs benefit query`.

## Side Effects

Depending on the implementation of different economy plugins, the assignment may suffer from loss of precision.

When the amount is too small, rounding may occur due to the implementation of the economy plugin, or decimal precision may be lost such as `2.899999999999999`.

QuickShop-Hikari have a workaround about this, but still, if this problem occurs, please do not report it as a bug, it is expected.

## Allow to add offline players

By default, for security, QuickShop-Hikari disallow add offline players into shop benefits, To remove this restriction, you must add the JVM Startup Flag like below:

```bash
-Dcom.ghostchu.quickshop.command.subcommand.SubCommand_Benefit.allowOffline=true
```
