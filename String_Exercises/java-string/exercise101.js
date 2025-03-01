/**
 * Write a Java program to test if a string contains only digits. Returns true or false.
 * 
 * First string:
131231231231231231231231231212312312
true

Second string:
13123123123Z1231231231231231212312312
false
 */

function containsOnlyDigits(str) {

    for(let i=0;i<str.length;i++) {
        if(isNaN(str[i])) return false
    }
    return true
}

console.log(containsOnlyDigits("131231231231231231231231231212312312"))
console.log(containsOnlyDigits("13123123123Z1231231231231231212312312"))