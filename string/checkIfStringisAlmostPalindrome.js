/** 
 * Check if be removing one element the string becomes a valid palindrome
 * 
 * Test Cases
 * "raceacar" true
 * "abccdba" true
 * "abcdefdba" false
 * "" true
 * "a" true
 * "ab" true
 **/

function checkIfAlmostPalindrome(s) {

    let leftP = 0;
    let rightP = s.length - 1;

    while(leftP < rightP){

        if(s[leftP] !== s[rightP]){
            return checkSubPalindrome(s, leftP + 1, rightP) || checkSubPalindrome(s, leftP, rightP - 1);
        }

        leftP++;
        rightP--;
    }

    return true;

}

const checkSubPalindrome = (string, left, right)=> {

    while(left < right) {

        if(string[left] !== string[right]){
            return false;
        }

        left++;
        right--;
    }

    return true;

}

console.log(checkIfAlmostPalindrome("racecar"));