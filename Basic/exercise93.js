/**
 * Write a JavaScript program to find the maximal difference 
 * among all possible pairs of a given array of integers.
 */

/**
 * 
 *your solution
 */
function maximal_diff(arr) {
    let max_diff = 0;
    let new_array = [];
    for(let i=0; i<arr.length-1; i++){
        for(let j=i; j<arr.length-1; j++){
            max_diff = Math.abs(arr[i] - arr[j+1]);
            new_array.push(max_diff);
        }
    }

    new_array.sort((a,b) => b-a);
    return new_array[0];
}
 console.log(maximal_diff([1, 2, 3, 8, 9]))
 console.log(maximal_diff([1, 2, 3, 18, 9]))
 console.log(maximal_diff([13, 2, 3, 8, 9]))

// or

function array_max_diff(arr) {
    let max_diff = arr[0]-arr[0];
    for(let i=0; i<arr.length; i++) {
        for(j=i; j<arr.length; j++) {
            if(max_diff > arr[i]-arr[j]){
                max_diff = arr[i]-arr[j];
            }
        }
    }
    return Math.abs(max_diff);
}
console.log(array_max_diff([1, 2, 3, 8, 9]))
console.log(array_max_diff([1, 2, 3, 18, 9]))
console.log(array_max_diff([13, 2, 3, 8, 9]))

 /**
  * w3resource solution
  */

  function array_max_diff(arr) {

    var max_result = 0;

    for(var i=0;i<arr.length;i++)
       {
        for(var k=0; k!=i && k<arr.length; k++)
        {
            var diff = Math.abs(arr[i]-arr[k]);
            max_result = Math.max(max_result, diff);
        }
    }
    return max_result;
}
console.log(array_max_diff([1, 2, 3, 8, 9]))
console.log(array_max_diff([1, 2, 3, 18, 9]))
console.log(array_max_diff([13, 2, 3, 8, 9]))