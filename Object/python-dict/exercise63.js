/**
 * Write a Python program to convert a given list of lists to a dictionary.
Original list of lists:
[
    [1, 'Jean Castro', 'V'], 
    [2, 'Lula Powell', 'V'], 
    [3, 'Brian Howell', 'VI'], 
    [4, 'Lynne Foster', 'VI'], 
    [5, 'Zachary Simon', 'VII']
]
Convert the said list of lists to a dictionary:
{
    1: ['Jean Castro', 'V'], 
    2: ['Lula Powell', 'V'], 
    3: ['Brian Howell', 'VI'], 
    4: ['Lynne Foster', 'VI'], 
    5: ['Zachary Simon', 'VII']
}
 */

// my solution
let arr = [
    [1, 'Jean Castro', 'V'], 
    [2, 'Lula Powell', 'V'], 
    [3, 'Brian Howell', 'VI'], 
    [4, 'Lynne Foster', 'VI'], 
    [5, 'Zachary Simon', 'VII']
]

let obj = {}

for (let i=0; i<arr.length; i++) {

    obj[arr[i][0]] = arr[i].slice(1)
}

console.log(obj)