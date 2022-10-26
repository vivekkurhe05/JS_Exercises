// Mobile number validation
// +1 (555) 555-5555
// (555) 555-5555
// 555-555-5555
// 555.555.5555
// 555 555 5555

let str = "+1 (555) 555 5555";
let rex = /^(\+[0-9]+[\. -]?)?(\(?[0-9]{3}\)?)([\. -])?([0-9]{3})\3([0-9]{4})$/;
console.log(rex.test(str));