/**
 * Write a JavaScript program to find the number of trailing zeros 
 * in the decimal representation of the factorial of a given number.
 */

// your solution

function trailing_zeros_fact(num){
    let result = 1;
    let new_arr = [];
    for(let i=num; i>0; i--){
        result = result * i;
    }
    let str_arr = result.toString().split("");

    for(let i=str_arr.length-1; i>0; i--){
        if(str_arr.pop() == '0'){
            new_arr.push(0);
        }else{
            break;
        }
    }
    return new_arr.length;
}

console.log(trailing_zeros_fact(5));
console.log(trailing_zeros_fact(9));
console.log(trailing_zeros_fact(10));
console.log(trailing_zeros_fact(15));