---
title: "Create Floating Item Displays"
description: "Configure visual shop displays without sacrificing performance."
sidebar_label: "Create Floating Item Displays"
slug: /guides/shop-customization/create-floating-item-displays
---

# Create Floating Item Displays

**Goal:** Configure visual shop displays without sacrificing performance.

**Before you begin:** A functioning shop; optional ProtocolLib or PacketEvents depending on features.

> **Version note:** Features and configuration keys can differ by QuickShop-Hikari release. Verify the linked reference against the version installed on your server.

## Walkthrough

### 1. Install the display dependency

Use a supported protocol library when the display feature requires one.

### 2. Choose the protocol implementation

If both libraries are installed and you prefer PacketEvents, the installation reference documents `shop.display-protocol: 'packetevents'`.

### 3. Read display settings

Consult Shop Display System and Text Displays for the available rendering options.

### 4. Enable on a test shop

Configure a single shop before enabling displays across the marketplace.

### 5. Measure impact

Walk through a dense shop area with multiple clients and monitor server performance.

## Verify the result

The display appears correctly and disappears or updates when the shop changes.

## If something goes wrong

- Check the server console for QuickShop-Hikari and dependency errors.
- Repeat the workflow on a staging server with a non-operator test account.
- Compare your configuration and permissions with the linked reference.

## Related documentation

- [Read the feature reference](/docs/modules/shops/display-system)

- [Installation and prerequisites](/docs/setup/install)

- [Frequently asked questions](/docs/faq/frequently-asked-questions)
