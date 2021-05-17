/**
 * return words of array whose length is greater than 6 and sort as per their length
 */

 const words = ['spray', 'limit', 'elite', 'exuberant', 'destruction', 'present'];

 let newArr = words.filter(function(elem){
     return elem.length > 6;
 }).sort((a, b) => {
     return a.length - b.length;
 });

 console.log(newArr);