/**
 * 
 * Write a JavaScript function to hide email addresses to protect from unauthorized user.
 * Test Data :
 * console.log(protect_email("robin_singh@example.com"));
 * "robin...@example.com"
 */


function protect_email(str) {
    let arr = str.trim().split('_');
    if(arr.length > 1){
        return arr[0] + "...@example.com";
    }
    return arr[0]+"@example.com";
}

console.log(protect_email('robin_singh@example.com'));