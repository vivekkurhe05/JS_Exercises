/**
 * Write a Java program to check whether a substring appears 
 * before a period(.) within a given string.
 * 
 * The given strings is: testabc.test
Is 'abc' appear before period? true

The given string is: test.abctest
Is 'abc' appear before period? false
 */

function isBefore(str) {
    const re = /abc(?=\.)/g
    return re.test(str)
}

console.log(isBefore("testabc.test"))
console.log(isBefore("test.abctest"))