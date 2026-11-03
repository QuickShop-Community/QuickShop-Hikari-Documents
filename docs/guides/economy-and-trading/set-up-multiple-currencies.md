---
title: "Set Up Multiple Currencies"
description: "Evaluate and configure currency support for different markets."
sidebar_label: "Set Up Multiple Currencies"
slug: /guides/economy-and-trading/set-up-multiple-currencies
---

# Set Up Multiple Currencies

**Goal:** Evaluate and configure currency support for different markets.

**Before you begin:** An economy provider that supports your intended currency model.

> **Version note:** Features and configuration keys can differ by QuickShop-Hikari release. Verify the linked reference against the version installed on your server.

## Walkthrough

### 1. Check provider compatibility

Confirm that your economy provider exposes the required currency capabilities.

### 2. Review QuickShop support

Read the Multi Currency documentation for the installed QuickShop-Hikari version.

### 3. Define a test market

Choose a small group of shops to use the alternate currency.

### 4. Configure using documented options

Avoid guessing currency names or configuration keys; use values documented by your economy provider and QuickShop.

### 5. Test conversion and display

Check transaction amounts, balances, price formatting, and failure cases.

## Verify the result

Purchases debit and credit the expected currency and show an unambiguous price.

## If something goes wrong

- Check the server console for QuickShop-Hikari and dependency errors.
- Repeat the workflow on a staging server with a non-operator test account.
- Compare your configuration and permissions with the linked reference.

## Related documentation

- [Read the feature reference](/docs/modules/multi-currency)

- [Installation and prerequisites](/docs/setup/install)

- [Frequently asked questions](/docs/faq/frequently-asked-questions)
