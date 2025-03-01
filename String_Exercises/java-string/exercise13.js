/**
 * Write a Java program to check whether two String objects contain the same data.
"Stephen Edwin King" equals "Walter Winchell"? false                                                          
"Stephen Edwin King" equals "Mike Royko"? false
 */

function matchString(str1, str2) {
    if(str1 === str2) return true
    else return false
}

console.log(matchString("Stephen Edwin King","Walter Winchell"))
console.log(matchString("Stephen Edwin King","Mike Royko"))