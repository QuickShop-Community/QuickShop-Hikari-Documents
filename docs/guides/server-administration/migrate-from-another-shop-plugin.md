---
title: "Migrate from Another Shop Plugin"
description: "Plan a safe migration with a rollback path."
sidebar_label: "Migrate from Another Shop Plugin"
slug: /guides/server-administration/migrate-from-another-shop-plugin
---

# Migrate from Another Shop Plugin

**Goal:** Plan a safe migration with a rollback path.

**Before you begin:** A full server backup and a staging environment.

> **Version note:** Features and configuration keys can differ by QuickShop-Hikari release. Verify the linked reference against the version installed on your server.

## Walkthrough

### 1. Inventory the current setup

Record existing shop counts, economies, worlds, databases, and plugin versions.

### 2. Find a supported migration path

Check the relevant migration addon or compatibility documentation; do not assume all source plugins can be imported.

### 3. Back up everything

Back up worlds, plugin folders, and databases, and test restoring the backups.

### 4. Test on a clone

Run the migration on a staging server and compare shop counts, owners, prices, and stock.

### 5. Schedule production cutover

Freeze shop changes, migrate during downtime, validate, and keep a clear rollback procedure.

## Verify the result

The migrated shops have the expected owners, items, prices, and balances; rollback is possible.

## If something goes wrong

- Check the server console for QuickShop-Hikari and dependency errors.
- Repeat the workflow on a staging server with a non-operator test account.
- Compare your configuration and permissions with the linked reference.

## Related documentation

- [Read the feature reference](/docs/category/official-addons)

- [Installation and prerequisites](/docs/setup/install)

- [Frequently asked questions](/docs/faq/frequently-asked-questions)
