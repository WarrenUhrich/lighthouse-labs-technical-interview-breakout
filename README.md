# Lighthouse Labs | TI Prep Breakout

[Vimeo Video Recording](https://vimeo.com/868926102/f9bd41bd16?share=copy)

* [X] Approaching Whiteboard Questions
* [X] Example(s)

## Approaching a Whiteboard Question

* Physical whiteboard, paper, Google Jamboard/Word Doc
* Not necessarily looking for 100% syntax accuracy
* Most important piece is the problem solving!
    * How should we solve this?
    * Is there a method that would help here?
    * If statement?
    * For loop? What kind of loop might best?
* Take your time, breathe, think...
* READ the prompt... understand what it is asking. Consider doing this aloud.
* Ask questions!
* Speak aloud through your solution...
* PROBLEM SOLVING:
    1. INPUTS - what is the input? Where does it come from?
    2. OUTPUT(s) - what is end result/value?
    3. PROCESSING - how do we get from input to output?
        * Break things down into major steps
        * Break down those major steps into smaller steps
        * Keep breaking down steps until you can't anymore

## Examples

### Example 1:

You are working on a Node.js application that manages a list of employees in a company. The employee data is represented as an `array` of `arrays`, where each inner array contains information about an employee. The inner array follows the format
`[name, position, department]`.

Your task is to implement a `function` that retrieves all the employees in a specific department from the employee data array.

Write a function called `getEmployeesByDepartment` that takes two parameters: `employees` (the array of employee data) and `department` (the department name). The function should return an `array` of employees who belong to the specified department.

Here are the requirements for the function:

* The employees array contains multiple inner arrays, where each inner array represents an employee and contains three elements: name, position, and department. For example: `['John Doe', 'Software Engineer', 'Engineering']`.
* The function should search through the employees array and extract all the employees who belong to the specified department.
* The function should return an `array` of employee names who belong to the specified department.
* If there are no employees in the specified department, the function should return an empty array.
* The function should not modify the original employees array.
* Use a callback in your solution.

Your task is to implement the `getEmployeesByDepartment` function according to the requirements.

Here is an example data-set,

```js
const employees = [
  // Name:         // Position:         // Department:
  ['John Doe',     'Software Engineer', 'Engineering'],
  ['Jane Smith',   'Product Manager',   'Product'],
  ['Mike Johnson', 'Sales Executive',   'Sales'],
  ['Emily Brown',  'HR Coordinator',    'Human Resources'],
  ['David Lee',    'Quality Assurance', 'Engineering']
  // 0             // 1                 // 2
];
```

```js

/**
 * Retrieve list of employee names from specified department
 * 
 * @param {Array<Array>} employees Array of employees.
 * @param {string} department Name of target department.
 * @return {Array<string>} Employee names.
 */
function getEmployeesByDepartment(employees, department) {
    const employeeNames = [];

    // loop through employees
    employees.forEach(function(employee) {
        // if department value = employee[2] value (their department)
        const employeeDepartment = employee[2];
        if(department === employeeDepartment) {
            // push employee[0] (employee name) into the employeeNames array
            const employeeName = employee[0];
            employeeNames.push(employeeName);
        }
    });

    return employeeNames;
}

console.log(
    "getEmployeesByDepartment(employees, 'Engineering'):",
    getEmployeesByDepartment(employees, 'Engineering')
);

```
