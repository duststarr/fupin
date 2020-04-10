# 秦皇岛防贫工作系统

> 为扶贫事业做点贡献吧

## 准备工作
* 到[码云](https://gitee.com) 注册账号
* 本地安装git，node

## 开始项目前端

* 命令行下执行
```bash
# 克隆前端代码
git clone https://gitee.com/xhute/fupin.git

# 初始化
cd fupin
npm install
```

## 平时调试
```bash
npm run dev
```
> 执行完这个命令，等一下，就会弹出浏览器显示效果

## git基本使用

* 建议使用vscode自带的git管理工具

> 下面是命令行下git的最基本使用，仅供参考
```bash
# 0、【经常做的】保存更改到本地
git commit -m "你对修改的说明"

# 1、从服务器拉取别人的修改
# 经常拉取，避免冲突积累太多
git pull

# 2、解决代码冲突（如果有的话）
# 这个比较复杂，百度吧

# 3、本地保存完之后，推送到服务器
git push origin master
```

## 生成并上传

```bash
npm run build
# 1、构建至dist目录
# 2、将dist上传至45.233.70.235服务器指定目录
```

## License

[MIT](https://github.com/PanJiaChen/vue-admin-template/blob/master/LICENSE) license.

Copyright (c) 2020-present xhute
