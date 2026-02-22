# HuskTowns

:::info

Can't find where to download the JAR? [Click here](../faq/where-addons-compacts-at.md).

:::

This module adds compatibility between QuickShop and HuskTowns.

It ensures that shop creation and trading respect town and claim permissions defined by HuskTowns.

---

## What Does It Do?

HuskTowns allows players to create towns and claim land.

Without compatibility:

- Players could create shops inside towns they do not belong to.
- Visitors might trade inside protected towns.
- Town permission rules might not apply to shop interactions.

The HuskTowns compat module ensures that:

- Shop creation respects town ownership.
- Trading follows town permission settings.
- Town members and visitors are handled correctly.
- Wilderness behavior remains configurable.

---

## How It Works

When a player attempts to:

- Create a shop
- Interact with a shop
- Trade with a shop

QuickShop checks:

- Whether the location is inside a HuskTowns claim.
- Whether the player is a town member, trusted player, or outsider.
- Whether the town's permission settings allow the action.

If the action is not permitted by town rules, QuickShop blocks it.

Outside of town claims, default QuickShop behavior applies unless restricted by configuration.

---

## Town Owner Control

With this module enabled:

- Town owners can create and manage shops inside their town.
- Town members follow town-based permission settings.
- Visitors are restricted unless explicitly allowed.
- Shop interactions respect town claim protection.

This prevents unauthorized shop placement and trading inside protected towns.

---

## Installation

1. Install HuskTowns.
2. Install the QuickShop HuskTowns compat module.
3. Restart your server.

The module activates automatically if HuskTowns is detected.

No manual linking is required.

---

## Configuration

If configuration options are available, they will appear in the module’s `config.yml`.

Example options may include:

```yaml
# Prevent shop creation outside towns
whitelist-mode: false

# Allow town owners to override shop permissions
allow-owner-override: true
```

If HuskTowns is not installed, this module remains inactive.

---

## Recommended Setup

For town-based survival servers:

- Restrict shop creation to town members.
- Allow trading only where town permissions permit.
- Prevent shop creation in wilderness if desired.
- Enable owner override for better administrative control.

This helps maintain town-based economic balance.

---

## Common Questions

### Can players create shops in another town?

Only if that town's permissions allow it.

Otherwise, QuickShop blocks the action.

### Does this affect wilderness shops?

That depends on your configuration.

You can allow or restrict shops outside towns.

### What happens if HuskTowns is removed?

QuickShop returns to normal behavior and stops checking town permissions.

---

## Summary

The HuskTowns compat module:

- Enforces town-based land permissions
- Protects towns from unauthorized shop usage
- Integrates smoothly with HuskTowns
- Requires minimal setup

It is recommended for any server running HuskTowns.