/**
 * Write a Java program to count the number of characters (alphanumeric only) 
 * that occur more than twice in a given string.
 * 
 * Original String: abcdaa
Number of duplicate characters in the said String (Occurs more than twice.): 1

Original String: Create a Date Calendar.
Number of duplicate characters in the said String (Occurs more than twice.): 3
 */

function count(str) {
    let obj = {}
    for(let i=0; i<str.length; i++) {
        let index = str.indexOf(str[i])
        let count = 0
        while(index!=-1) {
            count++
            index = str.indexOf(str[i], index+1)
            obj[str[i]] = count
        }
    }
    
    let size=0
    for(let key in obj) {
        if(obj[key] > 2) {
            size++
        }
    }
    return size
}

console.log(count("abcdaa")) // 1
console.log(count("Create a Date Calendar")) // 3