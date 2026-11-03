---
title: "Customize Shop Messages"
description: "Change the wording and presentation of QuickShop messages."
sidebar_label: "Customize Shop Messages"
slug: /guides/shop-customization/customize-shop-messages
---

# Customize Shop Messages

**Goal:** Change the wording and presentation of QuickShop messages.

**Before you begin:** File access to localization files and a test server.

> **Version note:** Features and configuration keys can differ by QuickShop-Hikari release. Verify the linked reference against the version installed on your server.

## Walkthrough

### 1. Choose a locale

Identify the language file your players use and keep a copy of the original.

### 2. Find the correct message key

Use the Customizing Messages reference and search for the exact existing key.

### 3. Edit text conservatively

Preserve placeholders, formatting tokens, and any special syntax used by that message.

### 4. Apply and test

Follow the documented localization reload process or restart your staging server.

### 5. Check multiple contexts

Verify messages for creation, buying, selling, insufficient funds, and permission denial.

## Verify the result

Customized messages render without missing placeholders or formatting artifacts.

## If something goes wrong

- Check the server console for QuickShop-Hikari and dependency errors.
- Repeat the workflow on a staging server with a non-operator test account.
- Compare your configuration and permissions with the linked reference.

## Related documentation

- [Read the feature reference](/docs/localization/customizing)

- [Installation and prerequisites](/docs/setup/install)

- [Frequently asked questions](/docs/faq/frequently-asked-questions)
