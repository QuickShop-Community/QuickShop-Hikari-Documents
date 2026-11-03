---
slug: /development/09-layout-provider
---
# Shop Layout Provider

QuickShop-Hikari's shop layout system is exposed through `IShopLayoutProvider`.

In QuickShop-Hikari 6.3, the layout provider is built around the **RenderComponent** system rather than the older individual `renderHeader`, `renderTrading`, `renderItem`, and `renderPrice` methods.

The active provider can be accessed through `ShopManager`:

```java
QuickShopAPI api = QuickShopAPI.getInstance();
ShopManager manager = api.getShopManager();

IShopLayoutProvider provider = manager.shopLayoutProvider();
```

Required imports:

```java
import com.ghostchu.quickshop.api.QuickShopAPI;
import com.ghostchu.quickshop.api.shop.IShopLayoutProvider;
import com.ghostchu.quickshop.api.shop.ShopManager;
```

## Replacing the Layout Provider

You can replace QuickShop's active provider with your own implementation:

```java
manager.shopLayoutProvider(customProvider);
```

:::warning
The layout provider controls QuickShop's shop-sign rendering pipeline.

Replacing it affects every shop that uses the provider, so custom implementations should preserve the expected four-line layout behavior unless intentionally replacing it.
:::

## IShopLayoutProvider

The current interface includes the following primary APIs:

```java
List<ItemComponent> itemComponents();

List<RenderComponent> renderComponents();

LinkedList<String> layoutTemplate(Shop shop);

CompletableFuture<SignRenderSnapshot> createSignSnapshot(
        Shop shop,
        ProxiedLocale locale
);

LinkedList<Component> render(
        Shop shop,
        ProxiedLocale locale
);
```

It also provides helpers for separating renderers:

```java
provider.fullLineRenderComponents();
provider.inlineRenderComponents();
```

## Layout Templates

A layout template is a `LinkedList<String>` containing the four configured shop-sign lines.

QuickShop's default provider resolves those lines from:

```text
shop.layout.<IDENTIFIER>.line1
shop.layout.<IDENTIFIER>.line2
shop.layout.<IDENTIFIER>.line3
shop.layout.<IDENTIFIER>.line4
```

The identifier normally comes from the shop type:

```java
shop.shopType().identifier()
```

If the current `ShopState` overrides the shop-type text, the state identifier is used instead:

```java
shop.shopState().identifier()
```

The built-in fallback layout is:

```text
header
trading
item
price
```

A custom provider can override `layoutTemplate(Shop)` when it needs to supply templates dynamically.

Example:

```java
@Override
public LinkedList<String> layoutTemplate(final Shop shop) {

    LinkedList<String> layout = new LinkedList<>();

    layout.add("<owner>");
    layout.add("<item_name>");
    layout.add("<amount_auto>");
    layout.add("<price_amount>");

    return layout;
}
```

The strings returned by `layoutTemplate()` are subsequently processed by the RenderComponent pipeline.

## RenderComponents

A `RenderComponent` is responsible for producing one part of a shop layout.

The interface is:

```java
public interface RenderComponent {

    String placeholder();

    boolean fullLine();

    boolean supportsSnapshot();

    Component renderSnapshot(
            SignRenderSnapshot snapshot,
            ProxiedLocale locale
    );

    Component render(
            Shop shop,
            ItemStack item,
            ProxiedLocale locale
    );
}
```

`RenderComponent` also provides the default applicability check:

```java
default boolean appliesTo(String line) {
    return line.contains(placeholder());
}
```

You can override `appliesTo(...)` when a component needs more precise matching behavior.

## Full-Line RenderComponents

A component whose:

```java
fullLine()
```

returns `true` replaces the entire layout line.

When QuickShop finds an applicable full-line component:

1. that component renders the line;
2. no additional render components run for that line;
3. rendering continues with the next line.

QuickShop's built-in full-line components are:

```text
header
item
level
price
trading
```

These correspond to the traditional QuickShop sign layout behavior.

## Inline RenderComponents

