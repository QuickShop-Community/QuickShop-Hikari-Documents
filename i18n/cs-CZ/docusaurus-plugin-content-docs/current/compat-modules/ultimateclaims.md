# UltimateClaims

:::info

Can't find where to download the JAR? [Click here](../faq/where-addons-compacts-at.md).

:::

This module adds compatibility between QuickShop and UltimateClaims.

It ensures that shop creation and trading respect land claim permissions managed by UltimateClaims.

---

## What Does It Do?

On servers using land-claim plugins, players protect areas of the world from unauthorized interaction.

Without compatibility:

- Players may create shops inside claims they do not own.
- Visitors might trade in areas where they should not.
- Claim protection rules might not apply correctly to shops.

The UltimateClaims compat module ensures that:

- Shop creation respects claim ownership.
- Shop trading follows claim permission rules.
- Claim owners retain control over shops inside their land.

---

## How It Works

When a player attempts to:

- Create a shop
- Interact with a shop
- Trade with a shop

QuickShop checks:

- Whether the location is inside a claim.
- Whether the player has permission in that claim.
- Whether claim rules allow shop interaction.

If the action violates claim settings, QuickShop blocks it.

Outside of claims, normal QuickShop behavior applies.

---

## Claim Owner Permissions

With this module enabled:

- Claim owners can create and manage shops within their claim.
- Trusted players follow claim permission settings.
- Visitors are restricted based on claim configuration.
- Shop actions outside of claims behave normally.

This prevents unauthorized shop placement inside protected areas.

---

## Installation

1. Install UltimateClaims.
2. Install the QuickShop UltimateClaims compat module.
3. Restart your server.

If UltimateClaims is detected on startup, compatibility activates automatically.

No additional linking is required.

---

## Configuration

If configuration options are available, they will appear in the module’s `config.yml`.

Common options may include:

```yaml
# Prevent shop creation outside claims
whitelist-mode: false

# Allow claim owners to override shop permissions
allow-owner-override: true
```

If UltimateClaims is not installed, this module remains inactive.

---

## Recommended Setup

For survival servers using land claims:

- Restrict shop creation to claim owners.
- Allow claim members to trade if trusted.
- Prevent shop creation in wilderness if desired.
- Keep owner override enabled for better control.

This ensures players maintain full control over their protected land.

---

## Common Questions

### Can players create shops inside someone else's claim?

Only if the claim permissions allow it.

Otherwise, QuickShop will block the action.

### Does this prevent wilderness shops?

That depends on your configuration.

You can choose to restrict shops to claimed land only.

### What happens if UltimateClaims is removed?

QuickShop returns to normal behavior without claim checks.

---

## Summary

The UltimateClaims compat module:

- Protects claimed land from unauthorized shop usage
- Enforces claim-based permissions
- Integrates smoothly with land-claim servers
- Requires minimal setup

It is recommended for any server running UltimateClaims.