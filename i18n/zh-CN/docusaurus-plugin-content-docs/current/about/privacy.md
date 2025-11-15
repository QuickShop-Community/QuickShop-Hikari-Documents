# 隐私政策

When using the QuickShop-Hikari service, we will send the necessary and partial optional data to the relevant service provider.

## bStats

我们使用 [bStats.org](https://bstats.org/) 来收集统计指标，以便更好地改进我们的产品。

[bStats的隐私政策](https://bstats.org/privacy-policy)

收集到的所有数据将显示在此页面上： [bStats - QuickShop-Hikari](https://bstats.org/plugin/bukkit/QuickShop-Hikari/14281)

### 退出 bStats 统计

如果你要退出 bStats 统计，您可以在 QuickShop-Hikari 的配置文件中禁用 bStats 服务：

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
注意：收集到的数据不会从 bStats 中删除，要删除存在的数据，请联系 bStats 管理员。  
注意：我们尊重您的 bStats 全局设置。如果您在全局禁用了bStats，我们不会向bStats发送任何数据。

## RollBar错误跟踪

We use [Rollbar](https://rollbar.com/) to collect error reports. All errors on your server which related to QuickShop-Hikari will be automatically submit to our Rollbar bin.

您可以在这里查看 Rollbar 的隐私政策 [](https://docs.rollbar.com/docs/privacy-policy)。

包括:

- 时间
- 错误和堆栈跟踪
- 操作系统
- OS Arch
- 操作系统版本
- 系统 CPU 核心
- Java版本
- 服务器/Bukkit 构建版本
- 玩家数量
- 在线模式
- 您的 QuickShop-Hikari 个人ID

### 重新生成 QuickShop-Hikari 个人ID

当您首次安装QuickShop-Hikari时，您的个人ID将被生成并写入 `config.yml`。  
ID的生成完全随机，不以其他信息作为参考。个人ID用于我们的错误信息跟踪以及其他适用于 QuickShop-Hikari 的场景。  
The ID does not depend on any other information for calculation and is completely random, It is used in our bug tracking and other scenarios where different QuickShop-Hikari instances need to be identified.

如果没有插件正在使用此ID，您可以从配置文件中删除它，以便QuickShop-Hikari能够生成一个新的个人ID。

### 退出Rollbar错误跟踪

若要退出 Rollbar 错误跟踪，您可以在 QuickShop-Hikari 的配置中禁用 Rollbar 服务：

```yaml
# QS 是否允许自动向作者报告错误？
# 这会在服务器启动时自动创建数据恢复或调试用的剪贴板。
auto-report-errors: true
```

注意：收集到的数据将不会从Rollbar删除，要删除存在的数据，请联系 QuickShop-Hikari 开发人员。

## Paste

通过 `/quickshop paste` 创建剪贴板内容后，你的数据将会被上传至 [Lucko 的 bytebin 剪贴板](https://bytebin.lucko.me/)。  
若要防止数据上传，你可以通过命令 `/quickshop paste file` 保存至硬盘，这些内容将会留在本地而不会上传至网络。  
To avoid data uploading, you can create local paste by using command `/quickshop paste file`, the paste will save to your local disk without uploading.

Github 页面上的Paste预览主机通过CloudFlare Worker访问上传的数据。

当我们生成您的Paste时，我们会检查您的敏感数据。不要将您的Paste发送给您不信任的人。

## 更新

为了检查更新，QuickShop-Hikari将请求CodeMC.io的Nexus检查更新。

要禁用更新检查，您可以通过调整配置来关闭它：

```yaml
# 是否允许 QS 检查更新？
updater: false
```
