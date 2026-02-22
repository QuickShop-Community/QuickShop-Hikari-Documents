# SimpleClaimSystem

:::info

Can't find where to download the JAR? [Click here](../faq/where-addons-compacts-at.md).

:::

This module adds compatibility between QuickShop and SimpleClaimSystem.

It ensures that shop creation and trading respect land ownership and claim permissions defined by SimpleClaimSystem.

---

## What Does It Do?

SimpleClaimSystem allows players to claim land and protect it from unauthorized interaction.

Without compatibility:

- Players could create shops inside claims they do not own.
- Visitors might trade inside protected areas.
- Claim protection might not apply correctly to shops.

The SimpleClaimSystem compat module ensures that:

- Shop creation respects claim ownership.
- Shop trading follows claim permission rules.
- Claim owners retain control over shops within their land.

---

## How It Works

When a player attempts to:

- Create a shop
- Interact with a shop
- Trade with a shop

QuickShop checks:

- Whether the location is inside a SimpleClaimSystem claim.
- Whether the player has permission within that claim.
- Whether claim rules allow shop interaction.

If the action is not permitted by the claim, QuickShop blocks it.

If the location is outside any claim, default QuickShop behavior applies.

---

## Claim Owner Control

With this module enabled:

- Claim owners can create and manage shops inside their claim.
- Trusted players follow claim-based permissions.
- Visitors are restricted unless explicitly allowed.
- Claim protection rules apply automatically to shop interactions.

This prevents unauthorized shop placement inside protected areas.

---

## Installation

1. Install SimpleClaimSystem.
2. Install the QuickShop SimpleClaimSystem compat module.
3. Restart your server.

The module activates automatically if SimpleClaimSystem is detected.

No manual linking is required.

---

## Configuration

If configuration options are available, they will appear in the module’s `config.yml`.

Example options may include:

```yaml
# Prevent shop creation outside claims
whitelist-mode: false

# Allow claim owners to override shop permissions
allow-owner-override: true
```

If SimpleClaimSystem is not installed, this module remains inactive.

---

## Recommended Setup

For survival servers using land claims:

- Restrict shop creation to claim owners.
- Allow claim members to trade if trusted.
- Prevent shop creation in wilderness if desired.
- Enable owner override for easier management.

This ensures players maintain control over their protected land.

---

## Common Questions

### Can players create shops in someone else's claim?

Only if claim permissions allow it.

Otherwise, QuickShop blocks the action.

### Does this prevent wilderness shops?

That depends on your configuration.

You can allow shops outside claims or restrict them.

### What happens if SimpleClaimSystem is removed?

QuickShop will revert to default behavior and stop checking claim permissions.

---

## Summary

The SimpleClaimSystem compat module:

- Enforces claim-based permissions
- Prevents unauthorized shop creation
- Protects land from unwanted trading
- Requires minimal setup

It is recommended for servers running SimpleClaimSystem.