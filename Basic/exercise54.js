/**
 * Write a JavaScript program to count the number of vowels in a given string.
 */

function count_vowels(str){
    let count = 0;
    for(let i=0; i< str.length; i++) {
        if(str[i] == 'a' || str[i] == 'e' || str[i] == 'i' || str[i] == 'o' || str[i] == 'u'){
            count++;
        }
    }
    return count;
}
console.log(count_vowels('education'));
console.log(count_vowels("Python"));
console.log(count_vowels("w3resource.com"));

//or

function count_vowels(str){
    let count = 0;
    let i = 0;
    while(str[i] != undefined){
        if(str[i] == 'a' || str[i] == 'e' || str[i] == 'i' || str[i] == 'o' || str[i] == 'u'){
            count++;
        }
        i++;
    }
    return count;
}
console.log(count_vowels('education'));
console.log(count_vowels("Python"));
console.log(count_vowels("w3resource.com"));

//or

function vowel_Count(str)
{ 

  return str.replace(/[^aeiou]/g, "").length; 
}
console.log(count_vowels("Python"));
console.log(count_vowels("w3resource.com"));