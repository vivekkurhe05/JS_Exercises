/**
 * Write a JavaScript function for the Pythagorean theorem.
According to Wikipedia : In mathematics, the Pythagorean theorem, also known as Pythagoras' theorem, 
is a relation in Euclidean geometry among the three sides of a right triangle. 
It states that the square of the hypotenuse (the side opposite the right angle) 
is equal to the sum of the squares of the other two sides. 
The theorem can be written as an equation relating the lengths of the sides a, b and c, 
often called the "Pythagorean equation".
Test Data :
console.log(pythagorean(4, 3));
5
 */

// your solution

function pythagorean (side1, side2) {
    let sides = (side1*side1) + (side2*side2);
    return Math.sqrt(sides);
}

console.log(pythagorean(4, 3));