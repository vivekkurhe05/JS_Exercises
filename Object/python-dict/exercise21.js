/**
 * Write a Python program to create and display all combinations of letters, selecting each letter 
 * from a different key in a dictionary.
Sample data : {'1':['a','b'], '2':['c','d']}
Expected Output:
ac
ad
bc
bd
 */

// work on this
let obj = {
    '1':['a','b'], 
    '2':['c','d']
}

let arr = []
for(let key in obj) {
    arr.push(obj[key])
}