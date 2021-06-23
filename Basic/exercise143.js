/**
 * Write a JavaScript program to sort the strings of a given array of strings in the order of increasing lengths.
Note: Do not change the order if the lengths of two string are same.
 */

function sort_by_string_length(arr) {
    return arr.sort((a,b) => a.length - b.length);
}
console.log(sort_by_string_length(["xyz","acd","aa","bb","zzz","", "a","b"]));

// or

function sort_by_string_length(arr) {
    let temp = 0;
    for(let i=0; i<arr.length; i++) {
        for(let j=i+1; j<arr.length; j++){
            if(arr[i].length > arr[j].length){
                temp = arr[i];
                arr[i] = arr[j];
                arr[j] = temp;
            }
        }
    }
    return arr;
}
console.log(sort_by_string_length(["xyz","acd","aa","bb","zzz","", "a","b"]));