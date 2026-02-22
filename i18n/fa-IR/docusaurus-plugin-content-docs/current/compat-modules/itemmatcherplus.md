# ItemMatcherPlus

:::info

Can't find where to download the JAR? [Click here](../faq/where-addons-compacts-at).

:::

The ItemMatcherPlus module improves how QuickShop matches custom and plugin-modified items.

It allows QuickShop to properly recognize and stack items created by other plugins that normally would not match using standard Bukkit item comparisons.

This module is especially useful for servers that use:

- Custom items
- Modified metadata
- NBT-based systems
- Advanced crate rewards
- Custom brewing systems
- Custom fishing rewards

---

## What Does It Do?

By default, Minecraft item matching checks:

- Material type
- Basic metadata

However, many plugins modify items with:

- Custom NBT data
- Hidden tags
- Custom lore formats
- Unique identifiers

Without enhanced matching:

- Items may not stack
- Shops may refuse valid items
- Transactions may fail
- Buying/selling may not behave correctly

ItemMatcherPlus improves compatibility and matching accuracy.

---

## Supported Plugins

ItemMatcherPlus includes built-in support for:

- AdvancedItems
- BreweryX
- CrazyCrates
- ExcellentCrates
- PyroFishing
- SilkSpawners

If any of these plugins are installed, QuickShop will automatically use enhanced matching logic.

No additional configuration is required.

---

## How It Works

When a player trades with a shop:

1. QuickShop checks the item.
2. If ItemMatcherPlus is enabled, it performs advanced matching.
3. Plugin-specific metadata is validated.
4. The item is confirmed as a match (or rejected safely).

This allows:

- Proper stacking of custom items
- Correct shop transactions
- Accurate buy/sell detection
- Reduced false mismatches

---

## Installation

1. Download the ItemMatcherPlus module.
2. Place the JAR into your `plugins` folder.
3. Restart your server.

If supported plugins are detected, compatibility activates automatically.

---

## Configuration

ItemMatcherPlus does not require configuration.

It activates automatically when:

- The module is installed
- A supported plugin is detected

If a supported plugin is not installed, no extra logic runs.

---

## Why You Should Use It

You should install ItemMatcherPlus if your server uses:

- Custom fishing plugins
- Custom brewing systems
- Crate plugins with modified items
- Custom spawners
- Any plugin that modifies NBT data

Without it, shops may not properly recognize custom items.

---

## Common Questions

### Do I need this if I don't use custom item plugins?

No.  
If you only use vanilla items, this module is not necessary.

### Does this affect performance?

The module only activates enhanced matching when needed.

Normal item matching remains fast and efficient.

### Will it break existing shops?

No.  
It improves compatibility and matching accuracy without modifying existing shop data.

---

## Summary

ItemMatcherPlus:

- Improves item matching accuracy
- Adds support for major custom item plugins
- Prevents stacking and trade issues
- Requires no configuration
- Activates automatically

If you run a heavily customized economy server, this module is highly recommended.