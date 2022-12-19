# BentoBox

This compatibility module added [BentoBox](https://www.spigotmc.org/resources/73261) supports.

## How it works?

Compatibility Module will register a listener to listen IslandDeletedEvent, IslandResettedEvent, TeamLeaveEvent and TeamKickEvent calls, and remove shops while island got deleted or team member kicked from that island.

In same time, we allow island owner override all shops permissions on their island, so island owner can modify or remove all of shops on their island even not created by island owner.
