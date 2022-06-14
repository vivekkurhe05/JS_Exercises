/**
 * Write a JavaScript program to sort the items of an array. Go to the editor
Sample array : var arr1 = [ 3, 8, 7, 6, 5, -4, 3, 2, 1 ];
Sample Output : -4,-3,1,2,3,5,6,7,8
 */

// my solution 

var arr1 = [ 3, 8, 7, 6, 5, -4, -3, 2, 1 ];

console.log(arr1.sort(function(a,b) {
    return a-b;
}))

/**
 * or
 */

console.log(arr1.sort(function(a,b) {
    if(a>b) return 1;
    if(a<b) return -1;
    return 0;
}))