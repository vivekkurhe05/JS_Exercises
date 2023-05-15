/**
 * Write a Python program to get a string from a given string where all 
 * occurrences of its first char have been changed to '$', except the first char itself.
Sample String : 'restart'
Expected Result : 'resta$t'
 */

// my solution
function changeAllOccurrencesOfFirstChar(str) {
    const re = /\Br/g
    return str.replace(re,"$")

}

console.log(changeAllOccurrencesOfFirstChar("restart"))

// or

function changeAllOccurrencesOfFirstChar2(str) {
    let newStr=""
    for(let i=0; i<str.length; i++) {
        if(str[i] === "r" && i===0) newStr+=str[i]
        else if(str[i] === "r" && i !== 0) newStr += "$"
        else newStr+=str[i]
    }
    return newStr
}

console.log(changeAllOccurrencesOfFirstChar2("restart"))