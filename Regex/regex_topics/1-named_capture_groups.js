// Grouping and capture groups - latest update ES
// Named capture groups - name each capture group so you can reference  them later in outputs
// Syntax: (?<name>contents)+
// phone number format - Country code, area code, number part1, number part2
// +1 (425) 555-2551

let str = "+1 (425) 555-2551";
let rex = /(?<int>\+[0-9]\s)?(?<area>\([0-9]{3}\))\s(?<num1>[0-9]{3})-(?<num2>[0-9]{4})/;
console.log(rex.test(str));
let match = str.match(rex).groups;
console.log(match);