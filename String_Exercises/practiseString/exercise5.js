/**
 * 
 * Write a JavaScript function to convert a string in abbreviated form.
 * Test Data :
 * console.log(abbrev_name("Robin Singh"));
 * "Robin S."
 */

function abbrev_name(str){
    let arr = str.split(' ');
    if(arr.length > 1){
        return arr[0]+' '+arr[1].charAt(0)+'.';
    }
    return arr[0];
}

console.log(abbrev_name("Vivek Kurhe"));