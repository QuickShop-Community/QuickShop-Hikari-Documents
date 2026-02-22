# Taxation System

QuickShop includes a taxation system designed to give server owners more flexibility and control over shop-based income.

This system was revamped as of 6.2.0.11+

The new system allows you to:

- Apply tax to shop owners
- Apply tax to buyers
- Apply tax to both
- Use progressive tax brackets
- Customize tax behavior in configuration

This system replaces the legacy tax configuration.

---

## How It Works

During a transaction:

1. The shop price is calculated.
2. Tax is calculated based on your configuration.
3. Tax is deducted from the configured target(s).
4. Remaining funds are distributed normally.

You can configure:

- Flat percentage tax
- Progressive tax based on player balance
- Tax accounts
- Distribution rules

---

## Progressive Tax

The new system allows you to tax based on balance brackets.

Example concept:

- 0 – 10,000 balance → 1% tax
- 10,000 – 100,000 → 2% tax
- 100,000+ → 3% tax

This helps prevent extremely wealthy players from dominating the economy.

---

## Who Pays the Tax?

You can configure whether tax applies to:

- The shop owner
- The buyer
- Both

This gives you flexibility depending on your economy design.

---

## Configuration

All tax-related settings are located under the `shop-tax` section in `config.yml`.

After updating to 6.2.0.11+, review your tax configuration carefully, as the old tax system has been replaced.

---

## Why Use Tax?

The taxation system can help:

- Remove currency from circulation
- Fund server banks or towns
- Create sink mechanics
- Balance inflation
- Reward active players

---

## Summary

The new taxation system is:

- Flexible
- Configurable
- Balance-aware
- Designed for modern economy servers

Make sure to review your configuration after upgrading.