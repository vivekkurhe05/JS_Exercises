/**
 * Write a JavaScript program which accept a string as input and swap the case of each character. 
 * For example if you input 'The Quick Brown Fox' the output should be 'tHE qUICK bROWN fOX'.
 */

// my solution

function swap_case(str) {
    let arr = [];
    for(let i=0; i<str.length; i++) {
        arr[i] = str[i] == str[i].toUpperCase() ? str[i].toLowerCase() : str[i].toUpperCase();
    }
    return arr.join("");
}

console.log(swap_case('The Quick Brown Fox'));

/**
 * or
 */

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