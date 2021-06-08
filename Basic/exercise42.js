/**
 * Write a JavaScript program to check whether three given numbers are increasing in strict mode or in soft mode.
Note: Strict mode -> 10, 15, 31 : Soft mode -> 24, 22, 31 or 22, 22, 31
 */

function strict_soft(num1, num2, num3) {
    if((num2 > num1) && (num3 > num2)) return 'Strict mode';
    else if(num3 > num2) return 'Soft mode';
    else
        return 'undefined';
}
console.log(strict_soft(10, 15, 31));
console.log(strict_soft(24, 22, 31));
console.log(strict_soft(22, 22, 31));
console.log(strict_soft(50, 21, 15));