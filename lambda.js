// Sample Lambda Function in JavaScript

const addNumbers = (a, b) => {
    return a + b;
};

// Example usage
console.log(addNumbers(5, 3)); // Output: 8

// Example of a lambda function with no parameters
const greet = () => {
    console.log("Hello, World!");
};

greet();

const getEvenNumbers = (numbers) => {
    return numbers.filter(num => num % 2 === 0);
};

const numbers = [1, 2, 3, 4, 5, 6];
console.log(getEvenNumbers(numbers));

const squareNumbers = (numbers) => {
    return numbers.map(num => num * num);
};

const nums = [1, 2, 3, 4, 5];
console.log(squareNumbers(nums));