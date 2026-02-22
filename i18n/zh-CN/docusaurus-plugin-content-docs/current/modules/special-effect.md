# 游戏中的声音和效果

当您键入并执行快速shop命令时，您应该听到打字机的声音，可以在 config.yml 中进行更改。  
这不是一个重要的功能，但可以有。  
It's not an important feature, but can have (why not :)).

无论如何，如果您不喜欢它们，可以禁用它们。

## 配置

```yaml
#Special in-game effect
effect:
  #Sound related
  sound:
    #Should we play sound while player trying tab completing?
    ontabcomplete: true
    #Should we play sound while player executing commands?
    oncommand: true
    #Should we play sound while player clicking shop container/sign?
    onclick: true
```