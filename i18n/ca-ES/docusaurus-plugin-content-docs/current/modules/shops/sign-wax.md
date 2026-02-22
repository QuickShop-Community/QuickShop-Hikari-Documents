# Shop Sign Waxing

QuickShop can automatically wax shop signs to prevent players from editing them manually.

Waxing protects the integrity of your shop signs and helps prevent tampering, spoofing, and accidental modification.

As of modern Minecraft versions, waxed signs cannot be edited unless they are unwaxed first.

---

## What Is Sign Waxing?

In Minecraft, waxing a sign locks it so that:

- Players cannot edit the text
- Players cannot modify lines
- Accidental changes are prevented
- Malicious edits are blocked

When enabled in QuickShop, shop signs are automatically waxed when created.

---

## Why Use It?

Sign waxing protects against:

- Players editing price lines
- Changing item names on signs
- Spoofing shop information
- Accidental formatting issues
- Sign hijacking attempts

On public servers, this feature is strongly recommended.

---

## How It Works

When a shop is created:

1. QuickShop generates the shop sign.
2. The sign text is written.
3. The sign is automatically waxed (if enabled).

If a shop is updated:

- The sign will be safely updated by QuickShop.
- The wax state is maintained.

Players cannot manually edit shop signs while waxing is enabled.

---

## Configuration

To enable or disable sign waxing, edit `config.yml`:

```yaml
shop:
  sign-wax: true
```

### true

- Shop signs are automatically waxed.
- Players cannot edit the sign manually.

### false

- Shop signs behave like normal Minecraft signs.
- Players may edit them if permitted by the game.

---

## Recommended Setting

For most servers:

```yaml
shop:
  sign-wax: true
```

This ensures shop data stays accurate and secure.

---

## Common Questions

### Can admins still modify shop signs?

QuickShop controls shop sign formatting.
Manual edits are not recommended.

Admins should use:

- Control panel
- Shop commands
- Direct configuration changes

### Does waxing affect shop functionality?

No.
Waxing only prevents manual text edits.
The shop continues to function normally.

### Can players un-wax shop signs?

No.
QuickShop manages the sign state automatically.

---

## Best Practices

- Keep sign-wax enabled on survival servers.
- Combine sign-wax with proper permissions.
- Avoid manually editing shop signs through other plugins.

---

## Summary

Sign Waxing:

- Prevents tampering
- Requires no additional setup

Enable it once and QuickShop handles the rest.