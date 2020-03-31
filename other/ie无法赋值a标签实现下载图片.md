### window.URL.createObjectURL Blob URL 无法在 Microsoft IE 和 Edge 中打开

window.URL.createObjectURL()可以直接生成 blob:开头的链接，该链接产生于浏览器端，不会占用服务器资源。

window.URL.createObjectURL()在 IE10, IE11 以及 Microsoft Edge 中生成的 blob:链接，你不能把它加到一个`<a>`节点上，也不能直接在浏览器地址栏打开访问，并且得到“Error: 拒绝访问。”错误。open links made by window.URL.createObjectURL in IE/Edge 这样的提问到处都是，IE9 根本不支持 window.URL.createObjectURL 创建 Blob URLs 就更惨了。

Microsoft Internet Explorer / Microsoft Edge 和高大上的 Google Chrome / Mozilla Firefox 对于 window.URL.createObjectURL 创建 Blob 链接最直观的区别在于得到的 blob:链接形式不一样，分别在微软浏览器和标准浏览器中运行以下代码，得到两种 Blob 链接形式，第一种为 chrome 和 firefox 生成的带有当前域名的标准 blob:链接形式，第二种为 Microsoft IE 和 Microsoft Edge 生成的不带域名的 blob:链接。

可以通过 window.URL.createObjectURL(new Blob()) . indexOf(location.host) < 0 来检测是否是 IE 或早期生成 Object URL 不带域名的 Edge。如果表达式返回 true 则时 IE 或 Edge 旧版本。

解决 IE 和 Edge 无法打开 Blob URL 链接的方法，就是使用微软自己的另一套系统，叫做 window.navigator.msSaveOrOpenBlob(blob, filename)，这个方法可以将数据生成为文件供浏览器下载为指定的文件名，其中的参数 blob 就是 Blob 对象，filename 是希望将 Blob URL 保存的文件名

```js
if ('msSaveOrOpenBlob' in navigator) {
    // Microsoft Edge and Microsoft Internet Explorer 10-11
    window.navigator.msSaveOrOpenBlob(blob, filename);
} else {
    // standard code for Google Chrome, Mozilla Firefox etc
    // ......
}
```
