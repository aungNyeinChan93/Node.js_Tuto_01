const http =require("http")

const port = 5000;

const server = http.createServer(function(req,res){
    res.writeHead(200,{"Content-type":"text/html"})
    res.end("hello Chan")
});

server.listen(port,()=>{
    console.log(`Server is running in port ${port}`);
});

