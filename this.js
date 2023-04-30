// Method 1 normal function

let person1 = {
    firstname: 'Vivek',
    lastname: 'Kurhe',
    getFullName: function () {
        return this.firstname+" "+this.lastname;
    }
}

console.log(person1.getFullName());

// Method 2 arrow function
// This is an example of arrow function where this keyword does not work as expected.
// The reason is when you use the arrow function inside the object, it inherits the this value
// from the global scope

let person2 = {
    firstname: 'Vivek',
    lastname: 'Kurhe',

    getFullName: () => {
        return this.firstname+" "+this.lastname;
    }
}

console.log(person2.getFullName());

// Method 3

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

// 1. Object methods, See method 2 for example


// 2. Prototype methods - constructor function
function Person4(firsname, lastname) {
    this.firsname = firsname
    this.lastname = lastname
}

// use normal function instead of arrow function
Person4.prototype.getFullName = () => {
    return this.firsname + " " + this.lastname
}

const person4 = new Person4("Vivek", "Kurhe")
console.log(person4.getFullName());


// 3. Functions that use the arguments object
let getOddNumbers = () => {
    const args = Array.prototype.slice.call(arguments);
    return args.filter(num => num % 2);
}

let oddNumbers = getOddNumbers(10, 1, 3, 4, 8, 9);
console.log(oddNumbers);