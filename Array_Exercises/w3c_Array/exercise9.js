/**
 * Write a JavaScript program which accept a string as input and swap the case of each character. 
 * For example if you input 'The Quick Brown Fox' the output should be 'tHE qUICK bROWN fOX'.
 */

function swap_case (str) {

    return str.trim().split('').map( function (chr) {
        return chr === chr.toLocaleUpperCase() ? chr.toLocaleLowerCase() : chr.toLocaleUpperCase();
    }).join('');
}

console.log(swap_case('The Quick Brown Fox'));

// or

var str = 'The Quick Brown Fox';
var UPPER = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
var LOWER = 'abcdefghijklmnopqrstuvwxyz';
var result = [];
  
  for(var x=0; x<str.length; x++)
  {
    if(UPPER.indexOf(str[x]) !== -1)
    {
      result.push(str[x].toLowerCase());
    }
    else if(LOWER.indexOf(str[x]) !== -1)
    {
      result.push(str[x].toUpperCase());
    }
    else 
    {
      result.push(str[x]);
    }
  }
console.log(result.join(''));


//or

var str = 'The Quick Brown Fox';
const UPPER = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
const LOWER = 'abcdefghijklmnopqrstuvwxyz';
const result = [];
  
  for(let x=0; x<str.length; x++)
  {
    if(UPPER.includes(str[x]))
    {
      result.push(str[x].toLowerCase());
    }
    else if(LOWER.includes(str[x]))
    {
      result.push(str[x].toUpperCase());
    }
    else 
    {
      result.push(str[x]);
    }
  }
console.log(result.join(''));