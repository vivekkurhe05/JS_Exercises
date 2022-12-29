/**
 * How to get a number of vowels in a string in JavaScript?
 */

// my solution
function count_vowels(str) {
    let count = 0;
    
    for(let i=0; i<str.length; i++) {
        if(str[i] == 'a' || str[i] =='e' || str[i] == 'i' || str[i] == 'o' || str[i] == 'u' || str[i] == 'A' || str[i] == 'E' || str[i] == 'I' || str[i] == 'O' || str[i] == 'U') {
            count++;
        }
    }
    return count;
}

console.log(count_vowels("geeksforgeeks"));
console.log(count_vowels('Hello Geeks'));

// or geeks for geeks solution

function count_vowels2(str) {
    let count = 0;
    let vowels = 'aeiouAEIOU';


    for(let i=0; i<str.length; i++) {
        if(vowels.indexOf(str[i]) !== -1){
            count++;
        }
    }
    return count;
}

console.log(count_vowels2("geeksforgeeks"));
console.log(count_vowels2('Hello Geeks'));
