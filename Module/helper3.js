const methodOne = () => {
  console.log("I am method One");
};

const methodTwo = () => {
  console.log("I am method two");
};

module.exports.methodOne = methodOne;
module.exports.methodTwo = methodTwo;
