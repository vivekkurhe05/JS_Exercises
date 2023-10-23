/**
 * Write a Python program to find the key of the maximum value in a dictionary.
Sample Output:
Original dictionary elements:
{'Theodore': 19, 'Roxanne': 22, 'Mathew': 21, 'Betty': 20}
Finds the key of the maximum and minimum value of the said dictionary:
('Roxanne', 'Theodore')
 */

// my solution
let obj = {'Theodore': 19, 'Roxanne': 22, 'Mathew': 21, 'Betty': 20}

let arr = Object.entries(obj)

arr = arr.sort((a,b)=>a[1]-b[1])

console.log([arr[arr.length-1][0], arr[0][0]])