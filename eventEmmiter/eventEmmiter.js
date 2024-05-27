let event = require("events");
let myEmitter = new event.EventEmitter();

// event>>EventEmitter()>>on>>emit
myEmitter.on("startW", function () {
  console.log("my emitter is start working");
});

myEmitter.emit("startW");

// 
myEmitter.on("myEmitterOne",function(){
    console.log("result divided by three");
})
let counter = 1
const test= setInterval(function(){
    counter++
    if (counter%3 == 0){
        myEmitter.emit("myEmitterOne")
    }else if(counter >20){
        console.log("the end...");
        clearInterval(test);
    }else{
        console.log("result "+counter);
    }
},1000)
