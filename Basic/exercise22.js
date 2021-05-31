/**
Write a JavaScript program to remove a character at the specified position of a given string and return the new string.
 */

function removeCharacter(str, pos) {
    return str.slice(0, pos) + str.slice(pos + 1);
}
console.log(removeCharacter("welcome", 4));