// 1. The function can return a single value. If you want to return multiple values from the function, you need to pack these values in an array or an object.

// 2. It's a good practice to use arrow functions for callbacks and closures because the syntax of arrow function is cleaner.

// 3. An arrow function doesn't have it's own this value and the arguments object. Therefore, you should not use it as an event handler, a method of an object literal, a prototype method, or when you have an arrow function that uses the arguments object.

// 4. There are two main differences between an arrow function and a regular function
// - In the arrow function, the this, arguments, super, new.target are lexical. It means that the arrow function uses these variables from the enclosing lexical scope.
// - An arrow function cannot be used as a function constructor. If you use the new keyword to create an object from an arrow function, you will get an error.
