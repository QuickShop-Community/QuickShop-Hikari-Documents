---
title: "Configure Shop Permissions"
description: "Set up a safe baseline permission model for players and staff."
sidebar_label: "Configure Shop Permissions"
slug: /guides/getting-started/configure-shop-permissions
---

# Configure Shop Permissions

**Goal:** Set up a safe baseline permission model for players and staff.

**Before you begin:** LuckPerms or another compatible permission manager.

> **Version note:** Features and configuration keys can differ by QuickShop-Hikari release. Verify the linked reference against the version installed on your server.

## Walkthrough

### 1. Define roles

Decide which groups may create shops, manage shops, or use administrative features.

### 2. Grant the player baseline

For a typical LuckPerms setup, run `/lp group default permission set quickshop.player true`.

### 3. Review individual nodes

Consult the permissions reference rather than assuming a command or feature is available to all groups.

### 4. Test as a non-operator

Log in using an account without operator privileges and attempt normal shop creation and trading.

### 5. Test staff separately

Confirm administrative actions are denied to normal players and available only to the intended staff group.

## Verify the result

Players can trade normally without receiving administrative access.

## If something goes wrong

- Check the server console for QuickShop-Hikari and dependency errors.
- Repeat the workflow on a staging server with a non-operator test account.
- Compare your configuration and permissions with the linked reference.

## Related documentation

- [Read the feature reference](/docs/setup/permissions)

- [Installation and prerequisites](/docs/setup/install)

- [Frequently asked questions](/docs/faq/frequently-asked-questions)
