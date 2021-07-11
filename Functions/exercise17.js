/**
 * Write a JavaScript function to get the number of occurrences of each letter in specified string.
 */

// your solution

function char_counts(str) {
    let count = 0;
    let unique = "";
    for (let i = 0; i < str.length; i++) {

        if (str[i] === ' ') continue;

        let index = str.indexOf(str[i], 0);

        while (index != -1) {
            count++;
            index = str.indexOf(str[i], index + 1);
        }

        if (unique.indexOf(str[i]) === -1) {
            unique += str[i];
            console.log(str[i] + ": " + count);
        }
        count = 0;
    }

}

char_counts('The quick brown fox jumps over the lazy dog');