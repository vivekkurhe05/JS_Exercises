// Backereferencing a group - reference the group late in the regex to specify that it has to be replicated exactly as it is
// By number - \N
// *Hello*, &Hello&

let str = "*Hello*";
let rex = /([@#\*])\w+\1/i;
console.log(rex.test(str));

let str2 = "*Hello#";
let rex2 = /([@#\*])\w+\1/;
console.log(rex2.test(str2));

let str3 = "*#Hello#*";
let rex3 = /([@#\*])([@#\*])\w+\2\1/;
console.log(rex3.test(str3));