/**
 * w3schools
 * Check if all the answer values in the array are the same:
 */

 var survey = [
    { name: "Steve", answer: "Yes"},
    { name: "Jessica", answer: "Yes"},
    { name: "Peter", answer: "Yes"},
    { name: "Elaine", answer: "No"}
  ];



  let result = survey.every ( function (e, index, arr) {
      return e.answer == 'Yes';
  });

  console.log(result);