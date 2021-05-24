/**
 * Return an array with the square root of all the values in the original array:
 */

 var numbers = [4, 9, 16, 25];

 console.log(numbers.map(function(elem){
     return Math.sqrt(elem);
 }));

 /**
  * Multiply all the values in array with 10:
  */

  numbers = [65, 44, 12, 4];

  console.log(numbers.map(elem => elem*10));

  /**
   * Get the full name for each person in the array:
   */

   var persons = [
    {firstname : "Malcom", lastname: "Reynolds"},
    {firstname : "Kaylee", lastname: "Frye"},
    {firstname : "Jayne", lastname: "Cobb"}
  ];

  console.log(persons.map(function(elem){
    return elem.firstname+ " "+ elem.lastname;
  }))