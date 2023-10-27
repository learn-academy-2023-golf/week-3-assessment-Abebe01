# ASSESSMENT 3: Career Readiness

The LEARN program focuses on readying our students for a career in technology. The job hunt is a daunting process that requires a lot of preparedness. Complete the following tasks to ensure you are progressing in your professional development.

### Portfolios

Creating a technical portfolio website is a big undertaking. Portfolios are almost never "done" as they will continue to evolve as your experience changes and grows.

Wire frames are used to outline the basic structure of your site. Wire frames should be vague enough to give you flexibility in your development process but structured enough to ensure all appropriate elements are present. 

Submit the link to your wire frames: 

https://www.figma.com/file/nPScK3jDFMZ8GdPqD9VJNU/figmaDayOne?type=design&node-id=0-1&mode=design&t=226SmPwQ4lvBfA0g-0


### LinkedIn

Your LinkedIn url: www.linkedin.com/in/asratabebe

Check the boxes below to certify that you have completed the following items on LinkedIn:

- [x] create a new post about your first three weeks at LEARN. Topics can include (but are not limited to) React, projects you created, sharing a project you created, wire frames, or portfolios.
- [x] add at least ten more professional connections. Connections can include your cohort mates, LEARN alumni, LEARN staff, following companies of interest, friends and family, and former coworkers.
- [x] react (like, celebrate, comment, etc) to ten posts from your existing connections.


-------------------------------------------------------------------------------

only using the knowledge i'm about to provide to you; help me solve these next few problems/prompts

Learning Objectives
can explain the purpose of a function
can define the anatomy of an arrow function
can create a function that is reusable and dynamic
can distinguish between a function call and a function expression
can utilize parameters within a function
can demonstrate the use of pseudocode to guide logical steps
Vocabulary
function
encapsulation
arrow syntax
function expression
const
function invocation / function call
code block
return
parameter
argument
algorithm
function signature
pseudocoding
Additional Resources
W3Schools JavaScript Functions
Edabit Code Challenges
How to Write Pseudocode
Many Ways to Create Functions


Process
cd into the javascript-intro-challenges repository
Create a new branch: functions-initials1-initials2 (ex. functions-aw-sp)
touch a file with no spaces and .js extension: functions-student1-student2.js (ex. functions-austin-sarah.js)
Open the folder in a text editor
Code!
Troubleshooting Tips
Does the function have a return?
Is there a console.log on the function invocation?
Does the number of arguments match the number of parameters?
Functions: Little Code Machines
A function is a set of instructions detailing how to do a task. We can use the instructions to execute an action over and over again. Function logic should be contained so that the internal workings of the function should not interact with the rest of the program. This is the idea of encapsulation.

Anatomy of a Function
const greeting = () => {
  return "Hello there LEARN student!"
}
Functions consists of the following:

Variable declaration
Just like any other variable, we must inform JavaScript of our intention with a declaration
Because function expressions should only be assigned one time it is best practice to use the variable declaration that won't allow reassigning
const
Variable name
Variables must be camelCase and descriptive as to the intent of the function
const greeting
Single equal sign
Variables must be assigned with a single equal sign
const greeting =
Parentheses
Parentheses describes an action in JavaScript
Parentheses can take parameter to pass inputs to a function
const greeting = ()
Arrow
Function syntax
const greeting = () =>
Curly braces
Curly braces define a code block where the logic is encapsulated
const greeting = () => {}
Return
Describes the output of a function
Without a return, a function will log undefined
There can only be one executable return per code block
const greeting = () => {
  return
}
Function Expression
const greeting = () => {
  return "Hello there LEARN student!"
}
There are several ways to define a function in JavaScript. There is a keyword function that can be used to create what is called a named function declaration. In programming there are many tools for the job. It is up to us as developers to find the best tool for the problem we are facing. At LEARN, we will focus on creating function expressions using variable declarations and the arrow syntax. The arrow syntax provides a concise approach to describing a function action in JavaScript. The arrow syntax also has some advantages as we move into more complicated implementations of JavaScript.

