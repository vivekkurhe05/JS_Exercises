/**
 * Strip all non-numeric characters from string
 */

// my solution
var str = "1Gee2ksFor345Geeks6";
let re = /[^a-z]/gi;
str=str.match(re).join("");
console.log(str)

// or my solution
str=str.replace(/[a-z]/gi, "");
console.log(str);

// or my solution
let newStr = ''
for(let i=0; i<str.length; i++) {
    if(str[i] >= 'A' && str[i] <=122) continue
    else newStr += str[i];
}

console.log(newStr)