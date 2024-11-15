---
title: jenkins
date: 2024-11-13
tags:
  - css
  - web
---

# jenkins

## install

### docker

```sh
docker run --name jenkins-docker --rm --detach \
  --privileged --network jenkins --network-alias docker \
  --env DOCKER_TLS_CERTDIR=/certs \
  --volume /home/jenkins-docker-certs:/certs/client \
  --volume /home/jenkins-data:/var/jenkins_home \
  --publish 2376:2376 \
  docker:dind --storage-driver overlay2

docker run --name jenkins-blueocean --restart=on-failure --detach \
  --network jenkins --env DOCKER_HOST=tcp://docker:2376 \
  --env DOCKER_CERT_PATH=/certs/client --env DOCKER_TLS_VERIFY=1 \
  --publish 8080:8080 --publish 50000:50000 \
  --volume /home/jenkins-data:/var/jenkins_home \
  --volume /home/jenkins-docker-certs:/certs/client:ro \
  myjenkins-blueocean:2.426.1-1

docker run -n jenkins -u root -d -v /home/jenkins_home:/var/jenkins_home -p 8080:8080 -p 50000:50000 --restart=on-failure jenkins/jenkins:lts-jdk17
# docker run --name jenkins -u root -d -v /home/jenkins_home:/var/jenkins_home -p 8080:8080 -p 50000:50000 --restart=on-failure jenkins/jenkins:2.414.3-jdk17
```

## use

```sh

```