A function expressions is a variable that holds the logic of a function. Our function expression will be declared using the variable declaration const. The variable declaration const will prohibit the function expression from accidentally being redeclared.

Great! We have a function. But this function is not doing anything yet. At this point, JavaScript recognizes that our function exists, but the power of a function is that it is a little machine that can be used over and over again. So how do we tell the program when and how often to run our little code machine?

Function Invocation/Call
const greeting = () => {
  return "Hello there LEARN student!"
}
console.log(greeting())
// output: "Hello there LEARN student!"
We have a function that is recognized by the program and now we need to tell our function when and how often to execute. Telling our function to run is called a function invocation or function call. Invocation and call are often used interchangeably. While we only have one function expression, we can have as many function invocations as needed for our program.

const greeting = () => {
  return "Hello there LEARN student!"
}
console.log(greeting())
// output: "Hello there LEARN student!"
console.log(greeting())
// output: "Hello there LEARN student!"
console.log(greeting())
// output: "Hello there LEARN student!"
To invoke or call our function we used the name that we gave our variable that holds the function expression. Following the variable name is a set of parentheses. Calling the function by its name will tell the program to execute the steps described in the function expression. In order to see the output of our function, we have wrapped our function call in a console.log.

Function Logic
After the arrow => in our function expression is where all the logic lives. It is a common practice to define a code block. A code block is a group of statements wrapped by curly braces. Inside the code block we can write any JavaScript code that is necessary to get to the desired output of the function. Within the logic there is going to be one thing that is the ultimate function output. That output is defined by the JavaScript keyword return. Every function code block needs exactly one return. If you omit the return your function will output undefined.

Function Parameters and Arguments
It is important to remember when creating function logic that functions should always be encapsulated. This means the logic in your function cannot reference other information in your program. The problem with this is without any external information the function logic is limited. Functions often require external information in order to perform the appropriate task. This problem is solved by function parameters and arguments.

In the previous example of the greeter function there was only one possible output. As many times as we invoked the function we only ever received a string containing the characters, "Hello there LEARN Student!" Let's enhance this function using a parameter and argument to introduce an input to the function.

const greeting = (name) => {
  return `Hello there ${name}!`
}
console.log(greeting("Matt"))
// output: "Hello there Matt!"
console.log(greeting("Rachael"))
// output: "Hello there Rachael!"
Now our function output will be different each time it is invoked. In the example above, name is a parameter. A parameter is a placeholder variable that is defined inside the parentheses of the function expression. Once it is defined in the parentheses, it can be leveraged anywhere in the function logic.

The parameter is then assigned a value called an argument. An argument is the actual content passed to the function inside the parentheses of the function invocation. The argument value must be a data type recognized by JavaScript. The argument is represented in the function for every instance of the parameter. Now our function output changes based on the input while still maintaining encapsulation.

console.log(greeting("Sam"))
// output: "Hello there Sam!"
console.log(greeting("John"))
// output: "Hello there John!"
Multiple Parameters and Arguments
Functions are not limited to a single input. We can pass as many arguments into a function as we want. We just have to define an equal number of parameters.

const multiplier = (num1, num2) => {
  return num1 * num2
}

console.log(multiplier(3, 5))
// output: 15
console.log(multiplier(5, 8))
// output: 40
It is common that the argument values will be represented by variables.

var myNumber1 = 3
var myNumber2 = 5
var myNumber3 = 8

console.log(multiplier(myNumber1, myNumber2))
// output: 15
console.log(multiplier(myNumber2, myNumber3))
// output: 40
The variable should not be named the same thing as the function parameters.

Pseudocode
When we are faced with creating a function that is going to take an input and perform logic to produce an output what we are doing is creating an algorithm. This is often a complex task that requires a lot of mental heavy-lifting. Anytime we are faced with a complex problem, it is a good idea to break it down.

