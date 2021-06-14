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


//or w3resource solution

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

// or your solution

function longest_string(arr) {
    let max_len = arr[0].length;
    let str_arr = [];

    for(let i=0; i<arr.length; i++) {
        if(arr[i].length > max_len) max_len = arr[i].length;
    }

    for(let i=0; i<arr.length; i++) {
        if(max_len === arr[i].length) str_arr.push(arr[i]);
    }

    return str_arr;
}
console.log(longest_string(['aa', 'aaa', 'aaaaaaa', 'aaaaa']));