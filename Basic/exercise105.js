/**
 * Write a JavaScript program to find the number of times to replace a given number 
 * with the sum of its digits until it convert to a single digit number.
 */

// your solution

function digit_to_one(num) {

    var digitSum = function(num){
        let sum = 0;
        while(num != 0) {
            sum += Math.floor(num%10);
            num = num/10;
        }
        return sum;
    }
    
    return digitSum(num).toString().length;

    // let n = 0;
    // while(sum > 0){
    //     n = n + Math.floor(sum/10);
    //     sum = sum % 10;
    // }

    // return n+1;

}
console.log(digit_to_one(123));
console.log(digit_to_one(156));
console.log(digit_to_one(1560));


//or

// function digit_to_one(num) {

//     var digitSum = function(num) {

//         var digit_sum = 0;
//         while (num) {
//             digit_sum += num % 10;
//             num = Math.floor(num / 10);
//         }

//         return digit_sum;
//     };

//     var result = 0;

//     while (num >= 10) {
//         result += 1;
//         num = digitSum(num);
//     }

//     return result;
// }

// console.log(digit_to_one(123))
// console.log(digit_to_one(156))
// console.log(digit_to_one(1560));
