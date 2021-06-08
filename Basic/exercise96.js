/**
 * Write a JavaScript program to compute the sum of absolute 
 * differences of consecutive numbers of a given array of integers.
 */

// your solution

function compute_sum_of_differences(arr) {

    let diff = 0
    let new_array = [];
    for(let i=0; i<arr.length-1; i++){
        diff = Math.abs(arr[i] - arr[i+1]);
        new_array.push(diff);
    }
    let result = new_array.reduce((acc, curr) => acc+curr);
    return result;

}
console.log(compute_sum_of_differences([1,2,3,2,-5]));

/**
 * w3resource solution
 */

 function sum_adjacent_difference(arr) {
	var result = 0;
	for (var i = 1; i < arr.length; i++) {
		result += Math.abs(arr[i] - arr[i - 1]);
	}
	return result;
}

console.log(sum_adjacent_difference([1, 2, 3, 2, -5]));