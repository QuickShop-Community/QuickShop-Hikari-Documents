---
title: "Configure Shop Sounds and Particles"
description: "Add feedback for shop interactions while keeping effects subtle."
sidebar_label: "Configure Shop Sounds and Particles"
slug: /guides/shop-customization/configure-shop-sounds-and-particles
---

# Configure Shop Sounds and Particles

**Goal:** Add feedback for shop interactions while keeping effects subtle.

**Before you begin:** Access to QuickShop configuration and a staging server.

> **Version note:** Features and configuration keys can differ by QuickShop-Hikari release. Verify the linked reference against the version installed on your server.

## Walkthrough

### 1. Back up the configuration

Save the current effects settings before editing.

### 2. Review supported effects

Consult the Sounds & Effects reference for exact event names, sound identifiers, particle identifiers, and value formats.

### 3. Enable one effect

Start with a single shop interaction and a restrained effect.

### 4. Test several outcomes

Check successful purchase, failed purchase, shop creation, and shop removal where the configured triggers support them.

### 5. Check accessibility

Avoid overwhelming sounds, frequent particles, or effects that obscure gameplay.

## Verify the result

Only the intended events produce effects, without excessive noise or lag.

## If something goes wrong

- Check the server console for QuickShop-Hikari and dependency errors.
- Repeat the workflow on a staging server with a non-operator test account.
- Compare your configuration and permissions with the linked reference.

## Related documentation

- [Read the feature reference](/docs/modules/special-effect)

- [Installation and prerequisites](/docs/setup/install)

- [Frequently asked questions](/docs/faq/frequently-asked-questions)
