---
title: adb
date: 2020-02-08
sidebar: 'auto'
categories:
 - adb
tags:
 - adb  
---

1. `设备需要再同一局域网下`
2. `手机需要开启USB调试`

* 查看连接设备
```
adb devices
```

* 连接手机
```
adb tcpip 5555
adb connect 192.168.88.153:5555
```

### adb 常用命令
```
adb version   // 查看adb版本

adb devices   // 查看连接设备

adb connect <android_ip>    // 连接android设备（需要在同一网段下）

adb kill-server     // 杀死adb 服务

adb start-server    // 启动adb服务

adb reboot          // 重启手机

adb -s <device_name> shell         // 多台设备 进入指定的设备shell
```

### adb log相关
```
adb logcat  // 终端打印log

adb logcat > log.txt   // 打印log输入到文件
```