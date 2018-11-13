# Vue 开发规范

## 目录

- [命名](#name)
- [Props](#props)
- [Data](#data)
- [Template](#template)
- [Style](#style)
- [Filter](#filter)
- [注释](#zhushi)
- [Ajax](#ajax)
- [其他](#other)

## 1. <a id="name">命名</a>

- 组件名应该始终是多个单词的，根组件 App 除外。

这样做可以避免跟现有的以及未来的 HTML 元素相冲突，因为所有的 HTML 元素名称都是单个单词的。

```js
Vue.component("todo-item", {
  // ...
});

export default {
  name: "TodoItem"
  // ...
};
```

- 组件命名使用 kebab-case, 不使用大写字母

```
my-component.vue
```

- 基础组件应存放于 base 文件夹，命名以 v- 开头， 如`v-button.vue`

- 紧密耦合的组件名

和父组件紧密耦合的子组件应该以父组件名作为前缀命名。

如果一个组件只在某个父组件的场景下有意义，这层关系应该体现在其名字上。因为编辑器通常会按字母顺序组织文件，所以这样做可以把相关联的文件排在一起。

```
components/
|- TodoList.vue
|- TodoListItem.vue
|- TodoListItemButton.vue
```

- 组件名中的单词顺序

组件名应该以高级别的 (通常是一般化描述的) 单词开头，以描述性的修饰词结尾。

这样相同对象的组件在编辑器中排序整齐，若动词开头，则文件顺序较为杂乱

```
components/
|- SearchButtonClear.vue
|- SearchButtonRun.vue
|- SearchInputExcludeGlob.vue
|- SearchInputQuery.vue
|- SettingsCheckboxLaunchOnStartup.vue
|- SettingsCheckboxTerms.vue
```

## 2. <a id="props">Props</a>

- prop 的定义应该尽量详细，至少需要指定其类型。

> 详细的 prop 定义有两个好处：
>
> 它们写明了组件的 API，所以很容易看懂组件的用法；
>
> 在开发环境下，如果向一个组件提供格式不正确的 prop，Vue 将会告警，以帮助你捕获潜在的错误来源。

```js
// 更好的做法！
props: {
  status: {
    type: String,
    required: true,
    validator: function (value) {
      return [
        'syncing',
        'synced',
        'version-conflict',
        'error'
      ].indexOf(value) !== -1
    }
  }
}
```

- 在声明 prop 的时候，其命名应该始终使用 camelCase，而在模板和 JSX 中应该始终使用 kebab-case。

```js
props: {
  greetingText: String;
}
// html
<WelcomeMessage greeting-text="hi" />;
```

## 3. <a id="data">data</a>

- 组件的 data 必须是一个函数。

当 data 的值是一个对象时，它会在这个组件的所有实例之间共享。因此页面中多次用到这个组件时会出现错误。

```js
// In a .vue file
export default {
  data() {
    return {
      foo: "bar"
    };
  }
};

// 在一个 Vue 的根实例上
// 直接使用对象是可以的，
// 因为只存在一个这样的实例。
new Vue({
  data: {
    foo: "bar"
  }
});
```

- data return 的属性有必要增加注释说明

```js
data() {
  return {
    iconSwitch: false // icon开关
  }
}
```

## 4. <a id="template">template</a>

- 为 v-for 设置键值 key
  能解决一些极端情况下出现的异常，也便于 diff 算法以最少的 dom 操作更新视图。不建议用 index, 建议用数据中的 id.

```html
<ul>
  <li
    v-for="todo in todos"
    :key="todo.id"
  >
    {{ todo.text }}
  </li>
</ul>
```

- 避免 v-if 和 v-for 用在一起
  两者同时存在与一个标签上时，v-for 优先级高于 v-if

```html
<ul v-if="shouldShowUsers">
  <li
    v-for="user in users"
    :key="user.id"
  >
    {{ user.name }}
  <li>
</ul>
```

- 自闭合组件

自闭合组件表示它们不仅没有内容，而且刻意没有内容。其不同之处就好像书上的一页白纸对比贴有“本页有意留白”标签的白纸。而且没有了额外的闭合标签，你的代码也更简洁。

不幸的是，HTML 并不支持自闭合的自定义元素——只有官方的“空”元素。所以上述策略仅适用于进入 DOM 之前 Vue 的模板编译器能够触达的地方，然后再产出符合 DOM 规范的 HTML。

```html
<!-- 在单文件组件、字符串模板和 JSX 中 -->
<MyComponent/>

<!-- 在 DOM 模板中 -->
<!-- 在所有地方 -->
<my-component></my-component>
```

- 多个特性的元素应该分多行撰写，每个特性一行。

```html
<img
  src="https://vuejs.org/images/logo.png"
  alt="Vue Logo"
>
```

- 组件模板应该只包含简单的表达式，复杂的表达式则应该重构为计算属性或方法。

```js
// 不推荐
{
  {
    fullName
      .split(" ")
      .map(function(word) {
        return word[0].toUpperCase() + word.slice(1);
      })
      .join(" ");
  }
}
// 建议
{
  {
    normalizedFullName;
  }
}
```

- 指令都用缩写

- 单文件组件的顶级元素的顺序

单文件组件应该总是让 `<script>、<template> 和 <style>` 标签的顺序保持一致。且 `<style>` 要放在最后，因为另外两个标签至少要有一个。

```html
<!-- 推荐此顺序 -->
<template>...</template>
<script>/* ... */</script>
<style>/* ... */</style>
```

## 5. <a id="style">style</a>

- 为组件样式设置作用域
  对于应用来说，顶级 App 组件和布局组件中的样式可以是全局的，但是其它所有组件都应该是有作用域的。加入 score 可以避免样式污染问题

```html
<!-- 使用 `scoped` 特性 -->
<style scoped>
.button {
  border: none;
  border-radius: 2px;
}

.button-close {
  background-color: red;
}
</style>
```

## 6. <a id="filter">filter</a>

- filter 应在全局的 filter.js 中注册，用于处理页面数据

```js
{
  {
    list.time | formatTime;
  }
}
```

## 7. <a id="zhushi">注释</a>

- 公共组件使用说明
- 各组件中重要函数或者类说明
- 复杂的业务逻辑处理说明
- 特殊情况的代码处理说明,对于代码中特殊用途的变量、存在临界值、函数中使用的 hack、使用了某种算法或思路等需要进行注释描述
- 注释块必须以/**（至少两个星号）开头**/；
- 单行注释使用//；

## 8. <a id="ajax">ajax</a>

- 关于接口的文件应置于 api 文件夹下，ajax 挂载在 main.js 里.

```js
Vue.prototype.$ajax = axios;
```

## <a id="other">其他</a>

- vue 方法放置顺序

name - component - props - data - computed - watch - created -

mounted - activited - updated - methods - destoryed
