var a=20, b=10;
// {
//     let tmp=a;
//     a=b;
//     b=tmp;
// }
// console.log(tmp);

/**
 * or
 */

{
    var demo=a;
    a=b;
    b=demo;
}
console.log(demo);

let obj = null;
console.log(typeof obj);

console.log(typeof NaN)