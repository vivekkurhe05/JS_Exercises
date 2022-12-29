/**
 * 
 * How to check a given string is an anagram of another string in JavaScript ?
 */

// my solution

function isAnagramString(str1, str2) {

    if(str1.length !== str2.length) return false;

    let arr1 = [], arr2 = [];

    for(let i=0;i<str1.length; i++) {
        if(!arr1.includes(str1[i])) arr1.push(str1[i]);
    }

    for(let i=0;i<str2.length; i++) {
        if(!arr2.includes(str2[i])) arr2.push(str2[i]);
    }

    str1 = arr1.sort().join("");
    str2 = arr2.sort().join("");

    return str1 === str2;
}

console.log(isAnagramString('evil', 'vile'));
console.log(isAnagramString('a gentleman', 'elegant man'));
console.log(isAnagramString('eleven plus two', 'twelve plus one'));
console.log(isAnagramString('eleven plus two', 'twelve plus three'));