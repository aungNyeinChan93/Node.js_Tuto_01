const http = require("http");
const url = require("url");

const route = {
  GET: {
    "/": (req, res) => {
      console.log(`GET method route=> /`);
      res.writeHead(200, { "Content-type": "text/html" });
      res.end("<h1>GET method route=> /`</h1>");
    },
    "/home": (req, res) => {
      console.log(`GET method route=> /home`);
      res.writeHead(200, { "Content-type": "text/html" });
      res.end("<h1>GET method route=> /home`</h1>");
    },
    "/about": (req, res) => {
      req, res;
      console.log(`GET method route=> /about`);
      res.writeHead(200, { "Content-type": "text/html" });
      res.end("<h1>GET method route=> /about`</h1>");
    },
  },
  POST: {
    "/": (req, res) => {
      console.log(`POST method route=> /`);
      res.writeHead(200, { "Content-type": "text/html" });
      res.end("<h1>GET method route=> /`</h1>");
    },
    "/home": (req, res) => {
      console.log(`POST method route=> /home`);
      res.writeHead(200, { "Content-type": "text/html" });
      res.end("<h1>GET method route=> /home`</h1>");
    },
    "/about": (req, res) => {
      console.log(`POST method route=> /about`);
      res.writeHead(200, { "Content-type": "text/html" });
      res.end("<h1>GET method route=> /about`</h1>");
    },
  },
  NA: (req, res) => {
    console.log(`404 not found/ invilid route`);
    res.writeHead(404);
    res.end("<h1>404 not found</h1>");
  },
};

const start = (req, res) => {
  let reqMethod = req.method;
  let pathURL = url.parse(req.url, true);
  const resolveRoute = route[reqMethod][pathURL.pathname];
  console.log(resolveRoute);
  if (resolveRoute != null && resolveRoute != undefined) {
    resolveRoute(req, res);
  } else {
    route["NA"](req, res);
  }
};

const server = http.createServer(start);

server.listen(3000, () => {
  console.log(`server is running in port 3000`);
});
