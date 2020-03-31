## window远程ssh连接gitlab

**注：本文中所带括号（）均为解释说明，不代表具体操作**

### 1. 本地生成公钥私钥

- 打开 Git bash，输入 `cd ~/.ssh`。查看是否存在此文件夹，有则进入，没有使用 `mkdir .ssh` 创建文件夹，再进入。

- 进入后输入命令：`$ssh-keygen -t rsa -C 邮箱` (其中邮箱为你注册的邮箱), 连续回车三次

- 回车之后，本地 .ssh 中，成功生成两个文件，`id_rsa` 私钥和 `id_rsa.pub` 公钥。（私钥文件不要给任何人）,可输入 `ls` 查看是否生成

### 2. 将公钥复制到gitlab中

- 打开`User/你的用户名/.ssh`文件夹，用编辑器打开 `id_rsa.pub` ,将此公钥复制在 gitlab 的 ssh key 中

### 3. 将SSH 私钥添加到 ssh-agent

- 输入 `$eval $(ssh-agent -s)` 启用 ssh-agent

- 输入 `$ssh-add /c/Users/你的用户名/.ssh/id_rsa` 添加私钥到 ssh-agent


### 4. config 配置  

- Git bash 中 输入vim config，新建并打开config 配置文件，输入以下内容：

```
HostName  gitlab.公司的gitlab域名.com   (----输入自己公司git 域名)

IdentityFile  C:/Users/你的用户名/.ssh/id_rsa    (--私钥路径 + 私钥文件名)

User  你的用户名    （用户名---登录git 的用户名）
```

### 5. 测试连接

- 输入 `$ ssh -T git@gitlab.公司的gitlab域名.com` （@ 后是自己 公司gitlab的 域名）

    首次连接，会让你选择 `yes /no`, 输入 `yes`，继续进行连接

    界面显示： Welcome to Gitlab,xxxx! 代表 SSH  连接成功。 