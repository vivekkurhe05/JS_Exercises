/**
 * Write a Python program that takes any number of iterable objects or objects with a length property and returns the longest one.
 */

// my solution
function longest_item() {
    const args = Array.prototype.slice.call(arguments);
    return args.sort((a, b)=> {
        if(a.length > b.length) return -1;
        else if(a.length < b.length) return 1;
        else return 0;
    })[0];
}

console.log(longest_item('Red', 'Green', 'Black', 'Orange'));
console.log(longest_item([1, 2, 3], [1, 2, 3, 4], [1, 2, 3, 4, 5]));
console.log(longest_item([1, 2, 3], 'Java'));