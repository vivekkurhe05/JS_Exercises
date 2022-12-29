/**
 * How to sort strings in JavaScript?
 * Original String
 *   Suraj, Sanjeev, Rajnish, Yash, Ravi
 * After sorting
 *   Rajnish, Ravi, Sanjeev, Suraj, Yash
 */

// my solution
function sort() {
    let args = Array.prototype.slice.call(arguments);
    return args.sort((a, b) => {
        if(typeof a === 'string' && typeof b == 'string'){
            return a.localeCompare(b);
        }else {
            return a - b;
        }
    });
}
console.log(sort("Suraj", "Sanjeev", "Rajnish", "Yash", "Ravi"));
console.log(sort(40, 100, 1, 5, 25, 10))
