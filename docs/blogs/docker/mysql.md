# 安装mysql

## docker pull mysql
 1. 在 macos 中记得把磁盘权限开启

## use
 1. 启动命令
 2. 映射到真实地址

```sh
docker search mysql # 查看可用版本
docker pull mysql:5.7 # 取最新版的 Nginx 镜像
docker images # 查看本地镜像
docker run --name mysql-test -p 3306:3306 -d mysql # 运行容器

# --name mysql-prod：容器名称
# -p 8080:80： 端口进行映射，将本地 3306 端口映射到容器内部的 3306 端口
# -d mysql： 设置容器在在后台一直运行
# -e MYSQL_ROOT_PASSWORD=root mysql
```

## 映射卷
### 在宿主机上面挂载数据卷，防止数据丢失
1. 创建本地数据库目录、配置文件以及日志目录（方便进行容器数据卷挂载）
> 因为mysql容器一旦销毁，数据库也就随之销毁，为了解决这个问题，docker官方提出了容器数据卷技术，就是在宿主机上新建一些目录与容器内的目录映射，当容器销毁时，宿主机上的目录文件不会消失，依然存在
2. 新建目录命令
```sh
# 建立宿主机数据库目录
mkdir /home/mysql/datadir
# 建立宿主机数据库配置文件
mkdir /home/mysql/conf
# 建立宿主机数据库日志目录
mkdir /home/mysql/log
```
3. 启动容器并挂载数据卷
```sh
docker run --name mysql -p 3306:3306 -v /home/mysql/datadir:/var/lib/mysql -v /home/mysql/conf:/etc/mysql/conf.d -v /home/mysql/logs:/var/log/mysql -e MYSQL_ROOT_PASSWORD=jinqliMYSQL1234 -d mysql:5.7

# -v /root/mysql/datadir:/var/lib/mysql 对宿主机数据库目录与容器数据库目录进行映射挂载
# -v /root/mysql/conf:/etc/mysql/conf.d 对宿主机数据库配置文件与容器数据库配置文件进行映射挂载
# -v /root/mysql/logs:/var/log/mysql 对宿主机数据库日志与容器数据库日志进行映射挂载
# -e MYSQL_ROOT_PASSWORD=root
```

## docker-compose.yml

```sh
version: '3'
services:
  mysql: # 服务名称
    image: mysql:8.0.18 # 或其它mysql版本
    container_name: mysql8 # 容器名称
    environment:
      - MYSQL_ROOT_PASSWORD=Sqw199111265414@ # root用户密码
      # - TZ=Asia/Shanghai # 设置容器时区 我这里通过下面挂载方式同步的宿主机时区和时间了,这里忽略
    volumes:
      - /home/docker/mysql8/log:/var/log/mysql # 映射日志目录，宿主机:容器
      - /home/docker/mysql8/data:/var/lib/mysql # 映射数据目录，宿主机:容器
      - /home/docker/mysql8/conf.d:/etc/mysql/conf.d # 映射配置目录，宿主机:容器
      - /etc/localtime:/etc/localtime:ro # 让容器的时钟与宿主机时钟同步，避免时间的问题，ro是read only的意思，就是只读。
    ports:
      - 3306:3306 # 指定宿主机端口与容器端口映射关系，宿主机:容器
    restart: always # 容器随docker启动自启
```

```sh
docker-compose -f docker-compose.yml up -d
```

```sh
mysql -h localhost -u root -p Sqw199111265414@

# INSERT INTO sys_authority_menus VALUES (1, '888');
```

## 数据库备份
> mysqldump常用操作示例
### sql文件
```sh
# 备份单个数据库的数据和结构(,数据库名mydb)
mysqldump -u root -p 123456 mydb > /data/mysqlDump/mydb.sql

#!/bin/bash

#保存备份个数，备份31天数据
number=31
#备份保存路径
backup_dir=/home/mysqlbackup
#日期
dd=`date +%Y-%m-%d-%H-%M-%S`
#备份工具
tool=mysqldump
#用户名
username=root
#密码
password=Sqw199111265414@
#将要备份的数据库
database_name=shen_hui_you

#如果文件夹不存在则创建
if [ ! -d $backup_dir ];
then     
    mkdir -p $backup_dir;
fi

#简单写法 mysqldump -u root -p123456 users > /root/mysqlbackup/users-$filename.sql
$tool -u $username -p$password $database_name > $backup_dir/$database_name-$dd.sql

#写创建备份日志
echo "create $backup_dir/$database_name-$dd.dupm" >> $backup_dir/log.txt

#找出需要删除的备份
delfile=`ls -l -crt $backup_dir/*.sql | awk '{print $9 }' | head -1`

#判断现在的备份数量是否大于$number
count=`ls -l -crt $backup_dir/*.sql | awk '{print $9 }' | wc -l`

if [ $count -gt $number ]
then
  #删除最早生成的备份，只保留number数量的备份
  rm $delfile
  #写删除文件日志
  echo "delete $delfile" >> $backup_dir/log.txt
fi
```

### crontab语法
```sh
# mysqlRollBack.cron
minute hour day-of-month month-of-year day-of-week commands 
# 合法值 00-59 00-23 01-31 01-12 0-6 (0 is sunday) 

# 除了数字还有几个个特殊的符号就是"*"、"/"和"-"、","，*代表所有的取值范围内的数字，"/"代表每的意思,"/5"表示每5个单位，"-"代表从某个数字到某个数字,","分开几个离散的数字。

# -l 在标准输出上显示当前的crontab。 
# -r 删除当前的crontab文件。 
# -e 使用VISUAL或者EDITOR环境变量所指的编辑器编辑当前的crontab文件。当结束编辑离开时，编辑后的文件将自动安装。 

0 6 * * * /root/mysql_backup_script.sh

crontab mysqlRollBack.cron
```