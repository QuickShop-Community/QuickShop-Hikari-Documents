## Download Requires Plugin
You need to install the latest [ProtocolLib](https://www.spigotmc.org/resources/protocollib.1997/) to enable this feature
## How to set
open the `plugins/QuickShop-Hikari/config.yml`, you should set the `display-type` to 2  
example:
```yaml
  #The display type you want use.
  #Old mode, ArmorStand (display-type=1) is Outdated and could not be used
  #0=Normal Dropped Item
  #2=Virtual Item (Requires ProtocolLib, fallback to type 0 if ProtocolLib is not installed)
  display-type: 2
```
Save the `config.yml`, then restart the server and you're done