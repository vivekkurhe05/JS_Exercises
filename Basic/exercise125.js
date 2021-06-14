/**
 * Write a JavaScript program to find the longest string from a given array.
 */

/// your solution

function find_longest_string(arr) {
    let max = arr[0].length;
    arr.map(function(el) {
        max = Math.max(max, el.length);
        return max;
    });

    let result = arr.filter(function(el){
        return max == el.length;
    });

    if(result.length >= 1){
        return result[0];
    }
}
console.log(find_longest_string(['ab','a','abcd']));
console.log(find_longest_string(['ab','ab','ab']));
console.log(find_longest_string(["ab", "cd", "ef"]));

/**
 * w3resource solution
 */

 function longest_str_in_array(arra)
 {
   var max_str = arra[0].length;
   var ans = arra[0];
   for (var i = 1; i < arra.length; i++) {
       var maxi = arra[i].length;
       if (maxi > max_str) {
           ans = arra[i];
           max_str = maxi;
       }
   }
   return ans;
}
console.log(longest_str_in_array(["ab", "a", "abcd"]));
console.log(longest_str_in_array(["ab", "ab", "ab"]));
console.log(longest_str_in_array(["ab", "cd", "ef"]));