/**
 * Write a JavaScript function to escape a HTML string.
 * Test Data :
 * console.log(escape_HTML('<a href="javascript-string-exercise-17.php" target="_blank">'));
 * Output :
 * "&lt;a href=&quot;javascript-string-exercise-17.php&quot; target=&quot;_blank&quot;&gt;"
 */

function escape_HTML (str) {

    return str.replace(/[<">]/g, function (tag) {
        chars_to_replace = {
            '<': '&lt;',
            '"': '&quot;',
            '>': '&gt;'
        }

        return chars_to_replace[tag] || tag;
    })
}

console.log(escape_HTML('<a href="javascript-string-exercise-17.php" target="_blank">'));