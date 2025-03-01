/**
 * Write a Java program to count the occurrences of a given string in another given string.
 * 
 * aa' has occured 3 times in 'abcd abc aabc baa abcaa'
 */

function count(str) {
    let index = str.indexOf("aa");
    let count=0
    while(index!=-1) {
        count++
        index = str.indexOf("aa", index+1)
    }
    return count;
}

console.log(count("abcd abc aabc baa abcaa"))