---
title: Android 模拟器搭建
date: 2024-11-13
tag:
  - css
  - web
---

# Android 模拟器搭建

> 用于 react native、flutter 开发
> 开发环境：
>
> 1.  操作系统：windows10
> 2.  工 具：sdk-tools
> 3.  I D E ：vscode（编码体验很好）
> 4.  J D K ：jdk8

## `sdk-tools`

下载地址-国外：https://developer.android.google.cn/studio?hl=zh-cn#command-tools 【命令行】

下载地址-国内：https://www.androiddevtools.cn/#sdk-tools 【图形化】

### `sdk-manage`

1. 安装需要用到的 package（google pay 一般用不到）
2. 如果安装的 android sdk platform 29、我把 sdk build-tools 对应的版本全部安装了的（后面启动模拟器时就成功了）

### `avd-manage`

1. 根据下载的 sdk 创建模拟器
2. 其他

### `flutter-sdk`

1. 使用`vscode`安装插件
2. 并在`main`入口处运行项目
3. 如果`debug`时出现`code 1`时记得就该模拟器的`Storage`

### `sdkmanager-cmd-line`

```sh
./sdkmanager --list
./sdkmanager --update
./sdkmanager "cmdline-tools;latest" # flutter doctor 时可能会遇到 根据提示 不要带--install执行就ok
./sdkmanager --install ""  # 会出现报错-猜测是版本问题或者网络环境问题（大天朝）
```

### 错误

1.  ERROR: resizing partition e2fsck failed with exit code 8

    ```sh
    cd C:\Users\[username]\.android\avd\[avd.avd]\config.ini

    disk.dataPartition.size=200M  >> disk.dataPartition.size=756
    ```

    就不会报上面的错

    但是启动会一直黑屏
