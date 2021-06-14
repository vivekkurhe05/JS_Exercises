/**
 * Write a JavaScript to add two positive integers without carry.
 */

// understand this program

function add_two_int_without_carrying(n1, n2) {
    var result = 0,
        x = 1;
    while (n1 > 0 && n2 > 0) {
        result += x * ((n1 + n2) % 10);
        n1 = Math.floor(n1 / 10);
        n2 = Math.floor(n2 / 10);
        x *= 10;
    }
    return result;
}
console.log(add_two_int_without_carrying(222, 911));
console.log(add_two_int_without_carrying(200, 900));
console.log(add_two_int_without_carrying(999, 1));
console.log(add_two_int_without_carrying(6, 7));

// or

function add_two_int_without_carrying(n1, n2) {
    let n3 = n1 + n2;
    let arr = Array.from(n3.toString());
    return Number(arr.slice(1).join(""));
}
console.log(add_two_int_without_carrying(222, 911));
console.log(add_two_int_without_carrying(200, 900));
console.log(add_two_int_without_carrying(999, 1));
console.log(add_two_int_without_carrying(6, 7));