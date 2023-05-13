let str = "w3resource"
const regex = /e/g;
while(regex.test(str) === true) {
    console.log("Found at "+(regex.lastIndex-1))
} 