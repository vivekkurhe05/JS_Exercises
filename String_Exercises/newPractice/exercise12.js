/**
 * Write a JavaScript function to uncamelize a string. Go to the editor
Test Data :
console.log(uncamelize('helloWorld'));
console.log(uncamelize('helloWorld','-'));
console.log(uncamelize('helloWorld','_'));
"hello world"
"hello-world"
"hello_world"
 */

function uncamelize(str, sep) {

    if( typeof sep === "undefined") sep = " ";

    return str.replace(/[A-Z]/g, function(letter) {
        return sep + letter.toLocaleLowerCase();
    })
}

console.log(uncamelize('helloWorld'));
console.log(uncamelize('helloWorld','-'));
console.log(uncamelize('helloWorld','_'));