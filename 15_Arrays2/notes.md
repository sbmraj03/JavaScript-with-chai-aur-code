- concatenation of array returns new array and the original array remains as it is while push or pop manipulates the original array doesnt return any new array
-  spread operator in array is replacement of concatenation method
  
# spread operator
const all_new_heros = [...marvel_heros, ...dc_heros]

# .from 
// Example 1: Using Array.from() with a string
const str = 'hello';
console.log(Array.from(str)); // Output: ['h', 'e', 'l', 'l', 'o']

// Example 2: Using Array.from() with a Set
const set = new Set([1, 2, 3]);
console.log(Array.from(set)); // Output: [1, 2, 3]

// Example 3: Using Array.from() with a Map
const map = new Map([[1, 'one'], [2, 'two'], [3, 'three']]);
console.log(Array.from(map)); // Output: [[1, 'one'], [2, 'two'], [3, 'three']]

