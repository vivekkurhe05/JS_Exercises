const weekday = ["Sun","Mon","Tue","Wed","Thu","Fri","Sat"];
const birthday = new Date('August 19, 1975 23:15:30');
const day1 = birthday.getDay();
// Sunday - Saturday : 0 - 6

console.log(day1);
console.log(weekday[day1]);


var Xmas95 = new Date('December 25, 1995 23:15:30');
var wday = Xmas95.getDay();
console.log(wday);
var d = new Intl.DateTimeFormat('en-US', { weekday: 'long'}).format(Xmas95)
console.log(d);