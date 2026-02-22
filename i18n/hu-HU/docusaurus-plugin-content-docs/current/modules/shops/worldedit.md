# WorldEdit & FAWE Support

QuickShop includes built-in protection and integration for WorldEdit and FastAsyncWorldEdit (FAWE).

As of 6.2.0.11, this is no longer a separate compatibility module — it is now built directly into QuickShop.

You do not need to download or install any additional compatibility plugins.

---

## What This Does

WorldEdit and FAWE allow administrators and builders to:

- Copy and paste regions
- Replace large areas of blocks
- Mass-delete regions
- Roll back areas
- Regenerate terrain

Without protection, these operations could:

- Create ghost shops
- Leave orphaned shop data in the database
- Duplicate shops unintentionally
- Delete containers without cleaning up shop data
- Cause inconsistencies between world and database

QuickShop now automatically detects and safely processes WorldEdit and FAWE operations.

---

## Built-In Behavior

When WorldEdit or FAWE modifies blocks:

- Shops removed via WorldEdit are properly deleted from the database.
- Shop data stays synchronized with world changes.
- Ghost shops are prevented.
- Mass block replacements will not leave broken shop entries behind.

This applies to:

- //set
- //replace
- //cut
- //paste
- //regen
- Region deletion
- Mass container removal

No configuration is required.

---

## FAWE Support

FastAsyncWorldEdit (FAWE) is fully supported.

Because FAWE processes edits asynchronously, QuickShop handles:

- Region-thread safe processing
- Async block updates
- Safe shop deletion during batch edits

You do not need to enable anything manually.

---

## Removing Shops with WorldEdit

If you delete containers (chests, barrels, etc.) using WorldEdit:

QuickShop will automatically:

- Detect the block removal
- Unregister the shop
- Clean the database entry
- Prevent ghost shops

You do not need to run `/qs cleanghost` after WorldEdit usage in normal circumstances.

---

## Copying and Pasting Shops

If you copy and paste regions that contain shops:

- Shop data will not duplicate incorrectly.
- Shop IDs remain consistent.
- Invalid pasted shops will not auto-register unless properly created.

This prevents accidental duplication exploits.

---

## Performance

WorldEdit and FAWE operations can modify thousands of blocks at once.

QuickShop processes these safely and efficiently:

- Batch-aware cleanup
- Thread-safe region access (especially on Folia)
- Minimal performance impact during mass edits

---

## Configuration

There are no specific WorldEdit configuration options in QuickShop.

Support is automatic and always enabled if WorldEdit or FAWE is detected.

If WorldEdit is not installed, no extra code is executed.

---

## Common Questions

### Do I need the old WorldEdit compatibility jar?

No.

As of 6.2.0.11, WorldEdit support is built-in and the separate compatibility module has been removed.

### Does this work with FAWE?

Yes. FAWE is fully supported.

### Will shops break if I use //set air?

No. Shops will be safely removed and cleaned up.

### Do I need to restart after installing WorldEdit?

No. QuickShop detects WorldEdit automatically on startup.

---

## Best Practices

Even though QuickShop safely handles WorldEdit operations, it is recommended to:

- Avoid copying shops intentionally unless required
- Use backups before large region edits
- Test large FAWE operations on staging servers when possible

---

## Summary

QuickShop’s built-in WorldEdit and FAWE integration ensures:

- Safe mass edits
- No ghost shops
- Automatic database cleanup
- Thread-safe processing
- No extra modules required

WorldEdit support is now a core feature of QuickShop.