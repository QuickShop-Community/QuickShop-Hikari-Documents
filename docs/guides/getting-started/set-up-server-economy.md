---
title: "Set Up a Server Economy"
description: "Connect QuickShop to an economy and verify transactions."
sidebar_label: "Set Up a Server Economy"
slug: /guides/getting-started/set-up-server-economy
---

# Set Up a Server Economy

**Goal:** Connect QuickShop to an economy and verify transactions.

**Before you begin:** A supported Paper server and permission to install plugins.

> **Version note:** Features and configuration keys can differ by QuickShop-Hikari release. Verify the linked reference against the version installed on your server.

## Walkthrough

### 1. Install the economy bridge

Install VaultUnlocked and GemsEconomy, following their official installation instructions. VaultUnlocked provides the economy bridge; GemsEconomy provides the economy. Do not install the original Vault alongside VaultUnlocked.

### 2. Install QuickShop

Place the primary QuickShop-Hikari jar in `plugins/` and restart the server.

### 3. Confirm startup

Inspect the console for plugin enable messages and errors; run `qs` from the console to verify that QuickShop responds.

### 4. Grant player access

If using LuckPerms, grant the documented baseline permission: `/lp group default permission set quickshop.player true`.

### 5. Perform a transaction

Create a small shop and test a purchase between two separate player accounts; check both balances.

## Verify the result

QuickShop loads without economy errors and test balances change by the expected amount.

## If something goes wrong

- Check the server console for QuickShop-Hikari and dependency errors.
- Repeat the workflow on a staging server with a non-operator test account.
- Compare your configuration and permissions with the linked reference.

## Related documentation

- [Read the feature reference](/docs/setup/install)

- [Installation and prerequisites](/docs/setup/install)

- [Frequently asked questions](/docs/faq/frequently-asked-questions)
