/**
 * Write a JavaScript program to create a new string of specified copies (positive number) of a given string.
 */

function create_copy(str, count) {
    return new Array(count+1).join(str);
}
console.log(create_copy('abc', 5));

//or

function create_copy(str, count) {
    return str.repeat(count);
}
console.log(create_copy('abc', 5));

//or

function create_copy(str, count) {
    let copy = "";
    for(let i=0; i<count; i++) {
        copy = copy+str;
    }
    return copy;
}
console.log(create_copy('abc', 5));