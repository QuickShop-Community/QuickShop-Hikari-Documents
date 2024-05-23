# AngelChest

:::info

Can't find where to download the JAR? [Click here](../faq/where-addons-compacts-at.md).

:::

This compatibility module adds [AngelChest](https://www.spigotmc.org/resources/88214) support.

## How it works?

Compatibility Module will register a listener to listen for IslandDeletedEvent, IslandResettedEvent, TeamLeaveEvent and TeamKickEvent calls, and will remove shops when an island gets deleted or a team member is kicked from that island.

It also allows the island owner to override all shops permissions on their island, so the island owner can modify or remove all of shops on their island, even those not created by island owner.
