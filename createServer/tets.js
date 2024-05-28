const http = require("http");

const fs = require("fs");
const port = 4001;

const myReadStr = fs.createReadStream(
  "../readableStream/mytest01.txt",
  "utf-8"
);

const server = http.createServer(function (req, res) {
  res.writeHead(200, { "Content-type": "text/plain" });
  myReadStr.pipe(res);
});

server.listen(port, function () {
  console.log(`serveris running in ${port}`);
});
