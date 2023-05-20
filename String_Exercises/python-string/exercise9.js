/**
 * Write a Python program to remove the nth index character from a nonempty string.
 */

// my solution
function remove_char(str, n) {
    return str.substring(0,n)+str.substring(n+1)
}
console.log(remove_char("Python",3))

// or my solution   

function remove_char(str, n) {
    new_str=""
    for(let i=0;i<str.length;i++) {
        if(i===n) continue
        else new_str+=str[i]
    }
    return new_str
}
console.log(remove_char("Python",3))