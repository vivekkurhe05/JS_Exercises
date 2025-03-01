/**
 * Write a Java program to check if a given string contains another string. Returns true or false.
 * 
 * Original string:
Java is the foundation for virtually every type of networked application and is the 
global standard for developing and  delivering embedded and mobile applications, games, 
Web-based content,  and enterprise software. With more than 9 million developers worldwide, 
Java enables you to efficiently develop, deploy and use exciting applications and services.

Is 'million' present in the said text?
true

Is 'millions' present in the said text?
false
 */

function checkInstance(str) {
    return str.includes("million")
}

let str="Java is the foundation for virtually every type of networked application and is the global standard for developing and  delivering embedded and mobile applications, games, Web-based content,  and enterprise software. With more than 9 million developers worldwide, Java enables you to efficiently develop, deploy and use exciting applications and services."
console.log(checkInstance(str))