/***
 * Write a JavaScript function that generates all combinations of a string. Go to the editor
Example string : 'dog'
Expected Output : d,do,dog,o,og,g
 */

// your solution

// function all_combinations (str) {
//     let arr = [], chr=""
//     for(let i=0; i<str.length; i++) {
//         for(let j=i; j<str.length; j++) {
//             chr+=str[j]
//             arr.push(chr);
//         }
//         chr = "";
//     }
//     return arr;
// }

// console.log(all_combinations('vivek'));


function substrings(str1)
{
var array1 = [];
  for (var x = 0, y=1; x < str1.length; x++,y++) 
  {
   array1[x]=str1.substring(x, y);
    }
var combi = [];
var temp= "";
var slent = Math.pow(2, array1.length);

for (var i = 0; i < slent ; i++)
{
    temp= "";
    for (var j=0;j<array1.length;j++) {
        if ((i & Math.pow(2,j))){ 
            temp += array1[j];
        }
    }
    if (temp !== "")
    {
        combi.push(temp);
    }
}
  console.log(combi.join("\n"));
}

substrings("vivek");