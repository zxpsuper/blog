### Es6 之class 语法
```
//定义类class 
Point {
  constructor(x, y) {
    this.x = x;
    this.y = y;
  }

Object.assign(Point.prototype, {
   toString(){},
   toValue(){}});
}
```
使用的时候，也是直接对类使用new命令，跟构造函数的用法完全一致。.

Var haha = new Point()
Object.assign方法可以很方便地一次向类添加多个方法。

类的内部所有定义的方法，都是不可枚举的（non-enumerable）。
即不可用Object.keys(Point.prototype)获取内部的方法

类必须使用new调用，否则会报错。
