/**
 * Please provide a way to sum three numbers.
 * 
 * * Array of numbers, expect this as an argument for a function
 * * Yes, it should be re-usable
 * * Decimal and negative numbers are fair game!
 * * If a non-number is passed, please show an error message
 * * Sum as a number is a-OK; please return this value
 * * However you feel is efficient, please take your own approach
 * * Arrow function
 * * Please show an error message if there are more or less than 3 nums
 * * For error messages, please just return
 */

/**
 * Sum three numbers
 * 
 * @param {Array<number>} threeNumArr An array of three numbers to add
 * @return {number} Sum of the three numbers
 */
const sumThreeNums = (threeNumArr) => {
    let sum = 0;

    if(threeNumArr.length === 0) {
        return 'Empty array';
    }
    else if(threeNumArr.length < 3) {
        return 'Too few numbers';
    }
    else if(threeNumArr.length > 3) {
        return 'Too many numbers';
    }

    for(const num of threeNumArr) {
        if(typeof num !== 'number') {
            return 'Non-number encountered';
        }

        sum += num;
    }

    return sum;
};

console.log( // Success case
    'sumThreeNums([1.5, -2, 3]), expected: 2.5, actual:',
    sumThreeNums([1.5, -2, 3])
);

console.log( // Empty array case
    'sumThreeNums([]), expected: "Empty array", actual:',
    sumThreeNums([])
);

console.log( // Less than 3 numbers case
    'sumThreeNums([1]), expected: "Too few numbers", actual:',
    sumThreeNums([1])
);

console.log( // Greater than 3 numbers case
    'sumThreeNums([1, 2, 3, 4]), expected: "Too many numbers", actual:',
    sumThreeNums([1, 2, 3, 4])
);

console.log( // Non-number encountered
    'sumThreeNums([1, 2, "3"]), expected: "Non-number encountered", actual:',
    sumThreeNums([1, 2, "3"])
);


// Is the input numbers? Strings? What's the format?
// Should the solution be re-usable? A function?
// Will the numbers be whole? Decimal? Fractions?
// How shall we handle negative numbers, if at all?
// Where/what should we output? Just the sum as a number?
// Where/how do we receive input?
// Do we console log it? Or return? Where do we show the answer?
// Is there a preference in approach for the solution?
   // Any tools, methods, language, etc. that should be utilized.
   // What sort of function is preferred?
   // * declaration
   // * expression
   // * arrow
// Is there a code-style followed by the company? Anything I should keep in mind?
// What should we do with non-numbers? Or will this not come up?
// How should we handle cases where there are more, or less,
   // than three numbers in the array?
