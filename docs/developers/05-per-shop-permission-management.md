---
slug: /development/05-per-shop-permission-management
---
# Per-Shop Permissions

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
// Register every group that you want to add; there is no inheritance.
```
