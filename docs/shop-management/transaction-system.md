---
slug: /modules/transaction-system
---
# Transaction System

QuickShop-Hikari includes a system that maintains transactional consistency and prevents errors from corrupting either party's data.

TL;DR If the transaction fails, QuickShop will roll back the money of both parties, restore the Inventory to the state before the transaction started, and reverse the transaction.

## How it works?

QuickShop-Hikari currently supports the Transaction System for two shop types.

## For Economy

QuickShop record the amounts of balance that deposit or withdraw, and re-withdraw and re-deposit back them when transaction failed.

## For Inventory

QuickShop will take a snapshot for both shop inventory and player inventory, and restore the snapshot them when transaction failed.
