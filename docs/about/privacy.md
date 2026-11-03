---
slug: /about/privacy
---
# Privacy

When using QuickShop-Hikari, some features communicate with external service providers. Some of these services are required when you explicitly use a feature, while others can be disabled through QuickShop-Hikari or the service's own configuration.

## bStats

QuickShop-Hikari uses [bStats.org](https://bstats.org/) to collect anonymous statistical metrics that help us understand how QuickShop-Hikari is being used and improve the project.

You can review:

- [bStats Privacy Policy](https://bstats.org/privacy-policy)
- [QuickShop-Hikari's public bStats statistics](https://bstats.org/plugin/bukkit/QuickShop-Hikari/14281)

### Disable bStats Metrics

QuickShop-Hikari provides privacy-category controls for its bStats metrics:

```yaml
# Privacy Controller allows you to turn on/off options related to privacy.
# To audit privacy-related activity, execute `/quickshop paste`
# and check the Privacy Logs section.
# To opt out of bStats completely, use /plugins/bStats/config.yml.
privacy:
  type:
    # Includes bStats metrics with the `Statistic - ` prefix.
    STATISTIC: true

    # Includes bStats metrics with the `Research - ` prefix.
    RESEARCH: true
```

Setting either category to `false` disables QuickShop-Hikari metrics belonging to that category.

To disable bStats completely for the server, use the global bStats configuration at:

```text
/plugins/bStats/config.yml
```

QuickShop-Hikari respects the global bStats configuration and will not submit bStats data when bStats has been globally disabled.

:::note
Disabling metrics prevents future submissions. Data that has already been submitted to bStats is controlled by bStats and is not automatically deleted when metrics are disabled.
:::

## Rollbar Error Tracking

QuickShop-Hikari uses [Rollbar](https://rollbar.com/) for automated error reporting.

When enabled, errors related to QuickShop-Hikari may be submitted to Rollbar to help diagnose crashes and other unexpected behavior.

See the [Rollbar Privacy Policy](https://docs.rollbar.com/docs/privacy-policy).

Submitted diagnostic information may include:

- Time
- Error and stack trace
- Operating system name
- Operating system architecture
- Operating system version
- System CPU core count
- Java version
- Server/Bukkit build version
- Server player information
- Online-mode status
- QuickShop-Hikari unique ID

### QuickShop-Hikari Unique ID

A random QuickShop-Hikari instance ID is generated for a fresh installation and stored in `config.yml`.

The ID is randomly generated and is not calculated from other identifying information. It is used for scenarios where QuickShop-Hikari needs to distinguish between different plugin installations, including diagnostics and error tracking.

If you are certain that no addon or integration depends on the existing value, removing the ID from the configuration allows QuickShop-Hikari to generate a new one.

### Disable Rollbar Error Tracking

Automatic error reporting can be disabled in `config.yml`:

```yaml
# Should QS be allowed to automatically report errors to the author?
# It will also create a paste for data-recovery or debug when the server boots up.
auto-report-errors: false
```

:::note
Disabling automatic error reporting prevents future automatic reports. Previously submitted information is not automatically removed from Rollbar.
:::

## Paste Service

When you execute:

```text
/quickshop paste
```

QuickShop-Hikari creates diagnostic information that can be used for troubleshooting.

An online paste is uploaded to [Lucko's Bytebin](https://bytebin.lucko.me/).

If you do not want the diagnostic information uploaded to an external paste service, use:

```text
/quickshop paste file
```

This creates the paste locally instead.

QuickShop-Hikari attempts to censor sensitive information while generating diagnostic pastes. You should still review diagnostic information and only share paste links with people you trust.

## Updater

QuickShop-Hikari can contact an external update provider to determine whether a newer version of the plugin is available.

The updater can be disabled in `config.yml`:

```yaml
# Should QS be allowed to check for updates?
updater: false
```

When disabled, QuickShop-Hikari does not perform its normal automatic update checks.

### Updater Providers

Starting with QuickShop-Hikari 6.3.0.0, the updater is provider-based instead of being tied exclusively to the CodeMC Nexus service.

The active update source is configured with:

```yaml
# The source to check for updates on.
# Allowed values: "nexus", "modrinth"
# Nexus shows snapshots and releases, modrinth shows releases only.
updater-source: "modrinth"
```

Available providers are:

| Provider | Purpose |
| --- | --- |
| `modrinth` | Checks QuickShop-Hikari releases through the Modrinth API. |
| `nexus` | Checks the Nexus repository and can include snapshots and releases. |

:::info
The selected updater provider determines which external service QuickShop-Hikari contacts while checking for updates.
:::

### Modrinth

When:

```yaml
updater-source: "modrinth"
```

QuickShop-Hikari uses the Modrinth API to retrieve version metadata.

The updater uses semantic-version comparison to determine the latest available release and latest stable release.

Modrinth provides release versions only through this updater provider.

### Nexus

When:

```yaml
updater-source: "nexus"
```

QuickShop-Hikari uses the Nexus update provider.

Unlike the Modrinth provider, Nexus can expose both snapshot and release versions.

### Update Metadata Cache

The centralized updater caches retrieved update metadata for one hour.

This reduces repeated requests to the configured update service when multiple parts of QuickShop-Hikari request update information during that period.

### Diagnostic Paste Information

QuickShop-Hikari's paste output includes the active update provider.

This helps maintainers understand whether an installation is using:

```text
modrinth
```

or:

```text
nexus
```

when reviewing diagnostic information.

### What Changed in 6.3.0.0

The 6.3.0.0 updater refactor introduced:

- Modrinth update-source support;
- the UpdateProvider interface for extensible update sources;
- a centralized UpdateManager;
- a one-hour metadata cache;
- unified semantic-version comparison;
- provider information in diagnostic paste output;
- provider-based update URLs;
- migration of UpdateWatcher to the generic updater system.

From a privacy perspective, the important change is that update checks are no longer necessarily sent to the Nexus service. The external service contacted for update metadata depends on the configured `updater-source`.

To prevent QuickShop-Hikari from performing update checks entirely, disable the updater:

```yaml
updater: false
```
