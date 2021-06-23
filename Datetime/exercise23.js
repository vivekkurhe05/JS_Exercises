/**
 * Write a JavaScript function to get English ordinal suffix for the day of the month, 2 characters (st, nd, rd or th.)
Test Data :
dt = new Date(2015, 10, 1);
console.log(english_ordinal_suffix(dt));
"1st"
 */

// your solution

function english_ordinal_suffix(d) {

    if(d.getDate() >= 11 && d.getDate() <= 13) {
        return d.getDate() + "th";
    }

    switch(d.getDate() % 10) {
        case 1: return d.getDate() + "st";
        case 2: return d.getDate() + "nd";
        case 3: return d.getDate() + "rd";
    }

    return d.getDate() + "th";
}
dt = new Date(2015, 10, 14);
console.log(english_ordinal_suffix(dt));