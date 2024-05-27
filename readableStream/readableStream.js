const fs = require("fs")


let myReadableStr = fs.createReadStream("./mytest01.txt");

myReadableStr.on("data",function(chunk){
    console.log(chunk);
});

