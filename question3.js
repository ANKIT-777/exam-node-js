// Question: Write a JavaScript program that uses a while loop to reverse a given number.
// Example:
// Input: 12345
// Expected Output: 54321


 var num = 12345;
    let reversed = 0;
    while (num > 0) {
      reversed = reversed * 10 + num % 10;
      num = Math.floor(num / 10);
    }
    console.log(reversed);

  
 