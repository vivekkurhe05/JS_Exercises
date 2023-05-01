// Method 1 normal function, the this keyword works

let person1 = {
    firstname: 'Vivek',
    lastname: 'Kurhe',
    getFullName: function () {
        return this.firstname+" "+this.lastname;
    }
}

console.log(person1.getFullName());


// Method 2, the this keyword works

let person3 = {
    firstname: "Dinesh",
    lastname: "seervi"
}

function getFullName(){
    return this.firstname+" "+this.lastname;
}
person3.getFullName = getFullName;
console.log(person3.getFullName());

// simple function invocation

function show () {
    console.log(this === globalThis);
}

show();



// When you should not use arrow functions

// This is an example of arrow function where this keyword does not work as expected.
// The reason is when you use the arrow function inside the object, it inherits the this value
// from the global scope

// 1. Object methods
let person2 = {
    firstname: 'Vivek',
    lastname: 'Kurhe',

    getFullName: () => {
        return this.firstname+" "+this.lastname;
    }
}

console.log(person2.getFullName());


// 2. Prototype methods - constructor function
function Person4(firstname, lastname) {
    this.firsname = firstname
    this.lastname = lastname
}

// use normal function instead of arrow function
Person4.prototype.getFullName = () => {
    return this.firstname + " " + this.lastname
}

const person4 = new Person4("Vivek", "Kurhe")
console.log(person4.getFullName()); // returns undefined undefined


// 3. Functions that use the arguments object
let getOddNumbers = () => {
    const args = Array.prototype.slice.call(arguments);
    return args.filter(num => num % 2);
}

let oddNumbers = getOddNumbers(10, 1, 3, 4, 8, 9);
console.log(oddNumbers); // returns []


// 4. Arrow function cannot be used as a function constructor. If you use the new keyword to create
// an object from the arrow function, you will get an error.

let Person5 = (fname, lname) => {
    this.fname = fname
    this.lname = lname
}

let p5 = new Person5('Vivek', 'Kurhe')
console.log(p5.fname)
