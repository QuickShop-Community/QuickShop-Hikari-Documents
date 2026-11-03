---
title: "Configure Shop Limits and Ranks"
description: "Give different player groups appropriate shop allowances."
sidebar_label: "Configure Shop Limits and Ranks"
slug: /guides/server-administration/configure-shop-limits-and-ranks
---

# Configure Shop Limits and Ranks

**Goal:** Give different player groups appropriate shop allowances.

**Before you begin:** A permissions manager and access to shop-limit documentation.

> **Version note:** Features and configuration keys can differ by QuickShop-Hikari release. Verify the linked reference against the version installed on your server.

## Walkthrough

### 1. Choose a tier model

Write down desired limits for default, trusted, and premium groups.

### 2. Review available controls

Consult Ranks, Permissions, and Shop Benefits to distinguish permissions from actual shop-limit configuration.

### 3. Apply on staging

Configure one tier at a time and avoid overlapping permission grants.

### 4. Test thresholds

Create shops until each limit is reached and confirm the expected denial or allowance.

### 5. Check downgrades

Decide what happens to existing shops if a player loses a rank.

## Verify the result

Each test group can create only the intended number or types of shops.

## If something goes wrong

- Check the server console for QuickShop-Hikari and dependency errors.
- Repeat the workflow on a staging server with a non-operator test account.
- Compare your configuration and permissions with the linked reference.

## Related documentation

- [Read the feature reference](/docs/modules/shops/ranks)

- [Installation and prerequisites](/docs/setup/install)

- [Frequently asked questions](/docs/faq/frequently-asked-questions)
