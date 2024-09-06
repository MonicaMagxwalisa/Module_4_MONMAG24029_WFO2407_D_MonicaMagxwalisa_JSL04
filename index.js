//[JSL04] Submission: Monster Ternary Operator

// Challenge 1: Flavor Selection
//Print the preferred type of Monster Energy drink based on the userPreference variable.
let userPreference = 'Sugar-free';
console.log(userPreference === "Sugar-free" ? "Sugar-free" : "Regular");

// Challenge 2: Stock Check
//Print a message based on the number of cans left in the fridge
let cansLeft = 3;
console.log(cansLeft < 5 ? "Time to restock!" : "We're stocked!");

// Challenge 3: Workout Intensity
//Print whether a boost is needed for the workout based on the heart rate.
let heartRate = 95;
console.log(heartRate < 100 ? "Boost needed!" : "Energy levels are high!");

// Challenge 4: Temperature Suitability
//Print whether the drink is at the right temperature based on the current temperature.
let currentTemp = 4;
console.log(currentTemp <= 5 ? "Chilled to perfection!" : "Needs a cooler!");

// Challenge 5: Late Night Coding Session
//Print whether it's a good idea to drink a Monster Energy drink based on the current hour.
let currentHour = 22;
console.log(currentHour >= 7 && currentHour < 24 ? "Unleash the beast!" : "Better stick to water.");
 