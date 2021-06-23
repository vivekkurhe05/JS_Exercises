/**
 * Write a JavaScript function to get lowercase Ante meridiem and Post meridiem.
 */

// your solution

function lower_am_pm(d) {
    
    if(d.getHours() < 12) {
        return "am";
    }else{
        return "pm"
    }
}

 dt = new Date(); 
 console.log(lower_am_pm(dt)); 
 
 dt = new Date(1989, 10, 1, 12); 
 console.log(lower_am_pm(dt));