# 安装nginx

```sh
  docker search nginx # 查看可用版本
  docker pull nginx:latest # 取最新版的 Nginx 镜像
  docker images # 查看本地镜像
  docker run --name nginx -p 80:80 -d nginx # 运行容器

  # --name nginx-test：容器名称
  # -p 8080:80： 端口进行映射，将本地 8080 端口映射到容器内部的 80 端口
  # -d nginx： 设置容器在在后台一直运行
```

## 配置文件问题
> 由于nginx安装在docker里面的 修改配置文件比较麻烦 
 
### 在容器内部修改配置文件
安装vim
```sh
	apt-get update	
	apt-get install -y vim  
```

1. 编辑配置文件
```sh
  find / -name 'nginx.conf' # 查找配置文件 
  vim /etc/nginx/conf.d/default.conf
```

2. 重启nginx
```sh
  docker exec -it nginx nginx -s reload
```

### 做文件映射
1. 创建文件夹
```sh
  mkdir -p docker-config/nginx/conf
  mkdir -p docker-config/nginx/conf.d
  mkdir -p docker-config/nginx/html
  mkdir -p docker-config/nginx/logs
```

2. 复制容器内的文件到本地卷
```sh
	docker cp nginx:/etc/nginx/nginx.conf /home/docker-config/nginx/conf/
	docker cp nginx:/etc/nginx/conf.d /home/docker-config/nginx/
	docker cp nginx:/usr/share/nginx/html /home/docker-config/nginx/
	docker cp nginx:/var/log/nginx/* /home/docker-config/nginx/logs/
```

3. 清除当前运行的nginx镜像 
```sh
```

4. 运行容器
```sh
	docker run -d --name nginx -p 80:80 -v /home/docker-config/nginx/conf/nginx.conf:/etc/nginx/nginx.conf -v /home/docker-config/nginx/logs:/var/log/nginx -v /home/docker-config/nginx/html:/usr/share/nginx/html -v /home/docker-config/nginx/conf.d:/etc/nginx/conf.d -e TZ=Asia/Shanghai --privileged=true nginx
```