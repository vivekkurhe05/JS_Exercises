/**
 * Write a Python script to print a dictionary where the keys are numbers between 1 and 15 (
 * both included) and the values are the square of the keys.
Sample Dictionary
{1: 1, 2: 4, 3: 9, 4: 16, 5: 25, 6: 36, 7: 49, 8: 64, 9: 81, 10: 100, 11: 121, 12: 144, 13: 169, 14: 196, 15: 225}
 */

// my solution
function createDict(n) {
    d = {}

    for(let i=1; i<=n; i++) {
        d[i]=i*i
    }
    return d
}
console.log(createDict(15))