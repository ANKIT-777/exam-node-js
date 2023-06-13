// Question: Develop a Node.js program that deletes a file called "mynewfile2.txt" using the fs.unlink() method.


var fs = require("fs");

fs.unlink("mynewfile2.txt", function(err) { //unlink function to delete the file
    
  if (err) {
    console.error("Error deleting file:", err);
  } else {
    console.log("File deleted successfully!");
  }
});
