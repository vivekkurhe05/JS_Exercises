/**
 * Write a Java program to check if two given strings are rotations of each other.
 * The given strings are: ABACD  and  CDABA
 */

// my sol
function checkRotation(str1, str2) {
    let arr1 = str1.split("")
    while(true) {
        let del = arr1.pop()
        arr1.unshift(del)
        if(arr1.join("") === str2) {
            return `Two strings are rotation of each other`
        }else{
            return `Two strings are not rotation of each other`
        }
    }
}

console.log(checkRotation("ABACD", "CDABA"))