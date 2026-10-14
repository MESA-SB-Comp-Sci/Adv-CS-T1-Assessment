/**
 * TODO: 
 * Outlined below are 2 questions. 
 * Complete the PEDAC for both! 
 * Make sure to use console.log as you test your code! 
 */

/**
 * Q1: Weekday Or Weekend? 
 * You will be given a random day generator.  
 * When the generator is a weekday log: "Let's go to school!"
 * However, when the generator is a weekend log: "Let's go play outside!" 
 * 
 * Note: 
 * monday, tuesday, wednesday, thursday, friday are all weekdays
 * saturday and sunday are weekends
 * 
 * P: 
 * E: 
 * D: 
 * A: 
 * C: Write the code outside of the comment!
 */

const daysOfTheWeek = ["monday", "tuesday", "wednesday", "thursday", "friday", "saturday", "sunday"];
const randomDayGenerator = daysOfTheWeek[Math.floor(Math.random() * 7)]

console.log(`The random day generator is: ${randomDayGenerator}`);

/**
 * Q2: Number to grade
 * Ms.Rendon forgot to convert the test scores to a letter grade, create a number to letter converter!
 * You will be given a random number generator from 0-100.  
 * Based on the number generated assign a letter grade to the student variable.
 * 
 * The following is the number to letter grade connversion: 
 * 95 - 100 -> A+ 
 * 85 - 95 -> A
 * 75 - 85 -> B
 * 65 - 75 -> C 
 * 55 - 65 -> D 
 * below 55 -> F
 * 
 * 
 * P: 
 * E: 
 * D: 
 * A: 
 * C: Write the code outside of the comment!
 */

let studentGrade = Math.floor(Math.random() * 100)
let studentLetterGrade = null;

console.log(`The current number grade is: ${studentGrade}, the current letter grade is: ${studentLetterGrade}`)