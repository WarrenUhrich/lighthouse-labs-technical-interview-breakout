// I need a function that can add three numbers and give me the
// total they all add up to.

// Ask about output - should this return or console.log()? 'return'
// Is this just once, or should it be repeatable? 'a function that could be used again and again'
// How are these numbers given to us? Is there an array, or is it just numbers? '3 separate numbers, no array'


// 1 inputs
// 2 outputs
// 3 processing

/**
 * Addition of 3 Numbers
 * 
 * @param {number} num1 First number to add.
 * @param {number} num2 Second number to add.
 * @param {number} num3 Third number to add.
 * @return {number} Sum of the above three numbers.
 */
function addThreeNums(num1, num2, num3) { // Ask if the company has any preference for function syntax.
    let sum = 0;

    // I want to make sure that all three values ARE numbers, if possible.
    num1 = Number(num1);
    num2 = Number(num2);
    num3 = Number(num3);

    // I want to add the three numbers together.
    sum = num1 + num2 + num3;

    return sum;
}

console.log(
    addThreeNums(1, 2, 3) // 6
);

console.log(
    addThreeNums(4, 5, 6) // 15
);
