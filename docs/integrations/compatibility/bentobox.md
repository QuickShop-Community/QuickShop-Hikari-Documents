---
slug: /compat-modules/bentobox
---
# BentoBox

:::info

Can't find where to download the JAR? [Click here](../faq/where-addons-compacts-at).

:::

This compatibility module adds [BentoBox](https://www.spigotmc.org/resources/73261) support.

## How does it work?

The compatibility module registers listeners for `IslandDeletedEvent`, `IslandResettedEvent`, `TeamLeaveEvent`, and `TeamKickEvent`. It removes shops when an island is deleted or a team member is kicked from that island.

It also allows the island owner to override all shops permissions on their island, so the island owner can modify or remove all of the shops on their island, even those not created by the island owner.
