/**
 * Write a JavaScript function to get uppercase Ante meridiem and Post meridiem.
 */

function upper_am_pm(d) {
    if(d.getHours() < 12){
        return "AM";
    }else{
        return "PM";
    }
}
 dt = new Date(); 
 console.log(upper_am_pm(dt)); 
 
 dt = new Date(1989, 10, 1); 
 console.log(upper_am_pm(dt));