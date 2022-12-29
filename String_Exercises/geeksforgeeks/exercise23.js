/**
 * Replace multiple strings with multiple other strings
 */

// geeks for geeks solution

function replace(str) {

    let re = /(Lenovo|Honor|Samsung)/g;
    let obj = {
        "Lenovo": "Dell",
        "Honor": "OnePlus",
        "Samsung": "Lenovo"
    }

    return str.replace(re, function(key) {
        return obj[key];
    })
}

console.log(replace("I have a Lenovo Laptop, a Honor Phone, and a Samsung Tab."))