A common workflow to break down a function algorithm is to start with an input and output. This will ensure we know what the function is going to do and what arguments it will require. The input and output of the function is called the function signature. Once we have established the signature, we can create a list of the logical steps to get from input to output. The list should be plain language using code terms but not coding itself. This process of establishing the function signature and creating an actionable plan in human readable words is called pseudocoding. Writing pseudocode is a really good habit as it gives us a plan and translates between code communication and human communication.

Let's work through an algorithm prompt using pseudocode.

Prompt: Write a function called tallEnough that takes an argument of a person's height in inches and returns whether or not the person meets the 40 inch height requirement to ride the rollercoaster.

// Function Signature
// input: number
// output: string indicating allowed, denied, or error

// input: 39
// output: "Cannot ride the rollercoaster"

// input: 45
// output: "Buckle up, let's ride"

// input: "yolo"
// output: "error"

// Process
// create a function called tallEnough that takes in a number called height
// if height is less than 40 return "Cannot ride the rollercoaster"
// if height is greater than or equal to 40 return "Buckle up, let's ride"
// any other input return error
Now let's build the actual code around the pseudocode.

// create a function called tallEnough that takes in a number called height
const tallEnough = (height) => {
  // if height is less than 40 return "Cannot ride the rollercoaster"
  if (height < 40) {
    return "Cannot ride the rollercoaster"
  }
  // if height is greater than or equal to 40 return "Buckle up, let's ride"
  else if (height >= 40) {
    return "Buckle up, let's ride"
  }
  // any other input return error
  else {
    return "error"
  }
}
We can now use our example inputs from the pseudocode to test the output of the function.

// input: 39
// output: "Cannot ride the rollercoaster"

// input: 45
// output: "Buckle up, let's ride"

// input: "yolo"
// output: "error"

console.log(tallEnough(39))
// output: "Cannot ride the rollercoaster"

console.log(tallEnough(45))
// output: "Buckle up, let's ride"

console.log(tallEnough("yolo"))
// output: "error"

Learning Objectives
can define .map() and .filter() as array methods
can distinguish between a regular function and a higher-order function
can distinguish between a regular built in method and a higher-order function
can utilize the required parameter for .map() and .filter()
can recall the optional parameters for .map() and .filter()
can demonstrate the proper use of both .map() and .filter() to produce expected outcomes
Vocabulary
higher-order function
.map()
.filter()
type coercion
falsy
truthy
Process
cd into the javascript-foundations-challenges repository
Create a new branch: higher-order-initials1-initials2 (ex. higher-order-aw-sp)
touch a file with no spaces and .js extension: higher-order-student1-student2.js (ex. higher-order-austin-sarah.js)
Open the folder in a text editor
Code!
Troubleshooting Tips
Does the function have a return?
Is there a console.log on the function invocation?
Does the number of arguments match the number of parameters?
Higher-Order Functions
A higher-order function is a built in method in JavaScript that takes in a function as an argument. Often higher-order functions are designed to operate on arrays. The function passed as an argument will execute once for every item in the array. This makes higher-order functions incredible useful for iteration.

We will focus on two higher-order functions for this lesson .map() and .filter(). Both of these have three built-in parameters: the current value, the index, and the array the higher-order function is called on.

What the parameters are named is technically arbitrary, but the order will always be the same. The higher-order functions have to take at least one argument (value) but can take two or three if needed.

.map(value, index, array)
.filter(value, index, array)

The value of the array at the current iteration (required).

The index of the array at the current iteration (optional).

The array the higher-order function was called on (optional).

Map
The .map() method iterates through an array and returns a new array of the same length.

Here is an example of iterating using a for loop:

const myArray = [5, 3, 2, 9, 8]

let newArray = []
for (let i = 0; i < myArray.length; i++) {
  newArray.push(myArray[i] * 3)
}

console.log(newArray)
// output: [15, 9, 6, 27, 24]
Now let's look at this same objective with .map() method.

const myArray = [5, 3, 2, 9, 8]

const multiplier = myArray.map((value) => {
  return value * 3
})

