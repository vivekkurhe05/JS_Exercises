/**
 * Write a JavaScript function to generate a random integer.
Test Data :
console.log(rand(20,1));
console.log(rand(1,10));
console.log(rand(6));
console.log(rand());
15
5
1
0
 */

function rand() {
    let num=0;
    while(num != 10){
        num = Math.round((Math.random()*10));
        console.log(num);
    }
}
rand();