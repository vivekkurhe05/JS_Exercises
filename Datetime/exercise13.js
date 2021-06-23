/**
 * Write a JavaScript function that will return the number of minutes in hours and minutes.

Test Data :
console.log(timeConvert(200));
Output :
"200 minutes = 3 hour(s) and 20 minute(s)."
 */

// your solution

function timeConvert(min) {
    let hours = 0;

    for(let i=0; i<min; i++){
        if(min >= 60){
            hours++;
            min = min-60;
        }
    }

    return hours+ " hour(s) and "+ min+" minute(s).";
}
console.log(timeConvert(200));