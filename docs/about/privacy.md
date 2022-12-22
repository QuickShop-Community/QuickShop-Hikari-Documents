# Privacy

When using the QuickShop Hikari service, we will send the necessary and partial optional data to the relevant service provider.  

## bStats

We use [bStats.org](https://bstats.org/) to collect statistical indicators so that we can better improve our products.  

[bStats's Privacy Policy](https://bstats.org/privacy-policy)

All data collected will be displayed on this page: [bStats - QuickShop-Hikari](https://bstats.org/plugin/bukkit/QuickShop-Hikari/14281)

### Quit bStats Metrics

To quit bStats metrics, you can disable bstats service in QuickShop-Hikari's configuration:

```yaml

#Disallow QuickShop to send metrics data to bStats.
#Please let the metrics enabled, it helps the author :).
disabled-metrics: false
```

Note: The collected data won't deleted from bStats, to remove exists data, please contact bStats administrators.  
Note: We respect your bStats global settings, if you has been disabled bStats in global, we won't send any data to bStats.  

## Rollbar Error Tracking

We use [Rollbar](https://rollbar.com/) to collect error reports. All errors on your server which related to QuickShop-Hikari will be automaticlly submit to our Rollbar bin.

You can check Rollbar's Privacy Policy [here](https://docs.rollbar.com/docs/privacy-policy).

Including:

* Time
* Error and StackTrace
* OS Name
* OS Arch
* OS Version
* System CPU Cores
* Java Version
* Server/Bukkit Build Version
* Server Players
* Online Mode
* Your QuickShop-Hikari unique ID

### Quit Rollbar Error Tracking

To quit Rollbar Error Tracking, you can disable rollbar service in QuickShop-Hikari's configuration:

```yaml
# Should QS be allowed to automatically report errors to the author?
# It will also create a paste for data-recovery or debug when the server boots up.
auto-report-errors: true
```

Note: The collected data won't deleted from Rollbar, to remove exists data, please contact QuickShop-Hikari developer.

## Paste

When you creating a paste by `/qs paste` command, you data will upload to [Lucko's Bytebin](https://bytebin.lucko.me/).  
To avoid data uploading, you can create local paste by using command `/qs paste file`, the paste will save to your local disk without uploading.

The Paste Viewer hosting on Github Pages, access the uploaded data through CloudFlare Worker.

While we generating your Paste, we will censor your sensitive data, Don't send your Paste to anyone you don't trust.

## Updater

For checking update, QuickShop-Hikari will request CodeMC.io's Nexus for checking updates.  

To disable update checker, you can turn it off by adjust the configuration:

```yaml
#Should QS be allowed to check for updates?
updater: false
```

## Donating

When you donating on ko-fi.com, ko-fi will collect your personal data, click [here](https://more.ko-fi.com/privacy) to check ko-fi's privacy policy.

Your personal data will also send to Ghost_chu's web server for showcase your name on our supporter list, including:

* Time
* Your Ko-fi username.
* Donation Type
* Is public
* Message ID
* Message
* Kofi Transaction ID
* Tier Name

The data collected is stored in the territory of the People's Republic of China and is managed in accordance with the relevant laws and regulations of the server location (Beijing).  
To remove your data, please contact QuickShop-Hikari developer.

The data below will show up for everyone at [here](https://quickshop-kofi-proxy.ghostchu.workers.dev/):

* Time
* Type
* Your Ko-fi username

If you donation has been set to private, it won't show up.
