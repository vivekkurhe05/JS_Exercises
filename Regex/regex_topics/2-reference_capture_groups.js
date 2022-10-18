// Use capture groups in search and replace and reference them as well
// Use $ to reference them

// Reverse the following string using referencing
let str = "Jane Doe 123";
let rex = /(\w+) (\w+) ([0-9]+)/;
console.log(str.replace(rex, "$3 $2 $1"));