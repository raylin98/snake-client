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
    connection.write("Move: up");
  }

  if (key === "s") {
    connection.write("Move: down");
  }

  if (key === "a") {
    connection.write("Move: left");
  }

  if (key === "d") {
    connection.write("Move: right");
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
