/**
 * Write a JavaScript function which accepts an argument and returns the type. Go to the editor
Note : There are six possible values that typeof returns: object, boolean, function, number, string, and undefined.
 */

// your solution

function detect_data_type(value) {

    let datatype = "";
    if (typeof (value) === 'number') datatype = 'number';
    else if (typeof (value) === 'string') datatype = 'string';
    else if (typeof (value) === 'boolean') datatype = 'boolean';
    else if (typeof (value) === 'object') datatype = 'object';
    else if (typeof (value) === 'function') datatype = 'function'
    else datatype = 'undefined';

    return datatype;
}

console.log(detect_data_type(12));
console.log(detect_data_type('w3resource'));
console.log(detect_data_type(false));