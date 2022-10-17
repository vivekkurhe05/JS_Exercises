// Positive lookaheads - only matching something that is followed by something else
// n(?=x)

let str = "30cm 40in 55mm 60ins";
let rex = /\d+(?=in)/g;
console.log(str.match(rex));