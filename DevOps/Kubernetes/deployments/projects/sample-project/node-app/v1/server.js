const http = require("http"),
  os = require("os");

console.log("Node v1 server starting...");

var handler = function (request, response) {
  console.log("Request received from: " + request.connection.remoteAddress);
  response.writeHead(200);
  response.end("Node v1 running in a pod: " + os.hostname() + "\n");
};

var www = http.createServer(handler);
www.listen(8081);
