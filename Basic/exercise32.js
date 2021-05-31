/**
 * Write a JavaScript program to find a value which is nearest to 100 from two different given integer values.
 */

function valueNearest100(num1, num2) {

    var x = 100 - num1;
    var y = 100 - num2;

    if (x < y) {
        return num1;
    }
    else
        return num2;
}
console.log(valueNearest100(94, 93));