// Write a Python program to calculate the length of a string.

function calculateStringLength(str) {
    return str.length
}

console.log(calculateStringLength("w3resource.com"))

// or

function length(str) {

    let length=0
    while(str[length] !== undefined ) {
        length++
    }
    return length
}

console.log(length("w3resource.com"))

// or

function length2(str) {

    let length=0
    while(typeof str[length] !== "undefined") {
        length++
    }
    return length
}

console.log(length2("w3resource.com"))
