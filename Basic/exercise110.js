/**
 * Write a JavaScript program to find the number of even values 
 * in sequence before the first occurrence of a given number.
 */

// your solution

function number_of_even_val(arr, num) {

    let countEven = 0;
    let index = arr.findIndex(function(elem){
        return elem == num;
    });

    if(index == -1){
        return -1;
    }
    for(let i=0; i < index; i++){
        if(arr[i] % 2 == 0){
            countEven++;
        }
    }
    return countEven;
}
console.log(number_of_even_val([1,2,3,4,5,6,7,8], 5));
console.log(number_of_even_val([1,3,5,6,7,8], 6));
console.log(number_of_even_val([1,3,5,6,7,8], 10));

// w3resource solution

function find_numbers(arr_num, num) {
    var result = 0;
    for (var i = 0; i < arr_num.length; i++)
    {
        if (arr_num[i] % 2 === 0 && arr_num[i] !== num) {
            result++;
        }
        if (arr_num[i] === num) 
        {
            return result;
        }
    }
    return -1;
}

console.log(find_numbers([1,2,3,4,5,6,7,8], 5))
console.log(find_numbers([1,3,5,6,7,8], 6))