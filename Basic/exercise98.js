/**
 * Write a JavaScript program to switch case of the minimum possible number of 
 * letters to make a given string written in the upper case or in the lower case.
 * Fox example "Write" will be write and "PHp" will be "PHP"
 */

// your soultion

function switch_case(str) {
    let lowercasecount = 0, uppercasecount = 0;

    for(let i=0; i<str.length; i++){
        if(str[i] == str[i].toLowerCase()){
            lowercasecount++;
        }else{
            uppercasecount++;
        }
    }

    if(lowercasecount > uppercasecount){
        return str.toLowerCase();
    }else{
        return str.toUpperCase();
    }
}
console.log(switch_case("Write"));
console.log(switch_case("PHp"));