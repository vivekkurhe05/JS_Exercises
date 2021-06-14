/**
 * Write a JavaScript code to divide a given array of positive integers into two parts. 
 * First element goes to first part, second element goes to second part, 
 * and third element goes to first part and so on. 
 * Now compute the sum of two parts and store into an array of size two.
 */

// your solution

function pos_int(arr) {
    let even_indx = [];
    let odd_indx = [];
    for (let i = 0; i < arr.length; i++) {
        if (i % 2 == 0) {
            even_indx.push(arr[i]);
        } else {
            odd_indx.push(arr[i]);
        }
    }
    let sum1 = even_indx.reduce((sum, e) => {
        return sum += e;
    }, 0);

    let sum2 = odd_indx.reduce((sum, e) => {
        return sum += e;
    }, 0);

    return [sum1, sum2];
}
console.log(pos_int([1, 2, 3, 4, 5, 6]));
console.log(pos_int([1, 3, 6, 2, 5, 10]));

//w3resource solution

function alternate_Sums(arr) {
    var result = [0, 0];
    for (var i = 0; i < arr.length; i++) {
        if (i % 2) result[1] += arr[i];
        else
            result[0] += arr[i];
    }
    return result
}

console.log(alternate_Sums([1, 3, 6, 2, 5, 10]))