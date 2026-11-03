---
title: "Create Your First Shop"
description: "Create a stocked selling shop and complete a test purchase."
sidebar_label: "Create Your First Shop"
slug: /guides/getting-started/create-your-first-shop
---

# Create Your First Shop

**Goal:** Create a stocked selling shop and complete a test purchase.

**Before you begin:** A running QuickShop-Hikari server, Vault economy, a balance for the test buyer, and shop permissions.

> **Version note:** Features and configuration keys can differ by QuickShop-Hikari release. Verify the linked reference against the version installed on your server.

## Walkthrough

### 1. Prepare the item

Place a chest or another supported container in a buildable location. Put the item you want to sell into it.

### 2. Create the shop

In Survival mode, left-click the container. When QuickShop requests a price, enter a test price such as `10` in chat.

### 3. Stock the container

Add enough copies of the item for at least one purchase.

### 4. Test with a second player

Have another player left-click the shop and follow the purchase prompt. Confirm that the buyer receives the item and the seller receives payment.

### 5. Try buying mode

Right-click the shop sign, open its control panel, and switch the shop mode. Verify that the behavior matches your intended transaction.

## Verify the result

The shop can be purchased from, inventory decreases, and the seller balance increases.

## If something goes wrong

- Check the server console for QuickShop-Hikari and dependency errors.
- Repeat the workflow on a staging server with a non-operator test account.
- Compare your configuration and permissions with the linked reference.

## Related documentation

- [Read the feature reference](/docs/modules/shops/shop-basic)

- [Installation and prerequisites](/docs/setup/install)

- [Frequently asked questions](/docs/faq/frequently-asked-questions)
