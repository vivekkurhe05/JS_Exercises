/**
 * Check if all the values in the ages array are 18 or over:
 */

var ages = [32, 33, 16, 40];

let isOver18 = ages.every(function (age) {
    return age >= 18;
});

console.log(isOver18);

/**
 * Check if all the answer values in the array are the same:
 */

var survey = [
    { name: "Steve", answer: "Yes" },
    { name: "Jessica", answer: "Yes" },
    { name: "Peter", answer: "Yes" },
    { name: "Elaine", answer: "No" }
];

let isSame = survey.every(function(elem, index, arr) {
    return elem.answer === arr[arr.length-1].answer;
});

console.log(isSame);