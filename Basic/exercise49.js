/**
 * Write a JavaScript program to replace every character in a given string with the character following it in the alphabet.
 */

// not posted yet, correct the solution first

function replaceWithFollowingCharacter(str) {
    let arr = [];
    for (let i = 0; i < str.length; i++) {
        arr.push(str.charCodeAt(i));
    }
    arr = arr.map(function (elem) {
        return elem + 1;
    });

    return String.fromCharCode(...arr);
}
console.log(replaceWithFollowingCharacter('abcd'));
console.log(replaceWithFollowingCharacter('123'));

//or this is corrected version

function alphabet_char_Shift(str) {

    let arr = str.trim().split("");
    let arr2 = [];
    str = "";
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] == 'z' || arr[i] == 'Z') {
            arr2.push(arr[i].charCodeAt() - 25);
        } else {
            arr2.push(arr[i].charCodeAt() + 1);
        }
    }

    for (let i = 0; i < arr2.length; i++) {
        str += String.fromCharCode(arr2[i]);
    }
    return str;
}

console.log(alphabet_char_Shift("XYZ"));
console.log(alphabet_char_Shift("W3R"));
console.log(alphabet_char_Shift("php"));

// w3resource solution

function LetterChanges(text) {
    //https://goo.gl/R8gn7u
    var s = text.split('');
    for (var i = 0; i < s.length; i++) {
        // Caesar cipher
        switch (s[i]) {
            case ' ':
                break;
            case 'z':
                s[i] = 'a';
                break;
            case 'Z':
                s[i] = 'A';
                break;
            default:
                s[i] = String.fromCharCode(1 + s[i].charCodeAt(0));
        }

        // Upper-case vowels
        switch (s[i]) {
            case 'a': case 'e': case 'i': case 'o': case 'u':
                s[i] = s[i].toUpperCase();
        }
    }
    return s.join('');
}
console.log(LetterChanges("XYZ"));
console.log(LetterChanges("W3R"));
console.log(LetterChanges("php"));