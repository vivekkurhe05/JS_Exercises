/**
 * Write a Java program to find the character in a string that occurs the most frequently.
 * 
 * The given string is: test string
Max occurring character in the given string is: t
 */

function findMostFrequentCharacter(str) {

    let obj = {}, char = ""
    for(let i=0;i<str.length;i++) {
        let index = str.indexOf(str[i])
        let count=0
        while(index!=-1) {
            count++
            index=str.indexOf(str[i], index+1)
            obj[str[i]] = count
        }
    }

    return Object.entries(obj).sort((a,b)=>b[1]-a[1])[0][0]
}

console.log(findMostFrequentCharacter("test string"))