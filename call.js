function getOddNumbers() {
    const args = Array.prototype.slice.call(arguments);
    return args.filter(num => num % 2);
}

let oddNumbers = getOddNumbers(10, 1, 3, 4, 8, 9);
console.log(oddNumbers);