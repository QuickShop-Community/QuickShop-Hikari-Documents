# Shop Control Panel

The Shop Control Panel allows players to manage their shops quickly and safely.

Through the control panel, shop owners can:

- Change price
- Change amount
- Switch shop type
- Freeze shops
- Toggle unlimited mode
- View history
- Open inventory
- Transfer ownership
- Delete shops

You can fully customize which options appear in the control panel using configuration.

---

## How Players Open the Control Panel

By default, players can open the control panel by:

- Sneak + Right-clicking the shop
- Using configured interaction behavior
- Using GUI-based control panel (if enabled)

The control panel can be:

- Chat-based
- GUI-based (CONTROL_PANEL_UI)

---

## Configuring the Control Panel

Control panel options are configured inside `config.yml` under:

```yaml
shop:
  control-panel:
```

You can define which components appear and in what order.

---

## Available Control Panel Components

Below are all built-in control panel component types.

Each entry represents a button or option shown in the panel.

---

### DISPLAY

Toggle the floating display item on or off.

This controls whether the item above the shop is visible.

---

### SET_PRICE

Change the shop price.

Players can update the buy/sell price directly.

---

### SET_AMOUNT

Change the stack size or shop quantity.

Used primarily for stacking shops.

---

### SHOP_MODE

Switch between shop types:

* SELLING
* BUYING
* FROZEN

---

### 🆕 INVENTORY (6.2.0.11+)

Open the shop’s linked container inventory.

Useful for:

* Restocking
* Reviewing items
* Managing stock

---

### HISTORY

View the shop’s transaction history.

Shows recent purchases and sales (if history is enabled).

---

### FREEZE

Freeze or unfreeze the shop.

When frozen:

* Trading is disabled
* The shop remains intact
* Can be re-enabled later

---

### UNLIMITED

Toggle unlimited stock mode.

When enabled:

* The shop does not require physical items
* Often used for admin shops

---

### OWNER

Transfer ownership of the shop to another player.

May require special permissions.

---

### REFILL

Refill the shop automatically (for supported setups).

Useful in automated or admin environments.

---

### REMOVE

Delete the shop.

This permanently removes:

* The shop
* The database entry
* Associated metadata

Use carefully.

---

### EMPTY

A placeholder component.

Can be used to create spacing in certain panel layouts.

---

## Example Configuration

```yaml
shop:
  control-panel:
    - DISPLAY
    - SET_PRICE
    - SET_AMOUNT
    - SHOP_MODE
    - INVENTORY
    - HISTORY
    - FREEZE
    - UNLIMITED
    - OWNER
    - REMOVE
```

You can:

* Remove any entry to disable it
* Reorder entries to change layout order

---

## Recommended Setups

### Survival Server

```yaml
shop:
  control-panel:
    - SET_PRICE
    - SET_AMOUNT
    - SHOP_MODE
    - INVENTORY
    - HISTORY
```

### Economy-Heavy Server

```yaml
shop:
  control-panel:
    - DISPLAY
    - SET_PRICE
    - SET_AMOUNT
    - SHOP_MODE
    - HISTORY
    - FREEZE
```

### Admin Shop Server

```yaml
shop:
  control-panel:
    - DISPLAY
    - SET_PRICE
    - SHOP_MODE
    - UNLIMITED
    - OWNER
    - REMOVE
```

---

## GUI-Based Control Panel

If you are using GUI mode:

* Layout and icons are configured in `gui.yml`
* Each component can have custom name and lore
* Icons can be changed
* Order can be adjusted

The control panel configuration controls what appears.
The GUI file controls how it looks.

---

## Permissions

Some components may require permissions, depending on your setup.

Examples include:

* Ownership transfer
* Unlimited mode
* Freezing
* Shop removal

Review your permissions configuration to ensure proper access control.

---

## Notes

* Removing a component disables it for all players.
* The REMOVE component permanently deletes shops.
* UNLIMITED is powerful and should be restricted to staff.
* FREEZE is useful for moderation.

After upgrading to 6.2.0.10, review this section to ensure your control panel matches your server’s intended gameplay design.

---

## Summary

The Shop Control Panel is fully customizable.

By editing:

```yaml
shop:
  control-panel:
```

You control:

* What players can modify
* How powerful shops are
* How your economy behaves
* The overall user experience
