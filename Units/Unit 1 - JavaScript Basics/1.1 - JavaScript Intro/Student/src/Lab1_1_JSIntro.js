/* ===========================================================
   Lab 1.1 – Intro
   Exploring JavaScript syntax, console output, and variables.
   =========================================================== */

// TODO 1: Print your full name with console.log()

console.log("alexander vigo ");

// TODO 2: Declare variable favoriteFood, assign "Steak", then reassign "Pizza"
let favoriteFood = "Steak";
favoriteFood = "Pizza";
// TODO 3: Create variable mystery, assign a string, then a number, print type each time
let mystery = "Hello";
console.log(typeof mystery + "data type" + typeof mystery); 
mystery = 42;
console.log(typeof mystery + "data type" + typeof mystery);

// TODO 4: Declare const schoolName, try to reassign
const schoolName = "chistopher columbus highschool";

// TODO 5: Create three valid camelCase variables and print them
let firstName;
let lastName;

firstName = "alexander";
lastName = "vigo"
// 🚀 Stretch Goals (optional)
// - Create a variable age and print "I am X years old" using concatenation
// - Repeat using template literals
let age = 17;
console.log("I am " + age + " years old");
console.log(`I am ${age} years old`);
/* ===========================================================
   🎟 EXIT TICKET
   1. What new concept or skill did you learn in this lab?
   2. What challenges did you encounter, and how did you solve them?
   3. Where else could this programming concept be useful?
   =========================================================== */


  // mini frq lab 1.1 

  let width = 5;
   let height = 10;

   //compute area and perimeter
   let area = width * height;
   let perimeter = 2 * (width + height);
   
   //print area and perimeter
   console.log("Area: " + area);
   console.log("Perimeter: " + perimeter);