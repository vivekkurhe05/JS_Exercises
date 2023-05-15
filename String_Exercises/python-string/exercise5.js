/**
 * Write a Python program to get a single string from two given strings, 
 * separated by a space and swap the first two characters of each string.
Sample String : 'abc', 'xyz'
Expected Result : 'xyc abz'
 */

// my solution
function swapLetters(str1,str2) {
    let newStr1 = str2.substring(0,2) + str1.at(-1)
    let newStr2 = str1.substring(0,2) + str2.at(-1)

    return [newStr1,newStr2].join(" ")
}

console.log(swapLetters("abc","xyz"))