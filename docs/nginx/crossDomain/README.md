# 跨域

- 跨域是指一个域下的文档或脚本试图去请求另一个域下的资源

| 类型   | 种类                  |
| ------ | --------------------- |
| 语法   | add_header name value |
| 默认   | add_header --;        |
| 上下文 | http,server,location  |

```bash
mkdir -p /data/json
cd /data/json
vi user.json
{"name":"yl"}
```

```bash
location ~ .*\.json$ {
  add_header Access-Control-Allow-Origin http://127.0.0.1:8080;
  add_header Access-Control-Allow-Methods GET,POST,PUT,DELETE,OPTIONS;
  root /data/json;
}
```

index.html

```bash
<!DOCTYPE HTML PUBLIC "-//W3C//DTD HTML 4.0 Transitional//EN">
<html>
<head>
</head>
<body>
<script>
let xhr = new XMLHttpRequest();
    xhr.open('GET', 'http://115.29.148.6/user.json', true);
    xhr.onreadystatechange = function () {
        if (xhr.readyState == 4 && xhr.status == 200) {
            console.log(xhr.responseText);
        }
    }
xhr.send();
</script>
</body>
</html>
```

```bash
http-server
```

## 防盗链

- 防止网站资源被盗用
- 保证信息安全
- 防止流量过量
- 需要区别哪些请求是非正常的用户请求
- 使用 http_refer 防盗链

| 类型   | 种类                                         |
| ------ | -------------------------------------------- |
| 语法   | valid_referers none、block、server_names、IP |
| 默认   | -                                            |
| 上下文 | server,location                              |

```bash
location ~ .*\.(jpg|png|gif)$ {
        expires 1h;
        gzip off;
        gzip_http_version 1.1;
        gzip_comp_level 3;
        gzip_types image/jpeg image/png image/gif;
        # none没有refer blocked非正式HTTP请求 特定IP
+       valid_referers none blocked 115.29.148.6;
+       if ($invalid_referer) { # 验证通过为0，不通过为1
+           return 403;
+       }
        root /data/images;
    }

```

```bash
-e, --referer       Referer URL (H)
curl -v -e "115.29.148.6" http://115.29.148.6/kf.jpg
curl -v -e "http://www.baidu.com" http://115.29.148.6/kf.jpg
```
