/**
 * Created by web-01 on 2018/2/8.
 */
const express = require('express');
const bodyParser = require('body-parser');
const mysql = require("mysql");

let pool = mysql.createPool({
    host:'127.0.0.1',
    port:3306,
    database:'db',
    user:'root',
    password:'',
    connectionLimit:10
});

let app = new express();

//配置中间件 middleware
// app.use(bodyParser.urlencoded({extended:true}));
//因为ionic使用HTTPClient提交请求的数据都是自动转为json格式
app.use(bodyParser.json());

app.listen(3000);

app.post('/signUp',(req,res)=>{
    let user = req.body.user;
    //check email
    let sql = 'select * from db.user where email = ?';
    pool.query(sql,[user.email],(err,results)=>{
        if(results.length ===1){
            res.send({"status":"err"});
        }
    });
    sql = 'insert into db.user values(NULL,?,?,?,?,?,?)';
    pool.query(sql,[
            user.email,
            user.username,
            user.password,
            user.gender,
            user.age,
            user.city
        ],(err,results,fields)=>{
        console.log(fields);
        if(err) throw err;
        if(results.affectedRows ===1){
            //sign success
            res.send({"status":"ok"});
        }else{
            //sign failed
            res.send({"status":"err"});
        }
    })
});

