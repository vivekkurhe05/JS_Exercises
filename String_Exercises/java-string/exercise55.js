/**
 * Write a Java program to remove all adjacent duplicates recursively from a given string.
 * The given string is: aabaarbarccrabmq
The new string after removing all adjacent duplicates is:
brmq
 */

// my sol
function removeRecursiveChars(str) {
    let arr = [], newstr=""
    for(let i=0;i<str.length;i++) {
        if(str[i] === str[i+1] || newstr.includes(str[i])) {
            arr.push(str[i])
        }
        if(!arr.includes(str[i])) {
            newstr+=str[i]
        }
    }

    return newstr
}

console.log(removeRecursiveChars("aabaarbarccrabmq")) 