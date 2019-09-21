const express = require("express");
const mongodb = require("mongodb");
const bodyParser = require("body-parser");
const path = require("path");
const db = require("./module/db");
const tools = require("./module/tools");
const app = express();
app.use(bodyParser.json());
// 所有的方式，所有的地址均满足条件。
app.all("*", function (req, res, next) {
    res.header("Access-Control-Allow-Origin", "*");// 设置你的数据源
    res.header("Access-Control-Allow-Headers", "content-type");// 限制请求头
    res.header("Access-Control-Allow-Methods", "PUT,DELETE");// 是否允许PUT,delete
    next();
})


app.listen(8080, function () {
    console.log("success");
})