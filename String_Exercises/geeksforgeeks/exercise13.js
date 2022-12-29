/**
 * How to get the longest string in an array using JavaScript ?
 */

function longest_str(arr) {
    let max = arr[0].length;
     arr.map((el) => {
        max = Math.max(max, el.length)
        return max;
     })

     return arr.filter(el => {
        return el.length == max;
     })[0];
}

let arr = ["A_Copmuter_Science_Portal", "GeeksforGeeks", "GFG", "geeks"];
console.log(longest_str(arr));