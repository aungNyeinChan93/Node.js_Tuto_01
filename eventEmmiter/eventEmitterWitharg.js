const event = require("events");
const myEmitter = new event.EventEmitter();

myEmitter.on("greeting", function (name) {
  console.log(`hello ${name}`);
});

const myName = "aung";
myEmitter.emit("greeting", "AUng Nyein Chan");
myEmitter.emit("greeting", myName);
