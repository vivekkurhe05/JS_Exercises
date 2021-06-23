/**
 * Write a JavaScript function to get the quarter (1 to 4) of the year.

Test Data :
console.log(quarter_of_the_year(new Date(2015, 1, 21)));
2
console.log(quarter_of_the_year(new Date(2015, 10, 18)));
4
 */

// your solution

function quarter_of_the_year(dt) {
    let quarter=1;
    for(let month=3; month<12; month+=3){
        if(dt.getMonth() >= month){
            quarter++;
        }
    }

    return quarter;
}
console.log(quarter_of_the_year(new Date(2015, 1, 21)));
console.log(quarter_of_the_year(new Date(2015, 10, 18)));