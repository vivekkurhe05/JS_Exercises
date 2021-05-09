/**
 * sort mixed case animals array in ascending order
 */

let mixedCaseAnimals = ['Cat', 'dog', 'Elephant', 'bee', 'ant'];

mixedCaseAnimals.sort( function (a, b) {

    let x = a.toLocaleUpperCase();
    let y = b.toLocaleUpperCase();

    if ( x > y) return 1;
    if ( x < y) return -1;
    return 0;
});

console.log(mixedCaseAnimals);

// or

mixedCaseAnimals.sort( function (a, b) {

    let x = a.toLocaleUpperCase();
    let y = b.toLocaleUpperCase();

    return x > y ? 1 : x < y ? -1 : 0;
});

console.log(mixedCaseAnimals);

// or

mixedCaseAnimals.sort( function (a, b) {

    return a.localeCompare(b);
});

console.log(mixedCaseAnimals);