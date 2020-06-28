# 手动实现 promise

## 基础版本

-   设定三个状态 `pending、fulfilled、rejected` ，只能由 `pending` 改变为 `fulfilled、rejected`，并且只能改变一次
-   MyPromise 接收一个函数 `executor`，`executor` 有两个参数 `resolve` 方法和 `reject` 方法
-   `resolve` 将 `PENDING` 改变为 `fulfilled`
-   `reject` 将 `PENDING` 改变为 `fulfilled`
-   `promise` 变为 `fulfilled` 状态后具有一个唯一的 `value`
-   promise 变为 `rejected` 状态后具有一个唯一的 `reason`

```js
function MyPromise(executor) {
    this.state = PENDING;
    this.value = null;
    this.reason = null;

    const resolve = value => {
        if (this.state === PENDING) {
            this.state = FULFILLED;
            this.value = value;
        }
    };

    const reject = reason => {
        if (this.state === PENDING) {
            this.state = REJECTED;
            this.reason = reason;
        }
    };

    try {
        executor(resolve, reject);
    } catch (reason) {
        reject(reason);
    }
}
```

## then 方法

-   then 方法接受两个参数 `onFulfilled、onRejected`，它们分别在状态由 `PENDING`改变为 `FULFILLED、REJECTED` 后调用
-   一个 `promise` 可绑定多个 `then` 方法
-   `then` 方法可以同步调用也可以异步调用
-   同步调用：状态已经改变，直接调用 `onFulfilled` 方法
-   异步调用：状态还是 `PENDING`，将 `onFulfilled、onRejected` 分别加入两个函数数组 `onFulfilledCallbacks、onRejectedCallbacks`，当异步调用 `resolve` 和`reject` 时，将两个数组中绑定的事件循环执行。

```js
// 虽然resolve是同步执行的，我们必须保证then是异步调用的，我们用settimeout来模拟异步调用（并不能实现微任务和宏任务的执行机制，只是保证异步调用）
MyPromise.prototype.then = function(onFulfilled, onRejected) {
    if (typeof onFulfilled != 'function') {
        onFulfilled = function(value) {
            return value;
        };
    }
    if (typeof onRejected != 'function') {
        onRejected = function(reason) {
            throw reason;
        };
    }
    switch (this.state) {
        case FULFILLED:
            setTimeout(() => {
                onFulfilled(this.value);
            }, 0);
            break;
        case REJECTED:
            setTimeout(() => {
                onRejected(this.reason);
            }, 0);
            break;
        case PENDING:
            this.onFulfilledCallbacks.push(() => {
                setTimeout(() => {
                    onFulfilled(this.value);
                }, 0);
            });
            this.onRejectedCallbacks.push(() => {
                setTimeout(() => {
                    onRejected(this.reason);
                }, 0);
            });
            break;
    }
};
```

## then 方法链式调用

保证链式调用，即 `then` 方法中要返回一个新的 `promise`，并将 `then` 方法的返回值进行 `resolve`。

```js
MyPromise.prototype.then = function(onFulfilled, onRejected) {
    if (typeof onFulfilled != 'function') {
        onFulfilled = function(value) {
            return value;
        };
    }
    if (typeof onRejected != 'function') {
        onRejected = function(reason) {
            throw reason;
        };
    }
    const promise2 = new MyPromise((resolve, reject) => {
        switch (this.state) {
            case FULFILLED:
                setTimeout(() => {
                    try {
                        const x = onFulfilled(this.value);
                        resolve(x);
                    } catch (reason) {
                        reject(reason);
                    }
                }, 0);
                break;
            case REJECTED:
                setTimeout(() => {
                    try {
                        const x = onRejected(this.reason);
                        resolve(x);
                    } catch (reason) {
                        reject(reason);
                    }
                }, 0);
                break;
            case PENDING:
                this.onFulfilledCallbacks.push(() => {
                    setTimeout(() => {
                        try {
                            const x = onFulfilled(this.value);
                            resolve(x);
                        } catch (reason) {
                            reject(reason);
                        }
                    }, 0);
                });
                this.onRejectedCallbacks.push(() => {
                    setTimeout(() => {
                        try {
                            const x = onRejected(this.reason);
                            resolve(x);
                        } catch (reason) {
                            reject(reason);
                        }
                    }, 0);
                });
                break;
        }
    });
    return promise2;
};
```

## catch 方法

若上面没有定义 `reject` 方法，所有的异常会走向 `catch` 方法：

```js
MyPromise.prototype.catch = function(onRejected) {
    return this.then(null, onRejected);
};
```

## finally 方法

不管是 `resolve` 还是 `reject` 都会调用 `finally`。

```js
MyPromise.prototype.finally = function(fn) {
    return this.then(
        value => {
            fn();
            return value;
        },
        reason => {
            fn();
            throw reason;
        }
    );
};
```
