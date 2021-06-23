/**
 * Write a JavaScript program to break an address of an url and put it's part into an array.
 */

// your solution

function break_address(url) {
    let arr1 = url.split("://");
    let arr2 = arr1[1].split(".com");
    let arr3 = arr2[1].split('/');
    return [arr1[0],arr2[0],arr3[1]];
}
console.log(break_address("https://www.w3resource.com/javascript-exercises/"));