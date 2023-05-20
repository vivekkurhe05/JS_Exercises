/**
 * Write a Python program to remove characters that have odd index values in a given string.
Sample String : abcdef
Expected Result : ace
Sample String : python
Expected Result : pto
 */

// my solution
function odd_values_string(str) {
    new_str=""
    for(let i=0;i<str.length;i++) {
        if(i%2!=0) {
            continue
        }else{
            new_str+=str[i]
        }
    }
    return new_str
}
console.log(odd_values_string("abcdef"))
console.log(odd_values_string("python"))