const http = require("http")

const fs = require("fs")

const myReadStr = fs.createReadStream("./index.html")

const server = http.createServer(function(req,res){
    res.writeHead(200,{"Content-type":"text/html"});
    myReadStr.pipe(res)
});

server.listen(4002,function(){
    console.log(`server is running in port 4002`);
})