console.log(multiplier)
// output: [15, 9, 6, 27, 24]
Because we are using an arrow function we can reduce the code even further. If there is only one line of code to be executed, we can remove the return keyword as the return is implied.

const myArray = [5, 3, 2, 9, 8]

const multiplier = myArray.map((value) => value * 3)

console.log(multiplier)
// output: [15, 9, 6, 27, 24]
And finally let's wrap the .map() logic in a function that can take in any array to make the function reusable. This allows us to call the multiplier function as many times as we deem useful.

const myArray = [5, 3, 2, 9, 8]

const multiplier = (array) => {
  return array.map((value) => value * 3)
}
console.log(multiplier(myArray))
// output: [15, 9, 6, 27, 24]

console.log(multiplier([3, 4, 5, 6, 7]))
// output:[9, 12, 15, 18, 21]
Notice that .map() iterates through the specified array AND returns a new array with the updated values.

Here is another example with proper pseudo coding:

// create a function that takes in an array of words and returns array with all the words capitalized
const fruitArray = ["banana", "mango", "apple", "grape"]

// declare a function that takes in an array
const capitalizer = (array) => {
  // return the array output from the map action
  return array.map((value) => {
    // with each value access the first index and capitalize the letter then concatenate the remainder of the word
    return value[0].toUpperCase() + value.substring(1)
  })
}
// logging the function and pass in the array
console.log(capitalizer(fruitArray))
// output: ["Banana", "Mango", "Apple", "Grape"]
Note: - This function has a return for the outer function AND a return for the higher-order function.

Truthy and Falsy
The JavaScript language supports type coercion. Type coercion is the evaluation of data that are not the same type by the conversion of one data type to another. Part of type coercion, and a quirk of JavaScript, is that all data types evaluate to either a true value or a false one. A falsy value is one that JavaScript deems to equate to the Boolean value false through the use of type coercion such as 0, null, and strings with no characters. A truthy value is one that JavaScript deems to equate to the Boolean value true through the use of type coercion such as non-zero numbers and strings with characters. This produces interesting outputs such as the following:

1 + "1"
// output: "11"

true + 1
// output: 2

null + 4
// output: 4
Truthy and falsy values are important to understand and can be used to the advantage of the JavaScript developer. However, this quirk of JavaScript should not be exploited at the cost of code quality.

Filter
The .filter() method iterates through an array and returns a new array with only the values that satisfy the stated condition. Filter needs an evaluation. The evaluation can be anything that will return a Boolean value of true or false or a truthy or falsy value. Values that are true or truthy are included in the subset while values that are false or falsy are excluded. This evaluation process allows filter to return a subset of the original array.

Here is an example of iterating and returning a subset of an array using a for loop:

const numbersArray = [1, 2, 7, 4, 10, 8, 9]

const onlyEven = (array) => {
  let newArr = []
  for (let i = 0; i < array.length; i++) {
    if (array[i] % 2 === 0) {
      newArr.push(array[i])
    }
  }
  return newArr
}

console.log(onlyEven(numbersArray))
// output: [2, 4, 10, 8]
In the above example, we have created a function that takes an array, loops through the array, and returns a new array containing only the even numbers.

Here is the same example using the filter method.

const numbersArray = [1, 2, 7, 4, 10, 8, 9]

const onlyEven = (array) => {
  return array.filter((value) => value % 2 === 0)
}

console.log(onlyEven(numbersArray))
// output: [2, 4, 10, 8]
Here is another example with proper pseudo coding:

// create a function that returns only the values at the odd indexes
const numbers = [4, 24, 5, 9, 0, 78]

// declare a function that takes in an array
const getOnlyOddIndex = (array) => {
  // return a higher-order function that takes in the value and the index
  return array.filter((value, index) => {
    // return only the values that have an odd index
    return index % 2 !== 0
  })
}
// log the function and pass in the array
console.log(getOnlyOddIndex(numbers))
// output: [24, 9, 78]
Map vs Filter
When deciding which higher-order function to use, remember these two differences:

