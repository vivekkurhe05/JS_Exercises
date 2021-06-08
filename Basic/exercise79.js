/**
 * Write a JavaScript program to test whether a given array of integers 
 * contains 30 and 40 twice. The array length should be 0, 1, or 2.
 */

function twice30or40(arr, num) {
    let count = 0;

    let index = arr.indexOf(num, 0);
    while(index != -1){
        count++;
        index = arr.indexOf(num, index+1);
    }
    if(count ==2){
        return true;
    }else{
        return false;
    }
}
console.log(twice30or40([30,30,40], 30));
console.log(twice30or40([30,40,40], 40));
console.log(twice30or40([30,50,40], 40));