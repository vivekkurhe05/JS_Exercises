/**
 * Check if a String is valid JSON string
 */

// geeks for geeks solution
function isValidJSON(str) {
   if (typeof str !== 'string') return false;

   try{
    JSON.parse(str)
    return true
   }catch(err) {
    return false
   }
    
}
console.log(isValidJSON('{"prop1":"val_1", "prop2":"val_2"}'))
console.log(isValidJSON('{"prop1":val_1, "prop2":"val_2"}'))