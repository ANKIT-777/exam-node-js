// Question: Write a JavaScript program that uses a for loop to iterate over the characters in a string and counts the number of vowels.
// Example:
// Input: "Hello, World!"
// Expected Output: 3


var string = 'Hello, World';
var count = 0;
for(var i = 0; i <string.length; i++){
    if(string[i] == 'a' ||  string[i] ==' A'||
    string[i] == 'e' || string[i] == 'E' ||
    string[i] == 'i' || string[i] == 'I' ||
    string[i] == 'o' || string[i] == 'O' ||
    string[i] == 'u' || string[i] == 'U' ){
        count++;
    }

}

console.log(count);
