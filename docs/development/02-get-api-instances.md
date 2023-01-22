# 0x02 Getting Instances

QuickShop-Hikari has two types of instances.

* QuickShopAPI - Contains the APIs you need to develop Addon.
* QuickShop - Internal instances of QuickShop, which can be used when you need deep inheritance with QuickShop-Hikari

## Code Example

There are multiple ways to get instances of QuickShop.

### Getting with static method

```java

QuickShopAPI api = QuickShopAPI.getInstance();
QuickShop internalInstance = QuickShopAPI.getPluginInstance();

```

### Getting with Bukkit Service Manager

```java
RegisteredServiceProvider<QuickShopProvider> provider = Bukkit.getServicesManager().getRegistration(QuickShopProvider.class);
  if (provider == null) {
    throw new IllegalStateException("QuickShop hadn't loaded at this moment.");
  }
    QuickShopAPI api = provider.getProvider().getApiInstance();
    QuickShop internalInstance = provider.getProvider().getPluginInstance();
```

### Getting with direct internal call

:::warn

This approach is not recommended and compatibility may be poor.

:::

```java
QuickShopAPI api = (QuickShopAPI)QuickShop.getInstance();
QuickShop internalInstance = QuickShop.getInstance();
```

### You're done

Once you get an instance of the plugin API, most of the operations can be done through the instance.