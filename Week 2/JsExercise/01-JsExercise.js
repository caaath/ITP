/*
Exercise 01 - Grade Calculator
In this activity, the user is prompted to enter a score. Based on the score entered, the code uses conditional statements (if, else if, and else) to determine the correspopnding grade.
*/

let score = prompt('Enter a score.');
let grade;

if (score >= 90) {
  grade = 'A';
} else if (score >= 80) {
  grade = 'B';
} else if (score >= 70) {
  grade = 'C';
} else if (score >= 60) {
  grade = 'D';
} else {
  grade = 'F';
}

console.log('Grade:', grade);