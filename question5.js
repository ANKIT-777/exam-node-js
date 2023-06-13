// Question: Write a JavaScript program that checks if a given string is a palindrome.
// Example:
// Input: "racecar"
// Expected Output: true

function isPalindrome(str) {
  let left = 0;
  let right = str.length - 1;

  while (left < right) {
    if (str[left] !== str[right]) {
      return false;
    }
    left++;
    right--;
  }

  return true;
}

const inputStr = "racecar";
const isPal = isPalindrome(inputStr);
console.log(isPal); 
