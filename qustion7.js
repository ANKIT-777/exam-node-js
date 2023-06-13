// Question: Modify the previous program to include an HTTP header with the content type 'text/html' in the server response.


var http = require("http"); 

var server = http.createServer(function(req, res) {
  res.writeHead(200, { "Content-Type": "text/html" }); // it was already there for http requests

  res.write("Hello World");

  res.end("");
});

server.listen(8080);
