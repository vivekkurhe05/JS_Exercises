/**
 * How to convert an object to string using JavaScript?
 */

let obj = {
    name: "Vivek",
    age: 30
}

function convertObjectToString(obj) {

    return JSON.stringify(obj)
}

console.log(convertObjectToString(obj));