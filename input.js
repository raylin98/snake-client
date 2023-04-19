const setupInput = function() {
  const stdin = process.stdin;
  stdin.setRawMode(true);
  stdin.setEncoding("utf-8");
  stdin.resume();
  return stdin;
};

const handleUserInput = function() {
  stdin.on("data", (key) => {
    if(key === '\u0003') {
      process.exit();
    }
  });
};

module.exports = { setupInput };
