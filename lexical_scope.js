// For the below function the enclosing lexical scope is a variable with a value "I am just a local"

var scope = "I am global";
function whatismyscope(){
   var scope = "I am just a local";
   function func() {return scope;}
   return func();
}

console.log(whatismyscope()) // returns "I am just a local"

// or
// For the below function, it will check if it has an enclosing lexical scope if not it will take count as lexical scope
var count = 0;
function counter(){
    function increment() {return count++;}
    return increment();     
}

while (count != Infinity) console.log(counter())