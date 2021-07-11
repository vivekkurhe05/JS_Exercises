/**
 * Write a JavaScript function that accepts a string as a parameter and 
 * find the longest word within the string. Go to the editor
Example string : 'Web Development Tutorial'
Expected Output : 'Development'
 */

// your solution

function longest_word(str) {
    let arr = str.trim().split(" ");
    let max = arr[0].length;
    arr.map((el) => {
        max = Math.max(max, el.length)
        return max
    });
    result = arr.filter(function (elem) {
        return elem.length == max;
    });
    return result[0];
}
console.log(longest_word("Web Development Tutorial"));