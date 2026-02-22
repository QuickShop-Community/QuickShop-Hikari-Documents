# IridiumSkyblock

:::info

Can't find where to download the JAR? [Click here](../faq/where-addons-compacts-at.md).

:::

This module adds compatibility between QuickShop and IridiumSkyblock.

It ensures that shop creation and trading respect island boundaries and island permission settings defined by IridiumSkyblock.

---

## What Does It Do?

IridiumSkyblock allows players to create and manage their own islands.

Without compatibility:

- Players might create shops outside their island.
- Visitors might trade inside protected islands.
- Island protection rules might not apply correctly to shops.

The IridiumSkyblock compat module ensures that:

- Shop creation respects island ownership.
- Trading follows island permission rules.
- Island members and visitors are handled properly.
- Wilderness behavior remains configurable.

---

## How It Works

When a player attempts to:

- Create a shop
- Interact with a shop
- Trade with a shop

QuickShop checks:

- Whether the location is inside an IridiumSkyblock island.
- Whether the player is the island owner, member, or visitor.
- Whether island permissions allow shop interaction.

If the action is not permitted, QuickShop blocks it.

Outside of islands, default QuickShop behavior applies unless restricted by configuration.

---

## Island Owner Permissions

With this module enabled:

- Island owners can create and manage shops on their island.
- Island members follow the island's permission configuration.
- Visitors are restricted unless explicitly allowed.
- Shop interactions respect island protection rules.

This prevents unauthorized shop usage inside protected islands.

---

## Installation

1. Install IridiumSkyblock.
2. Install the QuickShop IridiumSkyblock compat module.
3. Restart your server.

The module activates automatically if IridiumSkyblock is detected.

No additional setup is required.

---

## Configuration

If configuration options are available, they will appear in the module’s `config.yml`.

Example options may include:

```yaml
# Prevent shop creation outside islands
whitelist-mode: false

# Allow island owners to override shop permissions
allow-owner-override: true
```

If IridiumSkyblock is not installed, this module remains inactive.

---

## Recommended Setup for Skyblock Servers

For most IridiumSkyblock servers:

- Restrict shop creation to island owners.
- Allow island members to trade if trusted.
- Prevent shop creation in the void or wilderness.
- Enable owner override for better management.

This helps maintain balanced island economies.

---

## Common Questions

### Can players create shops outside their island?

Only if your configuration allows it.

Most Skyblock servers restrict shops to island areas.

### Do island ranks affect shop permissions?

Yes, if your island permissions are configured to control interaction rights.

QuickShop follows island rules.

### What happens if IridiumSkyblock is removed?

QuickShop returns to normal behavior and stops checking island permissions.

---

## Summary

The IridiumSkyblock compat module:

- Protects island economies
- Enforces island-based permissions
- Prevents unauthorized shop placement
- Integrates seamlessly with Skyblock gameplay

It is recommended for any server running IridiumSkyblock.
