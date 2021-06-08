/**
 * Write a JavaScript program to find two elements of the array such that their absolute 
 * difference is not greater than a given integer but is as close to the said integer.
 */

function different_values(arr, n) {
    var max_val = -1;
    for(let i=0; i<arr.length; i++) {
        for(let j=i+1; j<arr.length; j++){
            var x = Math.abs(arr[i] - arr[j]);
            if(x <= n){
                max_val = Math.max(max_val, x);
            }
        }
    }
    return max_val;
}
 console.log(different_values([12, 10, 33, 34], 10));
 console.log(different_values([12, 10, 33, 34], 24));
 console.log(different_values([12, 10, 33, 44], 40));