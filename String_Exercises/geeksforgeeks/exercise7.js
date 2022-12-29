/**
 * How to find unique characters of a string in JavaScript ?
 */

// my solution
function unique_chars(str) {
    let arr =[];

    for(let i=0; i<str.length; i++) {
        if(!arr.includes(str.charAt(i))){
            arr.push(str.charAt(i));
        }
    }

    return arr.join("").split(" ").map(el => el.replace(el[0], (chr) => chr.toUpperCase())).join(" ");
}

console.log(unique_chars('Geeksforgeeks'));
console.log(unique_chars('Geeksforgeeks is a great site for computer science'));