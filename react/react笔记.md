React入门教程

1. npm 的安装配置说明
在命令行中，我们输入:
npm config set registry https://registry.npm.taobao.org
来修改npm默认的安装源，通过:
npm config get registry
来检验一下刚才的配置是否成功。

我们还可以使用淘宝镜像提供的cnpm工具，通过cnpm来安装包一般速度会更快一些，我们可以直接复制文档中的命令：
npm install -g cnpm --registry=https://registry.npm.taobao.org

新文件夹：npm init -y 
cnpm install react react-dom --save

2. 体验一下 React 的话，最快且最简单的方式是使用 React 官方提供的 Codepen 模板https://codepen.io/gaearon/pen/rrpgNB?editors=0010
再介绍给大家一个替代品，Codepan，也只需要打开一个网址：
https://codepan.net/boilerplate/react

3. React 官方专门为我们准备了专用的 React 项目生成工具 create-react-app，只需要简单几行代码即可生成 React 项目，并且在开发时还支持实时更新，自动重载等功能。
npm install -g create-react-app
create-react-app my-app
cd my-app
npm start

- npm run eject 可以显示被隐藏的webpack

4. JSX 在嵌套时，最外层有且只能有一个标签，否则就会出错袄：
```
// 这是一个错误示例
// 错误let myTitle = <p>Hello</p><p>World</p>;
（2）JSX 语法中可以插入 JavaScript 代码，使用大括号。
let myTitle = <p>{'Hello ' + 'World'}</p>
```

5. React 需要加载两个库：React 和 React-DOM，前者是 React 的核心库，后者是 React 的 DOM 适配库。

6. Babel 用来在浏览器转换 JSX 语法，如果服务器已经转好了，浏览器就不需要加载这个库。
Ajax 请求一般在componentDidMount方法里面发出。

7. 在形式上，action就是带有type属性的JS对象。在Redux的约定中，我们要将所有改变应用状态的操作规范为一个个action，在action中，我们也可以附上要用来修改应用状态state的数据：

{ type: 'ADD_TODO', text: 'Use Redux' }
{ type: 'REMOVE_TODO', id: 42 }
{ type: 'LOAD_ARTICLE', response: { ... } }

8. 生命周期

当组件在客户端被实例化，第一次被创建时，以下方法依次被调用：

1、getDefaultProps
2、getInitialState
3、componentWillMount
4、render
5、componentDidMount
6、componentDidUpdate

9. Codepen 地址：
https://codepen.io/zxpsuper/pen/dzagod?editors=1010

Js引入：https://cdnjs.cloudflare.com/ajax/libs/react/15.3.1/react.min.js
https://cdnjs.cloudflare.com/ajax/libs/react/15.3.1/react-dom.min.js

或者使用国内 codepan: https://codepan.net/boilerplate/react
