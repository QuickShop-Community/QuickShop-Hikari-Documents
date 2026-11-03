---
title: "Protect Shops with Land Claims"
description: "Keep shop interactions functional inside protected regions."
sidebar_label: "Protect Shops with Land Claims"
slug: /guides/server-administration/protect-shops-with-land-claims
---

# Protect Shops with Land Claims

**Goal:** Keep shop interactions functional inside protected regions.

**Before you begin:** A supported claim or region plugin.

> **Version note:** Features and configuration keys can differ by QuickShop-Hikari release. Verify the linked reference against the version installed on your server.

## Walkthrough

### 1. Choose an integration

Find your protection plugin in Compatibility Modules and confirm the supported version.

### 2. Create a test region

Protect a small area containing a shop.

### 3. Set region flags or permissions

Use the integration documentation to permit trading while restricting container theft or destruction.

### 4. Test different roles

Have the owner, a member, and a visitor attempt purchasing and unauthorized editing.

### 5. Document exceptions

Record any plugin-specific overrides so future staff can reproduce the setup.

## Verify the result

Visitors can trade without gaining permission to destroy or steal from the shop.

## If something goes wrong

- Check the server console for QuickShop-Hikari and dependency errors.
- Repeat the workflow on a staging server with a non-operator test account.
- Compare your configuration and permissions with the linked reference.

## Related documentation

- [Read the feature reference](/docs/category/compatibility-modules)

- [Installation and prerequisites](/docs/setup/install)

- [Frequently asked questions](/docs/faq/frequently-asked-questions)
