---
title: "Create a Server Shop"
description: "Offer essential items through an admin-controlled store."
sidebar_label: "Create a Server Shop"
slug: /guides/economy-and-trading/create-server-shop
---

# Create a Server Shop

**Goal:** Offer essential items through an admin-controlled store.

**Before you begin:** Administrator access and an established economy.

> **Version note:** Features and configuration keys can differ by QuickShop-Hikari release. Verify the linked reference against the version installed on your server.

## Walkthrough

### 1. Choose goods and prices

Start with a small catalog and define price floors/ceilings to avoid distorting the player economy.

### 2. Create the shops

Set up ordinary shops in a clearly labeled server-owned area.

### 3. Enable unlimited mode

Look at each intended shop and use `/quickshop unlimited`.

### 4. Review ownership

If needed, configure `unlimited-shop-owner-change` before converting new shops.

### 5. Test as a regular player

Check buy and sell directions, item identity, and balance changes.

## Verify the result

The server shop remains available as designed and cannot be edited by unauthorized players.

## If something goes wrong

- Check the server console for QuickShop-Hikari and dependency errors.
- Repeat the workflow on a staging server with a non-operator test account.
- Compare your configuration and permissions with the linked reference.

## Related documentation

- [Read the feature reference](/docs/modules/shops/adminshop)

- [Installation and prerequisites](/docs/setup/install)

- [Frequently asked questions](/docs/faq/frequently-asked-questions)
