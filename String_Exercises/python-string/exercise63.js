/**
 * 
Write a Python program to remove leading zeros from an IP address.
255.24.1.1
127.0.0.1

 */

// my solution
function remove_zeros_from_ip(str) {
    const re = /0(?=\d)/g
    return str.replace(re,"")
}
console.log(remove_zeros_from_ip("255.024.01.01"))
console.log(remove_zeros_from_ip("127.0.0.01 "))

// or my solution

function remove_zeros_from_ip2(str) {
    let arr= str.split(".")
    return arr.map(el=> {
        if(el.length === 1) return el
        else if(el.length>=1 && !el.includes("0")) return el
        else return el.substring(1)
    }).join(".")
}
console.log(remove_zeros_from_ip2("255.024.01.01"))
console.log(remove_zeros_from_ip2("127.0.0.01 "))