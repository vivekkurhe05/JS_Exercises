/**
 * Write a JavaScript function that accepts a number as a parameter and check the number is prime or not. Go to the editor
Note : A prime number (or a prime) is a natural number greater than 1 that has no positive divisors other than 1 and itself.
 */

function test_prime (num) {

    if(num == 1) {
        return false;
    }else if(num == 2) {
        return true;
    }else{
        for (let i=2; i<num; i++) {
            if(num % i == 0) {
                return false;
            }
        }
        return true;
    }

}
console.log(test_prime(7));