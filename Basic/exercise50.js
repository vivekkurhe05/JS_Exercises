/**
 * Write a JavaScript program to capitalize the first letter of each word of a given string.
 */

function capitalizeFirstLetter(str){
    return str.replace(/[a-z]+/gi, function(el){
        return el[0].toUpperCase() + el.substring(1);
    })
}
console.log(capitalizeFirstLetter('the quick brown fox'));