/**
 * Searching pattern in array and return words that contain the search pattern
 */

 let fruits = ['apple', 'banana', 'grapes', 'mango', 'orange']

 function filterItems(arr, query) {
    return arr.filter(function(el) {
        return el.toLowerCase().indexOf(query.toLowerCase()) !== -1
    })
  }
  
  console.log(filterItems(fruits, 'ap'));
  console.log(filterItems(fruits, 'an'));


  //or ES2015 implementation

  const filterItems = (arr, query) => {
    return arr.filter(el => el.toLowerCase().indexOf(query.toLowerCase()) !== -1)
  }
  
  console.log(filterItems(fruits, 'ap'));
  console.log(filterItems(fruits, 'an'));