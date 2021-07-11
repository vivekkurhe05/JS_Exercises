/**
 * Write a JavaScript function which will take an array of numbers stored and find the second lowest 
 * and second greatest numbers, respectively. Go to the editor
Sample array : [1,2,3,4,5]
Expected Output : 2,4
 */

// your solution

function numbers(arr) {

    let second_greatest = function (arr1) {

        return arr1.sort((a, b) => a - b)[1];
    }

    let second_lowest = function (arr2) {

        return arr2.sort((a, b) => b - a)[1];
    }

    return [second_greatest(arr), second_lowest(arr)];
}
let [x, y] = numbers([1, 2, 3, 4, 5]);
console.log(x + "," + y);