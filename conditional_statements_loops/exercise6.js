/**
 * Write a JavaScript program which compute, the average marks of the following students Then, 
 * this average is used to determine the corresponding grade.
 */

let students = [["David",80], ["Vinoth",77], ["Divya",88], ["Ishitha",95], ["Thomas", 68]];

let sum=0;
for(let i=0; i<students.length; i++) {
    sum += students[i][1];
}

let avg = sum/students.length
let grade = "";

if(avg < 100) grade = "A";
if(avg < 90) grade = "B";
if(avg < 80) grade = "C";
if(avg < 70) grade = "D";
if(avg < 60) grade = "E";

console.log("Grade "+grade);