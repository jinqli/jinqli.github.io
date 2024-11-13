# CentOS7.6+golang

## 通过设置源安装

> https://go-repo.io/

```sh
  rpm --import https://mirror.go-repo.io/centos/RPM-GPG-KEY-GO-REPO
  curl -s https://mirror.go-repo.io/centos/go-repo.repo | tee /etc/yum.repos.d/go-repo.repo
  yum install golang
```

## 修改 golang 为国内源

```sh
  go env -w GO111MODULE=on
  go env -w GOPROXY=https://goproxy.cn

```
