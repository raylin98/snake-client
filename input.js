const { MOVE_UP, MOVE_LEFT, MOVE_DOWN, MOVE_RIGHT } = require("./constant");

let connection;

const playerMsg = "Say: ";
const msg1 = "That apple is mine!";
const msg2 = "Dibs on the next apple!";
const msg3 = "I'm winning this";

const setupInput = function(conn) {
  connection = conn;
  const stdin = process.stdin;
  stdin.setRawMode(true);
  stdin.setEncoding("utf8");
  stdin.resume();
  stdin.on("data", key => {
    handleUserInput(key);
  });
  return stdin;
};


const handleUserInput = function(key) {
  const stdout = process.stdout;
  if (key === '\u0003') {
    stdout.write("Exited Game.");
    process.exit();
  }

  if (key === "w") {
    connection.write(MOVE_UP);
  }

  if (key === "s") {
    connection.write(MOVE_DOWN);
  }

  if (key === "a") {
    connection.write(MOVE_LEFT);
  }

  if (key === "d") {
    connection.write(MOVE_RIGHT);
  }
  if (key === "q") {
    connection.write(playerMsg + msg1);
  }
  if (key === "e") {
    connection.write(playerMsg + msg2);
  }
  if (key === "r") {
    connection.write(playerMsg + msg3);
  }
};



module.exports = { setupInput };
