---
slug: /addon/dyesigns
---
# DyeSigns

:::info

Can't find where to download the JAR? [Click here](../faq/where-addons-compacts-at).

:::

DyeSigns is an official QuickShop-Hikari addon that allows players to customize the appearance of their shop signs using normal Minecraft items.

With DyeSigns installed, players can:

- change the text color of their shop sign with dyes;
- toggle glowing sign text with a Glow Ink Sac;
- clear DyeSigns-added effects from a shop sign;
- grant trusted shop staff permission to manage these effects.

DyeSigns was added for QuickShop-Hikari **6.3.0.0**.

---

## Installation

Install DyeSigns like any other QuickShop-Hikari addon.

1. Download the DyeSigns addon JAR.
2. Place it in your server's `plugins` directory.
3. Make sure QuickShop-Hikari is installed.
4. Restart the server.

DyeSigns depends on:

```text
QuickShop-Hikari
```

The addon declares Folia support.

---

## Dyeing a Shop Sign

To change the text color of a shop sign:

1. Hold a Minecraft dye.
2. Right-click the QuickShop sign.

For example:

- Red Dye makes the sign text red.
- Blue Dye makes the sign text blue.
- Lime Dye makes the sign text lime.
- Black Dye makes the sign text black.

DyeSigns supports the normal Minecraft dye colors.

The player must have:

```text
quickshopaddon.dyesigns.dye
```

This permission is granted by default.

---

## Making Sign Text Glow

To toggle glowing text:

1. Hold a **Glow Ink Sac**.
2. Right-click the QuickShop sign.

The glow state is toggled each time the sign is clicked with a Glow Ink Sac.

The player must have:

```text
quickshopaddon.dyesigns.glow
```

This permission is granted by default.

---

## Clearing Sign Effects

DyeSigns can clear the custom effects it has stored for a shop sign.

To clear the effects:

1. Hold a sign item.
2. Right-click the QuickShop sign.

For example:

```text
Oak Sign
Spruce Sign
Birch Sign
```

and other materials whose item name contains `_SIGN` can trigger the clear action.

The player must have:

```text
quickshopaddon.dyesigns.clear
```

This permission is granted by default.

Clearing removes the stored DyeSigns color and glow state and disables glowing text.

---

## Shop Ownership and Staff Permissions

Having the global DyeSigns permission does not automatically allow a player to modify another player's shop.

For a shop they do not own, the player must either:

- be authorized through the shop's DyeSigns staff permission; or
- have the corresponding `.other` permission.

DyeSigns registers three per-shop staff permissions:

```text
sign-dye
sign-glow
sign-clear
```

These are registered with QuickShop's `STAFF` permission group.

This allows shop owners to grant trusted shop staff access to sign customization without giving them global administrative permissions.

---

## Permissions

| Permission | Default | Description |
| --- | --- | --- |
| `quickshopaddon.dyesigns.dye` | Everyone | Allows a player to dye shop signs they are authorized to modify |
| `quickshopaddon.dyesigns.dye.other` | OP | Allows dyeing other players' shop signs without shop authorization |
| `quickshopaddon.dyesigns.glow` | Everyone | Allows a player to toggle glowing text on authorized shop signs |
| `quickshopaddon.dyesigns.glow.other` | OP | Allows toggling glow on other players' shop signs without shop authorization |
| `quickshopaddon.dyesigns.clear` | Everyone | Allows a player to clear DyeSigns effects from authorized shop signs |
| `quickshopaddon.dyesigns.clear.other` | OP | Allows clearing DyeSigns effects from other players' shop signs without shop authorization |

:::note
The `.other` permissions bypass the normal owner/per-shop authorization check for that DyeSigns action.
:::

---

## Persistent Sign Customization

DyeSigns stores its customization directly on the sign using Minecraft's Persistent Data Container.

The addon stores:

- the selected dye color;
- the glowing-text state;
- whether DyeSigns effects have been explicitly cleared.

This allows DyeSigns to restore the customization when QuickShop updates the sign.

For example, changing:

- the shop price;
- the shop item;
- the shop type;
- other information rendered on the sign

can cause QuickShop to redraw the sign.

DyeSigns listens for QuickShop's `ShopSignUpdateEvent` and reapplies the saved dye and glow state after these updates.

---

## How DyeSigns Interacts with Sign Layouts

DyeSigns does **not** replace QuickShop's sign layout system.

The normal QuickShop layout still controls what information appears on the sign:

```yaml
shop:
  layout:
    SELLING:
      line1: "header"
      line2: "trading"
      line3: "item"
      line4: "price"
```

DyeSigns changes the Minecraft sign's visual text color and glowing-text state.

For information about changing the contents of shop signs, see [Sign Layout](../../shop-management/sign-layout.md).

---

## Supported Signs

DyeSigns operates on QuickShop wall signs attached to a shop container.

Right-clicking an unrelated sign does nothing.

The addon verifies that:

1. the clicked block is a wall sign;
2. the sign is attached to a block;
3. the attached block belongs to a QuickShop;
4. the player is authorized to perform the requested action.

---

## Configuration

DyeSigns currently requires no user-facing feature configuration.

Its configuration file contains only the configuration version:

```yaml
config-version: 2
```

Behavior is controlled through:

- Minecraft items;
- Bukkit permissions;
- QuickShop's per-shop staff permission system.

---

## Example Permission Setup

A normal server can usually leave the default permissions unchanged.

Players automatically receive:

```text
quickshopaddon.dyesigns.dye
quickshopaddon.dyesigns.glow
quickshopaddon.dyesigns.clear
```

Operators receive the `.other` permissions by default.

If you use a permissions plugin, you can separately control administrative access:

```text
quickshopaddon.dyesigns.dye.other
quickshopaddon.dyesigns.glow.other
quickshopaddon.dyesigns.clear.other
```

---

## Summary

DyeSigns adds lightweight visual customization to QuickShop signs while keeping QuickShop's normal sign renderer intact.

| Action | Item | Permission |
| --- | --- | --- |
| Change text color | Any Minecraft dye | `quickshopaddon.dyesigns.dye` |
| Toggle glowing text | Glow Ink Sac | `quickshopaddon.dyesigns.glow` |
| Clear DyeSigns effects | Sign item | `quickshopaddon.dyesigns.clear` |

Customizations are stored on the sign and automatically reapplied when QuickShop updates the sign.
