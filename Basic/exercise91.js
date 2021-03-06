/**
 * Write a JavaScript program to find the maximum possible sum of some of its k consecutive numbers 
 * (numbers that follow each other in order.) of a given array of positive integers.
 */

/**
 * 
 * your solution
 */
function max_possible_sum(arr){

    let sum = 0;
    let new_array = [];
    for(let i=0 ; i<arr.length-1; i++) {
        sum = arr[i] + arr[i+1];
        new_array.push(sum);
    }
    new_array.sort((a,b) => b-a);
    return new_array[0];
}
console.log(max_possible_sum([1,2,3,14,5]));
console.log(max_possible_sum([2, 3, 5, 1, 6]))
console.log(max_possible_sum([9, 3, 5, 1, 7]))

  // or
  // your solution
  function array_max_consecutive_sum(arr) {
    let max = arr[0] + arr[1];
    for(let i=1; i<arr.length-1; i++) {
      if(max < (arr[i]+arr[i+1])){
        max = arr[i] + arr[i+1];
      }
    }
    return max;
  }
  console.log(array_max_consecutive_sum([1, 2, 3, 14, 5], 2))
  console.log(array_max_consecutive_sum([2, 3, 5, 1, 6], 3))
  console.log(array_max_consecutive_sum([9, 3, 5, 1, 7], 2))

/**
 * w3resource solution
 */

 function array_max_consecutive_sum(nums, k) {
    let result = 0;
    let temp_sum = 0;
    for (var i = 0; i < k - 1; i++) {
      temp_sum += nums[i];
    }
    for (var i = k - 1; i < nums.length; i++) {
      temp_sum += nums[i];
      if (temp_sum > result) {
        result = temp_sum;
      }
      temp_sum -= nums[i - k + 1];
    }
    return result;
  }
  
  console.log(array_max_consecutive_sum([1, 2, 3, 14, 5], 2))
  console.log(array_max_consecutive_sum([2, 3, 5, 1, 6], 3))
  console.log(array_max_consecutive_sum([9, 3, 5, 1, 7], 2))