const http = require("http");
const url = require("url");

const route = {
    "GET":{
        "/": ()=>console.log(`GET /`),
        "/home": ()=>console.log(`GET /home`),
        "/about": ()=>console.log(`GET /about`),
        "/login": ()=>console.log(`GET /login`),
    },
    "POST":{
        "/": ()=>console.log(`POST /`),
        "/home": ()=>console.log(`POST /home`),
        "/about": ()=>console.log(`POST /about`),
        "/login": ()=>console.log(`POST /login`),
    }
}


const server = http.createServer((req,res)=>{
    let reqMethod  = req.method;
    let pathURL = url.parse(req.url,true);
    // console.log(pathURL.pathname);
    route[reqMethod][pathURL.pathname]();
});

server.listen(3000,function(){
    console.log(`server is running `);
});

