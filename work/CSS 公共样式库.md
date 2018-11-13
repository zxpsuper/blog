# CSS 公共样式库

- 作者：郑晓鹏

- 版本：1.0.0

- 最后更新时间：2018/11/08

## 样式库结构

样式 reset + 基础样式 + 自定义颜色样式

### 样式 reset

本库使用的是 [normalize.css v8.0.1](https://github.com/necolas/normalize.css) 重置标签样式。所有标签重置为 box-sizing: border-box; IE 盒子模型。

### 基础样式介绍

#### 1. 文本系列

| 类名            | 效果                               |
| :-------------- | :--------------------------------- |
| text-left       | 文本左对齐                         |
| text-rignt      | 文本右对齐                         |
| text-center     | 文本水平居中                       |
| text-lowercase  | 文本字母小写                       |
| text-uppercase  | 文本字母大写                       |
| text-capitalize | 单词首字母大写                     |
| text-nowrap     | 段落不换行                         |
| no-wrap         | 单行文字过多三点隐藏，需自定义宽度 |
| no-wrap2        | 双行文字过多三点隐藏，需自定义宽度 |

#### 2. 行内元素对齐系列

| 类名        | 效果             |
| :---------- | :--------------- |
| span-top    | 行内元素顶部对齐 |
| span-middle | 行内元素垂直居中 |
| span-bottom | 行内元素底部对齐 |

#### 3. 浮动系列

| 类名         | 效果                   |
| :----------- | :--------------------- |
| pull-left    | 左浮动                 |
| pull-left    | 右浮动                 |
| center-block | 不浮动，块元素水平居中 |
| clear-float  | 清除浮动               |

#### 4. display 系列

| 类名             | 效果                        |
| :--------------- | :-------------------------- |
| show             | 显示                        |
| hidden           | 消失                        |
| invisible        | 隐藏                        |
| dis-block        | display 设置为 block        |
| dis-inline       | display 设置为 inline       |
| dis-inline-block | display 设置为 inline-block |

#### 5. flex 布局系列

| 类名          | 效果                 |
| :------------ | :------------------- |
| flex          | 设置为 flex 布局     |
| flex-wrap     | 设置 flex 换行       |
| x-center      | x 轴居中             |
| y-center      | y 轴居中             |
| space-between | x 轴元素空格中间环绕 |
| space-around  | x 轴元素空格四周环绕 |

#### 6. 盒子模型系列

本文库设置了 margin 与 padding, 包含 margin-left, margin-right, margin-top, margin-bottom, padding-left, padding-right, padding-top, padding-bottom.

像素值从 2px 至 40px， 均为偶数像素， 使用方法：`mt-10, mb-10, ml-10, mr10, pr-10...`

### 自定义颜色样式

可自行根据不同项目颜色风格进行增添修改。

## 基础库增添说明

1. 样式命名语义化，遵从 bem 规则(块，元素，修饰)
2. 增加基础样式时需及时更新文档，版本号及版本说明

## 版本介绍

- 1.0.0

创建公共样式基础库
