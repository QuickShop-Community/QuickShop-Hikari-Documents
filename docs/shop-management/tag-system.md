---
slug: /modules/shops/tag-system
---
# Shop Tags

QuickShop-Hikari 6.3 introduces a player-specific **Shop Tag System** for organizing and tracking shops.

Tags allow each player to create their own view of the server's shops. A tag belongs to the player who applied it, so tagging a shop does not modify the shop for everyone else.

The system also powers QuickShop's built-in:

- Favorites
- Watch list
- Avoid list

## How Tags Work

Tags are stored using three pieces of information:

```text
Player → Shop → Tag
```

For example, two players can tag the same shop differently:

```text
Player A → Shop 125 → #diamonds
Player A → Shop 125 → #cheap
Player B → Shop 125 → #restock
```

Player A's tags do not appear in Player B's tag collection.

This makes tags useful for personal shop organization without requiring shop owners or administrators to define global categories.

## Custom Tags

Custom tags can be applied with:

```text
/qs tag <tag>
```

or explicitly:

```text
/qs tag add <tag>
```

By default, QuickShop applies the tag to the shop the player is looking at.

For example:

```text
/qs tag diamonds
```

QuickShop displays custom tags with a `#` prefix:

```text
#diamonds
```

You may also enter a custom tag with the hash:

```text
/qs tag #diamonds
```

QuickShop normalizes the tag before storing it.

## Tag Normalization

Before storing a tag, QuickShop normalizes it.

Normalization includes:

- trimming whitespace;
- converting the tag to lowercase;
- removing a leading `#`;
- validating allowed characters;
- enforcing the maximum tag length;
- preventing custom commands from using reserved system tags.

For example:

```text
#Diamonds
```

is stored as:

```text
diamonds
```

and displayed as:

```text
#diamonds
```

## Removing a Tag

Remove a specific tag from a shop with:

```text
/qs tag remove <tag>
```

Aliases for `remove` include:

```text
del
delete
```

For example:

```text
/qs tag remove diamonds
```

removes `#diamonds` from the selected shop for the player executing the command.

## Clearing Tags From a Shop

To remove all of your tags from a shop:

```text
/qs tag clear
```

This only removes tags applied by the player executing the command.

It does not remove tags that other players have applied to the same shop.

## Listing Tags on a Shop

Use:

```text
/qs tag list
```

to view your tags on a shop.

The list is paginated:

```text
/qs tag list <page>
```

Each displayed tag can be used to navigate the tag system and remove or inspect tags.

## Listing Your Tagged Shops

Use:

```text
/qs tag shops
```

to see shops that you have tagged.

You can specify a page:

```text
/qs tag shops <page>
```

QuickShop displays the number of tags you have associated with each shop.

## Finding Shops by Tag

Use:

```text
/qs tag tagged <tag>
```

to list shops that you have marked with a particular tag.

For example:

```text
/qs tag tagged diamonds
```

lists your shops tagged:

```text
#diamonds
```

Pagination is supported:

```text
/qs tag tagged diamonds 2
```

## Removing a Tag From All Your Shops

If you no longer want to use a particular custom tag, remove it from all of your tagged shops with:

```text
/qs tag purge <tag>
```

Aliases include:

```text
/qs tag removefromall <tag>
/qs tag untagall <tag>
```

For example:

```text
/qs tag purge diamonds
```

removes your `#diamonds` tag wherever you have applied it.

## Clearing All Tags

QuickShop also provides:

```text
/qs tag clearall
```

This clears the tag database globally and therefore requires a separate administrative permission.

:::danger
`/qs tag clearall` is not the same as `/qs tag clear`.

`clear` removes the current player's tags from one shop.

`clearall` removes all stored shop tags.
:::

## System Tags

QuickShop reserves several internal tags for built-in player features:

```text
@fav
@watch
@avoid
```

These tags should not normally be managed through `/qs tag`.

Instead, use their dedicated commands.

| System Tag | Feature | Command |
| --- | --- | --- |
| `@fav` | Favorite shops | `/qs favorite` |
| `@watch` | Watched shops | `/qs watch` |
| `@avoid` | Avoided shops | `/qs avoid` |

System tags use the same underlying tag infrastructure as custom tags.

## Favorites

To toggle a shop as a favorite:

```text
/qs favorite
```

Running the command again on the same shop removes it from your favorites.

To list favorite shops:

```text
/qs favorite list
```

or:

```text
/qs favorite list <page>
```

Internally, Favorites use the reserved:

```text
@fav
```

system tag.

## Watch List

To toggle a shop on your watch list:

```text
/qs watch
```

Run the command again to remove the shop.

List watched shops with:

```text
/qs watch list
```

or:

```text
/qs watch list <page>
```

Internally, the Watch system uses:

```text
@watch
```

## Avoid List

To toggle a shop on your avoid list:

```text
/qs avoid
```

Run the command again to remove it.

List avoided shops with:

```text
/qs avoid list
```

or:

```text
/qs avoid list <page>
```

Internally, the Avoid system uses:

```text
@avoid
```

## Command Summary

