20. scoped 属性是一个布尔属性。

如果使用该属性，则样式仅仅应用到 style 元素的父元素及其子元素。

21. tag="div" 标识该标签为 div 标签

22. Stylus 的引入为什么是@import "~common/stylus/variable"?

23. 路由激活样式

```
&.router-link-active
    .tab-link
      color: $color-theme
      border-bottom: 2px solid $color-theme
```

24. 浏览器通用刷新 17ms

25. 混合 (mixins) 是一种分发 Vue 组件中可复用功能的非常灵活的方式。混合对象可以包含任意组件选项。以组件使用混合对象时，所有混合对象的选项将被混入该组件本身的选项。???

26. vue 中，一个路由的切换会涉及到整个生命周期，但是如果加入 keep-alive 标签，则不涉及生命周期的 destroyed.此时可在组件中加入生命周期 activated 和 deactivated 触发操作。

> 在 2.2.0 及其更高版本中，activated 和 deactivated 将会在 <keep-alive> 树内的所有嵌套组件中触发。主要用于保留组件状态或避免重新渲染。

27. keep-alive 中才能触发以下的 watch 中的'\$routr',监听其他参数和 keep-alive 无关

```
watch: {
    '$route' (to, from) {
      this.state = 1
      // 对路由变化作出响应...
    }
  },
```

28. this.$refs.name 或 this.$refs.name.\$el 报错的原因通常是该元素创建的时候被隐藏了。应该在 updated()生命周期内调用即可。

29. 子组件——this.\$emit('shijianming', item)
    父组件—— @shijianming="fangfa"

30. 编写公用组件时不要修改 props 的值，修改 data 里的值为好

31. vue 如何让页面强制刷新`this.$router.go(0)`

32. 修改 vuex 里的某个 action 需要全部重新设置，只修改 action 中的某一个，其他都会被清空

33. 监听子组件本身的 props 时，得该 props 有变化才能监听到，没变化 watch 不到

34. vue 动画，使用 v-show 需要用到 transition-group 标签， transiton 标签只适合标签内只含一个元素时使用

35. import 必须在其它所有业务代码前面

36. computed 属性只有在页面中有渲染时才触发,data 中数据变化

37. 当 computed 计算路由获取某个数据时，不可以在 computed 进行数据保存，因为页面跳转的一瞬间也会进行计算

38. 语义版本号分为 X.Y.Z 三位，分别代表主版本号、次版本号和补丁版本号。当代码变更时，版本号按以下原则更新。

- 如果只是修复 bug，需要更新 Z 位。

- 如果是新增了功能，但是向下兼容，需要更新 Y 位。

- 如果有大变动，向下不兼容，需要更新 X 位。
