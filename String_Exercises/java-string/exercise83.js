/**
 * Write a Java program to create a string from two given strings. This is so that each character of
 *  the two strings appears individually in the created string.
 * 
 * The given strings  are: welcome  and  w3resource
The new string is: wwe3lrceosmoeurce
 */

// work on this because system does not know which string length is less
function createString(str1, str2) {
    let len= str1.length>str2.length ? str1.length : str2.length;
    let newstr = "";
    for(let i=0;i<len;i++) {
        if(str1[i] === undefined && str2[i]) {
            newstr+=str2[i]
        }
        else{
            newstr+=str1[i]+str2[i]
        }
    }
    return newstr
}

console.log(createString("welcome","w3resource"))