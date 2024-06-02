const http = require("http");

// request mapping
const route = {
  GET: {
    "/": () => console.log(`GET method and path is / `),
    "/contact": () => console.log(`GET method and path is /contact`),
  },
  POST: {
    "/": () => console.log(`POST method and path is / `),
    "/about": () => console.log(`POST method and path is /about`),
  },
};

const start = (req, res) => {
    let reqMethod = req.method;
    let path = req.url;
    route[reqMethod][path]();
};

const server = http.createServer(start);

server.listen(4000,()=>{
    console.log(`server is running at port 4000`);
})
