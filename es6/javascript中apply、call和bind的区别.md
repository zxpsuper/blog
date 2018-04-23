#### 在JS中，这三者都是用来改变函数的this对象的指向的，他们有什么样的区别呢?

**在说区别之前还是先总结一下三者的相似之处：**

1. 都是用来改变函数的this对象的指向的。
2. 第一个参数都是this要指向的对象。
3. 都可以利用后续参数传参。
那么他们的区别在哪里的，先看一个例子。
```
 var xw = {
        name : "小王",
        gender : "男",
        age : 24,
        say : function() {
                alert(this.name + " , " + this.gender + " ,今年" + this.age);                                
        }
}
var xh = {
        name : "小红",
        gender : "女",
        age : 18
}
xw.say();
```
本身没什么好说的，显示的肯定是小王 ， 男 ， 今年24。

那么如何用xw的say方法来显示xh的数据呢。

对于call可以这样：

> xw.say.call(xh);

对于apply可以这样：

> xw.say.apply(xh);

而对于bind来说需要这样：

> xw.say.bind(xh)();

如果直接写xw.say.bind(xh)是不会有任何结果的，看到区别了吗？call和apply都是对函数的直接调用，而bind方法返回的仍然是一个函数，因此后面还需要()来进行调用才可以。
那么call和apply有什么区别呢？我们把例子稍微改写一下。

```
 var xw = {
          name : "小王",
          gender : "男",
          age : 24,
          say : function(school,grade) {
                  alert(this.name + " , " + this.gender + " ,今年" + this.age + " ,在" + school + "上" + grade);                                
          }
  }
  var xh = {
          name : "小红",
          gender : "女",
          age : 18
  }
```

可以看到say方法多了两个参数，我们通过call/apply的参数进行传参。

对于call来说是这样的

> xw.say.call(xh,"实验小学","六年级");       

而对于apply来说是这样的

> xw.say.apply(xh,["实验小学","六年级郑州牛皮癣医院"]);

看到区别了吗，call后面的参数与say方法中是一一对应的，而apply的第二个参数是一个数组，数组中的元素是和say方法中一一对应的，这就是两者最大的区别。

那么bind怎么传参呢？它可以像call那样传参。

> xw.say.bind(xh,"实验小学","六年级")();

但是由于bind返回的仍然是一个函数，所以我们还可以在调用的时候再进行传参。

> xw.say.bind(xh)("实验小学","六年级");

 
以上 就是对bind,call,apply 的详细解释，希望对你有用！
