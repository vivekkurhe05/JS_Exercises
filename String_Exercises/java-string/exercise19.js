/**
 * Write a Java program to get the index of all the characters of the alphabet.
 * Sample string of all alphabet: "The quick brown fox jumps over the lazy dog."
 * 
 * output
a  b c  d e  f  g h i  j                                                                                     
=========================                                                                                     
36 10 7 40 2 16 42 1 6 20                                                                                     
                                                                                                   
k  l  m  n  o  p q  r  s  t                                                                                   
===========================                                                                                   
8 35 22 14 12 23 4 11 24 31                                                                                   

u  v  w  x  y  z                                                                                              
================                                                                                              
5 27 13 18 38 37
 */

// my sol
function getIndexes(str) {
    let chars = "abcdefghijklmnopqrstuvwxyz"
    let obj = {}
    for(let i=0;i<chars.length;i++) {

        if(str.search(chars[i])!=-1) {
            obj[chars[i]] = str.search(chars[i])
        }
    }
    return obj
}

console.log(getIndexes("The quick brown fox jumps over the lazy dog."))