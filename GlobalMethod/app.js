// setTimeout() , setInterval(), clearInterval()
setTimeout(() => {
  console.log("I am noding...");
}, 3000);

let count = 0;
const setInterValFunction = setInterval(function () {
  count++;
  if (count > 10) {
    clearInterval(setInterValFunction);
  } else {
    console.log(`this is setInterval method ${count}`);
  }
}, 1000);

