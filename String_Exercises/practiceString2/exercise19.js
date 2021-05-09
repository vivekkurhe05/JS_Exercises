/**
 * Write a JavaScript function to escape a HTML string.
 * Test Data :
 * console.log(escape_HTML('<a href="javascript-string-exercise-17.php" target="_blank">'));
 * Output :
 * "&lt;a href=&quot;javascript-string-exercise-17.php&quot; target=&quot;_blank&quot;&gt;"
 */

function escape_HTML(html_str) {
    'use strict';

    return html_str.replace(/[&<>"]/g, function (tag) {
        var chars_to_replace = {
            '&': '&',
            '<': '&lt;',
            '>': '&gt;',
            '"': '&quot;'
        };

        // console.log(chars_to_replace[tag]);
        // console.log(chars_to_replace);
        // console.log(tag);
        return chars_to_replace[tag] || tag;
    });
}

console.log(escape_HTML('<a href="javascript-string-exercise-17.php" target="_blank">'));