# 手动实现一个 EvenEmitter

## 原理

`EvenEmitter` 的原理便是[发布订阅者模式](/设计模式/发布订阅者模式.md)。

-   用户订阅一个事件并将执行函数交给 `EvenEmiter`, `EvenEmitter` 注册此事件类型，并将执行函数存入该类型事件的数组中。

-   一旦用户发布事件及参数，`EvenEmitter` 便会找到该类型事件的数组，并逐一执行数组内的函数

接下来我们来实现一个简单版和一个高级版。

## 简单版本

```js
// 发布订阅者模式
var EvenEmitter = function() {
    this.obj = {};
};

EvenEmitter.prototype.on = function(eventType, fn) {
    if (!this.obj[eventType]) {
        this.obj[eventType] = [];
    }
    this.obj[eventType].push(fn);
};

EvenEmitter.prototype.emit = function(...arguments) {
    // arguments是类数组对象，不可直接使用数组方法，下面使arguments使用shift方法
    var eventType = Array.prototype.shift.call(arguments);

    var arr = this.obj[eventType];
    for (let i = 0; i < arr.length; i++) {
        // arguments上一步骤已经去除了第一个元素，剩下后面的元素,调用所对应的方法
        arr[i].apply(arr[i], arguments);
    }
};

var ev = new EvenEmitter();

ev.on('click', function(a) {
    // 订阅函数
    console.log(a); // 1
});

ev.emit('click', 888); // 发布函数
```

## 高级版本

```js
// 高级版本，实现remove once等功能
function EventEmitter() {
    this._events = Object.create(null);
}

// 向事件队列添加事件
// prepend为true表示向事件队列头部添加事件
EventEmitter.prototype.addListener = function(type, listener, prepend) {
    if (!this._events) {
        this._events = Object.create(null);
    }
    if (this._events[type]) {
        if (prepend) {
            this._events[type].unshift(listener);
        } else {
            this._events[type].push(listener);
        }
    } else {
        this._events[type] = [listener];
    }
};

// 移除某个事件
EventEmitter.prototype.removeListener = function(type, listener) {
    if (Array.isArray(this._events[type])) {
        if (!listener) {
            delete this._events[type];
        } else {
            this._events[type] = this._events[type].filter(
                e => e !== listener && e.origin !== listener
            );
        }
    }
};

// 向事件队列添加事件，只执行一次
EventEmitter.prototype.once = function(type, listener) {
    const only = (...args) => {
        // 这里的args是 emit 时用apply传入的
        listener.apply(this, args);
        this.removeListener(type, listener);
    };
    only.origin = listener;
    this.addListener(type, only);
};

// 执行某类事件
EventEmitter.prototype.emit = function(type, ...args) {
    if (Array.isArray(this._events[type])) {
        this._events[type].forEach(fn => {
            fn.apply(this, args);
        });
    }
};

var emitter = new EventEmitter();

var onceListener = function(args) {
    console.log('我只能被执行一次', args, this);
};

var listener = function(args) {
    console.log('我是一个listener', args, this);
};

emitter.once('click', onceListener);
emitter.addListener('click', listener);

emitter.emit('click', '参数');
emitter.emit('click');

emitter.removeListener('click', listener);
emitter.emit('click');
```
