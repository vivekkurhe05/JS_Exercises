/**
 * Write a Java program to find the longest Palindromic Substring within a string.
 * The given string is: thequickbrownfoxxofnworbquickthe
The longest palindrome substring in the giv
en string is; brownfoxxofnworb
The length of the palindromic substring is: 16
 */

// chatgpt sol O(n3)
function isPalindrome(s) {
    return s === s.split('').reverse().join('');
}

function longestPalindromicSubstring(s) {
    let longest = "";
    for (let i = 0; i < s.length; i++) {
        for (let j = i + 1; j <= s.length; j++) {
            let substr = s.substring(i, j);
            if (isPalindrome(substr) && substr.length > longest.length) {
                longest = substr;
            }
        }
    }
    return longest;
}

const str = "thequickbrownfoxxofnworbquickthe";
console.log(longestPalindromicSubstring(str));