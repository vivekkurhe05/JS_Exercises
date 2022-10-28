/**
 * Write a Python program to remove the parenthesis area in a string. Go to the editor
Sample data : ["example (.com)", "w3resource", "github (.com)", "stackoverflow (.com)"]
Expected Output:
example
w3resource
github
stackoverflow
 */

// my solution
let arr = ["example (.com)", "w3resource", "github (.com)", "stackoverflow (.com)"];
let re = /\s*\(.+\)/g;

arr.map((el) => {
    return el.replace(re, "");
}).forEach((el) => console.log(el));
