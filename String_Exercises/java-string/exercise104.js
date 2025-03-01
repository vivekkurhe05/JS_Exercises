/**
 * Write a Java program to sort in ascending and descending 
 * order by the length of the given array of strings.
 * Original unsorted colors: [Green, White, Black, Pink, Orange, Blue, Champagne, Indigo, Ivory]

Sorted color (descending order): [Champagne, Orange, Indigo, Green, White, Black, Ivory, Pink, Blue]

Sorted color (ascending order): [Pink, Blue, Green, White, Black, Ivory, Orange, Indigo, Champagne]
 */

function sortByLength(arr) {
    return {
        dsc: arr.sort((a,b) => b.length-a.length),
        asc: arr.sort((a,b) => a.length-b.length)
    }
}

console.log(sortByLength(["Green", "White", "Black", "Pink", "Orange", "Blue", "Champagne", "Indigo", "Ivory"]))