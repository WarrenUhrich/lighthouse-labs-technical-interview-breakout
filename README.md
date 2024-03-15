# Lighthouse Labs | Technical Interview Preparation

[GitHub Repository Branch](https://github.com/WarrenUhrich/lighthouse-labs-technical-interview-breakout/tree/2024.03.15-web-immersive-national-4march2024) | [Vimeo Video Recording](https://vimeo.com/923888873/23fa7ed2c3?share=copy)

Today we'll discuss and practice good habits regarding TIs!

* White-board interview you won't have access to code-editor / Google search...
    * Verbalize your thought process, let them know how think
    * Ask questions! Ask for clarifications
    * If you hit a wall... let them know how you would fill in this gap or solve this piece of the problem
        * "I would go to MDN to double-check the syntax on this array method"
        * "I've seen a Stack Overflow article on this before, I would just need to double check it"
* Definitions/discussions can be really hard!
    * "Something in memory we can assign a value to"
    * Start building a dictionary
    * Watch for terms when writing code/activities, add them to your dictionary!
    * Try making flash cards or quizzing peers! Maybe a family member can ask you your flash-cards.
* Problem Solving BIG 3 STEPS:
    1. INPUT - parameters if a function - find out what data-types/format this is!
    2. OUTPUT - return if a function - find out what data-type/format this is!
    3. PROCESSING - every step we need to get from input to output!
        * Really focus on breaking this down into the tiniest steps you can.
        * Pseudo-code

```js

// Write a function that will divide one number by another.

/**
 * Divide two numbers.
 * 
 * @param {number} num1 - First number in division operation.
 * @param {number} num2 - Second number in division operation.
 * @return {number} - Result of dividing num1 and num2.
 */
const divideTwoNums = function(num1, num2) { // #1 INPUT
    let result;

    // #3 PROCESSING!?
    if(typeof num1 !== 'number' || typeof num2 !== 'number') {
        throw new Error('Both arguments MUST be numbers.');
    }
    // divide num1 and num2
    result = num1 / num2;

    return Number(result); // #2 OUTPUT
};

console.log(
    divideTwoNums(10, 5) // 2
);
```

Big things you may want to use to start your practice:
* Getting familiar with your dictionary
    * What is a variable? `var`, `let`, `const`
    * What is a function? `parameter`, `argument`, `return`
        * Declaration, Expression, Arrow
    * What is JavaScript? programming language, interpretor, runtime(NodeJS)
* String manipulation
* Array manipulation
* Object manipulation

## Resources

* [JSDoc](https://jsdoc.app/)
* [w3resource Exercises and Solutions](https://www.w3resource.com/javascript-exercises/)
* [How to Learn Computer Programming and Problem Solving Breakout](https://github.com/WarrenUhrich/lighthouse-labs-learning-how-to-learn-and-problem-solving-breakout/tree/2024.03.04-web-immersive-national-04march2024)
