/**
 * Add three numbers.
 * 
 * @param {number} num1
 * @param {number} num2
 * @param {number} num3
 * @return {number} Sum of three params.
 */
function addThreeNumbers(num1=0, num2=0, num3=0) { // Input.
    let sum;

    // Add three numbers together.
    sum = Number(num1) + Number(num2) + Number(num3);

    return sum; // Output.
}

console.log(
    'addThreeNumbers(1, 2, 3) =',
    addThreeNumbers(1, '2', 3) // Expected: 6
);

console.log(
    'addThreeNumbers(13) =',
    addThreeNumbers(13) // Expected: 13
);

console.log(
    'addThreeNumbers(1, 3) =',
    addThreeNumbers(1, 3) // Expected: 4
);

console.log(
    'addThreeNumbers() =',
    addThreeNumbers() // Expected: 0
);
