/**
 * Write a Python program to remove leading zeros from an IP address
 */

// my solution
function text_match(str){
    let re = /^0/g;
    return str.split(".").map(function(el) {
        return el.replace(re, "")
    }).join(".");
}
console.log(text_match("216.08.094.196"));