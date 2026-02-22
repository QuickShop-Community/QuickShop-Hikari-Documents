# Interaction System (Developer Guide)

The Interaction System allows developers to fully customize how players interact with shops.

As of 6.2.0.11, the system has been redesigned to be:

- Modular
- Extensible
- Thread-safe
- Fully customizable by third-party addons

This guide will walk you through:

1. What the Interaction System is
2. Getting the `InteractionManager`
3. Understanding `InteractionType`
4. Understanding `InteractionBehavior`
5. Registering custom interactions
6. Best practices

---

# Overview

The Interaction System is composed of three main components:

| Component             | Purpose                                                                                                                              |
| --------------------- | ------------------------------------------------------------------------------------------------------------------------------------ |
| `InteractionType`     | Describes **what kind of click happened** (standing, sneaking, left-click, sign, shopblock, etc.) |
| `InteractionBehavior` | Describes **what action should happen** when that type is triggered                                                                  |
| `InteractionManager`  | Central registry that manages interactions and behaviors                                                                             |

This separation allows developers to:

- Add new click types
- Add new behaviors
- Override existing ones
- Extend QuickShop without modifying core code

---

# Getting the InteractionManager

To begin registering custom interactions, you must retrieve the `InteractionManager` instance.

```java
InteractionManager manager = api.getInteractionManager();
```

If you are working directly with the plugin instance:

```java
InteractionManager manager = QuickShop.getInstance().getInteractionManager();
```

Once obtained, you can:

- Register new interaction types
- Register new behaviors
- Override existing behaviors

---

# Understanding InteractionType

`InteractionType` represents **how** a player interacted with a shop.

Examples include:

- `STANDING_LEFT_CLICK_SIGN`
- `STANDING_RIGHT_CLICK_SHOPBLOCK`
- `SNEAKING_LEFT_CLICK_CONTAINER`
- etc.

Each `InteractionType` defines:

- Player stance (standing/sneaking)
- Click type (left/right)
- Target (sign/shopblock/container)

InteractionTypes do NOT define behavior — they only define the trigger.

---

# Understanding InteractionBehavior

`InteractionBehavior` defines **what happens** when an interaction is triggered.

Examples of built-in behaviors:

- `TRADE_INTERACTION`
- `TRADE_UI`
- `CONTROL_PANEL`
- `CONTROL_PANEL_UI`
- `NONE`

A behavior:

- Executes logic
- May open GUIs
- May send chat panels
- May directly trade items
- Can cancel or modify flow

This separation makes it easy to reuse behaviors across multiple interaction types.

---

# Registering Custom Interactions

There are two things you can register:

- A custom `InteractionType`
- A custom `InteractionBehavior`

---

## Creating a Custom InteractionBehavior

Create a class implementing `InteractionBehavior`.

Example:

```java
public class MyTradeBehavior implements InteractionBehavior {

    @Override
    public String getKey() {
        return "MY_CUSTOM_TRADE";
    }

    @Override
    public void execute(InteractionClick click) {
        Player player = click.getPlayer();
        Shop shop = click.getShop();

        player.sendMessage("You triggered my custom interaction!");

        // Add your custom logic here
    }
}
```

Then register it:

```java
InteractionManager manager = api.getInteractionManager();
manager.behavior(new MyTradeBehavior());
```

Now your behavior is available for use.

---

## Creating a Custom InteractionType

You may also register custom interaction types if you want to introduce new trigger definitions.

Example:

```java
public class MyCustomInteraction implements InteractionType {

    @Override
    public String getKey() {
        return "STANDING_DOUBLE_CLICK_SIGN";
    }

    @Override
    public boolean matches(InteractionClick click) {
        // Define custom logic to detect this interaction
        return click.isStanding()
                && click.isSign()
                && click.isDoubleClick();
    }
}
```

Register it:

```java
manager.interaction(new MyCustomInteraction());
```

---

# Binding Types to Behaviors

The InteractionManager internally maps interaction types to behaviors based on configuration and registration order.

Once your behavior is registered:

- It can be referenced in `interaction.yml`
- Or attached programmatically

Example interaction.yml usage:

```yaml
STANDING_LEFT_CLICK_SIGN: MY_CUSTOM_TRADE
```

---

# The InteractionClick Object

When your behavior executes, you receive an `InteractionClick` object.

It provides:

- `getPlayer()`
- `getShop()`
- `getLocation()`
- `isSneaking()`
- `isSign()`
- `isShopBlock()`
- etc.

This gives full context for safe execution.

---

# Advanced: Overriding Built-in Behavior

If you register a behavior using the same key as an existing one, your behavior can override the default.

⚠️ Be careful when doing this — you are replacing core functionality.

---

# Best Practices

### Always Use Unique Keys

Avoid naming collisions:

```
MYPLUGIN_CUSTOM_BEHAVIOR
```

### Keep Behavior Lightweight

Do not block the main thread with:

- Heavy database calls
- File IO
- Network calls

Use async tasks if needed.

### Respect Permissions

Always validate:

```java
if (!player.hasPermission("myplugin.use")) {
    return;
}
```

### Avoid Hard Overrides Unless Necessary

Instead of replacing built-in behaviors, consider extending them.

---

# Example: Full Minimal Implementation

```java
public class ExampleAddon {

    public void register(QuickShopAPI api) {

        InteractionManager manager = api.getInteractionManager();

        manager.behavior(new MyTradeBehavior());
        manager.interaction(new MyCustomInteraction());
    }
}
```

---

# Conclusion

The Interaction System is designed to allow:

- Full extensibility
- Clean separation of triggers and actions
- Easy integration for third-party developers

By retrieving the `InteractionManager`:

```java
InteractionManager manager = api.getInteractionManager();
```

You gain full control over how shops respond to player actions.