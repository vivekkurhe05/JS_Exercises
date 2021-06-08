/**
 * Write a JavaScript program to check whether the characters a and b are separated by 
 * exactly 3 places anywhere (at least once) in a given string.
 */
function ab_check(str) {
    let indexA = str.indexOf('a',0);
    let indexB = str.indexOf('b', 0);

    return str.substring(indexA+1, indexB).length == 3;
}
console.log(ab_check('chainsbreak'));