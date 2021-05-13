/**
 * If you call every() method on an empty array, the method will always return true for any condition.
 */

let gtZero = [].every( e => e > 0 );
let ltZero = [].every( e => e < 0 );

console.log('gtZero:', gtZero);
console.log('ltZero:', ltZero);