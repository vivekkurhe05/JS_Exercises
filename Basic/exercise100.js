/**
 * Write a JavaScript program to check whether there is at least 
 * one element which occurs in two given sorted arrays of integers.
 */

// your solution
function check_common_element(arr1, arr2) {

    let new_arr = [];
    for(let i=0; i<arr1.length; i++) {

        for(j=0; j<arr2.length; j++) {
            if(arr1[i] === arr2[j]) new_arr.push(arr1[i]);
        }
    }
    return new_arr.length > 0;
}
console.log(check_common_element([1,2,3], [3,4,5]));

/**
 * w3resource solution
 */

 function check_common_element(arra1, arra2) {
    for (var i = 0; i < arra1.length; i++)
    {
      if (arra2.indexOf(arra1[i]) != -1) 
        return true;
    }
    return false;
  }
  console.log(check_common_element([1,2,3], [3,4,5]));   
  console.log(check_common_element([1,2,3], [5,6,7])); 