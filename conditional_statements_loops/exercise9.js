/**
 * Write a JavaScript program to find the armstrong numbers of 3 digits.
Note : An Armstrong number of three digits is an integer such that the sum of the cubes 
of its digits is equal to the number itself. 
For example, 371 is an Armstrong number since 3**3 + 7**3 + 1**3 = 371.
 */

// your solution

function three_digit_armstrong_number () {

    let isArmstrong = function (m) {
        let n=0, k=0,
        num = m;
        while (num != 0) {
            n = Math.floor(num % 10);
            k += n**3;
            num = Math.floor(num / 10);
        }

        return k === m ? true : false;
    }

    for(let i=100; i<1000; i++) {
        if(isArmstrong(i)) console.log(i);
    }
}

three_digit_armstrong_number();