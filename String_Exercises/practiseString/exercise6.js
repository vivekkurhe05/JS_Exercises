/***
 * Write a JavaScript function to hide email addresses to protect from unauthorized user.
 * Test Data :
 * console.log(protect_email("robin_singh@example.com"));
 * "robin...@example.com"
 */

function protect_email(str){
    let arr = str.split('@');
    let arr2 = arr[0].split('_');
    return arr2[0]+'...'+'@'+arr[1];
}

console.log(protect_email("aradhana_des@gmail.com"));