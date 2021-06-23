/**
 * Write a JavaScript function to get minutes with leading zeros (00 to 59).
Test Data :
dt = new Date(1989, 10, 1);
console.log(minutes_with_leading_zeros(dt));
"00"
 */

// your solution

function minutes_with_leading_zeros(d) {
    let minutes = d.getMinutes();
    if(minutes < 10){
        return "0" + minutes;
    }
    return minutes;
}
dt = new Date();
console.log(minutes_with_leading_zeros(dt));