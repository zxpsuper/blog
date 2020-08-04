# 实现 Base64 的编码解码

## 1. 什么是 Base64 ？

Base64 是一种基于 64 个可打印字符来表示二进制数据的表示方法。由`A-Z(26)`,`a-z(26)`,`0-9(10)`,加`+,/,=(3)` 总共其实是 65 个字符(注：等号 `=` 用来作为后缀用途)，如下所示
```js
let _keyStr = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/='
```
**用途**：Base64 常用于在处理文本数据的场合，表示、传输、存储一些二进制数据，包括 MIME 的电子邮件及 XML 的一些复杂数据。在 MIME 格式的电子邮件中，base64 可以用来将二进制的字节序列数据编码成 ASCII 字符序列构成的文本，可以防止因不可见字符在传输过程中被错误处理导致内容有误。

## 2. Base64 原理

Base64 除去后缀符`=`共有64个字符（即2<sup>6</sup>） 可表示二进制 `000000`至`111111` 共六个比特位。我们知道，一个字节有 8 个比特位，因此这两者的最小公倍数为 24，即 3 字节的数据可以由 4 个 Base64 字符表示:

![](/image/base64-2.png)

### 实例演示

我们以 `hi` 单词进行演示：`h` 对应ASCII码为 `104`，对应二进制 `01101000`, `i` 对应ASCII码为 `105`,对应二进制`01101001`。总字节数不能被`3`整除应该补至能被`3`整除，由此产生的`000000`的6位二进制以 Base64编码 `=` 表示，如图所示：

![](/image/base64-1.png)

## 3. Base64 编码解码实现

在 window 对象中，有两个方法 `btoa()` 和 `atob()`实现编码和解码，本文带你一步步用 js 实现它们的功能。

在实现之前，先做好一些准备工作。

- 获取相应字符 ASCII 码方法`String.charCodeAt(index)`
- 取得Base64对应的字符方法 `String.charAt(index)`

假设三个 ASCII 码为 chr1,chr2,chr3, 如何获取对应的 base64 索引（enc1,enc2,enc3,enc4）呢？这里就涉及到位运算。

- `>>`向右移动，前面补0, 如 `104 >> 2`即 `01101000`=> `00011010`
- `&`与运算，只有两个操作数相应的比特位都是 1 时，结果才为 1，否则为 0。如 `104 & 3`即 `01101000` & `00000011` => `00000000`
- `|`或运算，对于每一个比特位，当两个操作数相应的比特位至少有一个 1 时，结果为 1，否则为 0。如 `01101000` | `00000011` => `01101011`
- `>>`符号移动可以取前n位或者后n位；与运算可以取后几位，如 104 & 3即取后两位比特位，104 & 15即取后4位比特位

位运算的搭配结合，即可获取相对应的 base64 字符索引

-  `enc1 = chr1 >> 2`, 取 chr1 的前 6 位即向右移动两位
-  `enc2 = ((chr1 & 3) << 4) | (chr2 >> 4)`，取 chr1 的后 2 位 + chr2的前 4 位
-  `enc3 = ((chr2 & 15) << 2) | (chr3 >> 6)`,取 chr2 的后 4 位 + chr3的前 2 位
- `enc4 = chr3 & 63`, 取 chr3 剩下的后 6 位

base64 的编码解码，其实就是 3 字节与 4 base64字符的相互转化过程，我们定义两个方法：`encode()` 与 `decode()`
```js
// base64 字符，共65个
let _keyStr =
    'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=';
// 编码
function encode(input) {
    let output = '',
        i = 0,
        chr1,
        chr2,
        chr3,
        enc1,
        enc2,
        enc3,
        enc4;
    while (i < input.length) {
        // 首先获取前三个字符对应的 ASCII 码
        chr1 = input.charCodeAt(i++);
        chr2 = input.charCodeAt(i++);
        chr3 = input.charCodeAt(i++);
        // 再将这三个字符转化为 4 个 base64 字符所对应的数字
        // 取第一字符 chr1 的前 6 比特位作为 base64 字符 1 的索引
        enc1 = chr1 >> 2;
        // 取 chr1 的后2位，在末尾补 chr2 的前 4 位作为 base64 字符 2 的索引
        enc2 = ((chr1 & 3) << 4) | (chr2 >> 4);
        // 取 chr2 的后 4 位，在末尾补 chr3 的前 2 位作为 base64 字符 3 的索引
        enc3 = ((chr2 & 15) << 2) | (chr3 >> 6);
        // 取chr3 的后 6 位作为 base64 字符 4 的索引
        enc4 = chr3 & 63;

        // 判断是否要补位，即 + 0 ，补位则设置索引为 64，对应 ‘=’ 字符
        if (Number.isNaN(chr2)) {
            enc3 = enc4 = 64;
        } else if (Number.isNaN(chr3)) {
            enc4 = 64;
        }
        output =
            output +
            _keyStr.charAt(enc1) +
            _keyStr.charAt(enc2) +
            _keyStr.charAt(enc3) +
            _keyStr.charAt(enc4);
    }
    return output;
}
// 解码
function decode(input) {
    let output = '',
        i = 0,
        chr1,
        chr2,
        chr3,
        enc1,
        enc2,
        enc3,
        enc4;
    while (i < input.length) {
        enc1 = _keyStr.indexOf(input.charAt(i++));
        enc2 = _keyStr.indexOf(input.charAt(i++));
        enc3 = _keyStr.indexOf(input.charAt(i++));
        enc4 = _keyStr.indexOf(input.charAt(i++));
        // 取 enc1 + enc2 的前2位组成 8 比特位即 1 字节
        chr1 = (enc1 << 2) | (enc2 >> 4);
        // 取 enc2 后 4 位 + enc3 的前 4 位组成 8 比特位即 1 字节
        chr2 = ((enc2 & 15) << 4) | (enc3 >> 2);
        // 取 enc3 前 2 位 + enc4 组成 8 比特位即 1 字节
        chr3 = ((enc3 & 3) << 6) | enc4;

        output = output + String.fromCharCode(chr1);
        // 判断下是否为 base64 的 = 字符，如果不是才添加
        if (enc3 != 64) {
            output = output + String.fromCharCode(chr2);
        }
        if (enc4 != 64) {
            output = output + String.fromCharCode(chr3);
        }
    }
    return output;
}
console.log(encode('hello world')); // aGVsbG8gd29ybGQ=
console.log(encode('hello world') === btoa('hello world')); // true
console.log(decode('aGVsbG8gd29ybGQ='))// 'hello world'
console.log(decode('aGVsbG8gd29ybGQ=') === atob('aGVsbG8gd29ybGQ=')) // true
```
## 问题与优化

