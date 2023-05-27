/**
 * Write a Python program to check whether a string contains all letters of the alphabet.
 */

// my solution
function all_alphabets(str){
    str = str.toLowerCase().replaceAll(" ","")
    let alphabets="abcdefghijklmnopqrstuvwxyz"
    
    return alphabets.split("").every((chr) => {
        return str.includes(chr)
    })
}

console.log(all_alphabets("The quick brown fox jumps over the lazy dog"))
console.log(all_alphabets("The quick brown fox jumps over the lazy cat")) // d,g are missing

// or my solution

function all_alphabets2(str){
    str = str.toLowerCase().replaceAll(" ","")
    let alphabets="abcdefghijklmnopqrstuvwxyz"
    let arr = []
    for(let i=0;i<alphabets.length;i++) {
        if(str.indexOf(alphabets[i]) != -1) arr.push(true)
        else arr.push(false)
    }
    return arr.every(elem => elem)
}

console.log(all_alphabets2("The quick brown fox jumps over the lazy dog"))
console.log(all_alphabets2("The quick brown fox jumps over the lazy cat")) // d,g are missing