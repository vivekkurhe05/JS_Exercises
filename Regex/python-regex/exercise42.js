/**
 * Write a Python program to find urls in a string.
 */

text =
  '<p>Contents :</p><a href="https://w3resource.com">Python Examples</a><a href="http://github.com">Even More Examples</a>';

let re = /http[s]?:\/\/[a-z0-9]+\.\w{1,3}/g;

let urls = text.match(re);
console.log(urls);