.map() will do something to each item in an array and return an array of the same length.
.filter() will make a decision about each item in an array and return a subset based on the criteria given.

Learning Objectives
can define yarn and jest
can recall the proper naming syntax for a jest file
can explain the purpose of test driven development
can define the anatomy of a jest test
can write a basic jest test for a given prompt
can identify that the test input/output exists in a test environment that is separate from the development environment
Vocabulary
test driven development (TDD)
red-green-refactor
Jest
dependencies
yarn
package manager
Additional Resources
Jest Official Documentation
Jest Cheat Sheet
Jest Matchers
Process
cd into the javascript-foundations-challenges repository
Create a new branch: jest-initials1-initials2 (ex. jest-aw-sp)
Create a new directory mkdir jest-student1-student2 (ex. jest-austin-sarah)
cd into the directory you just created
touch a file called: jest.test.js
Add the dependencies by running $ yarn add jest in the terminal
Open the Jest directory in a text editor
Code!
Useful Commands
$ yarn add jest
$ yarn jest
Troubleshooting Tips
Are you in the correct directory?
Did you install the dependencies?
Did you install the dependencies in the correct directory?
Are you reading the output of your tests?
Is the test calling your function?
Testing Code
One of the fastest ways to prove to future employers that you care about your code, and know what you are doing, is to write good tests. Your tests speak volumes about you as a developer, as much or more than the actual code.

Not all developers do this, so you can easily set yourself apart. It's almost like cheating the job hunt! Show off your tests and you'll get lots of second interviews.

In short, there is no end to the winning when you write tests for your code. You win, your coworkers win, your employer wins, your users win, and your future self wins when you come back to the code in six months.

Why Testing is Important
Writing tests is can be a time consuming process but the benefits will always be larger than the time commitment of the developer. Writing tests forces the developer to think about the input and output of the code. Creating test is a bit like pseudocoding in that you it requires an understanding of the problem at hand before just jumping in and creating code.

Testing will also help developers avoid feature creep, meaning that it ensures focus on essential piece of the program rather than continuing to add "just one more thing" to the code functionality.

Tests also communicates the intent of the function to other developers. This is very important when it comes to adding additional features to a project.

It also allows for "safe" refactoring of code. Tests will ensure the code outcomes have not changed when a developer is finding different or better ways to solve a problem. During a refactor, tests provide a level of confidence that the app will not break as long as all the tests pass.

Test Driven Development
There is another, and even more powerful benefit to writing tests for your code as well. By writing the tests first then write the code required to make them pass, we as developers, are thinking about our code in a different, more logical way. This philosophy of writing tests, seeing them fail, then creating the code that makes the test pass is called test driven development or TDD. Practicing TDD wil incorporate the tests into the development process ensuring the two pieces are inextricably linked.

Process for Testing
When practicing TDD, we will write the test first! Then we will run the testing suit to see a failing test. Write the appropriate code. Run your testing suit to see your test pass. Once the tests pass, refactor if necessary. This particular implementation of test driven development where the test is written first is called red-green-refactor. First the output is red from the failing test, then green from the passing test, then the code is protected and can be refactored.

Write the test
See the test fail
Write the code
See the test pass
Refactor, if necessary
Jest
Jest is a JavaScript testing framework. The Jest framework is made up of a collection of files called dependencies which contain snippets of code functionality. Using all these code snippets together in the right way will give us the ability to run tests. There are many dependencies to manage and all need to work together in exactly the right way. This is a challenge on its own so in 2016 Facebook created a package manager called yarn to manage all the dependency files. A package manager will install dependencies, manage the dependencies, and give us the terminal commands to execute the tests.

Jest Files and Dependencies
To create a space for writing tests we need a Jest file and the appropriate Jest dependencies. To keep the code organized it is best practice to create a new directory. Inside this directory we will create a file with the extension .test.js which will tell Jest what files to execute. Next we need to install dependencies by running the command $ yarn add jest which will create a new directory called node_modules and two new files called package.json and yarn.lock. These files and directories contain the dependencies and will be managed by the package manager yarn. The code for the test and the function will be in the file with the extension .test.js.

