/**
 * sorting elements as per their length using Schwartzian Transform.
 */

let rivers = ['Nile', 'Amazon', 'Congo', 'Mississippi', 'Rio-Grande'];

// temporary array holds objects with position
// and length of element
var lengths = rivers.map(function (e, i) {
    return { index: i, value: e.length };
});

console.log(lengths);

// sorting the lengths array containing the lengths of
// river names
lengths.sort(function (a, b) {
    return +(a.value > b.value) || +(a.value === b.value) - 1;

    //or

    // if (a.value > b.value) return 1;
    // if (a.value < b.value) return -1;
    // return 0
});

console.log(lengths);

// copy element back to the array
var sortedRivers = lengths.map(function (e) {
    return rivers[e.index];
});

console.log(sortedRivers);