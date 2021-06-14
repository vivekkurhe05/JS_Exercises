/**
 * Write a JavaScript program to check whether two given integers are similar or not, 
 * if a given divisor divides both integers and it does not divide either.
 */

// your solution

function checking_numbers(arr, n) {
    let bool = false;
    for(let i=0; i<arr.length; i++){
        if(arr[i]%n == 0 && arr[i+1]%n == 0 ){
            bool = true;
        }
    }
    return bool;
}
console.log(checking_numbers([7, 21], 7));