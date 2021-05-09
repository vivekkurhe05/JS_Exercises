/**
 * 
 * Write a JavaScript function to capitalize the first letter of each word in a string.
 * Test Data :
 * console.log(capitalize_Words('js string exercises'));
 * "Js String Exercises"
 */

function capitalize_Words(str){
    let arr = str.split(" ");
    return arr.map(function(txt){
        return txt.charAt(0).toLocaleUpperCase() + txt.substring(1);
    }).join(" ");
}

console.log(capitalize_Words('js string exercises'));

//or


function capitalize_Words(str){
    return str.replace(/\w\S*/g, function(txt){
        let str1 = txt.charAt(0).toLocaleUpperCase();
        return str1 + txt.substring(1);
    });
}

console.log(capitalize_Words('js string exercises'));