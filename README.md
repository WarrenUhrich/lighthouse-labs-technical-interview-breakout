# Lighthouse Labs | Technical Interview Preparation

[GitHub Repository Branch](https://github.com/WarrenUhrich/lighthouse-labs-technical-interview-breakout/tree/2024-03-27-web-flex-19february2024) | [Vimeo Video Recording](https://vimeo.com/928213545/4bda4fb473?share=copy)

* White-board interview problems...
    * Verbalize your process
    * Ask questions - ask for clarifications
    * If you hit a wall...
        * I can't remember the name of a method...
            * I know I can find this on MDN and just fill this line in
        * If there is no idea...
            * Still discuss next steps - I can research and am confident I can solve this!
            * Stackoverflow... I can easily read and understand the useful parts of example code and apply them to my problem
    * Definitions can be really tough!
        * Practice verbalizing...
            * What is a variable?
            * What is a function?
            * What is NodeJS?
            * What is JavaScript?
        * Building our dictionary
        * Watch for terms when you are working on activities...
        * Flash cards, quiz from family, peers, spouse, friends, Rubber ducks, AI
    * 3 big things to identify in almost ANY programming problem...
        1. INPUT -> where does the data come from? (consider the data-type)
        2. OUTPUT -> where should our answer go? (consider the data-type)
        3. PROCESSING (MAIN LOGIC)
            * Pseudo-code / plan your approach
            * Write your code to the best of your ability
            * Break the problem into the tiniest pieces you can
        (Edge cases, error-handling)

JSDoc:
A comment syntax used for documenting our JavaScript -> Functions / Classes.

```js

// Write a function that will divide one number by another.
// -> Are the numbers in an array? -> Nope, they will be two arguments. 
// -> Do we care about rounding, or number of decimal places? -> Nope.
// -> Should I handle a case where there are no arguments? Or non-number? -> Throw an error.
// -> What happens if we divide by zero? -> Throw a custom error.

/**
 * Divide two numbers.
 * 
 * @param {number} num1 - First number in our division.
 * @param {number} num2 - Second number in our division.
 * @return {number} - Result from dividing num1 and num2.
 */
const divideTwoNums = (num1, num2) => { // 1. INPUTS
    let result;

    if(isNaN(num1) || isNaN(num2) || num1 === undefined || num2 === undefined) {
        throw new Error('Missing or invalid arguments.');
    }

    if(num2 == 0) {
        throw new Error('Cannot divide by zero.');
    }

    // 3. PROCESSING
    // Divide num1 / num2
    // Return result

    result = num1 / num2;

    return Number(result); // 2. OUTPUT
};

const answer = divideTwoNums(10, 2); // 5
console.log('answer:', answer);
```


```js

/**
 * GET /sign-in
 * Displays the sign-in page and form.
 */
app.get('/sign-in', (req, res) => {});

/**
 * POST /sign-in
 * Handles the sign-in form submission.
 * Redirects to /urls on success.
 */
app.post('/sign-in', (req, res) => {});

```
