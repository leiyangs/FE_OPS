# 什么是 shell？

- shell 是一个命令行解释器，它为用户提供了一个向 Linux 内核发送请求以便运行程序的界面系统级程序
- 用户可以用 Shell 来启动、挂起、停止或者编写一些程序
- Shell 还是一个功能相当强大的编程语言，易编写，易调试，灵活性较强。
- Shell 是解释执行的脚本语言，在 Shell 中可以直接调用 Linux 系统命令。

## 1. 基本用法

### 1.1 echo

- 输出命令
- `-e` 激活转译字符

```bash
echo -e 'h\tello'
```

### 1.2 编写执行 shell

编写文件，开头需要`#!/bin/bash`，代表是 shell 脚本

```bash
vi 1.sh
#!/bin/bash
echo hello
:wq

#执行shell文件
sh 1.sh
#或者
chmod u+x 1.sh
./1.sh
```

### 1.3 别名

- 命令别名就是小名
- 临时生效 `alias cp="cp -i"`
- 写入环境变量配置文件 `vi ~/.bashrc`
- `source ~/.bashrc`
- 删除别名 `unalias 别名`
