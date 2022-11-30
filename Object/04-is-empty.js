/**
 * Write a method that makes a shallow check is object empty
 * Expected Result: ({}) => true, ({ a: undefined }) => true, ({ a: 1 }) => false
 */

// my solution

function isEmpty(obj) {
  let size = 0;
  for (let key in obj) {
    if (
      obj.hasOwnProperty(key) &&
      obj[key] != undefined &&
      obj[key] != "" &&
      obj[key] != null &&
      !Object.is(obj[key], NaN)
    ) {
      size++;
    }
  }

  return size === 0 ? true : false;
}

console.log(isEmpty({})); // true
console.log(isEmpty({ a: undefined })); // true
console.log(isEmpty({ a: "" })); // true
console.log(isEmpty({ a: null })); // true
console.log(isEmpty({ a: NaN })); // true
console.log(isEmpty({ a: 1 })); // false

// or

function isEmpty(obj) {
  for (let key in obj) {
    if (obj.hasOwnProperty(key)) {
      return false;
    }
  }
  return true;
}

console.log(isEmpty({})); // true
console.log(isEmpty({ a: undefined })); // true
console.log(isEmpty({ a: 1 })); // false

// or

function isEmpty(obj) {
  return JSON.stringify(obj) == "{}";
}

console.log(isEmpty({})); // true
console.log(isEmpty({ a: undefined })); // true
console.log(isEmpty({ a: 1 })); // false
