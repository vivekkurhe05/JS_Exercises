/**
 * Write a JavaScript program to get the largest even number from an array of integers.
 */

// your solution

function largest_even_number(arr) {
    let even_num = [];
    for(let i=0; i<arr.length; i++) {
        if(arr[i] % 2 == 0) even_num.push(arr[i]);
    }
    even_num.sort((a,b) => b-a);

    return even_num[0];
}
console.log(largest_even_number([20, 40, 200]));
console.log(largest_even_number([20, 40, 200, 301]))

/**
 * w3resource solution
 */

 function max_even(arra) {

    arra.sort((x, y) => y - x);
  
    for (var i = 0; i < arra.length; i++) {
      if (arra[i] % 2 == 0)
        return arra[i];
      }
    }
  
  console.log(max_even([20, 40, 200]));
  console.log(max_even([20, 40, 200, 301]));