SET NAMES UTF8;
drop database if exists db;
create database db CHARACTER set utf8;
#use db;
#创建用户表
create table db.user(
  id int primary key auto_increment comment 'id PK',
  email varchar(255) NOT NULL UNIQUE comment 'email',
  username varchar(255) not null comment 'username',
  password varchar(255) not null comment 'password',
  gender varchar(255) not null comment 'gender',
  age int comment 'age',
  city varchar(255) comment 'city'
) comment 'user table';
