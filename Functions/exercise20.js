/**
 * Write a JavaScript function that generates a string id (specified length) of random characters. Go to the editor
Sample character list : "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789"
 */

// your solution

function id(len) {
    let str = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";
    len = len || 32;
    let str_id = "";
    for (let i = 0; i < len; i++) {
        str_id += str.charAt(Math.floor(Math.random() * str.length));
    }
    return str_id;
}

console.log(id(7));
console.log(id(10));
console.log(id());