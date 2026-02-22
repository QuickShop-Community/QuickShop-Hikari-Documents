# Shop Benefits

商店分成功能允许你将商店赚取的资金以不同的比例分配给多个玩家。

## 添加分成

看向本插件的商店，输入命令 `/quickshop benefit add <player><percentage>`（示例：`/quickshop benefit add Aether 50%`）将会将`<percentage>%`的盈利分给玩家`<player`。

例子：

- `/quickshop benefit add Nahida 50%`
- `/quickshop benefit add Venti 30%`

In those commands, shop owner set split `50%` rewards to Nahida and `30%` to Venti.
通过这些命令，店主的收入中有 `50%` 将会被分成给玩家 Nahida，`30%` 被分成给玩家 Venti。 当商店赚钱时 `100 美元`，Nahida会得到 `50 美元` 获得奖励，Venti 将获得 `30 美元` 获得奖励，店主将获得剩余物 `20%` (`20美元`） 作为奖励。.

## Remove from benefits

若要使得玩家不再参与分红，只需输入命令： `/quickshop benefit remove <player>`。

## Query all benefits in your shop

若要查询商店内的所有分红，只需输入命令：`/quickshop benefit query`。

## 副作用

取决于不同经济插件的支持情况，分成可能导致一些精度的丢失。

当金额太小，部分经济插件可能会进行四舍五入，有时也可能出现小数点精度丢失的情况如 `2.899999999999999` 这样的数字。

QuickShop-Hikari 对此问题已经有一些处理，但无法完美解决。如果遇到此类问题，请不要将它作为 BUG 报告，这是意料之中的。

## 允许添加离线玩家

由于一些安全原因，QuickShop-Hikari 默认不允许将离线玩家添加到商店分成列表中。要解除此限制，您必须增加以下 JVM Startup Flag：

```bash
-Dcom.ghostchu.quickshop.command.subcommand.SubCommand_Benefit.allowOffline=true
```

### 🆕 Starting in 6.3.0.0 SNAPSHOT 2

Beginning with 6.3.0.0 SNAPSHOT 2 the JVM Startup Flag has been replaced with an entry in config.yml

Use

```yaml
shop.allow-offline-benefit: true
```