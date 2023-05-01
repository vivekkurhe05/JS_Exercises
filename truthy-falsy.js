// Truthy - Values that resolve to true in boolean context
// Falsy - Values that resolve to false in boolean context
// Falsy values - false, 0, empty string, null, undefined, NaN
// Truthy values - everything else is truthy

const products = [{name: 'Computer mouse'}]
const product = products[0]

if(product) {
    console.log('Product found')
} else {
    console.log('Product not found')
}