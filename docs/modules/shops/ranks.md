# Ranks

QuickShop provides a ranks system to allow control the maximum shops that player can own.

## Permission based

This feature is permission based and permission will be generated dynamically.

## Configuration

```yaml
#Limits the amount of shops a player can create and own.
limits:
  #Leave this as false if you're not using this feature! QuickShop will ignore the rest of this section.
  use: true

  #The default amount of shops a player can create.
  default: 10

  #Use old algorithm to calculate unlimited shops into limits.
  old-algorithm: false

  #Here you can bind the limit to specific permissions.
  #Using the same format, you can add as many as you want!
  ranks:
    quickshoplol: # node parent
      #Players with quickshop.example permission can create 20 shops.
      supervip: 20 # node child
```

## Permission Node Generation

In the example above, all players can own up to `10` shops by default, BUT, a permission node `quickshoplol.supervip` was defined that allow player who have that permission own up to `20` shops.

Basiclly, a permission node generate by `<node parent>.<node child>`, that mean you can replace the `quickshoplol` and `supervip` etc to what you want.

```yaml
#Limits the amount of shops a player can create and own.
limits:
  #Leave this as false if you're not using this feature! QuickShop will ignore the rest of this section.
  use: true

  #The default amount of shops a player can create.
  default: 10

  #Use old algorithm to calculate unlimited shops into limits.
  old-algorithm: false

  #Here you can bind the limit to specific permissions.
  #Using the same format, you can add as many as you want!
  ranks:
    linustechtips: # node parent
      #Players with quickshop.example permission can create 20 shops.
      cotton: 12345 # node child
```

In this example, the player who have `linustechtips.cotton` permission can create up to `12345` shops.

## Bypass permission

QuickShop doesn't have limit bypass permission, but you could set the number to a number that big enough like 999999.  
When a player has multiple ranks, QuickShop will pick the biggest one (more shops).
