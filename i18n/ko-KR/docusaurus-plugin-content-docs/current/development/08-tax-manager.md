# Tax System (Developer Guide)

The QuickShop tax system allows server owners and developers to define how transaction taxes are calculated, distributed, and extended.

As of 6.2.0.11, the tax system has been fully rewritten to provide:

- A flexible TaxManager
- Pluggable TaxProvider support
- Progressive taxation
- Tax targeting (shop owner, interacting player, or both)
- Custom extension capability for third-party addons

This guide explains how to work with the tax system programmatically.

---

# Overview

The tax system is composed of three core components:

TaxManager  
Responsible for coordinating tax calculation and execution.

TaxProvider  
Defines how tax values are calculated.

TaxRates  
Represents calculated tax results for a transaction.

The system is designed to allow custom providers to be registered and used without modifying core logic.

---

# Getting the TaxManager

To work with the tax system, retrieve the TaxManager from the ShopManager.

```java
ShopManager manager = api.getShopManager();
TaxManager taxManager = manager.taxManager();
```

Once obtained, you can:

- Access current tax configuration
- Register custom tax providers
- Calculate tax values
- Hook into tax events

---

# How the Tax System Works

During a shop transaction:

1. A base price is determined.
2. The TaxManager selects the active TaxProvider.
3. The TaxProvider calculates applicable tax.
4. A TaxRates object is produced.
5. The system applies the tax to:

   - Shop owner
   - Interacting player
   - Or both (depending on configuration)

This architecture allows tax behavior to be modified without altering transaction logic.

---

# TaxProvider

A TaxProvider defines how tax values are calculated.

You may create your own provider to implement:

- Progressive tax brackets
- Flat percentage tax
- Conditional tax rules
- Region-based tax
- Rank-based tax
- Time-based tax

Example minimal provider:

```java
public class MyCustomTaxProvider implements TaxProvider {

    @Override
    public TaxRates calculateTax(TaxContext context) {

        double basePrice = context.getPrice();

        double taxAmount = basePrice * 0.05; // 5% flat tax

        return new TaxRates()
                .ownerTax(taxAmount)
                .buyerTax(0.0);
    }
}
```

Then register it:

```java
taxManager.provider(new MyCustomTaxProvider());
```

Once registered, your provider will be used for tax calculations.

---

# TaxRates

TaxRates represents the result of a tax calculation.

It typically contains:

- Owner tax amount
- Buyer tax amount
- Total tax impact
- Metadata (if applicable)

The transaction system will read from TaxRates and apply deductions accordingly.

---

# Progressive Taxation

The built-in system supports progressive tax structures.

This allows server administrators to tax based on:

- Player balance
- Shop owner balance
- Configured tax brackets

Example configuration concept:

- 0–10,000 balance → 1% tax
- 10,000–100,000 → 2% tax
- 100,000+ → 3% tax

Developers can extend or override this logic inside a custom TaxProvider.

---

# Targeting Tax

The new tax system allows taxes to be applied to:

- Shop owner
- Interacting player
- Both

This is controlled via configuration, but custom providers can override distribution logic by adjusting TaxRates output.

Example:

```java
return new TaxRates()
        .ownerTax(basePrice * 0.02)
        .buyerTax(basePrice * 0.01);
```

---

# Registering a Custom TaxProvider

To replace or extend tax logic:

```java
ShopManager manager = api.getShopManager();
TaxManager taxManager = manager.taxManager();

taxManager.provider(new MyCustomTaxProvider());
```

You may register only one primary provider at a time. If multiple providers are needed, implement internal delegation within your custom provider.

---

# Tax Events

The tax system integrates with the event system.

The modern event used is:

ShopEnhancedTaxEvent

This replaces legacy tax events and provides improved context, including:

- Transaction builder reference
- TaxRates object
- Modification capability before final execution

You can listen for the event and modify tax behavior dynamically:

```java
@EventHandler
public void onTax(ShopEnhancedTaxEvent event) {

    TaxRates rates = event.getTaxRates();

    // Example: Give VIP players reduced owner tax
    if (event.getOwner().hasPermission("vip.tax.discount")) {
        rates.ownerTax(rates.getOwnerTax() * 0.5);
    }
}
```

---

# Best Practices

Always keep tax calculations lightweight.

Avoid:

- Heavy database queries inside calculateTax
- Blocking network calls
- Long-running computations

If complex logic is required, pre-cache required data outside the tax execution path.

Ensure negative tax values are not returned unless intentional.

Always validate final amounts before applying modifications.

Respect configuration hierarchy unless intentionally overriding it.

---

# Example Full Implementation

```java
public class ExampleTaxAddon {

    public void register(QuickShopAPI api) {

        ShopManager manager = api.getShopManager();
        TaxManager taxManager = manager.taxManager();

        taxManager.provider(new MyCustomTaxProvider());
    }
}
```

---

# Conclusion

The new tax system is designed for:

- Flexibility
- Extensibility
- Clean separation of concerns
- Future expansion

By accessing:

```java
ShopManager manager = api.getShopManager();
TaxManager taxManager = manager.taxManager();
```

You gain full control over how QuickShop calculates and applies tax during transactions.