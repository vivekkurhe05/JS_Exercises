/**
 * Write a JavaScript function to extract unique characters from a string. Go to the editor
Example string : "thequickbrownfoxjumpsoverthelazydog"
Expected Output : "thequickbrownfxjmpsvlazydg"
 */

// your solution

function unique_characters(str) {
    let unique = "";
    for (let i = 0; i < str.length; i++) {
        if (unique.indexOf(str[i]) === -1) {
            unique += str[i];
        }
    }
    return unique;
}

console.log(unique_characters('thequickbrownfoxjumpsoverthelazydog'));