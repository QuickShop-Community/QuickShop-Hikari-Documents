# Shop Layout Provider (Developer Guide)

The Shop Layout Provider system allows developers to customize how shop signs are structured and rendered.

As of 6.2.0.11, shop layouts are no longer hardcoded. Instead, they are controlled through the `IShopLayoutProvider` interface, which allows:

- Custom sign line ordering
- Per-shop-type layouts (BUYING, SELLING, FROZEN, or custom types)
- Dynamic layout resolution
- Complete replacement of the default layout system

This guide explains how to access, override, and implement a custom layout provider.

---

# Overview

The layout provider controls how shop sign lines are arranged.

Instead of hardcoding:

Line 1 → Header  
Line 2 → Trading info  
Line 3 → Item  
Line 4 → Price

The system now allows full customization through:

- Config-based layout definitions
- Custom `IShopLayoutProvider` implementations
- Runtime overrides

The default implementation is `SimpleShopLayoutProvider`.

---

# Accessing the Layout Provider

To retrieve the current layout provider:

```java
ShopManager manager = api.getShopManager();
IShopLayoutProvider provider = manager.shopLayoutProvider();
```

To replace the layout provider with a custom one:

```java
ShopManager manager = api.getShopManager();
manager.shopLayoutProvider(new MyCustomLayoutProvider());
```

Once replaced, your implementation will control how shop layouts are generated.

---

# Understanding IShopLayoutProvider

`IShopLayoutProvider` defines how layout data is retrieved and resolved.

It is responsible for:

- Providing layout configuration per shop type
- Determining which layout to use
- Supplying formatted line keys
- Allowing future extensibility

The default implementation reads layout definitions from configuration and applies them based on shop type.

---

# Default Layout Example

The default configuration-based layout looks like this:

```yaml
layout:

  BUYING:
    line1: "header"
    line2: "trading"
    line3: "item"
    line4: "price"

  FROZEN:
    line1: "header"
    line2: "trading"
    line3: "item"
    line4: "price"

  SELLING:
    line1: "header"
    line2: "trading"
    line3: "item"
    line4: "price"
```

Each line maps to a layout component key.

An empty string (`""`) leaves that line blank.

The layout provider resolves these keys into actual sign content.

---

# Creating a Custom Layout Provider

To override the default behavior, implement `IShopLayoutProvider`.

Example minimal implementation:

```java
public class MyCustomLayoutProvider implements IShopLayoutProvider {

    @Override
    public ShopLayout provideLayout(Shop shop) {

        ShopLayout layout = new ShopLayout();

        layout.setLine(1, "Custom Header");
        layout.setLine(2, "Owner: " + shop.getOwnerName());
        layout.setLine(3, shop.getItem().getType().name());
        layout.setLine(4, "$" + shop.getPrice());

        return layout;
    }
}
```

Then register it:

```java
ShopManager manager = api.getShopManager();
manager.shopLayoutProvider(new MyCustomLayoutProvider());
```

Your layout will now control all shop sign formatting.

---

# Per-Type Layout Control

Because the system no longer depends on the legacy ShopType enum, layouts can support:

- Built-in types (BUYING, SELLING, FROZEN)
- Custom shop types
- Addon-defined shop types

Your provider can determine layout logic dynamically:

```java
@Override
public ShopLayout provideLayout(Shop shop) {

    if (shop.getShopType().key().equals("FROZEN")) {
        return frozenLayout(shop);
    }

    return defaultLayout(shop);
}
```

This allows conditional formatting, localization adjustments, or special event styling.

---

# Advanced Customization

A custom layout provider can:

- Pull data from external plugins
- Inject dynamic placeholders
- Modify layout per player
- Apply formatting logic
- Override color schemes
- Apply region-based formatting
- Implement animated sign systems

Because the layout provider is resolved at runtime, you can compute layouts dynamically instead of reading static config.

---

# Replacing vs Extending the Default Provider

You have two options:

Replace entirely:

```java
manager.shopLayoutProvider(new MyCustomLayoutProvider());
```

Or extend the default implementation:

```java
public class ExtendedLayoutProvider extends SimpleShopLayoutProvider {

    @Override
    public ShopLayout provideLayout(Shop shop) {
        ShopLayout base = super.provideLayout(shop);

        base.setLine(1, "[Extended] " + base.getLine(1));

        return base;
    }
}
```

Extending is safer if you only want to modify small portions.

---

# Best Practices

Keep layout generation lightweight.

Avoid:

- Heavy database queries
- Blocking IO
- Complex network calls

Layout generation runs during shop updates and sign refresh events.

Always handle null values safely.

Ensure layout line count does not exceed sign limits.

Avoid hardcoding shop type names unless necessary.

If your layout supports custom shop types, validate their keys properly.

---

# Example Full Registration

```java
public class LayoutAddon {

    public void register(QuickShopAPI api) {

        ShopManager manager = api.getShopManager();

        manager.shopLayoutProvider(new MyCustomLayoutProvider());
    }
}
```

---

# Conclusion

The Shop Layout Provider system allows complete control over shop sign structure.

By accessing:

```java
ShopManager manager = api.getShopManager();
```

And setting:

```java
manager.shopLayoutProvider(new MyCustomLayoutProvider());
```

You can redefine how every shop is displayed on the server.

This system was designed to support:

- Extensibility
- Custom shop types
- Localization
- Dynamic formatting
- Future expansion