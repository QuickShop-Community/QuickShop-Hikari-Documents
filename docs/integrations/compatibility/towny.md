---
slug: /compat-modules/towny
---
# Towny

:::info

Can't find where to download the JAR? [Click here](../faq/where-addons-compacts-at).

:::

:::caution

Warning! This is a powerful and complex integration.  
Please read the configuration carefully before enabling advanced features.

:::

The Towny module integrates QuickShop with Towny’s town and nation systems.

It allows shops to:

- Belong to towns or nations
- Deposit money directly into Towny bank accounts
- Follow plot-based restrictions
- Respect Towny permissions
- Route taxes to town or nation accounts
- Automatically manage shops when plots or residents change

As of 6.2.0.11, this module is fully compatible with the new ShopType system and the revamped tax system.

---

## Commands

### `/quickshop town`

Switch a shop between:

- Regular shop
- Town shop

### `/quickshop nation`

Switch a shop between:

- Regular shop
- Nation shop

These commands convert the shop owner to a Towny-managed account.

---

## Town Shop

When converted to a Town Shop:

- The shop owner becomes a Town fake player account.
- Money is deposited into the Town’s bank account.
- The shop follows Towny plot permissions.

If Bank Mode is enabled:

- Prices can be locked or enforced.
- Extra percent profit can be added to the town bank.

Plot restrictions can limit which plots may create Town Shops.

---

## Nation Shop

When converted to a Nation Shop:

- The shop owner becomes a Nation fake player account.
- Transactions use the Nation bank account.
- Plot restrictions can apply.

If Bank Mode is enabled:

- Prices may be forced according to configured values.
- Extra percent profit may be applied.

---

## Shop Types Compatibility (6.2.0.11)

Town and Nation shops fully support the new ShopType system:

- SELLING
- BUYING
- FROZEN

Frozen shops inside towns behave normally under Towny control.

ShopType changes update properly through the new enhanced event system introduced in 6.2.0.11.

---

## Bank System

The Bank System allows Town or Nation economies to run through QuickShop.

```yaml
bank-mode:
  bank-plot-only: true
  enable: true
  extra-percent: 0.10
  item-list:
    COPPER_ORE: 0.01
    IRON_ORE: 0.05
    COAL_ORE: 0.10
    LAPIS_ORE: 0.25
    REDSTONE_ORE: 1.00
    GOLD_ORE: 5.00
    DIAMOND_ORE: 20.00
    EMERALD_ORE: 500.00
    DEEPSLATE_COPPER_ORE: 0.01
    DEEPSLATE_IRON_ORE: 0.05
    DEEPSLATE_COAL_ORE: 0.10
    DEEPSLATE_LAPIS_ORE: 0.25
    DEEPSLATE_REDSTONE_ORE: 1.00
    DEEPSLATE_GOLD_ORE: 5.00
    DEEPSLATE_DIAMOND_ORE: 20.00
    DEEPSLATE_EMERALD_ORE: 500.00
    ANCIENT_DEBRIS: 250.00
```

### How Bank Mode Works

* Shops only accept configured items.
* Money is deposited directly into town/nation bank.
* Extra percent acts as profit multiplier.
* Price locking prevents manual price modification.

---

## Taxes to Town (Updated for 6.2.x)

QuickShop now uses the new taxation system introduced in 6.2.x.

When enabled:

```yaml
taxes-to-town: true
```

Tax routing works as follows:

* If the shop belongs to a Town → taxes go to Town account.
* If the shop belongs to a Nation → taxes go to Nation account.
* Otherwise → taxes follow global QuickShop tax configuration.

This integrates cleanly with the new progressive tax system.

---

## Permission Override

Allow Mayors and Kings to automatically receive shop administrator permissions.

```yaml
allow-mayor-permission-override: true
allow-king-permission-override: true
```

When enabled:

* Mayor controls all shops in their town.
* King controls all shops in their nation.

---

## Owner Name Override

Display Town/Nation name instead of fake account name on shop signs.

```yaml
allow-owner-name-override: true
```

This improves visual clarity on signs.

---

## Delete Shops Bridge

Automatically remove shops when Towny changes occur.

```yaml
delete-shop-on-resident-leave: false
delete-shop-on-plot-clear: true
delete-shop-on-plot-unclaimed: true
```

This prevents:

* Ghost shops
* Orphaned town shops
* Broken economy entries

---

## Create / Trade Control

Control which conditions must be met for shop creation and trading.

```yaml
create:
  - SHOPTYPE
  - MODIFY

trade: [ ]
```

Available checks:

* OWN — Must own the plot
* MODIFY — Must have build permission
* SHOPTYPE — Must be on SHOP plot type

Priority is evaluated from top to bottom.

---

## Essentials Workaround

Due to differences between UUID-based systems and username-based systems (Essentials), a workaround exists.

```yaml
workaround-for-account-name: false
```

If EssentialsX is detected:

* This workaround is automatically enabled.
* It cannot currently be disabled.

This prevents account mismatch between Towny and QuickShop.

---

## 6.2.x Improvements Summary

The Towny module now:

* Fully supports the new ShopType system
* Integrates with the revamped TaxManager
* Uses the new enhanced event system
* Works with progressive taxation
* Handles thread-safe operations (Folia compatible)
* Properly syncs shop type changes to Town/Nation accounts

---

## Summary

The Towny module allows you to:

* Convert shops into Town or Nation shops
* Route profits to Towny bank accounts
* Enforce plot restrictions
* Control shop behavior via Towny permissions
* Integrate with the new 6.2.x taxation system

It is one of the most powerful integrations available for Towny economy servers.
