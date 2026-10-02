# QShopWebUI

[QShopWebUI](https://github.com/ALingqing/QshopWebUI) is a third-party addon that adds a self-hosted web interface for browsing and managing QuickShop-Hikari shops.

:::info Third-party addon

This addon is not bundled with QuickShop-Hikari. Support, releases, and issue tracking are handled by the addon's developer.

:::

## Features

QShopWebUI runs an embedded HTTP server inside the plugin and reads live shop data directly from QuickShop-Hikari. No external database or web server is required.

- Browse and search every shop in the browser; filter by item, owner, world, price, and shop type
- Chinese item names and pinyin search built in
- Buy from selling shops and sell to buying shops from the web
  - optional game-password verification through AuthMe
  - offline purchases are queued and delivered on the player's next join
- Respects the QuickShop "Limited" addon (qssuite-limited): web purchases share the same per-player quota, and the purchase dialog shows the remaining amount
- Admin dashboard: batch price/type edits, shop deletion, announcements, backups, import/export, and statistics
- Item images fall back to the MC Item Gallery CDN when a local texture is missing
- Single-port multiplexing: the plugin can serve both Minecraft players and the web UI on the same port, for hosts that only allow one port

## Requirements

| Dependency | Version |
| --- | --- |
| Java | 17 or later |
| Paper (or Spigot) | 1.18 or later |
| QuickShop-Hikari | recent 5.x / 6.x (accessed through reflection) |

### Optional dependencies

| Plugin | Purpose |
| --- | --- |
| Vault + economy plugin | Buying and selling from the web UI |
| AuthMe | Verifies the player's game password before web purchases |
| qssuite-limited (Limited addon) | Web purchases follow the shop's per-player purchase limit |

## Installation

1. Download the latest `QShopWebUI-x.y.z.jar` from [GitHub Releases](https://github.com/ALingqing/QshopWebUI/releases).
2. Place the jar in the server's `plugins/` directory.
3. Make sure QuickShop-Hikari is installed.
4. Start the server once, then edit `plugins/QShopWebUI/config.yml` (admin account, port, and standalone/multiplex mode).
5. Open `http://<server-ip>:<port>/` in a browser.

## Commands and permissions

| Command | Description |
| --- | --- |
| `/qshopwebui status` | Shows listener, mode, and QuickShop connection status |
| `/qshopwebui reload` | Reloads the configuration and the web listener |
| `/qshopwebui port <port>` | Changes the web port |

Permission: `qshopwebui.admin` (default: OP).

## Download and Source

- [GitHub repository](https://github.com/ALingqing/QshopWebUI)
- [Live demo](http://202.189.10.108:20850/)
