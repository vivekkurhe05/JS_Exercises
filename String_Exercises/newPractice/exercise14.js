/**
 * Write a JavaScript function to insert a string within a string at a particular position (default is 1).Go to the editor
Test Data :
console.log(insert('We are doing some exercises.'));
console.log(insert('We are doing some exercises.','JavaScript '));
console.log(insert('We are doing some exercises.','JavaScript ',18));
"We are doing some exercises."
"JavaScript We are doing some exercises."
"We are doing some JavaScript exercises."
 */

function insert(str, substr, pos) {

    if(typeof pos === 'undefined') pos = 0;
    if( typeof substr === 'undefined') return str;

    let str1 = str.substring(0, pos);
    return str1 + substr + str.substr(pos); // str1 + substr + str.substr(str1.length);
}

console.log(insert('We are doing some exercises.'));
console.log(insert('We are doing some exercises.','JavaScript '));
console.log(insert('We are doing some exercises.','JavaScript ',18));