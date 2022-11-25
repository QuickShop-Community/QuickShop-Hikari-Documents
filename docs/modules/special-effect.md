# In game sounds and effects

When you typing and execute a quickshop command, you should hear the sounds like typewriter, it can be changed in config.yml.  
It's not an important feature, but can have (why not :)).  

Anyway, you can disable them if you dislike them.

## Configuration

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