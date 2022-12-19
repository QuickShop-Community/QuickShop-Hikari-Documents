# PlotSquared

This module added supports to [PlotSquared v6](https://www.spigotmc.org/resources/plotsquared-v6.77506/).

## How does it works

This module will register two of flags `quickshop-create` and `quickshop-trade` into your PSv6 permission flags registry.  
You can use them to control the players permission in your plot.  

Also it supports delete shops when a player untrusted from your plot.

## Configuration

```yaml
#Should we prevent the creation of a shop or trade with a shop outside PlotSquared's area?
whitelist-mode: true
#Should we delete shops that were created by players that get untrusted?
delete-when-user-untrusted: true
```
