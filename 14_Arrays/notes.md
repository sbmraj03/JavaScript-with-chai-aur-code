# .join in arr
- The join() method is used to concatenate all the elements of an array into a single string. By default, it joins array elements using a comma , as the separator.

- const myArr = ['apple', 'banana', 'orange'];
const newArr = myArr.join();

console.log(newArr); // Output: "apple,banana,orange"


- If you want to use a different separator, you can pass it as an argument to the join() method. 
- const myArr = ['apple', 'banana', 'orange'];
const newArr = myArr.join(' - ');

console.log(newArr); // Output: "apple - banana - orange"


# slice and splice
- const fruits = ['apple', 'banana', 'orange', 'kiwi', 'mango'];
const slicedFruits = fruits.slice(1, 3);
console.log(slicedFruits); // Output: ['banana', 'orange']

- const fruits = ['apple', 'banana', 'orange', 'kiwi', 'mango'];
const removedFruits = fruits.splice(1, 2, 'pear', 'grape');
console.log(fruits);        // Output: ['apple', 'pear', 'grape', 'kiwi', 'mango']
console.log(removedFruits);  // Output: ['banana', 'orange']
