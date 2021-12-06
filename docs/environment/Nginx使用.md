# 安装



# 配置

> Nginx的主要核心配置文件

`nginx.conf`

```shell
# 全局块
# user nobody
worker_processes 1;

# 进程文件
pid logs/nginx.pid;

events { # events块
	# 单个进程最大连接数(最大连接数=连接数*进程数)
	worker_connections 1024; # 默认为512
}

# 设置http服务
http { # http块
	# http全局块
	
	# 文件扩展名与类型映射表 
	include mime.types;
	# 默认文件类型
	default_type application/octet-stream;
	# 上传文件大小限制
	# client_header_buffers 10M;
	# 开始高效文件传输模式
	sendfile on;
	keepalive_timeout 65;
	# charset utf-8; # 默认编码
	# tcp_nopush on; # 
	
	server{ # server块
		# 监听端口
		listen 80; 
		# 域名可以有多个、用逗号隔开
        server_name jinqli.com, fleeting-time.com;
        # HTTP 自动跳转 HTTPS
        rewrite ^(.*) https://www.jinqli.com; 
        # 拒绝的ip
        # deny <ip_address>;
        # 允许的ip
        # allow <ip_address>;
        
		location / { # location块
			# 项目文件路径
			root html/MuZiLi;
            index index.html index.htm;
		}
		
		location /api { # location块
			# 代理
			proxy_pass http://127.0.0.1:3000/api;
		}
		
		error_page 500 502 503 504 /50x.html;
		location =/50x.html { # location块
			root html;
		}
		
		# location <path> { # location块
			# ...
		# }
	}
	
	server{ # server块
		# 腾讯云SSL证书配置
		# SSL访问端口为443
		listen 443 ssl;
		# 绑定证书的域名
		server_name jinqli.com;
		# 证书文件名称
		ssl_certificate jinqli.com_bundle.crt; 
		# 私钥文件名称
		ssl_certificate_key jinqli.com.key; 
        ssl_session_timeout 5m;
		#请按照以下协议配置
        ssl_protocols TLSv1 TLSv1.1 TLSv1.2; 
        #请按照以下套件配置，配置加密套件，写法遵循 openssl 标准。
        ssl_ciphers ECDHE-RSA-AES128-GCM-SHA256:HIGH:!aNULL:!MD5:!RC4:!DHE; 
        ssl_prefer_server_ciphers on;
		location / {
			# 项目文件路径
			root html/MuZiLi;
			index index.html index.htm;
		}
	}
	
	# http全局块
}

# 全局块
```



# `bug`

