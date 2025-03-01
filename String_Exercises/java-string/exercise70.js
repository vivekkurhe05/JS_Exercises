/**
 * Write a Java program that checks if a string has pq-balance if it contains at least one 'q' 
 * directly after each ‘p’. But a 'q' before the 'p' invalidates pq-balance.
 * 
 * The given strings is: gfpmpnppqab
The string is pq-balanced? true

The given strings is: gfpmpnpqpab
The string is pq-balanced? false
 */

// my sol
function hasPQBalance(str) {
    const re = /.+pq(?!p).*/g
    return re.test(str)
}

console.log(hasPQBalance("gfpmpnppqab"))
console.log(hasPQBalance("gfpmpnpqpab"))