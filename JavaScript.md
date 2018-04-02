1. instanceof
> instanceof运算符可以区分数组和对象
```
var o = {};
var a = [];

o instanceof Array // false
a instanceof Array // true
```

2. encodeURIComponent && decodeURIComponent
> ASCII 码字符转码解码

3. btoa() atob()
> btoa()：任意值转为 Base64 编码
atob()：Base64 编码转为原来的值
// 要将非 ASCII 码字符转为 Base64 编码，必须中间插入一个转码环节，再使用这两个方法

```
var string = 'Hello World!';
btoa(string) // "SGVsbG8gV29ybGQh"
atob('SGVsbG8gV29ybGQh') // "Hello World!"
```

4. Object.keys()
> 查看一个对象本身的所有属性，可以使用Object.keys方法。
```
var obj = {
  key1: 1,
  key2: 2
};

Object.keys(obj);
// ['key1', 'key2']
```

5. in 运算符
> in运算符用于检查对象是否包含某个属性（注意，检查的是键名，不是键值），如果包含就返回true，否则返回false。
```
var obj = { p: 1 };
'p' in obj // true
```

6. for…in 循环 
> for...in循环用来遍历一个对象的全部属性。
```
var obj = {a: 1, b: 2, c: 3};

for (var i in obj) {
  console.log(obj[i]);
}
// 1
// 2
// 3
```

7. 函数可以调用自身，这就是递归

8. 函数内部的变量提升
> 与全局作用域一样，函数作用域内部也会产生“变量提升”现象。var命令声明的变量，不管在什么位置，变量声明都会被提升到函数体的头部。

9. 立即调用的函数表达式（IIFE）
```
(function(){ /* code */ }());
// 或者
(function(){ /* code */ })();

```
上面两种写法都是以圆括号开头，引擎就会认为后面跟的是一个表示式，而不是函数定义语句，所以就避免了错误。这就叫做“立即调用的函数表达式”（Immediately-Invoked Function Expression），简称 IIFE。

注意，上面两种写法最后的分号都是必须的。如果省略分号，遇到连着两个 IIFE，可能就会报错。

10. eval 命令
eval命令的作用是，将字符串当作语句执行

20. 指数运算符 **    2 ** 4 = 16

21. undefined 和 null
```
false == null // false
false == undefined // false

0 == null // false
0 == undefined // false

undefined == null // true
```
绝大多数情况下，对象与undefined和null比较，都返回false。只有在对象转为原始值得到undefined时，才会返回true，这种情况是非常罕见的。

22.   