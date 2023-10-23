/**
 * A Python dictionary contains List as a value. Write a Python program to clear the list values in the said dictionary.
Original Dictionary:
{'C1': [10, 20, 30], 'C2': [20, 30, 40], 'C3': [12, 34]}
Clear the list values in the said dictionary:
{'C1': [], 'C2': [], 'C3': []}
 */

// my solution
let obj = {
    'C1': [10, 20, 30], 
    'C2': [20, 30, 40], 
    'C3': [12, 34]
}

for (let key in obj) {
    obj[key] = []
}
console.log(obj)