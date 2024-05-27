const http = require("http")
const fs = require("fs");
const { clear } = require("console");

const myReadStr = fs.createReadStream("../readableStream/mytest01.txt","utf-8")

const server = http.createServer(function(req,res){
    res.writeHead(200,{"Content-type":"text,plain"});
    myReadStr.pipe(res);
});

server.listen(4000,function(){
    console.log(`Server is running port 4000`);
})

