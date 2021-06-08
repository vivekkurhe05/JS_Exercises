/**
 * Write a JavaScript program to find the number of sorted pairs formed by its elements of a given array of
 *  integers such that one element in the pair is divisible by the other one.
 */

// your soultion

function sorted_pair(arr){
    let result = 0;
    for(let i=0; i<arr.length; i++) {
        for(let j=i+1; j<arr.length; j++) {
            if((arr[i] % arr[j]) == 0 || (arr[j] % arr[i]) == 0){
                result++;
            }
        }
    }
    return result;
}
console.log(sorted_pair([1,3,2]));
console.log(sorted_pair([2,4,6]));
console.log(sorted_pair([2,4,16]));