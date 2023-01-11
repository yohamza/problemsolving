/** Find if a string is Palindrome. Ignore spaces, Capital letters and other special characters. Only compare alpha numeric
 
 * Sample true cases:
 * "aabaa" true
 * "a" true
 * "" true
 * "A man, a plan, a canal: Panama" true
 **/

const input = "A man, a plan, a canal: Panama";

function checkIfPalindrome(s) {
  s = s.replace(/[^A-Z0-9]/gi, "").toLowerCase(); //Remove all characters and spaces and convert to lowercase
  let leftP = 0; //Left Pointer
  let rightP = s.length - 1; //Right Pointer

  while (leftP <= rightP) {
    if (s[leftP] !== s[rightP]) return false;

    leftP++;
    rightP--;
  }

  return true;
}

console.log(checkIfPalindrome(input));
