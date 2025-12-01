# 本地化

QuickShop-Hikari使用客户端语言为玩家显示语言。 所有翻译均由志愿者在Crowdin上提供。 所有翻译都是由志愿者在 Crowdin 上提供的。

## Crowdin 项目

[![Crowdin](https://badges.crowdin.net/qs-hikari/localized.svg)](https://crowdin.com/project/qs-hikari)

To help translate QuickShop-Hikari, please visit our [Crowdin Homepage](https://crowdin.com/project/qs-hikari).

## Crowdin OTA

QuickShop-Hikari 会自动通过 Crowdin OTA 从 Crowdin 更新翻译。当您重新加载 QuickShop-Hikari 或重启服务器时，在本地进行的直接更改将被覆盖。

您的插件会保持最新翻译，无需任何调整。

## 自定义翻译

因为所有本地更改将在重启或重新加载时丢失，所以无法直接编辑原始文件， 您必须使用我们的翻译覆盖系统来代替。

### 从 Github 获取原始文件

在使用覆盖系统之前，您必须从 Github 获取原始翻译文件（因为本地覆盖文件默认为空文件）。

[点击此处](https://github.com/QuickShop-Community/QuickShop-Hikari/tree/hikari/crowdin/lang)

搜索您的语言并进入，然后点击下载翻译。

### 覆盖 OTA 翻译

跳转到您的语言对应的 OTA 覆盖文件夹：

`MINECRAFT_SERVER_ROOT/plugins/QuickShop-Hikari/override/LOCALE_CODE/messages.yml`

您应该找到一个空白的 YAML 格式文件，将其打开。

复制原始翻译中的键和值以覆盖文件，然后您可以根据需要对其进行编辑。

You can copy the entire content directly, or keep the structure and copy and modify parts of it. Translation keys that are not overridden will be overridden with the value provided by Crowdin OTA.

翻译支持 [MiniMessage](https://docs.adventure.kyori.net/minimessage/) 语法。

You also may need [MiniMessage web viewer](https://webui.advntr.dev/)

### 使它工作

Save and execute command `/quickshop reload` to make it works.

### 更新

覆盖文件不会自动更新，一旦我们的翻译有新的更新，您必须自己来更新。

### 调试：我如何知道 Minecraft 使用的语言环境代码？

Type `/quickshop debug` in-game to turn on the debug mode, re-join the server or change the client language, the server console should print the locale code that you using.

## 强制使用单一语言

如果您的服务器不面向世界各地的玩家，或者如果您想禁用服务器上的特定语言，则可以在 config.yml 中进行设置。

```yaml
#Choose which languages should be enabled
#Any client connect to server that using disabled language, will fallback to game-language option there
#Set to - '*' to enable all available languages
#The language files will automatically update thorough Crowdin OTA system, you can translate it there:
#https://crowdin.com/project/qs-hikari
#If you want custom the language file, use language override system:
#https://quickshop-community.github.io/QuickShop-Hikari-Documents/docs/modules/localization
enabled-languages:
  - '*'
```

例如，要在服务器上仅允许 `zh-CN` 语言，您可以设置为：

```yaml
enabled-languages:
  - 'zh-CN'
```

或者多种语言

```yaml
enabled-languages:
  - 'zh-CN'
  - 'zh-HK'
  - 'zh-TW'
```

## 更改默认游戏语言

在某些情况下，QuickShop-Hikari需要使用全局默认语言，您可以使用此选项修改默认全局语言。

尽管在绝大多数情况下，QuickShop-Hikari不会使用此选项， 您仍然可以配置它(如果您想要)，我们建议保留默认值。

config.yml 中的注释可能已过时。

```yaml
#Set it to default will use your system language.
#You can find the valid language code in your client language settings, like en_us
game-language: default
```

## Disable CrowdinOTA

If you're in a region which cannot access our OTA server, or you have a really slow connection, you can disable CrowdinOTA directly, QuickShop-Hikari will still use cached translations or bundled translations.

To disable the CrowdinOTA, please add it in the startup flag:

```shell
-Dcom.ghostchu.quickshop.localization.text.SimpleTextManager.enableCrowdinOTA=false
```

### Self-Hosted OTA Server

If you self-hosted our translation server by using [CrowdinCopyDeploy](https://github.com/Ghost-chu/CrowdinCopyDeploy) tool, you're able to change the OTA server to yourself server.

```shell
-Dcom.ghostchu.quickshop.localization.text.SimpleTextManager=<YOUR_SERVER_ADDRESS>
```


