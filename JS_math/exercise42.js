/**
 * Write a JavaScript function to calculate the combination of n and r.
The formula is : n!/(r!*(n - r)!).
Test Data :
console.log(combinations(6, 2));
15
console.log(combinations(5, 3));
10
 */

// your solution

function combinations (n, r) {
    
    let fact = function (num) {
        let k = 1;
        for(let i=num; i > 0; i--) {
            k = k * i;
        }
        return k;
    }
    return Math.floor(fact(n)/(fact(r)*(fact(n - r))));
}
console.log(combinations(6, 2));
console.log(combinations(5, 3));
