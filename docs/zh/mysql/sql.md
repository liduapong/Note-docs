---
title: Mysql
date: 2020-03-08
sidebar: 'auto'
categories:
 - Mysql
tags:
 - mysql
---

# sql 分类
- DDL : 操作数据库、表
    * 操作库  CRUD
        - C create : 创建
            * 创建数据库 并判断是否存在 且设置字符集
                - create database if not exists 库名 character set gbk;
            

        - R retrieve : 查询
            * 查询所有数据库
                - show databases;

            * 查询某个数据库
                - show create database 库名;

        - U update : 修改
            * 修改数据库字符集
                - alter database 库名 character set 字符集;

        - D delete : 删除
            * 删除数据库
                - drop database if exists 库名;
    * 操作表
        - C create : 创建
            * 创建表
                - create table 表名(
                    列名1 数据类型,
                    列名2 数据类型,
                    列名3 数据类型,
                    .....
                    列名n 数据类型
                );
                - 最后一列不需要逗号
                - 常用数据类型
                    1. int : 整数
                    2. double : 小数
                    3. date : 时间 yyyy-MM-dd hh:mm:ss
                    4. datetime :
                    5. timestamp :
                    6. varchar :
                - 创建表
                    * create table student(
                        id int,
                        name varchar(32),
                        age int,
                        score double(4,1),
                        birthday date,
                        insert_time timestamp
                    )engine=MyISAM DEFAULT CHARSET=utf8;
            

        - R retrieve : 查询
            * 查询表
                - show tables;

            * 查询表结构
                - desc 表名;

        - U update : 修改
            * 修改表名
                - alter table 表名 rename to 新表名;
            * 添加列
                - alter table 表名 add 列名 数据类型;
            * 修改列名称 类型
                - alter table 表名 change 列名 新列名 新数据类型
                - alter table 表名 drop 列名

        - D delete : 删除
            * 删除数据库
                - drop table if exists 表名;

- DML : 增删改表数据
    * 添加数据
        - insert into 表名(列名1，列名2...) value(值1，值2...);
        - 除了数字类型，其他类型都需要引号修饰

    * 删除数据
        - delete from 表名 where 条件
    * 修改数据 
        - update 表名 set 列名1 = 值1, 列名2 = 值2,... [where 条件];
        
- DQL : 查询语句
    * 排序语法
        - order by

        - 排序方式
            * 升序：asc
            * 降序：desc

    * 聚合函数 排除为null的个数
        1. count
            - select count(name) from student;
        2. max
            - select max(age) from student;
        3. min
            - select min(age) from student;
        4. sum
            - select sum(age) from student;
        5. avg
            - select avg(age) from student;
    
    * 分组查询
        1. 
        2. 
        3. 

# 约束
- 分类
    * 主键约束：primary key
        1. 注意：
			1. 含义：非空且唯一
			2. 一张表只能有一个字段为主键
			3. 主键就是表中记录的唯一标识

		2. 在创建表时，添加主键约束
			create table stu(
				id int primary key,-- 给id添加主键约束
				name varchar(20)
			);

		3. 删除主键
			-- 错误 alter table stu modify id int ;
			ALTER TABLE stu DROP PRIMARY KEY;

		4. 创建完表后，添加主键
			ALTER TABLE stu MODIFY id INT PRIMARY KEY;

		5. 自动增长：
			1.  概念：如果某一列是数值类型的，使用 auto_increment 可以来完成值得自动增长

			2. 在创建表时，添加主键约束，并且完成主键自增长
			create table stu(
				id int primary key auto_increment,-- 给id添加主键约束
				name varchar(20)
			);

    * 非空约束：not null1
        1. 创建表时添加约束
			CREATE TABLE stu(
				id INT,
				NAME VARCHAR(20) NOT NULL -- name为非空
			);
		2. 创建表完后，添加非空约束
			ALTER TABLE stu MODIFY NAME VARCHAR(20) NOT NULL;

		3. 删除name的非空约束
			ALTER TABLE stu MODIFY NAME VARCHAR(20);
            
    * 唯一约束：unique
    * 外键约束：foreign key,让表于表产生关系，从而保证数据的正确性。
        1. 在创建表时，可以添加外键
			* 语法：
				create table 表名(
					....
					外键列
					constraint 外键名称 foreign key (外键列名称) references 主表名称(主表列名称)
				);

		2. 删除外键
			ALTER TABLE 表名 DROP FOREIGN KEY 外键名称;

		3. 创建表之后，添加外键
			ALTER TABLE 表名 ADD CONSTRAINT 外键名称 FOREIGN KEY (外键字段名称) REFERENCES 主表名称(主表列名称);
