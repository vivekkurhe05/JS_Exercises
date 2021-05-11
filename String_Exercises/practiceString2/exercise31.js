/**
 * Write a JavaScript function to escapes special characters (&, <, >, ', ") for use in HTML.
 * Test Data :
 * console.log(escape_html('PHP & MySQL'));
 * "PHP &amp; MySQL"
 * console.log(escape_html('3 > 2'));
 * "3 &gt; 2"
 */

function escape_html (str) {
    return str.replace(/[&>]/g, function(chr){
        var char_to_replace = {
            '&': '&amp;',
            '>': '&gt;'
        }

        return char_to_replace[chr] || chr;
    })
}

console.log(escape_html('PHP & MySQL'));
console.log(escape_html('3 > 2'));