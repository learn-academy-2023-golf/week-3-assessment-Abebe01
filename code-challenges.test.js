// ASSESSMENT 3: Coding Practical Questions with Jest

// Please read all questions thoroughly
// Pseudo coding is REQUIRED
// If you get stuck, please leave comments to help us understand your thought process

// Use test driven development to complete the following questions
// Add appropriate dependencies: $ yarn add jest

// Reminder: The test will call your function
// Run the file with the following command: $ yarn jest

// --------------------1) Prompt: Create a function that takes in a number (greater than 2) and returns an array containing the Fibonacci sequence. The length of the array is determined by the argument of the function.

const fibonacciSequence = num > 2
let 
if (num > 2) {
 return 

//  I think I'm having a hard time grasping how to do this. I looked uo the fibonacci sequence and understand the concept of it. But I dont get the idea of inputting one number and returning an array; let alone an array that includes the sequence. I'm sure it would need a conditional to decide what to do/ return. But im still not sure how you would return an entire array from one number. 

// a) Create a test with expect statements for each of the variables provided.

const fibonacciLength1 = 6
// Expected output: [1, 1, 2, 3, 5, 8]

const fibonacciLength2 = 10
// Expected output: [1, 1, 2, 3, 5, 8, 13, 21, 34, 55]

// b) Create the function that makes the test pass.

// Pseudo code:
//Create a for loop/ conditional statement that takes in a number and returns an array. 

// --------------------2) For the following prompt, use ChatGPT or an equivalent AI tool to help you solve the problem. The prompt will require the use of a JavaScript method called Object.values()
// Prompt: Create a function that takes in an object and returns an array of the object's values sorted from least to greatest.

function sortObjectValues(obj) {
  const values = Object.values(obj);
  values.sort((key, value) => key - value);
  return values
}

module.exports = sortObjectValues;


// a) Create a test with expect statements for each of the variables provided.

const studyMinutesWeek1 = {
  sunday: 90,
  monday: 30,
  tuesday: 20,
  wednesday: 15,
  thursday: 30,
  friday: 15,
  saturday: 60
}

const sortObjectValues = require('./sortObjectValues');

test('sortObjectValues for studyMinutesWeek1', () => {
  expect(sortObjectValues({
    sunday: 90,
    monday: 30,
    tuesday: 20,
    wednesday: 15,
    thursday: 30,
    friday: 15,
    saturday: 60
  })).toEqual([15, 15, 20, 30, 30, 60, 90]);
});


// Expected output: [15, 15, 20, 30, 30, 60, 90]

const studyMinutesWeek2 = {
  sunday: 100,
  monday: 10,
  tuesday: 45,
  wednesday: 60,
  thursday: 20,
  friday: 15,
  saturday: 65
}

test('sortObjectValues for studyMinutesWeek2', () => {
  expect(sortObjectValues({
    sunday: 100,
    monday: 10,
    tuesday: 45,
    wednesday: 60,
    thursday: 20,
    friday: 15,
    saturday: 65
  })).toEqual([10, 15, 20, 45, 60, 65, 100]);
});

// Expected output: [10, 15, 20, 45, 60, 65, 100]

// b) Create the function that makes the test pass.

function sortObjectValues(obj) {
  const values = Object.values(obj);
  values.sort((key, value) => key - value);
  return values
}


// Pseudo code:
// Create function to sort object values 
// Create test for both variables 
// test each 