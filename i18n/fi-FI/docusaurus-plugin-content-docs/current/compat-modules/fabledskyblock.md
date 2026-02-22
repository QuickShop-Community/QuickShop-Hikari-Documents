# FabledSkyblock

:::info

Can't find where to download the JAR? [Click here](../faq/where-addons-compacts-at.md).

:::

This module adds compatibility between QuickShop and FabledSkyblock.

It ensures that shop creation and trading properly respect island boundaries and island permissions.

---

## What Does It Do?

On Skyblock servers, players build and manage their own islands.

Without compatibility:

- Players might create shops outside their island.
- Players might trade in areas they should not.
- Island protection rules might not apply to shops.

The FabledSkyblock compat module ensures that:

- Shop creation respects island ownership.
- Trading follows island permission rules.
- Island members behave correctly with shops.
- Island visitors are restricted appropriately.

---

## How It Works

When a player attempts to:

- Create a shop
- Interact with a shop
- Trade with a shop

QuickShop checks:

- Whether the location is inside a FabledSkyblock island.
- Whether the player has permission on that island.
- Whether island settings allow the action.

If the action is not permitted by island rules, QuickShop will deny it.

---

## Island Ownership Rules

With this module enabled:

- Island owners can create and manage shops on their island.
- Island members follow island permission settings.
- Visitors can only trade if island permissions allow it.
- Outside of islands, default QuickShop behavior applies.

---

## Installation

1. Install FabledSkyblock.
2. Install the QuickShop FabledSkyblock compat module.
3. Restart your server.

The module activates automatically if FabledSkyblock is detected.

No manual linking is required.

---

## Configuration

If the module provides configuration options, they will appear in its `config.yml`.

Typical options may include:

```yaml
# Prevent shop creation outside islands
whitelist-mode: false

# Allow island owners to override shop permissions
allow-owner-override: true
```

If FabledSkyblock is not installed, this module remains inactive.

---

## Recommended Setup for Skyblock Servers

For most Skyblock servers:

- Allow shop creation only inside islands.
- Prevent trading in the void or wilderness.
- Let island owners control shop permissions.
- Use island rank systems to manage shop access.

This helps maintain economic balance between islands.

---

## Common Questions

### Can players create shops in the void?

Only if your configuration allows it.
Most servers disable shop creation outside islands.

### Does this affect island war or PvP modes?

No.
The module only checks island ownership and permissions for shop interactions.

### What happens if FabledSkyblock is removed?

QuickShop returns to normal behavior.

---

## Summary

The FabledSkyblock compat module:

- Protects island economies
- Enforces island permission rules
- Prevents unauthorized shop placement
- Integrates seamlessly with Skyblock gameplay

It is strongly recommended for any server running FabledSkyblock.