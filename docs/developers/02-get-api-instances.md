---
slug: /development/02-get-api-instances
---
# Accessing the API

QuickShop-Hikari exposes most addon-facing functionality through the `QuickShopAPI` interface.

For normal addon development, use `QuickShopAPI` rather than depending directly on QuickShop's internal implementation classes.

## QuickShopAPI

The main API entry point is:

```java
import com.ghostchu.quickshop.api.QuickShopAPI;
```

The recommended way to obtain it is:

```java
QuickShopAPI api = QuickShopAPI.getInstance();
```

Internally, `QuickShopAPI#getInstance()` resolves QuickShop through Bukkit's service manager.

If QuickShop has not finished loading, the call throws an `IllegalStateException`.

:::tip
Make sure QuickShop is declared as a dependency or soft dependency where appropriate before attempting to access the API.
:::

## Getting the Plugin Instance

If you need the Bukkit `Plugin` instance for QuickShop, use:

```java
Plugin quickShopPlugin = QuickShopAPI.getPluginInstance();
```

The return type is:

```java
org.bukkit.plugin.Plugin
```

For normal addon development, this should be preferred over casting to QuickShop's internal implementation class.

## Using Bukkit's Service Manager Directly

You can also access QuickShop through Bukkit's service manager:

```java
RegisteredServiceProvider<QuickShopProvider> provider =
        Bukkit.getServicesManager().getRegistration(QuickShopProvider.class);

if(provider == null) {
    throw new IllegalStateException("QuickShop hadn't loaded at this moment.");
}

QuickShopAPI api = provider.getProvider().getApiInstance();
Plugin quickShopPlugin = provider.getProvider().getPlugin();
```

Required imports:

```java
import com.ghostchu.quickshop.api.QuickShopAPI;
import com.ghostchu.quickshop.api.QuickShopProvider;
import org.bukkit.Bukkit;
import org.bukkit.plugin.Plugin;
import org.bukkit.plugin.RegisteredServiceProvider;
```

Using `QuickShopAPI.getInstance()` is normally simpler unless you specifically need access to the registered `QuickShopProvider`.

## Accessing QuickShop Managers

Once you have a `QuickShopAPI` instance, most QuickShop systems are available through manager or service getters.

For example:

```java
QuickShopAPI api = QuickShopAPI.getInstance();

ShopManager shopManager = api.getShopManager();
EconomyManager economyManager = api.getEconomyManager();
InteractionManager interactionManager = api.getInteractionManager();
```

QuickShop-Hikari 6.3 also exposes the active display manager:

```java
DisplayManager<?> displayManager = api.getDisplayManager();
```

:::note
`getDisplayManager()` is nullable.

A display manager may not be available when the display system is unavailable or disabled, so check for `null` before using it.
:::

Example:

```java
DisplayManager<?> displayManager = api.getDisplayManager();

if(displayManager != null) {

    // Work with QuickShop's active display manager.
}
```

## Common API Accessors

Some of the main services available from `QuickShopAPI` include:

| Method | Purpose |
| --- | --- |
| `getShopManager()` | Access and manage shops |
| `getEconomyManager()` | Access registered economy implementations |
| `getDisplayManager()` | Access the active shop display manager |
| `getInteractionManager()` | Access shop interaction behaviors and interaction types |
| `getCommandManager()` | Access QuickShop's sub-command system |
| `getDatabaseHelper()` | Access QuickShop database helpers |
| `getInventoryWrapperRegistry()` | Access registered inventory wrappers |
| `getItemMatcher()` | Access the active item matcher |
| `getShopControlPanelManager()` | Access the shop control panel system |
| `getTextManager()` | Access localization and text utilities |
| `getSkullProvider()` | Access asynchronous skull/profile utilities |
| `tagManager()` | Access the shop tag system |
| `getRegistry()` | Access QuickShop's registry manager |
| `getPlayerFinder()` | Access player lookup functionality |
| `getRankLimiter()` | Access shop rank/limit functionality |
| `getShopItemBlackList()` | Access the configured shop item blacklist |

## Configuration Access

QuickShop-Hikari 6.3 exposes the main configuration through the API:

```java
YamlDocument config = api.getConfig();
```

Required import:

```java
import dev.dejvokep.boostedyaml.YamlDocument;
```

This provides access to QuickShop's loaded `config.yml`.

:::warning
Avoid changing QuickShop configuration values from an addon unless your integration specifically requires it.

