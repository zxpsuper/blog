1. 使用flex布局，元素的宽度定不了，需使用flex-shrink：0 使其宽度不缩小

2. 箭头的画法——两个三角形合成，一个覆盖另一个。

3. 首元素设置margin-top无效

4. 设置placeholder样式的方法

```
:-moz-placeholder { /* Mozilla Firefox 4 to 18 */
    color: #b1b1b1; opacity:1; 
}

::-moz-placeholder { /* Mozilla Firefox 19+ */
    color: #b1b1b1;opacity:1;
}

input:-ms-input-placeholder{
    color: #b1b1b1;opacity:1;
}

input::-webkit-input-placeholder{
    color: #b1b1b1;opacity:1;
}
```
5. vue中，一个路由的切换会涉及到整个生命周期，但是如果加入keep-alive标签，则不涉及生命周期的destroyed.此时可在组件中加入生命周期 activated 和 deactivated 触发操作。
> 在 2.2.0 及其更高版本中，activated 和 deactivated 将会在 <keep-alive> 树内的所有嵌套组件中触发。主要用于保留组件状态或避免重新渲染。

6. keep-alive 中才能触发以下的watch中的'$routr',监听其他参数和keep-alive无关？？？

```
watch: {
    '$route' (to, from) {
      this.state = 1
      // 对路由变化作出响应...
    }
  },
```

7. float:left 会影响 margin: 0 auto;自适应

8. div 设置 text-align:center 只对 div 中的行内元素起作用

9. 修改 select 默认样式
```
appearance:none;
    -moz-appearance:none;
    -webkit-appearance:none;
    background: url('./Group.png') no-repeat right;
```

10. this.$refs.name 或 this.$refs.name.$el 报错的原因通常是该元素创建的时候被隐藏了。应该在updated()生命周期内调用即可。

11. 子组件——this.$emit('shijianming', item)
父组件—— @shijianming="fangfa"
```
methods: {
  fangfa(x) {
    console.log(x)
  }
}
```

12. 编写公用组件时不要修改 props 的值，修改 data 里的值为好

13. 让文字不被选中
```
    -moz-user-select: none;
    -webkit-user-select: none;
    user-select: none;
```
14. vue watch 监听父组件传来的参数 props，当参数为 Array 或者 Object时，子组件 watch 生命周期能监听到 newval。当传递的值为Number 或 String 时，无法 watch 到该 props 的变化。

15. botton 标签没有加type属性会出现路由加问号的情况出现。

16. vue 如何让页面强制刷新`this.$router.go(0)`

17. 修改vuex里的某个action需要全部重新设置，只修改action中的某一个，其他都会被清空

18. vertical-align 只针对使用的元素，不会使子元素垂直居中

19. v-model.lazy 不能使用watch监听它的值，会让值重置？？？？

20. 监听子组件本身的props时，得该props有变化才能监听到，没变化watch不到

21. vue动画，使用v-show需要用到 transition-group 标签， transiton 标签只适合标签内只含一个元素时使用

22. 如何让图片不被选中
```
  -moz-user-select: none;   
  -webkit-user-select: none;
  -ms-user-select: none;   
  -khtml-user-select: none;   
  user-select: none;  
```
23. import 必须在其它所有业务代码前面

24. computed属性只有在页面中有渲染时才触发

25. 当computed 计算路由获取某个数据时，不可以在computed进行数据保存，因为页面跳转的一瞬间也会进行计算

26. 如何获取对象长度
```
var obj = {"c1":1,"c2":2};
var arr = Object.keys(obj);
var len = arr.length;
console.log(len);//结果为2 

```
27. 不允许的CSS cursor: not-allowed
28. 单词换行
```
word-wrap: break-word;
word-break: break-all;
```
29. git本地回退

```
$ git log
$ git reset --hard HEAD^
```  

30. git 远程回退

31. 语义版本号分为X.Y.Z三位，分别代表主版本号、次版本号和补丁版本号。当代码变更时，版本号按以下原则更新。

+ 如果只是修复bug，需要更新Z位。

+ 如果是新增了功能，但是向下兼容，需要更新Y位。

+ 如果有大变动，向下不兼容，需要更新X位。
32. 浏览器打开窗口方式
```
// 打开当前页面
window.location.href = 'http://and.thaihall.com'
//打开新窗口
window.open('https://and.thaihall.com')
```
33. 给父元素加上 transform:translate(0,0) ，fixed即可根据父容器定位。
参考自：如果父级元素设置了transform属性，position:relative/absolute/fixed会基于此定位。