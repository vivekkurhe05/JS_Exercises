/**
 * Write a JavaScript function which returns the n rows by n columns identity matrix.
 */

// your solution

function identity_matrix(rows, columns) {
    let chr = "";
    for (let i = 0; i < rows; i++) {
        for (let j = 0; j < columns; j++) {

            if (i === j) {
                chr += 1;
            } else {
                chr += 0;
            }

        }
        console.log(chr);
        chr = ""
    }
}
identity_matrix(4, 4);