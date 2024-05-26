let nodeTuto = "Hello Node Js ...."

let dir = __dirname; 
let file = __filename;
const filenameData = file.split("\\")

console.log(dir);
console.log(file);
console.log(filenameData[filenameData.length-1]);


