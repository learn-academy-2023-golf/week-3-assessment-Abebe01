// ASSESSMENT 3: Coding Practical Questions with Jest

// Please read all questions thoroughly
// Pseudo coding is REQUIRED
// If you get stuck, please leave comments to help us understand your thought process

// Use test driven development to complete the following questions
// Add appropriate dependencies: $ yarn add jest

// Reminder: The test will call your function
// Run the file with the following command: $ yarn jest

// --------------------1) Prompt: Create a function that takes in a number (greater than 2) and returns an array containing the Fibonacci sequence. The length of the array is determined by the argument of the function.

const fibseq = (length) => {
  if (length < 3) {
    return "Pick a higher number"
  }
  const fibonacciSequence = [0, 1] 
  // Initialize with the first two numbers in the sequence
  for (let i = 2; i < length; i++) {
    const nextNumber = fibonacciSequence[i - 1] + fibonacciSequence[i - 2]
    fibonacciSequence.push(nextNumber)
  }
  return fibonacciSequence
}

// a) Create a test with expect statements for each of the variables provided.

const fibonacciLength1 = 6
// Expected output: [1, 1, 2, 3, 5, 8]

describe ("fibonacci", (num) => {
  it("takes in the number 6 and returns an array containing the Fibonacci sequence. The length of the array is determined by the argument of the function.", () => {
    expect(fibonacci(num)).toEqual("[1, 1, 2, 3, 5, 8]")
  }
  )}
)


const fibonacciLength2 = 10
// Expected output: [1, 1, 2, 3, 5, 8, 13, 21, 34, 55]

describe ("fibonacci", (num) => {
  it("takes in a number and returns an array containing the Fibonacci sequence. The length of the array is determined by the argument of the function.", () => {
    expect(fibonacci(num)).toEqual("[1, 1, 2, 3, 5, 8, 13, 21, 34, 55]")
  }
  )}
)

// b) Create the function that makes the test pass.
 
 const result = [1, 1]
 // Plug in the first two fibonacci numbers
 if (num <= 2) {
   return result.slice(0, num)
   // Return the first 'num' elements if num is 1 or 2
 }
 for (let i = 2; i < num; i++) {
   // Generate the remaining Fibonacci numbers
   const nextFib = result[i - 1] + result[i - 2]
   result.push(nextFib)
 }
 return result


// Pseudo code: ^^


//Create a for loop/ conditional statement that takes in a number and returns an array. 

const work = (num) => {
  const arrs = []
  for (let i = 1; i <= num; i++) {
    if (i % 3 !== 0) {
      arrs.push(i)
    }
  }
  
  return arrs
}
const final = work(10)
console.log(work(final))

// --------------------2) For the following prompt, use ChatGPT or an equivalent AI tool to help you solve the problem. The prompt will require the use of a JavaScript method called Object.values()

// Prompt: Create a function that takes in an object and returns an array of the object's values sorted from least to greatest.

const sortObjectValues = (obj) => {
  // input : object ^
  const values = Object.values(obj)
  // creat a new var for values that uses the built in method to take in object as an argument and return an array.
  values.sort((key, value) => key - value)
// the array is then sorted through from smallest to largest
  return values
}


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

define("daysOfTheWeek"), () => {
  it("takes in an object and returns an array of the object's values sorted from least to greatest.", () => {
    expect (daysOfTheWeek(studyMinutesWeek1).toEqual("[15, 15, 20, 30, 30, 60, 90]")
    )
  }
)}


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
define("daysOfTheWeek"), () => {
  it("takes in an object and returns an array of the object's values sorted from least to greatest.", () => {
    expect (daysOfTheWeek(studyMinutesWeek2).toEqual("[10, 15, 20, 45, 60, 65, 100]")
    )
  }
)}

// Expected output: [10, 15, 20, 45, 60, 65, 100]

// b) Create the function that makes the test pass.

function daysOfTheWeek(studyMinutesWeek2) {
  const values = Object.values(studyMinutesWeek2)
  values.sort((key, value) => key - value)
  return values
}


// Pseudo code:
// Create function to sort object values 
// Create test for both variables 
// test each 