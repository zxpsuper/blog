# Vue 面试题目总结

## 背景

琳琅满目的面试文章，也想自己整理归纳下，加深理解与分享。

## 正文

### 1. 讲一讲什么是 MVVM

---

MVVM 是 Model-View-ViewModel 缩写，Model 层代表数据模型，View 代表视图，ViewModel 是 View 和 Model 层的桥梁，数据会绑定到 viewModel 层并自动将数据渲染到页面中，视图变化的时候会通知 viewModel 层更新数据。

### 2. 简单说一下 Vue 响应式数据原理

---

-   Vue@2.x 在初始化数据时，会使用 Object.defineProperty 重新定义 data 中的所有属性，当页面使用对应属性时，首先会进行依赖收集(收集当前组件的 watcher),如果属性发生变化会通知相关依赖进行更新操作(发布订阅)

-   Vue@3.x 改用 Proxy 替代 Object.defineProperty 进行同样的操作。

    **为何 Vue@3.x 改用 Proxy 替代 Object.defineProperty ？（缺陷与优势）**

    1. Object.defineProperty 无法监控到数组下标的变化，导致通过数组下标添加元素，不能实时响应；
    2. Object.defineProperty 只能劫持对象的属性，从而需要对每个对象，每个属性进行遍历，如果，属性值是对象，还需要深度遍历。Proxy 可以劫持整个对象，并返回一个新的对象。

    3. Proxy 不仅可以代理对象，还可以代理数组。还可以代理动态增加的属性。并且作为新标准将受到浏览器厂商重点持续的性能优化。

    **对于上述 Object.defineProperty 的缺陷，vue 做了哪些优化？**

    vue 使用了原型拦截的方式的方式，重写了数组的 7 个方法。这样当调用数组 api 时，可以通知依赖更新。如果数组中包含着引用类型，会对数组中的引用类型再次递归遍历进行监控。这样就实现了监测数组变化。

### 3. Vue 的 nextTick 原理

---

[《全面解析 Vue.nextTick 实现原理》](https://mp.weixin.qq.com/s/mCcW4OYj3p3471ghMBylBw)

[《Vue 源码阅读 - 批量异步更新与 nextTick 原理》](https://juejin.im/post/5b50760f5188251ad06b61be)

### 4. vue 实例化做了哪些事

---

[《实例化 vue 发生了什么》](https://segmentfault.com/a/1190000012835456)

[《如何解释 vue 的生命周期才能令面试官满意？》](https://zhuanlan.zhihu.com/p/79464753)

<details>
  <summary>图片展示</summary>
  
  ![](https://static01.imgkr.com/temp/a498f524e60f4336bcccb67f53fb46d8.png)

</details>

### 5. computed 和 watch 有什么区别及运用场景

---

**区别**

computed 计算属性 : 依赖其它属性值, 并且 computed 的值有缓存, 只有它依赖的属性值发生改变, 下一次获取 computed 的值时才会重新计算 computed 的值。

watch 侦听器 : 更多的是「观察」的作用,无缓存性,类似于某些数据的监听回调,每当监听的数据变化时都会执行回调进行后续操作。

**运用场景**

当我们需要进行数值计算,并且依赖于其它数据时, 应该使用 computed, 因为可以利用 computed 的缓存特性, 避免每次获取值时,都要重新计算。

当我们需要在数据变化时执行异步或开销较大的操作时, 应该使用 watch,使用 watch 选项允许我们执行异步操作 ( 访问一个 API ), 限制我们执行该操作的频率, 并在我们得到最终结果前,设置中间状态。这些都是计算属性无法做到的。

### 6. 组件之间通信方式

---

子向父：父组件在自己作用域下定义传递自定义事件给子组件，子组件使用\$emit 触发，传值给父组件的回调使用。

父向子：父组件通过 props 给子组件；父组件使用 ref 引用子组件实例，访问子组件的数据和方法。

跨级组件通信：使用 provide/inject，父组件可以向所有子组件传值。

任意组件：使用 Vuex 或者 Event Bus；当前组件找到需要传值组件的实例，使用 `$on` 和 `$emit` 传值。

### 7. Vue 组件中的 name 属性的作用

---

组件在全局用 Vue.component() 注册时，全局 ID 自动作为组件的 name。

指定 name 选项的另一个好处是便于调试。有名字的组件有更友好的警告信息。另外，当在有 vue-devtools，未命名组件将显示成 `<AnonymousComponent>`，这很没有语义。通过提供 name 选项，可以获得更有语义信息的组件树。

### 8. Vue Diff 的比较逻辑

---

Vue 只会对**新旧节点**中 **父节点是相同节点** 的 **那一层子节点** 进行比较

也可以说成是—— **只有两个新旧节点是相同节点的时候，才会去比较他们各自的子节点**

最大的根节点一开始可以直接比较，这也叫做 **同层级比较**，并不需要递归，虽然好像降低了一些复用性，也是为了避免过度优化，是一种很高效的 Diff 算法

**比较逻辑：**

> 1、能不移动，尽量不移动
>
> 2、没得办法，只好移动
>
> 3、实在不行，新建或删除

### 9. Vue 中的 key 到底有什么用

---

-   key 是给每一个 vnode 的唯一 id, 依靠 key, 我们的 Diff 操作可以更准确、更快速 (对于简单列表页渲染来说 Diff 节点也更快,但会产生一些隐藏的副作用,比如可能不会产生过渡效果,或者在某些节点有绑定数据（表单）状态，会出现状态错位。)

-   Diff 算法的过程中, 先会进行新旧节点的首尾交叉对比, 当无法匹配的时候会用新节点的 key 与旧节点进行比对,从而找到相应旧节点.

-   更准确 : 因为带 key 就不是就地复用了,在 sameNode 函数 a.key === b.key 对比中可以避免就地复用的情况。所以会更加准确,如果不加 key,会导致之前节点的状态被保留下来,会产生一系列的 bug。

-   更快速 : key 的唯一性可以被 Map 数据结构充分利用,相比于遍历查找的时间复杂度 O(n), Map 的时间复杂度仅仅为 O(1)

### 10. 为何 Vuex 中 Mutation 必须是同步函数

---

> 事实上在 vuex 里面 actions 只是一个架构性的概念，并不是必须的，说到底只是一个函数，你在里面想干嘛都可以，只要最后触发 mutation 就行。异步竞态怎么处理那是用户自己的事情。vuex 真正限制你的只有 mutation 必须是同步的这一点。

> 同步的意义在于这样每一个 mutation 执行完成后都可以对应到一个新的状态（和 reducer 一样），这样 devtools 就可以打个 snapshot 存下来，然后就可以随便 time-travel 了。如果你开着 devtool 调用一个异步的 action，你可以清楚地看到它所调用的 mutation 是何时被记录下来的，并且可以立刻查看它们对应的状态。

### 11. Vue 的父组件和子组件生命周期钩子执行顺序是什么

---

-   **加载渲染过程**

    父组建： beforeCreate -> created -> beforeMount

    子组件： -> beforeCreate -> created -> beforeMount -> mounted

    父组件： -> mounted

-   **更新过程**

    父组建： beforeUpdate

    子组件： -> beforeUpdate -> updated

    父组件： -> updated

-   **销毁过程**

    父组建： beforeDestroy

    子组件： -> beforeDestroy -> destroyed

    父组件： -> destroyed

-   **总结：从外到内，再从内到外**
