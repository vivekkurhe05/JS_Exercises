// 1. The function can return a single value. If you want to return multiple values from the function, you need to pack these values in an array or an object.

// 2. It's a good practice to use arrow functions for callbacks and closures because the syntax of arrow function is cleaner.

// 3. An arrow function doesn't have it's own this value and the arguments object. Therefore, you should not use it as an event handler, a method of an object literal, a prototype method, or when you have an arrow function that uses the arguments object.

// 4. There are two main differences between an arrow function and a regular function
// - In the arrow function, the this, arguments, super, new.target are lexical. It means that the arrow function uses these variables from the enclosing lexical scope.
// - An arrow function cannot be used as a function constructor. If you use the new keyword to create an object from an arrow function, you will get an error.

// 5. The problem with the constructor function is that when you create multiple instances of the constructor function, the method is duplicated in every instance which is not memory efficient. To resolve this, you can use the prototype so that all instances can share the same method.

// 6. Difference between JSON and JS object
// - JSON all keys must be quoted, Object literals it is not necessary
// - JSON has double quotes while javascript can use single or double quotes
// - JavaScript can include functions which is not available in JSON

// 7. Different datatypes in JSON
// String, Number, Boolean, Object, Array of objects, Null

// 8. The difference between at() and charAt() method is when specifying at(-1), it returns the last character whereas charAt(-1) returns empty string 