# Javascript 知识点回顾

1. instanceof
   > instanceof 运算符可以区分数组和对象

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
   > atob()：Base64 编码转为原来的值
   > // 要将非 ASCII 码字符转为 Base64 编码，必须中间插入一个转码环节，再使用这两个方法

```
var string = 'Hello World!';
btoa(string) // "SGVsbG8gV29ybGQh"
atob('SGVsbG8gV29ybGQh') // "Hello World!"
```

4. Object.keys()
   > 查看一个对象本身的所有属性，可以使用 Object.keys 方法。

```
var obj = {
  key1: 1,
  key2: 2
};

Object.keys(obj);
// ['key1', 'key2']
```

5. in 运算符
   > in 运算符用于检查对象是否包含某个属性（注意，检查的是键名，不是键值），如果包含就返回 true，否则返回 false。

```
var obj = { p: 1 };
'p' in obj // true
```

6. for…in 循环
   > for...in 循环用来遍历一个对象的全部属性。

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

   > 与全局作用域一样，函数作用域内部也会产生“变量提升”现象。var 命令声明的变量，不管在什么位置，变量声明都会被提升到函数体的头部。

9. 立即调用的函数表达式（IIFE）

```
(function(){ /* code */ }());
// 或者
(function(){ /* code */ })();

```

上面两种写法都是以圆括号开头，引擎就会认为后面跟的是一个表示式，而不是函数定义语句，所以就避免了错误。这就叫做“立即调用的函数表达式”（Immediately-Invoked Function Expression），简称 IIFE。

注意，上面两种写法最后的分号都是必须的。如果省略分号，遇到连着两个 IIFE，可能就会报错。

10. eval 命令
    eval 命令的作用是，将字符串当作语句执行

11. 指数运算符 ** 2 ** 4 = 16

12. undefined 和 null

```
false == null // false
false == undefined // false

0 == null // false
0 == undefined // false

undefined == null // true
```

绝大多数情况下，对象与 undefined 和 null 比较，都返回 false。只有在对象转为原始值得到 undefined 时，才会返回 true，这种情况是非常罕见的。

22. 数组的 some()，every()

    > 这两个方法类似“断言”（assert），返回一个布尔值，表示判断数组成员是否符合某种条件。

23. Number.prototype.toFixed()
    > toFixed 方法先将一个数转为指定位数的小数，然后返回这个小数对应的字符串。

```
(10).toFixed(2) // "10.00"
10.005.toFixed(2) // "10.01"
```

24. 字符串方法集合

- charAt() 方法返回指定位置的字符，参数是从 0 开始编号的位置
- charCodeAt('j') 方法返回字符串指定位置的 Unicode 码点（十进制表示），相当于 String.fromCharCode()的逆操作。
- concat() 用于连接两个字符串，返回一个新字符串，不改变原字符串
- slice() 方法用于从原字符串取出子字符串并返回
- substring() 用于从原字符串取出子字符串并返回，不改变原字符串，跟 slice 方法很相像。
- substr() 用于从原字符串取出子字符串并返回，不改变原字符串。参数为起始位置，取出长度
- indexOf() astIndexOf() 检索字符串位置
- trim() 去除字符串两端空格
- toLowerCase() toUpperCase() 转换大小写
- search() replace()
- split() 根据符号切割字符串形成数组

25. math 方法集合

- Math.abs()：绝对值
- Math.ceil()：向上取整
- Math.floor()：向下取整
- Math.max()：最大值
- Math.min()：最小值
- Math.pow()：指数运算
- Math.sqrt()：平方根
- Math.log()：自然对数
- Math.exp()：e 的指数
- Math.round()：四舍五入
- Math.random()：随机数

26. Date 方法集合

- Date.now() 当前时间距离时间零点的毫秒数
- Date.parse() 解析字符串转化成毫秒数

27. RegExp 方法集合

- test()  
  `/cat/.test('cats and dogs') // true`
