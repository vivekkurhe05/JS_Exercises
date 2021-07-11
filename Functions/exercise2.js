/**
 * Write a JavaScript function that checks whether a passed string is palindrome or not? Go to the editor
A palindrome is word, phrase, or sequence that reads the same backward as forward, e.g., madam or nurses run.
 */

// your solution

function isPalindrome(str) {
    let pos = 0, len = 0, str2 = "";
    let arr = str.split('')
    if (arr.includes(' ')) {
        pos = arr.indexOf(' ', 0);
        arr.splice(pos, 1);
        len = arr.slice(pos, arr.length).length;
        arr.reverse();
        arr.splice(-len, 0, ' ');
        str2 = arr.join("");
    } else {
        str2 = arr.reverse().join("");
    }

    return str2 === str
}

console.log(isPalindrome("madam"));
console.log(isPalindrome("nurses run"));
console.log(isPalindrome("race car"));
console.log(isPalindrome("hello"));
console.log(isPalindrome("race cae"));