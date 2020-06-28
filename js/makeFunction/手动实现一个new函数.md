# 手动实现一个 new 函数

在实现一个 `new` 函数之前，先了解下 `new` 操作符做了什么事

## 🤔 `new` 到底做了什么

`new` 操作符新建了一个空对象，这个对象原型指向构造函数的 `prototype`，执行构造函数后返回这个对象。

## 🍤 代码实现

```js
function myNew(Obj, ...args) {
    var obj = Object.create(Obj.prototype); //使用指定的原型对象及其属性去创建一个新的对象
    Obj.apply(obj, args); // 绑定 this 到obj, 设置 obj 的属性
    return obj; // 返回实例
}
```

## 😜 拓展——手动实现一个 instanceof

`instanceof` 其原理就是判断实例对象的 `__proto__` 是不是强等于对象的`prototype` 属性，如果不是继续往原型链上找，直到 `__proto__` 为 `null` 为止。

```js
function instanceOf(obj, object) {
    //obj 表示实例对象，object 表示对象
    var O = object.prototype;
    obj = obj.__proto__;
    while (true) {
        if (obj === null) return false;
        if (O === obj)
            // 这里重点：当 O 严格等于 obj 时，返回 true
            return true;
        obj = obj.__proto__;
    }
}
```
