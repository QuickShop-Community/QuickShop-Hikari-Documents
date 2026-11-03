---
title: "Create an Admin Shop"
description: "Create a server-operated shop with unlimited stock or buying capacity."
sidebar_label: "Create an Admin Shop"
slug: /guides/getting-started/create-admin-shop
---

# Create an Admin Shop

**Goal:** Create a server-operated shop with unlimited stock or buying capacity.

**Before you begin:** Administrator access and an existing shop.

> **Version note:** Features and configuration keys can differ by QuickShop-Hikari release. Verify the linked reference against the version installed on your server.

## Walkthrough

### 1. Create a normal shop

Create a selling or buying shop using the regular chest interaction.

### 2. Target the shop

Look at the shop you intend to convert; verify its owner and price.

### 3. Toggle unlimited mode

Run `/quickshop unlimited` while looking at the shop.

### 4. Check owner behavior

If you want ownership transferred when converting, review `unlimited-shop-owner-change` and `unlimited-shop-owner-change-account` in `config.yml` before converting new shops.

### 5. Test the transaction

Have a non-admin player buy or sell a low-value item and confirm that the server economy is debited or credited as expected.

## Verify the result

The shop can trade beyond the physical container stock/capacity and pricing is correct.

## If something goes wrong

- Check the server console for QuickShop-Hikari and dependency errors.
- Repeat the workflow on a staging server with a non-operator test account.
- Compare your configuration and permissions with the linked reference.

## Related documentation

- [Read the feature reference](/docs/modules/shops/adminshop)

- [Installation and prerequisites](/docs/setup/install)

- [Frequently asked questions](/docs/faq/frequently-asked-questions)
