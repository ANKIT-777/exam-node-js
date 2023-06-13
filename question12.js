// Question: Write a Node.js program that replaces the content of a file called "mynewfile3.txt" with the text "Hello content!" using the fs.writeFile() method.


var fs = require("fs");

var content = "Hello content!";

fs.writeFile("mynewfile3.txt", content, function(err) { 
  if (err) {
    console.error("Error writing to file:", err);
  } else {
    console.log("File content replaced successfully!");
  }
});
