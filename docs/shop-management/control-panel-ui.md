---
slug: /modules/shops/control-panel-ui
---
# Shop Control Panel (GUI)

The Shop Control Panel allows players to manage their shop using a GUI interface instead of chat prompts.

This menu replaces traditional chat-based editing when enabled.

---

## How It Gets Opened

The Control Panel GUI is opened through the Interaction Manager using: `CONTROL_PANEL_UI`
When a player interacts with their shop:

* If `CONTROL_PANEL_UI` is enabled
* And they have permission
* The Control Panel GUI opens automatically

This behavior is handled internally by the Interaction Manager.

---

## What It Allows

The Control Panel provides direct access to shop management actions, such as:

* Set Price
* Set Amount
* Change Shop Mode (Selling / Buying / Frozen)
* Freeze / Unfreeze
* Toggle Unlimited
* View Inventory
* View History
* Manage Staff
* Transfer Ownership
* Remove Shop

Available components depend on: `config.yml → shop.control-panel`

---

## Configuration

Menu layout and appearance are configured in: `gui.yml`

You can modify:

- Title
- Rows
- Slot positions
- Icons
- Names
- Lore
- Button actions

---

## Translation Support

If a name or lore begins with: `lang:`

The text is pulled from: `messages.yml`

Reference:

This allows full localization.

---

## Recommended Layout

Top Row:

* Price / Amount / Mode

Middle:

* Inventory / History / Staff

Bottom:

* Freeze / Unlimited / Remove
