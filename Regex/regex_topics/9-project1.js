// Remove leading and trailing spaces

let str = "      welcome    ";
let rex = /^\s+|\s+$/g;
console.log(str.replace(rex, ""));