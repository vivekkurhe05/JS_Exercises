/**
 * Write a JavaScript program to replace the first digit in a string (should contains at least digit) with $ character.
 */

// your solution

function replace_digit(str) {

    let new_str = "";
    for (let i = 0; i < str.length; i++) {
        if (!isNaN(str[i])) {
            new_str = str.substring(0, i) + "$" + str.substring(i + 1);
            break;
        }
    }
    return new_str;
}
console.log(replace_digit("abc1dabc"));
console.log(replace_digit("p3ython"));
console.log(replace_digit("p2343ython"));
console.log(replace_digit("p2243ython"));

// w3resource solution

// function replace_first_digit(input_str) {

//     return input_str.replace(/[0-9]/, '$');
// }
// console.log(replace_first_digit("abc1dabc"));
// console.log(replace_first_digit("p3ython"));
// console.log(replace_first_digit("ab1cabc"));
// console.log(replace_first_digit("p2343ython"));
