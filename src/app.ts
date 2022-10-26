import express, {Request, Response, NextFunction} from "express";
// import {Request, Response, NextFunction} from 'express';
import mysql from "mysql";

const app = express();
const port = 3307;
// const dbconfig = require('./config/database.ts');
//const userRouter = require("../ts-project/routes/routes");
// const express = require("express");
var http = require("http");
var bodyParser = require("body-parser");

interface uJson {
  id: string;
  pw: string;
  name: string;
  email: string;
}

const connection = mysql.createConnection({
  host: "127.0.0.1",
  user: "root",
  password: "root",
  database: "user_info",
});

connection.connect();

// const asd = connection.query("SELECT now()");
// console.log(asd);
app.get("/", async (req, res ) => {
  connection.query(`select * FROM user`, (error, result, fields) => {
    console.log(result);
    res.send(`Data <br/><br/> ${JSON.stringify(result)}`);
  });
});

app.use('/signUp',express.static((__dirname + '/public/signUp.html')));

app.use('/signUp',bodyParser.urlencoded({ extended : false }));

app.post("/signUp/post", function(req, res){
  //JSON파싱
  //const uData: uJson = JSON.parse(req.body);
  
  //mysql 중복확인 후 send 출력
  if(){
  res.send('<h1>회원가입이 완료되었습니다.</h1>');
  }else{
  res.send('<h1>회원가입 실패</h1>');
  }
});

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`);
});