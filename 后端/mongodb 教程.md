## mongodb 教程

#### - mongodb 安装 -
* 首先下载mongodb， [点击下载](https://www.mongodb.com/download-center#atlas)并安装
* 我是将mongodb安装在d盘的mongodb文件夹中
- 在d盘中新建data文件夹，然后在data中新建三个文件，如下图所示：

![data文件夹](http://upload-images.jianshu.io/upload_images/7932253-465d2d07a9623721.png?imageMogr2/auto-orient/strip%7CimageView2/2/w/1240)
- 用记事本打开mongo.config，输入以下内容(记得去掉注释) :

>// 数据库目录 
>dbpath=d:\data\db
// 日志输出文件
 logpath=d:\data\log\mongodb.log

- 打开log文件夹，新建空白文件 mongodb.log
- 以管理员方式在bin文件夹下打开CMD窗口，运行如下命令安装MongoDB服务
> .\mongod --config "D:\data\mongo.config" --install
- 启动服务--(默认端口为27017)
> net start mongodb
- 停止服务
> net stop mongodb
- 需要操作数据库，请进入bin文件夹，打开命令行工具输入
> .\mongo

- 若出现 `spawn  cmd ENOENT` 则是你的系统环境变量出现了问题

- 修改环境变量 PATH : c:windows/system32

***注意：本文的操作基于window操作系统***
.
#### - mongodb 文件夹下bin文件夹内容介绍 -
>mongo.exe：客户端，支持js语法
mongod.exe：服务端
mongodump.exe：备份工具
mongorestore.exe：恢复工具
mongoexport.exe：导出工具
mongoimport.exe：导入工具
mongostat.exe：实时性能监控工具
mongotop.exe：跟踪MongDB实例读写时间工具