A component whose:

```java
fullLine()
```

returns `false` is treated as an inline renderer.

For inline lines, QuickShop first parses the layout text through MiniMessage:

```java
MiniMessage.miniMessage().deserialize(line);
```

It then replaces each matching component placeholder with the component's rendered Adventure `Component`.

For example:

```text
Owner: <owner>
```

may be parsed as normal MiniMessage text and then have `<owner>` replaced by the owner renderer.

Built-in inline components include:

```text
<amount>
<item_name>
<item_level>
<owner>
<price_alone>
<price_amount>
<status>
<stock>
<type>
```

The conditional `<amount_auto>` component is also processed through the inline pipeline.

## Conditional RenderComponents

A component can implement:

```java
ConditionalRenderComponent
```

in addition to `RenderComponent`.

This adds:

```java
boolean isFullLine(Shop shop);

boolean isFullLine(SignRenderSnapshot snapshot);
```

A conditional component normally participates in the inline rendering pass, but it can dynamically decide that it should replace the entire line for the current shop or snapshot.

When that happens, QuickShop renders the conditional component directly and stops processing the remaining inline components for that line.

This behavior is used by the built-in:

```text
<amount_auto>
```

component.

## Registering a Custom RenderComponent

The provider exposes its current renderer list through:

```java
List<RenderComponent> renderers =
        provider.renderComponents();
```

A custom component can be added to that list:

```java
provider.renderComponents().add(
        new MyRenderComponent()
);
```

For example:

```java
public final class ServerNameRenderComponent
        implements RenderComponent {

    @Override
    public String placeholder() {
        return "<server_name>";
    }

    @Override
    public boolean fullLine() {
        return false;
    }

    @Override
    public boolean supportsSnapshot() {
        return true;
    }

    @Override
    public Component renderSnapshot(
            final SignRenderSnapshot snapshot,
            final ProxiedLocale locale) {

        return Component.text("Survival");
    }

    @Override
    public Component render(
            final Shop shop,
            final ItemStack item,
            final ProxiedLocale locale) {

        return Component.text("Survival");
    }
}
```

Register it with:

```java
IShopLayoutProvider provider =
        api.getShopManager().shopLayoutProvider();

provider.renderComponents().add(
        new ServerNameRenderComponent()
);
```

The placeholder can then be used in a layout:

```yaml
shop:
  layout:
    SELLING:
      line1: "<server_name>"
      line2: "<item_name>"
      line3: "<amount_auto>"
      line4: "<price_amount>"
```

## Snapshot Rendering

QuickShop supports rendering from a `SignRenderSnapshot`.

Create one with:

```java
CompletableFuture<SignRenderSnapshot> future =
        provider.createSignSnapshot(shop, locale);
```

The default provider asynchronously retrieves information such as inventory availability and remaining stock before building the snapshot.

You can then render it with:

```java
List<Component> lines =
        provider.renderSnapshot(snapshot, locale);
```

Snapshot rendering is particularly useful when the rendering process should not require direct access to the live shop state after the snapshot has been created.

## supportsSnapshot()

Every `RenderComponent` must declare whether it supports snapshot rendering:

```java
boolean supportsSnapshot();
```

When QuickShop renders a `SignRenderSnapshot`, render components for which this returns `false` are skipped.

If your custom component can derive all required information from `SignRenderSnapshot`, return:

```java
true
```

If it requires live shop data that is not present in the snapshot, return:

```java
false
```

:::note
A component that does not support snapshots may render correctly through `render(Shop, ...)` while being absent from snapshot-based rendering.
:::

## Rendering a Live Shop

The provider can render a shop directly:

```java
LinkedList<Component> lines =
        provider.render(shop, locale);
```

The default rendering process is:

1. obtain the shop's four-line template;
2. skip blank lines by returning `Component.empty()`;
3. look for an applicable full-line renderer;
4. if none applies, parse the line using MiniMessage;
5. process inline and conditional RenderComponents;
6. return four rendered Adventure components.

## Blank Lines

