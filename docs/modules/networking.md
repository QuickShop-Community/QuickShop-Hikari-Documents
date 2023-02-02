# Network and Proxy

Most of QuickShop-Hikari web requests doesn't use system proxy.

## User-Agent

User-Agent are unchangeable, it force hardcoded as:

```plain
QuickShop/<fork-name>-<version> Java/<java-version>
```

It looks like this:

```plain
QuickShop/Hikari-3.4.0.2 Java/17.0.3
```

## Use HTTP proxy

In most cases, you won't need this, but in some countries, you might not access our cloud services like CrowdinOTA or Paste.  

To configure http proxy, you need to add the arguments in your JVM startup command line.

```bash
java -Xmx4G ... <JVM FLAG> ... -jar server.jar nogui
```

## Set proxy JVM flag

### Without authentication

```bash
-Dcom.ghostchu.quickshop.QuickShopBukkit.proxyHost=<host> -Dcom.ghostchu.quickshop.QuickShopBukkit.proxyPort=<port>
```

### With Basic authentication

```bash
-Dcom.ghostchu.quickshop.QuickShopBukkit.proxyHost=<host> -Dcom.ghostchu.quickshop.QuickShopBukkit.proxyPort=<port> -Dcom.ghostchu.quickshop.QuickShopBukkit.proxyUsername=<user> -Dcom.ghostchu.quickshop.QuickShopBukkit.proxyPassword=<password>
```

## Disable SSL verify

To force ignore the SSL errors, you can add this startup flags to disable SSL verify.

```bash
-Dcom.ghostchu.quickshop.QuickShopBukkit.verifySSL=false
```
