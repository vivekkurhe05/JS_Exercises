/**
 * Write a Python program to extract year, month and date from an url.
 * 
 * output
 * [('2016', '09', '02')] 
 */

// my solution
let url1= "https://www.washingtonpost.com/news/football-insider/wp/2016/09/02/odell-beckhams-fame-rests-on-one-stupid-little-ball-josh-norman-tells-author/";

let re = /(\d{4})|(\d{2})/g;

console.log(url1.match(re));