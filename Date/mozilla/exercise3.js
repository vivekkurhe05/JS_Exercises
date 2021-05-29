var Xmas95 = new Date("December 25, 2020");
var d = new Intl.DateTimeFormat('en-US', { month: 'long'}).format(Xmas95)
console.log(d);