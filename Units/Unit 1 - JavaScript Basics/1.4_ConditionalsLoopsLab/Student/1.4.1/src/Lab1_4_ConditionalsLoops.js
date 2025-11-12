/* 
 Lab 004 – Conditionals and Loops
*/

// TODO 1: if..else with age discounts
let age = 15;
if (age <= 16) {
    console.log("Teen Discount");
} else if (age >= 65) {
    console.log("Senior Discount")
} else {
    console.log("No discount")
}

let weight = 180;
if (weight <= 150) {
    console.log("Your slim")
} else if (weight >= 191) {
    console.log("You need to startr working out")
} else {
    console.log("You are in shape")
}


// TODO 2: Nested if with two numbers
let number1 = 10
let number2 = 20

if (typeof number1 == 'number' && typeof number2 == 'number') {
    if (number1 == number2) {
        console.log("Numbers are equal")
    } else if (number1 > number2) {
        console.log("Number 1 is bigger")
    } else {
        console.log("Number 1 is smaller")
    }
}


// TODO 3: Switch statement for language greeting

let language = "Spanish"
switch (language) {
    case "Spanish":
        console.log("Hola, mundo!")
        break;
    case "French":
        console.log("Bonjour tout le monde")
        break;
    default:
        console.log("Hello, world");
}

let stock = "APPL"

switch (stock) {
    // HealthCare   
    // UHC - United Health Care
    // JNJ - Johnson and Johnson
    // PFE - Pfizer
    case "UHC":
    case "JNJ":
    case "PFE":
        console.log("The industruy is Healthcare");
        break;

    // Financial
    // JPM - JP MorganChase
    // BAC - Bank of America
    // WFC - Wells Fargo 

    // Technology
    // APPL - Apple
    // AMZN - Amazon
    // NVIDA - Navidia
    case "APPL":
    case "AMZN":
    case "NVIDA":
        console.log(`Your stock ${stock} is in the Technology Industry`)
        break;

    // Energy
    // COP - ConocoPhillips
    // EOG - EOG Resource
    // CVX - Chevron 
    case "COP":
    case "EOG":
    case "CVX":
        console.log(`Your stock ${stock} is in the Energy Industry`)
        break;
}

// TODO 4: While loop (1 to 10)
let count = 1;
while (count <= 10) {
    console.log("VALUE: ", count);
    count++;
}

// TODO 5: Do..while loop (1 to 5)
let i = 1;
do {
    console.log("VALUE: ", i);
} while (i <= 5);

// TODO 6: For loop (1 to 20, print "ten" at 10 and "twenty" at 20)
for (let count = 1; count <= 20; count++) {
    if(count == 10){
        console.log("TEN")
    } else if(count == 20){
        console.log("TWENTY")
    } else{
        console.log("VALUE: ", count);
    }
}
// TODO 7: Even/Odd loop (1 to 20)

// 🚀 Stretch Goals
// - Backwards loop from 20 to 1
// - Skip multiples of 3 in even/odd loop