const { log } = require("console");
const event = require("events")

const myEmitter  = new event.EventEmitter();


myEmitter.on("test2",function(){
    console.log("hello");
})

myEmitter.emit("test2")