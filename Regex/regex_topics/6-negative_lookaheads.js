// Negative lookaheads - only match if it's not followed by whatever is in the lookahead
// n(?!x)


let str = "30cm 40in 55mm 60ins";
let rex = /\d+(?!in)/g;
console.log(str.match(rex));