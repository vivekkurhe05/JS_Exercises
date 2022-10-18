// Email Validation

let str = "areil@gmail.com";
let rex = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})$/i;

console.log(rex.test(str));