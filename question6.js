// Question: Write a Node.js program that creates an HTTP server using the built-in 'http' module and responds with "Hello World!" when accessed.


var http = require("http");


var server = http.createServer(function (req, res) {
    res.writeHead(200, { "Content-Type": "text/html" });

    res.write("Hello World");

    res.end("");
});

server.listen(8080);
