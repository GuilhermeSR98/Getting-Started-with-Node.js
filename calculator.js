const sum = require("./functions/sum");
const div = require("./functions/div");
const sub = require("./functions/sub");
const server = require("./server");
server(5555);
console.log(div(sum(8, 7), sub(9, 3)));
