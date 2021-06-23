/**
 * Write a JavaScript program to find the shortest possible string which can create 
 * a string to make it a palindrome by adding characters to the end of it.
 */

// your solution is not holistic

function build_Palindrome(str) {
    let last_char = str[str.length - 1];
    let str2 = str.slice(0, str.indexOf(last_char));
    let arr = str2.split("");

    // let index = str.lastIndexOf(last_char, str.length-2);
    // let straight = str.substr(index);
    // let backward = str.slice(-straight.length);
    
    // if(straight === backward) {
    //     let rev =str.substr(0, 3).split("").reverse().join("");
    //     return str + rev;
    // }

    if(arr.length > 1) {
        arr.reverse();
    }

    let str3 = str + arr.join("");
    return str3;

}
console.log(build_Palindrome("abcddc"));
console.log(build_Palindrome("122"));
console.log(build_Palindrome("madama")); // it should return madamadam
console.log(build_Palindrome("abcdedcba"));

/**
 * w3resource
 */

// function build_Palindrome(new_str) {
//     var flag;
//     for (var i = new_str.length; ; i++) {
//         flag = true;
//         for (var j = 0; j < i - j - 1; j++) {
//             if (i - j - 1 < new_str.length && new_str[j] != new_str[i - j - 1]) {
//                 flag = false;
//                 break;
//             }
//         }
//         if (flag) {
//             for (var j = new_str.length; j < i; j++) {
//                 new_str += new_str[i - j - 1];
//             }
//             return new_str;
//         }
//     }
// }

// console.log(build_Palindrome("abcddc"))
// console.log(build_Palindrome("122"))
// console.log(build_Palindrome("madama"));
// console.log(build_Palindrome("abcdedcba"));