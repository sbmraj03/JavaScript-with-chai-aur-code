// for of loop cannot iterate map

# for each
- array.forEach(function(currentValue, index, array) {
    // Your code here
});

- currentValue: Represents the current element in the   array.
- index: Represents the index of the current element in the array.
- array: Represents the array that forEach is being applied to.
$ However, note that you don't need to include all three parameters in your callback function if you don't need them. For example, if you only need to access the current element, you can define your callback function with just one parameter. $

- var fruits = ["apple", "banana", "orange"];

fruits.forEach(function(fruit, index, array) {
    console.log("Fruit:", fruit);
    console.log("Index:", index);
    console.log("Array:", array);
});

- Fruit: apple
Index: 0
Array: ["apple", "banana", "orange"]
Fruit: banana
Index: 1
Array: ["apple", "banana", "orange"]
Fruit: orange
Index: 2
Array: ["apple", "banana", "orange"]
  


# map
- Using forEach() method:
const myMap = new Map([
    ['a', 1],
    ['b', 2],
    ['c', 3]
]);

myMap.forEach((value, key) => {
    console.log(key, value);
});

Using for...of loop:
const myMap = new Map([
    ['a', 1],
    ['b', 2],
    ['c', 3]
]);

for (const [key, value] of myMap) {
    console.log(key, value);
}
Using entries() method with destructuring:
The entries() method returns an iterable object that contains the key-value pairs for each element in the Map object.

javascript
Copy code
const myMap = new Map([
    ['a', 1],
    ['b', 2],
    ['c', 3]
]);

for (const [key, value] of myMap.entries()) {
    console.log(key, value);
}
Using keys() method:
The keys() method returns an iterable object that contains the keys for each element in the Map object.

javascript
Copy code
const myMap = new Map([
    ['a', 1],
    ['b', 2],
    ['c', 3]
]);

for (const key of myMap.keys()) {
    console.log(key);
}
Using values() method:
The values() method returns an iterable object that contains the values for each element in the Map object.

javascript
Copy code
const myMap = new Map([
    ['a', 1],
    ['b', 2],
    ['c', 3]
]);

for (const value of myMap.values()) {
    console.log(value);
}