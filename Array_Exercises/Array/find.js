/**
 * Find an array element greater than 10
 */

const array1 = [5, 12, 8, 130, 44];

const found = array1.find(element => element > 10);

console.log(found);

/**
 * 
 * Find an object in an array by one of its properties
 * 
 */

const inventory = [
    { name: 'apples', quantity: 2 },
    { name: 'bananas', quantity: 0 },
    { name: 'cherries', quantity: 5 }
];

const result = inventory.find(function({ name }) {
    return name === 'cherries'
} );

console.log(result)

