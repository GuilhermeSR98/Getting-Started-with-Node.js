const http = require("http");

const server = function (port) {
  http
    .createServer(function (req, res) {
      res.end("Hello");
    })
    .listen(port);
  console.log("Server On");
};

module.exports = server;
