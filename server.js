const express = require("express");
const server = express();

const initServer = function(port){
  server.listen(port, function(){
    console.log(`Server ON >> http://localhost:${port}`)
  })
}

module.exports = initServer;

//const http = require("http");

//const server = function (port) {
//  http
//    .createServer(function (req, res) {
//      res.end("Hello");
//    })
//    .listen(port);
//  console.log("Server On");
//};

//module.exports = server;
