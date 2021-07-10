/**
 * Write a JavaScript conditional statement to sort three numbers. Display an alert box to show the result.
Sample numbers : 0, -1, 4
Output : 4, 0, -1
 */

// your solution

function sort_numbers (...args) {
    let arr = [...args]

    let res = arr.sort((a,b) => {
        if(a > b) return -1;
        else if(a < 1) return 1;
        else return 0;
    });

    return res
}

[x, y, z] = sort_numbers(0, -1, 4);
console.log(x,y,z);