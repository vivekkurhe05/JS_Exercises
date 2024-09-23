const letters = new Set(["a","b","c"])
console.log(letters)

letters.add("d")
letters.add("e")
console.log(letters)

letters.forEach(el => console.log(el))

let iterator = letters.entries()
console.log(iterator)

// remove a sepecified value from the set
letters.delete("a")
console.log(letters)

// remove all values from the set
letters.clear()
console.log(letters)