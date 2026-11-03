---
title: "Integrate with WorldGuard"
description: "Allow trading inside protected WorldGuard regions."
sidebar_label: "Integrate with WorldGuard"
slug: /guides/integrations-and-addons/integrate-with-worldguard
---

# Integrate with WorldGuard

**Goal:** Allow trading inside protected WorldGuard regions.

**Before you begin:** WorldGuard, WorldEdit, and compatible QuickShop-Hikari versions.

> **Version note:** Features and configuration keys can differ by QuickShop-Hikari release. Verify the linked reference against the version installed on your server.

## Walkthrough

### 1. Confirm compatibility

Read the WorldGuard compatibility page for your versions.

### 2. Create a protected test region

Place a shop in a region owned by a test player.

### 3. Apply documented flags

Use the WorldGuard integration reference for the specific region permissions needed for shop interaction.

### 4. Test owner and visitor

Verify that a visitor can buy but cannot break the container or alter the shop.

### 5. Test overlapping regions

Check priorities and flags where multiple regions overlap.

## Verify the result

Shop interactions work without weakening the intended region protection.

## If something goes wrong

- Check the server console for QuickShop-Hikari and dependency errors.
- Repeat the workflow on a staging server with a non-operator test account.
- Compare your configuration and permissions with the linked reference.

## Related documentation

- [Read the feature reference](/docs/compat-modules/worldguard)

- [Installation and prerequisites](/docs/setup/install)

- [Frequently asked questions](/docs/faq/frequently-asked-questions)
