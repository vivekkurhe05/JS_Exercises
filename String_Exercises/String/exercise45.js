/**
 * Write a JavaScript function to get humanized number with the correct suffix such as 1st, 2nd, 3rd or 4th.
 * Test Data :
 * console.log(humanize(1));
 * console.log(humanize(20));
 * console.log(humanize(302));
 * "1st"
 * "20th"
 * "302nd"
 */

function humanize (num) {

    if (typeof num == 'undefined') return;

    if (num % 100 >= 11 && num % 100 <= 20) return num + 'th'

    switch (num % 10) {
        case 1: return num + 'st';
        case 2: return num + 'nd';
        case 3: return num + 'rd';
    }

    return num + 'th';

}

console.log(humanize(1));
console.log(humanize(20));
console.log(humanize(302));
console.log(humanize());