A blank template line is rendered as:

```java
Component.empty();
```

For example:

```yaml
line4: ""
```

is a valid layout.

## MiniMessage

Non-full-line templates are parsed with Adventure MiniMessage before inline placeholder replacement.

This means a custom inline layout can contain MiniMessage formatting:

```yaml
line1: "<gold>Owner:</gold> <owner>"
```

Your `RenderComponent` should return an Adventure:

```java
Component
```

rather than formatting output with legacy color codes.

## Extending SimpleShopLayoutProvider

QuickShop's built-in implementation is:

```java
SimpleShopLayoutProvider
```

It already provides:

- the standard layout-template lookup;
- built-in RenderComponent registration;
- live-shop rendering;
- snapshot creation;
- snapshot rendering support;
- item-level rendering logic.

If your addon runs against the Bukkit implementation module and intentionally depends on QuickShop internals, you can extend it:

```java
public class CustomLayoutProvider
        extends SimpleShopLayoutProvider {

    public CustomLayoutProvider(QuickShop plugin) {
        super(plugin);

        renderComponents().add(
                new ServerNameRenderComponent()
        );
    }
}
```

:::warning
`SimpleShopLayoutProvider` belongs to the QuickShop Bukkit implementation rather than the `quickshop-api` module.

For addons that want to remain dependent only on the public API, implement `IShopLayoutProvider` or work with the active provider instead of extending implementation classes.
:::

## ItemComponents

`IShopLayoutProvider` also retains:

```java
List<ItemComponent> itemComponents();
```

This is separate from the 6.3 `RenderComponent` list.

New sign or Text Display rendering extensions should generally use `RenderComponent` unless you specifically need the older item-component functionality.

## Deprecated Individual Render Methods

QuickShop-Hikari 6.3 deprecates the old individual rendering methods:

```java
renderHeader(...)
renderTrading(...)
renderItem(...)
renderPrice(...)
renderLevels(...)

renderHeaderSnapshot(...)
renderTradingSnapshot(...)
renderPriceSnapshot(...)
```

They are marked for removal in favor of RenderComponents.

Do not build new addons around these methods.

Instead, either:

```java
provider.render(shop, locale);
```

or implement/register a:

```java
RenderComponent
```

## Replacing vs Extending the Provider

If you only need an additional placeholder, replacing the entire provider is unnecessary.

Prefer:

```java
manager.shopLayoutProvider()
       .renderComponents()
       .add(new MyRenderComponent());
```

when possible.

Replace the provider:

```java
manager.shopLayoutProvider(customProvider);
```

only when you need control over behavior such as:

- template selection;
- snapshot creation;
- complete rendering flow;
- custom component storage;
- fundamentally different layout rules.

This minimizes compatibility problems with future QuickShop rendering changes.

## Text Displays

The RenderComponent architecture is shared by QuickShop's sign and Text Display rendering systems.

That means custom RenderComponents may also affect rendering contexts that use the same layout provider.

:::note
QuickShop's Text Display feature currently requires:

```yaml
shop:
  display-type: 3
```

See the Text Display documentation for its configuration and supported behavior.
:::

## Performance

RenderComponents may run whenever QuickShop needs to refresh or generate shop display text.

Keep rendering code lightweight.

Avoid blocking operations such as:

```text
database queries
network calls
file reads
long-running calculations
```

inside:

```java
render(...)
```

or:

```java
renderSnapshot(...)
```

If external information is required, cache it ahead of time whenever possible.

## Summary

The QuickShop-Hikari 6.3 layout API is centered around:

```java
IShopLayoutProvider
RenderComponent
ConditionalRenderComponent
SignRenderSnapshot
```

For most extensions, the simplest approach is:

```java
IShopLayoutProvider provider =
        QuickShopAPI.getInstance()
                    .getShopManager()
                    .shopLayoutProvider();

provider.renderComponents()
        .add(new MyRenderComponent());
```

Use a full custom `IShopLayoutProvider` only when you need to replace QuickShop's template or rendering pipeline itself.