在使用的过程中我们发现：当字符不是 ASCII 码时，或者说 unicode 码大于255 时，这两个方法就不适用了，同样的，window 上的 `atob()` 和 `btoa()` 也有这个问题。

`你好`这个词对应的 unicode 分别是 20320 和 22909，其已经远远超过 255，可不可以将这 20320 这个数字通过某些方法转化成多个 0 - 255 之间的数字，解码的时候也参考同样的规则解析？试试看呗

因为 `charCodeAt()` 返回指定位置的字符的 Unicode 编码。这个返回值是 0 - 65535 之间的整数, 即 2<sup>16</sup> - 1, 可以由 16 个比特位数字形容，而一个普通字符是 8 个比特位，所以传入的字符可以由 1-2 的 8 比特位字符表示。

这里也有一个问题，就是`大字符` = `6比特位数字` * `个数`,但是目前个数我们没有空余位可以存储，因此 1- 2 个字符是不够用的，将其增加至 1 - 3 个字符。

判断第一个数字，如果大于等于 `11100000` 即大于224，那么该数字应该转化为3字符；如果大于等于`11000000`小于 `11100000`即≥192且＜224，那么该数字应该转化为 2 字符；剩下的转化为 1 字符

```js
function encodeTransform(input) {
    let output = '';
    for (var n = 0; n < input.length; n++) {
        var c = input.charCodeAt(n); // 返回指定位置的字符的 Unicode 编码。这个返回值是 0 - 65535 之间的整数。
        if (c < 128) {
            // 0-7位
            // 如果小于128 即是 ASCII 码，直接返回该 ASCII 码
            output += String.fromCharCode(c);
        } else if (c > 127 && c < 2048) {
            //  8 - 11 位
            // 这里是将二进制去除后六位，然后在开头加'11'补至八位二进制，变成一个大于等于192小于224的数字
            output += String.fromCharCode((c >> 6) | 192);
            // 这里是取二进制后六位, 然后在开头加'1'补至八位二进制，变成一个小于255大于等于128的数字
            output += String.fromCharCode((c & 63) | 128);
        } else {
            // 12-16位, 因为unicode最大位数为16
            // 这里是将二进制去除后12位，然后在开头加'111'补至八位二进制，变成一个大于等于224小于255的数字
            output += String.fromCharCode((c >> 12) | 224);
            // 这里取 7 - 12 位，然后在开头加'1'补至八位二进制，变成一个小于192大于等于128的数字
            output += String.fromCharCode(((c >> 6) & 63) | 128);
            // 这里取 0 - 6 位，然后在开头加'1'补至八位二进制，变成一个小于192大于等于128的数字
            output += String.fromCharCode((c & 63) | 128);
        }
    }
    return output;
}
```
同样的，解码也是一些边界的判断以及位运算操作
```js
function decodeTransform(input) {
    let output = '',
        i = 0,
        c = (c1 = c2 = 0);
    while (i < input.length) {
        c = input.charCodeAt(i);
        if (c < 128) {
            // 1字符
            output += String.fromCharCode(c);
            i++;
        } else if (c > 191 && c < 224) {
            // 2字符
            c1 = input.charCodeAt(i + 1);
            output += String.fromCharCode(((c & 31) << 6) | (c1 & 63));
            i += 2;
        } else {
            // 3字符
            c1 = input.charCodeAt(i + 1);
            c2 = input.charCodeAt(i + 2);
            output += String.fromCharCode(
                ((c & 15) << 12) | ((c1 & 63) << 6) | (c2 & 63)
            );
            i += 3;
        }
    }
    return output;
}
```
这里是[完整代码](/js/base64.js)，请点击查看!

## 总结

这篇文章的起源是：一个朋友让我给他写个 base64 转化的页面，当时我想都没想就直接用了 btoa 和 atob. 后来他在用的时候发现中文无法编码，会出现报错情况。有点小尴尬，因此去网上找了 base64 的转化库，细细的研究它，了解它的原理后发现还是蛮有意思的，涉及到许多位运算和位操作，这部分需要花点心思去理解，也算是有所收获吧！

**如果本文对你有所帮助，请您不吝点赞，也可以关注我的公众号号：小皮咖**

![](/image/suporka.png)