```    
create table tab_category(
	cid int primary key AUTO_INCREMENT,
	cname varchar(100) not null unique
);

create table tab_route(
	rid int primary key auto_increment,
	rname varchar (100) not null unique,
	price double,
	rdate date,
	cid int,
	foreign key (cid) references tab_category(cid)
);
create table tab_user(
	uid int primary key auto_increment,
	username varchar(100) unique not null,
	PASSWORD varchar(20) not null,
	name varchar(100),
	birthday date,
	sex char(1) default '男',
	telephone varchar(11),
	email varchar(100)
);

create table tab_favorite(
	rid int,
	date datetime,
	uid int,
	primary key(rid,uid),
	foreign key (rid) references tab_route (rid),
	foreign key (uid) references tab_user (uid)
);
```

:::tip
练习一下
:::
```
CREATE TABLE dept(
			id INT PRIMARY KEY AUTO_INCREMENT,
			NAME VARCHAR(20)
		);
		INSERT INTO dept (NAME) VALUES ('开发部'),('市场部'),('财务部');
		# 创建员工表
		CREATE TABLE emp (
			id INT PRIMARY KEY AUTO_INCREMENT,
			NAME VARCHAR(10),
			gender CHAR(1), -- 性别
			salary DOUBLE, -- 工资
			join_date DATE, -- 入职日期
			dept_id INT,
			FOREIGN KEY (dept_id) REFERENCES dept(id) -- 外键，关联部门表(部门表的主键)
		);
		INSERT INTO emp(NAME,gender,salary,join_date,dept_id) VALUES('孙悟空','男',7200,'2013-02-24',1);
		INSERT INTO emp(NAME,gender,salary,join_date,dept_id) VALUES('猪八戒','男',3600,'2010-12-02',2);
		INSERT INTO emp(NAME,gender,salary,join_date,dept_id) VALUES('唐僧','男',9000,'2008-08-08',2);
		INSERT INTO emp(NAME,gender,salary,join_date,dept_id) VALUES('白骨精','女',5000,'2015-10-07',3);
		INSERT INTO emp(NAME,gender,salary,join_date,dept_id) VALUES('蜘蛛精','女',4500,'2011-03-14',1);

        查询员工表的名称，性别。部门表的名称
        - SELECT emp.name,gender,dept.name FROM emp,dept WHERE emp.dept_id = dept.id;

        
		- SELECT * FROM emp INNER JOIN dept ON emp.`dept_id` = dept.`id`;	

		- SELECT * FROM emp JOIN dept ON emp.`dept_id` = dept.`id`;	

        - SELECT t1.*,t2.`name` FROM emp t1 LEFT JOIN dept t2 ON t1.`dept_id` = t2.`id`;

        - SELECT * FROM dept t2 RIGHT JOIN emp t1 ON t1.`dept_id` = t2.`id`;

        - SELECT * FROM emp t1 RIGHT JOIN dept t2 ON t1.`dept_id` = t2.`id`;

        - select * from emp where emp.salary < (SELECT AVG(salary) from emp); 小于平均工资的人

        -SELECT * FROM dept t1 ,(SELECT * FROM emp WHERE emp.`join_date` > '2011-11-11') t2 WHERE t1.id = t2.dept_id;

        - SELECT * FROM emp t1,dept t2 WHERE t1.`dept_id` = t2.`id` AND t1.`join_date` >  '2011-11-11';
```

