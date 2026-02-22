# 0x05 分商店权限

QuickShop-Hikari 有一个分商店管理权限的系统。  
因此，直接对权限进行判断是不够的，你还需要进行一些额外的检查。  
Therefore, for a normal permission node check is not enough, you need to attach an additional check.

## 检查商店

```java
// 检查玩家是否有权限搜索此商店 (否则将其在搜索结果中隐藏)
boolean visible = shop.playerAuthorize(UUID, BuiltInPermission);
```

若你需要检查的权限来自其他插件：

```java
// 玩家 uuid, 插件实例, 检查权限
boolean visible = shop.playerAuthorize(UUID, JavaPlugin, String);
```

## 注册自己的分商店权限

```java
QuickShop internalInstance = ....;
ShopPermissionManager permManager = internalInstance.getShopPermissionManager();
permManager.registerPermission(BuiltInShopPermissionGroup.<GROUP_NAME>.getNamespacedNode(), this, "<permission node name here>");
// 示例
permManager.registerPermission(BuiltInShopPermissionGroup.STAFF.getNamespacedNode(), this, "receive-discord-alert");
// 你需要为想要添加的每个组都注册一次，该内容不会继承
```