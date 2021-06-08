/**
 * Write a JavaScript program to check whether two given integers are similar or not, 
 * if a given divisor divides both integers and it does not divide either.
 */

function checking_numbers(arr, n) {
    for(let i=0; i<arr.length; i++){
        if(arr[i]%n == 0 && arr[i+1]%n == 0 ){
            return true;
        }else{
            return false;
        }
    }
}
console.log(checking_numbers([7, 21], 7));