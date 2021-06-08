/**
 * Write a JavaScript program to find the number of inversions of a given array of integers.
Note: Two elements of the array a stored at positions i and j form an inversion if a[i] > a[j] and i < j.
*/

/**
 *w3resource solution
 */
function number_of_inversions(arr) {
    let count = 0;
    for(let i=0; i<arr.length; i++) {
        for(let j=i+1; j<arr.length; j++) {
            if(arr[i] > arr[j]) {
                count++;
            }
        }
    }
    return count;
}
console.log(number_of_inversions([0, 3, 2, 5, 9]));   
console.log(number_of_inversions([1, 5, 4, 3]));   
console.log(number_of_inversions([10, 30, 20, -10]));  
