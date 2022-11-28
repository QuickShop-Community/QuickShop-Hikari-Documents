# Shop Purger

Shop Purger allow server administrator purge the shops if the player in idle or banned.

## Configuration

```yaml
# Shops purger
# Will purge all shops that owner offline x days while use command or server startup
purge:
  enabled: false
  #Whether to purge shops automatically when server started.
  at-server-startup: true
  #Whether to export a backup file for recovery before each purge.
  backup: true
  # The days that player offline before shop got purged.
  days: 60
  # At this moment, QuickShop only compatible with Vanilla banning system (e.g Essentials using).
  banned: true
  # At this moment, QuickShop only compatible with Vanilla OP system, LuckPerms may need add in future.
  skip-op: true
  # When shop purged by server, should we return the create-fee back to players?
  return-create-fee: true
```

Ban auto purge currently only supportd Vanilla banning system, it doesn't support 3rd-party ban management like Litebans, AdvancedBan.