Anatomy of a Jest Test
jest.test.js

describe("greeter", () => {
  it("returns a generic greeting", () => {
    expect(greeter()).toEqual("Hello, LEARN student!")
  })
})
Jest tests consists of the following:

A describe statement

Jest offers us a method called describe that takes an argument of a string and a function
The string is the name of the testing suit
The function will call all the tests in the testing suite
describe("greeter", () => {})
An it statement

The it statements is nested within the describe code block
The it takes an argument of string, which is a statement that explains in regular words what the test is doing and a function
describe("greeter", () => {
  it("returns a generic greeting", () => {})
})
At least one expect statement

The expect statement will call the function
All necessary arguments will be passed in
Multiple expect statements can be used if necessary
describe("greeter", () => {
  it("returns a generic greeting", () => {
    expect(greeter())
  })
})
Matcher

A matcher is a method that contains the expected output of the function
The matcher .toEqual uses strict equality to compare the actual output to the output in the test
describe("greeter", () => {
  it("returns a generic greeting", () => {
    expect(greeter()).toEqual("Hello, LEARN student!")
  })
})
Every Jest test requires a describe method, an it method nested within that describe block, and at least one expect method. In order for the expect to work, it needs to have a matcher method chained onto it which will compare the test output to the actual output.

Running the Test
Now that we have a test we can run the test and practice the red step in the red-green-refactor implementation of test driven development. In the terminal we need to ensure we are in the correct directory. The directory should contain the test file and the Jest dependencies. Now we can run the command $ yarn jest in the terminal. This will use Jest to run the test. We can expect that the test will fail.

 FAIL  ./jest.test.js
  greeter
    ✕ returns a generic greeting (1 ms)

  ● greeter › returns a generic greeting

    ReferenceError: greeter is not defined

      1 | describe("greeter", () => {
      2 |   it("returns a generic greeting", () => {
    > 3 |     expect(greeter()).toEqual("Hello, LEARN student!")
        |     ^
      4 |   })
      5 | })
      6 |

      at Object.expect (jest.test.js:3:5)

Test Suites: 1 failed, 1 total
Tests:       1 failed, 1 total
Yay! A good failure! The test points to exactly where the issue is in the code through an error message and an arrow ^ at the point where it failed. The test is looking for a function called greeter and cannot find one.

We can tell this is the case, because of the ReferenceError: greeter is not defined part of the fail message. This tells us that our test is written correctly, but it failed because when our expect method tried to invoke the function greeter(), it couldn't find it.

It's important that we read our failing messages thoroughly. If there was a syntax error in the test, it would still fail but give a different error. In this case, it failed where we expected it to.

Creating the Code
In the same file as the test, we can define the function that will make the test pass. The function must follow what we defined in the test. In this case, we will have a function named exactly greeter and the return value should match exactly what we put in the matcher method.

jest.test.js

const greeter = () => {
  return "Hello, LEARN student!"
}
Notice: There is no console.log() or function call. Jest handles all of that in the expect method.

Back in the terminal we can run the same $ yarn jest command and examine the outcome.

 PASS  ./jest.test.js
  greeter
    ✓ returns a generic greeting (1 ms)

Test Suites: 1 passed, 1 total
Tests:       1 passed, 1 total
Excellent! Our test passes which is the green step in red-green-refactor. In this case there isn't much to refactor so we can call that a success and move to the task.

Multiple Expect Statements
It is common for a function to have multiple options of output. For example, if a function contains a conditional statement with an if and an else there are two possible outcomes of the function. A well-written test should account for all the possible outcomes of a function. To achieve this, we can add additional expect statements.

An expect statement calls the function and passes in any arguments. In this example, if the argument is the string "yes" the expected output is "eat food" while if the argument value is the string "no", the expected output is "keep coding".

The test will examine only the actual input values and the corresponding expected output.

jest.test.js

