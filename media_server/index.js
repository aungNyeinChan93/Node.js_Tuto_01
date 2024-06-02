let http = require("http")

let start = (req,res)=>{
    // console.log(req.method);
    if(req.method === "GET"){
        console.log(req.method);
        res.writeHead(200,{"Content-type":"application,json"})
        const test = {
            name:"aung",
            key:1,
            method:"GET"
        };
        res.end(JSON.stringify(test))
    }else if(req.method === "POST"){
        console.log(req.method);
        res.writeHead(200,{"Content-type":"text,html"})
        res.end("<h2>Hello world || POST</h2>")   
    }
}

let server = http.createServer(start)

server.listen(3000,()=>{
    console.log(`server is running at port 3000`);
})

