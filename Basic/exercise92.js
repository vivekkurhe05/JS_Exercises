/**
 * Write a JavaScript program to find the maximum difference between 
 * any two adjacent elements of a given array of integers.
 */

/**
 * 
 * your solution
 */
function maximal_diff(arr) {
    let max_diff = 0;
    let new_array = [];
    for(let i=0; i<arr.length-1; i++) {
        max_diff = Math.abs(arr[i] - arr[i+1]);
        new_array.push(max_diff);
    }
    new_array.sort((a,b)=> b-a);
    return new_array[0];
}
console.log(maximal_diff([1,2,3,8,9]));
console.log(maximal_diff([1, 2, 3, 18, 9]))
console.log(maximal_diff([13, 2, 3, 8, 9]))
console.log(maximal_diff([5,6,2,56,32,65,22]));

/**
 * w3resource solution
 */

 function max_difference(arr) {
	var max = -1;
    var temp;
	for (var i = 0; i < arr.length - 1; i++)
      {
		temp = Math.abs(arr[i] - arr[i + 1]);
		max = Math.max(max, temp);
	  }
	return max;
}

console.log(max_difference([1, 2, 3, 8, 9]))
console.log(max_difference([1, 2, 3, 18, 9]))
console.log(max_difference([13, 2, 3, 8, 9]))