/**
 * Write a JavaScript to find the longest string from a given array of strings.
 */

// your solution

function longest_string(arr) {
    let longStr = arr.sort(function (a, b) {
        return a.length - b.length;
    });

    return [longStr[longStr.length - 1]];
}
console.log(longest_string(['aa', 'aaa', 'aaaaaaa', 'aaaaa']));


//or

function longest_string(str_ara) {
    var max = str_ara[0].length;
    str_ara.map(function(elem) {
        max = Math.max(max, elem.length);
        return max;
    });
    result = str_ara.filter(function(elem) {
        return elem.length == max;
    });
    return result;
}
console.log(longest_string(['aa', 'aaa', 'aaaaaaa', 'aaaaa']));