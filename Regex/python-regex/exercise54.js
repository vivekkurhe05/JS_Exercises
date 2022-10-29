/**
 * Write a Python program to concatenate the consecutive numbers in a given string. Go to the editor
Original string:
Enter at 1 20 Kearny Street. The security desk can direct you to floor 1 6. Please have your identification ready.
After concatenating the consecutive numbers in the said string:
Enter at 120 Kearny Street. The security desk can direct you to floor 16. Please have your identification ready.
 */

// w3resource solution
function remove_space(str) {
    let re = /(?<=\d)\s(?=\d)/g;
    return str.replace(re, "");
}

console.log(remove_space('Enter at 1 20 Kearny Street. The security desk can direct you to floor 1 6. Please have your identification ready.'));