/**
 * JavaScript to keep only first N characters in a string
 */

function extract_chars(str, num) {
    return str.substring(0, num);
}
console.log(extract_chars('GeeksForGeeks', 5));