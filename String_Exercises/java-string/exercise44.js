/**
 * Write a Java program to reverse a string using recursion.
 * 
 * The given string is: The quick brown fox jumps
The string in reverse order is:
spmuj xof nworb kciuq ehT
 */

// chatgpt sol
function reverse(str) {
    if(str.length <= 1){
        return str
    }

    return reverse(str.slice(1)) + str[0]
}

console.log(reverse("The quick brown fox jumps"))