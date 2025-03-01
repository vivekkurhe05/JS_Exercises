/**
 * Write a Java program to check the number of times 
 * the two substrings appearing anywhere in a string.
 * 
 * The given string is: Thisisthethesis
Are the appearance of 'the' and 'is' equal? false
 */

// same as exercise81
function checkOccurances(str, s1, s2) {
    let frequency = (s) => {
        let count=0
        let index = str.indexOf(s)
        while(index!=-1) {
            count++
            index=str.indexOf(s, index+1)
        }

        return count;
    }

    return frequency(s1) === frequency(s2)
}

console.log(checkOccurances("Thisisthethesis","the", "is"))