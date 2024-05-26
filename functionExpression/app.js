// Function
function callfunction(callback) {
  callback();
}

// function Expression
const myExpression = function () {
  console.log("I am function expression ... ");
};
callfunction(myExpression);

// Arrow function 
let arrowFunction = ()=>{
    console.log("I am arrow function ");
}
callfunction(arrowFunction);
