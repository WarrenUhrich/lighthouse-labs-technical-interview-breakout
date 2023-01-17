# Lighthouse Labs | Technical Interviews

[GitHub Repository Branch](https://github.com/WarrenUhrich/lighthouse-labs-technical-interview-breakout/tree/2023.01.17-web-flex-day-14nov2022) | [Vimeo Video Recording](https://vimeo.com/790227531/099c178a6f)

* [X] Talking the Talk
* [X] Walking the Walk
* [X] Example

## Talking the Talk

Different companies will have different methods of identifying if an applicant is a good fit for a position they have open. While some steps are focused more on soft skills or a general culture fit, the technical interview is an opportunity to get an idea of your knowledge and approach to problem solving.

You may have heard a variety of things about technical interviews, and many of them may be true. It is important to note that most will not involve deep technical knowledge surrounding advanced algorithms or extremely complex problems. These may come up in very competitive positions, like those for software engineers at huge corporations like Facebook, Amazon, Microsoft, and Google, but are not the norm for smaller local companies, especially those open to hiring junior developers trying to get their start in the industry. Simply put, most any junior developer wouldn't have this knowledge, so it makes little sense to jump into those sorts of concepts.

Most interviews should focus instead, then, on concepts and technologies they employ in their project(s). It pays off to do some research on the stack they use and to learn a bit about how they build things. See if you can do some research to understand the pros and cons of their stack, and common problems that it aids in alleviating.

Some concepts persist across almost all languages and stacks:

* Front-end Technologies
  * HTML5
  * CSS3
    * Fonts
    * Box Model
    * Flex
    * Grid
    * Media Queries
    * Common Frameworks (Bootstrap, Tailwind)
    * Common Language Extensions (Sass, Less)
  * JavaScript
    * Ajax
    * Common Libraries (jQuery, React)
    * Common Language Extensions (TypeScript, CoffeeScript)
* Back-end Technologies
  * Web Server
  * Database
    * SQL Language (CRUD, JOINs)
    * Relationships (One-to-One, One-to-Many, Many-to-Many)
    * ERD
  * Scripts (Interpreted Programming Language Files or Compiled Executables)
    * MVC
    * Routing
* Language Concepts and Constructs
  * Variables and Constants
  * Data-Types (Boolean, String, Integer, Float / Double)
  * Arithmetic Operators (`+`, `-`, `*`, `/`, `%`)
  * Comarison Operators (`==`, `<`, `>`)
  * Indexed Arrays / Lists
  * Associative Arrays / Maps / Hashes
  * Functions
    * Parameters
    * Return
    * Arguments
    * Envocation
  * Classes
    * Objects
    * Methods
    * Attributes / Properties
    * Access Modifiers (Public, Protected, Private)
    * Object-Oriented Tenants
      * Abstraction
      * Encapsulation
      * Inheritance
      * Polymorphism

Being able to provide definitions and talk-the-talk on important concepts will help you put your experience and practice on display in discussion portions of a technical interview. It is definitely valuable to practice going over these and other topics with a peer or friend. These are all things that can be difficult to articulate, explain, or even find relevant words to discuss; the more you practice this, the easier it will be!

## Walking the Walk

It is one thing to talk about software, programming, and development. It is another to sit in the driver's seat and write code. Many interviews will ask that you to provide a code solution to a problem, discuss a sample, or complete a feature in some existing code. This can be tricky, but it is important to maintain your composure. Breathe and know that this is like any exercise in Compass, or any problem you may have encountered in your projects. Stick to your core problem solving process, and feel encouraged to speak through your process aloud to give the interviewer a window into how you think and approach problems.

Your goals here:

1. Breathe and compose yourself.
2. Speak your process aloud.
3. Follow your problem solving process.

Any problem can be broken down into smaller pieces, don't feel rushed. Rushing often causes us to lump things together, making a mountain of a problem. We can break this down and focus on one piece of the solution at a time. Firstly, you need to read the question or problem very carefully. Understand what it is asking; if you have questions, ask them and get that clarification. It is of no use to begin travelling in the wrong direction, so make sure you have a good idea as to what the goal is before embarking.

Next identify any input(s). What information would we need from the user, a data source, or as a parameter for this to work properly?

Then, the ouput(s). What result should we get, should everything go as expected. Should we worry about edge cases in which the unexpected occurs, or an error is thrown?

Finally, processing. The trickiest part, but the most important. Given the inputs, how are we going to get the expected output? This is our actual logic, and how we tackle the problem. Do your best to compare input and output, and write out steps that are necessary to get to that expected result.

1. Read and comprehend the problem (ask questions!)
2. Identify input(s)
3. Identify output(s)
4. Add processing steps

## Example

Assume you are asked to solve the following:

> I need a function that can add three numbers and give me the total they all add up to.

Let's go through our steps, one at a time. These steps are carefully chosen to fit any problem.

### 1. Read and Comprehend the Problem

We should make note of some key words in this statement: `function`, `three numbers`, `total`, and `add`.

Okay, so they want a function that adds three numbers, it sounds like. That's our goal. We'll continue onto our next step if we're feeling okay about this and have no questions.

It can be a helpful habit to begin a comment block to help describe your function:

```JavaScript
/**
 * Calculates sum of three numbers
 */
```

### 2. Identify Input(s)

So, for a solution to be found for this particular problem, it sounds like we will need input. Our input is: `three numbers`.

If we're writing a `function`, we can accept input via **parameters**.

If this were a command-line software, input might mean `process.argv` or `process.stdin`, if it were a web page it could mean a form `<input>` element or an Express application's `req.params`, `req.query`, `req.cookies`, `req.session`, `req.body`, or another form of input; pay attention to the context you're in! 

Let's update our comment, and begin writing our function, [follow JSDoc syntax](https://en.wikipedia.org/wiki/JSDoc):

```JavaScript
/**
 * Calculates sum of three numbers
 *
 * @param {number} num1 First number to add.
 * @param {number} num2 Second number to add.
 * @param {number} num3 Third number to add.
 */
function sumOfThreeNums(num1, num2, num3) {
}
``` 

That's a fantastic start! Now we know if we envoke our function, we'll be able to pass the three expected arguments:

```JavaScript
sumOfThreeNums(1, 2, 3);
```

Of course, it won't do much yet, but the ball is rolling. Onto our next step!

### 3. Identify Output(s)

We'll now tease out the expected output. What should our result be? According to our initial problem, they're asking for `total they all add up to`. That what adds up to? Our inputs! Alright, let's reflect this now in our comment and code, we want our `function` to return a `sum`. This might be a good time to ask if they want our function to give back a value (`return`) or display the value (`console.log`). When in doubt, `return`, as this makes the function more [*pure*](https://en.wikipedia.org/wiki/Pure_function) and re-usable.

```JavaScript
/**
 * Calculates sum of three numbers
 *
 * @param {number} num1 First number to add.
 * @param {number} num2 Second number to add.
 * @param {number} num3 Third number to add.
 * @return {number} The sum (total) of the params.
 */
function sumOfThreeNums(num1, num2, num3) {
  let sum = 0;

  // Processing / calculations go here.

  return sum;
}
```

With both our inputs and outputs in-place, we now know what the core of our function looks like. We can take values in, and give back a value. With this ready to go, we can begin the real work! Note how clear our code and intention is so far. This is great for both ourselves and the interviewer to understand what we're doing. Be sure to narrate your process to give further insight.

### 4. Add Processing Steps

Now the trickest part. Identifying the steps we need to take to get from the input, to the desired output. This is example is quite simple, so we're not so likely to get confused here, but most problems we come across have a number of different steps. Be sure you break any problem down into the tiniest pieces you can in order to achieve your goal. We don't want to climb a mountain, we want to focus on one little step at a time.

```JavaScript
/**
 * Calculates sum of three numbers
 * 
 * @param {number} num1 First number to add.
 * @param {number} num2 Second number to add.
 * @param {number} num3 Third number to add.
 * @return {number} The sum (total) of the params.
 */
function sumOfThreeNums(num1, num2, num3) {
  let sum = 0;

  // Add three numbers together.
  sum = num1 + num2 + num3;

  return sum;
}
```

And there we have it! We could always give it a quick test run to confirm things are working as we expect:

```JavaScript
console.log('sumOfThreeNums(1, 2, 3) =', sumOfThreeNums(1, 2, 3)); // Expected: 6
console.log('sumOfThreeNums(5, 5, 5) =', sumOfThreeNums(5, 5, 5)); // Expected: 15
```

### 5. Explanation and Potential Edge-Cases / Improvements

Once your solution is complete, ensure it is sufficiently explained. Why did you make the choices you did?

After you've communicated your process and solution, it is a good idea to also identify potential edge-cases or improvements that could be added into your solution. Are there any improvements you could think of for the function we've prepared?

For example, suppose a developer calls our function and passes strings, instead of numbers. What happens then?

```JavaScript
console.log('sumOfThreeNums(1, \'2\', 3) =', sumOfThreeNums(1, '2', 3)); // Expected: 6; Result: '123'
```

We can resolve this bug by coercing, or converting, our parameters (`num1`, `num2`, and `num3`) into numbers:

```JavaScript
/**
 * Calculates sum of three numbers
 * 
 * @param {number} num1 First number to add.
 * @param {number} num2 Second number to add.
 * @param {number} num3 Third number to add.
 * @return {number} The sum (total) of the params.
 */
function sumOfThreeNums(num1, num2, num3) {
  let sum = 0;

  // Add three numbers together.
  sum = Number(num1) + Number(num2) + Number(num3);

  return sum;
}
```

Now we should get our expected result:

```JavaScript
console.log('sumOfThreeNums(1, \'2\', 3) =', sumOfThreeNums(1, '2', 3)); // Expected: 6
```

We could explore other improvements too. Maybe we can make parameters optional, so you can add *up to three* numbers. Or we could allow addition of unlimited numbers!

There is an opportunity for us as well to include checks on our parameters to ensure they're the correct data-type, and throw an error or prompt the user for a different input. We could use a `try {} catch() {}` to more gracefully handle unexpected errors in our code as well. There are almost always questions and suggestions we can use to explore better code with the interviewer (and in-general!)

## Takeaways

Equipped with the above, what should you do to prepare for a technical interview?

1. Study the Essentials
2. Solve Practice Problems (Comprehend, Inputs, Outputs, Processing)
3. Run Practice Interviews with a Peer, Explaining Your Approach Aloud

You've got this! Get out there and make yourself proud. If at first you don't succeed, try, try again!

## Resources

Want to hear some more people talk on this subject, or explore some practice questions? Check out the resources below:

* [Video: Fullstack Academy's "Whiteboard Coding Interviews: 6 Steps to Solve Any Problem"](https://www.youtube.com/watch?v=DIR_rxusO8Q)
* [Video: Catherine Li's "Must Know JavaScript Interview Questions"](https://www.youtube.com/watch?v=ucn4jAPWBdQ)
* [Video: Mayuko's "How to prepare for Technical Interviews"](https://www.youtube.com/watch?v=FTN_93Px-Qc)
* [Video: CS Dojo's "Introduction to Big O Notation and Time Complexity"](https://www.youtube.com/watch?v=D6xkbGLQesk)
* [Video: Fireship's "How to NOT Fail a Technical Interview"; a Humourous Look at TIs](https://www.youtube.com/watch?v=1t1_a1BZ04o)
* [Exercises: LeetCode; Sample Questions and an in-Browser Editor](https://leetcode.com/explore/)
* [Exercises: Indeed's "Top SQL Server Interview Questions in 2023 (With Answers)"](https://www.indeed.com/career-advice/interviewing/sql-server-interview-questions-and-answers-for-experienced)
* [Exercises: w3resource's "JavaScript - Exercises, Practice, Solution"](https://www.w3resource.com/javascript-exercises/)