Reading configuration is generally safe, but modifying QuickShop-owned settings may create unexpected behavior if QuickShop has already cached those values elsewhere.
:::

## DisplayManager in 6.3

QuickShop-Hikari 6.3 introduces `DisplayManager` as the common API abstraction for QuickShop display implementations.

Access it with:

```java
DisplayManager<?> manager = api.getDisplayManager();
```

Required import:

```java
import com.ghostchu.quickshop.api.shop.display.DisplayManager;
```

This allows addons to integrate with the currently active display implementation without directly depending on implementation classes such as the virtual display or Display Entity managers.

QuickShop also fires display manager lifecycle events when displays are registered or removed:

```java
DisplayManagerPutEvent
DisplayManagerRemoveEvent
```

See [Custom Events](10-events.md) for more information.

## Shop Tag Manager

QuickShop-Hikari 6.3 exposes the shop tag system through:

```java
TagManager tagManager = api.tagManager();
```

Required import:

```java
import com.ghostchu.quickshop.api.shop.tag.TagManager;
```

This is the entry point for integrations that work with QuickShop's per-player shop tagging system.

## Interaction Manager

QuickShop's interaction system can be accessed through:

```java
InteractionManager interactionManager = api.getInteractionManager();
```

Required import:

```java
import com.ghostchu.quickshop.api.shop.interaction.InteractionManager;
```

The interaction manager handles QuickShop interaction types and behaviors.

This is useful for addons that need to extend or modify how players interact with shops and shop displays.

## Economy Manager

Use:

```java
EconomyManager economyManager = api.getEconomyManager();
```

rather than depending directly on an individual economy implementation.

Required import:

```java
import com.ghostchu.quickshop.api.economy.EconomyManager;
```

The economy manager is the API entry point for QuickShop's registered economy integrations.

## Shop Manager

The primary shop API is available through:

```java
ShopManager shopManager = api.getShopManager();
```

Required import:

```java
import com.ghostchu.quickshop.api.shop.ShopManager;
```

Most operations involving locating, creating, querying, or managing shops are performed through the `ShopManager`.

See [Work with Shop Manager](03-work-with-shop-manager.md) for more information.

## Text Manager

For localized QuickShop messages, access:

```java
TextManager textManager = api.getTextManager();
```

Required import:

```java
import com.ghostchu.quickshop.api.localization.text.TextManager;
```

The `TextManager` should be preferred when your addon needs to use QuickShop's localization system rather than hard-coding player-facing messages.

## API Version Information

You can retrieve QuickShop's semantic version with:

```java
Semver version = api.getSemVersion();
```

Required import:

```java
import com.vdurmont.semver4j.Semver;
```

This can be useful when an addon supports multiple QuickShop versions and needs to enable features conditionally.

## Quick Example

A typical addon might initialize its QuickShop integrations like this:

```java
public final class MyAddon extends JavaPlugin {

    private QuickShopAPI quickShopAPI;

    @Override
    public void onEnable() {

        quickShopAPI = QuickShopAPI.getInstance();

        ShopManager shopManager = quickShopAPI.getShopManager();

        DisplayManager<?> displayManager = quickShopAPI.getDisplayManager();

        if(displayManager != null) {

            getLogger().info("QuickShop display integration enabled.");
        }
    }

    public QuickShopAPI quickShop() {

        return quickShopAPI;
    }
}
```

## Avoid Direct Internal Access

Older examples may obtain the internal QuickShop implementation directly:

```java
QuickShop.getInstance();
```

or cast it:

```java
QuickShopAPI api = (QuickShopAPI) QuickShop.getInstance();
```

:::warning
Do not use this approach for normal addon development.

Internal classes are not part of the stable public API and may change between QuickShop versions.
:::

Use:

```java
QuickShopAPI api = QuickShopAPI.getInstance();
```

instead.

This keeps your addon dependent on the public `quickshop-api` module rather than QuickShop's implementation details.

## Summary

For most addons, obtaining QuickShop is simply:

```java
QuickShopAPI api = QuickShopAPI.getInstance();
```

From there, use the API-provided managers and services:

```java
api.getShopManager();
api.getEconomyManager();
api.getDisplayManager();
api.getInteractionManager();
api.getCommandManager();
api.getTextManager();
api.tagManager();
```

QuickShop-Hikari 6.3 expands the public entry point with systems such as `DisplayManager`, `TagManager`, `SkullProvider`, and direct `YamlDocument` configuration access, reducing the need for addons to depend on QuickShop's internal implementation classes.
