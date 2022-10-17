// Positive lookbehind - only output whatever is not preceded by the lookbehind value
// (?<!Y)X

let str = "$50 456 $23 &67";
let rex = /(?<!\$)(?<!\d)\d+/g;
console.log(str.match(rex));