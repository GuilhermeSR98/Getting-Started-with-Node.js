const sum = require("./functions/sum");
const div = require("./functions/div");
const sub = require("./functions/sub");
const initServer = require("./server");
initServer(5555);
console.log(div(sum(8, 7), sub(9, 3)));
