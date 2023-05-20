/**
 * 
Write a Python function that takes a list of words and return the longest word and
the length of the longest one.
Sample Output:
Longest word: Exercises
Length of the longest word: 9
 */

// my solution

function longest_word(arr){
    let word = arr[0]
    try{
        for(let i=0;i<arr.length;i++) {
            if(arr[i].length < arr[i+1].length) {
                word = arr[i+1]
            }else {
                word = arr[i]
            }
        }
    } catch(err) {
        return word
    }
    
    
}

console.log(longest_word(["PHP","Exercises","Backend","Properties"]))

// or

function longest_word(arr){
    return arr.sort((a,b) => a.length - b.length).at(-1)
}

console.log(longest_word(["PHP","Exercises","Backend","Properties"]))

// or

function longest_word3(arr){
    var max = arr[0].length;
    arr.map(function(elem) {
        max = Math.max(max, elem.length);
        return max;
    });
    result = arr.filter(function(elem) {
        return elem.length == max;
    });
    return result[0];
}

console.log(longest_word3(["PHP","Exercises","Backend","Properties"]))