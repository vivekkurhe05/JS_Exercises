/**
 * Write a JavaScript program to evaluate binomial coefficients.
Note :
Binomial coefficient : According to Wikipedia - In mathematics, binomial coefficients are a 
family of positive integers that occur as coefficients in the binomial theorem. They are indexed 
by two nonnegative integers; the binomial coefficient indexed by n and k. 
Under suitable circumstances the value of the coefficient is given by the expression :
binomial coefficients
Arranging binomial coefficients into rows for successive values of n, and in which k ranges from 0 to n,
gives a triangular array called Pascal's triangle.

Test Data :
console.log(binomial(8,3));
console.log(binomial(10,2));
Output :
56
45
 */

// your solution

function binomial (num1, num2) {

    let fact = function (num) {
        let k=1;
        for(let i=num; i>0; i--) {
            k = k*i;
        }
        return k;
    }
    return fact(num1)/(fact(num2)*fact(num1-num2)); 
}
console.log(binomial(8,3));
console.log(binomial(10,2));