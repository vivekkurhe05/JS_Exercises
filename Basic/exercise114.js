/**
 * Write a JavaScript program to check whether a given string represents a correct sentence or not. 
 * A string is considered correct sentence if it starts with the capital letter and ends with a full stop (.).
 */

// your solution

function is_correct_Sentence(str) {

    var is_upper_case = function (str) {
        let first_letter = str.charAt(0);
        if ('A' <= first_letter && first_letter <= 'Z') {
            return true;
        }
        return false;
    }

    var endsWith = function (str) {
        let index = str.lastIndexOf('.');
        if (index != -1) {
            return true;
        }
        return false;
    }

    return is_upper_case(str) && endsWith(str);
}
console.log(is_correct_Sentence("This tool will help you write better English and efficiently corrects texts."));
console.log(is_correct_Sentence("This tool will help you write better English and efficiently corrects texts"));
console.log(is_correct_Sentence("this tool will help you write better English and efficiently corrects texts."));

/**
 * w3resource solution
 */

function is_correct_Sentence(input_str) {
    var first_char = input_str[0];
    var last_char = input_str[input_str.length - 1];
    return /[A-Z]/.test(first_char) && last_char == "."
}
console.log(is_correct_Sentence("This tool will help you write better English and efficiently corrects texts."));
console.log(is_correct_Sentence("This tool will help you write better English and efficiently corrects texts"));
console.log(is_correct_Sentence("this tool will help you write better English and efficiently corrects texts."));