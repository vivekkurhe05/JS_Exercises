/**
 * How to remove a character from string in JavaScript ?
 */

// my solution
function remove_char(str, char, index) {
    let re = new RegExp(char);
    return str.replace(re, "");
}

console.log(remove_char('GeeksForGeeks', 'G', 0));