```
* 多表查询练习
-- 部门表
CREATE TABLE dept (
	id INT PRIMARY KEY PRIMARY KEY, -- 部门id
	dname VARCHAR(50), -- 部门名称
	loc VARCHAR(50) -- 部门所在地
	);
				
-- 添加4个部门
INSERT INTO dept(id,dname,loc) VALUES 
	(10,'教研部','北京'),
	(20,'学工部','上海'),
	(30,'销售部','广州'),
	(40,'财务部','深圳');
				
				
				
-- 职务表，职务名称，职务描述
CREATE TABLE job (
	id INT PRIMARY KEY,
	jname VARCHAR(20),
	description VARCHAR(50)
	);
				
-- 添加4个职务
INSERT INTO job (id, jname, description) VALUES
	(1, '董事长', '管理整个公司，接单'),
	(2, '经理', '管理部门员工'),
	(3, '销售员', '向客人推销产品'),
	(4, '文员', '使用办公软件');
				
				
				
-- 员工表
CREATE TABLE emp (
	id INT PRIMARY KEY, -- 员工id
	ename VARCHAR(50), -- 员工姓名
	job_id INT, -- 职务id
	mgr INT , -- 上级领导
    joindate DATE, -- 入职日期
    salary DECIMAL(7,2), -- 工资
    bonus DECIMAL(7,2), -- 奖金
	dept_id INT, -- 所在部门编号
	CONSTRAINT emp_jobid_ref_job_id_fk FOREIGN KEY (job_id) REFERENCES job (id),
	CONSTRAINT emp_deptid_ref_dept_id_fk FOREIGN KEY (dept_id) REFERENCES dept (id)
	);
				
-- 添加员工
INSERT INTO emp(id,ename,job_id,mgr,joindate,salary,bonus,dept_id) VALUES 
	(1001,'孙悟空',4,1004,'2000-12-17','8000.00',NULL,20),
	(1002,'卢俊义',3,1006,'2001-02-20','16000.00','3000.00',30),
	(1003,'林冲',3,1006,'2001-02-22','12500.00','5000.00',30),
	(1004,'唐僧',2,1009,'2001-04-02','29750.00',NULL,20),
	(1005,'李逵',4,1006,'2001-09-28','12500.00','14000.00',30),
	(1006,'宋江',2,1009,'2001-05-01','28500.00',NULL,30),
	(1007,'刘备',2,1009,'2001-09-01','24500.00',NULL,10),
	(1008,'猪八戒',4,1004,'2007-04-19','30000.00',NULL,20),
	(1009,'罗贯中',1,NULL,'2001-11-17','50000.00',NULL,10),
	(1010,'吴用',3,1006,'2001-09-08','15000.00','0.00',30),
	(1011,'沙僧',4,1004,'2007-05-23','11000.00',NULL,20),
	(1012,'李逵',4,1006,'2001-12-03','9500.00',NULL,30),
	(1013,'小白龙',4,1004,'2001-12-03','30000.00',NULL,20),
	(1014,'关羽',4,1007,'2002-01-23','13000.00',NULL,10);
				
				
-- 工资等级表
CREATE TABLE salarygrade (
	grade INT PRIMARY KEY,   -- 级别
	losalary INT,  -- 最低工资
	hisalary INT -- 最高工资
);
				
-- 添加5个工资等级
INSERT INTO salarygrade(grade,losalary,hisalary) VALUES 
	(1,7000,12000),
	(2,12010,14000),
	(3,14010,20000),
	(4,20010,30000),
	(5,30010,99990);
				
-- 需求：
-- 1.查询所有员工信息。查询员工编号，员工姓名，工资，职务名称，职务描述
/*
	分析: 
		1. 员工编号, 员工姓名, 工资. 需要查询emp表
		2. 职务名称, 职务描述.需要查询job表
		3. 查询条件: emp.job_id = job.id
*/
SELECT
	t1.`id`, 
	t1.`ename`, 
	t1.`salary`, 
	t2.`jname`, 
	t2.`description`
FROM
	emp t1, job t2
WHERE
	t1.`job_id` = t2.`id`;

-- 2.查询员工编号，员工姓名，工资，职务名称，职务描述，部门名称，部门位置
/*
	分析:
		1. 员工编号, 员工姓名, 工资. 需要查询emp表
		2. 职务名称, 职务描述.需要查询job表
		3. 部门名称, 部门位置.需要查询dept表
		4. 条件:emp.job_id = job.id AND emp.dept_id = dept.id
*/
SELECT
	t1.`id`, 
	t1.`ename`, 
	t1.`salary`, 
	t2.`jname`, 
	t2.`description`,
	t3.`dname`,
	t3.`loc`
FROM
	emp t1, job t2, dept t3
WHERE
	t1.`job_id` = t2.`id` AND t1.`dept_id` = t3.`id`;
   
-- 3.查询员工姓名，工资，工资等级
/*
	分析:
		1. 员工姓名, 工资. 查询emp表
		2. 工资等级. 查询salarygrade表
		3. 条件: emp.salary >= salarygrade.losalary AND emp.salary <= salarygrade.hisalary
			或者 emp.salary BETWEEN salarygrade.losalary AND salarygrade.hisalary
*/
SELECT
	t1.`ename`,
	t1.`salary`,
	t2.`grade`
FROM
	emp t1, salarygrade t2
WHERE
	t1.`salary` BETWEEN t2.`losalary` AND t2.`hisalary`;

-- 4.查询员工姓名，工资，职务名称，职务描述，部门名称，部门位置，工资等级
/*
	分析:
		1. 需要查询4个表
		3. 条件: 
			emp.job_id = job.id	员工和职位的关联
			AND 
			emp.dept_id = dept.id	员工和部门的关联
			emp.salary BETWEEN salarygrade.losalary AND salarygrade.hisalary 员工工资和工资等级的关联
			
*/
SELECT 
	t1.`ename`,
	t1.`salary`,
	t2.jname,
	t2.description,
	t3.`dname`,
	t3.`loc`,
	t4.`grade`
	
FROM
	emp t1, job t2, dept t3, salarygrade t4
WHERE
	t1.`job_id` = t2.`id`
	AND
	t1.`dept_id` = t3.`id`
	AND
	t1.`salary` BETWEEN t4.`losalary` AND t4.`hisalary`;

-- 5.查询出部门编号、部门名称、部门位置、部门人数
/*
	分析:
		1. 部门编号, 部门名称, 部门位置. 需要查询dept表
		2. 部门人数. 需要查询emp表
		3. 使用分组查询. 按照emp.dept_id完成分组. 再查询分完组后的人数 count(id)
		4. 使用子查询将第3步的查询结果和dept进行关联查询
*/
SELECT
	t1.`id`,
	t1.`dname`,
	t1.`loc`,
	t2.totalNum
FROM
	dept t1,
	(
		SELECT 
			dept_id, COUNT(dept_id) totalNum
		FROM
			emp
		GROUP BY
			dept_id
	) t2

WHERE
	t1.`id` = t2.dept_id;

	
 
-- 6.查询所有员工的姓名及其直接上级的姓名,没有领导的员工也需要查询
/*
	分析:
		1. 姓名 emp, 上级姓名 emp
			- emp表的id和mgr是自连接
		2. 条件 emp.id = emp.mgr
		3. 查询左表的所有数据和交集数据
			- 使用左外连接查询
*/

/*
-- 查询的是员工和员工的上级
select
	t1.`ename`,
	t2.`id`,
	t2.`ename`
from
	emp t1, emp t2
where
	t1.`mgr` = t2.`id`
*/

SELECT
	t1.`ename`,
	t2.`id`,
	t2.`ename`
FROM 
	emp t1
LEFT JOIN
	emp t2
ON
	t1.`mgr` = t2.`id`;
```