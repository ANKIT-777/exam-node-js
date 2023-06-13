// Question: Write a Node.js program that reads the contents of an 
//HTML file and returns the content as the response when accessed via an HTTP server.


var http = require("http");
var fs = require("fs");   // file system module is added for the reading of html files

var server = http.createServer(function(req, res) {
  fs.readFile("index.html", function(err, data) {
    if (err) {                                               // if there was an error reading the file
      res.writeHead(500, { "Content-Type": "text/plain" });
      res.end("Error reading file");
    } else {                                               // it will help us to read the file as HTML
      res.writeHead(200, { "Content-Type": "text/html" }); // content type is set to "text/html"
      res.end(data);
    }
  });
});

server.listen(8080);
