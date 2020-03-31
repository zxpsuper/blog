# mysql 学习笔记

1. 登录查看

```js
// 登录 MySQL 数据库
mysql -u root -p

// 查看所有数据库
show databases;
// 使用数据库
use [name]
// 查看当前数据库表
show tables;
```

2. 数据定义语言（DDL）

```js
// 创建数据库
CREATE DATABASE mydb;

// 创建表（写成一行）
CREATE TABLE teacher(
    id int primary key auto_increment,
    name varchar(20),
    gender char(1),
    age int(2),
    birth date,
    description varchar(100)
);

// 查看表结构 desc + 表名
desc teacher;

// 删除表
DROP TABLE teacher;

// 修改表结构
alter table test add column job varchar(10);  // --添加表列
alter table test rename test1; // --修改表名
alter table test drop column name; // --删除表列
alter table test modify address char(10) // --修改表列类型（改类型）
alter table test change address address1  char(40) // --修改表列类型（改名字和类型，和下面的一行效果一样）
alter table test change column address address1 varchar(30) // --修改表列名（改名字和类型）
```

3. 数据操纵语言（DML）

数据操纵语言：Data Manipulation Language。如：INSERT（增）, UPDATE（改）, DELETE（删）语句

```js
// 添加数据
// INSERT INTO 表名(字段1,字段2,字段3) values(值，值，值);

insert into teachers(id, name, birth, gender,age,description) values(0, 'smyh','2012-10-22', 'b',22, '大哥你好');

// 查询表的所有记录：

select * from teachers;

// 修改数据
// UPDATE 表名 SET 字段1名=值,字段2名=值,字段3名=值 where 字段名=值;
 update teachers set name='teacher_name' where name='name'

// 删除数据
// 删除所有记录：
DELETE FROM 表名;
// 删除ID为1的记录：
DELETE FROM 表名 where id=1;
```

4. 数据查询语言（DRL）

```js

select * from teachers;
// 查询ID为2的老师信息：
select * from teachers where id=2;

// 查询ID为2的老师的姓名和性别：
select name,gender from teachers where id=2;

// 且或选择
select * from teachers where gender='b' and age=22;
select * from teachers where gender='b' or age=22;
select * from teachers where gender='b' or age<22;


// 查询姓名的最后一个字符为“e”的老师：（关键字：like '%+指定字符'）
select * from teachers where name like '%e';
// 查询姓名以指定字符开头的老师：
select * from teachers where name like 's%';
// 查询姓名中包含“m”的老师:
select * from teachers where name like '%m%';


// 查询所有老师信息，并按日期降序或者升序排列:（ORDER BY 字段，+默认为升序：ASC/降序：DESC）

// 升序：
select * from teachers order by createDate;
// 注：最后一个单词ASC可写可不写，因为默认为升序。

// 降序：
select * from teachers order by createDate desc;
```
