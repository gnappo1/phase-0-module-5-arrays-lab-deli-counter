# Deli Counter Lab

## Learning Goals

- Practice building functions that use iteration and controlling their return
  values
- Practice manipulating lists (adding elements, removing elements, etc.)

## Key Vocab

- **Interpreter**: A program that executes other programs. JavaScript programs
require the JavaScript interpreter to be installed on your computer so that they
can be run.
- **Data Type**: A specific kind of data that determines which actions can be performed on different data items. The JavaScript interpreter uses these types to determine the behavior of variables and expressions.
- **Exception**: An error condition that can be predicted and handled without
causing a program to crash. In JavaScript, exceptions can be caught and managed using try-catch blocks.
- **Code Block**: A collection of code statements that are executed together. JavaScript uses curly braces {} to define code blocks.
- **Function**: A named block of code that performs a specific task when called. Functions are a fundamental building block of JavaScript programs.
- **Scope**: The context in which variables are accessible in a JavaScript program. Variables declared within a specific scope are only accessible within that scope.

## Instructions

To get started, run `npm install` to install the necessary dependencies. Then run `npm test` to run
your tests. Use these instructions and mocha's error messages to complete
your work in the index.js file.
**Please remember that the tests will be responsible for providing the array with the current line of people**. Your functions should work independently of the array provided, which is why it's given as argument. When all the tests are passing or during debugging, feel free to invoke the functions with an array of your choosing as argument. Then run the file with `node index.js` to see the output of your own test example.

Example usage for your own testing:

```js
myOwnTestArray = []
takeANnumber(myOwnTestArray, "Ada") //=> Welcome, Ada. You are number 1 in line.
takeANnumber(myOwnTestArray, "Grace") //=> Welcome, Grace. You are number 2 in line.
takeANnumber(myOwnTestArray, "Kent") //=> Welcome, Kent. You are number 3 in line.

line(myOwnTestArray) //=> "The line is currently: 1. Ada 2. Grace 3. Kent"

nowServing(myOwnTestArray) //=> "Currently serving Ada."

line(myOwnTestArray) //=> "The line is currently: 1. Grace 2. Kent"

takeANnumber(myOwnTestArray, "Matz") //=> Welcome, Matz. You are number 3 in line.

line(myOwnTestArray) //=> "The line is currently: 1. Grace 2. Kent 3. Matz"

nowServing(myOwnTestArray) //=> "Currently serving Grace."

line(myOwnTestArray) //=> "The line is currently: 1. Kent 2. Matz"
```

### `line(list)`

Build the `line()` function that given as argument an array representing the current line of people, will return everyone's current place in the line. 
For example if there are 3 people in line `["Ada", "Grace", "Kent"]`, it should return `"The line is currently: 1. Ada 2. Grace 3. Kent"`.
If there is nobody in line, it should return `"The line is currently empty."`.

### `take_a_number(list, newPerson)`

Build a function that a new customer will use when entering the deli. The
`take_a_number()` function should accept two arguments, the list for the current
line of people, and a string containing the name of the person
joining the end of the line. The function should return the
person's name along with their position in line.

**Top-Tip:** Remember that people like to count from 1, not from 0 like
computers.

### `now_serving()`

Build the `now_serving()` function which should return the next
person in line and then remove them from the front. If there is nobody in line,
it should return `"There is nobody waiting to be served!"`.


## Resources

- [MDN: Add List Items with Push][add-to-list-push]
- [MDN: Add List Items With Unshift][add-to-list-unshift]
- [MDN: Remove a List Item with Shift][remove-from-list-shift]
- [MDN: Remove a List Item with Pop][remove-from-list-pop]
- [While Loops][iterate-with-index]

[add-to-list-push]: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/push
[add-to-list-unshift]: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/unshift
[remove-from-list-shift]: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/shift
[remove-from-list-pop]: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/pop
[iterate-with-index]: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Loops_and_iteration#while_statement