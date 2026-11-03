---
slug: /modules/localization
---
# Localization

QuickShop-Hikari uses each player's client language. All translations are provided by volunteers on Crowdin.

## Crowdin Project

[![Crowdin](https://badges.crowdin.net/qs-hikari/localized.svg)](https://crowdin.com/project/qs-hikari)

To help translate QuickShop-Hikari, please visit our [Crowdin Homepage](https://crowdin.com/project/qs-hikari).

## Crowdin OTA

QuickShop-Hikari automatically updates translations through Crowdin OTA. Any direct changes to the local translation files will be overwritten when you reload QuickShop-Hikari or restart the server.

This keeps your translations up to date without manual intervention.

## Customize Translations

Because direct local changes are lost after a restart or reload, do not edit the original file. Use the Translation Override system instead.

### Get the original file from GitHub

Before using the override system, download the original translation file from GitHub (the local override file is empty by default).

[Click Here](https://github.com/QuickShop-Community/QuickShop-Hikari/tree/hikari/crowdin/lang)

Find your locale, open it, and download the translation file.

### Override the OTA translation

Go to your locale OTA override folder:

`MINECRAFT_SERVER_ROOT/plugins/QuickShop-Hikari/override/LOCALE_CODE/messages.yml`

You should find a blank YAML file. Open it.

Copy the keys and values that you want to change from the original translation into the override file, then edit them as needed.

You can copy the entire content directly, or keep the structure and copy and modify parts of it. Translation keys that are not overridden will be overridden with the value provided by Crowdin OTA.

Translations support [MiniMessage](https://docs.adventure.kyori.net/minimessage/) syntax.

You also may need [MiniMessage web viewer](https://webui.advntr.dev/)

### Make it work

Save the file, then run `/quickshop reload` to apply the changes.

### Updating

The override file is not updated automatically. You must update it manually when the upstream translation changes.

### DEBUG: How can I find the locale code used by Minecraft?

Run `/quickshop debug` in game to enable debug mode. Rejoin the server or change your client language; the server console should then print the locale code in use.

## Force to use single language

If your server is not facing players across the world, or if you want to disable specific languages on your server, you can set it in config.yml.

```yaml
# Enable specific languages for players.
# If a player uses a disabled language, the plugin will fall back to "game-language".
#
# Use:
#   - '*' to enable all available languages.
#
# Language files can update automatically via Crowdin OTA:
#   https://crowdin.com/project/qs-hikari
#
# For custom translations, use the language override system:
#   https://quickshop-community.github.io/QuickShop-Hikari-Documents/docs/modules/localization
enabled-languages:
- '*'
```

For example, to allow `zh-CN` language only on the server, you can set it to:

```yaml
enabled-languages:
  - 'zh-CN'
```

Or multiple languages:

```yaml
enabled-languages:
  - 'zh-CN'
  - 'zh-HK'
  - 'zh-TW'
```

## Change the default game language

In some cases QuickShop-Hikari needs to use the global default language, you can use this option to modify the default global language.

Although in the vast majority of cases QuickShop-Hikari will not use this option, you can still configure it (if you want) and we recommend keeping the default value.

The comments in `config.yml` may be outdated.

```yaml
# Default language used by the plugin.
# Set to "default" to use the player's Minecraft client language automatically.
# Example language code: en_us
game-language: default
```

## Disable CrowdinOTA

If you're in a region which cannot access our OTA server, or you have a really slow connection, you can disable CrowdinOTA directly, QuickShop-Hikari will still use cached translations or bundled translations.

To disable the CrowdinOTA, please add it in the startup flag:

```shell
-Dcom.ghostchu.quickshop.localization.text.SimpleTextManager.enableCrowdinOTA=false
```

### 🆕 Starting in 6.3.0.0 SNAPSHOT 2

Beginning with 6.3.0.0 SNAPSHOT 2, the JVM startup flag has been replaced by an entry in `config.yml`.

Use

```yaml
use-crowdin-ota: false
```

### Self-Hosted OTA Server

If you self-host the translation server using [CrowdinCopyDeploy](https://github.com/Ghost-chu/CrowdinCopyDeploy), you can point the OTA client to your own server.

```shell
-Dcom.ghostchu.quickshop.localization.text.SimpleTextManager=<YOUR_SERVER_ADDRESS>
```

### 🆕 Starting in 6.3.0.0 SNAPSHOT 2

Beginning with 6.3.0.0 SNAPSHOT 2, the JVM startup flag has been replaced by an entry in `config.yml`.

Use

```yaml
crowdin-host: <YOUR_SERVER_ADDRESS>
```
