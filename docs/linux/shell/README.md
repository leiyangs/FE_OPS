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

### 1.4 命令的生效顺序

- 绝对路径或者相对路径
- 别名
- bash 内部命令
- 按照\$PATH 环境变量定义的目录查找顺序找到的第一个命令

### 1.5 命令快捷键

| 命令   | 概念                       |
| ------ | -------------------------- |
| ctrl+c | 强制终止当前命令           |
| ctrl+l | 清屏                       |
| ctrl+a | 光标移动到命令行首         |
| ctrl+e | 光标移动到命令行尾         |
| ctrl+u | 从光标所在的位置删除到行首 |

### 1.6 历史命令

```bash
#查询history
history
#清空历史
history -c
#写入历史文件~/.bash_history，一般是退出时会自动写入到文件中
history -w
#vi修改
vi /etc/profile
HISSIZE=10000
```

- history [选项][历史命令保存文件]
- 选项
  - -c 清空历史命令
  - -w 把缓存中的历史命令写入历史命令保存文件 ~/.bash_history
- 默认保存 1000 条 `/etc/profile` `HISSIZE=10000`

### 1.7 调用历史命令

- 使用上下箭头调用以前的历史命令
- 使用 !n 重复执行第 n 条历史命令
- 使用 !! 重复执行上一条命令
- 使用 !字符 重复执行最后一条以该字符串开头的命令

```bash
!3
!!
!his
```

### 1.8 输出重定向

#### 1.8.1 标准输出设备

| 设备   | 设备文件    | 文件描述符 | 类型         |
| ------ | ----------- | ---------- | ------------ |
| 键盘   | /dev/stdin  | 0          | 标准输入     |
| 显示器 | /dev/stdout | 1          | 标准输出     |
| 显示器 | /dev/stderr | 2          | 标准错误输出 |

| 类型                       | 符号                  | 作用                                                               |
| -------------------------- | --------------------- | ------------------------------------------------------------------ |
| 标准输出重定向             | 命令 > 文件           | 以覆盖的方式，把命令的正确输出输出到指定的文件或设备当中           |
| 标准输出重定向             | 命令 >> 文件          | 以追加的方式，把命令的正确输出输出到指定的文件或设备当中           |
| 错误输出重定向             | 命令>文件             | 以覆盖的方式，把命令的错误输出输出到指定的文件或设备当中           |
| 错误输出重定向             | 命令>>文件            | 以追加的方式，把命令的错误输出输出到指定的文件或设备当中           |
| 正确输出和错误输出同时保存 | 命令>文件 2>&1        | 以覆盖的方式，把正确输出和错误输出都保存到同一个文件当中           |
| 正确输出和错误输出同时保存 | 命令>文件 2>>&1       | 以追加的方式，把正确输出和错误输出都保存到同一个文件当中           |
| 正确输出和错误输出同时保存 | 命令&>文件            | 以覆盖的方式，把正确输出和错误输出都保存到同一个文件当中           |
| 正确输出和错误输出同时保存 | 命令&>>文件           | 以追加的方式，把正确输出和错误输出都保存到同一个文件当中           |
| 正确输出和错误输出同时保存 | 命令>>文件 1 2>文件 2 | 以覆盖的方式，正确的输出追加到文件 1 中，把错误输出追加到文件 2 中 |

```bash
#覆盖的方式 输出到文件中
echo 你好 > hello.txt
cat hello.txt
echo 你也好 > hello.txt
cat hello.txt

#追加的方式输入到文件
echo 你好 > hello.txt
cat hello.txt
echo 你也好 >> hello.txt
cat hello.txt

#覆盖输出错误质量到文件
ls aa > error.txt 2>&1
cat error.txt

#追加输出错误质量到文件
ls bb >> error.txt 2>&1
ls bb >> error.txt 2>&1
cat error.txt


```

#### 1.8.2 输入重定向

- `wc` 命令的功能为统计指定文件中的行数、字数、字节数, 并将统计结果显示输出
- 命令 `<` 文件把文件做为命令的输入
- 命令 `<<` 标识符 标识符把标识符之间内容作为命令的输入

```bash
wc < error.txt
#3  27 150
wc << !
hello
world
!
#2  2 12
```

### 1.9 管道符号

#### 1.9.1 多命令顺序执行

Js 玩家大喜，很好李姐。
| 多命令执行符 | 格式 | 作用 | 案例 |
| ------------ | --------------- | ---------------------------------------------------------------------------------- | ----------------- |
| ; | 命令 1;命令 2 | 多个命令执行，命令之间没有任何逻辑联系 | echo 1;echo 2; |
| && | 命令 1&&命令 2 | 逻辑与 当命令 1 正确执行，则命令 2 才会执行 当命令 1 执行不正确，则命令 2 不会执行 | echo 1&&echo 2; |
| `||` | `命令1|| 命令2` | 逻辑或 当命令 1 执行不正确，则命令 2 才会执行 当命令 1 正确执行，则命令 2 不会执行 | `echo 1||echo 2;` |

```bash
#利用;一行执行多个命令
echo 1;echo 2;
#&&前面命令错误，后面命令不执行
ls xx&&echo 2
#或命令，前面失败，后面命令继续执行
ls xx || echo 2
```

#### 1.9.2 管道符号

- 命令 1 的正确输出会作为命令 2 的操作对象
- 命令 1|命令 2

```bash
#命令1结果是命令2参数
ls /etc/ | more
```

#### 1.9.3 通配符

匹配文件名和目录名

| 通配符 | 作用                                        |
| ------ | ------------------------------------------- |
| ?      | 匹配一个任意字符                            |
| \*     | 匹配 0 个或任意字符，也就是可以匹配任意内容 |
| []     | 匹配中括号中任意一个字符                    |
| [-]    | 匹配中括号中任意一个字符,-代表范围          |
| [^]    | 匹配不是中括号中的一个字符                  |

```bash
#和正则相似
[1-10]
```

#### 1.9.4 其他

| 符号                            | 作用                                                                                             |
| ------------------------------- | ------------------------------------------------------------------------------------------------ |
| ''                              | 单引号。在单引号中所有的特殊符号，如\$和`都没有特殊含义                                          |
| ""                              | 双引号，在双引号里特殊符号都没有特殊含义，但是 \$ ` \ 例外，拥有调用变量值，引用命令和转义的含义 |
| `` | 反引号，扩起来的是系统命令 |
| \$()                            | 和反引号一样                                                                                     |
| #                               | 在 shell 脚本中，#开头的行代表注释                                                               |
| \$                              | 用于调用变量的值                                                                                 |
| \                               | 转义符号                                                                                         |