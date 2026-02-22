# 0x05 Per shop permission

QuickShop-Hikari has a per shop permission management system.  
Therefore, for a normal permission node check is not enough, you need to attach an additional check.

## Check with shop

```java
// check if a player has permission to search this shop (otherwise it should hide from search result)
boolean visible = shop.playerAuthorize(UUID, BuiltInPermission);
```

If the permission you need to check is from another plugin:

```java
// player uuid, plugin instance, permission
boolean visible = shop.playerAuthorize(UUID, JavaPlugin, String);
```

## Register yourself per-shop permission nodes

```java
QuickShop internalInstance = ....;
ShopPermissionManager permManager = internalInstance.getShopPermissionManager();
permManager.registerPermission(BuiltInShopPermissionGroup.<GROUP_NAME>.getNamespacedNode(), this, "<permission node name here>");
// for example
permManager.registerPermission(BuiltInShopPermissionGroup.STAFF.getNamespacedNode(), this, "receive-discord-alert");
// you need register for everygroup you want to add, there no inheritance
```