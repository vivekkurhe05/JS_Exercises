/**
 * Write a JavaScript program to find the largest of three given integers.
 */

function getMax(num1, num2, num3) {
    var max_val = 0;
    if (num1 > num2 && num1 > num3) max_val = num1;
    else if (num2 > num1 && num2 > num3) max_val = num2;
    else max_val = num3;

    return max_val;
}
console.log(getMax(1, 2, 3));