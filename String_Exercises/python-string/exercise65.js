/**
 * Write a Python program to find all the common characters in lexicographical order
from two given lower case strings. If there are no similar letters print "No common characters".
 */

// my solutionk
function common_chars(str1,str2) {
    let arr1 = str1.split("")
    let arr2 = str2.split("")

    return arr1.some((el) => {
        return arr2.includes(el)
    })
}

console.log(common_chars("Python","PHP"))
console.log(common_chars("Java", "PHP"))