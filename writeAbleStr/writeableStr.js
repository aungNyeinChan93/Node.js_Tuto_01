const fs = require("fs")

let readStr = fs.createReadStream("../readableStream/mytest01.txt","utf-8");

let writeStr =fs.createWriteStream("./new.txt");

readStr.on("data",function(chunk){
    writeStr.write(chunk)
});

