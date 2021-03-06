/**
 * Write a JavaScript function to humanized number (Formats a number to a human-readable string.) 
 * with the correct suffix such as 1st, 2nd, 3rd or 4th. Go to the editor
Test Data :
console.log(humanize_format());
console.log(humanize_format(1));
console.log(humanize_format(8));
console.log(humanize_format(301));
console.log(humanize_format(402));
"1st"
"8th"
"301st"
"402nd"
 */

function humanize_format(num) {

    if (typeof num == 'undefined') return;

    if(num % 100 >= 11 && num % 100 <= 13) return num + 'th';

    switch (num % 10) {
        case 1: return num + 'st';
        case 2: return num + 'nd';
        case 3: return num + 'rd';
    }

    return num + 'th';
}

console.log(humanize_format());
console.log(humanize_format(1));
console.log(humanize_format(8));
console.log(humanize_format(301));
console.log(humanize_format(402));