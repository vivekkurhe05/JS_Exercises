/**
 * Write a JavaScript program to check whether a given integer has an increasing digits sequence.
 */

// your solution

function is_increasing_digits_Sequence(num) {
    let digits_seq = [];
    let is_insequence = false;
    while (num) {
        let quotient = Math.floor(num / 10);
        let remainder = Math.floor(num % 10)
        digits_seq.unshift(remainder);
        num = quotient;
    }

    for (let i = 0; i < digits_seq.length - 1; i++) {
        if (digits_seq[i] < digits_seq[i + 1]) is_insequence = true;
        else {
            is_insequence = false;
            break;
        }
    }

    return is_insequence;
}
console.log(is_increasing_digits_Sequence(123));
console.log(is_increasing_digits_Sequence(1223));
console.log(is_increasing_digits_Sequence(45677));
console.log(is_increasing_digits_Sequence(1357));
console.log(is_increasing_digits_Sequence(3157));


/**
 * w3resource solution
 */

function is_increasing_digits_Sequence(num) {

    var arr_num = ('' + num).split('');

    for (var i = 0; i < arr_num.length - 1; i++) {
        if (parseInt(arr_num[i]) >= parseInt(arr_num[i + 1]))
            return false;
    }
    return true;
}

console.log(is_increasing_digits_Sequence(123));
console.log(is_increasing_digits_Sequence(1223));
console.log(is_increasing_digits_Sequence(45677));
console.log(is_increasing_digits_Sequence(1357));