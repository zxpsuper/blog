// 利用闭包实现单例模式
// 闭包可以用在许多地方。它的最大用处有两个，一个是前面提到的可以读取函数内部的变量，另一个就是让这些变量的值始终保持在内存中。
class Xiaoming {
  constructor() {
    this.time = 1000
  }
  changeTime(time) {
    this.time = time
  }
}
var CreateDiv = (() => {
  var instance
  return function() {
    if (!instance) {
        instance = new Xiaoming()
    }
    return instance
  }
})()

let a = new CreateDiv()
a.changeTime(100)
console.log(a.time)

let b = new CreateDiv()
b.changeTime(123456)
console.log(a.time)