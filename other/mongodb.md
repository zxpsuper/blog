# 下载
1. `curl -O https://fastdl.mongodb.org/linux/mongodb-linux-x86_64-3.0.6.tgz`
# 解压
2. `tar -zxvf mongodb-linux-x86_64-3.0.6.tgz`
# 将解压包拷贝到指定目录
3. `mv  mongodb-linux-x86_64-3.0.6/* /usr/local/mongodb`
# 查看环境变量
4. `echo $PATH`
# 添加PATH环境变量(临时)
5. `export PATH=/opt/STM/STLinux-2.3/devkit/sh4/bin:$PATH`
# 永久添加环境变量(影响所有用户)
6. `vim /etc/profile`
在文档最后，添加:
`export PATH="/opt/STM/STLinux-2.3/devkit/sh4/bin:$PATH"`
保存，退出，然后运行：
`source /etc/profile`