- exec()
  > 正则实例对象的 exec 方法，用来返回匹配结果。如果发现匹配，就返回一个数组，成员是匹配成功的子字符串，否则返回 null。

```
var s = 'x12yhahax78y111x99y';
var r1 = /^x(\d*)y/;

let t = r1.exec(s) // ["x"]
console.log(t)
// [ 'x12y', '12', index: 0, input: 'x12yhahax78y111x99y' ]
```

> 如果正则表示式包含圆括号（即含有“组匹配”），则返回的数组会包括多个成员。第一个成员是整个匹配成功的结果，后面的成员就是圆括号对应的匹配成功的组。

28. 正则表达式中，需要反斜杠转义的，一共有 12 个字符：^、.、[、\$、(、)、|、\*、+、?、{和\\

29. 字符类

> 字符类（class）表示有一系列字符可供选择，只要匹配其中一个就可以了。所有可供选择的字符都放在方括号内，比如[xyz] 表示 x、y、z 之中任选一个匹配。

（1）脱字符（^）

> 如果方括号内的第一个字符是[^]，则表示除了字符类之中的字符，其他字符都可以匹配。比如，[^xyz]表示除了 x、y、z 之外都可以匹配。

（2）连字符（-）

> 某些情况下，对于连续序列的字符，连字符（-）用来提供简写形式，表示字符的连续范围。比如，[abc]可以写成[a-c]，[0123456789]可以写成[0-9]，同理[A-Z]表示 26 个大写字母。

连字符还可以用来指定 Unicode 字符的范围。

```
var str = "\u0130\u0131\u0132";
/[\u0128-\uFFFF]/.test(str)
```

30. 预定义模式

    > \d 匹配 0-9 之间的任一数字，相当于[0-9]。
    > \D 匹配所有 0-9 以外的字符，相当于[^0-9]。
    > \w 匹配任意的字母、数字和下划线，相当于[A-Za-z0-9_]。
    > \W 除所有字母、数字和下划线以外的字符，相当于[^a-za-z0-9_]。
    > \s 匹配空格（包括换行符、制表符、空格符等），相等于[\t\r\n\v\f]。
    > \S 匹配非空格的字符，相当于[^\t\r\n\v\f]。
    > \b 匹配词的边界。
    > \B 匹配非词边界，即在词的内部。

31. 重复类
    > 模式的精确匹配次数，使用大括号（{}）表示。{n}表示恰好重复 n 次，{n,}表示至少重复 n 次，{n,m}表示重复不少于 n 次，不多于 m 次。

```
/lo{2}k/.test('look') // true
/lo{2,5}k/.test('looook') // true
```

32. 量词符
    > ?问号表示某个模式出现 0 次或 1 次，等同于{0, 1}。
    >
    > \*星号表示某个模式出现 0 次或多次，等同于{0,}。
    >
    > +加号表示某个模式出现 1 次或多次，等同于{1,}。
33. 三种修饰符

（1）g 修饰符

默认情况下，第一次匹配成功后，正则对象就停止向下匹配了。g 修饰符表示全局匹配（global），加上它以后，正则对象将匹配全部符合条件的结果，主要用于搜索和替换。

（2）i 修饰符

默认情况下，正则对象区分字母的大小写，加上 i 修饰符以后表示忽略大小写（ignorecase）。

（3）m 修饰符

m 修饰符表示多行模式（multiline），会修改^和$的行为。默认情况下（即不加m修饰符时），^和$匹配字符串的开始处和结尾处，加上 m 修饰符以后，^和$还会匹配行首和行尾，即^和$会识别换行符（\n）。

34. 点字符（.）匹配除回车（\r）、换行(\n) 、行分隔符（\u2028）和段分隔符（\u2029）以外的所有字符。

35. 正则表达式内部，还可以用\n 引用括号匹配的内容，n 是从 1 开始的自然数，表示对应顺序的括号。

```
/(.)b(.)\1b\2/.test("abcabc")
// true
```

上面的代码中，\1 表示第一个括号匹配的内容（即 a），\2 表示第二个括号匹配的内容（即 c）。

下面是另外一个例子。
`/y(..)(.)\2\1/.test('yabccab') // true`

36. console.time()，console.timeEnd()

> 这两个方法用于计时，可以算出一个操作所花费的准确时间。

```
console.time('Array initialize');

var array= new Array(1000000);
for (var i = array.length - 1; i >= 0; i--) {
  array[i] = new Object();
};

console.timeEnd('Array initialize');
// Array initialize: 1914.481ms
```

37. Object.assign()

Object.assign() 方法用于将所有可枚举的属性的值从一个或多个源对象复制到目标对象。它将返回目标对象。

语法——Object.assign(target, ...sources)

如果目标对象中的属性具有相同的键，则属性将被源中的属性覆盖。后来的源的属性将类似地覆盖早先的属性。注意，Object.assign 会跳过那些值为 null 或 undefined 的源对象。

针对深度拷贝，需要使用其他方法，因为 Object.assign() 拷贝的是属性值。假如源对象的属性值是一个指向对象的引用，它也只拷贝那个引用值。

```
var o1 = { a: 1 };
var o2 = { b: 2 };
var o3 = { c: 3 };

var obj = Object.assign(o1, o2, o3);
console.log(obj);  // { a: 1, b: 2, c: 3 }
console.log(o1);  // { a: 1, b: 2, c: 3 }, 注意目标对象自身也会改变。
```

38. reduce 方法 (Array)

对数组中的所有元素调用指定的回调函数。该回调函数的返回值为累积结果，并且此返回值在下一次调用该回调函数时作为参数提供。
直白的说就是将一个多维的数组合并为少一维的新数组。

39. import \* as apis from '../apis'
    使用这样的语法可以直接使用 ‘apis.方法名’引用方法

40. += 比如 x+ = y，相当于 x = x + y

41. encodeURIComponent() 函数可把字符串作为 URI 组件进行编码

42. substring() 方法用于提取字符串中介于两个指定下标之间的字符。stringObject.substring(start,stop)

43. 如何获取对象长度

```
var obj = {"c1":1,"c2":2};
var arr = Object.keys(obj);
var len = arr.length;
console.log(len);//结果为2

```

44. 浏览器打开窗口方式

```
// 打开当前页面
window.location.href = 'http://and.thaihall.com'
//打开新窗口
window.open('https://and.thaihall.com')
```

45. JavaScript 能表示并进行精确算术运算的整数范围为：正负 2 的 53 次方，也即从最小值-9007199254740992 到最大值+9007199254740992 之间的范围；对于超过这个范围的整数，JavaScript 依旧可以进行运算，但却不保证运算结果的精度。值得注意的是，对于整数的位运算（比如移位等操作），JavaScript 仅支持 32 位整型数，也即从-2147483648 到+2147483647 之间的整数。

46. 什么是内存泄漏？
    程序的运行需要内存。只要程序提出要求，操作系统或者运行时（runtime）就必须供给内存。

对于持续运行的服务进程（daemon），必须及时释放不再用到的内存。否则，内存占用越来越高，轻则影响系统性能，重则导致进程崩溃。

```
let arr = [1, 2, 3, 4];
console.log('hello world');
arr = null;
```

47. 闭包就是能够读取其他函数内部变量的函数。

由于在 Javascript 语言中，只有函数内部的子函数才能读取局部变量，因此可以把闭包简单理解成"定义在一个函数内部的函数"。

所以，在本质上，闭包就是将函数内部和函数外部连接起来的一座桥梁。

闭包可以用在许多地方。它的最大用处有两个，一个是前面提到的可以读取函数内部的变量，另一个就是让这些变量的值始终保持在内存中。

48. 静态方法中不能用 this 和 super 关键字
