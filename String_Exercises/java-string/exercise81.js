/**
 * Write a Java program to check whether two strings of length 
 * 3 and 4 appear the same number of times in a given string.
 * 
 * The given string is: redcapmanwithbluecar
The appearance of red and blue are same: true
 */

// my sol
function verifyStringAppearances(str, s1, s2) {
    
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

console.log(verifyStringAppearances("redcapmanwithbluecar","red","blue"))