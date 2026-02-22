# Packet System for Virtual Display Items

## Overview

The Packet System in this project is designed to manage the creation, handling, and transmission of packets that facilitate the display of virtual items in Minecraft. It abstracts the underlying networking complexities, allowing seamless integration with multiple versions of the game.

This documentation will guide developers through the components, implementation details, and usage of the Packet System.

---

## Key Components

### 1. **PacketHandler**

- **Purpose**: Manages packet handling and initialization logic.
- **Interface**: `PacketHandler<T>`
- **Key Methods**:
  - `Map<String, PacketFactory<?>> factories()`
    - Retrieves a map of supported `PacketFactory` instances keyed by game versions.
  - `void initialize()`
    - Initializes the packet handler.
  - `Optional<PacketFactory<?>> factory(String version)`
    - Retrieves a `PacketFactory` for a specific game version.

### 2. **PacketFactory**

- **Purpose**: Creates and sends specific packet types.
- **Interface**: `PacketFactory<T>`
- **Supported Packets**:
  - **Spawn Packet**:
    - Spawns a virtual item at a specified location. Typically created using `createSpawnPacket()`.
    - Example Use: Representing shop items visually.
  - **Metadata Packet**:
    - Updates an entity's metadata, such as appearance or name. Created using `createMetaDataPacket()`.
    - Example Use: Updating item display name or properties.
  - **Velocity Packet**:
    - Assigns motion or velocity to an entity. Created using `createVelocityPacket()`.
    - Example Use: Custom animations for virtual items.
  - **Destroy Packet**:
    - Removes the entity from the client view. Created using `createDestroyPacket()`.
    - Example Use: Unloading or removing a virtual display item.

Developers implementing custom `PacketFactory` should ensure these packets are correctly handled and optimized for performance.

### 3. **VirtualDisplayItemManager**

- **Purpose**: Oversees the lifecycle of virtual display items and integrates with packet handlers.
- **Key Features**:
  - Registers and initializes `PacketHandler` instances (e.g., `ProtocolLibHandler` and `PacketEventsHandler`).
  - Manages virtual display items mapped to chunks.
  - Provides thread-safe operations for adding and removing display items.

### 4. **VirtualDisplayItem**

- **Purpose**: Represents a virtual item displayed to players.
- **Key Features**:
  - Generates and caches packets for spawning, metadata, velocity, and destruction.
  - Manages packet senders for each player.
  - Handles spawn and removal operations dynamically.

### 5. **ProtocolLibHandler and PacketEventsHandler**

- **Purpose**: Provide implementations of `PacketHandler` using ProtocolLib and PacketEvents, respectively.
- **Differences**:
  - `ProtocolLibHandler` leverages ProtocolLib API.
  - `PacketEventsHandler` uses the PacketEvents library.

---

## Expanding the Protocol System

Developers looking to extend or customize the protocol system can follow these steps:

### Implementing a New PacketHandler

```java
/**
 * Custom implementation of a PacketHandler.
 * This should initialize and manage packet factories for different game versions.
 * 
 * @param <T> The internal API instance of the packet library being used.
 */
public class CustomPacketHandler implements PacketHandler<T> {
    
    private final Map<String, PacketFactory<?>> factories = new HashMap<>();
    
    @Override
    public Map<String, PacketFactory<?>> factories() {
        return factories;
    }

    @Override
    public String identifier() {
        return "customHandler";
    }

    @Override
    public String pluginName() {
        return "CustomPacketPlugin";
    }

    @Override
    public void initialize() {
        factories.put("1.22", new CustomPacketFactory());
    }
}
```

### Implementing a New PacketFactory

```java
/**
 * Custom implementation of a PacketFactory.
 * Provides methods to create and send packets for a specific game version.
 */
public class CustomPacketFactory implements PacketFactory<CustomPacket> {

    @Override
    public CustomPacket createSpawnPacket(int id, @NotNull Location displayLocation) {
        return new CustomPacket("spawn", id, displayLocation);
    }

    @Override
    public CustomPacket createMetaDataPacket(int id, @NotNull ItemStack itemStack) {
        return new CustomPacket("metadata", id, itemStack);
    }

    @Override
    public boolean sendPacket(@NotNull Player player, @NotNull CustomPacket packet) {
        player.sendMessage("Sending packet: " + packet.getType());
        return true;
    }
}
```

---

## Supported Game Versions

Packet factories are provided for specific game versions through two primary implementations:

- **ProtocolLib**:
  - Versions: 1.20.1 - 1.21.4
  - Factories: `PacketFactoryv1_20`, `PacketFactoryv1_21`
- **PacketEvents**:
  - Versions: 1.20.1 - 1.21.4
  - Factories: `PacketFactoryv1_20`, `PacketFactoryv1_21`

---

## Best Practices

1. Always unregister chunk listeners (`unregisterSendChunk`, `unregisterUnloadChunk`) during cleanup.
2. Use thread-safe methods in `VirtualDisplayItemManager` for modifying mappings.
3. Ensure that packet libraries (ProtocolLib, PacketEvents) are updated to the latest version.

---

## Resources

- **[ProtocolLib Documentation](https://github.com/dmulloy2/ProtocolLib)**
- **[PacketEvents Documentation](https://github.com/retrooper/packetevents)**

---

## Contact

For further assistance, please reach out to the development team or refer to the source code for detailed implementations.

