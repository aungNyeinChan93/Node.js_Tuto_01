const fs = require("fs")

let myReadStr = fs.createReadStream("../readableStream/mytest01.txt");

let myWriteStr = fs.createWriteStream("./new02.txt");

myReadStr.on("data",()=>{
    myReadStr.pipe(myWriteStr)
})
