/**
 * Write a JavaScript program which accept a number as input and insert dashes (-) between each two even numbers. 
 * For example if you accept 025468 the output should be 0-254-6-8.
 */

// w3resource solution

let str = '025468';
let result = [str[0]];

for(let i=1; i<str.length; i++) {

    if(str[i-1]%2 == 0 && str[i]%2 == 0) {

        result.push('-', str[i]);
    }else{
        result.push(str[i]);
    }

}
console.log(result.join(""));

// or

function insert_dashes(str) {
  let new_arr = [str[0]];
  let arr = str.match(/[0-9]/g);
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] % 2 == 0 && arr[i + 1] % 2 == 0) {
      new_arr.push("-", arr[i + 1]);
    } else {
      new_arr.push(arr[i + 1]);
    }
  }
  return new_arr.join("");
}

console.log(insert_dashes("025468"));