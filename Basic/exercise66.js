/**
 * Write a JavaScript program to display the city name 
 * if the string begins with "Los" or "New" otherwise return blank.
 */

function displayCityname(str) {
    if(str.startsWith('Los') || str.startsWith('New')){
        return str;
    }
    return "";
}
console.log(displayCityname('Los Angeles'));
console.log(displayCityname('New York'));
console.log(displayCityname('Amravati'));