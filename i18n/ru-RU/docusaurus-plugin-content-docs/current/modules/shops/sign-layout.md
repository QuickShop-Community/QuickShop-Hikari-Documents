# Sign Layout

QuickShop allows you to fully customize how shop signs are structured.

You can change:

- What appears on each line
- The order of information
- Layout per shop type
- Whether certain lines are blank

This gives you complete control over how shops look on your server.

---

## How Sign Layout Works

Shop signs have four lines.

Instead of being hardcoded, QuickShop uses a configurable layout system.

Each shop type can have its own layout:

- SELLING
- BUYING
- FROZEN

You define what each line displays using layout keys.

---

## Configuration Location

Sign layout is configured in `config.yml` under:

```yaml
layout:
```

Example default configuration:

```yaml
layout:

  BUYING:
    line1: "header"
    line2: "trading"
    line3: "item"
    line4: "price"

  SELLING:
    line1: "header"
    line2: "trading"
    line3: "item"
    line4: "price"

  FROZEN:
    line1: "header"
    line2: "trading"
    line3: "item"
    line4: "price"
```

---

## Available Layout Keys

Each line value refers to a built-in layout component.

Common layout keys include:

- `header` – The shop header line
- `trading` – Buy/Sell direction information
- `item` – Item name
- `price` – Shop price

These keys are automatically formatted using your language file and formatting settings.

---

## Leaving a Line Blank

To leave a line empty, use:

```yaml
line2: ""
```

This is useful if you want:

- Minimalist signs
- Cleaner layouts
- Custom spacing
- Decorative formatting

---

## Customizing Per Shop Type

Each shop type can have a different layout.

For example:

```yaml
layout:

  SELLING:
    line1: "header"
    line2: "item"
    line3: "price"
    line4: ""

  BUYING:
    line1: "header"
    line2: "price"
    line3: "item"
    line4: ""

  FROZEN:
    line1: "header"
    line2: ""
    line3: "item"
    line4: "Frozen"
```

This allows you to visually differentiate:

- Selling shops
- Buying shops
- Frozen shops

---

## Practical Examples

### Minimal Style

```yaml
layout:
  SELLING:
    line1: "item"
    line2: "price"
    line3: ""
    line4: ""
```

### Compact Economy Style

```yaml
layout:
  SELLING:
    line1: "header"
    line2: "price"
    line3: "item"
    line4: ""
```

### Large Clear Style

```yaml
layout:
  SELLING:
    line1: "header"
    line2: "trading"
    line3: "item"
    line4: "price"
```

---

## How Updates Affect Layout

When you change the layout:

- Existing shop signs will update automatically when refreshed.
- New shops will use the updated format immediately.

If needed, you can reload QuickShop to apply changes.

---

## Best Practices

- Keep important information visible (price and item).
- Avoid overly complex formatting.
- Test layout changes before deploying on large servers.
- Use different layouts for BUYING and SELLING to reduce confusion.

---

## Common Questions

### Can I add more than four lines?

No.
Minecraft signs are limited to four lines.

### Can I add colors?

Colors are controlled by your language file and formatting settings.

### Can I change layout without restarting?

Yes, but reloading or refreshing shops is recommended to ensure full update.

---

## Summary

The Sign Layout system allows you to:

- Fully customize shop sign appearance
- Create per-type layouts
- Simplify or expand shop information
- Improve clarity for players

All layout customization is handled inside `config.yml`.
