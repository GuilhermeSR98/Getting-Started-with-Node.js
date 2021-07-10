const express = require("express");
const server = express();

server.get("/", function (req, res) {
  res.sendFile(__dirname + '/html/index.html');
});

server.get("/about", function (req, res) {
  res.send("Welcome to the about page!");
});

server.get("/blog", function (req, res) {
  res.send("Welcome to the blog page!");
});

server.get("/:nome/", function (req, res) {
  res.send(`Welcome ${req.params.nome}`);
});

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
