/**
 * Write a JavaScript program to replace all the numbers 
 * with a specified number of a given array of integers.
 */

// your solution

function replace_elem(arr, old_val, new_val) {
    for(let i=0; i<arr.length; i++){
        if(arr[i] == old_val){
            arr.splice(i, 1, new_val);
        }
    }
    return arr;
}
console.log(replace_elem([1,2,3,2,2,8,1,9], 2, 5));

// w3resource solution

function array_element_replace(arr, old_value, new_value) {
    for (var i = 0; i < arr.length; i++) {
      if (arr[i] === old_value) {
        arr[i] = new_value;
      }
    }
    return arr;
  }
  num = [1, 2, 3, 2, 2, 8, 1, 9];
  console.log("Original Array: "+num);
  console.log(array_element_replace(num, 2, 5));