/**
 * Write a JavaScript function to get seconds with leading zeros (00 through 59).
Test Data :
dt = new Date(1989, 10, 1);
console.log(seconds_with_leading_zeros(dt));
"00"
 */

// your solution

function seconds_with_leading_zeros(d) {
    let sec = d.getSeconds();

    if(sec < 10){
        return "0" + sec;
    }
    return sec;
}

dt = new Date();
console.log(seconds_with_leading_zeros(dt));