describe("areYouHungry", () => {
  it("returns eat food or keep coding based on input", () => {
    expect(areYouHungry("yes")).toEqual("eat food")
    expect(areYouHungry("no")).toEqual("keep coding")
  })
})
Ensuring we are in the correct directory, we can run the command $ yarn jest in the terminal. We can expect that the test will fail.

 FAIL  ./jest.test.js
  greeter
    ✓ returns a generic greeting (1 ms)
  areYouHungry
    ✕ returns eat food or keep coding based on input

  ● areYouHungry › returns eat food or keep working based on input

    ReferenceError: areYouHungry is not defined

      11 | describe("areYouHungry", () => {
      12 |   it("returns eat food or keep working based on input", () => {
    > 13 |     expect(areYouHungry("yes")).toEqual("eat food")
         |     ^
      14 |     expect(areYouHungry("no")).toEqual("keep coding")
      15 |   })
      16 | })

      at Object.expect (jest.test.js:13:5)

Test Suites: 1 failed, 1 total
Tests:       1 failed, 1 passed, 2 total
Notice there are two tests in the test file. One test passes and one fails. The first function greeter() passes but the second function areYouHungry() has not been written yet so that test fails.

Again we can identify this as the reason, because of the error it provides us: ReferenceError: areYouHungry is not defined.

Notice: We don't comment out the previous tests and functions. The purpose of creating tests is to create an automated snapshot of the code base.

Now we can build the function to make the test pass.

jest.test.js

const areYouHungry = (string) => {
  if (string === "yes") {
    return "eat food"
  } else if (string === "no") {
    return "keep coding"
  }
}
And now all the tests should pass.

 PASS  ./jest.test.js
  greeter
    ✓ returns a generic greeting (1 ms)
  areYouHungry
    ✓ returns eat food or keep coding based on input

Test Suites: 1 passed, 1 total
Tests:       2 passed, 2 total
Excellent! Both tests pass!

Troubleshooting Failing Tests
The goal of creating tests is to ensure the code produces the exact expected output. If the test still fails after creating the function it could be an error or typo in the function code.

jest.test.js

describe("areYouHungry", () => {
  it("returns eat food or keep coding based on input", () => {
    expect(areYouHungry("yes")).toEqual("eat food")
    expect(areYouHungry("no")).toEqual("keep coding")
  })
})

const areYouHungry = (string) => {
  if (string === "yes") {
    return "eat food"
  } else if (string === "no") {
    return "keep coing" // tests identify typos
  }
}
If the function output doesn't match what the test is expecting, we will get a failing test.

 FAIL  ./jest.test.js
  greeter
    ✓ returns a generic greeting (1 ms)
  areYouHungry
    ✕ returns eat food or keep coding based on input (1 ms)

  ● areYouHungry › returns eat food or keep coding based on input

    expect(received).toEqual(expected) // deep equality

    Expected: "keep coding"
    Received: "keep coing"

      12 |   it("returns eat food or keep coding based on input", () => {
      13 |     expect(areYouHungry("yes")).toEqual("eat food")
    > 14 |     expect(areYouHungry("no")).toEqual("keep coding")
         |                                ^
      15 |   })
      16 | })
      17 |

      at Object.toEqual (jest.test.js:14:32)

Test Suites: 1 failed, 1 total
Tests:       1 failed, 1 passed, 2 total
When the test fails it will point to the section of code that is producing the error. It will also note what the test was expecting to receive and what it actually received. This show why looking at the full output in the terminal is incredibly important.

Using Variables in a Test
It can often be useful to define variables inside the scope of a test. If we are given test variables (like on the weekly assessments - hint, hint!) putting the test variables inside the test will create an encapsulated code block as well as very clear communication as to the developers intent.

These variables are only available within the scope of the specific test.

jest.test.js

