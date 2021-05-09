/**
 * Write a JavaScript function to capitalize the first letter of each word in a string.
 * Test Data :
 * console.log(capitalize_Words('js string exercises'));
 * "Js String Exercises"
 */

// function capitalize_Words(str){
//     let arr = str.split(' ');
//     let arr2 = arr.map(function(val){
//         return val;
//     });

//     return arr2.map(function(val){
//         let b = val.split('');
//         return b[0].charAt(0).toLocaleUpperCase() + val.substring(1);
//     }).join(' ');
// }

// console.log(capitalize_Words('js string exercises'));


//or

function capitalize_Words(str){
    let arr = str.split(' ');
    return arr.map(function(txt){
        return txt.charAt(0).toLocaleUpperCase() + txt.substring(1);
    }).join(' ');
}

console.log(capitalize_Words('js string exercises'));