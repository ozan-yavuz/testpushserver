const fs = require('fs');
const https = require('https');

const port = 8000;
const hostname = "192.168.1.5";
const options = {
  cert: fs.readFileSync("server.crt"),
  key: fs.readFileSync("server.key"),
}

var app = function (request, response) {
  console.log("response creating")
  response.writeHead(200, { "Content-Type": "text\plain" });
  console.log("before response")

  if (request.method == "GET") {
    console.log("GET")
    response.end("received GET request.")
  }
  else if (request.method == "POST") {
    response.end("received POST request.");
  }
  else {
    response.end("Undefined request .");
  }
}

https.createServer(options, app).listen(port, hostname);

