# 0x01 Getting Started

Hello! Welcome to QuickShop-Hikari's developer community!

This series of articles will help you build extensions for QuickShop-Hikari or integrate it deeply with your server.

## License

QuickShop-Hikari is open source using the [GPLv3](https://www.gnu.org/licenses/quick-guide-gplv3.en.html) license and you can always find our source code on [Github](https://github.com/Ghost-chu/QuickShop-Hikari).  
You are free to modify and use any part of QuickShop-Hikari's source code as long as you adhere to the GPLv3 agreement.

## 🚧Don't trust Javadoc too much

QuickShop is over 10 years old (since Jul 18, 2012 started by netherfoam) and Javadoc can be very old and inaccurate.
Although we revise the Javadoc frequently, most of it is still quite old.
When there is a conflict between the article and the content in the Javadoc, please refer to the article.

## Adding a Maven repository

```xml
<repositories>
    <repository>
        <id>codemc</id>
        <url>https://repo.codemc.io/repository/maven-public/</url>
    </repository>
</repositories>

<dependencies>
<dependency>
    <groupId>com.ghostchu</groupId>
    <artifactId>quickshop-bukkit</artifactId>
    <version>VERSION HERE</version>
    <scope>provided</scope>
</dependency>
<!--You need also bring in quickshop-common module to your project so it will help you resolve our used 3rd-party libraries-->
<dependency>
    <groupId>com.ghostchu</groupId>
    <artifactId>quickshop-common</artifactId>
    <version>VERSION HERE</version>
    <scope>provided</scope>
</dependency>
</dependencies>
```

## Thread Control

QuickShop-Hikari divides operation sources into three types:

* Server Main Thread
* Async Thread (any other threads but not server main thread)
* Hybird

If you access the API through the wrong thread, QuickShop-Hikari will force a runtime error to be thrown.  

Although many parts of QuickShop-Hikari are internally designed to be thread-safe, the API for operating with the Bukkit API still requires you to use the main server thread for calls.

For APIs that may trigger network IO or long-time disk IO, you are required not to execute them on the Server Main Thread.

You can see [Util.ensureThread()](https://github.com/Ghost-chu/QuickShop-Hikari/blob/3d1d271e1106ea1c83cc6068f8232ab7c7860918/quickshop-bukkit/src/main/java/com/ghostchu/quickshop/util/Util.java#L351) and find out the requirements of the different APIs by looking up their use. APIs that do not use Util.ensureThread() are allowed to be called from any thread by default.

You should never bypass this restriction, we only add this check if necessary, it is the most basic guarantee of plugin performance and server stability, if you trigger a thread check, please use the scheduler to complete your task.
