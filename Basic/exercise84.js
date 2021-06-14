
/**
 * Write a JavaScript to replace each character of a given string by the next one in the English alphabet.
Note: 'a' will be replace by 'b' or 'z' would be replaced by 'a'.
*/

// your solution

function alphabet_char_Shift(str) {

    let arr = str.trim().split("");
    let arr2 = [];
    str = "";
    for(let i=0; i<arr.length; i++) {
        if(arr[i] == 'z') {
            arr2.push(arr[i].charCodeAt() - 25);
        }else{
            arr2.push(arr[i].charCodeAt() + 1);
        }
    }

    for(let i=0; i<arr2.length; i++) {
        str += String.fromCharCode(arr2[i]);
    }
    return str;
}

console.log(alphabet_char_Shift("abcdxyz"));

/**
 * w3resource solution
*/

function alphabet_char_Shift(str) {
    var all_chars = str.split("");
    for (var i = 0; i < all_chars.length; i++) {
        var n = all_chars[i].charCodeAt() - 'a'.charCodeAt();
        n = (n + 1) % 26;
        all_chars[i] = String.fromCharCode(n + 'a'.charCodeAt());
    }
    return all_chars.join("");
}

console.log(alphabet_char_Shift("abcdxyz"));