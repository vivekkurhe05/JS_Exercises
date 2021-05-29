/**
 * sort an array
 */

 var fruits = ["Banana", "Orange", "Apple", "Mango"];

 console.log(fruits.sort());

 /**
  * Sort numbers in an array in ascending order:
  */

  var points = [40, 100, 1, 5, 25, 10];

  points.sort((a, b) => {
      if(a>b) return 1;
      if(a<b) return -1;
      return 0;
  });

  console.log(points);

  /**
   * Sort numbers in an array in descending order:
   */

   points = [40, 100, 1, 5, 25, 10];

   points.sort((a, b) => {
       if(a>b) return -1;
       if(a<b) return 1;
       return 0;
   });

   console.log(points);

   /**
    * Get the highest value in an array:
    */

   console.log(points[0]);

   /**
    * Get the lowest value in an array:
    */

   console.log(points[points.length-1]);

   /**
    * Sort an array alphabetically, and then reverse the order of the sorted items (descending):
    */

    fruits = ["Banana", "Orange", "Apple", "Mango"];
    fruits.sort();
    fruits.reverse();
    console.log(fruits);