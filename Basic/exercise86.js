/**
 * Write a JavaScript program to find the types of a given angle.
Types of angles:
Acute angle: An angle between 0 and 90 degrees.
Right angle: An 90 degree angle.
Obtuse angle: An angle between 90 and 180 degrees.
Straight angle: A 180 degree angle.
 */

// your solution

function type_of_angle(degree) {
    let angle = "";
    if (degree > 0 && degree < 90) angle = "Acute angle";
    if (degree === 90) angle = "Right angle";
    if (degree > 90 && degree < 180) angle = "Obtuse angle";
    if (degree === 180) angle = "Straight angle";
    return angle;
}
console.log(type_of_angle(45))
console.log(type_of_angle(90))
console.log(type_of_angle(102))
console.log(type_of_angle(180))

// w3resource solution

function angle_Type(angle) {
    if (angle < 90) {
        return "Acute angle.";
    }
    if (angle === 90) {
        return "Right angle.";
    }
    if (angle < 180) {
        return "Obtuse angle.";
    }
    return "Straight angle.";
}

console.log(angle_Type(47))
console.log(angle_Type(90))
console.log(angle_Type(145))
console.log(angle_Type(180))