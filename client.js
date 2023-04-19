const net = require('net');

const connect = function() {
  const conn = net.createConnection({
    host: "localhost",
    port: 50541
  });

  conn.setEncoding("utf-8");

  conn.on("connect", () => {
    console.log("Sucessfully connected to game server");
    conn.write(`Name: RAY`);


  /*setInterval(() => {
    conn.write("Move: up")
  }, 500);
*/
  }); 


  conn.on("data", data => {
    console.log(data);
  });
  return conn;
};

module.exports = { connect };