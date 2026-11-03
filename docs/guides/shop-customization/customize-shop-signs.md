---
title: "Customize Shop Signs"
description: "Improve readability and consistency of shop signage."
sidebar_label: "Customize Shop Signs"
slug: /guides/shop-customization/customize-shop-signs
---

# Customize Shop Signs

**Goal:** Improve readability and consistency of shop signage.

**Before you begin:** An existing shop and permission to modify it.

> **Version note:** Features and configuration keys can differ by QuickShop-Hikari release. Verify the linked reference against the version installed on your server.

## Walkthrough

### 1. Inspect defaults

Create a test shop and record its current sign layout and item display.

### 2. Read layout options

Open the Sign Layout and Sign Material reference pages and identify the supported options for your installed version.

### 3. Apply one change

Change one documented layout or material option at a time; back up the relevant configuration first.

### 4. Reload safely

Use the documented reload method or restart the test server; avoid reloading all Bukkit plugins with unsupported tools.

### 5. Compare results

Check long item names, buy/sell labels, price formatting, and visibility at a distance.

## Verify the result

The shop sign is legible and displays the correct item, price, and trade direction.

## If something goes wrong

- Check the server console for QuickShop-Hikari and dependency errors.
- Repeat the workflow on a staging server with a non-operator test account.
- Compare your configuration and permissions with the linked reference.

## Related documentation

- [Read the feature reference](/docs/modules/shops/sign-layout)

- [Installation and prerequisites](/docs/setup/install)

- [Frequently asked questions](/docs/faq/frequently-asked-questions)
