<!--
 * @Author: jinqli
 * @Date: 2023-11-10 12:11:21
 * @LastEditors: jinqli
 * @LastEditTime: 2023-11-10 12:12:19
 * @FilePath: /docker使用/error.md
 * @Description: 
 * 
-->
# error
- docker: Error response from daemon: Conflict. The container name "/mysql-prod" is already in use by container "f639db4c45293adaaf225e2b23dba254cb2f310b5795e1bfd69f5986c8d454a9". You have to remove (or rename) that container to be able to reuse that name.
  
名称重复
```sh
docker ps -a
```
容器未正确移除
```sh
docker rm mysql-prod
```