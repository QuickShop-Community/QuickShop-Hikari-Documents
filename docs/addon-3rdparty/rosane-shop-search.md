# [Ronsane] Shop Search

An add-on for the QuickShop Reremake and Hikari spigot plugin. Adds a /finditem command in game for searching through all the shops on the server.

## Features:

* Search items based on buying/selling shops
* Search items by item type
* Supports query based item search
* Supports item custom model data for custom items
* Configurable shop sorting methods
* Displays enchantments in the result for enchanted items
* Hides item enchants if item has hide_enchants flag
* Displays potion effects in the result for Potion items
* Hide certain shops from appearing in search lists
* Supports completely safe direct shop teleportation (configurable in config.yml)
* Ignores shops that are out of stock
* Support for world blacklisting (Shops in blacklisted worlds are ignored in the search result)
* All messages in the config.yml support hexcodes so you can get a lot creative with colors.


## Integrations:

* Supports PlayerWarps (by Olzie-12) integration. It shows the nearest warp to each shop in the search result GUI.
* Supports EssentialsX Warps integration for fetching nearest warps.
  * Global warps list for essentials is updated in batches every 15 minutes due to technical limitations, which is then used in every search query.
  * If you added a new warp and want it to get updated immediately, run /finditemadmin reload
  * Remember, this applies only to Essential Warps.
* WorldGuard region support for fetching the WorldGuard region the shop is in (if overlapping regions, highest priority will be chosen)

## Download:

Download from [SpigotMC](https://www.spigotmc.org/resources/quickshop-addon-shop-search.95104/)