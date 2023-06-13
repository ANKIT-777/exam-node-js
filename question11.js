// Question: Modify the previous program to create a new file called "mynewfile2.txt" using the fs.open() method with the "w" flag.


var fs = require("fs");

fs.open("mynewfile2.txt", "w", function(err, file) { // with help of fs.open created new file 
  if (err) {
    console.error("Error creating file:", err);
  } else {
    console.log("File created successfully!");
  }
});
