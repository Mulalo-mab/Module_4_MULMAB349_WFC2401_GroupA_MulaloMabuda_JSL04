// # [JSL04] Submission: Monster Ternary Operator

// #### Challenge 1: Flavor Selection
// Given a variable that holds a user's preferred type of Monster Energy drink, 
// print whether the user prefers a "Regular" or "Sugar-free" variety. If the preference is not set, default to "Regular".

let userPreference = 'Sugar-free'; // Possible values: 'Regular', 'Sugar-free', or undefined

// Using ternary operator to determine the flavor based on user preference
let flavor = (userPreference === 'Regular') // Check if user prefers Regular
     ? "User prefers Regular Monster Energy drink." 
     : (userPreference === 'Sugar-free')  // If not, check if user prefers sugar-free
           ? "User prefers Sugar-free Monster Energy drink."
           : "User preference not set. Defaulting to Regular Monster Energy drinks.";

console.log(flavor);

// #### Challenge 2: Stock Check
// You have a variable that tracks the number of Monster Energy cans left in the fridge. 
// Use a ternary operator to print "Time to restock!" if the number is less than 5, or "We're stocked!" if the number is 5 or more.

let cansLeft = 3; // Any number of cans

// Using a ternary operator to determine the message based on the number of cans left
let message = cansLeft < 5 ? "Time to restock!" : "We're stocked!";
console.log(message);


// #### Challenge 3: Workout Intensity
// Based on the current heart rate, determine if the user should drink a Monster Energy drink to boost their workout. 
// If the heart rate is below 100 bpm, print "Boost needed!", otherwise, print "Energy levels are high!".

let heartRate = 95; // Current heart rate in bpm

 
// Using a ternary operator to determine the workoutmessage based on the heart rate
let workoutmessage = heartRate < 100 ? "Boost needed!" : "Energy levels are high!";
console.log(workoutmessage);


// #### Challenge 4: Temperature Suitability
// Monster Energy drinks are best served cold. Given the current temperature, use a ternary to print "Chilled to perfection!" 
// if the temperature is below or equal to 5°C, or "Needs a cooler!" if above 5°C.

let currentTemp = 4; // Current temperature in °C

// Using a ternary operator to determine the status based on the temperature
let status = currentTemp <= 5 ? "Chilled to perfection!" : "Needs a cooler!";

console.log(status);


// #### Challenge 5: Late Night Coding Session
// Determine if it's a good idea to have a Monster Energy drink based on the current hour.
// If it's between 7am and midnight (24-hour format), print "Unleash the beast!",
// otherwise, print "Better stick to water."

// Define the current hour in 24-hour format
let currentHour = 22; 

// Write your code below this line to determine if it's a good idea to have a Monster Energy drink based on the current hour
// If it's between 7am and midnight (24-hour format), print "Unleash the beast!"
// Otherwise, print "Better stick to water."

// Determine if it's a good idea to have a Monster Energy drink based on the current hour
let session = (currentHour >= 7 && currentHour < 24) ? "Unleash the beast!" : "Better stick to water";
console.log(session);

   

// In each of these challenges, the ternary operator is used to decide between two options based on a condition, 
// demonstrating its utility for concise conditional logic. Remember that while ternaries can make the code more succinct, 
// they should be used judiciously to maintain readability, especially for more complex conditions.