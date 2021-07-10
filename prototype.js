function Person(name){
    this.name = name;
}

Person.prototype.greet = function () {
    return "hello "+this.name;
}

let p1 = new Person('Vivek');
console.log(p1.greet());