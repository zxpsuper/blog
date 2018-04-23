
1. v-for 指令

```
<div id="app"> 
<ol> <li v-for="site in sites"> {{ site.name }} </li> </ol>
 </div> 
<script> new Vue({
 el: '#app', 
data: { sites: [ { name: 'Runoob' }, { name: 'Google' }, { name: 'Taobao' } ] } }) </script>
```

上面两个site可以修改为任意相同的两个值

```
<div id="app"> <ul> <li v-for="(value, key) in object"> {{ key }} : {{ value }} </li> </ul> </div>
<div id="app"> <ul> <li v-for="(value, key, index) in object"> {{ index }}. {{ key }} : {{ value }} </li> </ul> </div>
```

可以有3个参数，依次为值,key,index

2. 样式绑定

```
<div class="static" v-bind:class="{ active: isActive, 'text-danger': hasError }"> </div>
//与小程序相反，判断条件在后，且当样式名中含有—时需用引号包含

<div id="app"> <div v-bind:style="{ color: activeColor, fontSize: fontSize + 'px' }">菜鸟教程</div> </div>

<div v-bind:class="[errorClass ,isActive ? activeClass : '']"></div>

```
style , class后为单大括号

3. 事件修饰符

Vue.js 为 v-on 提供了事件修饰符来处理 DOM 事件细节，如：event.preventDefault() 或 event.stopPropagation()。
Vue.js通过由点(.)表示的指令后缀来调用修饰符。
- .stop
- .prevent
- .capture
- .self
- .once
```
<!-- 阻止单击事件冒泡 -->
<a v-on:click.stop="doThis"></a>
<!-- 提交事件不再重载页面 -->
<form v-on:submit.prevent="onSubmit"></form>
<!-- 修饰符可以串联  -->
<a v-on:click.stop.prevent="doThat"></a>
<!-- 只有修饰符 -->
<form v-on:submit.prevent></form>
<!-- 添加事件侦听器时使用事件捕获模式 -->

<div v-on:click.capture="doThis">...</div>

<!-- 只当事件在该元素本身（而不是子元素）触发时触发回调 -->
<div v-on:click.self="doThat">...</div>

<!-- click 事件至少触发一次，2.1.4版本新增 -->
<a v-on:click.once="doThis"></a>
```

4. 按键修饰符

Vue 允许为 v-on 在监听键盘事件时添加按键修饰符：
```
<!-- 只有在 keyCode 是 13 时调用 vm.submit() -->
<input v-on:keyup.13="submit">
```
记住所有的 keyCode 比较困难，所以 Vue 为最常用的按键提供了别名：
```
<!-- 同上 -->
<input v-on:keyup.enter="submit">
<!-- 缩写语法 -->
<input @keyup.enter="submit">
```
全部的按键别名：
.enter
.tab
.delete (捕获 "删除" 和 "退格" 键)
.esc
.space
.up
.down
.left
.right
.ctrl
.alt
.shift
.meta
```
<p><!-- Alt + C -->
<input @keyup.alt.67="clear">
<!-- Ctrl + Click -->
<div @click.ctrl="doSomething">Do something</div>
```

5. 修饰符

.lazy
在默认情况下， v-model 在 input 事件中同步输入框的值与数据，但你可以添加一个修饰符 lazy ，从而转变为在 change 事件中同步：
```
<!-- 在 "change" 而不是 "input" 事件中更新 -->
<input v-model.lazy="msg" >
```
.number
如果想自动将用户的输入值转为 Number 类型（如果原值的转换结果为 NaN 则返回原值），可以添加一个修饰符 number 给 v-model 来处理输入值：
`<input v-model.number="age" type="number">`
.trim
如果要自动过滤用户输入的首尾空格，可以添加 trim 修饰符到 v-model 上过滤输入：
`<input v-model.trim="msg">`

6. 注册全局组件

注册一个全局组件语法格式如下：
> Vue.component(tagName, options)

7. 路由跳转的几种方式

标签——
```
<router-link :to="{name: 'Register'}" >
<router-link :to="{path:’login’}" >
<a v-link="{path: '/login'}">
<a v-link="{name: 'user', params: {userId: 1}">
```

方法——
this.$router.push({name: 'Register'})

// 字符串
router.push('home')

// 对象
router.push({ path: 'home' })

// 命名的路由
router.push({ name: 'user', params: { userId: 123 }})

// 带查询参数，变成 /register?plan=private
router.push({ path: 'register', query: { plan: 'private' }})

8. 路由数据传递方式

1）路由直接传递
```
this.$router.push({
  name: 'generalAdminOrderFlowAdd',
  params: {
    type: 'add',
    templateType: this.orderTemplateType
  }
})
let type = this.$route.params.type
```

2）使用vuex
state.js    mutations.js   mutation-types.js   index.js    actions.js    getters.js

9. try{}catch{}finally{}的用法

在JavaScript中，我们使用try…catch…finally语句来执行例外处理，即通过它来捕捉错误发生后导致的例外或者执行throw语句产生的例外。它的基本语法如下：
```
　try {
　　// 此处是可能产生例外的语句
　　} catch(error) {
　　// 此处是负责例外处理的语句
　　} finally {
　　// 此处是出口语句
}
```

