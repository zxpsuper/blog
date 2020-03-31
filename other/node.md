## node 学习笔记

1. process 是一个全局变量，可通过 process.argv 获得命令行参数。由于 argv[0]固定等于 NodeJS 执行程序的绝对路径，argv[1]固定等于主模块的绝对路径，因此第一个命令行参数从 argv[2]这个位置开始。

2. JS 语言自身只有字符串数据类型，没有二进制数据类型，因此 NodeJS 提供了一个与 String 对等的全局构造函数 Buffer 来提供对二进制数据的操作。除了可以读取文件得到 Buffer 的实例外，还能够直接构造，例如：

    > var bin = new Buffer([ 0x68, 0x65, 0x6c, 0x6c, 0x6f ]);

3. NodeJS 通过 fs 内置模块提供对文件的操作。fs 模块提供的 API 基本上可以分为以下三类：

文件属性读写。

其中常用的有 fs.stat、fs.chmod、fs.chown 等等。

文件内容读写。

其中常用的有 fs.readFile、fs.readdir、fs.writeFile、fs.mkdir 等等。

底层文件操作。

其中常用的有 fs.open、fs.read、fs.write、fs.close 等等。

NodeJS 最精华的异步 IO 模型在 fs 模块里有着充分的体现，例如上边提到的这些 API 都通过回调函数传递结果。以 fs.readFile 为例：

```
fs.readFile(pathname, function (err, data) {
    if (err) {
        // Deal with error.
    } else {
        // Deal with data.
    }
});
```

如上边代码所示，基本上所有 fs 模块 API 的回调参数都有两个。第一个参数在有错误发生时等于异常对象，第二个参数始终用于返回 API 方法执行结果。

此外，fs 模块的所有异步 API 都有对应的同步版本，用于无法使用异步操作时，或者同步操作更方便时的情况。同步 API 除了方法名的末尾多了一个 Sync 之外，异常对象与执行结果的传递方式也有相应变化。同样以 fs.readFileSync 为例：

try {
var data = fs.readFileSync(pathname);
// Deal with data.
} catch (err) {
// Deal with error.
}
