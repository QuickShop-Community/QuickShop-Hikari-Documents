---
title: "Install and Configure Addons"
description: "Add optional QuickShop functionality safely."
sidebar_label: "Install and Configure Addons"
slug: /guides/integrations-and-addons/install-and-configure-addons
---

# Install and Configure Addons

**Goal:** Add optional QuickShop functionality safely.

**Before you begin:** A working QuickShop-Hikari installation and server backup.

> **Version note:** Features and configuration keys can differ by QuickShop-Hikari release. Verify the linked reference against the version installed on your server.

## Walkthrough

### 1. Choose an addon

Start with the Official Addons or Community Addons catalog.

### 2. Verify maintenance

Check the addon’s supported QuickShop version, dependencies, and release source.

### 3. Back up

Save plugin configuration and database backups before installing.

### 4. Install on staging

Place the addon jar in `plugins/` and restart the server.

### 5. Validate behavior

Read startup logs, test one feature, and check that existing shops still work.

## Verify the result

The addon enables without dependency errors and its intended feature works.

## If something goes wrong

- Check the server console for QuickShop-Hikari and dependency errors.
- Repeat the workflow on a staging server with a non-operator test account.
- Compare your configuration and permissions with the linked reference.

## Related documentation

- [Read the feature reference](/docs/category/integrations)

- [Installation and prerequisites](/docs/setup/install)

- [Frequently asked questions](/docs/faq/frequently-asked-questions)
