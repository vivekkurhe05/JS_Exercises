/**
 * Write a JavaScript program to find the most frequent item of an array. Go to the editor
Sample array : var arr1=[3, 'a', 'a', 'a', 2, 3, 'a', 3, 'a', 2, 4, 9, 3];
Sample Output : a ( 5 times )
 */

var arr1 = [3, 'a', 'a', 'a', 2, 3, 'a', 3, 'a', 2, 4, 9, 3];

function most_frequent_elem (arr) {

    let count =0;

    let index = arr.indexOf('a', 0);

        while (index != -1) {
            count++;
            index = arr.indexOf('a', index+1);
        }
    
    return 'a ( '+ count + ' times )'
}

console.log(most_frequent_elem(arr1));