const { log } = require("console");
const http = require("http");

let port = 4000;

const server = http.createServer(function(req,res){
    const myObj = {
        name:"chan",
        age:12,
        gender:"male",
        email:"fasdfas@gmia.com",
        married:false,
    };
    res.writeHead(200,{"Content-type":"application/json"})
    res.end(JSON.stringify(myObj))
});

server.listen(port,function(){
    console.log(`server is running ${port}`);
})