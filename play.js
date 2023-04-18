const net = require("net");

const connect = function() {
  const conn = net.createConnection({
    host: "localhost",
    port: 50541
  });

  conn.setEncoding("utf-8");
  conn.on("connect", () => {
    console.log("Connection successful");
  })

  conn.on("data", () => {
    console.log("You ded cuz you idled")
  });
  return conn;
}

console.log("Connecting ...");
connect();