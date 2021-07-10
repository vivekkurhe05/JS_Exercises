/**
 *Write a JavaScript function to get difference to Greenwich time (GMT) in hours. Go to the editor
Test Data :
dt = new Date();
console.log(diff_to_GMT(dt));
"+05.500" 
 */

function diff_to_GMT(dt) {
    return (-dt.getTimezoneOffset() < 0 ? '-' : '+') + (Math.abs(dt.getTimezoneOffset() / 60) < 10 ? '0' : '') + (Math.abs(dt.getTimezoneOffset() / 60)) + '00';
}
dt = new Date();
console.log(diff_to_GMT(dt));