---
slug: /compat-modules/bolt
---
# Bolt

:::info

Can't find where to download the JAR? [Click here](../faq/where-addons-compacts-at).

:::

QuickShop-Hikari includes an official compatibility module for **Bolt**, the block protection plugin.

The Bolt compatibility module prevents players from creating QuickShop shops on Bolt-protected containers that they are not allowed to access.

Support was added in QuickShop-Hikari **6.3.0.0**.

## Installation

To use Bolt compatibility, install all three components:

```text
QuickShop-Hikari
Bolt
Compat-Bolt
```

Place the compatibility module JAR in your server's `plugins` directory alongside QuickShop-Hikari and Bolt, then restart the server.

The compatibility module declares both plugins as hard dependencies, so it will not load unless both are present.

The module also declares Folia support.

## What the Compatibility Module Does

When a player attempts to create a QuickShop, the compatibility module checks the shop container against Bolt before creation is allowed.

The check runs during QuickShop's cancellable pre-creation phase.

If the target block:

1. is protected by Bolt; and
2. cannot be accessed by the player according to Bolt;

QuickShop cancels the shop creation.

The player is prevented from creating a shop on that protected block.

## Access Rules

QuickShop does not maintain a separate set of Bolt permissions.

Instead, the compatibility module asks Bolt directly whether the player can access the protected block.

This means Bolt remains the authority for deciding who may access the container.

If Bolt considers the player authorized, QuickShop allows the normal shop-creation process to continue.

## Protected Containers

The compatibility module checks the block at the location where QuickShop is attempting to create the shop.

If the block is not protected by Bolt, the compatibility module does not interfere.

If the block is protected but the player has access through Bolt, shop creation is also allowed.

Only a protected block that the player cannot access causes QuickShop creation to be cancelled.

## Existing Shops

The Bolt compatibility module currently focuses on **shop creation protection**.

It listens to QuickShop's `ShopCreateEvent` during the `PRE_CANCELLABLE` phase and does not add separate handlers for:

- shop trading;
- changing shop prices;
- deleting shops;
- changing shop settings;
- normal container access.

Those actions continue to be controlled by QuickShop, Bolt, Bukkit, and any other installed protection integrations as applicable.

:::note
Installing Compat-Bolt does not make QuickShop a replacement for Bolt's normal protection behavior. It specifically prevents unauthorized creation of a QuickShop on a Bolt-protected block.
:::

## No Additional Configuration

Compat-Bolt does not currently provide its own configuration file or user-facing settings.

Once the module, QuickShop-Hikari, and Bolt are installed, the integration works automatically.

There are no QuickShop configuration values that need to be enabled for the Bolt creation check.

## No Additional Permissions

Compat-Bolt does not register its own player permission nodes.

Authorization is determined using Bolt's API:

```text
Is the block protected?
Can this player access it?
```

Server administrators should therefore configure access through Bolt itself.

## Troubleshooting

If a player can create a shop on a container you expected Bolt to protect, verify that:

- Bolt is installed and enabled;
- `Compat-Bolt` is installed and enabled;
- QuickShop-Hikari is installed and enabled;
- Bolt actually reports the target container as protected;
- Bolt's access rules do not already grant that player access.

If a player is blocked from creating a shop, check their Bolt access to the target container first.

## Summary

Compat-Bolt provides a focused integration between QuickShop-Hikari and Bolt:

| Situation | Result |
| --- | --- |
| Block is not protected by Bolt | Shop creation continues |
| Block is protected and player has Bolt access | Shop creation continues |
| Block is protected and player does not have Bolt access | Shop creation is cancelled |

No additional QuickShop configuration or compatibility-specific permissions are required.
