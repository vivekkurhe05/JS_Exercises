/**
 * Write a JavaScript program to extract the first half of a string of even length.
 */

function extract_firsthalf(str) {
    let len = str.length;
    if(len % 2 == 0){
        str = str.substr(0, len/2);
        return str;
    }
    return str;
}
console.log(extract_firsthalf('abcdefgh'));