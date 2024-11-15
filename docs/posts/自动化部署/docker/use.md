---
title: jenkins
date: 2023-11-10
tags:
  - css
  - web
---

<!--
 * @Author: jinqli
 * @Date: 2023-11-10 11:23:04
 * @LastEditors: jinqli
 * @LastEditTime: 2023-11-10 12:19:44
 * @FilePath: /docker使用/use.md
 * @Description:
 *
-->

# 使用

## 查询基础命令

```sh
docker
docker stats --help
docker container prune  # 清理掉所有处于终止状态的容器
docker logs <ID> # 查看日志
```

## 参数表

```sh
# -d:让容器在后台运行
# -P:将容器内部使用的网络端口随机映射到我们使用的主机上
# --name:容器名称
# -e MYSQL_ROOT_PASSWORD=root mysql 设置环境变量
# -v 挂载卷
```

## 容器使用

获取镜像

```sh
docker search nginx # 查询镜像
docker pull nginx   # 获取镜像
```

启动容器终端

```sh
docker run -it nginx /bin/bash
# 参数说明：
# -i: 交互式操作
# -t: 终端
# nginx: nginx 镜像
# /bin/bash：放在镜像名后的是命令，这里我们希望有个交互式 Shell，因此用的是 /bin/bash
```

退出终端

```sh
exit
```

启动已停止运行的容器

```sh
docker ps -a # 查看所有的容器命令如下
docker start b750bbbcfd88 # 使用 docker start 启动一个已停止的容器 b750bbbcfd88=容器 ID
```

后台运行

```sh
docker run -itd --name nginx-run nginx /bin/bash
# 加了 -d 参数默认不会进入容器，想要进入容器需要使用指令 docker exec（下面会介绍到）
```

停止一个容器

```sh
docker stop <容器 ID>
```

重启容器

```sh
docker restart <容器 ID>
```

进入容器

```sh
# 在使用 -d 参数时，容器启动后会进入后台。此时想要进入容器，可以通过以下指令进入：
# docker attach
# docker exec：推荐大家使用 docker exec 命令，因为此命令会退出容器终端，但不会导致容器的停止
```

attach 命令

```sh
docker attach 1e560fca3906
# 注意： 如果从这个容器退出，会导致容器的停止
docker exec -it 243c32535da7 /bin/bash
# 如果从这个容器退出，容器不会停止，这就是为什么推荐大家使用 docker exec 的原因。
```

## 导出和导入容器
