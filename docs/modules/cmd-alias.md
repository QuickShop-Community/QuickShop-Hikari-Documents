# Command Alias

By default, QuickShop will register the the command prefix below:

* qs (root command, cannot remove or change it)
* shop
* chestshop
* cshop

## Register a new prefix or remove a prefix

All optional prefix are defined in config.yml like this:

```yaml
#Set the command alias for qs main command
# - playershop
# - pshop
custom-commands:
  - shop
  - chestshop
  - cshop
```

Simple add or remove prefix from `custom-commands` list, then you might need restart your server to make it take effect.  
The effect should be like this:

![command-alias](./img/command-alias.png)