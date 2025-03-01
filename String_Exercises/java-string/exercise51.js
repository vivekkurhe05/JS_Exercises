/**
 * Write a Java program to count and print all duplicates in the input string.
 * The given string is: w3resource
The duplicate characters and counts are: 
e  appears  2  times
r  appears  2  times
 */

// work on this. something is wrong
function findDuplicates(str) {

    let seen = new Set()
    let obj = {}
    for(let i=0;i<str.length;i++) {
        let count = 1
        if(seen.has(str[i])) {
            count++
            obj[str[i]] = count
        }
        seen.add(str[i]) // w,3,r,e,s,o,u,r,c,e
    }
    for(let key in obj) {
        console.log(`${key} appears ${obj[key]} times`)
    }
}

findDuplicates("w3resource")
findDuplicates("JavascriptProgrammming")