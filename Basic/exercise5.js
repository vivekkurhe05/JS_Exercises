/**
 * Write a JavaScript program to rotate the string 'w3resource' in right direction by periodically 
 * removing one letter from the end of the string and attaching it to the front.
 */

var str = 'w3resource ';
var stack = [];
for (var i = 0; i < str.length; i++) {
    stack.push(str[i]);
}

while (stack.length > 0) {
    var chr = stack.pop();
    stack.unshift(chr);
    console.log(stack.join(""));
}
