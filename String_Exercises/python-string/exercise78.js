/**
 * Write a Python program to count the number of non-empty substrings of a given string.
input : xbcefg
output : 2
 */

function count_char_position(str){
    count=0
    for(let i=0;i<str.length;i++){
        if (i===(str[i].charCodeAt()-"a".charCodeAt()) || (i===(str[i].charCodeAt()-"A".charCodeAt()))) {
            count+=1
        }
    }
    return count
}

console.log(count_char_position("xbcefg"))
