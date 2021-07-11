/**
 * Write a JavaScript function that accepts two arguments, a string and a letter and the function will count the number of occurrences of the specified letter within the string. Go to the editor
Sample arguments : 'w3resource.com', 'o'
Expected output : 2
 */

// your solution

function count_occurrences(word, letter) {
    let count = 0;

    let index = word.indexOf(letter, 0);

    while (index != -1) {
        count++;
        index = word.indexOf(letter, index + 1);
    }
    return count;
}

console.log(count_occurrences('w3resource.com', 'o'));