| Command | Description |
| --- | --- |
| `/qs tag <tag>` | Add a custom tag to a shop |
| `/qs tag add <tag>` | Add a custom tag |
| `/qs tag remove <tag>` | Remove a tag from a shop |
| `/qs tag clear` | Remove your tags from a shop |
| `/qs tag list [page]` | List your tags on a shop |
| `/qs tag shops [page]` | List shops you have tagged |
| `/qs tag tagged <tag> [page]` | List shops matching one of your tags |
| `/qs tag purge <tag>` | Remove one tag from all of your shops |
| `/qs tag clearall` | Globally clear all tags |
| `/qs favorite` | Toggle a favorite shop |
| `/qs favorite list [page]` | List favorite shops |
| `/qs watch` | Toggle a watched shop |
| `/qs watch list [page]` | List watched shops |
| `/qs avoid` | Toggle an avoided shop |
| `/qs avoid list [page]` | List avoided shops |

## Permissions

The tag commands use dedicated QuickShop permissions.

### Custom Tags

```text
quickshop.tag
quickshop.tag.add
quickshop.tag.delete
quickshop.tag.clear
quickshop.tag.clearall
quickshop.tag.list
quickshop.tag.shops
quickshop.tag.tagged
quickshop.tag.purge
```

The base:

```text
quickshop.tag
```

permission is checked before the `/qs tag` command can be used.

Individual operations then check their corresponding child permission.

### Favorites

```text
quickshop.favorite
quickshop.favorite.list
```

### Watch List

```text
quickshop.watch
quickshop.watch.list
```

### Avoid List

```text
quickshop.avoid
quickshop.avoid.list
```

## Persistence

Tags are persisted in QuickShop's database.

QuickShop also maintains an in-memory tag index for fast lookups.

This allows operations such as:

```text
Which tags has this player applied to this shop?
Which shops has this player tagged #diamonds?
How many tags has this player applied?
Does this player have @fav on this shop?
```

without repeatedly scanning every shop.

## Shop Deletion

Tags are associated with QuickShop's persistent shop IDs.

QuickShop's tag-management API includes operations for clearing all tags belonging to a shop, allowing tag records to be cleaned up when the associated shop is removed.

## Developer API

The tag system is exposed through the QuickShop API.

Get the active `TagManager` with:

```java
TagManager tags =
        QuickShopAPI.getInstance().getTagManager();
```

The manager supports operations including:

```java
addTag(...)
toggleTag(...)
removeTag(...)
hasTag(...)

tagsFilteredByShop(...)
shopsFilteredByTag(...)
shopsFilteredByTags(...)

removeAllShopTags(...)
removeAllShopTagsBy(...)
removeAllPlayerTags(...)
removeAllTags(...)

totalTags()
totalTagsByPlayer(...)
tagsCount(...)
```

Tags are player-specific, so most query and modification methods require the player's UUID.

## Adding a Tag Through the API

```java
QuickShopAPI api = QuickShopAPI.getInstance();

TagManager tags = api.getTagManager();

TaggingResult result = tags.addTag(
        shop.getShopId(),
        player.getUniqueId(),
        "diamonds"
);
```

For custom input, normalize the tag first:

```java
String tag = tags.service().normalizeTag(
        input,
        false
);

if(tag != null) {
    tags.addTag(
            shop.getShopId(),
            player.getUniqueId(),
            tag
    );
}
```

The second argument to `normalizeTag` controls whether reserved system tags are allowed.

For normal custom tags, use:

```java
false
```

## Querying a Shop's Tags

Retrieve a player's tags for one shop:

```java
Set<String> shopTags =
        tags.tagsFilteredByShop(
                player.getUniqueId(),
                shop.getShopId()
        );
```

## Querying Shops by Tag

Find the shops a player tagged with a specific value:

```java
List<Long> shops =
        tags.shopsFilteredByTag(
                player.getUniqueId(),
                "diamonds"
        );
```

The returned values are persistent QuickShop shop IDs.

Multiple tags can also be used as filter criteria:

```java
List<Long> shops =
        tags.shopsFilteredByTags(
                player.getUniqueId(),
                List.of("diamonds", "cheap")
        );
```

## Checking a Tag

```java
boolean favorite =
        tags.hasTag(
                shop.getShopId(),
                player.getUniqueId(),
                TagService.SYS_FAV
        );
```

## Toggling a System Tag

The high-level manager provides:

```java
tags.toggleTag(
        shop.getShopId(),
        player.getUniqueId(),
        TagService.SYS_FAV
);
```

QuickShop's Favorite, Watch, and Avoid commands use this behavior to toggle their reserved tags.

## TagService

The underlying:

```java
TagService
```

handles lower-level operations such as:

- tag normalization;
- tag display formatting;
- database persistence;
- command mapping;
- reserved system tags.

It is available from:

```java
tags.service();
```

Most addons should use `TagManager` for normal tag operations and use `TagService` when normalization or lower-level persistence behavior is specifically required.

## Summary

The Shop Tag System provides personal organization on top of QuickShop's persistent shops.

Players can create custom categories such as:

```text
#diamonds
#cheap
#restock
#spawn
```

while QuickShop's built-in Favorite, Watch, and Avoid features use the same system through reserved tags.

Because tags are stored per player and per shop, every player can organize the marketplace independently without changing the shop itself.
