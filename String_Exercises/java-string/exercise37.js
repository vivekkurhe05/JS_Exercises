/**
 * Write a Java program to find the length of the longest 
 * substring of a given string without repeating characters.
 * 
 * Input String : pickoutthelongestsubstring
The longest substring : [u, b, s, t, r, i, n, g]
The longest Substring Length : 8
 */

// chatgpt sol
function longestUniqueSubstring(str) {
    let seen = new Set();
    let j = 0, maxLength = 0, result = "";

    for (let i = 0; i < str.length; i++) {
        while (seen.has(str[i])) {
            seen.delete(str[j]);
            console.log(`${str[j]} is deleted`)
            j++;
        }
        seen.add(str[i]);

        if (i - j + 1 > maxLength) {
            maxLength = i - j + 1;
            result = str.substring(j, i + 1);
        }
    }
    
    return result;
}

// Test
console.log(longestUniqueSubstring("pickoutthelongestsubstring"));
