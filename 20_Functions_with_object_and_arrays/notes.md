rest and spread operator

# rest operator
- const numbers = [1, 2, 3, 4, 5];
const [first, second, ...rest] = numbers;

console.log(first); // Output: 1
console.log(second); // Output: 2
console.log(rest); // Output: [3, 4, 5]

# spread opertor
- const numbers1 = [1, 2, 3];
const numbers2 = [4, 5, 6];

const combinedNumbers = [...numbers1, ...numbers2];
console.log(combinedNumbers); // Output: [1, 2, 3, 4, 5, 6]
