let name2 = prompt("Enter your name:");
 
console.log("Name: " + name2);
 
 
let age2 = parseInt(prompt("Enter your age:"));
 
console.log("Age: " + age2);
 
 
let cgpa2 = parseFloat(prompt("Enter your CGPA:"));
 
console.log("CGPA: " + cgpa2);
let isStudent2 = (prompt("Are you a student? (true/false):") === "true");
 
console.log("Student: " + isStudent2);
 
 
let grade2 = prompt("Enter your grade (A/B/C):").charAt(0);
 
console.log("Grade: " + grade2);
let courses = [
    "Web Technology",
    "OOP",
    "Database"
];
 
console.log("Courses:");
console.log(courses);
let marks = Number(prompt("Enter your marks:"));

console.log("Marks: " + marks);

if (marks >= 80) {
    console.log("Grade: A+");
}
else if (marks >= 70) {
    console.log("Grade: A");
}
else if (marks >= 60) {
    console.log("Grade: B");
}
else {
    console.log("Grade: F");
}
function showStudent(name2,age2)
{
  console.log("Name:" +name2)
  console.log("Name:" +age2)
}
showStudent(name2,age2);




let students = [];

for (let i = 0; i < 3; i++) {
    students[i] = prompt("Enter student name:");
}

console.log("Students:");

for (let i = 0; i < students.length; i++) {
    console.log(students[i]);
}

