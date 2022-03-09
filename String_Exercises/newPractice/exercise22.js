/**
 * Write a JavaScript function to get a part of a string after a specified character.Go to the editor
Test Data :
console.log(subStrAfterChars('w3resource: JavaScript Exercises', ':','a'));
console.log(subStrAfterChars('w3resource: JavaScript Exercises', 'E','b'));
Output :
"w3resource"
"xercises"
 */

function subStrAfterChars(str, chr, pos) {

    if(pos === 'a'){
        return str.substring(0, str.indexOf(chr));
    }else if(pos === 'b'){
        return str.substring(str.indexOf(chr)+1);
    }else{
        return str;
    }
}

console.log(subStrAfterChars('w3resource: JavaScript Exercises', ':','a'));
console.log(subStrAfterChars('w3resource: JavaScript Exercises', 'E','b'));