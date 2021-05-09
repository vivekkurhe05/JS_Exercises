/**
 * 
 * Write a JavaScript function to remove the first occurrence of a given 'search string' from a string.
 * Test Data :
 * console.log(remove_first_occurrence("The quick brown fox jumps over the lazy dog", 'the'));
 * Output :
 * "The quick brown fox jumps over  lazy dog"
 */

function remove_first_occurrence(str, substring){
    let index = str.indexOf(substring, 0);
    let str1 = str.slice(0, index);
    return str1 + str.slice(index+substring.length);

}

console.log(remove_first_occurrence("The quick brown fox jumps over the lazy dog", 'the'));

//or

function remove_first_occurrence(str, substring){
    return str.replace(/the/, "");
}

console.log(remove_first_occurrence("The quick brown fox jumps over the lazy dog", 'the'));

//or

function remove_first_occurrence(str, searchstr)       {
	var index = str.indexOf(searchstr);
	if (index === -1) {
		return str;
	}
    console.log(index + searchstr.length);
	return str.slice(0, index) + str.slice(index + searchstr.length);
}

console.log(remove_first_occurrence("The quick brown fox jumps over the lazy dog", 'the'));