const http = require("http");

const route = {
  GET: () => {
    console.log("Get Method");
  },
  POST: () => {
    console.log("POST method");
  },
};

const start = (req, res) => {
  route[req.method]();
//   console.log(req.url);
//   console.log(req.path);
  // console.log(req);
  // console.log(res);
};

const server = http.createServer(start);

server.listen(4000, () => {
  console.log(`Server is running in port 4000`);
});
