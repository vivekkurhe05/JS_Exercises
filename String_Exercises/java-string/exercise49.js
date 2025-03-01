/**
 * Write a Java program to find the first non-repeating character from a stream of characters.
 * String: godisgood
output - i
 */

// my solution
function firstNonRepeatingCharacter(str) {
    let obj = {}

    for(let i=0;i<str.length;i++) {
        let count = 1
        if(!(str[i] in obj)) {
            obj[str[i]] = count
        }else{
            obj[str[i]] = count+1
            delete obj[str[i]]
        }
    }

    return Object.entries(obj)[0][0]
}

console.log(firstNonRepeatingCharacter("godisgood"))
