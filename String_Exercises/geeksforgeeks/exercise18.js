/**
 * How to get nth occurrence of a string in JavaScript ?
 */

// my solution
function get_nth_occurance(str, n) {
    let count = 0, i=0;
    let index = str.indexOf('Geeks', 0);

    while(index != -1) {
        count++;
        if(count === n) {
            i = index;
        }
        index = str.indexOf('Geeks', index+1);    
    }

    return i;
}
console.log(get_nth_occurance('Geeks gfg Geeks Geek Geeks gfg Geeks', 5));