/**
 * Write a JavaScript program to display the current day and time in the following format.
Sample Output : Today is : Tuesday.
Current time is : 10 PM : 30 : 38
 */

// var d = new Date();
// var day = new Intl.DateTimeFormat('en-US', { weekday: 'long' }).format(d);
// console.log('Today is : ', day);
// console.log('Current time is : ' + d.getHours() + " PM : " + d.getMinutes() + " : " + d.getSeconds());

//or

function addZero(i) {
    if (i < 10) {
        i = "0" + i;
    }
    return i;
}

const date = new Date();
const day = date.getDay();

let hours = date.getHours();

const format = hours >= 12 ? "PM" : "AM";
if (hours > 12) {
    hours = Math.abs(hours - 12);
}

const minutes = date.getMinutes();
const seconds = date.getSeconds();

const weekDays = [
    "Sunday",
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday",
];

console.log(
    `Today is : ${weekDays[day]}\nCurrent Time is : ${addZero(hours)}:${addZero(minutes)}:${addZero(seconds)} ${format}\n`
);