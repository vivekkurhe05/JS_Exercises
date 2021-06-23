/**
 * Write a JavaScript program to find the number of elements which presents in both of the given arrays.
 */

// your solution

function test_same_elements_both_arrays(arr1, arr2) {

    let count = 0;
    for(let i=0; i<arr1.length; i++) {
        for(let j=0; j<arr2.length; j++) {
            if(arr1[i] == arr2[j]){
                count++;
            }
        }
    }
    return count;
}
console.log(test_same_elements_both_arrays([1, 2, 3, 4], [1, 2, 3, 4]));
console.log(test_same_elements_both_arrays([1, 2, 3, 4], [1, 2, 3, 5]));
console.log(test_same_elements_both_arrays([1, 2, 3, 4], [11, 22, 33, 44]));