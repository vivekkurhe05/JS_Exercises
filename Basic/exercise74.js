/**
 * Write a JavaScript program to find the larger value between the first or last 
 * and set all the other elements with that value. Display the new array.
 */

function setLargeValue(arr) {

    if(arr[0] > arr[arr.length-1]){
        arr.fill(arr[0]);
    }else{
        arr.fill(arr[arr.length-1]);
    }
    return arr;
}
console.log(setLargeValue([1,2,3]));
console.log(setLargeValue([4,3,2]));

// or

function setLargeValue(arr) {
    let large = [];
    while(arr.length > large.length){
        if(arr[0] > arr[arr.length-1]) {
            large.push(arr[0]);
        }else{
            large.push(arr[arr.length-1]);
        }
    }

    return large;
}
console.log(setLargeValue([1,2,3]));
console.log(setLargeValue([4,3,2]));
console.log(setLargeValue([5]));

// or

function setLargeValue(arr) {
    for(let i=0; i<arr.length; i++){
        if(arr[0] > arr[arr.length-1]){
            arr[i] = arr[0];
        }else{
            arr[i] = arr[arr.length-1];
        }
    }
    return arr;
}
console.log(setLargeValue([1,2,3]));
console.log(setLargeValue([4,3,2]));
console.log(setLargeValue([5]));