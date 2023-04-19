const net = require("net");

const { connect } = require('./client');

/*const setupInput = function() {
  const stdin = process.stdin;
  stdin.setRawMode(true);
  stdin.setEncoding("utf-8");
  stdin.resume();
  return stdin;
};

const handleUserInput = function() {
  stdin.on("data", (handleUserInput) => {
    if(handleUserInput === '\u0003') {
      process.exit();
    }
  });
};

console.log("Connecting ...");*/



connect();