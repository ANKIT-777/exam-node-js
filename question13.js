// Question: Implement a Node.js program that appends the text " This is my text." to the end of the file "mynewfile1.txt" using the fs.appendFile() method.

var fs = require("fs");

var content = " This is my text.";

fs.appendFile("mynewfile1.txt", content, function(err) { // append function to add content at newfile1.txt 
  if (err) {
    console.error("Error appending to file:", err);
  } else {
    console.log("Text appended to file successfully!");
  }
});
