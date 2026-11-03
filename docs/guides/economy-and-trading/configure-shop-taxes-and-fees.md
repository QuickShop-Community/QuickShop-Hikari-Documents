---
title: "Configure Shop Taxes and Fees"
description: "Introduce trading costs and verify the resulting balances."
sidebar_label: "Configure Shop Taxes and Fees"
slug: /guides/economy-and-trading/configure-shop-taxes-and-fees
---

# Configure Shop Taxes and Fees

**Goal:** Introduce trading costs and verify the resulting balances.

**Before you begin:** A working economy and access to shop-related configuration.

> **Version note:** Features and configuration keys can differ by QuickShop-Hikari release. Verify the linked reference against the version installed on your server.

## Walkthrough

### 1. Decide the policy

Specify who pays fees, whether tax differs by shop type, and where proceeds should go.

### 2. Inspect supported settings

Read the Taxation System and Shop Fees references for the exact settings and available behavior.

### 3. Back up configuration

Save current values and document the intended change.

### 4. Test a simple purchase

Use an easy test price and compare buyer, seller, and any receiving account balances.

### 5. Check edge cases

Test a failed purchase, an admin shop, and an ordinary player shop.

## Verify the result

Observed balance changes match the configured fee and tax policy.

## If something goes wrong

- Check the server console for QuickShop-Hikari and dependency errors.
- Repeat the workflow on a staging server with a non-operator test account.
- Compare your configuration and permissions with the linked reference.

## Related documentation

- [Read the feature reference](/docs/modules/shops/taxes)

- [Installation and prerequisites](/docs/setup/install)

- [Frequently asked questions](/docs/faq/frequently-asked-questions)
