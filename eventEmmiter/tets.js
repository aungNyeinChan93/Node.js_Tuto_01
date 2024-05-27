const event = require("events")

const myEmitter = new event.EventEmitter();

myEmitter.on("test",()=>{
    console.log("hello world ...");
});

myEmitter.emit("test");






