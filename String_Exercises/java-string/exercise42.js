/**
 * Write a Java program to print a list of items containing all characters of a given word.
 * 
 * The given strings are: rabbit   bribe   dog   
The given word is: bib 

The strings containing all the letters of the given word are: 
rabbit
bribe
 */

function print(str, given) {
    let arr = str.split(" ")
    return arr.filter((word) => {
        let chars = Array.from(given)
        return chars.every((chr) => word.includes(chr))
    })
}

console.log(print("rabbit bribe dog breed", "bib"))