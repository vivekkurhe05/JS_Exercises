// my solution

let str = "w3resource";
let chr = "";

for (let i = str.length - 1; i >= 0; i--) {
  chr = chr + str[i];
}

console.log(chr);

// or
// my solution

console.log(str.trim().split("").reverse().join(""));

//or

let demo = "hello world";
console.log(demo.split("").reverse().join("").split(" ").reverse().join(" "));