10. async 与 await

async 表示函数里有异步操作，await 表示紧跟在后面的表达式需要等待结果。

11. router.beforeEach() 每次路由切换调用的函数
```
router.beforeEach((to, from, next) => {
  if (to.name !== "Login" && to.name !== "Register") {
    let token = window.sessionStorage.getItem('token')
    if (!token) next('/login')
    else next()
  } else {
    next()
  }
})
```

12. 一些安装指令

安装淘宝镜像
npm install -g cnpm --registry=https://registry.npm.taobao.org

13. Router中的{ path: '星号', redirect: '/home' }设置通用路径，即其他不可识别的通用路径

14. new vue()
```
 new Vue({
  router,
  store,
  render: h => h(App)  
  //es6 render: (function(h){return: h(app)})
}).$mount('#app')
```

.$mount('#app')——当Vue实例没有el属性时，则该实例尚没有挂载到某个dom中；假如需要延迟挂载，可以在之后手动调用vm.$mount()方法来挂载。

15. webpack 官方文档的介绍require.context

简单说就是：有了 require.context，我们可以通过正则匹配引入相应的文件模块。
require.context(directory, useSubdirectories, regExp)
require.context 有三个参数：
directory：说明需要检索的目录
useSubdirectories：是否检索子目录
regExp: 匹配文件的正则表达式

const apis = requireAll(require.context('./', true, /\.js$/))

16. script 中的生命周期

    data() {return {}},  ——有括号
    Created(){}     ——有括号
    Mounted(){}     ——有括号
    Computed:{}
    Methods:{}
    Watch:{}
    Components:{}

17. 关于package-lock.json

npm 5 的一些大的变化：
使用npm install xxx命令安装模块时，不再需要--save选项，会自动将模块依赖信息保存到 

package.json 文件；
安装模块操作（改变 node_modules 文件夹内容）会生成或更新 package-lock.json 文件
发布的模块不会包含 package-lock.json 文件
如果手动修改了 package.json 文件中已有模块的版本，直接执行npm install不会安装新指定的版本，只能通过npm install xxx@yy更新
重新安装模块之所以快，是因为 package-lock.json 文件中已经记录了整个 node_modules 文件夹的树状结构，甚至连模块的下载地址都记录了，再重新安装的时候只需要直接下载文件即可

18. 首页适配手机的标准写法

```
<meta name="viewport" content="width=device-width, initial-scale=1.0, maximum-scale=1.0, minimum-scale=1.0, user-scalable=no">
```

19. vue2.0提供了一个keep-alive组件

用来缓存组件,避免多次加载相应的组件,减少性能消耗
```
<keep-alive>
   <router-view></router-view>
</keep-alive>
```

20. scoped 属性是一个布尔属性。

如果使用该属性，则样式仅仅应用到 style 元素的父元素及其子元素。

21. tag="div" 标识该标签为div标签

22. Stylus 的引入为什么是@import "~common/stylus/variable"?

23. 路由激活样式

```
&.router-link-active
    .tab-link
      color: $color-theme
      border-bottom: 2px solid $color-theme
```

24. 浏览器通用刷新17ms

25. 混合 (mixins) 是一种分发 Vue 组件中可复用功能的非常灵活的方式。混合对象可以包含任意组件选项。以组件使用混合对象时，所有混合对象的选项将被混入该组件本身的选项。???

26. vue中，一个路由的切换会涉及到整个生命周期，但是如果加入keep-alive标签，则不涉及生命周期的destroyed.此时可在组件中加入生命周期 activated 和 deactivated 触发操作。

> 在 2.2.0 及其更高版本中，activated 和 deactivated 将会在 <keep-alive> 树内的所有嵌套组件中触发。主要用于保留组件状态或避免重新渲染。

27. keep-alive 中才能触发以下的watch中的'$routr',监听其他参数和keep-alive无关

```
watch: {
    '$route' (to, from) {
      this.state = 1
      // 对路由变化作出响应...
    }
  },
```

28. this.$refs.name 或 this.$refs.name.$el 报错的原因通常是该元素创建的时候被隐藏了。应该在updated()生命周期内调用即可。

29. 子组件——this.$emit('shijianming', item)
父组件—— @shijianming="fangfa"

30. 编写公用组件时不要修改 props 的值，修改 data 里的值为好

31. vue 如何让页面强制刷新`this.$router.go(0)`

32. 修改vuex里的某个action需要全部重新设置，只修改action中的某一个，其他都会被清空

33. 监听子组件本身的props时，得该props有变化才能监听到，没变化watch不到

34. vue动画，使用v-show需要用到 transition-group 标签， transiton 标签只适合标签内只含一个元素时使用

35. import 必须在其它所有业务代码前面

36. computed属性只有在页面中有渲染时才触发,data中数据变化

37. 当computed 计算路由获取某个数据时，不可以在computed进行数据保存，因为页面跳转的一瞬间也会进行计算

38. 语义版本号分为X.Y.Z三位，分别代表主版本号、次版本号和补丁版本号。当代码变更时，版本号按以下原则更新。

+ 如果只是修复bug，需要更新Z位。

+ 如果是新增了功能，但是向下兼容，需要更新Y位。

+ 如果有大变动，向下不兼容，需要更新X位。
