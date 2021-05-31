/**
 * Write a JavaScript program to get the current date.
Expected Output :
mm-dd-yyyy, mm/dd/yyyy or dd-mm-yyyy, dd/mm/yyyy
 */

function addZero(i) {

    if (i < 10) {
        i = "0" + i;
    }

    return i;
}
var d = new Date();
var date = addZero(d.getDate());
var month = addZero(d.getMonth() + 1);
var year = d.getFullYear();
console.log(month + "-" + date + "-" + year);
console.log(month + "/" + date + "/" + year);
console.log(date + "-" + month + "-" + year);
console.log(date + "/" + month + "/" + year);