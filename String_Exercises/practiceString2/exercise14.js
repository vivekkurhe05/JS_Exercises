/**
 * Write a JavaScript function to insert a string within a string at a particular position (default is 1).
 * Test Data :
 * console.log(insert('We are doing some exercises.'));
 * console.log(insert('We are doing some exercises.','JavaScript '));
 * console.log(insert('We are doing some exercises.','JavaScript ',18));
 * "We are doing some exercises."
 * "JavaScript We are doing some exercises."
 * "We are doing some JavaScript exercises."
 */

function insert (str, insertStr, pos) {
    if(typeof insertStr == 'undefined' && typeof pos == 'undefined') return str;
    else if(typeof pos == 'undefined') return insertStr + str;
    return str.substr(0,pos) + insertStr + str.slice(str.substr(0,pos).length);
}

console.log(insert('We are doing some exercises.'));
console.log(insert('We are doing some exercises.','JavaScript '));
console.log(insert('We are doing some exercises.','JavaScript ',18));

//or

function insert(str, substr, pos){
    let a = str.substring(0,pos);
    if(typeof(pos) == 'undefined'){
        pos = 0;
    }
    if(typeof(substr) == 'undefined'){
        substr = '';
    }
    return a + substr + str.substring(pos);
}

console.log(insert('We are doing some exercises.'));
console.log(insert('We are doing some exercises.','JavaScript '));
console.log(insert('We are doing some exercises.','JavaScript ',18));