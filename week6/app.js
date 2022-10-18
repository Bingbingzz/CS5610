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


const logger = require("./logger");
// console.log(logger);
logger.logFunction();
console.log(logger.versionVar);