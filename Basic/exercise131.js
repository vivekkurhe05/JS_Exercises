/**
 * Write a JavaScript program to create an array of prefix sums of the given array.
In computer science, the prefix sum, cumulative sum, inclusive scan, or simply scan of 
a sequence of numbers x0, x1, x2, ... is a second sequence of numbers y0, y1, y2, ..., 
the sums of prefixes of the input sequence:
y0 = x0
y1 = x0 + x1
y2 = x0 + x1+ x2
 */

// your solution

function prefix_sums(arr) {
    let new_arr = [];

    for(let k=1; k<=arr.length; k++){
        let i = arr.length-k;
        let sum = 0;
        while(i >= 0) {
            sum += arr[i];
            i--;
        }
        new_arr.unshift(sum);
    }
    
    return new_arr;
}

console.log(prefix_sums([1,2,3,4,5]));
console.log(prefix_sums([1,2,-3,4,5]));