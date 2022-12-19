# Residence

This module added [Residence](https://www.spigotmc.org/resources/residence-1-7-10-up-to-1-19.11480/) supports.

## How does it works

This module registers two of flags `quickshop-create` and `quickshop-trade` into your Residence flags registry.  
You can use them to control the players permission in your residence.

Also, this module allow residence's owner grant full controls of all shops inside their residence.

## Configuration

```yaml
#Should we prevent the creation of a shop or trade with a shop outside Residence's area?
whitelist-mode: false
#Allow residence owner grant all shops full-control permission in their claim.
allow-permission-override: true
```
