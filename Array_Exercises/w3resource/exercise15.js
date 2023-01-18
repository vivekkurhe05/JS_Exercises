/**
 * We have the following arrays
color = ["Blue ", "Green", "Red", "Orange", "Violet", "Indigo", "Yellow "];
o = ["th","st","nd","rd"]
Write a JavaScript program to display the colors in the following way :
"1st choice is Blue ."
"2nd choice is Green."
"3rd choice is Red."
- - - - - - - - - - - - -
 */

let color = ["Blue ", "Green", "Red", "Orange", "Violet", "Indigo", "Yellow "];
var o = ["th", "st", "nd", "rd"];

function text_transform(elem, num) {
  let n = num % 10;
  switch (n) {
    case 1: {
      return n + `${o[1]} choice is ` + elem;
    }
    case 2: {
      return n + `${o[2]} choice is ` + elem;
    }
    case 3: {
      return n + `${o[3]} choice is ` + elem;
    }
  }

  return n + `${o[0]} choice is ` + elem;
}

for (let i = 0; i < color.length; i++) {
  console.log(text_transform(color[i], i + 1));
}

/**
 * w3resource solution
 */

var color2 = ["Blue ", "Green", "Red", "Orange", "Violet", "Indigo", "Yellow "];

function Ordinal(n) {
  var o = ["th", "st", "nd", "rd"],
    x = n % 100;
  return x + (o[(x - 20) % 10] || o[x] || o[0]);
}

for (n = 0; n < color2.length; n++) {
  var ordinal = n + 1;

  var output = Ordinal(ordinal) + " choice is " + color2[n] + ".";

  console.log(output);
}
