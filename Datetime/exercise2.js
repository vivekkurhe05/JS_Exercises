/**
 * Write a JavaScript function to get the current date. Go to the editor

Note : Pass a separator as an argument.
Test Data :
console.log(curday('/'));
console.log(curday('-'));
Output :
"11/13/2014"
"11-13-2014"
 */

// your solution

function curday(separator) {

    let addZero = function(input){
        if(input < 10){
            input = "0" + input;
        }
        return input;
    }

    var d = new Date();
    var date = addZero(d.getDate());
    var month = addZero(d.getMonth()+1);
    var year = addZero(d.getFullYear());

    return month+separator+date+separator+year;
}
console.log(curday('/'));
console.log(curday('-'));