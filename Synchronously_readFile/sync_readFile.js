const fs = require("fs");

// file write 
fs.writeFileSync(
  "../Synchronously_readFile/test01.txt",
  "my testing async file create used by fs from node modules"
);

let data = `Lorem Ipsum is simply dummy text of the printing and typesetting industry. 
Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, 
when an unknown printer took a galley of type and scrambled it to make a type specimen book. 
It has survived not only five centuries, but also the leap into electronic typesetting, 
remaining essentially unchanged. 
It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, 
and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.`;

fs.writeFileSync("../Synchronously_readFile/test02.txt",data);

// file read 
let myReadData= fs.readFileSync("../Synchronously_readFile/test02.txt","utf-8");
console.log("My Read data =====",myReadData);

fs.writeFileSync("./test03.txt",myReadData);

// file append
fs.writeFileSync("./test04.txt","one ");
let readData = fs.readFileSync("./test04.txt","utf-8");
console.log(readData);

fs.appendFileSync("./test04.txt", "append text sample ");
fs.appendFileSync("./test04.txt",readData);




