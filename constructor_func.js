function Person(firstname, lastname) {

    if(!new.target){
        return new Person(firstname, lastname);
    }

    this.firstname = firstname;
    this.lastname = lastname;
}
Person.prototype.getFullName = function () {
    return this.firstname+" "+this.lastname;
}


let p = Person('John','Doe');
console.log(p.getFullName());