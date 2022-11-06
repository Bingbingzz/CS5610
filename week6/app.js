// const fs = require("fs");
// fs.writeFile("message.txt", "Hello", function(err){
//     console.log(err);
// })


// fs.readFile('message.txt',{encoding:"utf-8"},function(err, data){
//     if (err) {
//         console.log(err);

//     };
//         console.log(data);
//   });


// const logger = require("./logger");
// // console.log(logger);
// logger.logFunction();
// console.log(logger.versionVar);

// var express = require('express')
// var app = express()



const express = require('express');
const router = require(".routes/tasks");

const app = express();
const port = 3001;

app.use(express.static('public'));
app.use("/tasks", router);

//Callback function
app.get('/', function (req, res) {
//   console.log(req);
  res.send("<h1>hello world</h1>")
});

app.get("/tasks", function(req, res){
    res.send("List of all tasks");
});

app.listen(port, function(){
    console.log(`Example app listening on port ${port}!`)
});

app.get("/tasks/:taskId ", function(req,res){
    console.log(req.params);
    res.send(`You are viewing task with id ${req.params.taskId}`)

});