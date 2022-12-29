/**
 * Insert a string at position X of another string
 */

// my solution
function insert(str, sub, i) {
    return str.slice(0, i) + sub + str.slice(i);
}
console.log(insert('GeeksGeeks', 'For', 5));