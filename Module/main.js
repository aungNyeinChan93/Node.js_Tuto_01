let helperFun = require("./helper.js");
let myHelper = require("./helper2.js")
let myHelper3 = require("./helper3.js")
let myHelper4 = require("./helper4.js")

const name ="AungNc"

console.log(helperFun("world"));
myHelper(name);

myHelper3.methodOne()
myHelper3.methodTwo()

console.log(myHelper4.three());
console.log(myHelper4.four());
console.log(myHelper4.five());

