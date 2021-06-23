// to convert numbers into array of integers

// function num() {
//     let args = Array.prototype.slice.call(arguments)
//     return args;
// }
// console.log(num(1,2,3,4,5));

// function say(message) {
//     // show nothing if the message is empty
//     if (! message ) {
//         return;
//     }
//     console.log(message);
// }
// say()

function greeting() {
    let message = 'Hi';

    function sayHi() {
        console.log(message);
    }

    return sayHi;
}
let hi = greeting();
hi();