/**
 * Write a Java program to find the longest substring that appears at both ends of a given string.
 * The given string is: playersplay
The longest substring in the string is: play
 */

// my sol
function findLongestSubstring(str) {

    for(let i=0;i<str.length;i++) {
        for(let j=i+1; j<str.length;j++) {
            let newStr = str.substring(i,j)
            if(str.endsWith(newStr)) {
                return newStr
            }
        }
    }
}


console.log(findLongestSubstring("playersplay"))