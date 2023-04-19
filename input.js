let connection;

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
    if(key === '\u0003') {
      stdout.write("Exited Game.")
      process.exit();
    }

    if(key === "w") {
      connection.write("Move: up");
    }

    if(key === "s") {
      connection.write("Move: down");
    }

    if(key === "a") {
      connection.write("Move: left");
    }

    if(key === "d") {
      connection.write("Move: right");
    }
  };



module.exports = { setupInput };
