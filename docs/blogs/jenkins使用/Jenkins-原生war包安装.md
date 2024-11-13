# Jenkins-原生war包安装

## 下载地址：https://mirrors.jenkins.io/war-stable/2.346.3/jenkins.war

创建jenkins存放目录，个人习惯（/usr/local/jenkins）

上传 jenkins.war 到 linux 机器上

使用原生方式启动

```
chmod +x jenkins.war
java –jar jenkins.war --httpPort=8080
```

启动完成看日志：获取初始化密码

```
8ef78fdbd034425fbb722b3ccea6ae7d
```

