/**
 * Write a JavaScript program to check whether it is possible to rearrange characters 
 * of a given string in such way that it will become equal to another given string.
 */

// your solution

function check_rearrange(str1, str2) {
    let arr = str2.trim().split("");
    let new_str = arr.sort().join("");
    return str1 == new_str;

}
console.log(check_rearrange("xyz", "zyx"));
console.log(check_rearrange("xyz", "zyp"));

// w3resource solution

function rearrangement_characters(str1, str2) {

    var first_set = str1.split(''),
        second_set = str2.split(''),
        result = true;
  
    first_set.sort();
    second_set.sort();
  
    for (var i = 0; i < Math.max(first_set.length, second_set.length); i++) {
      if (first_set[i] !== second_set[i]) {
        result = false;
      }
    }
  
    return result;
  }
  
  console.log(rearrangement_characters("xyz", "zyx"))
  console.log(rearrangement_characters("xyz", "zyp"))