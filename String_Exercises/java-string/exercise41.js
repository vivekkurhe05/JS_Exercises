/**
 * Write a Java program to remove duplicate characters 
 * from a given string that appear in another given string.
 * 
 * The given string is: the quick brown fox
The given mask string is: queen

The new string is: 
th ick brow fox
 */

function removeDuplicates(str1, str2) {
    let newstr=""
    for(let i=0;i<str1.length;i++) {
        if(str2.includes(str1[i])) continue
        else newstr+=str1[i]
    }
    return newstr
}

console.log(removeDuplicates("the quick brown fox", "queen"))