/**
 * Write a Java program to find the word Python in a given string, if the word Python present in the
 * string return Java otherwise return C++. Ignore case sensitive.
 */

// my solution
function validate(str) {
    let result = '';
    if(str.search(/python/ig) != -1) result = "Java";
    else result = 'C++';

    return result;
}

let text = "python";
console.log("Original string: "+text);
console.log("New string: "+validate(text));
text = "JavaScript";
console.log("\nOriginal string: "+text);
console.log("New string: "+validate(text));
text = "PYTHON";
console.log("\nOriginal string: "+text);
console.log("New string: "+validate(text));