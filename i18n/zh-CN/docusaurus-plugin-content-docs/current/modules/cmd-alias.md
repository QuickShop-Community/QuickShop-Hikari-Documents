# 命令别名

默认情况下，QuickShop 将注册以下命令前缀：

- quickshop（根命令，不可被移除或修改）
- qs
- shop
- chestshop
- cshop

## 注册一个新的前缀或者移除一个前缀

所有可选的前缀都在 config.yml 定义了，就像这样：

```yaml
#Set the command alias for qs main command
# - playershop
# - pshop
custom-commands:
  - qs
  - shop
  - chestshop
  - cshop
```

只需简单地从 `custom-commands` 列表添加或移除前缀，然后可能再重启一下服务器就可以生效了。  
效果就像是这样：

![command-alias](./img/command-alias.png)
