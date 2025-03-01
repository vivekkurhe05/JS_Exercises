/**
 * Write a Java program to find the second most frequent character in a given string.
 * The given string is: successes
The second most frequent char in the string is: c
 */

function secondMostFrequentCharacter(str) {
    let obj = {}
    for(let i=0;i<str.length;i++) {
        let index = str.indexOf(str[i])
        let count=0
        while(index!=-1) {
            count++
            index = str.indexOf(str[i], index+1)
            obj[str[i]] = count
        }

    }

    return Object.entries(obj).sort((a,b) => b[1] - a[1])[1][0]
}

console.log(secondMostFrequentCharacter("successes"))