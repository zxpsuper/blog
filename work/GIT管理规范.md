## GIT 管理规范

### 长期分支

项目存在几个长期分支。

-   主分支 master ，用于存放对外发布的版本，任何时候在这个分支拿到的，都是稳定的分布版

-   开发分支 develop，用于日常开发，存放最新的开发版。

其次，项目存在三种短期分支。

### 短期分支

-   功能分支（feature branch）
-   补丁分支（hotfix branch）
-   预发分支（release branch）

一旦完成开发，它们就会被合并进 develop 或 master，然后被删除。
