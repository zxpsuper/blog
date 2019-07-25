### `HTTP` 请求详解

`HTTP` 通信机制是在一次完整的 HTTP 通信过程中，`Web` 浏览器与 `Web` 服务器之间将完成下列 `7` 个步骤：

> 1.  建立 TCP 连接
> 2.  Web 浏览器向 Web 服务器发送请求命令
> 3.  Web 浏览器发送请求头信息
> 4.  Web 服务器应答
> 5.  Web 服务器发送应答头信息
> 6.  Web 服务器向浏览器发送数据
> 7.  Web 服务器关闭 TCP 连接

`TCP` 连接在发送后将仍然保持打开状态，于是，浏览器可以继续通过相同的连接发送请求。保持连接节省了为每个请求建立新连接所需的时间，还节约了网络带宽。

#### HTTP 请求格式

当浏览器向 `Web` 服务器发出请求时，它向服务器传递了一个数据块，也就是请求信息，`HTTP` 请求信息由 3 部分组成：

-   请求方法 `URI协议/版本`

-   请求头`(Request Header)`

-   请求正文

下面是一个 `HTTP` 请求的例子：

> GET/sample.jspHTTP/1.1
> Accept:image/gif.image/jpeg,_/_
> Accept-Language:zh-cn
> Connection:Keep-Alive
> Host:localhost
> User-Agent:Mozila/4.0(compatible;MSIE5.01;Window NT5.0)
> Accept-Encoding:gzip,deflate
> username=jinqiao&password=1234

1. 请求方法 `URI协议/版本`

    请求的第一行是“`方法URL议/版本`”：`GET/sample.jsp HTTP/1.1`

    以上代码中 `GET` 代表请求方法，`/sample.jsp` 表示 URI，`HTTP/1.1` 代表协议和协议的版本。

    根据 `HTTP` 标准，`HTTP` 请求可以使用多种请求方法。

    例如：`HTTP1.1` 支持 `7` 种请求方法：`GET、POST、HEAD、OPTIONS、PUT、DELETE` 和 `TARCE`。

    在 `Internet` 应用中，最常用的方法是 `GET` 和 `POST`。

2. 请求头`(Request Header)`

    请求头包含许多有关的客户端环境和请求正文的有用信息。例如，请求头可以声明浏览器所用的语言，请求正文的长度等。

    > Accept:image/gif.image/jpeg._/_
    > Accept-Language:zh-cn
    > Connection:Keep-Alive
    > Host:localhost
    > User-Agent:Mozila/4.0(compatible:MSIE5.01:Windows NT5.0)
    > Accept-Encoding:gzip,deflate.

3. 请求正文

    请求头和请求正文之间是一个空行，这个行非常重要，它表示请求头已经结束，接下来的是请求正文。

    请求正文中可以包含客户提交的查询字符串信息：
    `username=jinqiao&password=1234`

    在以上的例子的 `HTTP` 请求中，请求的正文只有一行内容。当然，在实际应用中，`HTTP` 请求正文可以包含更多的内容。

4. `HTTP` 应答

    `HTTP` 应答与 `HTTP` 请求相似，`HTTP` 响应也由 `3` 个部分构成，分别是：

    - 协议状态版本代码描述
    - 响应头(Response Header)
    - 响应正文

    下面是一个 `HTTP` 响应的例子：

    > HTTP/1.1 200 OK
    >
    > Server: Apache Tomcat/5.0.12
    >
    > Date: Mon,6Oct2003 13:23:42 GMT
    >
    > Content-Length: 112

```html
<html>
<head>
  <title>HTTP响应示例<title>
</head>
<body>
  Hello HTTP!
</body>
</html>
```

协议状态代码描述 `HTTP` 响应的第一行类似于 `HTTP` 请求的第一行，它表示通信所用的协议是 `HTTP1.1` 服务器已经成功的处理了客户端发出的请求（`200`表示成功）:
`HTTP/1.1 200 OK`

5. 响应头`(Response Header)`

    响应头也和请求头一样包含许多有用的信息，例如服务器类型、日期时间、内容类型和长度等：

    > Server:Apache Tomcat/5.0.12
    > Date:Mon,6Oct2003 13:13:33 GMT
    > Content-Type:text/html
    > Last-Moified:Mon,6 Oct 2003 13:23:42 GMT
    > Content-Length:112

响应正文响应正文就是服务器返回的 `HTML` 页面
