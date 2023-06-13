// Question: Create a Node.js program that appends the text "Hello content!" to a file called "mynewfile1.txt" using the fs.appendFile() method.


var fs = require("fs");

var content = "Hello content!\n";

fs.appendFile("mynewfile1.txt", content, function(err) {
  if (err) {
    console.error("Error appending to file:", err);
  } else {
    console.log("Text appended to file successfully!");
  }
});
