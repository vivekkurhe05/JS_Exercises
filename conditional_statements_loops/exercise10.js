/**
 * Write a JavaScript program to construct the following pattern, using a nested for loop. 
*  
* *  
* * *  
* * * *  
* * * * *  
 */

// your solution

let chr="";
for(let i=1; i<6; i++) {
    for(let j=1; j<=i; j++) {
        chr += "*";
    }
    console.log(chr);
    chr = ""
}