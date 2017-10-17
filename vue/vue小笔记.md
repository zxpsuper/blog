1. v-html 指令用于输出 html 代码：

```
<div id="app"> <div v-html="message"></div> </div> 
<script> 
  new Vue({ el: '#app', data: { message: '<h1>菜鸟教程</h1>' } })
</script>
```

2. HTML 属性中的值应使用 v-bind 指令

以下实例判断 class1 的值，如果为 true 使用 class1 类的样式，否则不使用该类
```
<div id="app"> 
<label for="r1">修改颜色</label>
<input type="checkbox" v-model="class1" id="r1"> <br><br> 
<div v-bind:class="{'class1': class1}"> directiva v-bind:class </div> </div> 
<script> new Vue({ el: '#app', data:{ class1: false } }); </script>
```
v-bind:class="{'class1': class1}"
前面为值，后面为data中的key

3. 指令是带有 v- 前缀的特殊属性。

v-if v-else v-else-if
v-bind:href="url"    更新属性
v-bind:class="{'class1': class1}"
v-on:click="doSomething"
v-on 指令，它用于监听 DOM 事件
```
<div id="app"> 
<p>{{ message }}</p> 
<input v-model="message"> 
</div> 
<script> new Vue({ el: '#app', data: { message: 'Runoob!' }})</script>
```

在 input 输入框中我们可以使用 v-model 指令来实现双向数据绑定
`methods: { reverseMessage: function () { this.message = this.message.split('').reverse().join('') } }`
事件放置于methods：{}中

4. 过滤器

Vue.js 允许你自定义过滤器，被用作一些常见的文本格式化。由"管道符"指示, 格式如下：
```
<!-- 在两个大括号中 -->
{{ message | capitalize }}

<!-- 在 v-bind 指令中 -->
<div v-bind:id="rawId | formatId"></div>
```

过滤器函数接受表达式的值作为第一个参数。
以下实例对输入的字符串第一个字母转为大写：
```
<div id="app"> {{ message | capitalize }} </div> 
<script> 
new Vue({
 el: '#app', 
data: { message: 'runoob' }, 
filters: { 
capitalize: function (value) { 
if (!value) return '' 
value = value.toString() 
return value.charAt(0).toUpperCase() + value.slice(1) } } }) 
</script>
```
过滤器可以串联：
`{{ message | filterA | filterB }}`

5. v-bind 缩写

Vue.js 为两个最为常用的指令提供了特别的缩写：
```
<!-- 完整语法 -->
<a v-bind:href="url"></a>
<!-- 缩写 -->
<a :href="url"></a>
```

6. v-on 缩写
```
<a v-on:click="doSomething"></a>
<!-- 缩写 -->
<a @click="doSomething"></a>
```

7. v-show
我们也可以使用 v-show 指令来根据条件展示元素：
```
<h1 v-show="ok">Hello!</h1>
注意: v-show 不支持 <template> 语法。
```

8. v-for 指令

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

9. 样式绑定

```
<div class="static" v-bind:class="{ active: isActive, 'text-danger': hasError }"> </div>
//与小程序相反，判断条件在后，且当样式名中含有—时需用引号包含

<div id="app"> <div v-bind:style="{ color: activeColor, fontSize: fontSize + 'px' }">菜鸟教程</div> </div>

<div v-bind:class="[errorClass ,isActive ? activeClass : '']"></div>

```
style 后为单大括号

10. 事件修饰符

Vue.js 为 v-on 提供了事件修饰符来处理 DOM 事件细节，如：event.preventDefault() 或 event.stopPropagation()。
Vue.js通过由点(.)表示的指令后缀来调用修饰符。
.stop
.prevent
.capture
.self
.once
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

11. 按键修饰符

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

12. 修饰符

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

13. 注册全局组件

注册一个全局组件语法格式如下：
> Vue.component(tagName, options)

14. Prop

prop 是父组件用来传递数据的一个自定义属性。
父组件的数据需要通过 props 把数据传给子组件，子组件需要显式地用 props 选项声明 "prop"：
```<div id="app"> <child message="hello!"></child> </div> 
<script> 
// 注册 
Vue.component('child', { 
// 声明 
props props: ['message'], // 同样也可以在 vm 实例中像 "this.message" 这样使用 
template: '<span>{{ message }}</span>' })
 // 创建根实例 
new Vue({ el: '#app' }) </script>
```

v-for=”(item,index) in super”
v-bind:class=”active”这个类不会覆盖，只会添加，所以前面可以存在类。

15. import & exports

