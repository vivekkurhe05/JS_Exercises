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

