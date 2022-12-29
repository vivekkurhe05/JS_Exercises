/**
 * How to check a string begins with some given characters/pattern ?
 */

// my solution
function beginsWith(str, substr) {
    if(str.startsWith(substr)) return `String begins with "${substr}"`;
    else return `String doesn't begin with "${substr}"`
}
console.log(beginsWith("GeeksforGeeks", "Geeks"));
console.log(beginsWith("GeeksforGeeks", "geeks"));

// my solution
function beginsWith2(str, substr) {
    if(str.indexOf(substr, 0) === 0) return `String begins with "${substr}"`;
    else return `String doesn't begin with "${substr}"`
}
console.log(beginsWith2("GeeksforGeeks", "Geeks"));
console.log(beginsWith2("GeeksforGeeks", "geeks"));