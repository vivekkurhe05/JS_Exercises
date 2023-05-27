/**
 * Write a Python program to capitalize the first and last letters of each word in a given string.
 */

// my solution
function capitalize_first_last_letters(str) {
    let arr = str.split(" ")
    return arr.map(el=>{
        return el[0].toUpperCase()+el.slice(1,el.length-1)+el.at(-1).toUpperCase()
    }).join(" ")
}
console.log(capitalize_first_last_letters("python exercises practice solution"))
console.log(capitalize_first_last_letters("w3resource"))