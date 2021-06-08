/**
 * Write a JavaScript program to check whether a given string contains equal number of p's and t's.
 */

function countPandT(str) {
    let countP = 0;
    let countT = 0;

    for(let i=0; i<str.length; i++) {
        if(str[i] == 'p'){
            countP++;
        }
        if(str[i] == 't'){
            countT++;
        }
    }
    return countP == countT;
}
console.log(countPandT('potatoes'));
console.log(countPandT('patatpss'));

//or

function countPandT(str) {
    let countP = 0, countT = 0;
    let indexP = str.indexOf('p', 0);
    let indexT = str.indexOf('t', 0);
    while (indexP != -1){
        countP++;
        indexP = str.indexOf('p', indexP+1);
    }
    while (indexT != -1){
        countT++;
        indexT = str.indexOf('t', indexT+1);
    }
    return countP == countT;
}
console.log(countPandT('potatoes'));
console.log(countPandT('patatpss'));