const net = require("net");

// establishes a connection with the game server
const connect = function () {
  const conn = net.createConnection({
    host: "165.227.47.243", // IP address here,
    port: 50541, // PORT number here,
  });

  conn.on("connect", function () {
    console.log("Successfully connected to game server");
  });

  const name = "@@@";
  conn.write(`Name: ${name}`);

  
  // setInterval(() => {
  //   conn.write(`Move: up`);
  // }, 1000);
  

  

  // interpret incoming data as text
  conn.setEncoding("utf8");

  return conn;
};

module.exports = { connect };
