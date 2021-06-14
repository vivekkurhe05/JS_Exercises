/**
 * Write a JavaScript program to find the number which appears most in a given array of integers.
 */

/**
 * 
 your solution
 */

function element_appearing_most(arr) {
  let max_count = 0,
  num =0;
  for(let i=0; i<arr.length; i++){
    let count = 0;
    let index = arr.indexOf(arr[i], 0);
  
    while (index != -1) {
      count++;
      index = arr.indexOf(arr[i], index + 1);
      if(max_count < count) {
        max_count = count;
        num = arr[i];
      }
    }
     
  }

  return num;
}
console.log(element_appearing_most([1, 2, 3, 2, 2, 8, 1, 9]));
console.log(element_appearing_most([8, 8, 8, 6, 6, 6, 4, 4, 4, 4]))

/**
 *
 * w3resource solution
 */
function array_element_mode(arr) {
    var ctr = [],
      ans = 0;

    for(var i = 0; i < 10; i++) {
      ctr.push(0);
    }
    for(var i = 0; i < arr.length; i++) {
      ctr[arr[i] - 1]++;
      if(ctr[arr[i] - 1] > ctr[ans]) {
        ans = arr[i] - 1;
      }
    }
    return ans + 1;  
  }
  console.log(array_element_mode([1, 2, 3, 2, 2, 8, 1, 9]))
  console.log(array_element_mode([8,8,8,6,6,6,4,4,4,4]))