# Transaction System

QuickShop-Hikari have a system to ensure the transactional consistency, Avoid errors in the transaction process that destroy the data consistency of both parties.

TL;DR If the transaction fails, QuickShop will roll back the money of both parties, restore the Inventory to the state before the transaction started, and reverse the transaction.

## How it works?

Currently, QuickShop-Hikari have two of types that support Transaction System.

## For Economy

QuickShop record the amounts of balance that deposit or withdraw, and re-withdraw and re-deposit back them when transaction failed.

## For Inventory

QuickShop will take a snapshot for both shop inventory and player inventory, and restore the snapshot them when transaction failed.
