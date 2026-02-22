# Shop History

商店历史允许玩家查看商店的交易记录。

## 查询指定商店的交易记录

打开商店控制面板，并点击浏览历史按钮。

![history in control-panel](./img/control-panel-history.png)

## 通过命令查询多个商店

使用命令 `/quickshop history <sub-commands>` 即可。

可用的子命令：

- `owned`：选择所有你开设的商店
- `accessible`：选择所有有权访问交易记录的商店
- `global`：选择全服商店（需要额外权限）

## 历史界面

历史界面会显示每个交易记录与其他有用的信息。

### 交易细节

When hovering over a detail item, information such as store name (or coordinates), purchaser, item, amount, tax, etc. will be displayed.  
在浏览物品时，商店名称（及其坐标）、买家、交易物品、数量、税收等都会展示在这里。\
如果你需要检查多个商店的历史记录，玩家头颅会被对应商店的图标替换。

![history-gui](./img/history-gui.png)

### 概要

左上角物品可显示商店概要。

![history-summary](./img/history-summary.png)