在JavaScript ES6中，export与export default均可用于导出常量、函数、文件、模块等，你可以在其它文件或模块中通过import+(常量 | 函数 | 文件 | 模块)名的方式，将其导入，以便能够对其进行使用，但在一个文件或模块中，export、import可以有多个，export default仅有一个。 
具体使用： 

```
//demo1.js
export const str = 'hello world'
export function f(a){
    return a+1
}
```
对应的导入方式：
```
//demo2.js
import { str, f } from 'demo1' //也可以分开写两次，导入的时候带花括号
```


```
//demo1.js
export default const str = 'hello world'
```
对应的导入方式：
```
//demo2.js
import str from 'demo1' //导入的时候没有花括号
``` 

16. 路由跳转的几种方式

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

17. 路由数据传递方式

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

18. try{}catch{}finally{}的用法

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

19. async 与 await

async 表示函数里有异步操作，await 表示紧跟在后面的表达式需要等待结果。

20. router.beforeEach() 每次路由切换调用的函数
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

21. 一些安装指令

安装淘宝镜像
npm install -g cnpm --registry=https://registry.npm.taobao.org

安装webpack
cnpm install webpack –g

安装vue脚手架
npm install vue-cli –g

22. Router中的{ path: '星号', redirect: '/home' }设置通用路径，即其他不可识别的通用路径

23. Vue.http.options.emulateJSON = true

——emulateJSON(布尔值)
默认值为：false,当值为true并且data为对象时，设置请求头Content-Type的值为application/x-www-form-urlencoded

如果服务器无法处理编码为application/json的请求，可以启用emulateJSON选项。启用之后，请求会以application/x-www-form-urlencoded为MIME type，就像普通的HTML表单一样。

24. Vue.http.options.crossOrigin = true

——crossOrigin（布尔值）
默认值为：null，表示是否跨域，如果没有设置该属性，vue-resource内部会判断浏览器当前URL和请求URL是否跨域。

25. Vue.http.options.emulateHTTP = true;

——emulateHTTP（布尔值）
默认值为:false,当值为true是，用HTTP的POST方式PUT，PATCH，DELETE等请求，并设置请求头字段HTTP_Method_Override为原始请求方法。

如果Web服务器无法处理PUT, PATCH和DELETE这种REST风格的请求，你可以启用enulateHTTP现象。启用该选项后，请求会以普通的POST方法发出，并且HTTP头信息的X-HTTP-Method-Override属性会设置为实际的HTTP方法。

26. new vue()
```
 new Vue({
  router,
  store,
  render: h => h(App)  
  //es6 render: (function(h){return: h(app)})
}).$mount('#app')
```

.$mount('#app')——当Vue实例没有el属性时，则该实例尚没有挂载到某个dom中；假如需要延迟挂载，可以在之后手动调用vm.$mount()方法来挂载。

27. css画叉
```
.a{ 
  display: inline-block; 
  width: 20px;
  height:5px; 
  background: #ccc;
  line-height:0;
  font-size:0;
  vertical-align:middle;
  -webkit-transform: rotate(45deg);
  position: absolute;
  top: 16px;
  right: 13px;
}
.a:after{
  content:'/';
  display:block;
  width: 20px;
  height:5px; 
  background: #ccc;
  -webkit-transform: rotate(-90deg);
}
```

28. webpack 官方文档的介绍require.context

简单说就是：有了 require.context，我们可以通过正则匹配引入相应的文件模块。
require.context(directory, useSubdirectories, regExp)
require.context 有三个参数：
directory：说明需要检索的目录
useSubdirectories：是否检索子目录
regExp: 匹配文件的正则表达式

const apis = requireAll(require.context('./', true, /\.js$/))

29. Object.assign()

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

30. reduce 方法 (Array)

对数组中的所有元素调用指定的回调函数。该回调函数的返回值为累积结果，并且此返回值在下一次调用该回调函数时作为参数提供。
直白的说就是将一个多维的数组合并为少一维的新数组。

31.  import * as apis from '../apis'
使用这样的语法可以直接使用 ‘apis.方法名’引用方法

32. script 中的生命周期

    data() {return {}},  ——有括号
    Created(){}     ——有括号
    Mounted(){}     ——有括号
    Computed:{}
    Methods:{}
    Watch:{}
    Components:{}

33. HTMl5的sessionStorage和localStorage

html5中的Web Storage包括了两种存储方式：sessionStorage和localStorage。
sessionStorage用于本地存储一个会话（session）中的数据，这些数据只有在同一个会话中的页面才能访问并且当会话结束后数据也随之销毁。因此sessionStorage不是一种持久化的本地存储，仅仅是会话级别的存储。
而localStorage用于持久化的本地存储，除非主动删除数据，否则数据是永远不会过期的。
window.localStorage.setItem     window.localStorage.getItem

