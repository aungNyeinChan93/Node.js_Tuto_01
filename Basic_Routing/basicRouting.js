const http = require("http")
const fs = require("fs");


const server = http.createServer(function(req,res){
    if(req.url === "/" || req.url === "home"){
        let myRaedStr = fs.createReadStream("./index.html");
        res.writeHead(200,{"Content-type":"text/html"})
        myRaedStr.pipe(res)
    }
    else if(req.url === "/about"){
        let myRaedStr2 = fs.createReadStream("./about.html");
        res.writeHead(200,{"Content-type":"text/html"})
        myRaedStr2.pipe(res)
    }
    else if(req.url === "/api" ){
        const api = {
            name:"hello",
            email:"world"
        }
        res.writeHead(200,{"Content-type":"application/json"})
        res.end(JSON.stringify(api))
    }
    else{
        res.writeHead(200,{"Content-type":"text/plain"})
        res.end("Opps! Page not found")
    }
});


server.listen(4000,function(){
    console.log(`server is running `);
})