# jenkins

## 安装
> https://hub.docker.com/r/jenkins/jenkins/
> https://github.com/jenkinsci/docker/blob/master/README.md
> https://computingforgeeks.com/how-to-install-jenkins-server-stable-on-centos-7/#:~:text=How%20To%20Install%20Jenkins%20Server%20on%20CentOS%207,Step%205%3A%20Configure%20User%20Roles%20on%20Jenkins%20
> https://blog.csdn.net/qingcyb/article/details/134461207
> https://juejin.cn/post/6871514139764719630 Jenkins+Docker实现部署你的Vue应用
```sh
 docker pull jenkins/jenkins
 docker pull jenkins/jenkins:lts-jdk17
 docker pull jenkins/jenkins:2.414.3-jdk17
 mkdir /home/jenkins_home 
 chmod 777 /home/jenkins_home
#  docker run -d -v /home/jenkins_home:/var/jenkins_home -p 8080:8080 -p 50000:50000 --restart=on-failure --privileged=true jenkins/jenkins:lts-jdk17
#  docker run -d -p 8080:8080 -p 50000:50000 -v /home/jenkins_home:/var/jenkins_home -v /etc/localtime:/etc/localtime --restart=on-failure --privileged=true --name jenkins jenkins/jenkins:lts-jdk17
 docker run -d -p 8080:8080 -p 50000:50000 -v /home/jenkins_home:/var/jenkins_home -v /etc/localtime:/etc/localtime --restart=on-failure --privileged=true --name jenkins jenkins/jenkins:latest
#  docker run -d -p 8080:8080 -p 50000:50000 -v /home/jenkins_home:/var/jenkins_home -v /etc/localtime:/etc/localtime --restart=on-failure --privileged=true --name jenkins jenkins/jenkins:2.414.3-jdk17
#  -v /etc/localtime:/etc/localtime 意义：让容器使用和服务器同样的时间设置。
```

## 基于yml
```yml
# docker-jenkins.yml ❌
# docker-compose.yml 固定名字
version: '3' 
services:
  jenkins:
    container_name: 'jenkins'
    image: jenkins/jenkins:lts
    restart: always
    user: root
    ports:
      - "8080:8080"
      # 下面两个端口可以根据业务情况是否添加
      - "50000:50000"
      - "10051:10051" # zabbix server 默认端口
    volumes:
      - /home/jenkins_data:/var/jenkins_home # 数据持久化
      # 将宿主机docker命令映射到Jenkins，这样在Jenkins容器里面可以使用docker命令了
      - /usr/bin/docker:/usr/bin/docker 
      - /var/run/docker.sock:/var/run/docker.sock
      # 映射时间
      - /etc/localtime:/etc/localtime 
      # 需要提前在宿主机设置 echo 'Asia/Shanghai' > /etc/timezone
      # 否则会报错: timezone is a directory
      - /etc/timezone:/etc/timezone
```

### 使用
> 没干目录都是独立的 
```sh
docker-compose up -d
# -d 后台运行
```

## 使用
> 主要是shell脚本这块
> 创建项目是不要选流水线 选第一个

### vue
> sys-admin-vue
> 字符参数 需要安装 Build with Parameters 插件
> container_name（容器名）、image_name（镜像名）、tag（标签）、port（要映射的端口）
```sh
#!/bin/bash

# 定义变量 
CONTAINER=${container_name}
PORT=${port}

# build docker image 每次构建不产生缓存
docker build --no-cache -t ${image_name}:${tag} .

# 检查是否有重名和端口占用情况
checkDocker() {
  RUNNING=$(docker inspect --format="{{ .State.Running }}" $CONTAINER 2>/dev/null)
  if [ -z $RUNNING ]; then
    echo "$CONTAINER does not exist."
    return 1
  fi

  if [ "$RUNNING" == "false" ]; then
    matching=$(docker ps -a --filter="name=$CONTAINER" -q | xargs)
    if [ -n $matching ]; then
      docker rm $matching
    fi
    return 2
  else
    echo "$CONTAINER is running."
    matchingStarted=$(docker ps --filter="name=$CONTAINER" -q | xargs)
    if [ -n $matchingStarted ]; then
      docker stop $matchingStarted
      docker rm ${container_name}
    fi
  fi
}

checkDocker

# 运行容器
docker run -itd --name $CONTAINER -p $PORT:80 ${image_name}:${tag}
```

### go-gin
> sys-service-gin
```sh

```

### FastApi
> sys-service-fastapi
```sh

```