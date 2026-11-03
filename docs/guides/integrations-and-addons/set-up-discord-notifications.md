---
title: "Set Up Discord Notifications"
description: "Connect shop-related activity to Discord where supported by an addon."
sidebar_label: "Set Up Discord Notifications"
slug: /guides/integrations-and-addons/set-up-discord-notifications
---

# Set Up Discord Notifications

**Goal:** Connect shop-related activity to Discord where supported by an addon.

**Before you begin:** A Discord server, suitable bot/webhook permissions, and a compatible addon.

> **Version note:** Features and configuration keys can differ by QuickShop-Hikari release. Verify the linked reference against the version installed on your server.

## Walkthrough

### 1. Review addon capabilities

Read the DiscordSRV addon reference to determine which QuickShop events can be forwarded.

### 2. Install required plugins

Install the compatible versions and restart the staging server.

### 3. Configure destinations

Follow the addon’s documented channel and permission settings; keep tokens and webhook URLs private.

### 4. Trigger a test event

Create a shop or perform a transaction supported by the addon.

### 5. Tune message volume

Avoid publishing private data or sending noisy events to public channels.

## Verify the result

The expected notification reaches the intended channel without exposing credentials.

## If something goes wrong

- Check the server console for QuickShop-Hikari and dependency errors.
- Repeat the workflow on a staging server with a non-operator test account.
- Compare your configuration and permissions with the linked reference.

## Related documentation

- [Read the feature reference](/docs/addon/discordsrv)

- [Installation and prerequisites](/docs/setup/install)

- [Frequently asked questions](/docs/faq/frequently-asked-questions)
