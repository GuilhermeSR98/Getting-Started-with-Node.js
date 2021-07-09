const http = require("http");

const server = function (port) {
  http.createServer().listen(port);
  console.log("Server On");
};

module.exports = server;
