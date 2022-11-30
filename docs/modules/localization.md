# Localization

QuickShop-Hikari use client-language to display for players. All translations offered by volunteers on Crowdin.

## Crowdin Project

[![Crowdin](https://badges.crowdin.net/quickshop-hikari/localized.svg)](https://crowdin.com/project/quickshop-hikari)

To help translate QuickShop-Hikari, please visit our [Crowdin Homepage](https://crowdin.com/project/quickshop-hikari).

## Crowdin OTA

QuickShop-Hikari will auto update translations from Crowdin via Crowdin OTA, all directly local changes will overrided when you reload QuickShop-Hikari or restart your server.

Your installation will keep translations up-to-date without any touch.

## Customize Translations

Because all local changes will lost on restart or reload, it's impossible to edit original file directly, you must use our Translation Override system to instead.

### Get the original file from Github

Before using the override system, You must get the original translation file from the Github (because the local override file is an empty file by default).

[Click Here](https://github.com/Ghost-chu/QuickShop-Hikari/tree/hikari/crowdin/lang)

Search your locale and click in, then download the translation.

### Override the OTA translation

Go to your locale OTA override folder:

`MINECRAFT_SERVER_ROOT/plugins/QuickShop-Hikari/override/LOCALE_CODE/messages.yml`

You should find a blank YAML format file, open it.

Copy the key and values from the original translation to override the file, then you can edit it what you want.

You can copy the entire content directly, or keep the structure and copy and modify parts of it. Translation keys that are not overridden will be overridden with the value provided by Crowdin OTA.

Translation support [MiniMessage](https://docs.adventure.kyori.net/minimessage/) syntax.

### Make it work

Save and execute command `/qs reload` to make it works.

### Updating

The override file won't automatically update, you must do it by yourself once our translation have new update.

### DEBUG: How I can know which locale code that Minecraft using?

Type `/qs debug` in-game to turn on the debug mode, re-join the server or change the client language, the server console should print the locale code that you using.

## Force to use single language

If your server is not facing the players from worldwide, or you want to force everybody only can see one language on your server, you can disable unused languages from config.yml.

```yaml
#Choose which languages should be enabled
#Any client connect to server that using disabled language, will fallback to game-language option there
#Set to - '*' to enable all available languages
#The language files will automatically update thorough Crowdin OTA system, you can translate it there:
#https://crowdin.com/project/quickshop-hikari
#If you want custom the language file, use language override system:
#https://github.com/Ghost-chu/QuickShop-Hikari/wiki/Use-translation-override-system
enabled-languages:
  - '*'
```

For example, to allow `zh-CN` language only on the server, you can set it to:

```yaml
enabled-languages:
  - 'zh-CN'
```

Or multiple languages:

For example, to allow `zh-CN` language only on the server, you can set it to:

```yaml
enabled-languages:
  - 'zh-CN'
  - 'zh-HK'
  - 'zh-TW'
```

## Change the default game language

In some cases QuickShop-Hikari needs to use the global default language, you can use this option to modify the default global language.

Although in the vast majority of cases QuickShop-Hikari will not use this option, you can still configure it (if you want) and we recommend keeping the default value.

The comments in config.yml may outdated.

```yaml
#Set it to default will use your system language.
#You can find the valid language code in your client language settings, like en_us
game-language: default
```