34. 3d按钮的实现

两个类：一个初始样式，一个：active样式。
主要属性：阴影，：active位置偏移。如top:5px;

35. 请求写法，结合vue-resource

Api文件夹写法：
```
export const keywordSearch = keyword => {
  return Vue.http.get(`${host}/app/keywordSearch/${keyword}`)
}
```
带参数写法：
```
export const repay = (id) => {
  return Vue.http.get(`${host}/app/repay`, { params: { id } })
}

export const pay = (parkrecordId) => {
  return Vue.http.post(`${host}/app/pay`, { parkrecordId })
}

export const payConfirm = (payrecordId) => {
  return Vue.http.put(`${host}/app/pay/confirm`, { payrecordId })
}
```
原页写法：
```
this.$http.get('/someUrl', [options]).then(function(response){    
    // 响应成功回调
}, function(response){    
    // 响应错误回调
});
```

vue-resource的请求API是按照REST风格设计的，它提供了7种请求API：

get(url, [options])
head(url, [options])   ——只请求页面的首部。
delete(url, [options])  ——请求服务器删除指定的页面
jsonp(url, [options])
post(url, [body], [options])
put(url, [body], [options]) ——PUT用于替换资源
patch(url, [body], [options]) ——PATCH用于更新部分资源

36. vue项目的创建

**全局安装 vue-cli**
$ npm install --global vue-cli
**创建一个基于 webpack 模板的新项目**
$ vue init webpack my-project
**安装依赖，走你**
$ cd my-project
$ npm install
$ npm run dev

37. 淘宝镜像快速安装，可写于package.json中
 npm install --registry=https://registry.npm.taobao.org

38. 设置启动端口

  "dev80": "set PORT=80&&npm run dev",
  "dev8088": "set PORT=8088&&npm run dev"

39. 关于package-lock.json

npm 5 的一些大的变化：
使用npm install xxx命令安装模块时，不再需要--save选项，会自动将模块依赖信息保存到 

package.json 文件；
安装模块操作（改变 node_modules 文件夹内容）会生成或更新 package-lock.json 文件
发布的模块不会包含 package-lock.json 文件
如果手动修改了 package.json 文件中已有模块的版本，直接执行npm install不会安装新指定的版本，只能通过npm install xxx@yy更新
重新安装模块之所以快，是因为 package-lock.json 文件中已经记录了整个 node_modules 文件夹的树状结构，甚至连模块的下载地址都记录了，再重新安装的时候只需要直接下载文件即可

40. 首页适配手机的标准写法

```
<meta name="viewport" content="width=device-width, initial-scale=1.0, maximum-scale=1.0, minimum-scale=1.0, user-scalable=no">
```

41. vue2.0提供了一个keep-alive组件

用来缓存组件,避免多次加载相应的组件,减少性能消耗
```
<keep-alive>
   <router-view></router-view>
</keep-alive>
```

42. scoped 属性是一个布尔属性。

如果使用该属性，则样式仅仅应用到 style 元素的父元素及其子元素。

43. tag="div" 标识该标签为div标签

44. Stylus 的引入为什么是@import "~common/stylus/variable"?

45. 路由标签跳转方式：`<router-link tag="div" class="tab-item" to="/recommend">`

46. 路由激活样式

```
&.router-link-active
    .tab-link
      color: $color-theme
      border-bottom: 2px solid $color-theme
```

47. box-sizing:border-box  使用该类的盒子并排显示

48. 浏览器通用刷新17ms

49. += 比如 x+ = y，相当于x = x + y

50. encodeURIComponent() 函数可把字符串作为 URI 组件进行编码

51. substring() 方法用于提取字符串中介于两个指定下标之间的字符。stringObject.substring(start,stop)

52. 混合 (mixins) 是一种分发 Vue 组件中可复用功能的非常灵活的方式。混合对象可以包含任意组件选项。以组件使用混合对象时，所有混合对象的选项将被混入该组件本身的选项。

53. Array.map() 与array.forEach() 的区别

(1).map()方法 

map定义和用法： 
map方法返回一个新的数组，数组中的元素为原始数组调用函数处理后的值。 
我的理解就是：原数组进行处理之后对应的一个新的数组。 
map()方法按照原始数组元素顺序依次处理元素。 
注意：map()方法不会对空数组进行检测。 
map()方法不会改变原始数组。
map支持return

(2).forEach() 只是对数组内元素的操作，不会生成新数组