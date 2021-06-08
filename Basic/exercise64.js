/**
 * Write a JavaScript program to concatenate two strings and return the result. 
 * If the length of the strings are not same then remove the characters from the longer string.
 */

function concat(str1, str2){

    let a = "";
    if(str1.length > str2.length){
        a = str1.slice(-str2.length);
        return a.concat(str2);
    }
    if(str1.length < str2.length){
        a = str2.slice(-str1.length);
        return str1.concat(a);
    }
    return str1+str2;
}
console.log(concat('JS', 'Python'));
console.log(concat('PY', 'JS'));
console.log(concat('Python', 'JS'));