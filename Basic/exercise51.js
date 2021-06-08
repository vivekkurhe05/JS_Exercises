/**
 * Write a JavaScript program to convert a given number to hours and minutes.
 */

function converter(num) {
    var minutes = 1000 * 60;
    var hours = minutes * 60;
    var days = hours * 24;
    var months = days * 30;
    var years = months * 365

    return Math.round(num/years)+" years "+Math.round(num/months)+" months "+Math.round(num/days)+" days "+Math.round(num/hours)+" hours "+Math.round(num/minutes)+" minutes.";
}
console.log(converter(169009999999));

//or

function time_convert(num)
 { 
  var hours = Math.floor(num / 60);  
  var minutes = num % 60;
  return hours + ":" + minutes;         
}

console.log(time_convert(71));
console.log(time_convert(450));
console.log(time_convert(1441));