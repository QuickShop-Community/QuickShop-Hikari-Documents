# Dominion

:::info

Can't find where to download the JAR? [Click here](../faq/where-addons-compacts-at).

:::

This module adds compatibility between QuickShop and Dominion.

It ensures that shop creation and trading respect Dominion’s land and territory protection system.

---

## What Does It Do?

Dominion allows players or groups to claim land and define territory-based permissions.

Without compatibility:

- Players could create shops inside territories they do not control.
- Visitors might trade inside protected dominions.
- Dominion permission rules might not apply to shop interactions.

The Dominion compat module ensures that:

- Shop creation respects territory ownership.
- Shop trading follows Dominion permission settings.
- Protected land remains secure from unauthorized shop usage.

---

## How It Works

When a player attempts to:

- Create a shop
- Interact with a shop
- Trade with a shop

QuickShop checks:

- Whether the location is inside a Dominion-controlled area.
- Whether the player has permission within that territory.
- Whether Dominion rules allow shop interaction.

If the action is not permitted by Dominion settings, QuickShop blocks it.

If the location is outside any Dominion territory, default QuickShop behavior applies.

---

## Territory Owner Control

With this module enabled:

- Territory owners can create and manage shops inside their dominion.
- Trusted members follow territory-based permissions.
- Outsiders are restricted unless explicitly allowed.
- Shop actions respect Dominion’s land rules automatically.

This prevents unauthorized shop placement inside protected territories.

---

## Installation

1. Install Dominion.
2. Install the QuickShop Dominion compat module.
3. Restart your server.

The module activates automatically if Dominion is detected.

No manual configuration linking is required.

---

## Configuration

If configuration options are available, they will appear in the module’s `config.yml`.

Example options may include:

```yaml
# Prevent shop creation outside dominions
whitelist-mode: false

# Allow territory owners to override shop permissions
allow-owner-override: true
```

If Dominion is not installed, this module remains inactive.

---

## Recommended Setup

For servers using Dominion:

- Restrict shop creation to territory owners or trusted members.
- Prevent shop creation in wilderness if desired.
- Allow dominion owners to manage shop permissions.
- Review Dominion permission settings to align with shop behavior.

This ensures protected territories remain secure and organized.

---

## Common Questions

### Can players create shops in someone else's dominion?

Only if Dominion permissions allow it.

Otherwise, QuickShop blocks the action.

### Does this affect wilderness shops?

That depends on your configuration.

You may allow or restrict shops outside dominions.

### What happens if Dominion is removed?

QuickShop returns to normal behavior and stops checking Dominion territories.

---

## Summary

The Dominion compat module:

- Enforces territory-based permissions
- Prevents unauthorized shop creation
- Protects claimed land from misuse
- Integrates seamlessly with Dominion

It is recommended for servers running Dominion.