/**
 * Write a JavaScript exercise to get the extension of a filename.
 */

function getFileExtension(filename) {
    return filename.substring(filename.lastIndexOf('.') + 1);
}

console.log(getFileExtension('financial_model.xlsx'));