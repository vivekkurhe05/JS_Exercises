/**
 * Write a JavaScript program to find the kth greatest element of a given array of integers
 */

function kth_greatest_elem(arr, k) {
    let desc_sort = arr.sort(function(a, b){
        if(a > b) return -1;
        if(a < b) return 1;
        else return 0;
    });
    return desc_sort[k-1];
}
console.log(kth_greatest_elem([2,3,7,4,5,11,45,2,1], 1));