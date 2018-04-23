## JavaScript 之数组方法总结

# 数组构造
```
var arr = new Array() |  var arr = []
var arr = new Array(20) // 20为数组长度，较少用
```
# 数组的操作
**只操作数组，改变的是数组的内容**
#### 数组的push()方法
- 在数组的尾部添加元素。如：
```
var arr = [1,5,6]
arr.push(8)  |  arr.push(8,10)
// 输出 1,5,6,8  |  1,5,6,8,10
```
**注意：不能写成`var i = arr.push(8)`这种格式，这样 i = arr.length,即会输出‘4’**
**只操作数组，返回的是数组长度，改变的是数组的内容**

#### 数组的unshift()方法
与push()相反，向数组的头部插入数据项信息
简单不举例！

#### 数组的splice()方法

- splice() 方法向/从数组中添加/删除项目
- 返回值：由被删除元素组成的数组
arrayObject.splice(index,howmany,item1,.....,itemX)
index 必需。整数，规定添加/删除项目的位置，使用负数可从数组结尾处规定位置。
howmany 必需。要删除的项目数量。如果设置为 0，则不会删除项目。
item1, ..., itemX 可选。向数组添加的新项目。
```
var arr = new Array(6)
arr[0] = "George"
arr[1] = "John"
arr[2] = "Thomas"
arr[3] = "James"
arr[4] = "Adrew"
arr[5] = "Martin"

document.write(arr + "<br />") 
//输出George,John,Thomas,James,Adrew,Martin
arr.splice(2,0,"William")
document.write(arr + "<br />")
 // 输出George,John,William,Thomas,James,Adrew,Martin
```
注释：该方法会改变原始数组。
#### 数组的reverse()方法
- reverse() 方法用于颠倒数组中元素的顺序
- 返回新的数组
简单不举例！

#### 数组的sort()方法
- sort() 方法用于对数组的元素进行排序。
- 返回了排序后的数组
默认是按字母顺序进行排序
按照数值的大小对数字进行从小到大排序，方法是：
```
function sortNumber(a,b)
{
return a - b
}

var arr = new Array(6)
arr[0] = "10"
arr[1] = "5"
arr[2] = "40"
arr[3] = "25"
arr[4] = "1000"
arr[5] = "1"

document.write(arr + "<br />")
document.write(arr.sort(sortNumber))
```
从大到小则修改
```
function sortNumber(a,b)
{
    return  b - a
}
```
根据数组对象中的某个属性值进行排序,如下：
```
var arr = [
    {name:'zopp',age:0},
    {name:'gpp',age:18},
    {name:'yjj',age:8}
];

function compare(property){
    return function(a,b){
        var value1 = a[property];
        var value2 = b[property];
        return value1 - value2;
    }
}
console.log(arr.sort(compare('age')))
```
#### 数组的pop()方法
- 返回数组的最尾部的一个数据项
- 且删除数组最后一项
改变了原始数组，该函数无需传递任何参数；简单不举例！

#### 数组的shift()方法
- 返回数组的头部一项的数据信息，即 `arr.shift() === arr[0]`
- 删除头部一项的数据信息
----------------------华丽线之上修改了原始数组-----------------------
-----------------------------我是华丽的分割线----------------------------
----------------------华丽线之下对原始数组不更改--------------------
#### 数组的slice()方法
从已有的数组中返回选定的元素的数组。
```
let t = array.slice(0) // 表示拷贝数组
let t = array.slice(0，9) // 表示选取从0-9的元素形成一个新数组
let t = array.slice(-8,-1) // 表示选取倒数第八个到倒数第一个
```
#### 数组的find()方法
在数组内查询item或item的key值，返回相对应的第一个item（找到一个符合就停止搜索）
```
function isBigEnough(element) {
  return element.name === 'super1';
}
let a = [{name:'super',age:16},
            {name:'super1',age:116},
            {name:'super2',age:216},
            {name:'super3',age:316}]
let t = a.find(isBigEnough)
console.log(t)  // 输出{name:'super1',age:116}
```
#### 数组的findIndex()方法
```
function isBigEnough(element) {
  return element >= 15;
}

[12, 5, 8, 130, 44].findIndex(isBigEnough); 
// 查找第一个大于15的元素，即130
// 并返回其索引，即输出 ‘3’
```
#### 数组的map()方法
数组的遍历，返回一个新的数组，原数组不改变
```
var arr = new Array(3);
arr[0] = "George";
arr[1] = "John"
arr[2] = "Thomas";
var t = arr.map(a => {
    a = a+1
    return a
})
alert(arr); // 输出George，John，Thomas
alert(t); // 输出George1，John1，Thomas1
```
★注意：记得return a ,不然返回的是一个空值 —— ‘’
#### 数组的concat()方法
concat() 方法用于连接两个或多个数组。
该方法不会改变现有的数组，而仅仅会返回被连接数组的一个副本
```
var arr = new Array(3)
arr[0] = "George"
arr[1] = "John"
arr[2] = "Thomas"

var arr2 = new Array(3)
arr2[0] = "James"
arr2[1] = "Adrew"
arr2[2] = "Martin"

alert(arr.concat(arr2))   // 输出 George,John,Thomas,James,Adrew,Martin
alert(arr) //  输出 George,John,Thomas
★不改变原来的数组
``` 
#### 数组的join()方法
join() 方法用于把数组中的所有元素放入一个字符串。
元素是通过指定的分隔符进行分隔的。
参数既是分隔符，默认为逗号--‘，’
```
var arr = new Array(3)
arr[0] = "George"
arr[1] = "John"
arr[2] = "Thomas"

document.write(arr.join('12')) // 输出 George12John12Thomas
document.write(arr.join()) // 输出 George,John,Thomas
```
#### 数组的toString()方法
toString() 方法可把数组转换为字符串，并返回结果。
不操作数组，返回字符串


★★★希望我的总结对你有用，喜欢就点个star呗！ヾ(◍°∇°◍)ﾉﾞ★★★