
// Question: Write a JavaScript function checkFileExists that checks if a file exists asynchronously using promises. The function takes a file path as an argument and returns a promise. Inside the function, after a delay of 1 second, check if the file exists. If the file exists, resolve the promise. If the file does not exist, reject the promise.
// Example Input:checkFileExists('/path/to/file.txt')


// Expected Output:
// A promise object that will be resolved if the file exists after a delay of 1 second. If the file does not exist, the promise should be rejected.



function checkFileExists(filePath) {
    return new Promise(function(resolve, reject) {
      setTimeout(function() {
        // Simulating file existence check
        var fileExists = true; // Change this to false to simulate file not existing
  
        if (fileExists) {
          resolve();Here's a JavaScript function checkFileExists that checks if a file exists 
        } else {
          reject("File does not exist");
        }
      }, 1000);
    });
  }
  
  
  checkFileExists('/path/to/file.txt')
    .then(function() {
      console.log("File exists");
    })
    .catch(function(error) {
      console.error(error);
    });
  