# Privacy

When using the QuickShop-Hikari service, we will send the necessary and partial optional data to the relevant service provider.

## bStats

We use [bStats.org](https://bstats.org/) to collect statistical indicators so that we can better improve our products.

[bStats's Privacy Policy](https://bstats.org/privacy-policy)

All data collected will be displayed on this page: [bStats - QuickShop-Hikari](https://bstats.org/plugin/bukkit/QuickShop-Hikari/14281)

### Quit bStats Metrics

To quit bStats metrics, you can disable bstats service in QuickShop-Hikari's configuration:

```yaml
#Privacy Controller allows you turn on/off some options that related to privacy. This is our move towards privacy transparency.
#By audit all privacy reviewing activities, execute `/quickshop paste` to generate a paste and check `Privacy Logs` section.
#To out-put from bStats completely, go to /plugins/bStats/config.yml.
privacy:
  # Category Control
  type:
    # Including bStats metrics with `Statistic - ` prefix, see all metrics we collected on https://bstats.org/plugin/bukkit/QuickShop-Hikari/14281
    STATISTIC: true
    # Including bStats metrics with `Research - ` prefix, see all metrics we collected on https://bstats.org/plugin/bukkit/QuickShop-Hikari/14281
    RESEARCH: true
```

Note: The collected data won't deleted from bStats, to remove exists data, please contact bStats administrators.  
Note: We respect your bStats global settings, if you has been disabled bStats in global, we won't send any data to bStats.

## Rollbar Error Tracking

We use [Rollbar](https://rollbar.com/) to collect error reports. All errors on your server which related to QuickShop-Hikari will be automatically submit to our Rollbar bin.

You can check Rollbar's Privacy Policy [here](https://docs.rollbar.com/docs/privacy-policy).

Including:

- Time
- Error and StackTrace
- OS Name
- OS Arch
- OS Version
- System CPU Cores
- Java Version
- Server/Bukkit Build Version
- Server Players
- Online Mode
- Your QuickShop-Hikari unique ID

### Regenerate QuickShop-Hikari unique ID

While you install QuickShop-Hikari in fresh, the your unique ID will be generated and write into your `config.yml`.  
The ID does not depend on any other information for calculation and is completely random, It is used in our bug tracking and other scenarios where different QuickShop-Hikari instances need to be identified.

In case you are sure that no addon is using this value, you can remove this from the configuration file so that QuickShop-Hikari will generate a new unique ID.

### Quit Rollbar Error Tracking

To quit Rollbar Error Tracking, you can disable rollbar service in QuickShop-Hikari's configuration:

```yaml
# Should QS be allowed to automatically report errors to the author?
# It will also create a paste for data-recovery or debug when the server boots up.
auto-report-errors: true
```

Note: The collected data won't deleted from Rollbar, to remove exists data, please contact QuickShop-Hikari developer.

## Paste

When you creating a paste by `/quickshop paste` command, you data will upload to [Lucko's Bytebin](https://bytebin.lucko.me/).  
To avoid data uploading, you can create local paste by using command `/quickshop paste file`, the paste will save to your local disk without uploading.

The Paste Viewer hosting on Github Pages, access the uploaded data through CloudFlare Worker.

While we generating your Paste, we will censor your sensitive data, Don't send your Paste to anyone you don't trust.

## Updater

For checking update, QuickShop-Hikari will request CodeMC.io's Nexus for checking updates.

To disable update checker, you can turn it off by adjust the configuration:

```yaml
#Should QS be allowed to check for updates?
updater: false
```
