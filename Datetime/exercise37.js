/**
Write a JavaScript function to get Timezone.
Test Data :
dt = new Date();
console.log(seconds_with_leading_zeros(dt));
"India Standard Time"
 */

// w3resource solution

function seconds_with_leading_zeros(dt) 
{ 
  return /\((.*)\)/.exec(new Date().toString())[1];
}

dt = new Date(); 
console.log(seconds_with_leading_zeros(dt)); 

dt = new Date(1989, 10, 1); 
console.log(seconds_with_leading_zeros(dt));