describe("addItem", () => {
  it("adds a given grocery item to the end of the grocery list array", () => {
    const groceryList1 = ["apples", "carrots", "oatmeal"]
    const item1 = "bananas"
    expect(addItem(groceryList1, item1)).toEqual([
      "apples",
      "carrots",
      "oatmeal",
      "bananas"
    ])
    const groceryList2 = ["orange juice", "peanut butter", "cheese"]
    const item2 = "crackers"
    expect(addItem(groceryList2, item2)).toEqual([
      "orange juice",
      "peanut butter",
      "cheese",
      "crackers"
    ])
  })
})
We have organized the test so that each set of test variables is followed by the expected output of that particular data.

 FAIL  ./jest.test.js
  greeter
    ✓ returns a generic greeting (1 ms)
  areYouHungry
    ✓ returns eat food or keep coding based on input
  addItem
    ✕ adds a given grocery item to the end of the grocery list array

  ● addItem › adds a given grocery item to the end of the grocery list array

    ReferenceError: addItem is not defined

      28 |     const groceryList1 = ["apples", "carrots", "oatmeal"]
      29 |     const item1 = "bananas"
    > 30 |     expect(addItem(groceryList1, item1)).toEqual([
         |     ^
      31 |       "apples",
      32 |       "carrots",
      33 |       "oatmeal",

      at Object.expect (jest.test.js:30:5)

Test Suites: 1 failed, 1 total
Tests:       1 failed, 2 passed, 3 total
Once again, we can see that the the other two tests in our file are passing and that our new test failed. The error message ReferenceError: addItem is not defined tells us the addItem function has not yet been created. This is good failure and ensures we are on the right track.

Now we can create the function that will make the test pass.

jest.test.js

const addItem = (groceryList, item) => {
  return [...groceryList, item]
}
Running our test again now that the function has been created, we should see a passing test.

 PASS  ./jest.test.js
  greeter
    ✓ returns a generic greeting (1 ms)
  areYouHungry
    ✓ returns eat food or keep coding based on input
  addItem
    ✓ adds a given grocery item to the end of the grocery list array

Test Suites: 1 passed, 1 total
Tests:       3 passed, 3 total
Focus Your Tests
Troubleshooting is a bit part of creating tests and practicing test driven development. The goal is to create an automated test file where all the tests run together as a snapshot. However, sometimes it can be helpful to focus on particular aspects of a test during troubleshooting. Rather than commented out code, there is a tool that will focus in on one describe block or one it block and ignore everything else.

Replacing the describe method with fdescribe() or focus-describe will tell Jest to skip all other describe blocks.

 PASS  ./jest.test.js
  greeter
    ✓ returns a generic greeting (1 ms)
  areYouHungry
    ○ skipped returns eat food or keep coding based on input
  addItem
    ○ skipped adds a given grocery item to the end of the grocery list array

Test Suites: 1 passed, 1 total
Tests:       2 skipped, 1 passed, 3 total
The same tool can be used to focus on a particular it block. Replace the it method with fit() or focus-it to skip all other it blocks.

everything I just provided above is part of the class/lecture material.  Use that and ONLY that to help me solve these next few prompts 

// ASSESSMENT 3: Coding Practical Questions with Jest

// Please read all questions thoroughly
// Pseudo coding is REQUIRED
// If you get stuck, please leave comments to help us understand your thought process

// Use test driven development to complete the following questions
// Add appropriate dependencies: $ yarn add jest

// Reminder: The test will call your function
// Run the file with the following command: $ yarn jest

// --------------------1) Prompt: Create a function that takes in a number (greater than 2) and returns an array containing the Fibonacci sequence. The length of the array is determined by the argument of the function.

// a) Create a test with expect statements for each of the variables provided

const fibonacciLength1 = 6
// Expected output: [1, 1, 2, 3, 5, 8]

const fibonacciLength2 = 10
// Expected output: [1, 1, 2, 3, 5, 8, 13, 21, 34, 55]

// b) Create the function that makes the test pass.

//Create a for loop/ conditional statement that takes in a number and returns an array. 

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

// Expected output: [10, 15, 20, 45, 60, 65, 100]

// b) Create the function that makes the test pass.