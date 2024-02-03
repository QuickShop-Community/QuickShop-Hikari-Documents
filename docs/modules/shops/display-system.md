# Display Item

QuickShop provide a cool feature that let player identify shops item.

## Work Mode

Display Item have two different work mode:

* Real DisplayItem
* Virtual DisplayItem

## Real DisplayItem

This work mode will spawn a Item entity on the shop container, this is the original display mode.  
Real DisplayItem is out of the box and doesn't need any configure.  
BUT, it will heavy impact the server performance when many shops are loaded in same time.  
It also have risk that allow players dupe items, because the item is real exists on the server.

## Virtual DisplayItem

This work mode will send a Item packet to player's client to trick client display a floating item that above the shop container.  
Player *can* see the item BUT it actually not exists on the server, it won't affect the server performance and more security.

To use this feature, you need to install [ProtocolLib](https://www.spigotmc.org/resources/protocollib.1997/) and set `display-type` to `2`.

## Configuration

```yaml
  #The display type you want use.
  #Old mode, ArmorStand (display-type=1) is Outdated and could not be used
  #0=Normal Dropped Item
  #2=Virtual Item (Requires ProtocolLib, fallback to type 0 if ProtocolLib is not installed)
  display-type: 2
```

## Globally disable display item

For some reason you don't want the shops on your server spawn the display items, you can disable this feature in config.yml

```yaml
  #Should we place display items on the chests?
  #This may cause duped items, especially for modded servers!
  #Virtual DisplayItem is safe for dupe
  display-items: false
```

## Per shop disable display item

Too many items in same region may hurt client fps, especially when you are in a shopping center.  
You can disable or enable display item for single shop by looking a quickshop and execute:

```mcfunction
/quickshop toggledisplay
```

Note: If display item already globally disabled, it won't force spawn display items.

## DisplayItem Guard

When QuickShop working **under Real DisplayItem mode**, DisplayItem Guard will enabled to protect DisplayItem dupe with Hopper, Water etc.  
Server administrators will receive alert when player trying to dupe display items.  

You can disable the alert by tweak the settings:

```yaml
#Allow QuickShop to send alerts when someone tries to make a displayItem exploit.
send-display-item-protection-alert: false
```

QuickShop also will check all display items to make sure they are still at the position they should be, and reset, respawn them when need. 
You can tweak the options below the change this:

```yaml
  #QuickShop will check if the display item is in a valid position every specified amount of ticks.
  #Set to 0 to disable it.
  display-items-check-ticks: 6000
  #The interval (in ticks) at which QS checks the shops range to despawn/spawn displays.
  display-check-time: 40
```

## DisplayItem Auto Despawn (Not recommended)

This function is completely a compromise of client render performance, which will greatly increase the pressure on the server, and it is not recommended to use it.

This feature allow you despawn both Real DisplayItem and Virtual DisplayItem when player too far with shops.

```yaml
  #Allow QuickShop to automatically despawn displays when no players are in range of the shop.
  display-auto-despawn: false

  #The range at which displays will despawn.
  display-despawn-range: 20
```
